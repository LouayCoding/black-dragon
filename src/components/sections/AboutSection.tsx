'use client'

export function AboutSection() {

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                  {'Over Ons'}
                </span>
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                {'Taekwondo'}<br />
                <span className="text-primary">Black Dragon</span>
              </h2>
              <div className="space-y-6 max-w-2xl">
                <p className="text-foreground/70 text-lg sm:text-xl leading-[1.8]">
                  Sinds 2013 begeleiden wij leden van alle leeftijden in hun persoonlijke groei door traditionele Taekwondo. Bij Black Dragon draait het niet alleen om het leren van technieken, maar ook om het ontwikkelen van discipline, respect en zelfvertrouwen.
                </p>
                <p className="text-foreground/70 text-base sm:text-lg leading-[1.8]">
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
        </div>

        {/* Core Values */}
        <div>
          <div className="mb-16">
            <h3 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              {'Kernwaarden'}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { korean: '예의', english: 'Discipline', desc: 'Respect in alle interacties' },
              { korean: '염치', english: 'Integriteit', desc: 'Eerlijkheid en sterke moraal' },
              { korean: '인내', english: 'Doorzettingsvermogen', desc: 'Nooit opgeven' },
              { korean: '극기', english: 'Zelfbeheersing', desc: 'Beheers je emoties' },
            ].map((value, index) => (
              <div
                key={index}
                className="value-card bg-background p-4 sm:p-8 lg:p-10 hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="text-4xl sm:text-6xl lg:text-7xl mb-4 sm:mb-6 text-primary font-light">{value.korean}</div>
                <h4 className="font-bold text-sm sm:text-lg lg:text-xl text-foreground mb-2 sm:mb-3 break-words hyphens-auto">
                  {value.english}
                </h4>
                <p className="text-foreground/70 text-xs sm:text-sm leading-[1.7]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
