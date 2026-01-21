'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeInView } from '@/components/animations/FadeInView';

export function ContactSection() {

  const locations = [
    {
      label: 'Hoofdlocatie',
      name: 'Draaistraat 16 - De Ontmoetingsschool',
      address: 'Draaistraat 16, 2516 EK Den Haag',
      phone: '06 15047993',
      email: 'info@taekwondoblackdragon.nl',
      hours: 'Ma/Wo/Vr/Za',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.123!2d4.3007!3d52.0705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72e9e0e0e0e%3A0x0!2sDraaistraat%2016%2C%20Den%20Haag!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl',
    },
    {
      label: 'Locatie 2',
      name: 'Withuysstraat 2 - Gert van Wijkschool',
      address: 'Withuysstraat 2, Den Haag',
      phone: '06 15047993',
      email: 'info@taekwondoblackdragon.nl',
      hours: 'Di/Do',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.123!2d4.3007!3d52.0705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72e9e0e0e0e%3A0x0!2sWithuysstraat%202%2C%20Den%20Haag!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <FadeInView className="mb-16">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Contact
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Bezoek<br />
              <span className="text-primary">ons</span>
            </h2>
            <div className="space-y-6 max-w-2xl">
              <p className="text-foreground/90 text-sm sm:text-base lg:text-lg leading-[1.8]">
                We trainen op twee locaties in Den Haag. Kom langs voor een proefles of neem contact met ons op voor meer informatie.
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Locations Grid */}
        <FadeInView delay={0.2} className="grid lg:grid-cols-2 gap-8 mb-20">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Google Map */}
              <div className="relative h-64 w-full overflow-hidden">
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
              <div className="p-4 sm:p-6 space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1">{location.label}</h3>
                  <p className="text-foreground/60 text-xs sm:text-sm">{location.name}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-foreground/40 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-foreground/50 mb-0.5">Adres</p>
                      <p className="text-foreground text-sm">{location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-foreground/40 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-foreground/50 mb-0.5">Telefoon</p>
                      <div className="flex flex-col gap-1.5">
                        <a href={`tel:+31${location.phone.replace(/\s/g, '').substring(1)}`} className="text-foreground text-sm hover:text-primary transition-colors">
                          {location.phone}
                        </a>
                        <a 
                          href={`https://wa.me/31${location.phone.replace(/\s/g, '').substring(1)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground text-sm hover:text-primary transition-colors flex items-center gap-1.5"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-foreground/40 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-foreground/50 mb-0.5">Email</p>
                      <a href={`mailto:${location.email}`} className="text-foreground text-sm hover:text-primary transition-colors">
                        {location.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-foreground/40 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-foreground/50 mb-0.5">Trainingstijden</p>
                      <p className="text-foreground text-sm">{location.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </FadeInView>

        {/* CTA */}
        <FadeInView delay={0.3} className="text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Klaar om te beginnen?
            </h3>
            <p className="text-foreground/70 text-sm sm:text-base">
              Claim je gratis proefles vandaag.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-lg"
            >
              <Link href="/inschrijven">
                Inschrijven
              </Link>
            </Button>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
