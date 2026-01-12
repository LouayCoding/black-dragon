'use client'

import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  koreanText?: string;
  backgroundImage?: string;
}

export function PageHero({ title, titleHighlight, subtitle, koreanText, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative py-16 md:py-20 bg-muted/50 overflow-hidden">
      {/* Background Image (optional) */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      
      {/* Red Accent Overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {koreanText && (
          <p className="text-primary text-lg font-medium tracking-[0.3em] mb-4 animate-fade-up">
            {koreanText}
          </p>
        )}
        
        <h1 className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight animate-fade-up-delay-1"
        )}>
          {title}
          {titleHighlight && (
            <span className="block text-primary mt-2">{titleHighlight}</span>
          )}
        </h1>
        
        {subtitle && (
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto animate-fade-up-delay-2">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
