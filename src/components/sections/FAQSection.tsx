'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeInView } from '@/components/animations/FadeInView';

export function FAQSection() {
  const faqs = [
    {
      question: 'Vanaf welke leeftijd kan mijn kind beginnen?',
      answer: 'Wij bieden ons Kleine Tijgers programma aan voor kinderen vanaf 4 jaar. Dit programma is speciaal ontworpen om jonge kinderen spelenderwijs kennis te laten maken met basisvaardigheden.',
    },
    {
      question: 'Heb ik ervaring nodig om te beginnen?',
      answer: 'Nee. Onze lessen zijn geschikt voor alle niveaus, van absolute beginners tot gevorderden. Onze instructeurs begeleiden je stap voor stap en passen de training aan op jouw niveau.',
    },
    {
      question: 'Wat moet ik meenemen naar mijn eerste les?',
      answer: 'Comfortabele sportkleding en water. Na inschrijving ontvang je een dobok (taekwondo pak) en kun je officieel beginnen met trainen.',
    },
    {
      question: 'Hoe vaak per week moet ik trainen?',
      answer: 'Wij raden minimaal 2x per week aan voor optimale vooruitgang. Je kunt zelf bepalen hoeveel lessen je volgt — onze roosters maken het makkelijk om training te combineren met werk of school.',
    },
    {
      question: 'Is taekwondo veilig?',
      answer: 'Veiligheid staat voorop. Alle oefeningen worden onder begeleiding van gecertificeerde instructeurs uitgevoerd. We gebruiken beschermende uitrusting tijdens sparring en bouwen vaardigheden geleidelijk op.',
    },
    {
      question: 'Hoe lang duurt het om een zwarte band te halen?',
      answer: 'Gemiddeld 3–5 jaar voor een zwarte band (1e Dan), afhankelijk van trainingsfrequentie en toewijding.',
    },
    {
      question: 'Wat kost een lidmaatschap?',
      answer: 'Onze abonnementen beginnen vanaf €32,50/maand. Bekijk de tarieven pagina voor een volledig overzicht van alle opties.',
    },
    {
      question: 'Kan ik eerst een proefles doen?',
      answer: 'Ja. Schrijf je in via het formulier en we plannen samen een proefles in op een moment dat jou uitkomt.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <FadeInView className="mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-8">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
              FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Veelgestelde<br />
              <span className="text-primary">vragen</span>
            </h2>
          </div>
        </FadeInView>

        {/* FAQ Accordion */}
        <FadeInView delay={0.15} className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-5 sm:px-6 py-1 hover:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base text-foreground hover:no-underline py-4 sm:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/60 pb-5 leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInView>

        {/* CTA */}
        <FadeInView delay={0.25} className="max-w-3xl mt-10">
          <div className="bg-muted/30 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-foreground/50 text-sm">
              Staat je vraag er niet bij?
            </p>
            <Button asChild variant="outline" className="rounded-lg">
              <Link href="/contact">Neem contact op</Link>
            </Button>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
