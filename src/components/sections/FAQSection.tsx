import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('Vanaf welke leeftijd kan mijn kind beginnen?', 'At what age can my child start?'),
      answer: t('Wij bieden ons Kleine Tijgers programma aan voor kinderen vanaf 4 jaar, speciaal ontworpen om jonge kinderen spelenderwijs kennis te laten maken met basisvaardigheden en discipline.', 'We offer our Little Tigers program for children from 4 years old, specially designed to introduce young children to basic skills and discipline through play.'),
    },
    {
      question: t('Heb ik eerdere ervaring nodig?', 'Do I need prior experience?'),
      answer: t('Absoluut niet! Onze lessen zijn geschikt voor alle niveaus. Onze instructeurs begeleiden je stap voor stap en passen de training aan op jouw niveau.', 'Absolutely not! Our classes are suitable for all levels. Our instructors guide you step by step and adapt training to your level.'),
    },
    {
      question: t('Wat moet ik meenemen naar mijn eerste les?', 'What should I bring to my first class?'),
      answer: t('Comfortabele sportkleding is voldoende. Na inschrijving ontvang je een dobok (Taekwondo pak). Vergeet niet water mee te nemen!', 'Comfortable sportswear is sufficient. After registration you receive a dobok (Taekwondo uniform). Don\'t forget to bring water!'),
    },
    {
      question: t('Hoe lang duurt het om een zwarte band te halen?', 'How long to get a black belt?'),
      answer: t('Gemiddeld 3-5 jaar, afhankelijk van trainingsfrequentie en toewijding. Elke stap brengt waardevolle lessen en persoonlijke groei.', 'Average 3-5 years, depending on training frequency and dedication. Each step brings valuable lessons and personal growth.'),
    },
    {
      question: t('Bieden jullie proeflessen aan?', 'Do you offer trial classes?'),
      answer: t('Ja! Wij bieden een gratis proefles aan. Neem contact met ons op om een proefles in te plannen op een moment dat jou uitkomt.', 'Yes! We offer a free trial class. Contact us to schedule a trial class at a time that suits you.'),
    },
  ];

  return (
    <section id="faq" className="py-32 bg-background relative">
      <div ref={ref} className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <span className="inline-block text-primary font-medium tracking-[0.2em] text-sm mb-6">FAQ</span>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              {t('Veelgestelde ', 'Frequently Asked ')}<span className="text-primary">{t('Vragen', 'Questions')}</span>
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className={cn(
            "transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 data-[state=open]:shadow-elegant transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA */}
          <div className={cn(
            "text-center mt-16 transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <p className="text-muted-foreground mb-6">{t('Nog vragen?', 'More questions?')}</p>
            <Button asChild size="lg" className="btn-glow bg-primary text-primary-foreground px-8 py-6 rounded-full group">
              <a href="#contact" className="flex items-center gap-2">
                {t('Neem Contact Op', 'Contact Us')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}