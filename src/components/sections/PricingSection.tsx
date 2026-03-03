'use client'

import { Button } from '@/components/ui/button';
import { Check, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeInView } from '@/components/animations/FadeInView';

export function PricingSection() {
  const plans = [
    {
      name: 'Basis',
      price: '32,50',
      period: '/maand',
      description: '1x per week trainen',
      image: '/pricing/basis.jpg',
      features: [
        '1x per week training',
        '1x per jaar bandexamen',
        'Toegang tot basisprogramma',
        'Online lesmateriaal',
      ],
      highlighted: false,
    },
    {
      name: 'Standaard',
      price: '37,50',
      period: '/maand',
      description: '2x per week trainen',
      image: '/pricing/standaard.jpg',
      features: [
        '2x per week training',
        '2x per jaar bandexamen',
        'Toegang tot alle programma\'s',
        'Online lesmateriaal',
      ],
      highlighted: true,
      popular: true,
    },
    {
      name: 'Intensief',
      price: '45',
      period: '/maand',
      description: '3x per week trainen',
      image: '/pricing/intensief.jpg',
      features: [
        '3x per week training',
        'Toegang tot alle programma\'s',
        'Wedstrijdtraining toegang',
        'Online lesmateriaal',
        'Prioriteit bij evenementen',
      ],
      highlighted: false,
    },
  ];

  const extras = [
    {
      name: 'Inschrijfkosten',
      price: '€30',
      description: 'Eenmalig bij eerste inschrijving',
    },
    {
      name: 'Privéles',
      price: '€70',
      description: '1-op-1 training met instructeur',
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <FadeInView className="mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-8">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
              Tarieven
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Kies jouw<br />
              <span className="text-primary">lidmaatschap</span>
            </h1>
            <p className="text-foreground/70 text-sm sm:text-base lg:text-lg leading-[1.8] max-w-2xl">
              Van 1x per week tot intensieve training — voor ieder niveau een passend abonnement.
            </p>
          </div>
        </FadeInView>

        {/* Plans Grid */}
        <FadeInView delay={0.15} className="grid md:grid-cols-3 gap-5 mb-16 sm:mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden flex flex-col h-full min-h-[480px] transition-all duration-300 group ${
                plan.highlighted ? 'shadow-xl shadow-primary/10 ring-2 ring-primary' : 'hover:shadow-xl'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
              </div>

              {plan.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Populair
                  </span>
                </div>
              )}

              <div className="relative z-10 p-6 sm:p-8 flex flex-col flex-grow">
                <div className="text-center mb-8 pt-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-bold text-white">€{plan.price}</span>
                    <span className="text-white/50 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-white/50 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className={`w-full mt-auto font-semibold rounded-lg ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20'
                  }`}
                >
                  <Link href="/inschrijven">Inschrijven</Link>
                </Button>
              </div>
            </div>
          ))}
        </FadeInView>

        {/* Extra Kosten */}
        <FadeInView delay={0.25} className="mb-16 sm:mb-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Extra kosten
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {extras.map((extra, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
              >
                {extra.price ? (
                  <p className="text-2xl font-bold text-foreground mb-2">{extra.price}</p>
                ) : (
                  <p className="text-sm font-semibold text-primary mb-2">Inbegrepen</p>
                )}
                <h5 className="font-semibold text-sm text-foreground mb-1">{extra.name}</h5>
                <p className="text-foreground/50 text-xs">{extra.description}</p>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Kortingen */}
        <FadeInView delay={0.35}>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Kortingen
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a
              href="https://ooievaarspas.nl/aanbiedingen/taekwondo-black-dragon/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300 group block"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image src="/partners/ooievaarspas.png" alt="Ooievaarspas" fill className="object-contain" />
                </div>
                <div className="flex-grow">
                  <h5 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    Ooievaarspas
                    <ExternalLink className="w-3.5 h-3.5 text-foreground/30 group-hover:text-primary transition-colors" />
                  </h5>
                  <p className="text-foreground/50 text-sm">
                    Tot 18 jaar: <strong className="text-foreground">100% vergoed</strong> &middot; 18+: <strong className="text-foreground">50% vergoed</strong>
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://www.leergeld.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300 group block"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image src="/partners/leergeld.png" alt="Leergeld" fill className="object-contain" />
                </div>
                <div className="flex-grow">
                  <h5 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    Leergeld
                    <ExternalLink className="w-3.5 h-3.5 text-foreground/30 group-hover:text-primary transition-colors" />
                  </h5>
                  <p className="text-foreground/50 text-sm">
                    Vergoeding sportkleding &amp; materiaal
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Bottom */}
          <div className="bg-muted/30 rounded-lg p-5 max-w-3xl mx-auto text-center">
            <p className="text-foreground/50 text-sm">
              Lidmaatschap TBN (Taekwondo Bond Nederland) wordt aanbevolen. Vragen? <Link href="/contact" className="text-primary hover:underline">Neem contact op</Link>.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
