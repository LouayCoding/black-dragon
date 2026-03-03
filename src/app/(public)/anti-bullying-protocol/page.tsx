import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Pestprotocol | Black Dragon Taekwondo',
  description: 'Pestprotocol van Taekwondo Vereniging Black Dragon Den Haag. Wij staan voor een veilige sportomgeving.',
};

export default function AntiBullyingProtocolPage() {
  return (
    <>
      <PageHero
        title="Pest"
        titleHighlight="Protocol"
        subtitle="Samen zorgen wij voor een veilige en respectvolle sportomgeving"
        koreanText="따돌림 방지"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10">

            <div>
              <p className="text-muted-foreground leading-relaxed">
                In dit document hebben wij als Taekwondo Vereniging Black Dragon vastgelegd hoe wij door gewenst gedrag te stimuleren pesten binnen de club trachten te voorkomen. Hierin wordt behandeld hoe wij omgaan met situaties waarin dit toch gebeurt of dreigt te gebeuren en welke sancties mogelijk zijn als een situatie niet tot een oplossing komt.
              </p>
            </div>

            {/* Sectie 1 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Gewenste omgang bevorderen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Het is erg belangrijk dat leden zich veilig voelen in hun sportomgeving. Hier hoort bij dat zij zich niet gepest mogen voelen. Om het risico daarop zo klein mogelijk te maken hebben we een aantal gedragsregels opgesteld.
              </p>

              <p className="text-foreground font-semibold mb-2">De volgende zaken zijn in onze club niet toegestaan:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Het beoordelen op uiterlijk, afkomst, geslacht of andere persoonskenmerken of het maken van kwetsende opmerkingen daarover.</li>
                <li>Ongewenst aan de spullen van een ander komen.</li>
                <li>Een ander bewust hardhandig behandelen en/of fysiek pijn doen bij het oefenen.</li>
                <li>Elkaar met een bijnaam aanspreken die door de bedoelde persoon niet als positief ervaren wordt.</li>
                <li>Vloeken, schelden of roddelen.</li>
              </ul>

              <p className="text-foreground font-semibold mb-2">Daarnaast verwachten wij van leden uitdrukkelijk het volgende:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Probeer ruzie altijd samen op te lossen.</li>
                <li>Wanneer dit niet lukt: zoek contact met een trainer of vertrouwenscontactpersoon.</li>
                <li>Luister aandachtig naar elkaar.</li>
                <li>Help elkaar waar nodig.</li>
                <li>Zorg dat nieuwkomers in de groep goed worden ontvangen en opgevangen.</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Bovenstaande gedragsregels worden al bij inschrijving kenbaar gemaakt aan al onze leden en zijn tevens op te vragen bij de trainers. Verder wordt er door de leraren/trainers regelmatig aandacht aan besteed en zien wij toe op de naleving ervan tijdens de lessen. Bovendien wordt aan ouders/verzorgers ook gevraagd om ongewenst gedrag te melden wanneer zij dit tegenkomen of vermoeden.
              </p>
            </div>

            {/* Sectie 2 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Situaties van pestgedrag oplossen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Als er een vermoeden bestaat dat er binnen de club gepest wordt, dan worden de volgende stappen doorlopen:
              </p>

              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 1 – Zelf oplossen</h3>
                  <p className="text-muted-foreground text-sm">Er wordt vastgesteld of de gepeste heeft geprobeerd het samen met de pester op te lossen.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 2 – Trainer grijpt in</h3>
                  <p className="text-muted-foreground text-sm">Als de gepeste er niet uitkomt, grijpt de leraar/trainer in. Hij/zij brengt de partijen bij elkaar voor een verhelderingsgesprek en probeert samen met hen de ruzie of pesterijen op te lossen en (nieuwe) afspraken te maken.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 3 – Ouders betrekken</h3>
                  <p className="text-muted-foreground text-sm">Er wordt contact gezocht met de ouders van de betrokken partijen nadat de kinderen hierover ingelicht zijn. Eventueel wordt een gesprek gevoerd met de hele groep, waarin de oorzaken en gevolgen voor slachtoffers, daders, meelopers en de zwijgende middengroep aan bod komen.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 4 – Bestraffend gesprek</h3>
                  <p className="text-muted-foreground text-sm">Bij herhaaldelijke ruzie/pestgedrag neemt de trainer duidelijk stelling en houdt een bestraffend gesprek met de pester. De naam van de ruziemaker/pester wordt vastgelegd in een verslag. Bij iedere melding omschrijft de trainer de toedracht.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 5 – Samenwerking</h3>
                  <p className="text-muted-foreground text-sm">De trainer en ouders proberen in goed overleg samen te werken aan een voor iedereen bevredigende oplossing. Als het gaat om jonge kinderen worden de ouders hier actief bij betrokken.</p>
                </div>
              </div>
            </div>

            {/* Sectie 3 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Sancties
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mochten pogingen tot verbetering van de situatie door leden, trainer en ouders niet tot een oplossing leiden, dan kan de club overgaan tot het opleggen van sancties. Een besluit hiertoe volgt altijd uit samenspraak tussen trainer en bestuur. De mogelijke sancties lopen op van licht naar zwaarder:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Eerste sancties</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Eén training niet aanwezig mogen zijn.</li>
                    <li>Voor een bepaald aantal trainingen: blijven tot de andere leden naar huis vertrokken zijn.</li>
                    <li>Afspraken maken met de pester over gedragsveranderingen. De naleving van deze afspraken komt aan het einde van iedere week (voor een bepaalde periode) in een kort gesprek aan de orde.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vervolgsancties</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>De ouders nadrukkelijker bij de oplossing betrekken. De club heeft een dossier bijgehouden van de acties die hebben plaatsgevonden. Dit dossier is uitgangspunt voor het gesprek.</li>
                    <li>Bij aanhoudend pestgedrag de pester voor een bepaalde periode schorsen.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Laatste sanctie</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>In extreme gevallen kan de pester geroyeerd worden van de club.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t pt-8 mt-10">
              <p className="text-muted-foreground text-sm">
                <strong>Taekwondo Vereniging Black Dragon</strong><br />
                Den Haag<br />
                E-mail: info@taekwondoblackdragon.nl<br />
                Telefoon: 06 15047993
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
