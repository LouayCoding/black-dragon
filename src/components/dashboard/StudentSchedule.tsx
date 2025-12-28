import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function StudentSchedule() {
  const { t } = useLanguage();

  const schedule = [
    { day: t('Maandag', 'Monday'), time: '17:00-18:00', class: t('Taekwondo KIDS/JUGD', 'Taekwondo KIDS/YOUTH'), duration: '60 min', location: 'Draaistraat 16' },
    { day: t('Woensdag', 'Wednesday'), time: '17:00-18:00', class: t('Taekwondo KIDS/JUGD', 'Taekwondo KIDS/YOUTH'), duration: '60 min', location: 'Draaistraat 16' },
    { day: t('Vrijdag', 'Friday'), time: '19:00-20:00', class: t('Vrouwentraining', 'Women Training'), duration: '60 min', location: 'Draaistraat 16' },
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
          {t('Mijn Rooster', 'My Schedule')}
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          {t('Je wekelijkse lesrooster', 'Your weekly class schedule')}
        </p>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <Calendar className="w-5 h-5" />
            {t('Wekelijks Rooster', 'Weekly Schedule')}
          </CardTitle>
          <CardDescription className="text-xs md:text-sm">
            {t('Je bent ingeschreven voor 3 lessen per week', 'You are enrolled in 3 classes per week')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 md:space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between p-3 md:p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors gap-3 md:gap-4 min-h-[80px]"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm md:text-base text-foreground">{item.day}</p>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span>{item.duration}</span>
                      <span className="hidden md:inline">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs md:text-sm self-start md:self-center">{item.class}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Classes */}
      <Card>
        <CardHeader>
          <CardTitle>{t('Volgende Lessen', 'Upcoming Classes')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
              <div>
                <p className="font-medium text-foreground">{t('Volgende les', 'Next class')}</p>
                <p className="text-sm text-muted-foreground">{t('Maandag 17:00 - Jeugd Programma', 'Monday 17:00 - Youth Program')}</p>
              </div>
              <Badge className="bg-primary">{t('Vandaag', 'Today')}</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="font-medium text-foreground">{t('Daarna', 'After that')}</p>
                <p className="text-sm text-muted-foreground">{t('Woensdag 17:00 - Jeugd Programma', 'Wednesday 17:00 - Youth Program')}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
