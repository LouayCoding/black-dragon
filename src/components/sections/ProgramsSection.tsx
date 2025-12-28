import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Users, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import littleTigersImg from '@/assets/gallery/little-tigers.jpg';
import sparringImg from '@/assets/gallery/sparring.jpg';
import highKickImg from '@/assets/gallery/high-kick.jpg';

gsap.registerPlugin(ScrollTrigger);

export function ProgramsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      });

      // Cards stagger animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.program-card');
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        });
      }

      // CTA animation
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const programs = [
    {
      icon: Users,
      image: littleTigersImg,
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
      image: sparringImg,
      title: t('Jeugd Programma', 'Youth Program'),
      age: t('7-17 jaar', 'Ages 7-17'),
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
      icon: Target,
      image: highKickImg,
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
  ];

  return (
    <section ref={sectionRef} id="programs" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div ref={headerRef} className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {t('Programmas', 'Programs')}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.15]">
              {t('Training voor', 'Training for')}<br />
              <span className="text-primary">{t('Elke Reis', 'Every Journey')}</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary"></div>
            <div className="space-y-6 max-w-2xl">
              <p className="text-foreground/80 text-lg sm:text-xl leading-[1.7] font-light">
                {t(
                  'Van kleine tijgers tot ervaren wedstrijdvechters, wij bieden programmas op maat voor elke leeftijd en elk niveau.',
                  'From tiny tigers to seasoned competitors, we offer programs tailored to every age and skill level.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className="program-card bg-background group hover:bg-muted/30 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <program.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Age Badge */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {program.age}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {program.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-[1.7] mb-6 max-w-[32ch]">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="leading-[1.6]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/register"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  {t('Meer Info', 'Learn More')}
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold rounded-full"
          >
            <Link to="/register">{t('Probeer Gratis', 'Try Free')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
