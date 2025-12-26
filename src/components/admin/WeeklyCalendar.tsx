import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ClassSchedule {
  id: string;
  name: string;
  day: string;
  time: string;
  duration: number;
  instructor: string;
  location: string;
  maxStudents: number;
  students: string[];
}

interface WeeklyCalendarProps {
  classes: ClassSchedule[];
  onClassClick?: (cls: ClassSchedule) => void;
}

const days = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const timeSlots = [
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', 
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
];

export function WeeklyCalendar({ classes, onClassClick }: WeeklyCalendarProps) {
  // Convert time string to minutes since midnight
  const timeToMinutes = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // Calculate position and height for a class
  const getClassPosition = (time: string, duration: number) => {
    const startMinutes = timeToMinutes(time);
    const startOfDay = timeToMinutes('15:00'); // Calendar starts at 15:00
    const minutesFromStart = startMinutes - startOfDay;
    
    // Each 30-minute slot is 60px tall
    const top = (minutesFromStart / 30) * 60;
    const height = (duration / 30) * 60;
    
    return { top, height };
  };

  // Group classes by day
  const classesByDay = days.reduce((acc, day) => {
    acc[day] = classes.filter(cls => cls.day === day);
    return acc;
  }, {} as Record<string, ClassSchedule[]>);

  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
      <div className="grid grid-cols-[80px_repeat(6,1fr)] border-b border-zinc-200 dark:border-zinc-800">
        {/* Time column header */}
        <div className="p-4 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
          <Clock className="h-4 w-4 text-zinc-400" />
        </div>
        
        {/* Day headers */}
        {days.map(day => (
          <div
            key={day}
            className="p-4 text-center border-r border-zinc-200 dark:border-zinc-800 last:border-r-0 bg-zinc-50 dark:bg-zinc-800/50"
          >
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {day}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[80px_repeat(6,1fr)] relative">
        {/* Time slots column */}
        <div className="border-r border-zinc-200 dark:border-zinc-800">
          {timeSlots.map((time, index) => (
            <div
              key={time}
              className="h-[60px] border-b border-zinc-200 dark:border-zinc-800 px-3 py-2 text-xs text-zinc-500 dark:text-zinc-400"
            >
              {index % 2 === 0 && time}
            </div>
          ))}
        </div>

        {/* Day columns with classes */}
        {days.map((day, dayIndex) => (
          <div
            key={day}
            className="relative border-r border-zinc-200 dark:border-zinc-800 last:border-r-0"
          >
            {/* Time slot grid lines */}
            {timeSlots.map(time => (
              <div
                key={time}
                className="h-[60px] border-b border-zinc-200 dark:border-zinc-800"
              />
            ))}

            {/* Classes positioned absolutely */}
            <div className="absolute inset-0 pointer-events-none">
              {classesByDay[day]?.map(cls => {
                const { top, height } = getClassPosition(cls.time, cls.duration);
                const isFull = cls.students.length >= cls.maxStudents;
                
                return (
                  <div
                    key={cls.id}
                    className="absolute left-1 right-1 pointer-events-auto cursor-pointer"
                    style={{ top: `${top}px`, height: `${height}px` }}
                    onClick={() => onClassClick?.(cls)}
                  >
                    <div className={`h-full rounded-lg p-2 border-l-4 transition-all hover:shadow-md ${
                      isFull 
                        ? 'bg-red-50 dark:bg-red-950/30 border-red-500' 
                        : 'bg-blue-50 dark:bg-blue-950/30 border-blue-500'
                    }`}>
                      <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-1 truncate">
                        {cls.name}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                        <Clock className="h-3 w-3" />
                        <span>{cls.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{cls.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <Users className="h-3 w-3 text-zinc-600 dark:text-zinc-400" />
                        <Badge 
                          variant="secondary" 
                          className={`text-xs h-4 px-1 ${
                            isFull 
                              ? 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300' 
                              : 'bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300'
                          }`}
                        >
                          {cls.students.length}/{cls.maxStudents}
                        </Badge>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
