'use client'

import { Clock } from 'lucide-react';
import { FadeInView } from '@/components/animations/FadeInView';

export function ScheduleSection() {


  const schedule = [
    { day: 'Maandag', classes: [
      { time: '17:00-18:00', name: 'Taekwondo KIDS/JEUGD', location: 'Draaistraat 16, Den Haag', duration: '60 min' },
      { time: '18:00-19:00', name: 'Taekwondo JEUGD/SENIOREN', location: 'Draaistraat 16, Den Haag', duration: '60 min' },
    ]},
    { day: 'Dinsdag', classes: [
      { time: '18:00-19:00', name: 'Taekwondo KIDS/JEUGD', location: 'Withuysstraat 2, Den Haag', duration: '60 min' },
    ]},
    { day: 'Woensdag', classes: [
      { time: '17:00-18:00', name: 'Taekwondo KIDS/JEUGD', location: 'Draaistraat 16, Den Haag', duration: '60 min' },
      { time: '18:00-19:00', name: 'Taekwondo JEUGD/SENIOREN', location: 'Draaistraat 16, Den Haag', duration: '60 min' },
    ]},
    { day: 'Donderdag', classes: [
      { time: '18:00-19:00', name: 'Taekwondo KIDS/JEUGD', location: 'Withuysstraat 2, Den Haag', duration: '60 min' },
    ]},
    { day: 'Vrijdag', classes: [
      { time: '18:00-19:00', name: 'Ladies Only', location: 'Draaistraat 16, Den Haag', duration: '60 min' },
    ]},
  ];

  return (
    <section id="schedule" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <FadeInView className="mb-16">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                {'Trainingsschema'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {'Wanneer kun je'}<br />
              <span className="text-primary">{'trainen?'}</span>
            </h2>
            <div className="space-y-6 max-w-2xl">
              <p className="text-foreground/90 text-sm sm:text-base lg:text-lg leading-[1.8]">
                We trainen wekelijks op twee locaties in Den Haag. Kies de tijden en locatie die het beste bij jou passen.
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Schedule Grid - Clean & Clear */}
        <FadeInView delay={0.2} className="space-y-3 mb-12">
          {schedule.map((daySchedule, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-card rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Day Header */}
              <div className="bg-muted/50 px-4 sm:px-6 py-3">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                  {daySchedule.day}
                </h3>
              </div>

              {/* Classes */}
              <div className="divide-y divide-border/50">
                {daySchedule.classes.map((cls, classIndex) => (
                  <div
                    key={classIndex}
                    className="px-4 sm:px-6 py-4 hover:bg-muted/20 transition-colors duration-200"
                  >
                    <div className="grid md:grid-cols-[180px_1fr_auto] gap-4 items-center">
                      {/* Time */}
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/40 flex-shrink-0" />
                        <span className="font-bold text-sm sm:text-base text-foreground">
                          {cls.time}
                        </span>
                      </div>

                      {/* Class Info */}
                      <div className="space-y-1">
                        <p className="font-semibold text-sm sm:text-base text-foreground">
                          {cls.name}
                        </p>
                        <p className="text-xs sm:text-sm text-foreground/60">
                          {cls.location}
                        </p>
                      </div>

                      {/* Duration Badge */}
                      <div className="flex justify-end md:justify-start">
                        <span className="text-xs sm:text-sm text-foreground/60 font-medium">
                          {cls.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </FadeInView>

        {/* Note */}
        <FadeInView delay={0.3} className="bg-muted/30 rounded-lg p-5 max-w-3xl mx-auto">
          <p className="text-center text-foreground/70 text-sm leading-relaxed">
            <strong className="text-foreground">Let op:</strong> Rooster kan wijzigen tijdens feestdagen en speciale evenementen. Neem contact op voor de meest actuele informatie.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
