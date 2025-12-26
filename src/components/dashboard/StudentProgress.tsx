import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, TrendingUp, Target, CheckCircle2 } from 'lucide-react';

export function StudentProgress() {
  const { t } = useLanguage();

  const achievements = [
    { name: t('Gele Band Behaald', 'Yellow Belt Achieved'), date: t('Dec 2024', 'Dec 2024'), icon: '🥋' },
    { name: t('50 Lessen Voltooid', '50 Classes Completed'), date: t('Nov 2024', 'Nov 2024'), icon: '🎯' },
    { name: t('Perfecte Aanwezigheid', 'Perfect Attendance'), date: t('Okt 2024', 'Oct 2024'), icon: '⭐' },
  ];

  const skills = [
    { name: t('Poomsae (Vormen)', 'Poomsae (Forms)'), level: 75 },
    { name: t('Sparring', 'Sparring'), level: 60 },
    { name: t('Zelfverdediging', 'Self Defense'), level: 80 },
    { name: t('Traptechnieken', 'Kicking Techniques'), level: 70 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
          {t('Mijn Voortgang', 'My Progress')}
        </h1>
        <p className="text-muted-foreground">
          {t('Volg je ontwikkeling en prestaties', 'Track your development and achievements')}
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Award className="w-4 h-4" />
              {t('Huidige Band', 'Current Belt')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">{t('Gele Band', 'Yellow Belt')}</p>
            <p className="text-xs text-muted-foreground mt-1">{t('Sinds Dec 2024', 'Since Dec 2024')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {t('Totaal Lessen', 'Total Classes')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-foreground">52</p>
            <p className="text-xs text-muted-foreground mt-1">{t('Sinds Jan 2024', 'Since Jan 2024')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Target className="w-4 h-4" />
              {t('Aanwezigheid', 'Attendance')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">95%</p>
            <p className="text-xs text-muted-foreground mt-1">{t('19 van 20 lessen', '19 of 20 classes')}</p>
          </CardContent>
        </Card>
      </div>

      {/* Skills Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            {t('Vaardigheden', 'Skills')}
          </CardTitle>
          <CardDescription>
            {t('Je voortgang per vaardigheid', 'Your progress per skill')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            {t('Prestaties', 'Achievements')}
          </CardTitle>
          <CardDescription>
            {t('Je behaalde mijlpalen', 'Your achieved milestones')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{achievement.name}</p>
                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
