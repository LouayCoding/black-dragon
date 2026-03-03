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

            {/* Erecode */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Erecode van Vechtsport
              </h2>
              <p className="text-muted-foreground leading-relaxed italic">
                &ldquo;Vechten gebeurt alleen op de mat of in de ring, en nooit op straat. De technieken die je worden aangeleerd mogen alleen worden gebruikt ter verdediging van jezelf of anderen. Je mag nooit je vechttechnieken gebruiken tegen iemand die zich niet kan verdedigen. Eer, loyaliteit en trouw zijn aan de code zijn belangrijker dan welke vechttechniek, graduatie of titel dan ook.&rdquo;
              </p>
            </div>

            {/* Gedragsregels lid */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Gedragsregels voor het lid
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Het gebruik van doping en stimulerende middelen is verboden.</li>
                <li>Het gebruik van slecht onderhouden en/of onveilige materialen en hulpmiddelen is verboden; dit geldt zowel voor de materialen van de organisatie als die van de sporter.</li>
                <li>Er is respect voor onze partner (en zijn/haar niveau).</li>
                <li>We zijn altijd sportief, ook al zijn anderen dat niet.</li>
                <li>Iedereen draagt tijdens de training voldoende beschermingsmaterialen om letsel en kwetsuren te voorkomen.</li>
                <li>Het lid is verplicht zijn of haar gezondheidstoestand toe te lichten, mocht dit een negatieve invloed hebben op de beoefening van de sport.</li>
                <li>Sieraden, piercings e.d. die letselrisico opleveren voor de drager of anderen worden verwijderd, dan wel afgeplakt.</li>
                <li>Drugsbezit en drugsgebruik in en om het sportcomplex is niet toegestaan en zal direct leiden tot een verbod.</li>
                <li>Discriminatie, schelden, grof taalgebruik, treiteren, pesten, irriteren of kwetsen van wie dan ook wordt niet geaccepteerd en kan aanleiding zijn voor sancties.</li>
                <li>Vechten gebeurt alleen op de mat of in de ring, en nooit op straat. De technieken die je worden aangeleerd mogen alleen worden gebruikt ter verdediging van jezelf of anderen.</li>
                <li>Het gebruik van een mobiele telefoon of het aanstaan van een mobiele telefoon is verboden in de oefenzaal en tijdens de lessen.</li>
                <li>Het is ten strengste verboden te roken in het gebouw.</li>
                <li>Je bent bij de training minimaal 5 à 10 minuten voor aanvang aanwezig.</li>
                <li>We zijn zuinig op elkaars spullen en die van de accommodatie.</li>
                <li>Je beschikt over een goede lichamelijke hygiëne zoals korte en schone nagels, frisse adem etc.</li>
                <li>De sporters zijn verplicht zich adequaat te verzekeren tegen ziektekosten.</li>
              </ul>
            </div>

            {/* Gedragsregels trainer */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Gedragsregels voor de trainer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">De trainer:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Heeft respect voor de leden, ouders/verzorgers en begeleiders.</li>
                <li>Brengt leden passie bij voor de sport.</li>
                <li>Is verantwoordelijk voor de trainingsmaterialen.</li>
                <li>Zorgt dat de dojo na de training (op tijd) leeg is van gebruikte materialen.</li>
                <li>Ziet de meerwaarde om vechtsport als middel in te zetten voor de vorming van leden.</li>
                <li>Creëert in zijn training een setting van veiligheid en vertrouwen.</li>
                <li>Houdt gebruik van doping en stimulerende middelen tegen.</li>
                <li>Behandelt elk lid hetzelfde, ongeacht afkomst of niveau.</li>
                <li>Heeft aandacht voor fair play.</li>
                <li>Gebruikt geen alcohol (en ook geen tabak) tijdens het trainen van de leden.</li>
                <li>Ziet er op toe dat er tijdens de lessen geen gebruik wordt gemaakt van mobiele telefoons.</li>
                <li>Ziet er op toe dat mobiele telefoons tijdens de lessen uitstaan.</li>
                <li>Zorgt ervoor dat de huis- en gedragsregels voor de leden nageleefd worden.</li>
              </ul>
            </div>

            {/* Gedragsregels ouders */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Gedragsregels voor de ouders/verzorgers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">De ouder:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Is een goede supporter en geeft het goede voorbeeld door respect te hebben voor iedereen.</li>
                <li>Houdt zich afzijdig ten opzichte van de begeleiding van de leden door trainers en begeleiders.</li>
                <li>Zorgt ervoor dat zoon/dochter op tijd aanwezig is voor een training of een wedstrijd.</li>
                <li>Ziet er op toe dat zoon/dochter zich op tijd afmeldt voor een training of een wedstrijd.</li>
                <li>Spreekt zoon/dochter aan op eventueel wangedrag.</li>
              </ul>
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
