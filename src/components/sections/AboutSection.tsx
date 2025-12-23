import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div ref={sectionRef} className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className={cn(
            "relative transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="relative aspect-[4/5] korean-border p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded" />
              <div className="relative h-full bg-muted rounded overflow-hidden">
                {/* Placeholder for image - using decorative design */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-dark">
                  <div className="text-center">
                    <span className="font-serif text-8xl text-primary/30">拳</span>
                    <p className="text-korean-white/50 text-sm mt-4 tracking-widest">{t('DISCIPLINE', 'DISCIPLINE')}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded shadow-glow">
              <p className="font-serif text-4xl font-bold">25+</p>
              <p className="text-sm opacity-80">{t('Jaar Excellentie', 'Years of Excellence')}</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className={cn(
            "transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <p className="text-primary font-medium tracking-widest text-sm mb-4">{t('OVER ONS', 'ABOUT US')}</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t('Traditie Eren,', 'Honoring Tradition,')}<br />
              <span className="text-primary">{t('Kampioenen Bouwen', 'Building Champions')}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t(
                'Onze dojang is meer dan een trainingscentrum—het is een gemeenschap gewijd aan de authentieke beoefening van Taekwondo. Geworteld in de rijke tradities van Koreaanse vechtkunsten, combineren we eeuwenoude technieken met moderne trainingsmethoden.',
                'Our dojang is more than a training center—it is a community dedicated to the authentic practice of Taekwondo. Rooted in the rich traditions of Korean martial arts, we blend time-honored techniques with modern training methodologies.'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t(
                'Of je nu een beginner bent die je eerste stappen zet of een ervaren vechtsporter die je vaardigheden wilt verfijnen, onze gecertificeerde instructeurs begeleiden je op een transformerende reis van fysieke excellentie en persoonlijke groei.',
                'Whether you are a beginner taking your first steps or an experienced martial artist seeking to refine your skills, our certified instructors guide you on a transformative journey of physical excellence and personal growth.'
              )}
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { korean: '예의', english: t('Beleefdheid', 'Courtesy'), desc: t('Respect in alle interacties', 'Respect in all interactions') },
                { korean: '염치', english: t('Integriteit', 'Integrity'), desc: t('Eerlijkheid en sterke moraal', 'Honesty and strong morals') },
                { korean: '인내', english: t('Doorzettingsvermogen', 'Perseverance'), desc: t('Nooit opgeven mentaliteit', 'Never give up spirit') },
                { korean: '극기', english: t('Zelfbeheersing', 'Self-Control'), desc: t('Beheers je emoties', 'Master your emotions') },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded border border-border hover:border-primary/50 transition-colors group"
                >
                  <p className="text-primary font-serif text-xl mb-1 group-hover:scale-110 transition-transform inline-block">
                    {value.korean}
                  </p>
                  <p className="font-semibold text-foreground">{value.english}</p>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
