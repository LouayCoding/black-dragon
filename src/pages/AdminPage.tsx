import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { StudentProfile } from '@/components/dashboard/StudentProfile';
import { AbsenceReport } from '@/components/dashboard/AbsenceReport';
import { StudentSchedule } from '@/components/dashboard/StudentSchedule';
import { StudentProgress } from '@/components/dashboard/StudentProgress';
import { Routes, Route, Navigate } from 'react-router-dom';

// Mock student data - in real app this would come from backend
const mockStudent = {
  name: 'Jan de Vries',
  email: 'jan.devries@email.nl',
  phone: '06 12345678',
  address: 'De Draaistraat, 2516 EK Den Haag',
  program: 'Jeugd Programma (7-12 jaar)',
  belt: 'Gele Band',
  joinDate: 'Januari 2024',
};

// PIN code voor student toegang - wijzig deze naar je eigen code
const STUDENT_PIN = '1234';

export default function AdminPage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean>('student-authenticated', false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === STUDENT_PIN) {
      setIsAuthenticated(true);
      setPinError(false);
      toast({
        title: t('Welkom terug!', 'Welcome back!'),
        description: t('Je bent ingelogd in je leerling portal.', 'You are logged into your student portal.'),
      });
    } else {
      setPinError(true);
      toast({
        title: t('Onjuiste PIN', 'Incorrect PIN'),
        description: t('Probeer het opnieuw.', 'Please try again.'),
        variant: 'destructive',
      });
    }
    setPin('');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    toast({
      title: t('Uitgelogd', 'Logged out'),
      description: t('Je bent uitgelogd uit de leerling portal.', 'You have been logged out of the student portal.'),
    });
  };


  // PIN login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <div className="w-full max-w-md mx-4">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-blue-50 dark:bg-blue-950/30 rounded-2xl flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
              {t('Leerling Portal', 'Student Portal')}
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {t('Voer je PIN-code in om toegang te krijgen.', 'Enter your PIN code to access.')}
            </p>
          </div>
          
          <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm p-8">
            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2 block">
                  {t('PIN-code', 'PIN code')}
                </label>
                <Input
                  type="password"
                  placeholder="••••"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className={`h-12 ${pinError ? 'border-red-500 dark:border-red-400' : 'border-zinc-200 dark:border-zinc-800'}`}
                  maxLength={10}
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t('Inloggen', 'Login')}
              </button>
            </form>
          </div>
          
          <p className="text-center text-xs text-zinc-500 dark:text-zinc-400 mt-6">
            {t('Neem contact op met je instructeur als je je PIN bent vergeten', 'Contact your instructor if you forgot your PIN')}
          </p>
        </div>
      </div>
    );
  }

  // Student Dashboard
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar onLogout={handleLogout} />
      
      {/* Main Content */}
      <div className="lg:pl-64">
        <div className="p-4 md:p-6 lg:p-8 pt-20 lg:pt-8">
          <Routes>
            {/* Dashboard Home */}
            <Route path="/" element={
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                    {t('Welkom terug!', 'Welcome back!')}
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {t('Hier is je overzicht', 'Here is your overview')}
                  </p>
                </div>

                <StudentProfile student={mockStudent} />

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base md:text-lg">{t('Volgende Les', 'Next Class')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">{t('Maandag', 'Monday')}</p>
                      <p className="text-xl md:text-2xl font-bold text-foreground">17:00</p>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">{t('Jeugd Programma', 'Youth Program')}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base md:text-lg">{t('Aanwezigheid', 'Attendance')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl md:text-2xl font-bold text-primary">95%</p>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        {t('19 van 20 lessen', '19 of 20 classes')}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            } />

            {/* Schedule */}
            <Route path="/schedule" element={<StudentSchedule />} />

            {/* Absence Report */}
            <Route path="/absence" element={
              <div className="max-w-2xl">
                <AbsenceReport />
              </div>
            } />

            {/* Progress */}
            <Route path="/progress" element={<StudentProgress />} />

            {/* Profile */}
            <Route path="/profile" element={
              <div className="max-w-4xl">
                <StudentProfile student={mockStudent} />
              </div>
            } />

            {/* Redirect */}
            <Route path="*" element={<Navigate to="/student" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
