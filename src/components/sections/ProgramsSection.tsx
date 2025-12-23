import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Users, Award, Zap, Heart, Target, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProgramsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const programs = [
    {
      icon: Users,
      title: t('Kleine Tijgers', 'Little Tigers'),
      age: t('4-6 jaar', 'Ages 4-6'),
      description: t(
        'Leuke introductielessen die coördinatie, focus en zelfvertrouwen opbouwen door spelletjes en basis bewegingen.',
        'Fun introductory classes building coordination, focus, and confidence through games and basic movements.'
      ),
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Zap,
      title: t('Jeugd Programma', 'Youth Program'),
      age: t('7-12 jaar', 'Ages 7-12'),
      description: t(
        'Uitgebreide training die discipline, fitheid en zelfverdedigingsvaardigheden ontwikkelt met sterke karakterbasis.',
        'Comprehensive training developing discipline, fitness, and self-defense skills with strong character foundation.'
      ),
      color: 'from-primary to-accent',
    },
    {
      icon: Award,
      title: t('Tiener Krijgers', 'Teen Warriors'),
      age: t('13-17 jaar', 'Ages 13-17'),
      description: t(
        'Uitdagend curriculum gericht op geavanceerde technieken, wedstrijdvoorbereiding en persoonlijke ontwikkeling.',
        'Challenging curriculum focusing on advanced techniques, competition preparation, and personal development.'
      ),
      color: 'from-primary to-accent',
    },
    {
      icon: Target,
      title: t('Volwassenen Fitness', 'Adult Fitness'),
      age: t('18+ jaar', 'Ages 18+'),
      description: t(
        'Dynamische training die traditionele Taekwondo combineert met moderne fitness voor complete conditie.',
        'Dynamic training combining traditional Taekwondo with modern fitness for complete conditioning.'
      ),
      color: 'from-primary to-accent',
    },
    {
      icon: Heart,
      title: t('Gezinslessen', 'Family Classes'),
      age: t('Alle leeftijden', 'All Ages'),
      description: t(
        'Train samen als gezin! Speciale sessies voor ouders en kinderen om samen te leren en groeien.',
        'Train together as a family! Special sessions for parents and children to learn and grow together.'
      ),
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Star,
      title: t('Wedstrijdteam', 'Competition Team'),
      age: t('Op uitnodiging', 'By Invitation'),
      description: t(
        'Elite training voor toegewijde atleten die zich voorbereiden op nationale en internationale wedstrijden.',
        'Elite training for dedicated athletes preparing for national and international competitions.'
      ),
      color: 'from-yellow-500 to-amber-600',
    },
  ];

  return (
    <section id="programs" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
      
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <span className="inline-block text-primary font-medium tracking-[0.2em] text-sm mb-6">
            {t('PROGRAMMAS', 'PROGRAMS')}
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            {t('Training voor ', 'Training for ')}<span className="text-primary">{t('Elke Reis', 'Every Journey')}</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl">
            {t(
              'Van kleine tijgers tot wedstrijdvechters, wij bieden programmas op maat voor elke leeftijd en elk niveau.',
              'From tiny tigers to competition fighters, we offer programs tailored to every age and skill level.'
            )}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={cn(
                "group relative bg-card rounded-2xl p-8 hover:shadow-elegant transition-all duration-500 card-hover",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
            >
              {/* Icon */}
              <div className={cn(
                "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500",
                program.color
              )}>
                <program.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <span className="text-xs text-primary font-semibold tracking-wider uppercase">{program.age}</span>
                <h3 className="font-serif text-2xl font-bold text-foreground mt-2 mb-3">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-semibold hover:gap-3 gap-2 transition-all group/link"
              >
                {t('Meer Info', 'Learn More')}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-16 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <Button
            asChild
            size="lg"
            className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg rounded-full"
          >
            <a href="#contact">{t('Start Je Gratis Proefles', 'Start Your Free Trial')}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}