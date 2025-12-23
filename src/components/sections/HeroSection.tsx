import { ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import heroBgImg from '@/assets/hero-bg.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/50" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/15 blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
      
      {/* Large Korean character */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-[35vw] md:text-[28vw] text-secondary-foreground/[0.03] leading-none select-none">道</span>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Korean Text Badge */}
          <div className="animate-fade-up inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-primary/60" />
            <span className="text-primary text-sm md:text-base font-medium tracking-[0.4em]">태권도</span>
            <span className="w-12 h-px bg-primary/60" />
          </div>
          
          {/* Main Heading */}
          <h1 className="animate-fade-up-delay-1 font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-secondary-foreground mb-8 leading-[1.1]">
            {t('De Weg van', 'The Way of')}
            <span className="block text-primary mt-2">{t('Kracht & Discipline', 'Power & Discipline')}</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-secondary-foreground/70 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            {t(
              'Beheers de oude Koreaanse krijgskunst. Bouw onbreekbaar zelfvertrouwen, fysieke kracht en mentale focus.',
              'Master the ancient Korean martial art. Build unbreakable confidence, physical strength, and mental focus.'
            )}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-semibold rounded-full"
            >
              <a href="#contact">{t('Gratis Proefles', 'Free Trial Class')}</a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10 px-8 py-7 text-lg rounded-full group"
            >
              <a href="#programs" className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Play className="w-5 h-5 ml-0.5" />
                </span>
                {t('Ontdek Programmas', 'Explore Programs')}
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-4 flex flex-wrap justify-center gap-12 md:gap-20">
            {[
              { value: '25+', label: t('Jaar Ervaring', 'Years Experience') },
              { value: '500+', label: t('Leerlingen', 'Students') },
              { value: '50+', label: t('Zwarte Banden', 'Black Belts') },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-secondary-foreground/50 text-sm tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-secondary-foreground/40 hover:text-primary transition-colors duration-500 group"
      >
        <span className="text-xs tracking-[0.3em] font-medium">{t('SCROLL', 'SCROLL')}</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </div>
      </a>
    </section>
  );
}