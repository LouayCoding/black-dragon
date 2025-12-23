import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

const schedule = [
  { day: 'Monday', classes: [
    { time: '4:00 PM', name: 'Little Tigers', duration: '45 min' },
    { time: '5:00 PM', name: 'Youth Program', duration: '60 min' },
    { time: '6:30 PM', name: 'Adult Training', duration: '75 min' },
  ]},
  { day: 'Tuesday', classes: [
    { time: '4:30 PM', name: 'Youth Program', duration: '60 min' },
    { time: '6:00 PM', name: 'Teen Warriors', duration: '75 min' },
    { time: '7:30 PM', name: 'Competition Team', duration: '90 min' },
  ]},
  { day: 'Wednesday', classes: [
    { time: '4:00 PM', name: 'Little Tigers', duration: '45 min' },
    { time: '5:00 PM', name: 'Youth Program', duration: '60 min' },
    { time: '6:30 PM', name: 'Adult Training', duration: '75 min' },
  ]},
  { day: 'Thursday', classes: [
    { time: '4:30 PM', name: 'Youth Program', duration: '60 min' },
    { time: '6:00 PM', name: 'Teen Warriors', duration: '75 min' },
    { time: '7:30 PM', name: 'Competition Team', duration: '90 min' },
  ]},
  { day: 'Friday', classes: [
    { time: '4:00 PM', name: 'Little Tigers', duration: '45 min' },
    { time: '5:00 PM', name: 'Family Class', duration: '60 min' },
    { time: '6:30 PM', name: 'Adult Training', duration: '75 min' },
  ]},
  { day: 'Saturday', classes: [
    { time: '9:00 AM', name: 'All Levels Open Mat', duration: '120 min' },
    { time: '11:30 AM', name: 'Competition Team', duration: '90 min' },
    { time: '2:00 PM', name: 'Private Lessons', duration: 'By Appt' },
  ]},
];

export function ScheduleSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="schedule" className="py-24 bg-background relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-primary font-medium tracking-widest text-sm mb-4">일정 SCHEDULE</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Weekly <span className="text-primary">Class Schedule</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find the perfect class time that fits your schedule. 
            We offer flexible training options throughout the week.
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
          * Schedule subject to change for holidays and special events. Contact us for the most current information.
        </p>
      </div>
    </section>
  );
}
