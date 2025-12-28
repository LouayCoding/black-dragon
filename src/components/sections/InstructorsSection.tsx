import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Import instructor images
import rachidImg from '@/assets/instructors/grandmaster-kim.jpg';

export function InstructorsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const instructor = {
    name: 'R. Ousllam',
    role: t('Hoofdtrainer & Mentaal Begeleider', 'Head Trainer & Mental Coach'),
    rank: t('3e Dan Zwarte Band', '3rd Dan Black Belt'),
    experience: t('Sinds 2013', 'Since 2013'),
    image: rachidImg,
    bio: t(
      'Rijksgediplomeerd Taekwondo Trainer Niveau 3 | Gecertificeerd Coach met Continentale Licentie. Erkend door Taekwondobond Nederland (TBN) en NOC*NSF. Oprichter van Taekwondo Black Dragon Den Haag (2013) en houder van de 3e Dan in Taekwondo, officieel erkend door World Taekwondo (WT) en TBN.',
      'Nationally Certified Taekwondo Trainer Level 3 | Certified Coach with Continental License. Recognized by Taekwondobond Nederland (TBN) and NOC*NSF. Founder of Taekwondo Black Dragon The Hague (2013) and holder of the 3rd Dan in Taekwondo, officially recognized by World Taekwondo (WT) and TBN.'
    ),
    achievements: [
      t('Mentale begeleiding: versterkt zelfvertrouwen en veerkracht', 'Mental coaching: strengthens confidence and resilience'),
      t('Persoonlijke aanpak: trainingen afgestemd op niveau en doelen', 'Personal approach: training tailored to level and goals'),
      t('Ervaring met alle leeftijden: van kinderen tot volwassenen', 'Experience with all ages: from children to adults'),
      t('Focus op discipline en respect: persoonlijke groei naast techniek', 'Focus on discipline and respect: personal growth alongside technique'),
      t('Competitie & recreatie: plezier én prestatie in sport', 'Competition & recreation: fun and performance in sports'),
    ],
  };

  return (
    <section id="instructors" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium tracking-widest text-sm mb-4">{t('INSTRUCTEUR', 'INSTRUCTOR')}</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('Ontmoet Je ', 'Meet Your ')}
            <span className="text-primary">{t('Instructeur', 'Instructor')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'Leer van een rijksgediplomeerd Taekwondo Trainer Niveau 3 met jarenlange ervaring en brede kennis die iedereen begeleidt naar succes.',
              'Learn from a nationally certified Taekwondo Trainer Level 3 with years of experience and broad knowledge who guides everyone to success.'
            )}
          </p>
        </motion.div>

        {/* Instructor Profile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Photo */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-xl">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Rank Badge */}
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold shadow-glow">
                {instructor.rank}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <h3 className="font-serif text-4xl font-bold text-foreground mb-2">{instructor.name}</h3>
            <p className="text-primary text-lg font-medium mb-6">{instructor.role}</p>

            {/* Experience */}
            <div className="flex items-center gap-3 mb-6 text-foreground">
              <Award className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold">{instructor.experience} {t('ervaring', 'experience')}</span>
            </div>

            {/* Bio */}
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              {instructor.bio}
            </p>

            {/* Achievements */}
            <div>
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {t('Prestaties', 'Achievements')}
              </p>
              <div className="space-y-3">
                {instructor.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
