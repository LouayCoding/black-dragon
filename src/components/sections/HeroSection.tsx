'use client'

import Link from 'next/link';
import { CaretDown, Medal, MapPin, ShieldCheck } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { FadeInView } from '@/components/animations/FadeInView';

const trustItems = [
  { icon: Medal, label: '13+ jaar ervaring' },
  { icon: MapPin, label: '2 locaties in Den Haag' },
  { icon: ShieldCheck, label: 'Erkend door TBN & NOC*NSF' },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[640px] h-[100vh] sm:h-[90vh] lg:h-[92vh] -mt-20 lg:-mt-24 pt-20 lg:pt-24 flex items-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(/hero.jpg)`,
        }}
      />

      {/* Gradient Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            {/* Eyebrow Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                태권도 블랙 드래곤
              </span>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                Taekwondo
                <span className="block mt-1 sm:mt-2 text-primary">Black Dragon</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-center text-base sm:text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Ontwikkel kracht, discipline en zelfvertrouwen — voor elke leeftijd, in Den Haag.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-10 font-semibold rounded-lg transition-all duration-300"
              >
                <Link href="/inschrijven">Inschrijven</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-10 font-semibold rounded-lg transition-all duration-300"
              >
                <Link href="/programs">Bekijk Programma&apos;s</Link>
              </Button>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/60">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                  <Icon className="w-4 h-4 text-primary shrink-0" weight="duotone" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll naar volgende sectie"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest hidden sm:inline">Scroll</span>
        <CaretDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
