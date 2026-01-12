'use client'

import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';


export function TestimonialsSection() {
        
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
      role: 'Ouder van Youssef (8 jaar)',
      rating: 5,
      text: Mijn zoon is volledig getransformeerd sinds hij begon met taekwondo. Zijn zelfvertrouwen is enorm gegroeid en hij heeft geleerd om respectvol met anderen om te gaan.,
    },
    {
      name: 'Rajesh Bhairosingh',
      role: 'Volwassen leerling, 2 jaar ervaring',
      rating: 5,
      text: Als 35-jarige was ik nerveus om te beginnen, maar de sfeer is zo welkom dat ik me meteen thuis voelde. Ik ben fitter dan ooit en heb onlangs mijn groene band behaald.,
    },
    {
      name: 'Carmen Rodríguez',
      role: 'Zwarte band leerling',
      rating: 5,
      text: Na 5 jaar training heb ik eindelijk mijn zwarte band behaald. De reis was uitdagend maar ongelooflijk lonend.,
    },
    {
      name: 'Pieter van der Meer',
      role: 'Ouder van Emma (6 jaar)',
      rating: 5,
      text: Het kleine tijgers programma is perfect voor onze dochter. Ze leert discipline en coördinatie terwijl ze plezier heeft.,
    },
    {
      name: 'Ioana Popescu',
      role: 'Wedstrijdatleet',
      rating: 5,
      text: Dankzij de uitstekende coaching heb ik dit jaar brons gewonnen op het NK. De focus op techniek én mentale weerbaarheid maakt deze school uniek.,
    },
    {
      name: 'Mohammed Azzouz',
      role: 'Volwassen leerling, 6 maanden ervaring',
      rating: 5,
      text: Ik zocht een manier om fit te worden en stress kwijt te raken. Taekwondo biedt dit en zoveel meer.,
    },
  ];

  return (
    <section id="testimonials" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {'Getuigenissen'}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {'Wat onze'}<br />
              <span className="text-primary">{'leerlingen zeggen'}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="space-y-8 max-w-2xl">
              <p className="text-foreground text-xl sm:text-2xl leading-[1.5] font-normal">
                {Echte verhalen. Echte resultaten.}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
