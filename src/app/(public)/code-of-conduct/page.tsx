import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Gedragscode | Black Dragon Taekwondo',
  description: 'Gedragscode van Taekwondo Vereniging Black Dragon Den Haag.',
};

export default function CodeOfConductPage() {
  return (
    <>
      <PageHero
        title="Gedrags"
        titleHighlight="Code"
        subtitle="De kernwaarden en gedragsnormen van onze vereniging"
        koreanText="행동 강령"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10">

            <div>
              <p className="text-muted-foreground leading-relaxed">
                Taekwondo is meer dan een sport – het is een levensfilosofie gebaseerd op respect, discipline en zelfbeheersing. Bij Taekwondo Vereniging Black Dragon verwachten wij dat alle leden, instructeurs, ouders en bezoekers zich houden aan deze gedragscode.
              </p>
            </div>

            {/* De 5 principes */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                De Vijf Principes van Taekwondo
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-5 text-center">
                  <p className="text-primary font-bold text-lg mb-1">예의 (Ye-ui)</p>
                  <p className="font-semibold text-foreground">Beleefdheid</p>
                  <p className="text-muted-foreground text-sm mt-1">Respectvol zijn tegenover iedereen</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-5 text-center">
                  <p className="text-primary font-bold text-lg mb-1">염치 (Yeom-chi)</p>
                  <p className="font-semibold text-foreground">Integriteit</p>
                  <p className="text-muted-foreground text-sm mt-1">Eerlijk en oprecht handelen</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-5 text-center">
                  <p className="text-primary font-bold text-lg mb-1">인내 (In-nae)</p>
                  <p className="font-semibold text-foreground">Doorzettingsvermogen</p>
                  <p className="text-muted-foreground text-sm mt-1">Nooit opgeven, altijd doorgaan</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-5 text-center">
                  <p className="text-primary font-bold text-lg mb-1">극기 (Geuk-gi)</p>
                  <p className="font-semibold text-foreground">Zelfbeheersing</p>
                  <p className="text-muted-foreground text-sm mt-1">Controle over lichaam en geest</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-5 text-center sm:col-span-2">
                  <p className="text-primary font-bold text-lg mb-1">백절불굴 (Baek-jeol-bul-gul)</p>
                  <p className="font-semibold text-foreground">Ontembare geest</p>
                  <p className="text-muted-foreground text-sm mt-1">Moed tonen in moeilijke situaties</p>
                </div>
              </div>
            </div>

            {/* Gedragsregels leden */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Gedragsregels voor Leden
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Toon respect voor instructeurs, medeleden en bezoekers</li>
                <li>Buig bij het betreden en verlaten van de trainingsruimte</li>
                <li>Kom op tijd bij de training; bij vertraging meld je je bij de instructeur</li>
                <li>Draag een schoon en correct Taekwondo-pak (dobok) tijdens de training</li>
                <li>Draag geen sieraden tijdens de training (veiligheid)</li>
                <li>Gebruik geen grof taalgebruik of scheldwoorden</li>
                <li>Pest, discrimineer of intimideer niemand</li>
                <li>Gebruik geen geweld buiten de training om; Taekwondo is alleen voor zelfverdediging</li>
                <li>Houd de trainingslocatie en kleedkamers schoon en netjes</li>
                <li>Telefoons zijn niet toegestaan tijdens de training (tenzij met toestemming)</li>
                <li>Volg altijd de aanwijzingen van de instructeur op</li>
                <li>Toon sportiviteit bij wedstrijden: feliciteer je tegenstander, ongeacht de uitslag</li>
              </ul>
            </div>

            {/* Gedragsregels instructeurs */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Gedragsregels voor Instructeurs
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Geef het goede voorbeeld in woord en daad</li>
                <li>Behandel alle leden gelijk en met respect</li>
                <li>Creëer een veilige en positieve leeromgeving</li>
                <li>Pas technieken aan op het niveau en de fysieke mogelijkheden van het lid</li>
                <li>Gebruik alleen functioneel fysiek contact bij het aanleren van technieken</li>
                <li>Maak geen onderscheid op basis van afkomst, geslacht, religie of geaardheid</li>
                <li>Stimuleer en motiveer leden op een positieve manier</li>
                <li>Beschik over een geldige Verklaring Omtrent het Gedrag (VOG)</li>
                <li>Respecteer de grenzen van elk lid</li>
              </ul>
            </div>

            {/* Gedragsregels ouders */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Gedragsregels voor Ouders/Verzorgers
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Moedig uw kind aan op een positieve manier</li>
                <li>Respecteer de instructeurs en hun beslissingen</li>
                <li>Bemoei u niet met de training; geef feedback via de instructeur</li>
                <li>Zorg dat uw kind op tijd aanwezig is en opgehaald wordt</li>
                <li>Meld afwezigheid of bijzonderheden tijdig</li>
                <li>Toon sportiviteit en fair play als voorbeeld voor uw kind</li>
                <li>Bij klachten of zorgen: bespreek deze met de instructeur of het bestuur</li>
              </ul>
            </div>

            {/* Sancties */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Sancties bij Overtreding
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Bij overtreding van de gedragscode kan het bestuur de volgende maatregelen treffen:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li><strong>Waarschuwing:</strong> Een mondeling of schriftelijk gesprek over het gedrag</li>
                <li><strong>Tweede waarschuwing:</strong> Een officiële schriftelijke waarschuwing</li>
                <li><strong>Schorsing:</strong> Tijdelijke uitsluiting van trainingen en activiteiten</li>
                <li><strong>Royement:</strong> Definitieve beëindiging van het lidmaatschap</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mt-3">
                In ernstige gevallen kan het bestuur besluiten om stap 1 en 2 over te slaan en direct een schorsing of royement uit te spreken.
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
