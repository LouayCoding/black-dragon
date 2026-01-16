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
              <div className="w-20 h-1 bg-primary"></div>
              <div className="space-y-6 max-w-2xl">
                <p className="text-foreground/70 text-lg sm:text-xl leading-[1.8]">
                  Sinds 2013 begeleiden wij leden van alle leeftijden in hun persoonlijke groei door traditionele Taekwondo. Bij Black Dragon draait het niet alleen om het leren van technieken, maar ook om het ontwikkelen van discipline, respect en zelfvertrouwen.
                </p>
                <p className="text-foreground/70 text-base sm:text-lg leading-[1.8]">
                  Of je nu 4 jaar bent of ouder, een beginner of gevorderd, bij ons vind je een veilige en inspirerende omgeving waar je jezelf kunt ontwikkelen. Onze ervaren instructeurs staan klaar om jou te begeleiden op jouw unieke reis door de wereld van Taekwondo.
                </p>
              </div>
            </div>
            
            {/* About Hero Image with Stats Overlay */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="/gallery/belt-ceremony-group.jpg" 
                alt="Taekwondo Black Dragon Training"
                className="w-full h-full object-cover"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary">
                <div className="grid grid-cols-3">
                  {[
                    { value: '2013', label: 'Opgericht' },
                    { value: '400+', label: 'Leden' },
                    { value: '2', label: 'Locaties' },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="stat-item p-4 sm:p-6 text-center"
                    >
                      <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="mb-16">
            <h3 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              {'Kernwaarden'}
            </h3>
            <div className="w-16 h-1 bg-primary mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { korean: '예의', english: 'Discipline', desc: 'Respect in alle interacties' },
              { korean: '염치', english: 'Integriteit', desc: 'Eerlijkheid en sterke moraal' },
              { korean: '인내', english: 'Doorzettingsvermogen', desc: 'Nooit opgeven' },
              { korean: '극기', english: 'Zelfbeheersing', desc: 'Beheers je emoties' },
            ].map((value, index) => (
              <div
                key={index}
                className="value-card bg-background p-8 sm:p-10 hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="text-6xl sm:text-7xl mb-6 text-primary font-light">{value.korean}</div>
                <h4 className="font-bold text-xl text-foreground mb-3">
                  {value.english}
                </h4>
                <p className="text-foreground/70 text-sm leading-[1.7] max-w-[30ch]">
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
