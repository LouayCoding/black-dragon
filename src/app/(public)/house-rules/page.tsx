import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Huis- en Gedragsregels | Black Dragon Taekwondo',
  description: 'Huis- en gedragsregels van Taekwondo Vereniging Black Dragon Den Haag.',
};

export default function HouseRulesPage() {
  return (
    <>
      <PageHero
        title="Huis- en"
        titleHighlight="Gedragsregels"
        subtitle="Regels voor een prettige en veilige trainingsomgeving"
        koreanText="도장 규칙"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10">

            <div>
              <p className="text-muted-foreground leading-relaxed">
                Om de trainingen bij Taekwondo Vereniging Black Dragon veilig, prettig en respectvol te laten verlopen, gelden de volgende huis- en gedragsregels. Deze regels gelden voor alle leden, bezoekers en ouders/verzorgers.
              </p>
            </div>

            {/* Algemene huisregels */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Algemene Huisregels
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Volg altijd de aanwijzingen van instructeurs en bestuursleden op</li>
                <li>Behandel de trainingsruimte, materialen en eigendommen van anderen met respect</li>
                <li>Roken en het gebruik van alcohol of drugs is ten strengste verboden in en rondom de trainingslocatie</li>
                <li>Huisdieren zijn niet toegestaan in de trainingsruimte</li>
                <li>De vereniging is niet aansprakelijk voor verlies, diefstal of beschadiging van persoonlijke eigendommen</li>
                <li>Waardevolle spullen kunt u het beste thuis laten of zelf bij u houden</li>
                <li>Parkeer fietsen en scooters op de daarvoor bestemde plaatsen</li>
              </ul>
            </div>

            {/* Trainingsruimte */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                De Trainingsruimte (Dojang)
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Buig bij het betreden en verlaten van de dojang als teken van respect</li>
                <li>Betreed de trainingsruimte alleen op blote voeten of met schone binnenschoenen</li>
                <li>Schoenen worden netjes bij de ingang neergezet</li>
                <li>Eten en drinken (behalve water) is niet toegestaan in de trainingsruimte</li>
                <li>Kauwgom is niet toegestaan tijdens de training</li>
                <li>Laat de trainingsruimte schoon achter na gebruik</li>
                <li>Materialen worden na gebruik teruggelegd op de aangewezen plek</li>
              </ul>
            </div>

            {/* Kleding en hygiëne */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Kleding en Hygiëne
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Draag altijd een schone en goedgekeurde dobok (Taekwondo-pak) tijdens trainingen</li>
                <li>De band (gordel) dient correct gebonden te zijn</li>
                <li>Draag geen sieraden, horloges, piercings of andere accessoires tijdens de training (blessurerisico)</li>
                <li>Nagels dienen kort geknipt te zijn (handen en voeten)</li>
                <li>Lang haar moet worden vastgebonden</li>
                <li>Zorg voor goede persoonlijke hygiëne: was uw handen en voeten vóór de training</li>
                <li>Bij besmettelijke huidaandoeningen mag niet worden getraind – raadpleeg eerst een arts</li>
              </ul>
            </div>

            {/* Tijdens de training */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Tijdens de Training
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Zorg dat u minimaal 5 minuten voor aanvang van de training aanwezig bent</li>
                <li>Bij vertraging: betreed de dojang stil en meld u bij de instructeur</li>
                <li>Telefoons moeten uit of op stil staan; gebruik is niet toegestaan tijdens de training</li>
                <li>Praat niet door de instructeur heen en luister aandachtig</li>
                <li>Verlaat de training niet zonder toestemming van de instructeur</li>
                <li>Gebruik de juiste beschermingsmiddelen bij sparring (handschoenen, voetbeschermers, gebitsbeschermer, etc.)</li>
                <li>Train altijd gecontroleerd en met respect voor uw trainingspartner</li>
                <li>Meld blessures direct bij de instructeur</li>
              </ul>
            </div>

            {/* Sparring */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Sparring Regels
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Sparring vindt alleen plaats onder toezicht van een instructeur</li>
                <li>Volledige beschermingsuitrusting is verplicht bij sparring</li>
                <li>Pas uw kracht aan op het niveau van uw partner</li>
                <li>Stop onmiddellijk wanneer uw partner of de instructeur &quot;Stop&quot; zegt</li>
                <li>Sparring is bedoeld om technieken te oefenen, niet om pijn te doen</li>
                <li>Toon altijd respect voor uw sparringpartner: buig voor en na de oefening</li>
              </ul>
            </div>

            {/* Kleedkamers */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Kleedkamers
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Houd de kleedkamers schoon en netjes</li>
                <li>Ruim persoonlijke spullen op na het omkleden</li>
                <li>Fotograferen of filmen in kleedkamers is ten strengste verboden</li>
                <li>Instructeurs en volwassenen kleden zich apart van minderjarige leden</li>
                <li>Gevonden voorwerpen worden afgegeven bij de instructeur of het bestuur</li>
              </ul>
            </div>

            {/* Ouders en bezoekers */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ouders en Bezoekers
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Ouders en bezoekers zijn welkom om de training te bekijken vanaf de aangewezen plek</li>
                <li>Verstoor de training niet door luid te praten of aanwijzingen te geven</li>
                <li>Betreed de trainingsruimte niet zonder toestemming</li>
                <li>Houd toezicht op jongere broertjes/zusjes die meekomen</li>
                <li>Fotograferen is alleen toegestaan met toestemming van de instructeur</li>
                <li>Haal uw kind(eren) tijdig op na de training</li>
              </ul>
            </div>

            {/* Afmelding */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Afmelding en Afwezigheid
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Meld u bij verhindering zo vroeg mogelijk af (via WhatsApp, e-mail of telefoon)</li>
                <li>Bij langdurige afwezigheid door blessure of ziekte, informeer het bestuur</li>
                <li>Afwezigheid geeft geen recht op restitutie van contributie</li>
              </ul>
            </div>

            {/* Naleving */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Naleving
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Het naleven van deze huis- en gedragsregels is verplicht voor iedereen die de trainingslocatie betreedt. Bij herhaaldelijke overtreding kan het bestuur maatregelen treffen, variërend van een waarschuwing tot schorsing of beëindiging van het lidmaatschap.
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
