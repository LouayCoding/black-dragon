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
                In dit document hebben wij als directie van Taekwondo Vereniging Black Dragon vastgelegd hoe wij door gewenst gedrag te stimuleren en risicosituaties te mijden, seksuele intimidatie binnen de club trachten te voorkomen. Hierin wordt behandeld hoe wij omgaan met situaties waarin dit toch gebeurt of dreigt te gebeuren en welke sancties mogelijk zijn als een situatie niet tot een oplossing komt.
              </p>
            </div>

            {/* Sectie 1 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Gewenste omgang bevorderen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Het is erg belangrijk dat leden zich veilig voelen in hun sportomgeving. Hier hoort bij dat zij zich niet seksueel geïntimideerd mogen voelen. Om het risico daarop zo klein mogelijk te maken hebben we een aantal omgangsregels opgesteld:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Ik accepteer en respecteer de ander zoals hij is en discrimineer niet. Iedereen telt mee binnen de club.</li>
                <li>Ik houd rekening met de grenzen die de ander aangeeft.</li>
                <li>Ik val de ander niet lastig.</li>
                <li>Ik berokken de ander geen schade.</li>
                <li>Ik maak op geen enkele wijze misbruik van mijn machtspositie.</li>
                <li>Ik scheld niet en maak geen gemene grappen of opmerkingen over anderen.</li>
                <li>Ik negeer de ander niet.</li>
                <li>Ik doe niet mee aan pesten, uitlachen of roddelen.</li>
                <li>Ik vecht niet, ik gebruik geen geweld, ik bedreig de ander niet, ik neem geen wapens mee.</li>
                <li>Ik kom niet ongewenst te dichtbij en raak de ander niet tegen zijn of haar wil aan.</li>
                <li>Ik geef de ander geen ongewenste seksueel getinte aandacht.</li>
                <li>Ik stel geen ongepaste vragen en maak geen ongewenste opmerkingen over iemands persoonlijk leven of uiterlijk.</li>
                <li>Als iemand mij hindert of lastig valt dan vraag ik hem/haar hiermee te stoppen.</li>
                <li>Als dat niet helpt, vraag ik een ander om hulp.</li>
                <li>Ik help anderen om zich ook aan deze afspraken te houden en spreek degene die zich daar niet aan houdt erop aan en meld dit zo nodig bij de trainers/directie.</li>
              </ol>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Bovenstaande regels worden al bij inschrijving kenbaar gemaakt aan al onze leden en zij dienen hiermee akkoord te gaan voordat ze lid kunnen worden. Aan leden maar ook aan trainers/coaches, directie en aan ouders/verzorgers wordt gevraagd om ongewenst gedrag bij de VCP te melden wanneer zij dit tegenkomen of vermoeden.
              </p>
            </div>

            {/* Sectie 2 - VCP */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Vertrouwenscontactpersoon (VCP)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Bij een vertrouwenscontactpersoon (VCP) kan je grensoverschrijdend gedrag melden. Als je niet bij een trainer of sportschoolhouder terecht kan of wil, benader dan een VCP. De VCP kan achterhalen wat er is gebeurd en inschatten wat de beste vervolgstappen zijn.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-muted-foreground text-sm">
                  Een melding van grensoverschrijdend gedrag wordt altijd in vertrouwelijkheid gedaan. Maar vertrouwelijkheid betekent niet hetzelfde als geheimhouding.
                </p>
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
