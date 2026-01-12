'use client'

import { useEffect, useRef } from 'react';
import { Award, Star } from 'lucide-react';


export function InstructorsSection() {
  const { t } = useLanguage();
      
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      });

      // Profile animation
      gsap.from(profileRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        scrollTrigger: {
          trigger: profileRef.current,
          start: 'top 75%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const instructor = {
    name: 'R. Ousllam',
    role: 'Hoofdtrainer & Mentaal Begeleider',
    rank: '3e Dan Zwarte Band',
    experience: 'Sinds 2013',
    image: rachidImg,
    bio: 'Rijksgediplomeerd Taekwondo Trainer Niveau 3 | Gecertificeerd Coach met Continentale Licentie. Erkend door Taekwondobond Nederland (TBN) en NOC*NSF. Oprichter van Taekwondo Black Dragon Den Haag (2013) en houder van de 3e Dan in Taekwondo', officieel erkend door World Taekwondo (WT) en TBN.,
    achievements: [
      'Mentale begeleiding: versterkt zelfvertrouwen en veerkracht',
      'Persoonlijke aanpak: trainingen afgestemd op niveau en doelen',
      'Ervaring met alle leeftijden: van kinderen tot volwassenen',
      'Focus op discipline en respect: persoonlijke groei naast techniek',
      'Competitie & recreatie: plezier én prestatie in sport',
    ],
  };

  return (
    <section id="instructors" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {'Instructeur'}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {'Jouw'}<br />
              <span className="text-primary">{'Instructeur'}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="space-y-8 max-w-2xl">
              <p className="text-foreground text-xl sm:text-2xl leading-[1.5] font-normal">
                Ervaring. Expertise. Passie.
              </p>
            </div>
          </div>
        </div>

        {/* Instructor Profile */}
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Photo */}
          <div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src=instructor.image
                alt=instructor.name
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Rank Badge */}
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 font-bold text-sm">
                instructor.rank
              </div>

              {/* Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">instructor.name</h3>
                <p className="text-primary text-base font-semibold">instructor.role</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* Experience */}
            <div className="flex items-center gap-4">
              <Award className="w-7 h-7 text-primary flex-shrink-0" />
              <span className="text-xl font-bold text-foreground">instructor.experience {'ervaring'}</span>
            </div>

            {/* Bio */}
            <p className="text-foreground/80 text-lg leading-[1.8] max-w-[45ch]">
              instructor.bio
            </p>

            {/* Achievements */}
            <div>
              <h4 className="text-base font-bold text-foreground mb-8">
                {'Specialisaties'}
              </h4>
              <div className="space-y-5">
                {instructor.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-base leading-[1.7]">achievement</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
