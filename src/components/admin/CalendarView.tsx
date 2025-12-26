import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ChevronLeft, ChevronRight, Clock, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ClassEvent {
  id: string;
  name: string;
  day: string;
  time: string;
  duration: number;
  instructor: string;
  location: string;
  currentStudents: number;
  maxStudents: number;
  color?: string;
}

interface CalendarViewProps {
  classes: ClassEvent[];
  onClassMove?: (classId: string, newDay: string, newTime: string) => void;
  onClassClick?: (classEvent: ClassEvent) => void;
}

export function CalendarView({ classes, onClassMove, onClassClick }: CalendarViewProps) {
  const { t } = useLanguage();
  const [draggedClass, setDraggedClass] = useState<ClassEvent | null>(null);
  const [currentWeek, setCurrentWeek] = useState(0);

  const days = [
    { key: 'Maandag', label: t('Maandag', 'Monday') },
    { key: 'Dinsdag', label: t('Dinsdag', 'Tuesday') },
    { key: 'Woensdag', label: t('Woensdag', 'Wednesday') },
    { key: 'Donderdag', label: t('Donderdag', 'Thursday') },
    { key: 'Vrijdag', label: t('Vrijdag', 'Friday') },
    { key: 'Zaterdag', label: t('Zaterdag', 'Saturday') },
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  const handleDragStart = (e: React.DragEvent, classEvent: ClassEvent) => {
    setDraggedClass(classEvent);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, day: string, time: string) => {
    e.preventDefault();
    if (draggedClass && onClassMove) {
      onClassMove(draggedClass.id, day, time);
    }
    setDraggedClass(null);
  };

  const getClassesForDayAndTime = (day: string, time: string) => {
    return classes.filter(c => c.day === day && c.time === time);
  };

  const getColorClass = (index: number) => {
    const colors = [
      'bg-blue-100 dark:bg-blue-950/30 border-blue-300 dark:border-blue-800 text-blue-900 dark:text-blue-100',
      'bg-emerald-100 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100',
      'bg-purple-100 dark:bg-purple-950/30 border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-100',
      'bg-amber-100 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-100',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{t('Weekrooster', 'Week Schedule')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('Sleep lessen om ze te verplaatsen', 'Drag classes to move them')}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentWeek(currentWeek - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentWeek(0)}
          >
            {t('Deze week', 'This week')}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentWeek(currentWeek + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            {/* Days Header */}
            <div className="grid grid-cols-[80px_repeat(6,1fr)] border-b border-zinc-200 dark:border-zinc-800">
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 border-r border-zinc-200 dark:border-zinc-800">
                <span className="text-xs font-medium text-zinc-500">{t('Tijd', 'Time')}</span>
              </div>
              {days.map((day) => (
                <div
                  key={day.key}
                  className="p-3 bg-zinc-50 dark:bg-zinc-900/50 border-r last:border-r-0 border-zinc-200 dark:border-zinc-800"
                >
                  <span className="text-sm font-semibold">{day.label}</span>
                </div>
              ))}
            </div>

            {/* Time Slots */}
            {timeSlots.map((time) => (
              <div
                key={time}
                className="grid grid-cols-[80px_repeat(6,1fr)] border-b last:border-b-0 border-zinc-200 dark:border-zinc-800"
              >
                {/* Time Label */}
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 border-r border-zinc-200 dark:border-zinc-800">
                  <span className="text-xs font-medium text-zinc-500">{time}</span>
                </div>

                {/* Day Cells */}
                {days.map((day) => {
                  const dayClasses = getClassesForDayAndTime(day.key, time);
                  return (
                    <div
                      key={`${day.key}-${time}`}
                      className={cn(
                        'min-h-[80px] p-2 border-r last:border-r-0 border-zinc-200 dark:border-zinc-800 transition-colors',
                        draggedClass && 'hover:bg-blue-50 dark:hover:bg-blue-950/20'
                      )}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, day.key, time)}
                    >
                      {dayClasses.map((classEvent, idx) => (
                        <div
                          key={classEvent.id}
                          draggable
                          onDragStart={(e) => handleDragStart(e, classEvent)}
                          onClick={() => onClassClick?.(classEvent)}
                          className={cn(
                            'mb-2 p-2 rounded-lg border cursor-move transition-all hover:shadow-md',
                            getColorClass(idx),
                            draggedClass?.id === classEvent.id && 'opacity-50'
                          )}
                        >
                          <div className="space-y-1">
                            <p className="text-xs font-semibold truncate">{classEvent.name}</p>
                            <div className="flex items-center gap-1 text-[10px]">
                              <Clock className="h-3 w-3" />
                              <span>{classEvent.duration}min</span>
                            </div>
                            <div className="flex items-center gap-1 text-[10px]">
                              <Users className="h-3 w-3" />
                              <span>{classEvent.currentStudents}/{classEvent.maxStudents}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-blue-100 dark:bg-blue-950/30 border border-blue-300 dark:border-blue-800" />
          <span>{t('Kleine Tijgers', 'Little Tigers')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-emerald-100 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800" />
          <span>{t('Jeugd', 'Youth')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded bg-purple-100 dark:bg-purple-950/30 border border-purple-300 dark:border-purple-800" />
          <span>{t('Volwassenen', 'Adults')}</span>
        </div>
      </div>
    </div>
  );
}
