import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FAQSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(accordionRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: accordionRef.current,
          start: 'top 75%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: t('Vanaf welke leeftijd kan mijn kind beginnen met taekwondo?', 'At what age can my child start taekwondo?'),
      answer: t(
        'Wij bieden ons kleine tijgers programma aan voor kinderen vanaf 4 jaar. Dit programma is speciaal ontworpen om jonge kinderen spelenderwijs kennis te laten maken met basisvaardigheden.',
        'We offer our little tigers program for children from 4 years old. This program is specially designed to introduce young children to basic skills through play.'
      ),
    },
    {
      question: t('Heb ik eerdere ervaring nodig om te beginnen?', 'Do I need prior experience to start?'),
      answer: t(
        'Absoluut niet! Onze lessen zijn geschikt voor alle niveaus, van absolute beginners tot gevorderden. Onze instructeurs begeleiden je stap voor stap en passen de training aan op jouw niveau.',
        'Absolutely not! Our classes are suitable for all levels, from absolute beginners to advanced practitioners. Our instructors guide you step by step and adapt the training to your level.'
      ),
    },
    {
      question: t('Wat moet ik meenemen naar mijn eerste les?', 'What should I bring to my first class?'),
      answer: t(
        'Voor je eerste les is comfortabele sportkleding voldoende. Na inschrijving ontvang je een dobok (Taekwondo pak) en kun je officieel beginnen met trainen. Vergeet niet om water mee te nemen!',
        'For your first class, comfortable sportswear is sufficient. After registration, you will receive a dobok (Taekwondo uniform) and can officially start training. Do not forget to bring water!'
      ),
    },
    {
      question: t('Hoe vaak per week moet ik trainen?', 'How often should I train per week?'),
      answer: t(
        'Wij raden aan om minimaal 2 keer per week te trainen voor optimale vooruitgang. Je kunt echter zelf bepalen hoeveel lessen je volgt. Onze flexibele roosters maken het gemakkelijk om training te combineren met werk of school.',
        'We recommend training at least 2 times per week for optimal progress. However, you can decide how many classes you attend. Our flexible schedules make it easy to combine training with work or school.'
      ),
    },
    {
      question: t('Is Taekwondo veilig? Wat is het blessurerisico?', 'Is Taekwondo safe? What is the injury risk?'),
      answer: t(
        'Veiligheid staat bij ons voorop. Alle oefeningen worden onder begeleiding van gecertificeerde instructeurs uitgevoerd. We gebruiken beschermende uitrusting tijdens sparring en bouwen vaardigheden geleidelijk op. Het blessurerisico is minimaal bij correcte uitvoering.',
        'Safety is our priority. All exercises are performed under the guidance of certified instructors. We use protective equipment during sparring and build skills gradually. The risk of injury is minimal with correct execution.'
      ),
    },
    {
      question: t('Hoe lang duurt het om een zwarte band te halen?', 'How long does it take to get a black belt?'),
      answer: t(
        'Gemiddeld duurt het 3-5 jaar om een zwarte band (1e Dan) te behalen, afhankelijk van trainingsfrequentie, toewijding en individuele voortgang. Elke stap in deze reis brengt waardevolle lessen en persoonlijke groei.',
        'On average, it takes 3-5 years to achieve a black belt (1st Dan), depending on training frequency, dedication, and individual progress. Each step in this journey brings valuable lessons and personal growth.'
      ),
    },
    {
      question: t('Bieden jullie proeflessen aan?', 'Do you offer trial classes?'),
      answer: t(
        'Ja! Wij bieden een gratis proefles aan zodat je kunt ervaren of Taekwondo bij je past. Neem contact met ons op om een proefles in te plannen op een moment dat jou uitkomt.',
        'Yes! We offer a free trial class so you can experience whether Taekwondo is right for you. Contact us to schedule a trial class at a time that suits you.'
      ),
    },
    {
      question: t('Wat zijn de kosten voor lidmaatschap?', 'What are the membership costs?'),
      answer: t(
        'Onze lidmaatschapskosten variëren afhankelijk van het gekozen programma en trainingsfrequentie. Neem contact met ons op voor een persoonlijk gesprek waarin we alle opties bespreken en een passend pakket samenstellen.',
        'Our membership costs vary depending on the chosen program and training frequency. Contact us for a personal consultation where we discuss all options and put together a suitable package.'
      ),
    },
  ];

  return (
    <section ref={sectionRef} id="faq" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div ref={headerRef} className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {t('Veelgestelde vragen', 'FAQ')}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {t('Heb je', 'Have')}<br />
              <span className="text-primary">{t('vragen?', 'questions?')}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="space-y-8 max-w-2xl">
              <p className="text-foreground text-xl sm:text-2xl leading-[1.5] font-normal">
                {t(
                  'Antwoorden op je vragen.',
                  'Answers to your questions.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div ref={accordionRef} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border-l-4 border-primary px-8 py-2 hover:bg-muted/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-lg text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-6 leading-[1.8] text-base">
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
