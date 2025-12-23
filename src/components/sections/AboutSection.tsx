import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Heart, Target, Flame } from 'lucide-react';

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const values = [
    { icon: Shield, korean: '예의', english: t('Beleefdheid', 'Courtesy') },
    { icon: Heart, korean: '염치', english: t('Integriteit', 'Integrity') },
    { icon: Target, korean: '인내', english: t('Doorzettingsvermogen', 'Perseverance') },
    { icon: Flame, korean: '극기', english: t('Zelfbeheersing', 'Self-Control') },
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div ref={sectionRef} className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Visual */}
          <div className={cn(
            "relative transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
          )}>
            {/* Main image container */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
              <div className="absolute inset-0 bg-gradient-dark flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-[120px] text-primary/20 leading-none">拳</span>
                </div>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className={cn(
              "absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-2xl shadow-glow transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <p className="font-serif text-5xl font-bold">25+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">{t('Jaar Excellentie', 'Years of Excellence')}</p>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l-4 border-t-4 border-primary/30 rounded-tl-3xl" />
          </div>

          {/* Right - Content */}
          <div className={cn(
            "transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          )}>
            <span className="inline-block text-primary font-medium tracking-[0.2em] text-sm mb-6">
              {t('OVER ONS', 'ABOUT US')}
            </span>
            
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 leading-[1.15]">
              {t('Traditie Eren,', 'Honoring Tradition,')}
              <span className="text-primary block mt-2">{t('Kampioenen Bouwen', 'Building Champions')}</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                {t(
                  'Onze dojang is meer dan een trainingscentrum—het is een gemeenschap gewijd aan de authentieke beoefening van Taekwondo. Geworteld in rijke Koreaanse tradities, combineren we eeuwenoude technieken met moderne trainingsmethoden.',
                  'Our dojang is more than a training center—it is a community dedicated to the authentic practice of Taekwondo. Rooted in rich Korean traditions, we blend time-honored techniques with modern training methodologies.'
                )}
              </p>
              <p>
                {t(
                  'Of je nu een beginner bent of een ervaren vechtsporter, onze gecertificeerde instructeurs begeleiden je op een transformerende reis van fysieke excellentie en persoonlijke groei.',
                  'Whether you are a beginner or an experienced martial artist, our certified instructors guide you on a transformative journey of physical excellence and personal growth.'
                )}
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-primary font-serif text-lg">{value.korean}</p>
                    <p className="text-foreground font-medium text-sm">{value.english}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-full group"
            >
              <a href="#programs" className="flex items-center gap-2">
                {t('Ontdek Onze Programmas', 'Discover Our Programs')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}