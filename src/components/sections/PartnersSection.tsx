'use client'

import { Percent, GraduationCap, Briefcase } from 'lucide-react';

export function PartnersSection() {

  const discountPrograms = [
    {
      icon: Percent,
      title: 'Ooievaarspas',
      discount: 'Tot 100% korting',
      description: 'Kinderen tot 18 jaar krijgen 100% korting, 18 jaar of ouder 50% korting op contributie.',
      logo: '/partners/ooievaarspas.png',
      url: 'https://www.ooievaarspas.nl/',
    },
    {
      icon: GraduationCap,
      title: 'Leergeld',
      discount: 'Kledingvergoeding',
      description: 'Via Leergeld kunnen gezinnen een vergoeding krijgen voor sportkleding en benodigdheden.',
      logo: '/partners/leergeld.png',
      url: 'https://www.leergeld.nl/',
    },
    {
      icon: Briefcase,
      title: 'SBB Stage Erkend',
      description: 'Wij zijn erkend als stagebedrijf door SBB en bieden stageplekken voor aankomende sportinstructeurs.',
      logo: '/partners/sbb-beeldmerk.webp',
      url: 'https://www.s-bb.nl/',
    },
    {
      icon: Briefcase,
      title: 'Taekwondo Bond Nederland',
      description: 'Aangesloten bij de officiële Nederlandse Taekwondo bond, erkend door NOC*NSF.',
      logo: '/partners/taekwondo-bond-nederland.png',
      url: 'https://www.taekwondobond.nl/',
    },
    {
      icon: Briefcase,
      title: 'World Taekwondo',
      description: 'Internationaal erkend door World Taekwondo, de wereldwijde taekwondo federatie.',
      logo: '/partners/world-taekwondo.png',
      url: 'https://www.worldtaekwondo.org/',
    },
    {
      icon: Briefcase,
      title: 'NOC*NSF',
      description: 'Erkend door NOC*NSF, de Nederlandse sportkoepel voor topsport en breedtesport.',
      logo: '/partners/noc-nsf.png',
      url: 'https://nocnsf.nl/',
    },
    {
      icon: Briefcase,
      title: 'Vechtsport Autoriteit',
      description: 'Erkend door de Vechtsport Autoriteit voor veilige en kwalitatieve vechtsportbeoefening.',
      logo: '/partners/vechtsport-autoriteit.png',
      url: 'https://vechtsportautoriteit.nl/',
    },
    {
      icon: Briefcase,
      title: 'Kukkiwon',
      description: 'Erkend door Kukkiwon, het wereldwijde hoofdkwartier van Taekwondo in Zuid-Korea.',
      logo: '/partners/kukkiwon.jpg',
      url: 'https://www.kukkiwon.or.kr/',
    },
    {
      icon: Briefcase,
      title: 'European Taekwondo',
      description: 'Aangesloten bij European Taekwondo Union, de Europese Taekwondo federatie.',
      logo: '/partners/european-taekwondo.png',
      url: 'https://www.europeantaekwondounion.org/',
    },
  ];

  return (
    <section id="partners" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {'Kortingen & Erkenning'}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {'Voor'}<br />
              <span className="text-primary">{'iedereen'}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </div>

        {/* Discount Programs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 max-w-7xl mx-auto">
          {discountPrograms.map((program, index) => {
            const CardContent = (
              <>
                {program.logo ? (
                  <div className="w-24 h-16 flex items-center justify-center mb-4">
                    <img 
                      src={program.logo} 
                      alt={program.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                )}
                <h3 className="font-bold text-xl text-foreground mb-2">
                  {program.title}
                </h3>
                {program.discount && (
                  <div className="text-primary text-sm font-bold mb-3">
                    {program.discount}
                  </div>
                )}
                <p className="text-foreground/70 text-sm leading-[1.7]">
                  {program.description}
                </p>
              </>
            );

            return program.url ? (
              <a
                key={index}
                href={program.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card bg-card p-8 hover:bg-muted/30 transition-colors duration-300 block"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={index}
                className="partner-card bg-card p-8 hover:bg-muted/30 transition-colors duration-300"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
