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
      name: 'Ioana Popescu',
      role: 'Wedstrijdatleet',
      rating: 5,
      text: 'Dankzij de uitstekende coaching heb ik dit jaar brons gewonnen op het NK. De focus op techniek én mentale weerbaarheid maakt deze school uniek.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <FadeInView className="mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-8">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
              Ervaringen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Wat onze<br />
              <span className="text-primary">leden zeggen</span>
            </h2>
          </div>
        </FadeInView>

        {/* Testimonials Grid */}
        <FadeInView delay={0.2} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-primary/20 text-5xl font-serif leading-none mb-2">&ldquo;</div>

              {/* Text */}
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-foreground/50 text-xs mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </FadeInView>

        {/* Google Reviews link */}
        <FadeInView delay={0.3} className="text-center">
          <a
            href="https://www.google.com/search?q=taekwondo+black+dragon+den+haag+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Bekijk meer reviews op Google &rarr;
          </a>
        </FadeInView>
      </div>
    </section>
  );
}
