'use client'

import { Star } from 'lucide-react';
import { FadeInView } from '@/components/animations/FadeInView';

export function TestimonialsSection() {


  const testimonials = [
    {
      name: 'Fatima El Amrani',
      role: 'Ouder van Youssef (8 jaar)',
      rating: 5,
      text: 'Mijn zoon is volledig getransformeerd sinds hij begon met taekwondo. Zijn zelfvertrouwen is enorm gegroeid en hij heeft geleerd om respectvol met anderen om te gaan.',
    },
    {
      name: 'Rajesh Bhairosingh',
      role: 'Volwassen leerling, 2 jaar ervaring',
      rating: 5,
      text: 'Als 35-jarige was ik nerveus om te beginnen, maar de sfeer is zo welkom dat ik me meteen thuis voelde. Ik ben fitter dan ooit en heb onlangs mijn groene band behaald.',
    },
    {
      name: 'Carmen Rodríguez',
      role: 'Zwarte band leerling',
      rating: 5,
      text: 'Na 5 jaar training heb ik eindelijk mijn zwarte band behaald. De reis was uitdagend maar ongelooflijk lonend.',
    },
    {
      name: 'Pieter van der Meer',
      role: 'Ouder van Emma (6 jaar)',
      rating: 5,
      text: 'Het kleine tijgers programma is perfect voor onze dochter. Ze leert discipline en coördinatie terwijl ze plezier heeft.',
    },
    {
      name: 'Ioana Popescu',
      role: 'Wedstrijdatleet',
      rating: 5,
      text: 'Dankzij de uitstekende coaching heb ik dit jaar brons gewonnen op het NK. De focus op techniek én mentale weerbaarheid maakt deze school uniek.',
    },
    {
      name: 'Mohammed Azzouz',
      role: 'Volwassen leerling, 6 maanden ervaring',
      rating: 5,
      text: 'Ik zocht een manier om fit te worden en stress kwijt te raken. Taekwondo biedt dit en zoveel meer.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <FadeInView className="mb-16">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Reviews
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Wat onze<br />
              <span className="text-primary">leerlingen zeggen</span>
            </h2>
            <div className="space-y-6 max-w-2xl">
              <p className="text-foreground/90 text-sm sm:text-base lg:text-lg leading-[1.8]">
                Ontdek de ervaringen van onze leerlingen en hun families. Van beginnende kinderen tot gevorderde volwassenen - iedereen heeft zijn eigen unieke reis bij Black Dragon.
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Testimonials Grid */}
        <FadeInView delay={0.2} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 hover:shadow-md transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground/20 text-foreground/20" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-foreground/50 text-xs mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </FadeInView>
      </div>
    </section>
  );
}
