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
        subtitle="Overeenkomst Taekwondo Vereniging Black Dragon"
        koreanText="이용약관"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10">

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Overeenkomst
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>Ondergetekende verbindt zich voor een periode van tenminste zes maanden aan Taekwondo Black Dragon.</li>
                <li>De deelnemer dient zich te houden aan de clubregels van Taekwondo Vereniging Black Dragon.</li>
                <li>Het is de verantwoordelijkheid van de deelnemer/ouders/verzorgers om bij een verminderde gezondheidstoestand de huisarts alvorens te raadplegen.</li>
                <li>De te volgen lessen geschieden geheel op eigen risico. De leiding is niet aansprakelijk voor eventuele verwondingen/letsel voor, tijdens of na de lessen.</li>
                <li>De leiding is niet aansprakelijk voor diefstal of vermissing van gelden of goederen.</li>
                <li>Het lesgeld dient per vooruitbetaling minimaal per kwartaal te worden voldaan.</li>
                <li>Bij een contributie achterstand of ander verschuldigd bedrag kan deze geïnd worden door een incassobureau.</li>
                <li>Deelnemer/ouders/verzorgers dienen dan ook de hieruit voortvloeiende kosten te betalen. Tevens kunnen de lessen aan de deelnemer worden stopgezet, totdat de achterstallige betaling is voldaan.</li>
                <li>Minimum opzegtermijn is één maand voor het verstrijken van de duur van het contract. Dit dient schriftelijk te gebeuren via postadres: Draaistraat 16, 2516 KE Den Haag, dan wel via e-mail: info@taekwondoblackdragon.nl. Anders wordt het contract automatisch verlengd voor zes maanden.</li>
                <li>Achterstallig lesgeld wordt, bij het niet tijdig uitschrijven, doorberekend. Bij niet tijdige betaling is ondergetekende de wettelijke rente verschuldigd over het openstaande bedrag.</li>
                <li>Op officiële feestdagen is Taekwondo Vereniging Black Dragon gesloten. Tijdens de korte schoolvakanties kunnen bepaalde lessen vervallen.</li>
                <li>Bij ziekte, vakanties en erkende feestdagen vindt geen restitutie van het lesgeld plaats.</li>
                <li>De leerling is verplicht lid te worden van TBN (Taekwondo Bond Nederland). De leerling betaalt jaarlijks een bepaald bedrag, vastgesteld door TBN. De leerling wordt dan automatisch verzekerd en kan deelnemen aan nationale en internationale evenementen.</li>
                <li>Het lesgeld bedraagt voor alle leden per kwartaal €112,50.</li>
                <li>Het inschrijfgeld bedraagt voor alle leden €30,- en dient te worden voldaan op de eerste trainingsdag.</li>
              </ol>
            </div>

            <div className="border-t pt-8 mt-10">
              <p className="text-muted-foreground text-sm">
                <strong>Taekwondo Vereniging Black Dragon</strong><br />
                Draaistraat 16, 2516 KE Den Haag<br />
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
