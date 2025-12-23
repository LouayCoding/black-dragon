import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 korean-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/40 rounded-full animate-pulse-glow" />
      
      {/* Korean Calligraphy Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <span className="font-serif text-[40vw] text-primary-foreground leading-none">道</span>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Korean Text */}
          <p className="animate-fade-up text-primary text-lg md:text-xl font-medium tracking-[0.3em] mb-4">
            태권도
          </p>
          
          {/* Main Heading */}
          <h1 className="animate-fade-up-delay-1 font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-korean-white mb-6 leading-tight">
            The Way of the
            <span className="block text-primary mt-2">Foot & Fist</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-korean-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Master the ancient Korean martial art that builds strength, discipline, and unshakeable confidence. 
            Begin your journey today.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="btn-korean bg-primary hover:bg-accent text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow"
            >
              <a href="#register">Start Your Journey</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-korean-white/30 text-korean-white hover:bg-korean-white/10 px-8 py-6 text-lg"
            >
              <a href="#programs">Explore Programs</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-3 mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Students Trained' },
              { value: '50+', label: 'Black Belts' },
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
        <span className="text-xs tracking-widest">SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
