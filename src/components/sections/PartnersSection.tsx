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
      logo: '/partners/ooievaarspas.png',
      url: 'https://www.ooievaarspas.nl/',
    },
    {
      icon: GraduationCap,
      title: t('Leergeld', 'Leergeld'),
      discount: t('Kledingvergoeding', 'Clothing allowance'),
      description: t(
        'Via Leergeld kunnen gezinnen een vergoeding krijgen voor sportkleding en benodigdheden.',
        'Through Leergeld, families can receive an allowance for sports clothing and supplies.'
      ),
      logo: '/partners/leergeld.png',
      url: 'https://www.leergeld.nl/',
    },
    {
      icon: Briefcase,
      title: t('SBB Stage Erkend', 'SBB Internship Recognized'),
      description: t(
        'Wij zijn erkend als stagebedrijf door SBB en bieden stageplekken voor aankomende sportinstructeurs.',
        'We are recognized as an internship company by SBB and offer internship positions for aspiring sports instructors.'
      ),
      logo: '/partners/sbb-beeldmerk.webp',
      url: 'https://www.s-bb.nl/',
    },
    {
      icon: Briefcase,
      title: t('Taekwondo Bond Nederland', 'Taekwondo Bond Nederland'),
      description: t(
        'Aangesloten bij de officiële Nederlandse Taekwondo bond, erkend door NOC*NSF.',
        'Affiliated with the official Dutch Taekwondo federation, recognized by NOC*NSF.'
      ),
      logo: '/partners/taekwondo-bond-nederland.png',
      url: 'https://www.taekwondobond.nl/',
    },
    {
      icon: Briefcase,
      title: t('World Taekwondo', 'World Taekwondo'),
      description: t(
        'Internationaal erkend door World Taekwondo, de wereldwijde taekwondo federatie.',
        'Internationally recognized by World Taekwondo, the global taekwondo federation.'
      ),
      logo: '/partners/world-taekwondo.png',
      url: 'https://www.worldtaekwondo.org/',
    },
    {
      icon: Briefcase,
      title: t('NOC*NSF', 'NOC*NSF'),
      description: t(
        'Erkend door NOC*NSF, de Nederlandse sportkoepel voor topsport en breedtesport.',
        'Recognized by NOC*NSF, the Dutch sports umbrella for elite and recreational sports.'
      ),
      logo: '/partners/noc-nsf.png',
      url: 'https://nocnsf.nl/',
    },
    {
      icon: Briefcase,
      title: t('Vechtsport Autoriteit', 'Martial Arts Authority'),
      description: t(
        'Erkend door de Vechtsport Autoriteit voor veilige en kwalitatieve vechtsportbeoefening.',
        'Recognized by the Martial Arts Authority for safe and quality martial arts practice.'
      ),
      logo: '/partners/vechtsport-autoriteit.png',
      url: 'https://vechtsportautoriteit.nl/',
    },
    {
      icon: Briefcase,
      title: t('Kukkiwon', 'Kukkiwon'),
      description: t(
        'Erkend door Kukkiwon, het wereldwijde hoofdkwartier van Taekwondo in Zuid-Korea.',
        'Recognized by Kukkiwon, the world headquarters of Taekwondo in South Korea.'
      ),
      logo: '/partners/kukkiwon.jpg',
      url: 'https://www.kukkiwon.or.kr/',
    },
    {
      icon: Briefcase,
      title: t('European Taekwondo', 'European Taekwondo'),
      description: t(
        'Aangesloten bij European Taekwondo Union, de Europese Taekwondo federatie.',
        'Affiliated with European Taekwondo Union, the European Taekwondo federation.'
      ),
      logo: '/partners/european-taekwondo.png',
      url: 'https://www.europeantaekwondounion.org/',
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
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 max-w-7xl mx-auto">
          {discountPrograms.map((program, index) => {
            const CardContent = (
              <>
                {program.logo ? (
                  <div className="w-24 h-16 flex items-center justify-center mb-4">
                    <img 
                      src={program.logo} 
                      alt={program.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                )}
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
              </>
            );

            return program.url ? (
              <a
                key={index}
                href={program.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card bg-card p-8 hover:bg-muted/30 transition-colors duration-300 block"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={index}
                className="partner-card bg-card p-8 hover:bg-muted/30 transition-colors duration-300"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
