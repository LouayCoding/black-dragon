import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ScheduleSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const schedule = [
    { day: t('Maandag', 'Monday'), classes: [
      { time: '16:00', name: t('Kleine Tijgers', 'Little Tigers'), duration: '45 min' },
      { time: '17:00', name: t('Jeugd Programma', 'Youth Program'), duration: '60 min' },
      { time: '18:30', name: t('Volwassenen Training', 'Adult Training'), duration: '75 min' },
    ]},
    { day: t('Dinsdag', 'Tuesday'), classes: [
      { time: '16:30', name: t('Jeugd Programma', 'Youth Program'), duration: '60 min' },
      { time: '18:00', name: t('Tiener Krijgers', 'Teen Warriors'), duration: '75 min' },
      { time: '19:30', name: t('Wedstrijdteam', 'Competition Team'), duration: '90 min' },
    ]},
    { day: t('Woensdag', 'Wednesday'), classes: [
      { time: '16:00', name: t('Kleine Tijgers', 'Little Tigers'), duration: '45 min' },
      { time: '17:00', name: t('Jeugd Programma', 'Youth Program'), duration: '60 min' },
      { time: '18:30', name: t('Volwassenen Training', 'Adult Training'), duration: '75 min' },
    ]},
    { day: t('Donderdag', 'Thursday'), classes: [
      { time: '16:30', name: t('Jeugd Programma', 'Youth Program'), duration: '60 min' },
      { time: '18:00', name: t('Tiener Krijgers', 'Teen Warriors'), duration: '75 min' },
      { time: '19:30', name: t('Wedstrijdteam', 'Competition Team'), duration: '90 min' },
    ]},
    { day: t('Vrijdag', 'Friday'), classes: [
      { time: '16:00', name: t('Kleine Tijgers', 'Little Tigers'), duration: '45 min' },
      { time: '17:00', name: t('Gezinsles', 'Family Class'), duration: '60 min' },
      { time: '18:30', name: t('Volwassenen Training', 'Adult Training'), duration: '75 min' },
    ]},
    { day: t('Zaterdag', 'Saturday'), classes: [
      { time: '09:00', name: t('Open Training', 'Open Mat'), duration: '120 min' },
      { time: '11:30', name: t('Wedstrijdteam', 'Competition Team'), duration: '90 min' },
      { time: '14:00', name: t('Privélessen', 'Private Lessons'), duration: t('Op afspraak', 'By Appt') },
    ]},
  ];

  return (
    <section id="schedule" className="py-32 bg-background relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <span className="inline-block text-primary font-medium tracking-[0.2em] text-sm mb-6">
            {t('ROOSTER', 'SCHEDULE')}
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            {t('Wekelijks ', 'Weekly ')}<span className="text-primary">{t('Lesrooster', 'Class Schedule')}</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl">
            {t(
              'Vind de perfecte lestijd die in je schema past. We bieden flexibele trainingsopties gedurende de hele week.',
              'Find the perfect class time that fits your schedule. We offer flexible training options throughout the week.'
            )}
          </p>
        </div>

        {/* Schedule Grid */}
        <div className={cn(
          "grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          {schedule.map((daySchedule, dayIndex) => (
            <div
              key={dayIndex}
              className="group bg-card rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-500 card-hover"
              style={{ transitionDelay: isVisible ? `${dayIndex * 60}ms` : '0ms' }}
            >
              {/* Day Header */}
              <div className="bg-secondary px-6 py-5">
                <h3 className="font-serif text-xl font-bold text-secondary-foreground">
                  {daySchedule.day}
                </h3>
              </div>

              {/* Classes */}
              <div className="p-6 space-y-4">
                {daySchedule.classes.map((cls, classIndex) => (
                  <div
                    key={classIndex}
                    className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm">{cls.name}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                        <span className="font-medium text-primary">{cls.time}</span>
                        <span>•</span>
                        <span>{cls.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-16 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <p className="text-muted-foreground mb-6">
            {t('Wil je een les bijwonen? Plan je gratis proefles!', 'Want to join a class? Schedule your free trial!')}
          </p>
          <Button
            asChild
            size="lg"
            className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full group"
          >
            <a href="#contact" className="flex items-center gap-2">
              {t('Plan Gratis Proefles', 'Schedule Free Trial')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}