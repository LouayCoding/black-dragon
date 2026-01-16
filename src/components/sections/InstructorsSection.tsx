'use client'

import { Award, Star } from 'lucide-react';

export function InstructorsSection() {
  const instructors = [
    {
      name: 'Rachid Ousllam',
      role: 'Hoofdtrainer & Mentaal Begeleider',
      rank: '3e Dan Zwarte Band',
      experience: 'Sinds 2013',
      image: '/gallery/rachid.jpeg',
      bio: 'Rijksgediplomeerd Taekwondo Trainer Niveau 3 | Gecertificeerd Coach met Continentale Licentie. Erkend door Taekwondobond Nederland (TBN) en NOC*NSF. Oprichter van Taekwondo Black Dragon Den Haag (2013) en houder van de 3e Dan in Taekwondo, officieel erkend door World Taekwondo (WT) en TBN.',
      achievements: [
        'Mentale begeleiding: versterkt zelfvertrouwen en veerkracht',
        'Persoonlijke aanpak: trainingen afgestemd op niveau en doelen',
        'Ervaring met alle leeftijden: van kinderen tot volwassenen',
        'Focus op discipline en respect: persoonlijke groei naast techniek',
        'Competitie & recreatie: plezier én prestatie in sport',
      ],
    },
    {
      name: 'Isra Jallab',
      role: 'Assistent Trainster',
      rank: '1e Dan Zwarte Band',
      experience: 'Sinds 2018',
      image: '/instructors/isra-jallab.jpg',
      bio: 'Gepassioneerde assistent trainster met uitgebreide ervaring in het lesgeven aan kinderen en jongeren. Isra brengt energie en enthousiasme naar elke training en inspireert jonge atleten om hun beste te geven.',
      achievements: [
        'Specialisatie in jeugdtraining en begeleiding',
        'Ervaren in technieklessen en poomsae',
        'Positieve motivator voor jonge leerlingen',
        'Focus op spelenderwijs leren',
      ],
    },
    {
      name: 'Wissal Ousllam',
      role: 'Assistent Trainster',
      rank: '1e Dan Zwarte Band',
      experience: 'Sinds 2019',
      image: '/instructors/wissal-ousllam.jpg',
      bio: 'Enthousiaste assistent trainster die zich richt op het ontwikkelen van technische vaardigheden en het opbouwen van zelfvertrouwen bij leerlingen. Wissal combineert discipline met een vriendelijke benadering.',
      achievements: [
        'Gespecialiseerd in technische training',
        'Ervaring met zowel beginners als gevorderden',
        'Focus op correcte uitvoering en vorm',
        'Begeleiding bij wedstrijdvoorbereiding',
      ],
    },
  ];

  return (
    <section id="instructors" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {'Instructeurs'}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              {'Ons'}<br />
              <span className="text-primary">{'Team'}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="space-y-4 max-w-2xl">
              <p className="text-foreground text-lg sm:text-xl leading-[1.5] font-normal">
                Ervaring. Expertise. Passie.
              </p>
            </div>
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="space-y-16">
          {instructors.map((instructor, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Photo */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Rank Badge */}
                  <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 font-bold text-sm">
                    {instructor.rank}
                  </div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">{instructor.name}</h3>
                    <p className="text-primary text-base font-semibold">{instructor.role}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {/* Experience */}
                <div className="flex items-center gap-4">
                  <Award className="w-7 h-7 text-primary flex-shrink-0" />
                  <span className="text-xl font-bold text-foreground">{instructor.experience} {'ervaring'}</span>
                </div>

                {/* Bio */}
                <p className="text-foreground/80 text-lg leading-[1.8]">
                  {instructor.bio}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="text-base font-bold text-foreground mb-4">
                    {'Specialisaties'}
                  </h4>
                  <div className="space-y-3">
                    {instructor.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-base leading-[1.7]">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
