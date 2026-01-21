'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { MembershipBenefits } from '@/components/shared/MembershipBenefits';

export function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  const plans = [
    {
      name: 'Basis',
      price: '32,50',
      period: '/maand',
      description: 'Ideaal voor beginners die 1x per week willen trainen.',
      image: '/pricing/basis.jpg',
      features: [
        '1x per week training',
        '1x per jaar bandexamen',
        'Toegang tot basisprogramma',
        'Online lesmateriaal',
      ],
      highlighted: false,
      cta: 'Kies Basis',
    },
    {
      name: 'Standaard',
      price: '37,50',
      period: '/maand',
      description: 'Onze meest populaire optie voor toegewijde leerlingen.',
      image: '/pricing/standaard.jpg',
      features: [
        '2x per week training',
        '2x per jaar bandexamen',
        'Toegang tot alle programmas',
        'Online lesmateriaal',
      ],
      highlighted: true,
      popular: true,
      cta: 'Kies Standaard',
    },
    {
      name: 'Intensief',
      price: '45',
      period: '/maand',
      description: 'Voor serieuze atleten die maximale vooruitgang willen.',
      image: '/pricing/intensief.jpg',
      features: [
        '3x per week training',
        'Toegang tot alle programmas',
        'Wedstrijdtraining toegang',
        'Online lesmateriaal',
        'Prioriteit bij evenementen',
      ],
      highlighted: false,
      cta: 'Kies Intensief',
    },
  ];

  const extras = [
    {
      name: 'Inschrijfkosten',
      price: '30',
      description: 'Eenmalig bij eerste inschrijving',
    },
    {
      name: 'Privéles',
      price: '70',
      description: '1-op-1 training met instructeur',
    },
    {
      name: 'Bandexamen',
      price: '35',
      description: 'Voor niet-leden of extra examens',
    },
  ];

  return (
    <section className="section-padding bg-muted/30 relative">
      <div ref={ref} className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Tarieven
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Kies jouw<br />
              <span className="text-primary">lidmaatschap</span>
            </h1>
            <div className="space-y-6 max-w-2xl">
              <p className="text-foreground/90 text-lg leading-[1.8]">
                Ontdek welk trainingsplan het beste bij jou past. Van 1x per week tot intensieve training - wij hebben voor ieder niveau en elke ambitie een passend lidmaatschap.
              </p>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className={cn(
          "grid md:grid-cols-3 gap-6 mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full group",
                plan.highlighted
                  ? "shadow-lg"
                  : ""
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
              </div>

              {plan.popular && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    Populair
                  </span>
                </div>
              )}

              <div className="relative z-10 p-6 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl font-bold text-white">€{plan.price}</span>
                    <span className="text-white/60 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-white/70 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-2.5 mb-6 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/90 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "w-full mt-auto font-semibold rounded-lg",
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-foreground hover:bg-foreground/90 text-background"
                  )}
                >
                  <Link href="/register">{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Opties & Kortingen */}
        <div className={cn(
          "mb-16 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Extra Opties & Kortingen
          </h3>
          
          {/* Extra Options */}
          <div className="mb-12">
            <h4 className="text-lg font-semibold text-foreground mb-4">Eenmalige Kosten</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {extras.map((extra, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-5 hover:shadow-md transition-all"
                >
                  <p className="text-2xl font-bold text-foreground mb-2">€{extra.price}</p>
                  <h5 className="font-semibold text-sm text-foreground mb-1">{extra.name}</h5>
                  <p className="text-foreground/60 text-xs leading-relaxed">{extra.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kortingen */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Beschikbare Kortingen</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Ooievaarspas */}
              <div className="bg-card rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 relative flex-shrink-0">
                    <Image
                      src="/partners/ooievaarspas.png"
                      alt="Ooievaarspas"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="font-semibold text-base text-foreground mb-1">Ooievaarspas</h5>
                    <p className="text-foreground/60 text-xs">
                      Tot 18 jaar: 100% • 18+ jaar: 50%
                    </p>
                  </div>
                </div>
                <Button 
                  asChild 
                  size="sm"
                  variant="outline"
                  className="w-full text-xs"
                >
                  <a 
                    href="https://ooievaarspas.nl/aanbiedingen/taekwondo-black-dragon/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Meer info
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>

              {/* Leergeld */}
              <div className="bg-card rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 relative flex-shrink-0">
                    <Image
                      src="/partners/leergeld.png"
                      alt="Leergeld"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <h5 className="font-semibold text-base text-foreground mb-1">Leergeld</h5>
                    <p className="text-foreground/60 text-xs">
                      Vergoeding sportkleding & materiaal
                    </p>
                  </div>
                </div>
                <Button 
                  asChild 
                  size="sm"
                  variant="outline"
                  className="w-full text-xs"
                >
                  <a 
                    href="https://www.leergeld.nl/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Meer info
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-muted-foreground text-sm mb-6 max-w-2xl mx-auto">
            Alle prijzen zijn inclusief BTW. Eenmalige inschrijfkosten van €30 zijn verplicht bij eerste aanmelding. 
            Lidmaatschap TBN (Taekwondo Bond Nederland) wordt aanbevolen.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Vragen? Neem Contact Op</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
