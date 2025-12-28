import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Percent, GraduationCap, Briefcase } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function PartnersSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const affiliationRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.partner-card');
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        });
      }

      gsap.from(affiliationRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: affiliationRef.current,
          start: 'top 80%',
        },
      });

      if (logosRef.current) {
        const logos = logosRef.current.querySelectorAll('.affiliation-logo');
        gsap.from(logos, {
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: logosRef.current,
            start: 'top 80%',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const discountPrograms = [
    {
      icon: Percent,
      title: t('Ooievaarspas', 'Ooievaarspas'),
      discount: t('Tot 100% korting', 'Up to 100% discount'),
      description: t(
        'Kinderen tot 18 jaar krijgen 100% korting, 18 jaar of ouder 50% korting op contributie.',
        'Children up to 18 years get 100% discount, 18 years or older 50% discount on membership.'
      ),
    },
    {
      icon: GraduationCap,
      title: t('Leergeld', 'Leergeld'),
      discount: t('Kledingvergoeding', 'Clothing allowance'),
      description: t(
        'Via Leergeld kunnen gezinnen een vergoeding krijgen voor sportkleding en benodigdheden.',
        'Through Leergeld, families can receive an allowance for sports clothing and supplies.'
      ),
    },
    {
      icon: Briefcase,
      title: t('SBB Stage Erkend', 'SBB Internship Recognized'),
      description: t(
        'Wij zijn erkend als stagebedrijf door SBB en bieden stageplekken voor aankomende sportinstructeurs.',
        'We are recognized as an internship company by SBB and offer internship positions for aspiring sports instructors.'
      ),
    },
  ];

  return (
    <section ref={sectionRef} id="partners" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div ref={headerRef} className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {t('Kortingen & Erkenning', 'Discounts & Recognition')}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {t('Voor', 'For')}<br />
              <span className="text-primary">{t('iedereen', 'everyone')}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </div>

        {/* Discount Programs */}
        <div ref={cardsRef} className="grid sm:grid-cols-3 gap-6 mb-24 max-w-6xl mx-auto">
          {discountPrograms.map((program, index) => (
            <div
              key={index}
              className="partner-card bg-card p-8 hover:bg-muted/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <program.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">
                {program.title}
              </h3>
              {program.discount && (
                <div className="text-primary text-sm font-bold mb-3">
                  {program.discount}
                </div>
              )}
              <p className="text-foreground/70 text-sm leading-[1.7]">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        {/* Affiliation Section */}
        <div ref={affiliationRef} className="mb-20">
          <div className="max-w-5xl mx-auto bg-card p-12 sm:p-16 border-l-8 border-primary">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Taekwondo Bond Nederland (TBN)
            </h3>
            <div className="space-y-6 text-foreground/70 text-lg leading-[1.8] max-w-4xl">
              <p>
                {t(
                  'Taekwondo Black Dragon is aangesloten bij de Taekwondo Bond Nederland (TBN). De TBN is de enige landelijke en internationale erkende sportbond die de belangen van de taekwondo sport behartigt in Nederland.',
                  'Taekwondo Black Dragon is affiliated with Taekwondo Bond Nederland (TBN). The TBN is the only nationally and internationally recognized sports federation that represents the interests of taekwondo in the Netherlands.'
                )}
              </p>
              <p>
                {t(
                  'De TBN zorgt ervoor dat sporters taekwondo op een verantwoorde manier kunnen beoefenen. Taekwondo Bond Nederland neemt met de nationale teams deel aan internationale toernooien over de hele wereld en organiseert in Nederland het nationaal dan examen en nationale en internationale kampioenschappen.',
                  'The TBN ensures that athletes can practice taekwondo in a responsible manner. Taekwondo Bond Nederland participates with national teams in international tournaments around the world and organizes national dan exams and national and international championships in the Netherlands.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div ref={logosRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: 'TBN', full: 'Taekwondo Bond Nederland' },
            { name: 'World Taekwondo', full: 'World Taekwondo Federation' },
            { name: 'IMAF', full: 'IMAF Nederland' },
            { name: 'NOC*NSF', full: 'NOC*NSF' },
          ].map((item, index) => (
            <div
              key={index}
              className="affiliation-logo bg-card p-10 flex items-center justify-center hover:bg-muted/30 transition-colors duration-300"
            >
              <div className="text-center">
                <div className="w-full h-20 flex items-center justify-center mb-3">
                  <div className="text-foreground/40 text-xs font-semibold uppercase tracking-wider">
                    {item.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
