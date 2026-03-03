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
                Taekwondo Vereniging Black Dragon hecht groot belang aan een veilige, respectvolle en plezierige sportomgeving voor al onze leden. Pesten in welke vorm dan ook wordt niet getolereerd. Dit protocol beschrijft hoe wij pesten voorkomen, signaleren en aanpakken.
              </p>
            </div>

            {/* Sectie 1 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Wat is Pesten?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Pesten is het systematisch en herhaaldelijk uitoefenen van negatieve handelingen door één of meerdere personen, gericht op een ander persoon. Dit kan verschillende vormen aannemen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Fysiek pesten:</strong> Duwen, schoppen, slaan of beschadigen van eigendommen</li>
                <li><strong>Verbaal pesten:</strong> Schelden, uitlachen, beledigen of bedreigen</li>
                <li><strong>Sociaal pesten:</strong> Buitensluiten, negeren, roddelen of isoleren</li>
                <li><strong>Cyberpesten:</strong> Pesten via sociale media, WhatsApp of andere digitale kanalen</li>
              </ul>
            </div>

            {/* Sectie 2 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Uitgangspunten
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Iedereen heeft het recht zich veilig te voelen bij Taekwondo Black Dragon</li>
                <li>Pesten wordt nooit geaccepteerd, door niemand</li>
                <li>In de Taekwondo-filosofie staan respect, discipline en zelfbeheersing centraal</li>
                <li>Iedereen – leden, instructeurs, ouders en vrijwilligers – draagt bij aan een positieve sfeer</li>
                <li>Signalen van pestgedrag worden altijd serieus genomen</li>
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
                <li>Het actief bespreken van respect en sportiviteit tijdens trainingen</li>
                <li>Het hanteren van duidelijke gedragsregels voor alle leden</li>
                <li>Het creëren van een open en veilige sfeer waarin leden zich durven uitspreken</li>
                <li>Het trainen van instructeurs in het herkennen van pestgedrag</li>
                <li>Regelmatig contact met ouders/verzorgers van jonge leden</li>
                <li>Voorbeeldgedrag van instructeurs en bestuursleden</li>
              </ul>
            </div>

            {/* Sectie 4 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Signaleren
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Mogelijke signalen van pesten zijn onder andere:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Een lid komt niet meer graag naar training of meldt zich vaak af</li>
                <li>Een lid trekt zich terug of is stiller dan normaal</li>
                <li>Een lid heeft onverklaarbare verwondingen of beschadigde spullen</li>
                <li>Een lid wordt zichtbaar buitengesloten door anderen</li>
                <li>Verandering in gedrag, prestatie of motivatie</li>
              </ul>
            </div>

            {/* Sectie 5 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Procedure bij Pestgedrag
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wanneer pestgedrag wordt gesignaleerd of gemeld, volgen wij het onderstaande stappenplan:
              </p>

              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 1 – Melding</h3>
                  <p className="text-muted-foreground text-sm">Het pestgedrag wordt gemeld bij een instructeur of het bestuur. Dit kan door het slachtoffer zelf, een medelid, ouder/verzorger of instructeur.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 2 – Gesprek met betrokkenen</h3>
                  <p className="text-muted-foreground text-sm">Er wordt apart gesproken met het slachtoffer en de pester(s) om de situatie in kaart te brengen. Bij minderjarigen worden ouders/verzorgers geïnformeerd.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 3 – Afspraken maken</h3>
                  <p className="text-muted-foreground text-sm">Er worden duidelijke afspraken gemaakt met de pester(s). Het ongewenste gedrag moet onmiddellijk stoppen. De afspraken worden vastgelegd.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 4 – Opvolging</h3>
                  <p className="text-muted-foreground text-sm">Na twee weken vindt een evaluatiegesprek plaats met alle betrokkenen om te controleren of het pestgedrag is gestopt.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Stap 5 – Sancties (indien nodig)</h3>
                  <p className="text-muted-foreground text-sm">Bij herhaling kunnen sancties worden opgelegd, variërend van een officiële waarschuwing tot tijdelijke schorsing of in ernstige gevallen beëindiging van het lidmaatschap.</p>
                </div>
              </div>
            </div>

            {/* Sectie 6 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Vertrouwenspersoon
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Leden en ouders/verzorgers kunnen terecht bij de vertrouwenspersoon van de vereniging voor het melden van pestgedrag of andere ongewenste situaties. De vertrouwenspersoon behandelt meldingen vertrouwelijk en helpt bij het vinden van een passende oplossing. Neem contact op via info@taekwondoblackdragon.nl.
              </p>
            </div>

            {/* Sectie 7 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                7. Verantwoordelijkheden
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Instructeurs:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Zijn alert op pestgedrag tijdens trainingen</li>
                    <li>Grijpen direct in bij pestgedrag</li>
                    <li>Melden signalen bij het bestuur</li>
                    <li>Bevorderen een positieve groepsdynamiek</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ouders/verzorgers:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Zijn alert op signalen van pesten bij hun kind</li>
                    <li>Melden pestgedrag bij de instructeur of het bestuur</li>
                    <li>Ondersteunen de aanpak van de vereniging</li>
                    <li>Stimuleren respectvol gedrag</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Leden:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Behandelen elkaar met respect</li>
                    <li>Melden pestgedrag wanneer zij dit zien of ervaren</li>
                    <li>Sluiten niemand buiten</li>
                    <li>Houden zich aan de gedragscode</li>
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
