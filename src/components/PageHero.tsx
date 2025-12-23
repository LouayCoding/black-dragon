import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  koreanText?: string;
}

export function PageHero({ title, titleHighlight, subtitle, koreanText }: PageHeroProps) {
  return (
    <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 korean-pattern opacity-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-primary/20 rounded-full" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-primary/10 rounded-full" />
      
      {/* Korean Character Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <span className="font-serif text-[30vw] text-primary-foreground leading-none">道</span>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {koreanText && (
          <p className="text-primary text-lg font-medium tracking-[0.3em] mb-4 animate-fade-up">
            {koreanText}
          </p>
        )}
        
        <h1 className={cn(
          "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-korean-white mb-6 leading-tight animate-fade-up-delay-1"
        )}>
          {title}
          {titleHighlight && (
            <span className="block text-primary mt-2">{titleHighlight}</span>
          )}
        </h1>
        
        {subtitle && (
          <p className="text-korean-white/70 text-lg md:text-xl max-w-2xl mx-auto animate-fade-up-delay-2">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
