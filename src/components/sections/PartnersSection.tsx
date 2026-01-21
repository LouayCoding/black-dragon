'use client'

import { FadeInView } from '@/components/animations/FadeInView';

export function PartnersSection() {

  const discountPrograms = [
    {
      title: 'Ooievaarspas',
      discount: 'Tot 100% korting',
      description: 'Kinderen tot 18 jaar krijgen 100% korting, 18 jaar of ouder 50% korting op contributie.',
      logo: '/partners/ooievaarspas.png',
      url: 'https://www.ooievaarspas.nl/',
    },
    {
      title: 'Leergeld',
      discount: 'Kledingvergoeding',
      description: 'Via Leergeld kunnen gezinnen een vergoeding krijgen voor sportkleding en benodigdheden.',
      logo: '/partners/leergeld.png',
      url: 'https://www.leergeld.nl/',
    },
    {
      title: 'SBB Stage Erkend',
      description: 'Wij zijn erkend als stagebedrijf door SBB en bieden stageplekken voor aankomende sportinstructeurs.',
      logo: '/partners/sbb-beeldmerk.webp',
      url: 'https://www.s-bb.nl/',
    },
    {
      title: 'Taekwondo Bond Nederland',
      description: 'Aangesloten bij de officiële Nederlandse Taekwondo bond, erkend door NOC*NSF.',
      logo: '/partners/taekwondo-bond-nederland.png',
      url: 'https://www.taekwondobond.nl/',
    },
    {
      title: 'World Taekwondo',
      description: 'Internationaal erkend door World Taekwondo, de wereldwijde taekwondo federatie.',
      logo: '/partners/world-taekwondo.png',
      url: 'https://www.worldtaekwondo.org/',
    },
    {
      title: 'NOC*NSF',
      description: 'Erkend door NOC*NSF, de Nederlandse sportkoepel voor topsport en breedtesport.',
      logo: '/partners/noc-nsf.png',
      url: 'https://nocnsf.nl/',
    },
    {
      title: 'Vechtsport Autoriteit',
      description: 'Erkend door de Vechtsport Autoriteit voor veilige en kwalitatieve vechtsportbeoefening.',
      logo: '/partners/vechtsport-autoriteit.png',
      url: 'https://vechtsportautoriteit.nl/',
    },
    {
      title: 'Kukkiwon',
      description: 'Erkend door Kukkiwon, het wereldwijde hoofdkwartier van Taekwondo in Zuid-Korea.',
      logo: '/partners/kukkiwon.jpg',
      url: 'https://www.kukkiwon.or.kr/',
    },
    {
      title: 'European Taekwondo',
      description: 'Aangesloten bij European Taekwondo Union, de Europese Taekwondo federatie.',
      logo: '/partners/european-taekwondo.png',
      url: 'https://www.europeantaekwondounion.org/',
    },
  ];

  return (
    <section id="partners" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Kortingen Section */}
        <FadeInView className="mb-20">
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Kortingen
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Voor <span className="text-primary">iedereen</span> toegankelijk
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {discountPrograms.slice(0, 2).map((program, index) => (
              <a
                key={index}
                href={program.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-lg p-6 hover:shadow-md transition-all duration-300 block"
              >
                {program.logo && (
                  <div className="h-12 flex items-center mb-4">
                    <img 
                      src={program.logo} 
                      alt={program.title}
                      className="max-h-full object-contain"
                    />
                  </div>
                )}
                <h3 className="font-semibold text-base text-foreground mb-1">
                  {program.title}
                </h3>
                {program.discount && (
                  <div className="text-foreground/60 text-sm font-medium mb-3">
                    {program.discount}
                  </div>
                )}
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {program.description}
                </p>
              </a>
            ))}
          </div>
        </FadeInView>

        {/* Erkenningen Section */}
        <FadeInView delay={0.2}>
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Erkenningen
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Officieel <span className="text-primary">erkend</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {discountPrograms.slice(2).map((program, index) => (
              <a
                key={index}
                href={program.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-lg p-4 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                {program.logo && (
                  <div className="h-16 w-full flex items-center justify-center mb-3">
                    <img 
                      src={program.logo} 
                      alt={program.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
                <h3 className="font-semibold text-xs text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-foreground/50 text-xs leading-relaxed line-clamp-3">
                  {program.description}
                </p>
              </a>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
