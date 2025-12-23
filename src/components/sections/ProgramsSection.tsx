import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Users, Award, Zap, Heart, Target, Star } from 'lucide-react';
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
        'Leuke introductielessen die coördinatie, focus en zelfvertrouwen opbouwen door leeftijdsgeschikte spelletjes en basis Taekwondo bewegingen.',
        'Fun introductory classes building coordination, focus, and confidence through age-appropriate games and basic Taekwondo movements.'
      ),
      features: [
        t('Motorische ontwikkeling', 'Motor skill development'),
        t('Basis trappen & blokken', 'Basic kicks & blocks'),
        t('Luistervaardigheden', 'Listening skills'),
      ],
    },
    {
      icon: Zap,
      title: t('Jeugd Programma', 'Youth Program'),
      age: t('7-12 jaar', 'Ages 7-12'),
      description: t(
        'Uitgebreide training die discipline, fitheid en zelfverdedigingsvaardigheden ontwikkelt terwijl sterke karakterfundamenten worden gelegd.',
        'Comprehensive training developing discipline, fitness, and self-defense skills while building strong character foundations.'
      ),
      features: [
        t('Band progressie', 'Belt progression'),
        t('Vormen & sparren', 'Forms & sparring'),
        t('Leiderschapstraining', 'Leadership training'),
      ],
    },
    {
      icon: Award,
      title: t('Tiener Krijgers', 'Teen Warriors'),
      age: t('13-17 jaar', 'Ages 13-17'),
      description: t(
        'Uitdagend curriculum gericht op geavanceerde technieken, wedstrijdvoorbereiding en persoonlijke ontwikkeling.',
        'Challenging curriculum focusing on advanced techniques, competition preparation, and personal development.'
      ),
      features: [
        t('Wedstrijdtraining', 'Competition training'),
        t('Geavanceerde technieken', 'Advanced techniques'),
        t('Mentale weerbaarheid', 'Mental toughness'),
      ],
    },
    {
      icon: Target,
      title: t('Volwassenen Fitness', 'Adult Fitness'),
      age: t('18+ jaar', 'Ages 18+'),
      description: t(
        'Dynamische training die traditionele Taekwondo combineert met moderne fitnessprincipes voor complete fysieke conditie.',
        'Dynamic training combining traditional Taekwondo with modern fitness principles for complete physical conditioning.'
      ),
      features: [
        t('Full-body workout', 'Full-body workout'),
        t('Stressverlichting', 'Stress relief'),
        t('Zelfverdediging', 'Self-defense'),
      ],
    },
    {
      icon: Heart,
      title: t('Gezinslessen', 'Family Classes'),
      age: t('Alle leeftijden', 'All Ages'),
      description: t(
        'Train samen als gezin! Speciale sessies ontworpen voor ouders en kinderen om samen te leren en te groeien.',
        'Train together as a family! Special sessions designed for parents and children to learn and grow side by side.'
      ),
      features: [
        t('Gezinsband', 'Family bonding'),
        t('Gedeelde doelen', 'Shared goals'),
        t('Wederzijdse steun', 'Mutual support'),
      ],
    },
    {
      icon: Star,
      title: t('Wedstrijdteam', 'Competition Team'),
      age: t('Op uitnodiging', 'By Invitation'),
      description: t(
        'Elite training voor toegewijde atleten die zich voorbereiden op lokale, nationale en internationale Taekwondo wedstrijden.',
        'Elite training for dedicated athletes preparing for local, national, and international Taekwondo competitions.'
      ),
      features: [
        t('Geavanceerd sparren', 'Advanced sparring'),
        t('Toernooivoorbereiding', 'Tournament prep'),
        t('Elite coaching', 'Elite coaching'),
      ],
    },
  ];

  return (
    <section id="programs" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-primary font-medium tracking-widest text-sm mb-4">{t('PROGRAMMAS', 'PROGRAMS')}</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('Training voor ', 'Training for ')}<span className="text-primary">{t('Elke Reis', 'Every Journey')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'Van kleine tijgers die hun eerste stappen zetten tot ervaren wedstrijdvechters die excellentie nastreven, wij bieden programmas op maat voor elke leeftijd en elk niveau.',
              'From tiny tigers taking their first steps to seasoned competitors pursuing excellence, we offer programs tailored to every age and skill level.'
            )}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card rounded-lg border border-border p-6 hover:border-primary/50 hover:shadow-card transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <program.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <p className="text-xs text-primary font-medium tracking-wider mb-1">{program.age}</p>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#register"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors group/link"
              >
                {t('Meer Info', 'Learn More')}
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Button
            asChild
            size="lg"
            className="btn-korean bg-primary hover:bg-accent text-primary-foreground px-8"
          >
            <a href="#register">{t('Gratis Proefles Aanvragen', 'Start Free Trial Class')}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
