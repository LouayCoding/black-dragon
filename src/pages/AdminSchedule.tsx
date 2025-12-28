import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ModernHeader as TransparentHeader } from '@/components/admin/ModernHeader';
import { ModernSidebar } from '@/components/admin/ModernSidebar';
import { DashboardButton } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Users, Calendar, Clock, MapPin, LayoutGrid, CalendarDays } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { FormInput, FormSelect, Modal } from '@/components/shared';
import { useNavigate } from 'react-router-dom';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';
import { WeeklyCalendar } from '@/components/admin/WeeklyCalendar';

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

const mockClasses: ClassSchedule[] = [
  {
    id: '1',
    name: 'Taekwondo KIDS/JUGD',
    day: 'Maandag',
    time: '17:00',
    duration: 60,
    instructor: 'R. Ousllam',
    location: 'Draaistraat 16',
    maxStudents: 15,
    students: ['1', '2'],
  },
  {
    id: '2',
    name: 'Taekwondo JUGD/JUNIOREN',
    day: 'Maandag',
    time: '18:00',
    duration: 60,
    instructor: 'R. Ousllam',
    location: 'Draaistraat 16',
    maxStudents: 20,
    students: ['1'],
  },
  {
    id: '3',
    name: 'Taekwondo KIDS/JUGD',
    day: 'Dinsdag',
    time: '18:00',
    duration: 60,
    instructor: 'R. Ousllam',
    location: 'Withuysstraat 2',
    maxStudents: 15,
    students: ['3'],
  },
];

const mockStudents = [
  { id: '1', name: 'Jan de Vries', program: 'youth' },
  { id: '2', name: 'Emma Jansen', program: 'little-tigers' },
  { id: '3', name: 'Mohammed Ali', program: 'adult' },
];

export default function AdminSchedule() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [classes, setClasses] = useState<ClassSchedule[]>(mockClasses);
  const [showAddClass, setShowAddClass] = useState(false);
  const [editingClass, setEditingClass] = useState<ClassSchedule | null>(null);
  const [managingStudents, setManagingStudents] = useState<ClassSchedule | null>(null);
  const [viewMode, setViewMode] = useState<'calendar' | 'grid'>('calendar');
  
  useAdminShortcuts();

  const [newClass, setNewClass] = useState({
    name: '',
    day: '',
    time: '',
    duration: '',
    instructor: 'Rachid Ousllam',
    location: '',
    maxStudents: '',
  });

  const handleLogout = () => {
    navigate('/admin');
  };

  const addClass = () => {
    const classSchedule: ClassSchedule = {
      id: Date.now().toString(),
      name: newClass.name,
      day: newClass.day,
      time: newClass.time,
      duration: parseInt(newClass.duration),
      instructor: newClass.instructor,
      location: newClass.location,
      maxStudents: parseInt(newClass.maxStudents),
      students: [],
    };
    setClasses([...classes, classSchedule]);
    setShowAddClass(false);
    setNewClass({
      name: '',
      day: '',
      time: '',
      duration: '',
      instructor: 'Rachid Ousllam',
      location: '',
      maxStudents: '',
    });
    toast({
      title: t('Les toegevoegd', 'Class added'),
      description: t('De les is succesvol toegevoegd', 'The class has been successfully added'),
    });
  };

  const updateClass = () => {
    if (!editingClass) return;
    setClasses(classes.map(c => c.id === editingClass.id ? editingClass : c));
    setEditingClass(null);
    toast({
      title: t('Les bijgewerkt', 'Class updated'),
      description: t('De les is succesvol bijgewerkt', 'The class has been successfully updated'),
    });
  };

  const deleteClass = (id: string) => {
    setClasses(classes.filter(c => c.id !== id));
    toast({
      title: t('Les verwijderd', 'Class deleted'),
      description: t('De les is verwijderd', 'The class has been deleted'),
    });
  };

  const toggleStudent = (classId: string, studentId: string) => {
    setClasses(classes.map(c => {
      if (c.id === classId) {
        const hasStudent = c.students.includes(studentId);
        return {
          ...c,
          students: hasStudent 
            ? c.students.filter(s => s !== studentId)
            : [...c.students, studentId]
        };
      }
      return c;
    }));
  };

  const days = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
  const dayOptions = days.map(day => ({ value: day, label: day }));
  const locationOptions = [
    { value: 'Draaistraat 16', label: 'Draaistraat 16 - De Ontmoetingsschool' },
    { value: 'Withuysstraat 2', label: 'Withuysstraat 2 - Gert van Wijkschool' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex">
      <ModernSidebar onLogout={handleLogout} />
      
      <TransparentHeader
        userName="Admin"
        notificationCount={0}
        onSearch={() => {}}
      />
      
      <div className="flex-1 lg:ml-64">
        <div className="px-8 py-6 pt-24 lg:pt-24">
          <div className="space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {t('Rooster Beheer', 'Schedule Management')}
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {classes.length} {t('lessen gepland', 'classes scheduled')}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {/* View toggle */}
                <div className="flex rounded-lg border border-zinc-200 dark:border-zinc-800 p-1">
                  <button
                    onClick={() => setViewMode('calendar')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'calendar'
                        ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                    }`}
                  >
                    <CalendarDays className="h-4 w-4" />
                    {t('Kalender', 'Calendar')}
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                    }`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                    {t('Grid', 'Grid')}
                  </button>
                </div>
                
                <DashboardButton
                  variant="primary"
                  onClick={() => setShowAddClass(true)}
                  className="gap-2"
                >
                  <Plus className="h-4 w-4" />
                  {t('Nieuwe Les', 'New Class')}
                </DashboardButton>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Totaal Lessen', 'Total Classes')}</p>
                    <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{classes.length}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center">
                    <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Ingeschreven', 'Enrolled')}</p>
                    <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{classes.reduce((acc, c) => acc + c.students.length, 0)}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Locaties', 'Locations')}</p>
                    <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar or Grid View */}
            {viewMode === 'calendar' ? (
              <WeeklyCalendar 
                classes={classes} 
                onClassClick={(cls) => setEditingClass(cls)}
              />
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {classes.length === 0 ? (
                <div className="col-span-full text-center py-12 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm">
                  <Calendar className="h-12 w-12 mx-auto text-zinc-300 mb-3" />
                  <p className="text-zinc-500">{t('Nog geen lessen gepland', 'No classes scheduled yet')}</p>
                </div>
              ) : (
                classes.map((cls) => (
                  <div
                    key={cls.id}
                    className="rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                          {cls.name}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{cls.instructor}</p>
                      </div>
                      <Badge 
                        variant="secondary"
                        className={cls.students.length >= cls.maxStudents ? 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800' : ''}
                      >
                        {cls.students.length}/{cls.maxStudents}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-zinc-400" />
                        <span className="text-zinc-600 dark:text-zinc-400">{cls.day}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-zinc-400" />
                        <span className="text-zinc-600 dark:text-zinc-400">{cls.time} ({cls.duration} min)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-zinc-400" />
                        <span className="text-zinc-600 dark:text-zinc-400">{cls.location}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <button
                        onClick={() => setManagingStudents(cls)}
                        className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        <Users className="h-4 w-4" />
                        {t('Leerlingen', 'Students')}
                      </button>
                      <button
                        onClick={() => setEditingClass(cls)}
                        className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                        {t('Bewerken', 'Edit')}
                      </button>
                      <button
                        onClick={() => deleteClass(cls.id)}
                        className="flex items-center justify-center h-9 w-9 rounded-lg text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
              </div>
            )}

            {/* Add Class Modal */}
            {showAddClass && (
              <Modal
                isOpen={showAddClass}
                onClose={() => setShowAddClass(false)}
                title={t('Nieuwe Les Toevoegen', 'Add New Class')}
                description={t('Vul de gegevens in om een nieuwe les toe te voegen', 'Fill in the details to add a new class')}
                footer={
                  <>
                    <DashboardButton
                      variant="secondary"
                      onClick={() => setShowAddClass(false)}
                      className="flex-1"
                    >
                      {t('Annuleren', 'Cancel')}
                    </DashboardButton>
                    <DashboardButton
                      variant="primary"
                      onClick={addClass}
                      disabled={!newClass.name || !newClass.day || !newClass.time || !newClass.duration || !newClass.location || !newClass.maxStudents}
                      className="flex-1"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      {t('Les Toevoegen', 'Add Class')}
                    </DashboardButton>
                  </>
                }
              >
                <div className="space-y-4">
                  <FormInput
                    label={t('Les Naam', 'Class Name')}
                    required
                    value={newClass.name}
                    onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                    placeholder={t('Bijv. Jeugd Programma', 'E.g. Youth Program')}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormSelect
                      label={t('Dag', 'Day')}
                      required
                      value={newClass.day}
                      onValueChange={(value) => setNewClass({ ...newClass, day: value })}
                      options={dayOptions}
                      placeholder={t('Selecteer dag', 'Select day')}
                    />
                    <FormInput
                      label={t('Tijd', 'Time')}
                      required
                      type="time"
                      value={newClass.time}
                      onChange={(e) => setNewClass({ ...newClass, time: e.target.value })}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      label={t('Duur (minuten)', 'Duration (minutes)')}
                      required
                      type="number"
                      value={newClass.duration}
                      onChange={(e) => setNewClass({ ...newClass, duration: e.target.value })}
                      placeholder="60"
                    />
                    <FormInput
                      label={t('Max Leerlingen', 'Max Students')}
                      required
                      type="number"
                      value={newClass.maxStudents}
                      onChange={(e) => setNewClass({ ...newClass, maxStudents: e.target.value })}
                      placeholder="20"
                    />
                  </div>

                  <FormSelect
                    label={t('Locatie', 'Location')}
                    required
                    value={newClass.location}
                    onValueChange={(value) => setNewClass({ ...newClass, location: value })}
                    options={locationOptions}
                    placeholder={t('Selecteer locatie', 'Select location')}
                  />
                </div>
              </Modal>
            )}

            {/* Edit Class Modal */}
            {editingClass && (
              <Modal
                isOpen={!!editingClass}
                onClose={() => setEditingClass(null)}
                title={t('Les Bewerken', 'Edit Class')}
                description={t('Wijzig de gegevens van de les', 'Modify the class details')}
                footer={
                  <>
                    <DashboardButton
                      variant="secondary"
                      onClick={() => setEditingClass(null)}
                      className="flex-1"
                    >
                      {t('Annuleren', 'Cancel')}
                    </DashboardButton>
                    <DashboardButton
                      variant="primary"
                      onClick={updateClass}
                      className="flex-1"
                    >
                      {t('Opslaan', 'Save')}
                    </DashboardButton>
                  </>
                }
              >
                <div className="space-y-4">
                  <FormInput
                    label={t('Les Naam', 'Class Name')}
                    required
                    value={editingClass.name}
                    onChange={(e) => setEditingClass({ ...editingClass, name: e.target.value })}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormSelect
                      label={t('Dag', 'Day')}
                      required
                      value={editingClass.day}
                      onValueChange={(value) => setEditingClass({ ...editingClass, day: value })}
                      options={dayOptions}
                    />
                    <FormInput
                      label={t('Tijd', 'Time')}
                      required
                      type="time"
                      value={editingClass.time}
                      onChange={(e) => setEditingClass({ ...editingClass, time: e.target.value })}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      label={t('Duur (minuten)', 'Duration (minutes)')}
                      required
                      type="number"
                      value={editingClass.duration.toString()}
                      onChange={(e) => setEditingClass({ ...editingClass, duration: parseInt(e.target.value) })}
                    />
                    <FormInput
                      label={t('Max Leerlingen', 'Max Students')}
                      required
                      type="number"
                      value={editingClass.maxStudents.toString()}
                      onChange={(e) => setEditingClass({ ...editingClass, maxStudents: parseInt(e.target.value) })}
                    />
                  </div>

                  <FormSelect
                    label={t('Locatie', 'Location')}
                    required
                    value={editingClass.location}
                    onValueChange={(value) => setEditingClass({ ...editingClass, location: value })}
                    options={locationOptions}
                  />
                </div>
              </Modal>
            )}

            {/* Manage Students Modal */}
            {managingStudents && (
              <Modal
                isOpen={!!managingStudents}
                onClose={() => setManagingStudents(null)}
                title={t('Leerlingen Beheren', 'Manage Students')}
                description={`${managingStudents.name} - ${managingStudents.day} ${managingStudents.time}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t('Ingeschreven', 'Enrolled')}</span>
                    <Badge variant="secondary">{managingStudents.students.length}/{managingStudents.maxStudents}</Badge>
                  </div>

                  {mockStudents.map(student => {
                    const isEnrolled = managingStudents.students.includes(student.id);
                    return (
                      <div key={student.id} className="flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
                        <div>
                          <p className="font-medium text-zinc-900 dark:text-zinc-100">{student.name}</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">{student.program}</p>
                        </div>
                        <DashboardButton
                          variant={isEnrolled ? 'danger' : 'primary'}
                          size="sm"
                          onClick={() => toggleStudent(managingStudents.id, student.id)}
                          disabled={!isEnrolled && managingStudents.students.length >= managingStudents.maxStudents}
                        >
                          {isEnrolled ? t('Verwijderen', 'Remove') : t('Toevoegen', 'Add')}
                        </DashboardButton>
                      </div>
                    );
                  })}
                </div>
              </Modal>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
