import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Star, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TestimonialsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        const cards = cardsRef.current.querySelectorAll('.testimonial-card');
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: 'Fatima El Amrani',
      role: t('Ouder van Youssef (8 jaar)', 'Parent of Youssef (8 years)'),
      rating: 5,
      text: t(
        'Mijn zoon is volledig getransformeerd sinds hij begon met taekwondo. Zijn zelfvertrouwen is enorm gegroeid en hij heeft geleerd om respectvol met anderen om te gaan.',
        'My son has been completely transformed since he started taekwondo. His confidence has grown enormously and he has learned to treat others with respect.'
      ),
    },
    {
      name: 'Rajesh Bhairosingh',
      role: t('Volwassen leerling, 2 jaar ervaring', 'Adult student, 2 years experience'),
      rating: 5,
      text: t(
        'Als 35-jarige was ik nerveus om te beginnen, maar de sfeer is zo welkom dat ik me meteen thuis voelde. Ik ben fitter dan ooit en heb onlangs mijn groene band behaald.',
        'As a 35-year-old, I was nervous to start, but the atmosphere is so welcoming that I immediately felt at home. I am fitter than ever and recently earned my green belt.'
      ),
    },
    {
      name: 'Carmen Rodríguez',
      role: t('Zwarte band leerling', 'Black belt student'),
      rating: 5,
      text: t(
        'Na 5 jaar training heb ik eindelijk mijn zwarte band behaald. De reis was uitdagend maar ongelooflijk lonend.',
        'After 5 years of training, I finally earned my black belt. The journey was challenging but incredibly rewarding.'
      ),
    },
    {
      name: 'Pieter van der Meer',
      role: t('Ouder van Emma (6 jaar)', 'Parent of Emma (6 years)'),
      rating: 5,
      text: t(
        'Het kleine tijgers programma is perfect voor onze dochter. Ze leert discipline en coördinatie terwijl ze plezier heeft.',
        'The little tigers program is perfect for our daughter. She learns discipline and coordination while having fun.'
      ),
    },
    {
      name: 'Ioana Popescu',
      role: t('Wedstrijdatleet', 'Competition athlete'),
      rating: 5,
      text: t(
        'Dankzij de uitstekende coaching heb ik dit jaar brons gewonnen op het NK. De focus op techniek én mentale weerbaarheid maakt deze school uniek.',
        'Thanks to the excellent coaching, I won bronze at the national championship this year. The focus on technique and mental resilience makes this school unique.'
      ),
    },
    {
      name: 'Mohammed Azzouz',
      role: t('Volwassen leerling, 6 maanden ervaring', 'Adult student, 6 months experience'),
      rating: 5,
      text: t(
        'Ik zocht een manier om fit te worden en stress kwijt te raken. Taekwondo biedt dit en zoveel meer.',
        'I was looking for a way to get fit and relieve stress. Taekwondo offers this and so much more.'
      ),
    },
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div ref={headerRef} className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {t('Getuigenissen', 'Testimonials')}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {t('Wat onze', 'What our')}<br />
              <span className="text-primary">{t('leerlingen zeggen', 'students say')}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="space-y-8 max-w-2xl">
              <p className="text-foreground text-xl sm:text-2xl leading-[1.5] font-normal">
                {t(
                  'Echte verhalen. Echte resultaten.',
                  'Real stories. Real results.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-background p-8 sm:p-10 border-l-4 border-primary hover:bg-muted/30 transition-colors duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 text-base leading-[1.8] mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-base">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-base">{testimonial.name}</p>
                  <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
