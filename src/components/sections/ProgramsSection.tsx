'use client'

import { useLanguage } from '@/hooks/useLanguage';
import { Users, Zap, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ProgramsSection() {
  const { t } = useLanguage();

  const programs = [
    {
      icon: Users,
      image: littleTigersImg,
      title: 'Kleine Tijgers',
      age: '4-6 jaar',
      description: 'Leuke introductielessen die coördinatie, focus en zelfvertrouwen opbouwen door leeftijdsgeschikte spelletjes en basis Taekwondo bewegingen.',
      features: [
        'Motorische ontwikkeling',
        'Basis trappen & blokken',
        'Luistervaardigheden',
      ],
    },
    {
      icon: Zap,
      image: sparringImg,
      title: 'Jeugd',
      age: '7-17 jaar',
      description: 'Uitgebreide training die discipline, fitheid en zelfverdedigingsvaardigheden ontwikkelt terwijl sterke karakterfundamenten worden gelegd.',
      features: [
        'Zelfvertrouwen opbouwen',
        'Zelfverdediging',
        'Discipline & respect',
      ],
    },
    {
      icon: Heart,
      image: poomsaeImg,
      title: 'Vrouwen',
      age: '18+ jaar',
      description: 'Speciaal programma voor vrouwen gericht op kracht, zelfvertrouwen en zelfverdediging in een ondersteunende en veilige omgeving.',
      features: [
        'Empowerment & kracht',
        'Zelfverdedigingstechnieken',
        'Veilige leeromgeving',
      ],
    },
    {
      icon: Target,
      image: highKickImg,
      title: 'Volwassenen',
      age: '18+ jaar',
      description: 'Dynamische training gericht op persoonlijke ontwikkeling, waarbij je werkt aan zelfvertrouwen, conditie en mentale kracht.',
      features: [
        'Zelfvertrouwen opbouwen',
        'Conditie verbeteren',
        'Zelfverdediging',
      ],
    },
  ];

  return (
    <section id="programs" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {'Programmas'}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {'Jouw'}<br />
              <span className="text-primary">{'Taekwondo Reis'}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="space-y-8 max-w-2xl">
              <p className="text-foreground text-xl sm:text-2xl leading-[1.5] font-normal">
                {'Vanaf 4 jaar en ouder. Van eerste stap tot zwarte band.'}
              </p>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className="program-card bg-card rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src=program.image
                  alt=program.title
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <program.icon className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Age Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    program.age
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 leading-tight">
                  program.title
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  program.description
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-xs text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>feature</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/register"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  {'Meer Info'}
                  <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold rounded-full"
          >
            <Link href="/register">{'Probeer Gratis'}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
