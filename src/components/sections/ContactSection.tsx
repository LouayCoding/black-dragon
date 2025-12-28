import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      });

      if (locationsRef.current) {
        const locations = locationsRef.current.querySelectorAll('.location-card');
        gsap.from(locations, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: locationsRef.current,
            start: 'top 75%',
          },
        });
      }

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div ref={headerRef} className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {t('Contact', 'Contact')}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {t('Bezoek', 'Visit')}<br />
              <span className="text-primary">{t('ons', 'us')}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="space-y-8 max-w-2xl">
              <p className="text-foreground text-xl sm:text-2xl leading-[1.5] font-normal">
                {t(
                  'Twee locaties. Eén passie.',
                  'Two locations. One passion.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div ref={locationsRef} className="grid lg:grid-cols-2 gap-16 mb-24">
          {locations.map((location, index) => (
            <div
              key={index}
              className="location-card space-y-8"
            >
              {/* Google Map */}
              <div className="relative h-80 w-full overflow-hidden">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Location Details */}
              <div className="space-y-8">
                <h3 className="font-serif text-3xl font-bold text-foreground">{location.name}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-1">{t('Adres', 'Address')}</p>
                      <p className="text-foreground text-base font-medium">{location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-1">{t('Telefoon', 'Phone')}</p>
                      <a href={`tel:${location.phone}`} className="text-foreground text-base font-medium hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-1">Email</p>
                      <a href={`mailto:${location.email}`} className="text-foreground text-base font-medium hover:text-primary transition-colors">
                        {location.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-1">{t('Trainingstijden', 'Training times')}</p>
                      <p className="text-foreground text-base font-medium">{location.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h3 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              {t('Klaar om te beginnen?', 'Ready to start?')}
            </h3>
            <p className="text-foreground/70 text-lg">
              {t('Claim je gratis proefles vandaag.', 'Claim your free trial today.')}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold rounded-full"
            >
              <Link to="/register">
                {t('Probeer gratis', 'Try free')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
