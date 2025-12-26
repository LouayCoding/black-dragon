import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Users, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import littleTigersImg from '@/assets/gallery/little-tigers.jpg';
import sparringImg from '@/assets/gallery/sparring.jpg';
import highKickImg from '@/assets/gallery/high-kick.jpg';

export function ProgramsSection() {
  const { ref, isVisible } = useScrollReveal();
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
      title: t('Jeugd Programma', 'Youth Program'),
      age: t('7-17 jaar', 'Ages 7-17'),
      description: t(
        'Uitgebreide training die discipline, fitheid en zelfverdedigingsvaardigheden ontwikkelt terwijl sterke karakterfundamenten worden gelegd.',
        'Comprehensive training developing discipline, fitness, and self-defense skills while building strong character foundations.'
      ),
      features: [
        t('Band progressie', 'Belt progression'),
        t('Vormen & sparren', 'Forms & sparring'),
        t('Leiderschapstraining', 'Leadership training'),
      ],
    },
    {
      icon: Target,
      image: highKickImg,
      title: t('Volwassenen Fitness', 'Adult Fitness'),
      age: t('18+ jaar', 'Ages 18+'),
      description: t(
        'Dynamische training die traditionele Taekwondo combineert met moderne fitnessprincipes voor complete fysieke conditie.',
        'Dynamic training combining traditional Taekwondo with modern fitness principles for complete physical conditioning.'
      ),
      features: [
        t('Full-body workout', 'Full-body workout'),
        t('Stressverlichting', 'Stress relief'),
        t('Zelfverdediging', 'Self-defense'),
      ],
    },
  ];

  return (
    <section id="programs" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium tracking-widest text-sm mb-4">{t('PROGRAMMAS', 'PROGRAMS')}</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('Training voor ', 'Training for ')}<span className="text-primary">{t('Elke Reis', 'Every Journey')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'Van kleine tijgers die hun eerste stappen zetten tot ervaren wedstrijdvechters die excellentie nastreven, wij bieden programmas op maat voor elke leeftijd en elk niveau.',
              'From tiny tigers taking their first steps to seasoned competitors pursuing excellence, we offer programs tailored to every age and skill level.'
            )}
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                  <program.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

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
              <Link
                to="/register"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors group/link"
              >
                {t('Meer Info', 'Learn More')}
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="btn-korean bg-primary hover:bg-accent text-primary-foreground px-8"
          >
            <Link to="/register">{t('🥋 Probeer Gratis', '🥋 Try Free')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
