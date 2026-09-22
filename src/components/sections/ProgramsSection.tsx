'use client'

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CaretRight, Plus } from '@phosphor-icons/react/dist/ssr';
import { FadeInView } from '@/components/animations/FadeInView';

const programs = [
  {
    image: '/gallery/young-champion.jpg',
    title: 'Kleine Tijgers',
    age: '4-6 jaar',
    teaser: 'Speels kennismaken met Taekwondo',
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
    teaser: 'Discipline, fitheid & zelfverdediging',
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
    teaser: 'Conditie, kracht & mentale focus',
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
    teaser: 'Trainen in een veilige, fijne groep',
    description: 'Een krachtig ladies-only programma gericht op conditie, zelfvertrouwen en zelfverdediging, speciaal ontwikkeld voor vrouwen.',
    features: [
      'Sterker worden, mentaal en fysiek',
      'Zelfverdediging in de praktijk',
      'Veilig trainen in een fijne groep',
    ],
  },
];

function ProgramCard({
  program,
  index,
  isOpen,
  onToggle,
}: {
  program: (typeof programs)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentId = `program-content-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex-shrink-0 w-[82vw] snap-center sm:w-auto sm:snap-align-none"
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        className="relative h-[440px] sm:h-[460px] lg:h-[480px] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {/* Full Background Image */}
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 82vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
            isOpen
              ? 'from-black via-black/90 to-black/50'
              : 'from-black/95 via-black/40 to-black/10 group-hover:via-black/70'
          }`}
        />

        {/* Top: Age Badge + Toggle Indicator */}
        <div className="absolute inset-x-0 top-0 p-4 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {program.age}
          </span>
          <span
            className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-transform duration-300 ${
              isOpen ? 'rotate-45 bg-primary border-primary' : ''
            }`}
          >
            <Plus className="w-4 h-4" weight="bold" />
          </span>
        </div>

        {/* Bottom Content */}
        <div className="absolute inset-x-0 bottom-0 p-5 space-y-3">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
              {program.title}
            </h3>
            <p
              className={`text-white/70 text-sm mt-1 transition-opacity duration-300 ${
                isOpen ? 'opacity-0 h-0' : 'opacity-100'
              }`}
            >
              {program.teaser}
            </p>
          </div>

          {/* Expandable Info */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                id={contentId}
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-1">
                  <p className="text-white/90 text-sm leading-relaxed">
                    {program.description}
                  </p>

                  <ul className="space-y-1.5">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-white/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/inschrijven"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center w-full gap-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-sm"
                  >
                    Inschrijven
                    <CaretRight className="w-4 h-4" weight="bold" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function ProgramsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="programs" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <FadeInView className="mb-16 sm:mb-20 lg:mb-24">
          <div className="max-w-3xl space-y-6">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
              Programma&apos;s
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Voor iedere<br />
              <span className="text-primary">leeftijd &amp; niveau</span>
            </h2>
            <p className="text-foreground/90 text-sm sm:text-base lg:text-lg leading-[1.8] max-w-2xl">
              Van 4 jaar tot volwassenen — bij Black Dragon vind je het programma dat bij jou past. Tik op een programma voor meer info.
            </p>
          </div>
        </FadeInView>

        {/* Programs Grid — horizontal scroll on mobile, 2-col on tablet, 4-col on desktop */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4 lg:gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {programs.map((program, index) => (
              <ProgramCard
                key={program.title}
                program={program}
                index={index}
                isOpen={activeCard === index}
                onToggle={() => setActiveCard((prev) => (prev === index ? null : index))}
              />
            ))}
          </div>

          {/* Mobile swipe hint */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-4 text-muted-foreground text-xs font-medium">
            <span>Swipe voor meer programma&apos;s</span>
            <CaretRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Bottom CTA */}
        <FadeInView delay={0.15} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 font-semibold rounded-lg"
          >
            <Link href="/inschrijven">Inschrijven</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-border text-foreground hover:bg-muted px-8 sm:px-12 font-semibold rounded-lg"
          >
            <Link href="/schedule">Bekijk Rooster</Link>
          </Button>
        </FadeInView>
      </div>
    </section>
  );
}
