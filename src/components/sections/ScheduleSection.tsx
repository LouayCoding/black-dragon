import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function ScheduleSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

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
    <section id="schedule" className="section-padding bg-background relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
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
        </motion.div>

        {/* Professional Schedule Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-card rounded-lg border border-border overflow-hidden shadow-lg"
        >
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left py-4 px-6 font-serif text-lg text-secondary-foreground">
                    {t('Dag', 'Day')}
                  </th>
                  <th className="text-left py-4 px-6 font-serif text-lg text-secondary-foreground">
                    {t('Tijd', 'Time')}
                  </th>
                  <th className="text-left py-4 px-6 font-serif text-lg text-secondary-foreground">
                    {t('Les', 'Class')}
                  </th>
                  <th className="text-left py-4 px-6 font-serif text-lg text-secondary-foreground">
                    {t('Locatie', 'Location')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((daySchedule, dayIndex) => (
                  daySchedule.classes.map((cls, classIndex) => (
                    <motion.tr
                      key={`${dayIndex}-${classIndex}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (dayIndex * daySchedule.classes.length + classIndex) * 0.05 }}
                      className="border-b border-border last:border-0 hover:bg-primary/5 transition-colors"
                    >
                      {classIndex === 0 && (
                        <td 
                          rowSpan={daySchedule.classes.length} 
                          className="py-4 px-6 font-semibold text-foreground border-r border-border bg-muted/30"
                        >
                          {daySchedule.day}
                        </td>
                      )}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-medium text-foreground">{cls.time}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-foreground">{cls.name}</td>
                      <td className="py-4 px-6 text-muted-foreground text-sm">{cls.location}</td>
                    </motion.tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          {t(
            '* Rooster kan wijzigen tijdens feestdagen en speciale evenementen. Neem contact op voor de meest actuele informatie.',
            '* Schedule subject to change for holidays and special events. Contact us for the most current information.'
          )}
        </motion.p>
      </div>
    </section>
  );
}
