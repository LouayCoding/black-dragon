'use client'

import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export function ContactSection() {
          
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
      name: 'Draaistraat 16 - De Ontmoetingsschool',
      address: 'Draaistraat 16, 2516 EK Den Haag',
      phone: '06 12345678',
      email: 'info@taekwondoblackdragon.nl',
      hours: 'Ma/Wo/Vr/Za',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.123!2d4.3007!3d52.0705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72e9e0e0e0e%3A0x0!2sDraaistraat%2016%2C%20Den%20Haag!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl',
    },
    {
      name: 'Withuysstraat 2 - Gert van Wijkschool',
      address: 'Withuysstraat 2, Den Haag',
      phone: '06 12345678',
      email: 'info@taekwondoblackdragon.nl',
      hours: 'Di/Do',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.123!2d4.3007!3d52.0705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72e9e0e0e0e%3A0x0!2sWithuysstraat%202%2C%20Den%20Haag!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {'Contact'}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {'Bezoek'}<br />
              <span className="text-primary">{'ons'}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="space-y-8 max-w-2xl">
              <p className="text-foreground text-xl sm:text-2xl leading-[1.5] font-normal">
                Twee locaties. Eén passie.
              </p>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {locations.map((location, index) => (
            <div
              key={index}
              className="location-card space-y-8"
            >
              {/* Google Map */}
              <div className="relative h-80 w-full overflow-hidden">
                <iframe
                  src=location.mapUrl
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
                <h3 className="font-serif text-3xl font-bold text-foreground">location.name</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-1">{'Adres'}</p>
                      <p className="text-foreground text-base font-medium">location.address</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-1">{'Telefoon'}</p>
                      <a href={`tel:$location.phone`} className="text-foreground text-base font-medium hover:text-primary transition-colors">
                        location.phone
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-1">Email</p>
                      <a href={`mailto:$location.email`} className="text-foreground text-base font-medium hover:text-primary transition-colors">
                        location.email
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 mb-1">{'Trainingstijden'}</p>
                      <p className="text-foreground text-base font-medium">location.hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h3 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              {'Klaar om te beginnen?'}
            </h3>
            <p className="text-foreground/70 text-lg">
              {'Claim je gratis proefles vandaag.'}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold rounded-full"
            >
              <Link href="/register">
                {'Inschrijven'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
