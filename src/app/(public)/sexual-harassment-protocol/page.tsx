import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Protocol Seksuele Intimidatie | Black Dragon Taekwondo',
  description: 'Protocol seksuele intimidatie van Taekwondo Vereniging Black Dragon Den Haag.',
};

export default function SexualHarassmentProtocolPage() {
  return (
    <>
      <PageHero
        title="Protocol Seksuele"
        titleHighlight="Intimidatie"
        subtitle="Wij staan voor een veilige sportomgeving voor iedereen"
        koreanText="성희롱 방지"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10">

            <div>
              <p className="text-muted-foreground leading-relaxed">
                Taekwondo Vereniging Black Dragon tolereert geen enkele vorm van seksuele intimidatie. Dit protocol beschrijft wat seksuele intimidatie is, hoe wij dit voorkomen en wat er gebeurt als het toch voorkomt. Wij volgen hierin de richtlijnen van NOC*NSF en de Taekwondo Bond Nederland.
              </p>
            </div>

            {/* Sectie 1 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Wat is Seksuele Intimidatie?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Seksuele intimidatie is elke vorm van seksueel gedrag of seksuele toenadering die als ongewenst wordt ervaren. Dit omvat onder andere:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Ongewenste seksuele opmerkingen, grappen of toespelingen</li>
                <li>Ongewenste aanrakingen, omhelzingen of kussen</li>
                <li>Ongewenste seksueel getinte berichten (via telefoon, sociale media, etc.)</li>
                <li>Het tonen van seksueel beeldmateriaal</li>
                <li>Gluren of bespieden</li>
                <li>Seksueel misbruik of aanranding</li>
                <li>Het uitoefenen van druk om seksuele handelingen te verrichten</li>
              </ul>
            </div>

            {/* Sectie 2 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Uitgangspunten
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Seksuele intimidatie is absoluut onacceptabel, ongeacht wie het doet</li>
                <li>Het slachtoffer bepaalt of gedrag als ongewenst wordt ervaren</li>
                <li>Elke melding wordt serieus genomen en vertrouwelijk behandeld</li>
                <li>De bescherming van het slachtoffer staat voorop</li>
                <li>De vereniging hanteert een zerotolerancebeleid</li>
                <li>Alle betrokkenen (leden, instructeurs, vrijwilligers, bezoekers) vallen onder dit protocol</li>
              </ul>
            </div>

            {/* Sectie 3 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Preventie
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wij nemen de volgende preventieve maatregelen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Alle instructeurs en trainers beschikken over een geldige Verklaring Omtrent het Gedrag (VOG)</li>
                <li>Instructeurs volgen de gedragscode voor trainers/coaches van NOC*NSF</li>
                <li>Er wordt altijd met minimaal twee begeleiders gewerkt bij jeugdactiviteiten</li>
                <li>Kleedkamers en douches zijn gescheiden en worden niet gedeeld met begeleiders</li>
                <li>Fysiek contact tijdens trainingen is alleen functioneel en sportgerelateerd</li>
                <li>Eén-op-één situaties met minderjarigen worden zoveel mogelijk vermeden</li>
                <li>Open communicatie wordt gestimuleerd</li>
              </ul>
            </div>

            {/* Sectie 4 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Gedragscode Instructeurs
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Instructeurs en begeleiders houden zich aan de volgende regels:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>De instructeur onthoudt zich van elke vorm van seksuele intimidatie</li>
                <li>De instructeur raakt de sporter niet onnodig aan</li>
                <li>De instructeur heeft geen seksuele relatie met een minderjarige sporter</li>
                <li>De instructeur maakt geen seksueel getinte opmerkingen</li>
                <li>De instructeur stuurt geen persoonlijke berichten van seksuele aard naar sporters</li>
                <li>De instructeur dringt niet binnen in de privésfeer van sporters</li>
                <li>De instructeur geeft het goede voorbeeld in woord en daad</li>
              </ul>
            </div>

            {/* Sectie 5 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Melden van Seksuele Intimidatie
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Als u te maken krijgt met seksuele intimidatie of dit signaleert, kunt u dit op de volgende manieren melden:
              </p>

              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Intern</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                    <li>Bij de vertrouwenspersoon van de vereniging</li>
                    <li>Bij een bestuurslid</li>
                    <li>Via e-mail: info@taekwondoblackdragon.nl</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Extern</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                    <li>Vertrouwenspunt Sport: 0900-2025590 (www.centrumveiligesport.nl)</li>
                    <li>Taekwondo Bond Nederland (TBN)</li>
                    <li>Politie (in geval van strafbare feiten): 0900-8844 of 112</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sectie 6 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Procedure na Melding
              </h2>
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 1 – Opvang en eerste gesprek</h3>
                  <p className="text-muted-foreground text-sm">Het slachtoffer wordt opgevangen door de vertrouwenspersoon. Er vindt een vertrouwelijk gesprek plaats om de situatie in kaart te brengen.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 2 – Beoordeling en onderzoek</h3>
                  <p className="text-muted-foreground text-sm">Het bestuur beoordeelt de melding en besluit of een intern onderzoek nodig is. Bij strafbare feiten wordt geadviseerd aangifte te doen bij de politie.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 3 – Maatregelen</h3>
                  <p className="text-muted-foreground text-sm">Afhankelijk van de ernst kunnen maatregelen variëren van een officiële waarschuwing tot directe schorsing, beëindiging van het lidmaatschap en/of aangifte bij de politie.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 4 – Nazorg</h3>
                  <p className="text-muted-foreground text-sm">Het slachtoffer wordt ondersteund en eventueel doorverwezen naar professionele hulpverlening. Er vindt regelmatig contact plaats om het herstel te monitoren.</p>
                </div>
              </div>
            </div>

            {/* Sectie 7 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                7. Sancties
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Bij vastgestelde seksuele intimidatie kan het bestuur de volgende sancties opleggen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Officiële waarschuwing</li>
                <li>Tijdelijke schorsing</li>
                <li>Definitieve beëindiging van het lidmaatschap</li>
                <li>Melding bij de Taekwondo Bond Nederland</li>
                <li>Aangifte bij de politie</li>
              </ul>
            </div>

            {/* Sectie 8 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                8. Vertrouwelijkheid
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Alle meldingen worden strikt vertrouwelijk behandeld. Informatie wordt alleen gedeeld met personen die direct betrokken zijn bij de afhandeling van de melding. De privacy van zowel het slachtoffer als de beschuldigde wordt gerespecteerd, conform de AVG.
              </p>
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
