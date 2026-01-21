'use client'

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {

  const faqs = [
    {
      question: 'Vanaf welke leeftijd kan mijn kind beginnen met taekwondo?',
      answer: 'Wij bieden ons kleine tijgers programma aan voor kinderen vanaf 4 jaar. Dit programma is speciaal ontworpen om jonge kinderen spelenderwijs kennis te laten maken met basisvaardigheden.',
    },
    {
      question: 'Heb ik eerdere ervaring nodig om te beginnen?',
      answer: 'Absoluut niet! Onze lessen zijn geschikt voor alle niveaus, van absolute beginners tot gevorderden. Onze instructeurs begeleiden je stap voor stap en passen de training aan op jouw niveau.',
    },
    {
      question: 'Wat moet ik meenemen naar mijn eerste les?',
      answer: 'Voor je eerste les is comfortabele sportkleding voldoende. Na inschrijving ontvang je een dobok (Taekwondo pak) en kun je officieel beginnen met trainen. Vergeet niet om water mee te nemen!',
    },
    {
      question: 'Hoe vaak per week moet ik trainen?',
      answer: 'Wij raden aan om minimaal 2 keer per week te trainen voor optimale vooruitgang. Je kunt echter zelf bepalen hoeveel lessen je volgt. Onze flexibele roosters maken het gemakkelijk om training te combineren met werk of school.',
    },
    {
      question: 'Is Taekwondo veilig? Wat is het blessurerisico?',
      answer: 'Veiligheid staat bij ons voorop. Alle oefeningen worden onder begeleiding van gecertificeerde instructeurs uitgevoerd. We gebruiken beschermende uitrusting tijdens sparring en bouwen vaardigheden geleidelijk op. Het blessurerisico is minimaal bij correcte uitvoering.',
    },
    {
      question: 'Hoe lang duurt het om een zwarte band te halen?',
      answer: 'Gemiddeld duurt het 3-5 jaar om een zwarte band (1e Dan) te behalen, afhankelijk van trainingsfrequentie, toewijding en individuele voortgang. Elke stap in deze reis brengt waardevolle lessen en persoonlijke groei.',
    },
    {
      question: 'Bieden jullie proeflessen aan?',
      answer: 'Ja! Wij bieden een gratis proefles aan zodat je kunt ervaren of Taekwondo bij je past. Neem contact met ons op om een proefles in te plannen op een moment dat jou uitkomt.',
    },
    {
      question: 'Wat zijn de kosten voor lidmaatschap?',
      answer: 'Onze lidmaatschapskosten variëren afhankelijk van het gekozen programma en trainingsfrequentie. Neem contact met ons op voor een persoonlijk gesprek waarin we alle opties bespreken en een passend pakket samenstellen.',
    },
  ];

  return (
    <section id="faq" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-16">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                FAQ
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Heb je<br />
              <span className="text-primary">vragen?</span>
            </h2>
            <div className="space-y-6 max-w-2xl">
              <p className="text-foreground/90 text-lg leading-[1.8]">
                Hier vind je antwoorden op de meest gestelde vragen over onze lessen, lidmaatschap en trainingen. Staat je vraag er niet bij? Neem gerust contact met ons op.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-7xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 py-1 hover:shadow-md transition-all border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-base text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-5 leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
