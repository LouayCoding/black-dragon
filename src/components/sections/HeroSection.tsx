import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import heroBgImg from '@/assets/hero-bg.jpg';
import { motion } from 'framer-motion';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
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
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-primary text-lg md:text-xl font-medium tracking-[0.3em] mb-4"
          >
            태권도
          </motion.p>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-korean-white mb-6 leading-tight"
          >
            {t('De Weg van de', 'The Way of the')}
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block text-primary mt-2"
            >
              {t('Voet & Vuist', 'Foot & Fist')}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-korean-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {t(
              'Beheers de oude Koreaanse krijgskunst die kracht, discipline en onwankelbaar zelfvertrouwen opbouwt. Begin vandaag nog met je reis.',
              'Master the ancient Korean martial art that builds strength, discipline, and unshakeable confidence. Begin your journey today.'
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="btn-korean bg-primary hover:bg-accent text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow animate-pulse"
            >
              <Link to="/register">{t('🥋 Probeer Gratis', '🥋 Try Free')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-korean-white/30 text-korean-white hover:bg-korean-white/10 px-8 py-6 text-lg"
            >
              <Link to="/programs">{t('Bekijk Programmas', 'Explore Programs')}</Link>
            </Button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8 text-korean-white/80"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              <span className="text-sm font-medium">4.9/5 (250+ reviews)</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-korean-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <span className="text-sm font-medium">{t('25+ jaar ervaring', '25+ years experience')}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-korean-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-xl">👥</span>
              <span className="text-sm font-medium">{t('500+ studenten', '500+ students')}</span>
            </div>
          </motion.div>

          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-6 inline-block"
          >
            <div className="bg-accent/20 border border-accent/30 rounded-full px-6 py-2 backdrop-blur-sm">
              <p className="text-sm text-korean-white font-medium flex items-center gap-2">
                <span className="animate-pulse">🔥</span>
                {t('Nog 5 plekken beschikbaar deze maand', 'Only 5 spots left this month')}
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { value: '25+', label: t('Jaar Ervaring', 'Years Experience') },
              { value: '500+', label: t('Leerlingen', 'Students Trained') },
              { value: '50+', label: t('Zwarte Banden', 'Black Belts') },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-korean-white/60 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-korean-white/50 hover:text-primary transition-colors duration-300 group"
      >
        <span className="text-xs tracking-widest">{t('SCROLL', 'SCROLL')}</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
