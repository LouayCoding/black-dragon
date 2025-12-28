import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sparringImg from '@/assets/gallery/sparring.jpg';
import highKickImg from '@/assets/gallery/high-kick.jpg';
import littleTigersImg from '@/assets/gallery/little-tigers.jpg';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

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

      // Images stagger animation
      if (imagesRef.current) {
        const images = imagesRef.current.querySelectorAll('.image-card');
        gsap.from(images, {
          opacity: 0,
          y: 60,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: imagesRef.current,
            start: 'top 75%',
          },
        });
      }

      // Stats animation
      if (statsRef.current) {
        const stats = statsRef.current.querySelectorAll('.stat-item');
        gsap.from(stats, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        });
      }

      // Values animation
      if (valuesRef.current) {
        const values = valuesRef.current.querySelectorAll('.value-card');
        gsap.from(values, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 80%',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div ref={headerRef} className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {t('Over Ons', 'About Us')}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.15]">
              {t('Taekwondo', 'Taekwondo')}<br />
              <span className="text-primary">Black Dragon</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary"></div>
            <div className="space-y-6 max-w-2xl">
              <p className="text-foreground/80 text-lg sm:text-xl leading-[1.7] font-light">
                {t(
                  'Een sportclub gebaseerd op discipline, respect en vertrouwen.',
                  'A sports club based on discipline, respect and trust.'
                )}
              </p>
              <p className="text-foreground/60 text-base leading-[1.7]">
                {t(
                  'Aangesloten bij Taekwondo Bond Nederland, IMAF-Nederland en World Taekwondo Federatie.',
                  'Affiliated with Taekwondo Bond Nederland, IMAF-Netherlands and World Taekwondo Federation.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="mb-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border max-w-4xl mx-auto">
            {[
              { value: '2013', label: t('Opgericht', 'Founded') },
              { value: '100+', label: t('Studenten', 'Students') },
              { value: '2', label: t('Locaties', 'Locations') },
            ].map((stat, index) => (
              <div
                key={index}
                className="stat-item bg-background p-10 sm:p-12 text-center"
              >
                <div className="font-serif text-5xl sm:text-6xl font-bold text-primary mb-3">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-[0.15em] text-foreground/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div ref={valuesRef}>
          <div className="mb-14">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              {t('Kernwaarden', 'Core Values')}
            </h3>
            <div className="w-12 h-0.5 bg-primary mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { korean: '예의', english: t('Beleefdheid', 'Courtesy'), desc: t('Respect in alle interacties', 'Respect in all interactions') },
              { korean: '염치', english: t('Integriteit', 'Integrity'), desc: t('Eerlijkheid en sterke moraal', 'Honesty and strong morals') },
              { korean: '인내', english: t('Doorzettingsvermogen', 'Perseverance'), desc: t('Nooit opgeven', 'Never give up') },
              { korean: '극기', english: t('Zelfbeheersing', 'Self-Control'), desc: t('Beheers je emoties', 'Master emotions') },
            ].map((value, index) => (
              <div
                key={index}
                className="value-card bg-background p-8 sm:p-10 hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="text-5xl sm:text-6xl mb-5 text-primary">{value.korean}</div>
                <h4 className="font-bold text-lg sm:text-xl text-foreground mb-2 tracking-tight">
                  {value.english}
                </h4>
                <p className="text-foreground/60 text-sm leading-[1.6] max-w-[28ch]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
