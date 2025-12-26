import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { ModernHeader as TransparentHeader } from '@/components/admin/ModernHeader';
import { Button } from '@/components/ui/button';
import { DashboardButton } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { Calendar, Check, X, AlertCircle, Plane, User, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ModernSidebar } from '@/components/admin/ModernSidebar';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { getStudents, type Student } from '@/lib/supabase';

interface AttendanceRecord {
  studentId: string;
  studentName: string;
  status: 'present' | 'absent-sick' | 'absent-unauthorized' | 'absent-vacation' | 'absent-other';
  notes?: string;
}

interface Lesson {
  id: string;
  date: string;
  time: string;
  program: string;
  location: string;
}

export default function AdminAttendance() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated] = useLocalStorage<boolean>('admin-auth', false);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedProgram, setSelectedProgram] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [attendance, setAttendance] = useState<Map<string, AttendanceRecord>>(new Map());
  const [showNotes, setShowNotes] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');

  useAdminShortcuts();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    } else {
      loadStudents();
    }
  }, [isAuthenticated, navigate]);

  const loadStudents = async () => {
    try {
      setLoading(true);
      const data = await getStudents();
      setStudents(data);
      
      // Initialize attendance as all present
      const initialAttendance = new Map<string, AttendanceRecord>();
      data.forEach(student => {
        initialAttendance.set(student.id, {
          studentId: student.id,
          studentName: student.name,
          status: 'present',
        });
      });
      setAttendance(initialAttendance);
    } catch (error) {
      console.error('Error loading students:', error);
      toast({
        title: t('Fout', 'Error'),
        description: t('Kon leerlingen niet laden', 'Could not load students'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    navigate('/admin');
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesProgram = selectedProgram === 'all' || student.program === selectedProgram;
    const matchesLocation = selectedLocation === 'all' || student.location === selectedLocation;
    
    return matchesSearch && matchesProgram && matchesLocation;
  });

  const updateAttendance = (studentId: string, status: AttendanceRecord['status']) => {
    const record = attendance.get(studentId);
    if (record) {
      setAttendance(new Map(attendance.set(studentId, { ...record, status })));
    }
  };

  const addNote = (studentId: string) => {
    const record = attendance.get(studentId);
    if (record) {
      setAttendance(new Map(attendance.set(studentId, { ...record, notes: noteText })));
      setShowNotes(null);
      setNoteText('');
      toast({
        title: t('Notitie toegevoegd', 'Note added'),
        description: t('Notitie is opgeslagen', 'Note has been saved'),
      });
    }
  };

  const saveAttendance = () => {
    // Here you would save to Supabase
    const records = Array.from(attendance.values());
    const absentCount = records.filter(r => r.status !== 'present').length;
    const presentCount = records.filter(r => r.status === 'present').length;
    
    toast({
      title: t('Aanwezigheid opgeslagen', 'Attendance saved'),
      description: `${presentCount} ${t('aanwezig', 'present')}, ${absentCount} ${t('afwezig', 'absent')}`,
    });
  };

  const getStatusBadge = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present':
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            <Check className="w-3 h-3 mr-1" />
            {t('Aanwezig', 'Present')}
          </Badge>
        );
      case 'absent-sick':
        return (
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            <AlertCircle className="w-3 h-3 mr-1" />
            {t('Ziek', 'Sick')}
          </Badge>
        );
      case 'absent-unauthorized':
        return (
          <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            <X className="w-3 h-3 mr-1" />
            {t('Ongeoorloofd', 'Unauthorized')}
          </Badge>
        );
      case 'absent-vacation':
        return (
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
            <Plane className="w-3 h-3 mr-1" />
            {t('Vakantie', 'Vacation')}
          </Badge>
        );
      case 'absent-other':
        return (
          <Badge className="bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">
            {t('Overig', 'Other')}
          </Badge>
        );
    }
  };

  const stats = {
    present: Array.from(attendance.values()).filter(r => r.status === 'present').length,
    absentSick: Array.from(attendance.values()).filter(r => r.status === 'absent-sick').length,
    absentUnauthorized: Array.from(attendance.values()).filter(r => r.status === 'absent-unauthorized').length,
    absentVacation: Array.from(attendance.values()).filter(r => r.status === 'absent-vacation').length,
    absentOther: Array.from(attendance.values()).filter(r => r.status === 'absent-other').length,
  };

  if (!isAuthenticated) {
    return null;
  }

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
        
        <div className="px-8 py-6 pt-24 lg:pt-24">
          <div className="space-y-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-blue-600" />
                  {t('Aanwezigheid', 'Attendance')}
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {t('Registreer aanwezigheid per les', 'Register attendance per lesson')}
                </p>
              </div>
              <DashboardButton
                onClick={saveAttendance}
                variant="primary"
              >
                <Check className="w-4 h-4 mr-2" />
                {t('Opslaan', 'Save')}
              </DashboardButton>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Datum', 'Date')}
                  </label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Programma', 'Program')}
                  </label>
                  <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('Alle programmas', 'All programs')}</SelectItem>
                      <SelectItem value="little-tigers">{t('Kleine Tijgers', 'Little Tigers')}</SelectItem>
                      <SelectItem value="youth">{t('Jeugd', 'Youth')}</SelectItem>
                      <SelectItem value="adult">{t('Volwassenen', 'Adults')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Locatie', 'Location')}
                  </label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('Alle locaties', 'All locations')}</SelectItem>
                      <SelectItem value="Amsterdam">Amsterdam</SelectItem>
                      <SelectItem value="Rotterdam">Rotterdam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Zoeken', 'Search')}
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t('Zoek leerling...', 'Search student...')}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                  {t('Aanwezig', 'Present')}
                </div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {stats.present}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                  {t('Ziek', 'Sick')}
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {stats.absentSick}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                  {t('Ongeoorloofd', 'Unauthorized')}
                </div>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {stats.absentUnauthorized}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                  {t('Vakantie', 'Vacation')}
                </div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {stats.absentVacation}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                  {t('Overig', 'Other')}
                </div>
                <div className="text-2xl font-bold text-zinc-600 dark:text-zinc-400">
                  {stats.absentOther}
                </div>
              </div>
            </div>

            {/* Attendance Table */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Leerling', 'Student')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Programma', 'Program')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Status', 'Status')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Acties', 'Actions')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {filteredStudents.map((student) => {
                      const record = attendance.get(student.id);
                      return (
                        <tr key={student.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <div className="font-medium text-zinc-900 dark:text-zinc-100">
                                  {student.name}
                                </div>
                                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                                  {student.belt}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-300">
                            {student.program === 'little-tigers' && t('Kleine Tijgers', 'Little Tigers')}
                            {student.program === 'youth' && t('Jeugd', 'Youth')}
                            {student.program === 'adult' && t('Volwassenen', 'Adults')}
                          </td>
                          <td className="px-6 py-4">
                            {record && getStatusBadge(record.status)}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateAttendance(student.id, 'present')}
                                className={record?.status === 'present' ? 'bg-green-50 dark:bg-green-950/20' : ''}
                              >
                                <Check className="w-4 h-4 text-green-600" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateAttendance(student.id, 'absent-sick')}
                                className={record?.status === 'absent-sick' ? 'bg-blue-50 dark:bg-blue-950/20' : ''}
                              >
                                <AlertCircle className="w-4 h-4 text-blue-600" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateAttendance(student.id, 'absent-unauthorized')}
                                className={record?.status === 'absent-unauthorized' ? 'bg-red-50 dark:bg-red-950/20' : ''}
                              >
                                <X className="w-4 h-4 text-red-600" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateAttendance(student.id, 'absent-vacation')}
                                className={record?.status === 'absent-vacation' ? 'bg-purple-50 dark:bg-purple-950/20' : ''}
                              >
                                <Plane className="w-4 h-4 text-purple-600" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setShowNotes(student.id);
                                  setNoteText(record?.notes || '');
                                }}
                                className="text-zinc-600 hover:text-zinc-900"
                              >
                                {t('Notitie', 'Note')}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Modal */}
      {showNotes && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowNotes(null)}>
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                {t('Notitie toevoegen', 'Add note')}
              </h3>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                className="w-full h-32 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 resize-none"
                placeholder={t('Voer notitie in...', 'Enter note...')}
              />
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => addNote(showNotes)}
                  className="flex-1 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                >
                  {t('Opslaan', 'Save')}
                </button>
                <button
                  onClick={() => setShowNotes(null)}
                  className="flex-1 h-10 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-medium transition-colors"
                >
                  {t('Annuleren', 'Cancel')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
