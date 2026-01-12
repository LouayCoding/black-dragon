import { useLanguage } from '@/hooks/useLanguage';
import { Users, Zap, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import littleTigersImg from '@/assets/gallery/little-tigers.jpg';
import sparringImg from '@/assets/gallery/sparring.jpg';
import highKickImg from '@/assets/gallery/high-kick.jpg';
import poomsaeImg from '@/assets/gallery/poomsae.jpg';

export function ProgramsSection() {
  const { t } = useLanguage();

  const programs = [
    {
      icon: Users,
      image: littleTigersImg,
      title: t('Kleine Tijgers', 'Little Tigers'),
      age: t('4-6 jaar', 'Ages 4-6'),
      description: t(
        'Leuke introductielessen die coördinatie, focus en zelfvertrouwen opbouwen door leeftijdsgeschikte spelletjes en basis Taekwondo bewegingen.',
        'Fun introductory classes building coordination, focus, and confidence through age-appropriate games and basic Taekwondo movements.'
      ),
      features: [
        t('Motorische ontwikkeling', 'Motor skill development'),
        t('Basis trappen & blokken', 'Basic kicks & blocks'),
        t('Luistervaardigheden', 'Listening skills'),
      ],
    },
    {
      icon: Zap,
      image: sparringImg,
      title: t('Jeugd', 'Youth'),
      age: t('7-17 jaar', 'Ages 7-17'),
      description: t(
        'Uitgebreide training die discipline, fitheid en zelfverdedigingsvaardigheden ontwikkelt terwijl sterke karakterfundamenten worden gelegd.',
        'Comprehensive training developing discipline, fitness, and self-defense skills while building strong character foundations.'
      ),
      features: [
        t('Zelfvertrouwen opbouwen', 'Build self-confidence'),
        t('Zelfverdediging', 'Self-defense'),
        t('Discipline & respect', 'Discipline & respect'),
      ],
    },
    {
      icon: Heart,
      image: poomsaeImg,
      title: t('Vrouwen', 'Women'),
      age: t('18+ jaar', 'Ages 18+'),
      description: t(
        'Speciaal programma voor vrouwen gericht op kracht, zelfvertrouwen en zelfverdediging in een ondersteunende en veilige omgeving.',
        'Special program for women focused on strength, self-confidence and self-defense in a supportive and safe environment.'
      ),
      features: [
        t('Empowerment & kracht', 'Empowerment & strength'),
        t('Zelfverdedigingstechnieken', 'Self-defense techniques'),
        t('Veilige leeromgeving', 'Safe learning environment'),
      ],
    },
    {
      icon: Target,
      image: highKickImg,
      title: t('Volwassenen', 'Adults'),
      age: t('18+ jaar', 'Ages 18+'),
      description: t(
        'Dynamische training gericht op persoonlijke ontwikkeling, waarbij je werkt aan zelfvertrouwen, conditie en mentale kracht.',
        'Dynamic training focused on personal development, working on self-confidence, conditioning and mental strength.'
      ),
      features: [
        t('Zelfvertrouwen opbouwen', 'Build self-confidence'),
        t('Conditie verbeteren', 'Improve conditioning'),
        t('Zelfverdediging', 'Self-defense'),
      ],
    },
  ];

  return (
    <section id="programs" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {t('Programmas', 'Programs')}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {t('Jouw', 'Your')}<br />
              <span className="text-primary">{t('Taekwondo Reis', 'Taekwondo Journey')}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="space-y-8 max-w-2xl">
              <p className="text-foreground text-xl sm:text-2xl leading-[1.5] font-normal">
                {t(
                  'Vanaf 4 jaar en ouder. Van eerste stap tot zwarte band.',
                  'From 4 years and older. From first step to black belt.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className="program-card bg-card rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <program.icon className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Age Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    {program.age}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 leading-tight">
                  {program.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-xs text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/register"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  {t('Meer Info', 'Learn More')}
                  <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold rounded-full"
          >
            <Link to="/register">{t('Probeer Gratis', 'Try Free')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
