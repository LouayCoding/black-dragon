'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import { MembershipBenefits } from '@/components/shared/MembershipBenefits';

export function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  const plans = [
    {
      name: 'Basis',
      price: '32,50',
      period: '/maand',
      description: 'Ideaal voor beginners die 1x per week willen trainen.',
      features: [
        '1x per week training',
        '1x per jaar bandexamen',
        'Toegang tot basisprogramma',
        'Online lesmateriaal',
        'Maandelijks opzegbaar',
      ],
      highlighted: false,
      cta: 'Kies Basis',
    },
    {
      name: 'Standaard',
      price: 'TBN',
      period: '/maand',
      description: 'Onze meest populaire optie voor toegewijde leerlingen.',
      features: [
        '2x per week training',
        '2x per jaar bandexamen',
        'Toegang tot alle programmas',
        'Online lesmateriaal',
        'Maandelijks opzegbaar',
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
      features: [
        '3x per week training',
        'Toegang tot alle programmas',
        'Bandexamens inbegrepen',
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
      name: 'Eenmalige Inschrijfkosten',
      price: '30',
      period: undefined,
      description: 'Verplicht bij eerste inschrijving',
    },
    {
      name: 'Privéles',
      price: '50',
      period: undefined,
      description: '1-op-1 training met een instructeur',
    },
    {
      name: 'Bandexamen (los)',
      price: '35',
      period: undefined,
      description: 'Voor niet-leden of extra examens',
    },
  ];

  return (
    <section className="section-padding bg-muted/30 relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Membership Benefits */}
        <div className={cn(
          "mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
            {'Waarom lid worden?'}
          </h3>
          <MembershipBenefits variant="default" />
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
                "relative bg-card rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1",
                plan.highlighted
                  ? "border-primary shadow-lg ring-2 ring-primary/20"
                  : "border-border hover:border-primary/30 hover:shadow-lg"
              )}
              style={{ transitionDelay: isVisible ? `${index} * 100ms` : '0ms' }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {'Meest Populair'}
                  </span>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-foreground">€{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  "w-full",
                  plan.highlighted
                    ? "bg-primary hover:bg-accent text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                )}
              >
                <Link href="/contact">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Extra Options */}
        <div className={cn(
          "transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">
            {'Extra Opties'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {extras.map((extra, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border p-5 text-center hover:border-primary/30 transition-colors"
              >
                <h4 className="font-semibold text-foreground mb-1">{extra.name}</h4>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-2xl font-bold text-primary">€{extra.price}</span>
                  {extra.period && <span className="text-muted-foreground text-sm">{extra.period}</span>}
                </div>
                <p className="text-muted-foreground text-sm">{extra.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ooievaarspas Section */}
        <div className={cn(
          "mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20 max-w-2xl mx-auto transition-all duration-700 delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="font-serif text-xl font-semibold text-foreground text-center mb-3">
            {'Ooievaarspas Houders'}
          </h3>
          <p className="text-muted-foreground text-sm text-center mb-4">
            Wij accepteren de Ooievaarspas! Profiteer van aantrekkelijke kortingen op onze lidmaatschappen.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <p className="text-2xl font-bold text-primary mb-1">100%</p>
              <p className="text-sm text-muted-foreground">
                {'Vergoeding onder 18 jaar'}
              </p>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <p className="text-2xl font-bold text-primary mb-1">50%</p>
              <p className="text-sm text-muted-foreground">
                {'Vergoeding boven 18 jaar'}
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button asChild>
              <a 
                href="https://ooievaarspas.nl/aanbiedingen/taekwondo-black-dragon/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {'Bekijk op Ooievaarspas.nl'}
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Note */}
        <div className={cn(
          "text-center mt-12 p-6 bg-card rounded-lg border border-border max-w-2xl mx-auto transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-muted-foreground text-sm mb-4">
            Alle prijzen zijn inclusief BTW. Eenmalige inschrijfkosten van €30 zijn verplicht bij eerste aanmelding. Lidmaatschap TBN (Taekwondo Bond Nederland) wordt aanbevolen. Neem contact op voor meer informatie.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">{'Vragen? Neem Contact Op'}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
