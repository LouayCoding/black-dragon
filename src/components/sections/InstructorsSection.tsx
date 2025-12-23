import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Award, Medal, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import instructor images
import grandmasterKimImg from '@/assets/instructors/grandmaster-kim.jpg';
import masterLeeImg from '@/assets/instructors/master-lee.jpg';
import masterParkImg from '@/assets/instructors/master-park.jpg';
import instructorChoiImg from '@/assets/instructors/instructor-choi.jpg';

export function InstructorsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const instructors = [
    {
      name: 'Grootmeester Kim Jae-hoon',
      korean: '김재훈',
      role: t('Hoofdinstructeur', 'Head Instructor'),
      rank: t('8e Dan', '8th Dan'),
      experience: t('40+ jaar', '40+ years'),
      image: grandmasterKimImg,
      achievements: [
        t('World Taekwondo Hall of Fame', 'World Taekwondo Hall of Fame'),
        t('Olympisch Team Coach', 'Olympic Team Coach'),
      ],
    },
    {
      name: 'Meester Lee Soo-min',
      korean: '이수민',
      role: t('Senior Instructeur', 'Senior Instructor'),
      rank: t('6e Dan', '6th Dan'),
      experience: t('25 jaar', '25 years'),
      image: masterLeeImg,
      achievements: [
        t('3x Nationaal Kampioen', '3x National Champion'),
        t('Internationaal Scheidsrechter', 'International Referee'),
      ],
    },
    {
      name: 'Meester Park Jung-woo',
      korean: '박정우',
      role: t('Wedstrijdcoach', 'Competition Coach'),
      rank: t('5e Dan', '5th Dan'),
      experience: t('18 jaar', '18 years'),
      image: masterParkImg,
      achievements: [
        t('Voormalig Nationaal Team', 'Former National Team'),
        t('Pan-Am Bronzen Medaille', 'Pan-Am Bronze Medal'),
      ],
    },
    {
      name: 'Instructeur Choi Min-ji',
      korean: '최민지',
      role: t('Leider Kinderprogramma', "Children's Program Lead"),
      rank: t('4e Dan', '4th Dan'),
      experience: t('12 jaar', '12 years'),
      image: instructorChoiImg,
      achievements: [
        t('Kinderontwikkeling Expert', 'Child Development Expert'),
        t('Anti-Pesten Voorvechter', 'Anti-Bullying Advocate'),
      ],
    },
  ];

  return (
    <section id="instructors" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <span className="inline-block text-primary font-medium tracking-[0.2em] text-sm mb-6">
            {t('INSTRUCTEURS', 'INSTRUCTORS')}
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            {t('Leer van de ', 'Learn from the ')}<span className="text-primary">{t('Meesters', 'Masters')}</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl">
            {t(
              'Onze wereldklasse instructeurs brengen decennia aan ervaring en een passie voor onderwijs naar elke les.',
              'Our world-class instructors bring decades of experience and a passion for teaching to every class.'
            )}
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-500 card-hover",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Photo */}
                <div className="sm:w-56 h-56 sm:h-auto flex-shrink-0 overflow-hidden img-zoom">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8">
                  {/* Role badge */}
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                    {instructor.role}
                  </span>
                  
                  {/* Name */}
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-primary/60 font-serif text-lg mb-4">{instructor.korean}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-5 text-sm">
                    <span className="flex items-center gap-1.5 text-foreground">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="font-semibold">{instructor.rank}</span>
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{instructor.experience}</span>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {instructor.achievements.map((achievement, aIndex) => (
                      <div key={aIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Medal className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-16 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <p className="text-muted-foreground mb-6">
            {t('Klaar om te trainen met de besten?', 'Ready to train with the best?')}
          </p>
          <Button
            asChild
            size="lg"
            className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full group"
          >
            <a href="#contact" className="flex items-center gap-2">
              {t('Start Vandaag', 'Start Today')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}