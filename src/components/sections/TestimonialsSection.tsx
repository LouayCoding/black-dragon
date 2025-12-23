import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sophie van den Berg',
      role: t('Ouder van Liam (8 jaar)', 'Parent of Liam (8 years)'),
      rating: 5,
      text: t(
        'Mijn zoon is volledig getransformeerd. Zijn zelfvertrouwen is enorm gegroeid en hij heeft geleerd respectvol met anderen om te gaan. De instructeurs zijn geweldig!',
        'My son has been completely transformed. His confidence has grown enormously and he has learned to treat others with respect. The instructors are amazing!'
      ),
      highlight: true,
    },
    {
      name: 'Mark Jansen',
      role: t('Volwassen leerling', 'Adult student'),
      rating: 5,
      text: t(
        'Als 35-jarige was ik nerveus om te beginnen, maar de sfeer is zo welkom. Ik ben fitter dan ooit en heb onlangs mijn groene band behaald!',
        'As a 35-year-old, I was nervous to start, but the atmosphere is so welcoming. I am fitter than ever and recently earned my green belt!'
      ),
    },
    {
      name: 'Emma de Vries',
      role: t('Zwarte band leerling', 'Black belt student'),
      rating: 5,
      text: t(
        'Na 5 jaar training heb ik eindelijk mijn zwarte band behaald. Grootmeester Kim is een inspirerende leraar die het beste in elke leerling naar boven haalt.',
        'After 5 years of training, I finally earned my black belt. Grandmaster Kim is an inspiring teacher who brings out the best in every student.'
      ),
      highlight: true,
    },
    {
      name: 'Jan Bakker',
      role: t('Ouder van Mila (6 jaar)', 'Parent of Mila (6 years)'),
      rating: 5,
      text: t(
        'Het Kleine Tijgers programma is perfect voor onze dochter. Ze leert discipline en coördinatie terwijl ze plezier heeft.',
        'The Little Tigers program is perfect for our daughter. She learns discipline and coordination while having fun.'
      ),
    },
    {
      name: 'Lisa Vermeer',
      role: t('Wedstrijdatleet', 'Competition athlete'),
      rating: 5,
      text: t(
        'Dankzij de uitstekende coaching heb ik brons gewonnen op het NK. De focus op techniek én mentale weerbaarheid maakt deze school uniek.',
        'Thanks to excellent coaching, I won bronze at the Nationals. The focus on technique and mental resilience makes this school unique.'
      ),
    },
    {
      name: 'Robert Smit',
      role: t('Volwassen leerling', 'Adult student'),
      rating: 5,
      text: t(
        'Ik zocht een manier om fit te worden en stress kwijt te raken. Taekwondo biedt dit en zoveel meer. De gemeenschap is als familie.',
        'I was looking for a way to get fit and relieve stress. Taekwondo offers this and so much more. The community is like family.'
      ),
    },
  ];

  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <span className="inline-block text-primary font-medium tracking-[0.2em] text-sm mb-6">
            {t('GETUIGENISSEN', 'TESTIMONIALS')}
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            {t('Wat Onze ', 'What Our ')}<span className="text-primary">{t('Leerlingen Zeggen', 'Students Say')}</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl">
            {t(
              'Ontdek de ervaringen van onze leerlingen en hun families.',
              'Discover the experiences of our students and their families.'
            )}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "group relative bg-card rounded-2xl p-8 transition-all duration-500 card-hover",
                testimonial.highlight && "lg:scale-105 shadow-elegant",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/10 mb-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Highlight border */}
              {testimonial.highlight && (
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-16 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <p className="text-muted-foreground mb-6">
            {t('Klaar om je eigen verhaal te schrijven?', 'Ready to write your own story?')}
          </p>
          <Button
            asChild
            size="lg"
            className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full group"
          >
            <a href="#contact" className="flex items-center gap-2">
              {t('Start Vandaag Nog', 'Start Today')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}