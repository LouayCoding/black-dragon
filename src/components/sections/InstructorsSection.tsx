'use client'

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Instructor {
  name: string;
  role: string;
  image: string;
  shortBio: string;
  fullBio: string;
  experience?: string;
  achievements?: string[];
  specialties?: string[];
}

export function InstructorsSection() {
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);

  // Hoofdtrainer
  const headInstructor = {
    name: 'Rachid Ousllam',
    role: 'Hoofdtrainer & Mentaal Begeleider',
    experience: 'Sinds 2013',
    image: '/gallery/rachid.jpeg',
    shortBio: 'Oprichter Taekwondo Black Dragon Den Haag. Rijksgediplomeerd trainer met internationale licenties.',
    fullBio: 'Rachid Ousllam geeft taekwondoles vanuit overtuiging en ruime ervaring. Vanuit zijn eigen ontwikkeling weet hij dat taekwondo meer is dan een sport: het is een levensschool waarin discipline, respect en mentale kracht centraal staan. In 2013 richtte hij Taekwondo Black Dragon Den Haag op, met als doel een omgeving te creëren waarin sportieve groei en persoonlijke ontwikkeling hand in hand gaan.',
    bio: 'Rachid Ousllam geeft taekwondoles vanuit overtuiging en ruime ervaring. Vanuit zijn eigen ontwikkeling weet hij dat taekwondo meer is dan een sport: het is een levensschool waarin discipline, respect en mentale kracht centraal staan. In 2013 richtte hij Taekwondo Black Dragon Den Haag op, met als doel een omgeving te creëren waarin sportieve groei en persoonlijke ontwikkeling hand in hand gaan.',
    achievements: [
      'Rijksgediplomeerd Taekwondo Trainer Niveau 3',
      'Gecertificeerd coach met continentale licentie (TBN & NOC*NSF)',
      'Internationaal coachdiploma voor nationaal en internationaal niveau',
      'Begeleidt kinderen en volwassenen in zelfvertrouwen en mentale focus',
      'Trainingen op twee locaties in Den Haag',
    ],
  };

  // Trainers en Assistent trainers samen
  const teamInstructors: Instructor[] = [
    {
      name: 'Ouiam Ousllam',
      role: 'Trainer',
      image: '/placeholder.svg',
      shortBio: 'Zwarte band 1e dan met 20+ jaar ervaring. Gediplomeerd nationaal scheidsrechter en 3e plaats NK 2020.',
      fullBio: 'Ouiam Ousllam is zwarte band 1e dan en heeft meer dan 20 jaar ervaring in taekwondo. Zij is gediplomeerd nationaal scheidsrechter. In 2020 behaalde zij de 3e plaats op het Nederlands Kampioenschap. Met veel toewijding begeleidt zij kinderen in zowel taeguk (stijltechniek) als sparring. Haar focus ligt op discipline, respect, zelfvertrouwen en plezier in taekwondo.',
      experience: '20+ jaar ervaring',
      achievements: ['3e plaats NK 2020', 'Gediplomeerd nationaal scheidsrechter', '1e Dan Zwarte Band'],
      specialties: ['Taeguk (stijltechniek)', 'Sparring', 'Kinderbegeleiding', 'Discipline & respect'],
    },
    {
      name: 'Isra Jallab',
      role: 'Assistent Trainster',
      image: '/instructors/wissal-ousllam.jpg',
      shortBio: '10+ jaar ervaring. Gediplomeerd nationaal scheidsrechter. Gedreven in het begeleiden van leerlingen met focus op techniek en discipline.',
      fullBio: 'Isra Jallab heeft meer dan 10 jaar ervaring in taekwondo. Zij is gediplomeerd nationaal scheidsrechter en gedreven in het begeleiden van leerlingen op verschillende niveaus. Haar focus ligt op techniek, discipline en persoonlijke ontwikkeling. Isra werkt met veel aandacht aan taeguk (stijltechniek) en sparring. In haar lessen staan respect, zelfvertrouwen en plezier in de sport centraal.',
      experience: '10+ jaar ervaring',
      achievements: ['Gediplomeerd nationaal scheidsrechter'],
      specialties: ['Taeguk (stijltechniek)', 'Sparring', 'Techniek', 'Persoonlijke ontwikkeling'],
    },
    {
      name: 'Wissal Ousllam',
      role: 'Assistent Trainster',
      image: '/instructors/isra-jallab.jpg',
      shortBio: 'Actieve topsporter met 13+ jaar ervaring. 2e plaats NK 2025. Gediplomeerd nationaal scheidsrechter met Olympische ambitie.',
      fullBio: 'Wissal Ousllam heeft meer dan 13 jaar ervaring in taekwondo. Zij is actief als vechter en neemt deel aan nationale en internationale toernooien. In 2025 werd zij 2e op het Nederlands Kampioenschap. Zij is ook gediplomeerd nationaal scheidsrechter. Naast haar eigen topsportcarrière begeleidt zij ook kinderen, gespecialiseerd in sparring en geavanceerde vechttechnieken. Haar doel is om zich te blijven ontwikkelen en toe te werken naar deelname aan de Olympische Spelen.',
      experience: '13+ jaar ervaring',
      achievements: ['2e plaats NK 2025', 'Gediplomeerd nationaal scheidsrechter', 'Actieve topsporter', 'Olympische ambitie'],
      specialties: ['Sparring', 'Geavanceerde vechttechnieken', 'Competitie', 'Kinderbegeleiding'],
    },
    {
      name: 'Nando Silva',
      role: 'Assistent Trainer',
      image: '/placeholder.svg',
      shortBio: '12+ jaar ervaring. Gediplomeerd nationaal scheidsrechter. Serieuze en gedisciplineerde trainer met focus op conditie en techniek.',
      fullBio: 'Nando Silva heeft meer dan 12 jaar ervaring in taekwondo en staat bekend als een zeer serieuze en gedisciplineerde trainer. Hij is gediplomeerd nationaal scheidsrechter en heeft uitgebreide ervaring met wedstrijden en het begeleiden van sporters op competitief niveau. Daarnaast begeleidt hij kinderen in taeguk (stijltechniek) met veel aandacht voor techniek en precisie. Zijn trainingen zijn sterk conditiegericht, gericht op kracht, uithoudingsvermogen en mentale weerbaarheid. Discipline, respect en doorzettingsvermogen vormen de kern van zijn manier van lesgeven.',
      experience: '12+ jaar ervaring',
      achievements: ['Gediplomeerd nationaal scheidsrechter'],
      specialties: ['Taeguk (stijltechniek)', 'Conditietraining', 'Wedstrijdbegeleiding', 'Mentale weerbaarheid'],
    },
  ];

  return (
    <section id="instructors" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-16">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Instructeurs
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Onze<br />
              <span className="text-primary">Trainers</span>
            </h2>
            <div className="space-y-6 max-w-2xl">
              <p className="text-foreground/90 text-lg leading-[1.8]">
                Ons team bestaat uit gediplomeerde trainers met jarenlange ervaring. Van beginnende kinderen tot gevorderde volwassenen - iedereen krijgt persoonlijke aandacht en professionele begeleiding op weg naar hun doelen.
              </p>
            </div>
          </div>
        </div>

        {/* Hoofdtrainer - Large Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-[450px_1fr] gap-8 lg:gap-12 items-start">
            {/* Photo */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <img 
                src={headInstructor.image}
                alt={headInstructor.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  {headInstructor.name}
                </h3>
                <p className="text-foreground/70 text-base font-medium">{headInstructor.role}</p>
                <p className="text-foreground/50 text-sm mt-1">{headInstructor.experience}</p>
              </div>

              <p className="text-foreground/80 text-base leading-relaxed">
                {headInstructor.bio}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Kwalificaties
                </h4>
                <div className="space-y-2.5">
                  {headInstructor.achievements.map((achievement, i) => (
                    <p key={i} className="text-foreground/70 text-sm leading-relaxed pl-4 border-l-2 border-border">
                      {achievement}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Ons Team
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamInstructors.map((instructor, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedInstructor(instructor)}
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <div>
                    <h4 className="font-serif text-base font-bold text-foreground">{instructor.name}</h4>
                    <p className="text-foreground/60 text-xs font-medium">{instructor.role}</p>
                    {instructor.experience && (
                      <p className="text-foreground/50 text-xs mt-0.5">{instructor.experience}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Modal */}
      <Dialog open={!!selectedInstructor} onOpenChange={() => setSelectedInstructor(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{selectedInstructor?.name}</DialogTitle>
          </DialogHeader>
          
          {selectedInstructor && (
            <div className="space-y-5">
              {/* Role & Experience */}
              <div>
                <p className="text-foreground/80 font-medium">{selectedInstructor.role}</p>
                {selectedInstructor.experience && (
                  <p className="text-foreground/50 text-sm mt-1">{selectedInstructor.experience}</p>
                )}
              </div>

              {/* Bio */}
              <div>
                <p className="text-foreground/70 text-sm leading-relaxed">{selectedInstructor.fullBio}</p>
              </div>

              {/* Achievements */}
              {selectedInstructor.achievements && selectedInstructor.achievements.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2 uppercase tracking-wide">Prestaties</h4>
                  <div className="space-y-1.5">
                    {selectedInstructor.achievements.map((achievement, i) => (
                      <p
                        key={i}
                        className="text-foreground/60 text-sm pl-3 border-l-2 border-border"
                      >
                        {achievement}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialties */}
              {selectedInstructor.specialties && selectedInstructor.specialties.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2 uppercase tracking-wide">Specialisaties</h4>
                  <div className="space-y-1.5">
                    {selectedInstructor.specialties.map((specialty, i) => (
                      <p
                        key={i}
                        className="text-foreground/60 text-sm pl-3 border-l-2 border-border"
                      >
                        {specialty}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
