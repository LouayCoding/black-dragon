'use client'

import { FadeInView } from '@/components/animations/FadeInView'

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <FadeInView className="mb-12 sm:mb-16 lg:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                  {'Over Ons'}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                {'Taekwondo'}<br />
                <span className="text-primary">Black Dragon</span>
              </h2>
              <div className="space-y-6 max-w-2xl">
                <p className="text-foreground/90 text-sm sm:text-base lg:text-lg leading-[1.8]">
                  Sinds 2013 begeleiden wij leden van alle leeftijden in hun persoonlijke groei door traditionele Taekwondo. Bij Black Dragon draait het niet alleen om het leren van technieken, maar ook om het ontwikkelen van discipline, respect en zelfvertrouwen.
                </p>
                <p className="text-foreground/90 text-sm sm:text-base lg:text-lg leading-[1.8]">
                  Of je nu 4 jaar bent of ouder, een beginner of gevorderd, bij ons vind je een veilige en inspirerende omgeving waar je jezelf kunt ontwikkelen. Onze ervaren instructeurs staan klaar om jou te begeleiden op jouw unieke reis door de wereld van Taekwondo.
                </p>
              </div>
            </div>
            
            {/* About Hero Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="/gallery/about-team.jpg" 
                alt="Taekwondo Black Dragon Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeInView>

        {/* Core Values */}
        <FadeInView delay={0.2}>
          <div className="mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              {'Kernwaarden'}
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
                className="bg-primary rounded-lg p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-white/40 font-light">{value.korean}</div>
                <h4 className="font-semibold text-base text-primary-foreground mb-2">
                  {value.english}
                </h4>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
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
