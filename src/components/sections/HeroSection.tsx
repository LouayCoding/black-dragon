import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import heroBgImg from '@/assets/hero-bg.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(/hero.jpg)`,
        }}
      />
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
      
      {/* Subtle Red Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Korean Text */}
          <p className="animate-fade-up text-primary text-lg md:text-xl font-medium tracking-[0.3em] mb-4">
            태권도
          </p>
          
          {/* Main Heading */}
          <h1 className="animate-fade-up-delay-1 font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-korean-white mb-6 leading-tight">
            {t('De Weg van de', 'The Way of the')}
            <span className="block text-primary mt-2">{t('Voet & Vuist', 'Foot & Fist')}</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-korean-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {t(
              'Beheers de oude Koreaanse krijgskunst die kracht, discipline en onwankelbaar zelfvertrouwen opbouwt. Begin vandaag nog met je reis.',
              'Master the ancient Korean martial art that builds strength, discipline, and unshakeable confidence. Begin your journey today.'
            )}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="btn-korean bg-primary hover:bg-accent text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow"
            >
              <Link to="/contact">{t('Start Je Reis', 'Start Your Journey')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-korean-white/30 text-korean-white hover:bg-korean-white/10 px-8 py-6 text-lg"
            >
              <Link to="/programs">{t('Bekijk Programmas', 'Explore Programs')}</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-3 mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: '25+', label: t('Jaar Ervaring', 'Years Experience') },
              { value: '500+', label: t('Leerlingen', 'Students Trained') },
              { value: '50+', label: t('Zwarte Banden', 'Black Belts') },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-korean-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-korean-white/50 hover:text-primary transition-colors duration-300 group"
      >
        <span className="text-xs tracking-widest">{t('SCROLL', 'SCROLL')}</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
