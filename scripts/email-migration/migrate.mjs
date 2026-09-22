/**
 * Kopieert e-mail van Mijndomein naar Verpex via IMAP.
 *
 * Leest alleen op de bron. Verwijdert daar niets.
 * Berichten die op Verpex al bestaan (zelfde Message-ID) worden overgeslagen,
 * dus je kunt het script opnieuw draaien.
 *
 * Gebruik:
 *   cd scripts/email-migration
 *   npm install
 *   copy config.example.json config.json
 *   node migrate.mjs --dry-run
 *   node migrate.mjs
 *
 * Opties:
 *   --config pad     ander configbestand
 *   --dry-run        tellen, niets kopiëren
 *   --limit N        maximaal N nieuwe berichten per account
 *   --account adres  alleen dit adres
 */

import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ImapFlow } from "imapflow";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const args = {
    config: path.join(__dirname, "config.json"),
    dryRun: false,
    limit: Infinity,
    account: null,
  };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--config") args.config = path.resolve(argv[++i] ?? "");
    else if (arg === "--limit") args.limit = Number(argv[++i]);
    else if (arg === "--account") args.account = argv[++i] ?? "";
    else throw new Error(`Onbekende optie: ${arg}`);
  }
  if (args.limit !== Infinity && (!Number.isInteger(args.limit) || args.limit < 1)) {
    throw new Error("--limit moet een geheel getal van 1 of hoger zijn");
  }
  return args;
}

function printHelp() {
  console.log(`Kopieer mailboxen van Mijndomein naar Verpex.

  node migrate.mjs [--dry-run] [--limit N] [--account adres] [--config pad]

Maak eerst dezelfde mailboxen aan in Verpex (cPanel > Email Accounts).
Vul daarna de wachtwoorden in config.json. Dat bestand blijft lokaal.
`);
}

function validDate(value) {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function copyFlags(flags) {
  if (!flags) return undefined;
  const list = [...flags].filter((flag) => flag !== "\\Recent");
  return list.length ? list : undefined;
}

function messageKey(envelope, internalDate, size) {
  const id = envelope?.messageId?.trim().toLowerCase();
  if (id) return `id:${id}`;
  const subject = envelope?.subject ?? "";
  const from = envelope?.from?.[0]?.address ?? "";
  const date = internalDate ? new Date(internalDate).toISOString() : "";
  return `meta:${date}|${size ?? ""}|${from}|${subject}`;
}

function connect(label, host, port, user, pass) {
  const client = new ImapFlow({
    host,
    port,
    secure: true,
    auth: { user, pass },
    logger: false,
    connectionTimeout: 30_000,
    greetingTimeout: 30_000,
    socketTimeout: 120_000,
  });
  client.on("error", (error) => {
    console.error(`[${label}] verbinding: ${error.message}`);
  });
  return client;
}

async function listMailboxes(client) {
  const boxes = await client.list();
  return boxes
    .filter((box) => box.path && !box.flags?.has("\\Noselect"))
    .sort((a, b) => a.path.split(a.delimiter || "/").length - b.path.split(b.delimiter || "/").length);
}

function toDestPath(sourcePath, sourceDelim, destDelim) {
  if (!sourceDelim || !destDelim || sourceDelim === destDelim) return sourcePath;
  return sourcePath.split(sourceDelim).join(destDelim);
}

async function ensureMailbox(client, mailboxPath) {
  if (mailboxPath.toUpperCase() === "INBOX") return;
  try {
    await client.mailboxCreate(mailboxPath);
  } catch (error) {
    const message = String(error?.responseText || error?.message || error);
    if (!/already exists|ALREADYEXISTS/i.test(message)) throw error;
  }
  await client.mailboxSubscribe(mailboxPath).catch(() => {});
}

async function indexDestination(client, mailboxPath) {
  const keys = new Set();
  let lock;
  try {
    lock = await client.getMailboxLock(mailboxPath, { readOnly: true });
  } catch {
    return keys;
  }
  try {
    if (!client.mailbox?.exists) return keys;
    for await (const msg of client.fetch("1:*", {
      envelope: true,
      internalDate: true,
      size: true,
    })) {
      keys.add(messageKey(msg.envelope, msg.internalDate, msg.size));
    }
  } finally {
    lock.release();
  }
  return keys;
}

async function copyMailbox(source, destination, sourceBox, destPath, stats, limit) {
  const existing = await indexDestination(destination, destPath);
  let lock;
  try {
    lock = await source.getMailboxLock(sourceBox.path, { readOnly: true });
  } catch (error) {
    console.error(`  ${sourceBox.path}: openen mislukt (${error.message})`);
    stats.failed += 1;
    return;
  }

  try {
    const total = source.mailbox?.exists ?? 0;
    if (!total) {
      console.log(`  ${sourceBox.path}: leeg`);
      return;
    }

    let copied = 0;
    let skipped = 0;
    let failed = 0;
    let capped = false;
    const pending = [];

    for await (const msg of source.fetch("1:*", {
      uid: true,
      flags: true,
      envelope: true,
      internalDate: true,
      size: true,
    })) {
      const key = messageKey(msg.envelope, msg.internalDate, msg.size);
      if (existing.has(key)) {
        skipped += 1;
        continue;
      }
      if (stats.copied + pending.length >= limit) {
        capped = true;
        continue;
      }
      pending.push({
        uid: msg.uid,
        key,
        flags: copyFlags(msg.flags),
        internalDate: validDate(msg.internalDate),
      });
    }

    for (const msg of pending) {
      if (stats.dryRun) {
        copied += 1;
        stats.copied += 1;
        continue;
      }

      const full = await source.fetchOne(String(msg.uid), { source: true }, { uid: true });
      if (!full?.source) {
        failed += 1;
        stats.failed += 1;
        continue;
      }

      try {
        const uploaded = await destination.append(destPath, full.source, msg.flags, msg.internalDate);
        if (!uploaded) throw new Error("server weigerde het bericht");
        existing.add(msg.key);
        copied += 1;
        stats.copied += 1;
        if (copied % 25 === 0) {
          console.log(`  ${sourceBox.path}: ${copied} gekopieerd...`);
        }
      } catch (error) {
        failed += 1;
        stats.failed += 1;
        console.error(`  ${sourceBox.path}: bericht ${msg.uid} mislukt (${error.message})`);
      }
    }

    stats.skipped += skipped;
    const verb = stats.dryRun ? "zou kopiëren" : "gekopieerd";
    console.log(`  ${sourceBox.path} -> ${destPath}: ${copied} ${verb}, ${skipped} al aanwezig, ${failed} mislukt`);
    if (capped) console.log("  limiet bereikt, de rest volgt in een volgende run zonder --limit");
  } finally {
    lock.release();
  }
}

async function migrateAccount(config, account, options) {
  const email = account.email?.trim();
  if (!email || !account.sourcePassword || !account.destinationPassword) {
    throw new Error(`Account ${email || "(leeg)"} mist een e-mailadres of wachtwoord in config.json`);
  }

  console.log(`\n${email}`);
  const source = connect("bron", config.source.host, config.source.port, email, account.sourcePassword);
  const destination = connect(
    "verpex",
    config.destination.host,
    config.destination.port,
    account.destinationEmail?.trim() || email,
    account.destinationPassword,
  );

  const stats = { copied: 0, skipped: 0, failed: 0, dryRun: options.dryRun };
  try {
    await source.connect();
    await destination.connect();
    const boxes = await listMailboxes(source);
    const destBoxes = await listMailboxes(destination);
    const destDelim = destBoxes[0]?.delimiter || ".";

    for (const box of boxes) {
      if (stats.copied >= options.limit) break;
      const destPath = toDestPath(box.path, box.delimiter, destDelim);
      if (!options.dryRun) await ensureMailbox(destination, destPath);
      await copyMailbox(source, destination, box, destPath, stats, options.limit);
    }
  } finally {
    await source.logout().catch(() => source.close());
    await destination.logout().catch(() => destination.close());
  }

  const verb = options.dryRun ? "te kopiëren" : "gekopieerd";
  console.log(`Klaar voor ${email}: ${stats.copied} ${verb}, ${stats.skipped} overgeslagen, ${stats.failed} mislukt`);
  return stats;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printHelp();
    return;
  }

  let raw;
  try {
    raw = await readFile(options.config, "utf8");
  } catch {
    throw new Error(
      `Config niet gevonden: ${options.config}\nKopieer config.example.json naar config.json en vul de wachtwoorden in.`,
    );
  }

  const config = JSON.parse(raw);
  if (!config.source?.host || !config.destination?.host || !Array.isArray(config.accounts)) {
    throw new Error("config.json moet source.host, destination.host en accounts bevatten");
  }
  config.source.port ??= 993;
  config.destination.port ??= 993;

  const accounts = config.accounts.filter((account) => {
    if (!options.account) return true;
    return account.email?.toLowerCase() === options.account.toLowerCase();
  });
  if (!accounts.length) throw new Error(`Geen account gevonden voor ${options.account}`);

  let failed = 0;
  for (const account of accounts) {
    const stats = await migrateAccount(config, account, options);
    failed += stats.failed;
  }
  if (failed) process.exitCode = 1;
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  main()
    .then(() => {
      process.exit(process.exitCode ?? 0);
    })
    .catch((error) => {
      console.error(error.message || error);
      process.exit(1);
    });
}

export { messageKey, toDestPath, parseArgs };
