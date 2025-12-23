import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Users, Award, Zap, Heart, Target, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programs = [
  {
    icon: Users,
    title: 'Little Tigers',
    age: 'Ages 4-6',
    description: 'Fun introductory classes building coordination, focus, and confidence through age-appropriate games and basic Taekwondo movements.',
    features: ['Motor skill development', 'Basic kicks & blocks', 'Listening skills'],
  },
  {
    icon: Zap,
    title: 'Youth Program',
    age: 'Ages 7-12',
    description: 'Comprehensive training developing discipline, fitness, and self-defense skills while building strong character foundations.',
    features: ['Belt progression', 'Forms & sparring', 'Leadership training'],
  },
  {
    icon: Award,
    title: 'Teen Warriors',
    age: 'Ages 13-17',
    description: 'Challenging curriculum focusing on advanced techniques, competition preparation, and personal development.',
    features: ['Competition training', 'Advanced techniques', 'Mental toughness'],
  },
  {
    icon: Target,
    title: 'Adult Fitness',
    age: 'Ages 18+',
    description: 'Dynamic training combining traditional Taekwondo with modern fitness principles for complete physical conditioning.',
    features: ['Full-body workout', 'Stress relief', 'Self-defense'],
  },
  {
    icon: Heart,
    title: 'Family Classes',
    age: 'All Ages',
    description: 'Train together as a family! Special sessions designed for parents and children to learn and grow side by side.',
    features: ['Family bonding', 'Shared goals', 'Mutual support'],
  },
  {
    icon: Star,
    title: 'Competition Team',
    age: 'By Invitation',
    description: 'Elite training for dedicated athletes preparing for local, national, and international Taekwondo competitions.',
    features: ['Advanced sparring', 'Tournament prep', 'Elite coaching'],
  },
];

export function ProgramsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="programs" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-primary font-medium tracking-widest text-sm mb-4">프로그램 PROGRAMS</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Training for <span className="text-primary">Every Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From tiny tigers taking their first steps to seasoned competitors pursuing excellence, 
            we offer programs tailored to every age and skill level.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card rounded-lg border border-border p-6 hover:border-primary/50 hover:shadow-card transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <program.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <p className="text-xs text-primary font-medium tracking-wider mb-1">{program.age}</p>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#register"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors group/link"
              >
                Learn More
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Button
            asChild
            size="lg"
            className="btn-korean bg-primary hover:bg-accent text-primary-foreground px-8"
          >
            <a href="#register">Start Free Trial Class</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
