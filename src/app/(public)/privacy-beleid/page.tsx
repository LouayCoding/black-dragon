import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacybeleid | Black Dragon Taekwondo',
  description: 'Privacybeleid van Taekwondo Vereniging Black Dragon Den Haag.',
};

export default function PrivacyBeleidPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        titleHighlight="Beleid"
        subtitle="Hoe wij omgaan met uw persoonsgegevens"
        koreanText="개인정보 보호"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10">

            <div>
              <p className="text-muted-foreground leading-relaxed">
                Taekwondo Vereniging Black Dragon, gevestigd te Den Haag, hecht groot belang aan de bescherming van uw persoonsgegevens. In dit privacybeleid leggen wij uit welke gegevens wij verzamelen, waarom wij dat doen en hoe wij daarmee omgaan. Wij houden ons aan de Algemene Verordening Gegevensbescherming (AVG).
              </p>
            </div>

            {/* Artikel 1 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Verantwoordelijke
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Taekwondo Vereniging Black Dragon is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid. Contactgegevens:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-2">
                <li>E-mail: info@taekwondoblackdragon.nl</li>
                <li>Telefoon: 06 15047993</li>
                <li>Adres: Den Haag</li>
              </ul>
            </div>

            {/* Artikel 2 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Welke Gegevens Verzamelen Wij?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wij verwerken de volgende persoonsgegevens:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Identificatiegegevens:</strong> Naam, geboortedatum, geslacht</li>
                <li><strong>Contactgegevens:</strong> Adres, telefoonnummer, e-mailadres</li>
                <li><strong>Financiële gegevens:</strong> Bankrekeningnummer (voor contributie-incasso)</li>
                <li><strong>Sportgegevens:</strong> Gordel-graduatie, TBN-licentienummer, wedstrijdresultaten</li>
                <li><strong>Medische gegevens:</strong> Relevante gezondheidsinformatie (alleen indien vrijwillig verstrekt en noodzakelijk voor veilige sportbeoefening)</li>
                <li><strong>Beeldmateriaal:</strong> Foto&apos;s en video&apos;s gemaakt tijdens trainingen en evenementen</li>
              </ul>
            </div>

            {/* Artikel 3 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Doeleinden van Verwerking
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wij gebruiken uw gegevens voor de volgende doeleinden:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Ledenadministratie en het bijhouden van het ledenbestand</li>
                <li>Het innen van contributie en andere verschuldigde bedragen</li>
                <li>Communicatie over trainingen, evenementen en verenigingszaken</li>
                <li>Aanmelding bij de Taekwondo Bond Nederland (TBN)</li>
                <li>Organisatie van examens, wedstrijden en evenementen</li>
                <li>Publicatie op de website en sociale media (alleen met toestemming)</li>
                <li>Voldoen aan wettelijke verplichtingen</li>
              </ul>
            </div>

            {/* Artikel 4 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Rechtsgrond voor Verwerking
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wij verwerken uw persoonsgegevens op basis van:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Uitvoering van de overeenkomst:</strong> Het lidmaatschap bij de vereniging</li>
                <li><strong>Wettelijke verplichting:</strong> Bijvoorbeeld fiscale verplichtingen</li>
                <li><strong>Toestemming:</strong> Voor het plaatsen van foto&apos;s op website en sociale media</li>
                <li><strong>Gerechtvaardigd belang:</strong> Voor de goede werking van de vereniging</li>
              </ul>
            </div>

            {/* Artikel 5 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Delen van Gegevens met Derden
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wij delen uw gegevens alleen met derden wanneer dit noodzakelijk is:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Taekwondo Bond Nederland (TBN):</strong> Voor licenties en bondsregistratie</li>
                <li><strong>IMAF-Nederland / World Taekwondo:</strong> Voor internationale registratie</li>
                <li><strong>Betalingsverwerkers:</strong> Voor het verwerken van contributiebetalingen</li>
                <li><strong>Overheidsinstanties:</strong> Wanneer wettelijk verplicht</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Wij verkopen uw gegevens nooit aan derden.
              </p>
            </div>

            {/* Artikel 6 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Bewaartermijn
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld. Na beëindiging van het lidmaatschap bewaren wij uw gegevens maximaal 2 jaar, tenzij een langere bewaartermijn wettelijk vereist is (bijvoorbeeld 7 jaar voor financiële gegevens).
              </p>
            </div>

            {/* Artikel 7 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                7. Beveiliging
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, onbevoegde toegang, wijziging of verspreiding. Toegang tot persoonsgegevens is beperkt tot bestuursleden en instructeurs die deze gegevens nodig hebben voor hun functie.
              </p>
            </div>

            {/* Artikel 8 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                8. Uw Rechten
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Op grond van de AVG heeft u de volgende rechten:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Recht op inzage:</strong> U kunt opvragen welke gegevens wij van u verwerken</li>
                <li><strong>Recht op correctie:</strong> U kunt onjuiste gegevens laten aanpassen</li>
                <li><strong>Recht op verwijdering:</strong> U kunt verzoeken uw gegevens te laten verwijderen</li>
                <li><strong>Recht op beperking:</strong> U kunt verzoeken de verwerking te beperken</li>
                <li><strong>Recht op overdraagbaarheid:</strong> U kunt uw gegevens in een gangbaar formaat ontvangen</li>
                <li><strong>Recht van bezwaar:</strong> U kunt bezwaar maken tegen de verwerking van uw gegevens</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                U kunt uw verzoek indienen via info@taekwondoblackdragon.nl. Wij reageren binnen 30 dagen op uw verzoek.
              </p>
            </div>

            {/* Artikel 9 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                9. Cookies en Website
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Onze website maakt gebruik van functionele cookies die noodzakelijk zijn voor het goed functioneren van de website. Wij gebruiken geen tracking-cookies of cookies voor marketingdoeleinden.
              </p>
            </div>

            {/* Artikel 10 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                10. Klachten
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Heeft u een klacht over de verwerking van uw persoonsgegevens? Neem dan contact met ons op via info@taekwondoblackdragon.nl. U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (www.autoriteitpersoonsgegevens.nl).
              </p>
            </div>

            {/* Artikel 11 */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                11. Wijzigingen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij behouden ons het recht voor dit privacybeleid te wijzigen. De meest actuele versie is altijd beschikbaar op onze website. Bij belangrijke wijzigingen informeren wij u per e-mail.
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
