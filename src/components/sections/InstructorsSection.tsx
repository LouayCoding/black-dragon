import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Award, Medal, Star } from 'lucide-react';

const instructors = [
  {
    name: 'Grandmaster Kim Jae-hoon',
    korean: '김재훈',
    role: 'Head Instructor',
    rank: '8th Dan Black Belt',
    experience: '40+ years',
    bio: 'A living legend in Korean martial arts, Grandmaster Kim has dedicated his life to preserving the authentic traditions of Taekwondo while adapting teaching methods for modern students.',
    achievements: ['World Taekwondo Hall of Fame', 'Olympic Team Coach', 'Author of 3 martial arts books'],
  },
  {
    name: 'Master Lee Soo-min',
    korean: '이수민',
    role: 'Senior Instructor',
    rank: '6th Dan Black Belt',
    experience: '25 years',
    bio: 'Master Lee specializes in forms and competition preparation. Her students have won numerous national and international championships.',
    achievements: ['3x National Champion', 'Certified International Referee', 'Youth Development Specialist'],
  },
  {
    name: 'Master Park Jung-woo',
    korean: '박정우',
    role: 'Competition Coach',
    rank: '5th Dan Black Belt',
    experience: '18 years',
    bio: 'Former national team athlete, Master Park brings elite-level training techniques and competitive mindset development to our competition team.',
    achievements: ['Former National Team Member', 'Pan-American Bronze Medalist', 'Sports Psychology Certified'],
  },
  {
    name: 'Instructor Choi Min-ji',
    korean: '최민지',
    role: "Children's Program Lead",
    rank: '4th Dan Black Belt',
    experience: '12 years',
    bio: 'Specialist in early childhood martial arts education, Instructor Choi makes learning Taekwondo fun and engaging for our youngest students.',
    achievements: ['Child Development Certified', 'Little Tigers Program Creator', 'Anti-Bullying Advocate'],
  },
];

export function InstructorsSection() {
  const { ref, isVisible } = useScrollReveal();

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
          <p className="text-primary font-medium tracking-widest text-sm mb-4">사범 INSTRUCTORS</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Learn from the <span className="text-primary">Masters</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our world-class instructors bring decades of experience, championship credentials, 
            and a passion for teaching to every class.
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
