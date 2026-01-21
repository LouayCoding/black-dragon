'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ProgramsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const programs = [
    {
      image: '/gallery/young-champion.jpg',
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
      image: '/gallery/jeugd-training.jpg',
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
      image: '/gallery/volwassenen-sparring.jpg',
      title: 'Volwassenen',
      age: '18+ jaar',
      description: 'Dynamische training gericht op persoonlijke ontwikkeling, waarbij je werkt aan zelfvertrouwen, conditie en mentale kracht.',
      features: [
        'Zelfvertrouwen opbouwen',
        'Conditie verbeteren',
        'Zelfverdediging',
      ],
    },
    {
      image: '/gallery/ladies-only-training.jpg',
      title: 'Ladies Only',
      age: '18+ jaar',
      description: 'Een krachtig ladies-only programma gericht op conditie, zelfvertrouwen en zelfverdediging, speciaal ontwikkeld voor vrouwen.',
      features: [
        'Sterker worden, mentaal en fysiek',
        'Zelfverdediging in de praktijk',
        'Veilig trainen in een fijne groep',
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
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                {'Programmas'}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {'Voor ieder'}<br />
              <span className="text-primary">{'leeftijd & niveau'}</span>
            </h2>
            <div className="space-y-6 max-w-2xl">
              <p className="text-foreground/90 text-lg leading-[1.8]">
                Van 4 jaar tot volwassenen. Of je nu je eerste stap zet in Taekwondo of al jaren traint, bij Black Dragon vind je het programma dat bij jou past.
              </p>
              <p className="text-foreground/90 text-lg leading-[1.8]">
                Elk programma is speciaal ontworpen voor de juiste leeftijdsgroep en vaardigheidsniveau, met ervaren instructeurs die jou begeleiden naar jouw volgende zwarte band.
              </p>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative h-[450px] rounded-xl overflow-hidden group"
            >
              {/* Full Background Image */}
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay - Always visible on mobile, hover on desktop */}
              <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-300 ${
                activeCard === index 
                  ? 'from-black via-black/95 to-black/80' 
                  : 'from-black via-black/60 to-black/20 lg:group-hover:from-black lg:group-hover:via-black/95 lg:group-hover:to-black/80'
              }`} />

              {/* Content Container */}
              <div className={`absolute inset-0 p-5 flex flex-col transition-all duration-500 ${
                activeCard === index 
                  ? 'justify-end' 
                  : 'justify-between lg:group-hover:justify-end'
              }`}>
                
                {/* Top: Age Badge - always visible */}
                <div className={`flex justify-end transition-opacity duration-300 ${
                  activeCard === index ? 'lg:opacity-100' : 'opacity-100'
                }`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {program.age}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="space-y-3">
                  {/* Title - Always visible */}
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {program.title}
                  </h3>
                  
                  {/* Info - Show on click (mobile) or hover (desktop) */}
                  <div className={`space-y-3 transition-all duration-500 ${
                    activeCard === index 
                      ? 'opacity-100 max-h-96' 
                      : 'opacity-0 max-h-0 overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-96'
                  }`}>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {program.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-1.5">
                      {program.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-xs text-white/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="/register"
                      className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-black font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-sm"
                    >
                      Inschrijven
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile: Clickable Overlay + Info Button */}
              <div 
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                className="lg:hidden absolute inset-0 cursor-pointer"
              >
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-primary backdrop-blur-sm rounded-full flex items-center justify-center text-black text-lg font-bold shadow-lg pointer-events-none">
                  {activeCard === index ? '×' : 'i'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold rounded-lg"
          >
            <Link href="/register">{'Inschrijven'}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
