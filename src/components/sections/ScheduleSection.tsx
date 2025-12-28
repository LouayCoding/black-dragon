import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Clock, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScheduleSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      });

      // Schedule cards stagger
      if (scheduleRef.current) {
        const cards = scheduleRef.current.querySelectorAll('.schedule-day');
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: scheduleRef.current,
            start: 'top 75%',
          },
        });
      }

      // Note animation
      gsap.from(noteRef.current, {
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: noteRef.current,
          start: 'top 85%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const schedule = [
    { day: t('Maandag', 'Monday'), classes: [
      { time: '17:00-18:00', name: t('Taekwondo KIDS/JUGD', 'Taekwondo KIDS/YOUTH'), location: 'Draaistraat 16', duration: '60 min' },
      { time: '18:00-19:00', name: t('Taekwondo JUGD/JUNIOREN', 'Taekwondo YOUTH/JUNIORS'), location: 'Draaistraat 16', duration: '60 min' },
      { time: '19:30-20:30', name: t('Taekwondo/Krachttraining', 'Taekwondo/Strength Training'), location: 'Draaistraat 16', duration: '60 min' },
    ]},
    { day: t('Dinsdag', 'Tuesday'), classes: [
      { time: '18:00-19:00', name: t('Taekwondo KIDS/JUGD', 'Taekwondo KIDS/YOUTH'), location: 'Withuysstraat 2', duration: '60 min' },
    ]},
    { day: t('Woensdag', 'Wednesday'), classes: [
      { time: '17:00-18:00', name: t('Taekwondo KIDS/JUGD', 'Taekwondo KIDS/YOUTH'), location: 'Draaistraat 16', duration: '60 min' },
      { time: '18:00-19:00', name: t('Taekwondo JUGD/JUNIOREN', 'Taekwondo YOUTH/JUNIORS'), location: 'Draaistraat 16', duration: '60 min' },
      { time: '19:30-20:30', name: t('Taekwondo/Krachttraining', 'Taekwondo/Strength Training'), location: 'Draaistraat 16', duration: '60 min' },
    ]},
    { day: t('Donderdag', 'Thursday'), classes: [
      { time: '18:00-19:00', name: t('Taekwondo KIDS/JUGD', 'Taekwondo KIDS/YOUTH'), location: 'Withuysstraat 2', duration: '60 min' },
    ]},
    { day: t('Vrijdag', 'Friday'), classes: [
      { time: '17:00-18:00', name: t('Taekwondo/Krachttraining', 'Taekwondo/Strength Training'), location: 'Draaistraat 16', duration: '60 min' },
      { time: '19:00-20:00', name: t('Vrouwentraining totaal', 'Women Training Total'), location: 'Draaistraat 16', duration: '60 min' },
    ]},
    { day: t('Zaterdag', 'Saturday'), classes: [
      { time: '12:00-13:30', name: t('PT training', 'PT Training'), location: 'Draaistraat 16', duration: '90 min' },
      { time: '13:30-14:30', name: t('PT training', 'PT Training'), location: 'Draaistraat 16', duration: '60 min' },
    ]},
  ];

  return (
    <section ref={sectionRef} id="schedule" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div ref={headerRef} className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {t('Rooster', 'Schedule')}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {t('Wekelijks', 'Weekly')}<br />
              <span className="text-primary">{t('Rooster', 'Schedule')}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <div className="space-y-8 max-w-2xl">
              <p className="text-foreground text-xl sm:text-2xl leading-[1.5] font-normal">
                {t(
                  'Kies je moment. Begin vandaag.',
                  'Choose your time. Start today.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Schedule Grid - Mobile Friendly */}
        <div ref={scheduleRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mb-16">
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
          ref={noteRef}
          className="text-center text-foreground/60 text-sm leading-[1.6] max-w-2xl mx-auto"
        >
          {t(
            '* Rooster kan wijzigen tijdens feestdagen en speciale evenementen. Neem contact op voor de meest actuele informatie.',
            '* Schedule subject to change for holidays and special events. Contact us for the most current information.'
          )}
        </p>
      </div>
    </section>
  );
}
