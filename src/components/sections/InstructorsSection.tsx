'use client'

import { useState } from 'react';
import { Award, Info } from 'lucide-react';
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
        <div className="mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                Instructeurs
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Ons<br />
              <span className="text-primary">Team</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-foreground text-lg sm:text-xl leading-[1.5] font-normal max-w-2xl">
              Ervaring. Expertise. Passie.
            </p>
          </div>
        </div>

        {/* Hoofdtrainer - Groot */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Photo */}
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src={headInstructor.image}
                  alt={headInstructor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Name Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">{headInstructor.name}</h3>
                  <p className="text-primary text-base font-semibold">{headInstructor.role}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Experience */}
              <div className="flex items-center gap-4">
                <Award className="w-7 h-7 text-primary flex-shrink-0" />
                <span className="text-xl font-bold text-foreground">{headInstructor.experience} ervaring</span>
              </div>

              {/* Bio */}
              <p className="text-foreground/80 text-lg leading-[1.8]">
                {headInstructor.bio}
              </p>

              {/* Achievements */}
              <div>
                <h4 className="text-base font-bold text-foreground mb-4">
                  Specialisaties
                </h4>
                <div className="space-y-2">
                  {headInstructor.achievements.map((achievement, i) => (
                    <p key={i} className="text-foreground/80 text-base leading-[1.7]">
                      • {achievement}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team - Trainer en Assistent Trainers samen */}
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Ons Team
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {teamInstructors.map((instructor, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Info Button */}
                  <button
                    onClick={() => setSelectedInstructor(instructor)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-all duration-300 group/btn"
                    aria-label={`Meer info over ${instructor.name}`}
                  >
                    <Info className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                  </button>

                  {/* Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-serif text-xl font-bold text-white mb-1">{instructor.name}</h4>
                    <p className="text-primary text-sm font-semibold">{instructor.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {instructor.shortBio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Modal */}
      <Dialog open={!!selectedInstructor} onOpenChange={() => setSelectedInstructor(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{selectedInstructor?.name}</DialogTitle>
          </DialogHeader>
          
          {selectedInstructor && (
            <div className="space-y-6">
              {/* Photo and Role */}
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={selectedInstructor.image}
                    alt={selectedInstructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-primary font-semibold">{selectedInstructor.role}</p>
                  {selectedInstructor.experience && (
                    <p className="text-foreground/60 text-sm mt-1">{selectedInstructor.experience}</p>
                  )}
                </div>
              </div>

              {/* Bio */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Over</h4>
                <p className="text-foreground/80 leading-relaxed">{selectedInstructor.fullBio}</p>
              </div>

              {/* Achievements */}
              {selectedInstructor.achievements && selectedInstructor.achievements.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Prestaties</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedInstructor.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialties */}
              {selectedInstructor.specialties && selectedInstructor.specialties.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Specialisaties</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedInstructor.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-muted text-foreground/80 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
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
