import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { ModernHeader as TransparentHeader } from '@/components/admin/ModernHeader';
import { ModernSidebar } from '@/components/admin/ModernSidebar';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';
import { 
  getStudents, 
  getOverduePayments,
  getTodaysLessons,
  getUpcomingEvents,
  getRecentActivity,
  getAttendanceStats,
  type Student,
  type Payment,
  type Lesson,
  type Event,
  type ActivityLog
} from '@/lib/supabase';
import { 
  Users, 
  CheckCircle, 
  DollarSign, 
  Newspaper,
  Plus,
  ClipboardCheck,
  Calendar,
  CreditCard,
  FileText,
  BarChart3,
  AlertCircle,
  TrendingUp,
  Clock,
  ArrowRight,
  Search,
  Cake,
  Phone,
  Mail
} from 'lucide-react';

export default function AdminDashboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isAuthenticated] = useLocalStorage<boolean>('admin-auth', false);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [overduePayments, setOverduePayments] = useState<(Payment & { student: Student })[]>([]);
  const [todaysLessons, setTodaysLessons] = useState<Lesson[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [recentActivity, setRecentActivity] = useState<ActivityLog[]>([]);
  const [attendanceStats, setAttendanceStats] = useState<{ date: string; present: number; total: number }[]>([]);

  useAdminShortcuts();

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearch(true);
      }
      if (e.key === 'Escape') {
        setShowSearch(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    } else {
      loadData();
    }
  }, [isAuthenticated, navigate]);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Load all data in parallel
      const [
        studentsData,
        paymentsData,
        lessonsData,
        eventsData,
        activityData,
        attendanceData
      ] = await Promise.all([
        getStudents(),
        getOverduePayments(),
        getTodaysLessons(),
        getUpcomingEvents(),
        getRecentActivity(10),
        getAttendanceStats(
          new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          new Date().toISOString().split('T')[0]
        )
      ]);
      
      setStudents(studentsData);
      setOverduePayments(paymentsData);
      setTodaysLessons(lessonsData);
      setUpcomingEvents(eventsData);
      setRecentActivity(activityData);
      setAttendanceStats(attendanceData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    navigate('/admin/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  // Calculate stats
  const totalStudents = students.length;
  const newStudentsThisMonth = students.filter(s => {
    const joinDate = new Date(s.join_date);
    const now = new Date();
    return joinDate.getMonth() === now.getMonth() && joinDate.getFullYear() === now.getFullYear();
  }).length;

  // Calculate birthdays this week
  const birthdaysThisWeek = students.filter(s => {
    if (!s.birthdate) return false;
    const birthday = new Date(s.birthdate);
    const today = new Date();
    const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    // Set year to current year for comparison
    birthday.setFullYear(today.getFullYear());
    
    return birthday >= today && birthday <= weekFromNow;
  }).sort((a, b) => {
    const dateA = new Date(a.birthdate);
    const dateB = new Date(b.birthdate);
    dateA.setFullYear(new Date().getFullYear());
    dateB.setFullYear(new Date().getFullYear());
    return dateA.getTime() - dateB.getTime();
  });

  // Filter students for search
  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.phone.includes(searchQuery)
  );

  // Calculate alerts from real data
  const alerts = [
    ...(overduePayments.length > 0 ? [{
      id: 1,
      type: 'error' as const,
      text: `${overduePayments.length} ${t('betalingen achterstallig', 'payments overdue')}`,
      count: overduePayments.length,
      link: '/admin/payments'
    }] : []),
  ];

  const quickActions = [
    { icon: Plus, label: t('Nieuwe Leerling', 'New Student'), link: '/admin/students', color: 'blue' },
    { icon: ClipboardCheck, label: t('Aanwezigheid', 'Attendance'), link: '/admin/attendance', color: 'green' },
    { icon: Calendar, label: t('Rooster', 'Schedule'), link: '/admin/schedule', color: 'purple' },
    { icon: CreditCard, label: t('Betalingen', 'Payments'), link: '/admin/payments', color: 'orange' },
    { icon: Newspaper, label: t('Nieuws', 'News'), link: '/admin/news', color: 'indigo' },
    { icon: BarChart3, label: t('Rapporten', 'Reports'), link: '/admin/students', color: 'pink' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-zinc-600 dark:text-zinc-400">{t('Laden...', 'Loading...')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex">
      <ModernSidebar onLogout={handleLogout} />
      
      <div className="flex-1 lg:ml-64">
        <TransparentHeader />
        
        <div className="px-4 md:px-8 py-6 pt-24 lg:pt-24">
          <div className="space-y-4 md:space-y-6">
            
            {/* Welcome Header */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                {t('Welkom terug!', 'Welcome back!')}
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                {t('Hier is je overzicht voor vandaag', 'Here is your overview for today')}
              </p>
            </div>

            {/* Today's Lessons */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <h2 className="text-xl font-bold">
                    {t('Vandaag', 'Today')} - {new Date().toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' })}
                  </h2>
                </div>
              </div>
              
              <div className="space-y-3">
                {todaysLessons.length > 0 ? todaysLessons.map((lesson) => (
                  <div key={lesson.id} className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-lg">{lesson.title}</div>
                        <div className="text-sm text-blue-100 flex items-center gap-4 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {lesson.start_time.substring(0, 5)}-{lesson.end_time.substring(0, 5)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {lesson.max_students} {t('max', 'max')}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => navigate('/admin/attendance')}
                        className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        {t('Registreer', 'Register')}
                      </button>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-8 text-blue-100">
                    {t('Geen lessen vandaag', 'No lessons today')}
                  </div>
                )}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {/* Students */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 md:p-6">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {totalStudents}
                </div>
                <div className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
                  {t('Leerlingen', 'Students')}
                </div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-1 md:mt-2">
                  +{newStudentsThisMonth}
                </div>
              </div>

              {/* Attendance */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  95%
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  {t('Aanwezigheid', 'Attendance')}
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
                  142/150 {t('vandaag', 'today')}
                </div>
              </div>

              {/* Revenue */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  €12.450
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  {t('Inkomsten', 'Revenue')}
                </div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                  +12% {t('deze maand', 'this month')}
                </div>
              </div>

              {/* Alerts */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {alerts.reduce((sum, a) => sum + a.count, 0)}
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  {t('Aandachtspunten', 'Alerts')}
                </div>
                <button
                  onClick={() => navigate('/admin/students')}
                  className="text-xs text-blue-600 dark:text-blue-400 mt-2 hover:underline"
                >
                  {t('Bekijk →', 'View →')}
                </button>
              </div>
            </div>

            {/* Outstanding Payments */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-orange-600" />
                  {t('Openstaande Betalingen', 'Outstanding Payments')}
                </h2>
                <button
                  onClick={() => navigate('/admin/payments')}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  {t('Alles bekijken', 'View all')}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {students.slice(0, 5).map((student, index) => {
                  // Mock outstanding amount (would come from payments system)
                  const outstanding = index === 0 ? 42.50 : index === 1 ? 85.00 : index === 2 ? 42.50 : 0;
                  if (outstanding === 0) return null;
                  
                  return (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-950/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <div className="font-medium text-zinc-900 dark:text-zinc-100">
                            {student.name}
                          </div>
                          <div className="text-sm text-zinc-500 dark:text-zinc-400">
                            {t('Achterstallig sinds', 'Overdue since')} {new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-lg font-bold text-red-600 dark:text-red-400">
                            €{outstanding.toFixed(2)}
                          </div>
                        </div>
                        <button
                          onClick={() => navigate('/admin/payments')}
                          className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors"
                        >
                          {t('Betalen', 'Pay')}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Check-in */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-green-600" />
                {t('Snelle Check-in', 'Quick Check-in')}
              </h2>
              <div className="space-y-4">
                {todaysLessons.length > 0 ? todaysLessons.map((lesson) => {
                  // Filter students for this lesson based on program
                  const lessonStudents = students.filter(s => s.program === lesson.program).slice(0, 6);
                  
                  return (
                    <div key={lesson.id} className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-medium text-zinc-900 dark:text-zinc-100">
                            {lesson.title}
                          </div>
                          <div className="text-sm text-zinc-500 dark:text-zinc-400">
                            {lesson.start_time.substring(0, 5)}-{lesson.end_time.substring(0, 5)} • {lessonStudents.length} {t('leerlingen', 'students')}
                          </div>
                        </div>
                        <button
                          onClick={() => navigate('/admin/attendance')}
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {t('Volledige lijst', 'Full list')}
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {lessonStudents.map((student) => (
                          <button
                            key={student.id}
                            className="flex items-center gap-2 p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 transition-all text-left"
                          >
                            <CheckCircle className="w-4 h-4 text-zinc-400" />
                            <span className="text-sm text-zinc-900 dark:text-zinc-100 truncate">
                              {student.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }) : (
                  <div className="text-center py-8 text-zinc-500 dark:text-zinc-400">
                    {t('Geen lessen vandaag', 'No lessons today')}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                <span>⚡</span>
                {t('Snelle Acties', 'Quick Actions')}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(action.link)}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-${action.color}-100 dark:bg-${action.color}-900/30 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <action.icon className={`w-6 h-6 text-${action.color}-600 dark:text-${action.color}-400`} />
                    </div>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 text-center">
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activity & Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                  {t('Recente Activiteit', 'Recent Activity')}
                </h2>
                <div className="space-y-3">
                  {recentActivity.length > 0 ? (
                    recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        <div className="flex-1">
                          <div className="text-sm text-zinc-900 dark:text-zinc-100">
                            {activity.description}
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">
                            {activity.created_at ? new Date(activity.created_at).toLocaleString('nl-NL', { 
                              hour: '2-digit', 
                              minute: '2-digit',
                              day: 'numeric',
                              month: 'short'
                            }) : ''}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4 text-zinc-500 dark:text-zinc-400">
                      {t('Geen recente activiteit', 'No recent activity')}
                    </div>
                  )}
                </div>
              </div>

              {/* Alerts */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {t('Aandachtspunten', 'Alerts')}
                </h2>
                <div className="space-y-3">
                  {alerts.map((alert) => (
                    <button
                      key={alert.id}
                      onClick={() => navigate(alert.link)}
                      className="w-full flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${
                          alert.type === 'error' ? 'bg-red-100 dark:bg-red-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'
                        } flex items-center justify-center`}>
                          <AlertCircle className={`w-5 h-5 ${
                            alert.type === 'error' ? 'text-red-600 dark:text-red-400' : 'text-yellow-600 dark:text-yellow-400'
                          }`} />
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            {alert.text}
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">
                            {t('Klik om te bekijken', 'Click to view')}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                  
                  {alerts.length === 0 && (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {t('Alles up-to-date!', 'All up-to-date!')}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        {t('Geen aandachtspunten op dit moment', 'No alerts at this time')}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Upcoming Events & Attendance Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Events */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  {t('Komende Evenementen', 'Upcoming Events')}
                </h2>
                <div className="space-y-3">
                  {upcomingEvents.length > 0 ? upcomingEvents.map((event) => {
                    const eventColor = event.type === 'exam' ? 'blue' : event.type === 'holiday' ? 'red' : 'green';
                    return (
                      <div
                        key={event.id}
                        className={`flex items-center justify-between p-4 rounded-lg border border-${eventColor}-200 dark:border-${eventColor}-900/30 bg-${eventColor}-50 dark:bg-${eventColor}-950/10`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full bg-${eventColor}-100 dark:bg-${eventColor}-900/30 flex items-center justify-center`}>
                            <Calendar className={`w-5 h-5 text-${eventColor}-600 dark:text-${eventColor}-400`} />
                          </div>
                          <div>
                            <div className="font-medium text-zinc-900 dark:text-zinc-100">
                              {event.title}
                            </div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">
                              {new Date(event.event_date).toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' })}
                              {event.current_participants && event.current_participants > 0 && ` • ${event.current_participants} ${t('deelnemers', 'participants')}`}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => navigate('/admin/schedule')}
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {t('Details', 'Details')}
                        </button>
                      </div>
                    );
                  }) : (
                    <div className="text-center py-8 text-zinc-500 dark:text-zinc-400">
                      {t('Geen komende evenementen', 'No upcoming events')}
                    </div>
                  )}
                </div>
              </div>

              {/* Attendance Trends */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  {t('Aanwezigheid Trend', 'Attendance Trend')}
                </h2>
                <div className="space-y-4">
                  {/* Simple bar chart */}
                  <div className="space-y-3">
                    {attendanceStats.length > 0 ? attendanceStats.slice(0, 5).map((stat) => {
                      const percentage = stat.total > 0 ? (stat.present / stat.total) * 100 : 0;
                      const dayName = new Date(stat.date).toLocaleDateString('nl-NL', { weekday: 'short' });
                      return (
                        <div key={stat.date}>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-600 dark:text-zinc-400">{dayName}</span>
                            <span className="font-medium text-zinc-900 dark:text-zinc-100">
                              {Math.round(percentage)}%
                            </span>
                          </div>
                          <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    }) : (
                      ['Ma', 'Di', 'Wo', 'Do', 'Vr'].map((day) => (
                        <div key={day}>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-zinc-600 dark:text-zinc-400">{day}</span>
                            <span className="font-medium text-zinc-500 dark:text-zinc-500">-</span>
                          </div>
                          <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-zinc-300 dark:bg-zinc-700 rounded-full" style={{ width: '0%' }} />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  
                  {/* Insights */}
                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                      {attendanceStats.length > 0 ? (
                        <>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span>
                              {t('Gemiddeld', 'Average')} {Math.round(
                                attendanceStats.reduce((acc, stat) => acc + (stat.total > 0 ? (stat.present / stat.total) * 100 : 0), 0) / attendanceStats.length
                              )}% {t('aanwezigheid deze week', 'attendance this week')}
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="text-center text-zinc-500 dark:text-zinc-400">
                          {t('Geen aanwezigheidsdata beschikbaar', 'No attendance data available')}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Birthdays This Week */}
            {birthdaysThisWeek.length > 0 && (
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <Cake className="w-5 h-5 text-pink-600" />
                  {t('Verjaardagen Deze Week', 'Birthdays This Week')}
                </h2>
                <div className="space-y-3">
                  {birthdaysThisWeek.map((student) => {
                    const birthday = new Date(student.birthdate);
                    birthday.setFullYear(new Date().getFullYear());
                    const isToday = birthday.toDateString() === new Date().toDateString();
                    
                    return (
                      <div
                        key={student.id}
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          isToday 
                            ? 'border-pink-500 bg-pink-50 dark:bg-pink-950/20' 
                            : 'border-zinc-200 dark:border-zinc-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                            <Cake className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <div className="font-medium text-zinc-900 dark:text-zinc-100">
                              {student.name}
                            </div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">
                              {isToday ? t('Vandaag!', 'Today!') : birthday.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' })}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => navigate(`/admin/students/${student.id}`)}
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {t('Bekijk', 'View')}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Global Search Modal (Cmd+K) */}
      {showSearch && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center pt-32 p-4"
          onClick={() => setShowSearch(false)}
        >
          <div 
            className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 w-full max-w-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('Zoek leerling... (naam, email, telefoon)', 'Search student... (name, email, phone)')}
                  className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800 border-0 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
              </div>
              <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                {t('Tip: Gebruik Cmd+K (Mac) of Ctrl+K (Windows) om snel te zoeken', 'Tip: Use Cmd+K (Mac) or Ctrl+K (Windows) for quick search')}
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {searchQuery.length > 0 ? (
                filteredStudents.length > 0 ? (
                  <div className="p-2">
                    {filteredStudents.slice(0, 10).map((student) => (
                      <div
                        key={student.id}
                        className="p-4 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                              {student.name}
                            </div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-400 space-y-1">
                              <div className="flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                <a href={`tel:${student.phone}`} className="hover:text-blue-600" onClick={(e) => e.stopPropagation()}>
                                  {student.phone}
                                </a>
                              </div>
                              <div className="flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                <a href={`mailto:${student.email}`} className="hover:text-blue-600 truncate" onClick={(e) => e.stopPropagation()}>
                                  {student.email}
                                </a>
                              </div>
                              {student.emergency_contact && (
                                <div className="flex items-center gap-1 text-red-600 dark:text-red-400">
                                  <AlertCircle className="w-3 h-3" />
                                  <span className="font-medium">{t('Nood:', 'Emergency:')}</span>
                                  <a href={`tel:${student.emergency_phone}`} className="hover:underline" onClick={(e) => e.stopPropagation()}>
                                    {student.emergency_contact} - {student.emergency_phone}
                                  </a>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate(`/admin/students/${student.id}`);
                                  setShowSearch(false);
                                }}
                                className="px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                              >
                                {t('Details', 'Details')}
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate('/admin/attendance');
                                  setShowSearch(false);
                                }}
                                className="px-3 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                              >
                                {t('Afwezig', 'Absent')}
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate('/admin/payments');
                                  setShowSearch(false);
                                }}
                                className="px-3 py-1 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
                              >
                                {t('Betaling', 'Payment')}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {filteredStudents.length > 10 && (
                      <div className="p-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
                        {t('en', 'and')} {filteredStudents.length - 10} {t('meer...', 'more...')}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="text-zinc-400 mb-2">
                      <Search className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      {t('Geen resultaten gevonden', 'No results found')}
                    </div>
                  </div>
                )
              ) : (
                <div className="p-8 text-center">
                  <div className="text-zinc-400 mb-2">
                    <Search className="w-12 h-12 mx-auto" />
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    {t('Begin met typen om te zoeken...', 'Start typing to search...')}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
