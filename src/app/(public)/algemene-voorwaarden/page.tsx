import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Black Dragon Taekwondo',
  description: 'Algemene voorwaarden van Taekwondo Vereniging Black Dragon Den Haag.',
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <PageHero
        title="Algemene"
        titleHighlight="Voorwaarden"
        subtitle="De algemene voorwaarden van Taekwondo Vereniging Black Dragon"
        koreanText="이용약관"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10">

            {/* Artikel 1 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Artikel 1 – Definities
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Vereniging:</strong> Taekwondo Vereniging Black Dragon, gevestigd te Den Haag.</li>
                <li><strong>Lid:</strong> Iedere natuurlijke persoon die zich als lid bij de vereniging heeft ingeschreven.</li>
                <li><strong>Lidmaatschap:</strong> De overeenkomst tussen het lid en de vereniging op basis van deze voorwaarden.</li>
                <li><strong>Contributie:</strong> Het periodiek verschuldigde bedrag voor het lidmaatschap.</li>
                <li><strong>Trainingslocatie:</strong> De locatie(s) waar de trainingen van de vereniging plaatsvinden.</li>
              </ul>
            </div>

            {/* Artikel 2 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Artikel 2 – Lidmaatschap
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Het lidmaatschap wordt aangegaan door het invullen en ondertekenen van het inschrijfformulier.</li>
                <li>Bij minderjarigen dient het inschrijfformulier door een ouder of wettelijk vertegenwoordiger te worden ondertekend.</li>
                <li>Het lidmaatschap wordt aangegaan voor onbepaalde tijd, tenzij schriftelijk anders overeengekomen.</li>
                <li>Elk lid ontvangt een Taekwondo paspoort (licentie) via de Taekwondo Bond Nederland (TBN).</li>
                <li>Het lid is verplicht wijzigingen in persoonlijke gegevens (adres, e-mail, telefoonnummer) tijdig door te geven aan de vereniging.</li>
              </ol>
            </div>

            {/* Artikel 3 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Artikel 3 – Contributie en Betaling
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>De hoogte van de contributie wordt jaarlijks door het bestuur vastgesteld en via de website en/of e-mail gecommuniceerd.</li>
                <li>De contributie dient maandelijks vooruit te worden betaald, uiterlijk op de eerste dag van de betreffende maand.</li>
                <li>Betaling geschiedt bij voorkeur via automatische incasso. Contante betaling is alleen mogelijk na overleg met het bestuur.</li>
                <li>Bij niet-tijdige betaling kan de vereniging na een herinnering een boete van €5,- per maand in rekening brengen.</li>
                <li>Bij een achterstand van meer dan 2 maanden kan het lid de toegang tot trainingen worden ontzegd, zonder dat de betalingsverplichting vervalt.</li>
                <li>Restitutie van contributie vindt niet plaats bij afwezigheid door vakantie, ziekte of andere persoonlijke omstandigheden, tenzij het bestuur anders beslist.</li>
              </ol>
            </div>

            {/* Artikel 4 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Artikel 4 – Opzegging Lidmaatschap
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Opzegging van het lidmaatschap dient schriftelijk (per e-mail of brief) te geschieden bij het bestuur.</li>
                <li>Er geldt een opzegtermijn van <strong>één (1) kalendermaand</strong> vóór het einde van de maand.</li>
                <li>Bij opzegging blijft de contributie verschuldigd tot het einde van de opzegperiode.</li>
                <li>Het bestuur bevestigt de opzegging schriftelijk binnen 14 dagen.</li>
              </ol>
            </div>

            {/* Artikel 5 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Artikel 5 – Trainingen en Trainingstijden
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>De trainingstijden worden door het bestuur vastgesteld en via de website gepubliceerd.</li>
                <li>De vereniging behoudt zich het recht voor om trainingstijden en -locaties te wijzigen. Leden worden hiervan tijdig op de hoogte gesteld.</li>
                <li>Tijdens schoolvakanties en feestdagen kan een aangepast rooster gelden.</li>
                <li>Deelname aan trainingen geschiedt op eigen risico van het lid.</li>
                <li>Het dragen van een goedgekeurd Taekwondo-pak (dobok) en de juiste beschermingsmiddelen is verplicht tijdens trainingen en wedstrijden.</li>
              </ol>
            </div>

            {/* Artikel 6 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Artikel 6 – Examens en Graduaties
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Examens voor gordel-graduaties worden periodiek georganiseerd door de vereniging.</li>
                <li>Deelname aan examens is alleen mogelijk na toestemming van de hoofdinstructeur.</li>
                <li>Aan examens zijn kosten verbonden die apart in rekening worden gebracht.</li>
                <li>De uitslag van examens is bindend en wordt bepaald door de examencommissie.</li>
              </ol>
            </div>

            {/* Artikel 7 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Artikel 7 – Aansprakelijkheid
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>De vereniging en haar instructeurs zijn niet aansprakelijk voor enig letsel, verlies, diefstal of schade van welke aard dan ook, opgelopen tijdens of in verband met trainingen, wedstrijden of andere activiteiten.</li>
                <li>Leden worden geadviseerd een adequate sport- en zorgverzekering af te sluiten.</li>
                <li>Leden zijn zelf verantwoordelijk voor hun persoonlijke eigendommen in en rondom de trainingslocatie.</li>
                <li>Ouders/verzorgers van minderjarige leden zijn verantwoordelijk voor eventuele schade veroorzaakt door hun kind(eren).</li>
              </ol>
            </div>

            {/* Artikel 8 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Artikel 8 – Gedragsregels
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Leden dienen zich te houden aan de gedragscode en huisregels van de vereniging.</li>
                <li>Respectvol gedrag tegenover medeleleerlingen, instructeurs en bezoekers is te allen tijde vereist.</li>
                <li>Bij herhaaldelijk wangedrag of overtreding van de regels kan het bestuur het lidmaatschap per direct beëindigen, zonder restitutie van contributie.</li>
              </ol>
            </div>

            {/* Artikel 9 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Artikel 9 – Privacy en Persoonsgegevens
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>De vereniging verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).</li>
                <li>Voor meer informatie wordt verwezen naar het Privacybeleid van de vereniging.</li>
                <li>Tijdens trainingen en evenementen kunnen foto&apos;s en video&apos;s worden gemaakt voor promotiedoeleinden. Leden die hier bezwaar tegen hebben, dienen dit schriftelijk aan het bestuur kenbaar te maken.</li>
              </ol>
            </div>

            {/* Artikel 10 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Artikel 10 – Wijziging Voorwaarden
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Het bestuur behoudt zich het recht voor deze algemene voorwaarden te wijzigen.</li>
                <li>Wijzigingen worden minimaal 30 dagen voor inwerkingtreding via e-mail en/of de website aangekondigd.</li>
                <li>Door voortzetting van het lidmaatschap na wijziging, wordt het lid geacht de gewijzigde voorwaarden te hebben aanvaard.</li>
              </ol>
            </div>

            {/* Artikel 11 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Artikel 11 – Toepasselijk Recht
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Op deze algemene voorwaarden en het lidmaatschap is Nederlands recht van toepassing.</li>
                <li>Geschillen zullen in eerste instantie in onderling overleg worden opgelost. Indien dit niet lukt, is de bevoegde rechter in Den Haag bevoegd.</li>
              </ol>
            </div>

            <div className="border-t pt-8 mt-10">
              <p className="text-muted-foreground text-sm">
                <strong>Taekwondo Vereniging Black Dragon</strong><br />
                Den Haag<br />
                E-mail: info@taekwondoblackdragon.nl<br />
                Telefoon: 06 15047993
              </p>
              <p className="text-muted-foreground text-sm mt-4">
                <em>Laatst bijgewerkt: Maart 2025</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
