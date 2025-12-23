import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Award, Star } from 'lucide-react';

export function InstructorsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const instructors = [
    {
      name: 'Grootmeester Kim Jae-hoon',
      korean: '김재훈',
      role: t('Hoofdinstructeur', 'Head Instructor'),
      rank: t('8e Dan Zwarte Band', '8th Dan Black Belt'),
      experience: t('40+ jaar', '40+ years'),
      bio: t(
        'Een levende legende in Koreaanse vechtkunsten, Grootmeester Kim heeft zijn leven gewijd aan het behouden van de authentieke tradities van Taekwondo terwijl hij leermethoden aanpast voor moderne studenten.',
        'A living legend in Korean martial arts, Grandmaster Kim has dedicated his life to preserving the authentic traditions of Taekwondo while adapting teaching methods for modern students.'
      ),
      achievements: [
        t('World Taekwondo Hall of Fame', 'World Taekwondo Hall of Fame'),
        t('Olympisch Team Coach', 'Olympic Team Coach'),
        t('Auteur van 3 vechtsportboeken', 'Author of 3 martial arts books'),
      ],
    },
    {
      name: 'Meester Lee Soo-min',
      korean: '이수민',
      role: t('Senior Instructeur', 'Senior Instructor'),
      rank: t('6e Dan Zwarte Band', '6th Dan Black Belt'),
      experience: t('25 jaar', '25 years'),
      bio: t(
        'Meester Lee is gespecialiseerd in vormen en wedstrijdvoorbereiding. Haar studenten hebben talloze nationale en internationale kampioenschappen gewonnen.',
        'Master Lee specializes in forms and competition preparation. Her students have won numerous national and international championships.'
      ),
      achievements: [
        t('3x Nationaal Kampioen', '3x National Champion'),
        t('Gecertificeerd Internationaal Scheidsrechter', 'Certified International Referee'),
        t('Jeugdontwikkeling Specialist', 'Youth Development Specialist'),
      ],
    },
    {
      name: 'Meester Park Jung-woo',
      korean: '박정우',
      role: t('Wedstrijdcoach', 'Competition Coach'),
      rank: t('5e Dan Zwarte Band', '5th Dan Black Belt'),
      experience: t('18 jaar', '18 years'),
      bio: t(
        'Voormalig nationaal team atleet, Meester Park brengt elite-niveau trainingstechnieken en competitieve mentaliteitsontwikkeling naar ons wedstrijdteam.',
        'Former national team athlete, Master Park brings elite-level training techniques and competitive mindset development to our competition team.'
      ),
      achievements: [
        t('Voormalig Nationaal Team Lid', 'Former National Team Member'),
        t('Pan-Amerikaanse Bronzen Medaille', 'Pan-American Bronze Medalist'),
        t('Sportpsychologie Gecertificeerd', 'Sports Psychology Certified'),
      ],
    },
    {
      name: 'Instructeur Choi Min-ji',
      korean: '최민지',
      role: t('Leider Kinderprogramma', "Children's Program Lead"),
      rank: t('4e Dan Zwarte Band', '4th Dan Black Belt'),
      experience: t('12 jaar', '12 years'),
      bio: t(
        'Specialist in vroegkinderlijke vechtsporteducatie, Instructeur Choi maakt het leren van Taekwondo leuk en boeiend voor onze jongste leerlingen.',
        'Specialist in early childhood martial arts education, Instructor Choi makes learning Taekwondo fun and engaging for our youngest students.'
      ),
      achievements: [
        t('Kinderontwikkeling Gecertificeerd', 'Child Development Certified'),
        t('Kleine Tijgers Programma Ontwerper', 'Little Tigers Program Creator'),
        t('Anti-Pesten Voorvechter', 'Anti-Bullying Advocate'),
      ],
    },
  ];

  return (
    <section id="instructors" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-primary font-medium tracking-widest text-sm mb-4">{t('INSTRUCTEURS', 'INSTRUCTORS')}</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('Leer van de ', 'Learn from the ')}<span className="text-primary">{t('Meesters', 'Masters')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'Onze wereldklasse instructeurs brengen decennia aan ervaring, kampioenschapskwalificaties en een passie voor onderwijs naar elke les.',
              'Our world-class instructors bring decades of experience, championship credentials, and a passion for teaching to every class.'
            )}
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card rounded-lg border border-border overflow-hidden hover:border-primary/30 hover:shadow-card transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Photo Placeholder */}
                <div className="sm:w-48 h-48 sm:h-auto bg-gradient-dark flex items-center justify-center flex-shrink-0">
                  <div className="text-center">
                    <span className="font-serif text-5xl text-primary/50">{instructor.korean}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <p className="text-xs text-primary font-medium tracking-wider mb-1">{instructor.role}</p>
                    <h3 className="font-serif text-xl font-semibold text-foreground">{instructor.name}</h3>
                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-primary" />
                        {instructor.rank}
                      </span>
                      <span>•</span>
                      <span>{instructor.experience}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {instructor.bio}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {instructor.achievements.map((achievement, aIndex) => (
                      <div key={aIndex} className="flex items-center gap-2 text-xs text-foreground/70">
                        <Star className="w-3 h-3 text-primary flex-shrink-0" />
                        <span>{achievement}</span>
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
