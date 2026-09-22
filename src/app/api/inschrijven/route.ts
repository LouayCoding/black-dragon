import { NextResponse } from 'next/server'

const RECIPIENT = 'info@taekwondoblackdragon.nl'
const FROM =
  process.env.RESEND_FROM ??
  'Taekwondo Black Dragon <inschrijven@taekwondoblackdragon.nl>'

type RegistrationBody = {
  firstName?: unknown
  lastName?: unknown
  email?: unknown
  phone?: unknown
  birthDate?: unknown
  parentName?: unknown
  parentEmail?: unknown
  parentPhone?: unknown
  message?: unknown
}

function clean(value: unknown, max = 500) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function row(label: string, value: string) {
  return `${label}: ${value}`
}

export async function POST(request: Request) {
  let body: RegistrationBody
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ongeldige aanvraag.' }, { status: 400 })
  }

  const firstName = clean(body.firstName, 80)
  const lastName = clean(body.lastName, 80)
  const email = clean(body.email, 120)
  const phone = clean(body.phone, 40)
  const birthDate = clean(body.birthDate, 20)
  const parentName = clean(body.parentName, 120)
  const parentEmail = clean(body.parentEmail, 120)
  const parentPhone = clean(body.parentPhone, 40)
  const message = clean(body.message, 2000)

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json({ error: 'Vul alle verplichte velden in.' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Voer een geldig e-mailadres in.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('Inschrijving mail failed: RESEND_API_KEY ontbreekt')
    return NextResponse.json(
      { error: 'De aanmelding kon niet worden verstuurd. Probeer het opnieuw of bel ons.' },
      { status: 502 },
    )
  }

  const name = `${firstName} ${lastName}`
  const fields = [
    ['Naam', name],
    ['E-mail', email],
    ['Telefoon', phone],
    ['Geboortedatum', birthDate || '—'],
    ['Ouder/voogd', parentName || '—'],
    ['E-mail ouder', parentEmail || '—'],
    ['Telefoon ouder', parentPhone || '—'],
    ['Opmerkingen', message || '—'],
  ]

  const text = [`Nieuwe inschrijving: ${name}`, '', ...fields.map(([label, value]) => row(label, value))].join('\n')
  const html = `
    <h1>Nieuwe inschrijving</h1>
    <p>${escapeHtml(name)} wil zich inschrijven.</p>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
      ${fields
        .map(
          ([label, value]) =>
            `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value).replaceAll('\n', '<br>')}</td></tr>`,
        )
        .join('')}
    </table>
  `

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [RECIPIENT],
        reply_to: email,
        subject: `Nieuwe inschrijving: ${name}`,
        html,
        text,
      }),
    })

    if (!response.ok) {
      const result = (await response.json().catch(() => null)) as { message?: string } | null
      console.error('Inschrijving mail rejected', result?.message ?? response.status)
      return NextResponse.json(
        { error: 'De aanmelding kon niet worden verstuurd. Probeer het opnieuw of bel ons.' },
        { status: 502 },
      )
    }
  } catch (error) {
    console.error('Inschrijving mail failed', error)
    return NextResponse.json(
      { error: 'De aanmelding kon niet worden verstuurd. Probeer het opnieuw of bel ons.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
