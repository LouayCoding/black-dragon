import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MembershipBenefits } from '@/components/shared/MembershipBenefits';

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const locations = [
    {
      name: t('Draaistraat 16 - De Ontmoetingsschool', 'Draaistraat 16 - De Ontmoetingsschool'),
      address: 'Draaistraat 16, 2516 EK Den Haag',
      phone: '06 12345678',
      email: 'info@taekwondoblackdragon.nl',
      hours: t('Ma/Wo/Vr/Za', 'Mon/Wed/Fri/Sat'),
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.123!2d4.3007!3d52.0705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72e9e0e0e0e%3A0x0!2sDraaistraat%2016%2C%20Den%20Haag!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl',
    },
    {
      name: t('Withuysstraat 2 - Gert van Wijkschool', 'Withuysstraat 2 - Gert van Wijkschool'),
      address: 'Withuysstraat 2, Den Haag',
      phone: '06 12345678',
      email: 'info@taekwondoblackdragon.nl',
      hours: t('Di/Do', 'Tue/Thu'),
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.123!2d4.3007!3d52.0705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72e9e0e0e0e%3A0x0!2sWithuysstraat%202%2C%20Den%20Haag!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest text-sm mb-4">{t('CONTACT', 'CONTACT')}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('Bezoek ', 'Visit ')}<span className="text-primary">{t('Ons', 'Us')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(
              'We hebben 2 trainingslocaties in Den Haag. Kom langs voor een gratis proefles!',
              'We have 2 training locations in The Hague. Come by for a free trial class!'
            )}
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              {/* Google Map */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative h-72 w-full rounded-lg overflow-hidden border border-border shadow-card mb-6"
              >
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>

              {/* Location Details */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">{location.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t('Adres', 'Address')}</p>
                      <p className="text-foreground font-medium">{location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t('Telefoon', 'Phone')}</p>
                      <a href={`tel:${location.phone}`} className="text-foreground font-medium hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                      <a href={`mailto:${location.email}`} className="text-foreground font-medium hover:text-primary transition-colors">
                        {location.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t('Openingstijden', 'Hours')}</p>
                      <p className="text-foreground font-medium">{location.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Membership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
            {t('Waarom lid worden?', 'Why become a member?')}
          </h3>
          <MembershipBenefits variant="compact" />
        </motion.div>

        {/* Registration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
              {t('Klaar om te beginnen?', 'Ready to start?')}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t('Claim je gratis proefles vandaag', 'Claim your free trial today')}
            </p>
            <Button
              asChild
              size="lg"
              className="btn-korean bg-primary hover:bg-accent text-primary-foreground"
            >
              <Link to="/register" className="flex items-center gap-2">
                {t('🥋 Probeer Gratis', '🥋 Try Free')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
