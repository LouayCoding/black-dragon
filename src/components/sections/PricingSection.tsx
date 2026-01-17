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
      image: '/gallery/poomsae.jpg',
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
      image: '/gallery/sparring.jpg',
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
      image: '/gallery/championship.jpg',
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
      <div ref={ref} className="container mx-auto px-4">
        {/* Membership Benefits */}
        <div className={cn(
          "mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
            Waarom lid worden?
          </h3>
          <MembershipBenefits variant="default" />
        </div>

        {/* Plans Grid */}
        <div className={cn(
          "grid md:grid-cols-3 gap-8 mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative bg-card rounded-lg border-2 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full",
                plan.highlighted
                  ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                  : "border-border hover:border-primary/50"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Header Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-white">{plan.name}</h3>
                </div>
              </div>

              {plan.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Populair
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-foreground">€{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "w-full mt-auto font-semibold",
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                      : "bg-foreground hover:bg-foreground/90 text-background"
                  )}
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Options */}
        <div className={cn(
          "mb-16 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">
            Extra Opties
          </h3>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {extras.map((extra, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-6 text-center hover:border-primary/30 hover:shadow-md transition-all"
              >
                <p className="text-3xl font-bold text-primary mb-2">€{extra.price}</p>
                <h4 className="font-semibold text-foreground mb-1">{extra.name}</h4>
                <p className="text-muted-foreground text-xs">{extra.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ooievaarspas Section - Redesigned */}
        <div className={cn(
          "transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="bg-gradient-to-br from-[#00A651]/10 via-[#00A651]/5 to-transparent rounded-3xl border border-[#00A651]/20 p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 relative bg-white rounded-2xl p-4 shadow-lg">
                  <Image
                    src="/partners/ooievaarspas.png"
                    alt="Ooievaarspas"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Ooievaarspas Houders
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg">
                  Wij accepteren de Ooievaarspas! Profiteer van aantrekkelijke kortingen op onze lidmaatschappen.
                </p>

                {/* Discount Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-[#00A651]/20">
                    <p className="text-3xl md:text-4xl font-bold text-[#00A651] mb-1">100%</p>
                    <p className="text-sm text-muted-foreground font-medium">
                      Vergoeding onder 18 jaar
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-[#00A651]/20">
                    <p className="text-3xl md:text-4xl font-bold text-[#00A651] mb-1">50%</p>
                    <p className="text-sm text-muted-foreground font-medium">
                      Vergoeding boven 18 jaar
                    </p>
                  </div>
                </div>

                <Button 
                  asChild 
                  className="bg-[#00A651] hover:bg-[#008C45] text-white font-semibold"
                >
                  <a 
                    href="https://ooievaarspas.nl/aanbiedingen/taekwondo-black-dragon/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Bekijk op Ooievaarspas.nl
                    <ExternalLink className="w-4 h-4" />
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
