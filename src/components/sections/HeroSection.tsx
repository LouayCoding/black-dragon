'use client'

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {

  return (
    <section
      id="home"
      className="relative h-[70vh] lg:h-[85vh] -mt-20 lg:-mt-24 pt-20 lg:pt-24 flex items-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"
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
          
          {/* Main Heading */}
          <div className="text-center mb-6">
            <p
              className="text-xs sm:text-sm md:text-base text-white/60 font-light tracking-widest mb-4 uppercase"
            >
              태권도 블랙 드래곤
            </p>
            <h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none mb-6"
            >
              Taekwondo
              <span className="block mt-2 text-primary">Black Dragon</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="font-serif text-center text-sm sm:text-base md:text-lg lg:text-xl text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Ontwikkel kracht, discipline en zelfvertrouwen
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-5 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300"
            >
              <Link href="/inschrijven">Inschrijven</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-5 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300"
            >
              <Link href="/programs">Bekijk Programma&apos;s</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-primary transition-colors"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
