'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { FadeInView } from '@/components/animations/FadeInView';

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
      title: 'Junioren',
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
    <section id="programs" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <FadeInView className="mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Programma&apos;s
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Voor iedere<br />
              <span className="text-primary">leeftijd &amp; niveau</span>
            </h2>
            <p className="text-foreground/90 text-sm sm:text-base lg:text-lg leading-[1.8] max-w-2xl">
              Van 4 jaar tot volwassenen — bij Black Dragon vind je het programma dat bij jou past. Tik op een programma voor meer info.
            </p>
          </div>
        </FadeInView>

        {/* Programs Grid - Slider on mobile */}
        <FadeInView delay={0.2} className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:grid lg:grid-cols-4 lg:gap-6 pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
          {programs.map((program, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className="relative h-[450px] rounded-xl overflow-hidden group flex-shrink-0 w-[85vw] sm:w-auto snap-center lg:snap-align-none cursor-pointer"
            >
              {/* Full Background Image */}
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
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
                
                {/* Top: Age Badge */}
                <div className="flex justify-end">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {program.age}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {program.title}
                  </h3>
                  
                  {/* Expandable Info */}
                  <div className={`space-y-3 transition-all duration-500 ${
                    activeCard === index 
                      ? 'opacity-100 max-h-96' 
                      : 'opacity-0 max-h-0 overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-96'
                  }`}>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {program.description}
                    </p>

                    <ul className="space-y-1.5">
                      {program.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-xs text-white/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/inschrijven"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-black font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-sm"
                    >
                      Inschrijven
                      <span className="ml-2">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </FadeInView>

        {/* Bottom CTA */}
        <FadeInView delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-lg"
          >
            <Link href="/inschrijven">Inschrijven</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-muted px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-lg"
          >
            <Link href="/schedule">Bekijk Rooster</Link>
          </Button>
        </FadeInView>
      </div>
    </section>
  );
}
