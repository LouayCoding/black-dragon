'use client'

import { Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeInView } from '@/components/animations/FadeInView';

export function ScheduleSection() {
  const schedule = [
    { day: 'Maandag', classes: [
      { time: '17:00 – 18:00', name: 'Kids & Junioren', location: 'Draaistraat' },
      { time: '18:00 – 19:00', name: 'Junioren & Senioren', location: 'Draaistraat' },
    ]},
    { day: 'Dinsdag', classes: [
      { time: '18:00 – 19:00', name: 'Kids & Junioren', location: 'Withuysstraat' },
    ]},
    { day: 'Woensdag', classes: [
      { time: '17:00 – 18:00', name: 'Kids & Junioren', location: 'Draaistraat' },
      { time: '18:00 – 19:00', name: 'Junioren & Senioren', location: 'Draaistraat' },
    ]},
    { day: 'Donderdag', classes: [
      { time: '18:00 – 19:00', name: 'Kids & Junioren', location: 'Withuysstraat' },
    ]},
    { day: 'Vrijdag', classes: [
      { time: '18:00 – 19:00', name: 'Ladies Only', location: 'Draaistraat' },
    ]},
  ];

  return (
    <section id="schedule" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <FadeInView className="mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-8">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
              Rooster
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Wanneer kun je<br />
              <span className="text-primary">trainen?</span>
            </h2>
            <p className="text-foreground/90 text-sm sm:text-base lg:text-lg leading-[1.8] max-w-2xl">
              We trainen op twee locaties in Den Haag. Alle lessen duren 60 minuten.
            </p>
          </div>
        </FadeInView>

        {/* Location Legend */}
        <FadeInView delay={0.1} className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-sm text-foreground/70">Draaistraat 16, Den Haag</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-foreground/40" />
            <span className="text-sm text-foreground/70">Withuysstraat 2, Den Haag</span>
          </div>
        </FadeInView>

        {/* Schedule Grid */}
        <FadeInView delay={0.2} className="space-y-3 mb-12">
          {schedule.map((daySchedule, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-card rounded-lg overflow-hidden"
            >
              <div className="bg-muted/50 px-4 sm:px-6 py-3">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                  {daySchedule.day}
                </h3>
              </div>

              <div className="divide-y divide-border/50">
                {daySchedule.classes.map((cls, classIndex) => (
                  <div
                    key={classIndex}
                    className="px-4 sm:px-6 py-4 hover:bg-muted/20 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3 w-[140px] sm:w-[160px] flex-shrink-0">
                        <Clock className="w-4 h-4 text-foreground/40 flex-shrink-0" />
                        <span className="font-bold text-sm sm:text-base text-foreground">
                          {cls.time}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 flex-grow">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          cls.location === 'Draaistraat' ? 'bg-primary' : 'bg-foreground/40'
                        }`} />
                        <div>
                          <p className="font-semibold text-sm sm:text-base text-foreground">
                            {cls.name}
                          </p>
                          <p className="text-xs text-foreground/50 sm:hidden">
                            {cls.location}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs sm:text-sm text-foreground/50 hidden sm:block">
                        {cls.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </FadeInView>

        {/* Bottom */}
        <FadeInView delay={0.3} className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-5 max-w-3xl mx-auto">
            <p className="text-center text-foreground/70 text-sm leading-relaxed">
              <strong className="text-foreground">Let op:</strong> Rooster kan wijzigen tijdens feestdagen. Neem contact op voor de meest actuele informatie.
            </p>
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-lg"
            >
              <Link href="/inschrijven">Inschrijven</Link>
            </Button>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
