'use client'

import { Clock, MapPin } from 'lucide-react';

export function ScheduleSection() {


  const schedule = [
    { day: 'Maandag', classes: [
      { time: '17:00-18:00', name: 'Taekwondo KIDS/JEUGD', location: 'Draaistraat 16 - De Ontmoetingschool', duration: '60 min' },
      { time: '18:00-19:00', name: 'Taekwondo JEUGD/JUNIOREN', location: 'Draaistraat 16 - De Ontmoetingschool', duration: '60 min' },
    ]},
    { day: 'Dinsdag', classes: [
      { time: '18:00-19:00', name: 'Taekwondo KIDS/JEUGD', location: 'Withuysstraat 2 - Gert van Wijkschool', duration: '60 min' },
    ]},
    { day: 'Woensdag', classes: [
      { time: '17:00-18:00', name: 'Taekwondo KIDS/JEUGD', location: 'Draaistraat 16 - De Ontmoetingschool', duration: '60 min' },
      { time: '18:00-19:00', name: 'Taekwondo JEUGD/JUNIOREN', location: 'Draaistraat 16 - De Ontmoetingschool', duration: '60 min' },
    ]},
    { day: 'Donderdag', classes: [
      { time: '18:00-19:00', name: 'Taekwondo KIDS/JEUGD', location: 'Withuysstraat 2 - Gert van Wijkschool', duration: '60 min' },
    ]},
    { day: 'Vrijdag', classes: [
      { time: '18:00-19:00', name: 'Ladies Only', location: 'Draaistraat 16 - De Ontmoetingschool', duration: '60 min' },
    ]},
  ];

  return (
    <section id="schedule" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {'Rooster'}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {'Wekelijks'}<br />
              <span className="text-primary">{'Rooster'}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="space-y-8 max-w-2xl">
              <p className="text-foreground text-xl sm:text-2xl leading-[1.5] font-normal">
                {'Kies je moment. Begin vandaag.'}
              </p>
            </div>
          </div>
        </div>

        {/* Schedule Grid - Mobile Friendly */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mb-16">
          {schedule.map((daySchedule, dayIndex) => (
            <div
              key={dayIndex}
              className="schedule-day bg-background p-6 sm:p-8 hover:bg-muted/30 transition-colors duration-300"
            >
              {/* Day Header */}
              <div className="mb-8 pb-6 border-b-2 border-border">
                <h3 className="font-serif text-3xl font-bold text-foreground">
                  {daySchedule.day}
                </h3>
              </div>

              {/* Classes */}
              <div className="space-y-4">
                {daySchedule.classes.map((cls, classIndex) => (
                  <div
                    key={classIndex}
                    className="space-y-2"
                  >
                    {/* Time */}
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-bold text-base text-foreground">
                        {cls.time}
                      </span>
                    </div>

                    {/* Class Name */}
                    <p className="text-foreground text-base font-semibold leading-[1.6] pl-8">
                      {cls.name}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-2 pl-8">
                      <MapPin className="w-4 h-4 text-primary/70 flex-shrink-0" />
                      <span className="text-sm text-foreground/70 font-medium">
                        {cls.location}
                      </span>
                    </div>

                    {/* Divider between classes */}
                    {classIndex < daySchedule.classes.length - 1 && (
                      <div className="pt-4 border-b border-border/50"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p 
          className="text-center text-foreground/60 text-sm leading-[1.6] max-w-2xl mx-auto"
        >
          {'* Rooster kan wijzigen tijdens feestdagen en speciale evenementen. Neem contact op voor de meest actuele informatie.'}
        </p>
      </div>
    </section>
  );
}
