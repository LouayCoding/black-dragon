import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
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
      question: t('Vanaf welke leeftijd kan mijn kind beginnen met Taekwondo?', 'At what age can my child start Taekwondo?'),
      answer: t(
        'Wij bieden ons Kleine Tijgers programma aan voor kinderen vanaf 4 jaar. Dit programma is speciaal ontworpen om jonge kinderen spelenderwijs kennis te laten maken met basisvaardigheden, discipline en zelfvertrouwen.',
        'We offer our Little Tigers program for children from 4 years old. This program is specially designed to introduce young children to basic skills, discipline, and self-confidence through play.'
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
    <section id="faq" className="py-24 bg-muted/30 relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-primary font-medium tracking-widest text-sm mb-4">{t('VEELGESTELDE VRAGEN', 'FAQ')}</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('Heb je ', 'Have ')}<span className="text-primary">{t('Vragen?', 'Questions?')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'Hier vind je antwoorden op de meest gestelde vragen. Staat je vraag er niet bij? Neem gerust contact met ons op!',
              'Here you will find answers to the most frequently asked questions. Is your question not listed? Feel free to contact us!'
            )}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={cn(
          "max-w-3xl mx-auto transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-muted-foreground mb-4">
            {t('Nog meer vragen?', 'Still have questions?')}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
          >
            {t('Neem contact met ons op', 'Contact us')} →
          </a>
        </div>
      </div>
    </section>
  );
}
