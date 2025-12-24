import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sophie van den Berg',
      role: t('Ouder van Liam (8 jaar)', 'Parent of Liam (8 years)'),
      rating: 5,
      text: t(
        'Mijn zoon is volledig getransformeerd sinds hij begon met Taekwondo. Zijn zelfvertrouwen is enorm gegroeid en hij heeft geleerd om respectvol met anderen om te gaan. De instructeurs zijn geweldig met kinderen!',
        'My son has been completely transformed since he started Taekwondo. His confidence has grown enormously and he has learned to treat others with respect. The instructors are amazing with children!'
      ),
    },
    {
      name: 'Mark Jansen',
      role: t('Volwassen leerling, 2 jaar ervaring', 'Adult student, 2 years experience'),
      rating: 5,
      text: t(
        'Als 35-jarige was ik nerveus om te beginnen, maar de sfeer is zo welkom dat ik me meteen thuis voelde. Ik ben fitter dan ooit en heb onlangs mijn groene band behaald. Een fantastische ervaring!',
        'As a 35-year-old, I was nervous to start, but the atmosphere is so welcoming that I immediately felt at home. I am fitter than ever and recently earned my green belt. A fantastic experience!'
      ),
    },
    {
      name: 'Emma de Vries',
      role: t('Zwarte band leerling', 'Black belt student'),
      rating: 5,
      text: t(
        'Na 5 jaar training heb ik eindelijk mijn zwarte band behaald. De reis was uitdagend maar ongelooflijk lonend. Grootmeester Kim is een inspirerende leraar die het beste in elke leerling naar boven haalt.',
        'After 5 years of training, I finally earned my black belt. The journey was challenging but incredibly rewarding. Grandmaster Kim is an inspiring teacher who brings out the best in every student.'
      ),
    },
    {
      name: 'Jan Bakker',
      role: t('Ouder van Mila (6 jaar)', 'Parent of Mila (6 years)'),
      rating: 5,
      text: t(
        'Het Kleine Tijgers programma is perfect voor onze dochter. Ze leert discipline en coördinatie terwijl ze plezier heeft. De maandelijkse rapportages over haar voortgang zijn een geweldige toevoeging.',
        'The Little Tigers program is perfect for our daughter. She learns discipline and coordination while having fun. The monthly progress reports are a great addition.'
      ),
    },
    {
      name: 'Lisa Vermeer',
      role: t('Wedstrijdatleet', 'Competition athlete'),
      rating: 5,
      text: t(
        'Dankzij de uitstekende coaching van Meester Park heb ik dit jaar brons gewonnen op het NK. De focus op techniek én mentale weerbaarheid maakt deze school uniek.',
        'Thanks to the excellent coaching from Master Park, I won bronze at the National Championship this year. The focus on technique and mental resilience makes this school unique.'
      ),
    },
    {
      name: 'Robert Smit',
      role: t('Volwassen leerling, 6 maanden ervaring', 'Adult student, 6 months experience'),
      rating: 5,
      text: t(
        'Ik zocht een manier om fit te worden en stress kwijt te raken. Taekwondo biedt dit en zoveel meer. De gemeenschap hier is als een tweede familie geworden.',
        'I was looking for a way to get fit and relieve stress. Taekwondo offers this and so much more. The community here has become like a second family.'
      ),
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-primary font-medium tracking-widest text-sm mb-4">{t('GETUIGENISSEN', 'TESTIMONIALS')}</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('Wat Onze ', 'What Our ')}<span className="text-primary">{t('Leerlingen Zeggen', 'Students Say')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'Ontdek de ervaringen van onze leerlingen en hun families. Hun verhalen inspireren ons elke dag.',
              'Discover the experiences of our students and their families. Their stories inspire us every day.'
            )}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-muted-foreground mb-4">
            {t('Klaar om je eigen verhaal te schrijven?', 'Ready to write your own story?')}
          </p>
          <a 
            href="#register" 
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
          >
            {t('Start vandaag nog', 'Start today')} →
          </a>
        </div>
      </div>
    </section>
  );
}
