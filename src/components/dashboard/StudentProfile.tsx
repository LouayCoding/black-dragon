import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';

interface StudentData {
  name: string;
  email: string;
  phone: string;
  address: string;
  program: string;
  belt: string;
  joinDate: string;
  avatar?: string;
}

interface StudentProfileProps {
  student: StudentData;
}

export function StudentProfile({ student }: StudentProfileProps) {
  const { t } = useLanguage();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-base md:text-lg">
          <User className="w-5 h-5" />
          {t('Mijn Profiel', 'My Profile')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            {student.avatar ? (
              <img
                src={student.avatar}
                alt={student.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-primary/20"
              />
            ) : (
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {getInitials(student.name)}
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 space-y-3 md:space-y-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{student.name}</h3>
              <Badge variant="secondary" className="text-xs md:text-sm">
                {student.program}
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              <div className="flex items-start gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{t('Email', 'Email')}</p>
                  <p className="text-xs md:text-sm text-foreground break-all">{student.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{t('Telefoon', 'Phone')}</p>
                  <p className="text-xs md:text-sm text-foreground">{student.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{t('Adres', 'Address')}</p>
                  <p className="text-xs md:text-sm text-foreground">{student.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{t('Band', 'Belt')}</p>
                  <p className="text-xs md:text-sm text-foreground font-semibold">{student.belt}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{t('Lid sinds', 'Member since')}</p>
                  <p className="text-xs md:text-sm text-foreground">{student.joinDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
