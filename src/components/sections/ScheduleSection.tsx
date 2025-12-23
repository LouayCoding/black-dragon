import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

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
      { time: '09:00', name: t('Open Training Alle Niveaus', 'All Levels Open Mat'), duration: '120 min' },
      { time: '11:30', name: t('Wedstrijdteam', 'Competition Team'), duration: '90 min' },
      { time: '14:00', name: t('Privélessen', 'Private Lessons'), duration: t('Op afspraak', 'By Appt') },
    ]},
  ];

  return (
    <section id="schedule" className="py-24 bg-background relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-primary font-medium tracking-widest text-sm mb-4">{t('ROOSTER', 'SCHEDULE')}</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('Wekelijks ', 'Weekly ')}<span className="text-primary">{t('Lesrooster', 'Class Schedule')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'Vind de perfecte lestijd die in je schema past. We bieden flexibele trainingsopties gedurende de hele week.',
              'Find the perfect class time that fits your schedule. We offer flexible training options throughout the week.'
            )}
          </p>
        </div>

        {/* Schedule Grid */}
        <div className={cn(
          "grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {schedule.map((daySchedule, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-colors"
            >
              {/* Day Header */}
              <div className="bg-secondary px-5 py-4">
                <h3 className="font-serif text-lg font-semibold text-secondary-foreground">
                  {daySchedule.day}
                </h3>
              </div>

              {/* Classes */}
              <div className="p-5 space-y-4">
                {daySchedule.classes.map((cls, classIndex) => (
                  <div
                    key={classIndex}
                    className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground">{cls.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span>{cls.time}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span>{cls.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className={cn(
          "text-center text-muted-foreground text-sm mt-10 transition-all duration-700 delay-400",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          {t(
            '* Rooster kan wijzigen tijdens feestdagen en speciale evenementen. Neem contact op voor de meest actuele informatie.',
            '* Schedule subject to change for holidays and special events. Contact us for the most current information.'
          )}
        </p>
      </div>
    </section>
  );
}
