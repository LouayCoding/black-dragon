'use client'

import Image from 'next/image';
import { FadeInView } from '@/components/animations/FadeInView'

export function AboutSection() {
  const stats = [
    { number: '2013', label: 'Opgericht' },
    { number: '2', label: 'Locaties in Den Haag' },
    { number: '5', label: 'Gediplomeerde trainers' },
    { number: '4+', label: 'Leeftijdsgroepen' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <FadeInView className="mb-16 sm:mb-20 lg:mb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                  Over Ons
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Meer dan<br />
                <span className="text-primary">een sport</span>
              </h2>
              <div className="space-y-6 max-w-2xl">
                <p className="text-foreground/90 text-sm sm:text-base lg:text-lg leading-[1.8]">
                  Sinds 2013 begeleiden wij leden van alle leeftijden in hun persoonlijke groei door traditionele Taekwondo. Bij Black Dragon draait het niet alleen om technieken, maar om het ontwikkelen van discipline, respect en zelfvertrouwen.
                </p>
                <p className="text-foreground/90 text-sm sm:text-base lg:text-lg leading-[1.8]">
                  Of je nu 4 jaar bent of ouder, een beginner of gevorderd — bij ons vind je een veilige en inspirerende omgeving. Onze gediplomeerde instructeurs begeleiden jou op jouw unieke reis.
                </p>
              </div>
            </div>
            
            {/* About Hero Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/gallery/about-team.jpg" 
                alt="Taekwondo Black Dragon Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeInView>

        {/* Stats */}
        <FadeInView delay={0.15} className="mb-16 sm:mb-20 lg:mb-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center py-6 sm:py-8">
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Core Values */}
        <FadeInView delay={0.3}>
          <div className="mb-8 sm:mb-12">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
              De vijf pijlers van Taekwondo
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-4">
              Kernwaarden
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { korean: '예의', english: 'Discipline', desc: 'Respect in alle interacties' },
              { korean: '염치', english: 'Integriteit', desc: 'Eerlijkheid en sterke moraal' },
              { korean: '인내', english: 'Doorzettingsvermogen', desc: 'Nooit opgeven' },
              { korean: '극기', english: 'Zelfbeheersing', desc: 'Beheers je emoties' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-primary/30 font-light">{value.korean}</div>
                <h4 className="font-semibold text-base text-foreground mb-2">
                  {value.english}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
