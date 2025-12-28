import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate, useParams } from 'react-router-dom';
import { ModernHeader as TransparentHeader } from '@/components/admin/ModernHeader';
import { ModernSidebar } from '@/components/admin/ModernSidebar';
import { DashboardButton } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Phone, MapPin, Award, TrendingUp, Clock, Edit2, Save, X, Plus, AlertCircle, Calendar, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { FormInput, FormSelect } from '@/components/shared';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';
import { getStudent, updateStudent, type Student } from '@/lib/supabase';

export default function AdminStudentDetail() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddAbsence, setShowAddAbsence] = useState(false);
  
  useAdminShortcuts();

  useEffect(() => {
    if (id) {
      loadStudent(id);
    }
  }, [id]);

  const loadStudent = async (studentId: string) => {
    try {
      setLoading(true);
      const data = await getStudent(studentId);
      setStudent(data);
      if (data) {
        setEditData(data);
      }
    } catch (error) {
      console.error('Error loading student:', error);
      toast({
        title: t('Fout', 'Error'),
        description: t('Kon leerling niet laden', 'Could not load student'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };
  
  const [editData, setEditData] = useState<Student | null>(null);

  const [newAbsence, setNewAbsence] = useState({
    date: '',
    reason: 'Ziek',
    notes: '',
  });

  const handleLogout = () => {
    navigate('/admin');
  };

  const handleSave = () => {
    toast({
      title: t('Opgeslagen', 'Saved'),
      description: t('Wijzigingen zijn opgeslagen', 'Changes have been saved'),
    });
    setIsEditing(false);
  };

  const handleAddAbsence = () => {
    toast({
      title: t('Ziekmelding toegevoegd', 'Absence added'),
      description: t('De ziekmelding is toegevoegd', 'The absence has been added'),
    });
    setShowAddAbsence(false);
    setNewAbsence({ date: '', reason: 'Ziek', notes: '' });
  };

  const programLabels: { [key: string]: string } = {
    'little-tigers': t('Kleine Tijgers', 'Little Tigers'),
    'youth': t('Jeugd', 'Youth'),
    'adult': t('Volwassenen', 'Adults'),
  };

  const programOptions = [
    { value: 'little-tigers', label: t('Kleine Tijgers', 'Little Tigers') },
    { value: 'youth', label: t('Jeugd', 'Youth') },
    { value: 'adult', label: t('Volwassenen', 'Adults') },
  ];

  const locationOptions = [
    { value: 'Draaistraat 16', label: 'Draaistraat 16 - De Ontmoetingsschool' },
    { value: 'Withuysstraat 2', label: 'Withuysstraat 2 - Gert van Wijkschool' },
  ];

  const beltOptions = [
    { value: 'Witte band', label: 'Witte band' },
    { value: 'Gele band', label: 'Gele band' },
    { value: 'Oranje band', label: 'Oranje band' },
    { value: 'Groene band', label: 'Groene band' },
    { value: 'Blauwe band', label: 'Blauwe band' },
    { value: 'Rode band', label: 'Rode band' },
    { value: 'Zwarte band', label: 'Zwarte band' },
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

  if (!student) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {t('Leerling niet gevonden', 'Student not found')}
          </h1>
          <DashboardButton onClick={() => navigate('/admin/students')}>
            {t('Terug naar overzicht', 'Back to overview')}
          </DashboardButton>
        </div>
      </div>
    );
  }

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
            
            {/* Back button */}
            <button
              onClick={() => navigate('/admin/students')}
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('Terug naar leerlingen', 'Back to students')}
            </button>

            {/* Header with avatar */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {student.name}
                    </h1>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {student.age} {t('jaar', 'years')} • {programLabels[student.program]}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <DashboardButton
                        variant="secondary"
                        onClick={() => setIsEditing(false)}
                        className="gap-2"
                      >
                        <X className="h-4 w-4" />
                        {t('Annuleren', 'Cancel')}
                      </DashboardButton>
                      <DashboardButton
                        variant="primary"
                        onClick={handleSave}
                        className="gap-2"
                      >
                        <Save className="h-4 w-4" />
                        {t('Opslaan', 'Save')}
                      </DashboardButton>
                    </>
                  ) : (
                    <DashboardButton
                      variant="secondary"
                      onClick={() => setIsEditing(true)}
                      className="gap-2"
                    >
                      <Edit2 className="h-4 w-4" />
                      {t('Bewerken', 'Edit')}
                    </DashboardButton>
                  )}
                </div>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Aanwezigheid', 'Attendance')}</p>
                    <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{student.attendance}%</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center">
                    <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Band', 'Belt')}</p>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{student.belt}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Laatste Les', 'Last Class')}</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{student.lastClass}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info sections */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Persoonlijke Gegevens */}
              <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                  {t('Persoonlijke Gegevens', 'Personal Information')}
                </h3>
                {isEditing ? (
                  <div className="space-y-4">
                    <FormInput
                      label={t('Naam', 'Name')}
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    />
                    <FormInput
                      label={t('Geboortedatum', 'Birthdate')}
                      type="date"
                      value={editData.birthdate}
                      onChange={(e) => setEditData({ ...editData, birthdate: e.target.value })}
                    />
                    <FormInput
                      label={t('Adres', 'Address')}
                      value={editData.address}
                      onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <FormInput
                        label={t('Postcode', 'Postal Code')}
                        value={editData.postalCode}
                        onChange={(e) => setEditData({ ...editData, postalCode: e.target.value })}
                      />
                      <FormInput
                        label={t('Stad', 'City')}
                        value={editData.city}
                        onChange={(e) => setEditData({ ...editData, city: e.target.value })}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">{t('Geboortedatum', 'Birthdate')}</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">
                        {new Date(student.birthdate).toLocaleDateString('nl-NL')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">{t('Leeftijd', 'Age')}</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">{student.age} {t('jaar', 'years')}</span>
                    </div>
                    <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{t('Adres', 'Address')}</p>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{student.address}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{student.postalCode} {student.city}</p>
                    </div>
                    <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{t('Lid sinds', 'Member since')}</p>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {new Date(student.joinDate).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Gegevens */}
              <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                  {t('Contact Gegevens', 'Contact Details')}
                </h3>
                {isEditing ? (
                  <div className="space-y-4">
                    <FormInput
                      label={t('Email', 'Email')}
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    />
                    <FormInput
                      label={t('Telefoon', 'Phone')}
                      value={editData.phone}
                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                    />
                    <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                      <FormInput
                        label={t('Noodcontact Naam', 'Emergency Contact Name')}
                        value={editData.emergencyContact}
                        onChange={(e) => setEditData({ ...editData, emergencyContact: e.target.value })}
                      />
                      <div className="mt-3">
                        <FormInput
                          label={t('Noodcontact Telefoon', 'Emergency Contact Phone')}
                          value={editData.emergencyPhone}
                          onChange={(e) => setEditData({ ...editData, emergencyPhone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{t('Email', 'Email')}</p>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{student.email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{t('Telefoon', 'Phone')}</p>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{student.phone}</p>
                    </div>
                    <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">{t('Noodcontact', 'Emergency Contact')}</p>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{student.emergencyContact}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{student.emergencyPhone}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Training Gegevens */}
              <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                  {t('Training Gegevens', 'Training Details')}
                </h3>
                {isEditing ? (
                  <div className="space-y-4">
                    <FormSelect
                      label={t('Programma', 'Program')}
                      value={editData.program}
                      onValueChange={(value) => setEditData({ ...editData, program: value })}
                      options={programOptions}
                    />
                    <FormSelect
                      label={t('Locatie', 'Location')}
                      value={editData.location}
                      onValueChange={(value) => setEditData({ ...editData, location: value })}
                      options={locationOptions}
                    />
                    <FormSelect
                      label={t('Band', 'Belt')}
                      value={editData.belt}
                      onValueChange={(value) => setEditData({ ...editData, belt: value })}
                      options={beltOptions}
                    />
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">{t('Programma', 'Program')}</span>
                      <Badge variant="secondary">{programLabels[student.program]}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">{t('Locatie', 'Location')}</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">{student.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">{t('Band', 'Belt')}</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">{student.belt}</span>
                    </div>
                    <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{t('Aanwezigheid', 'Attendance')}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500 rounded-full transition-all"
                            style={{ width: `${student.attendance}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{student.attendance}%</span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        {student.attendedClasses} / {student.totalClasses} {t('lessen', 'classes')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Absences section */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {t('Ziekmeldingen', 'Absences')}
                </h3>
                <DashboardButton
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowAddAbsence(!showAddAbsence)}
                  className="gap-2"
                >
                  <Plus className="h-4 w-4" />
                  {t('Ziekmelding Toevoegen', 'Add Absence')}
                </DashboardButton>
              </div>

              {showAddAbsence && (
                <div className="mb-6 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      label={t('Datum', 'Date')}
                      type="date"
                      value={newAbsence.date}
                      onChange={(e) => setNewAbsence({ ...newAbsence, date: e.target.value })}
                    />
                    <FormSelect
                      label={t('Reden', 'Reason')}
                      value={newAbsence.reason}
                      onValueChange={(value) => setNewAbsence({ ...newAbsence, reason: value })}
                      options={[
                        { value: 'Ziek', label: t('Ziek', 'Sick') },
                        { value: 'Blessure', label: t('Blessure', 'Injury') },
                        { value: 'Persoonlijk', label: t('Persoonlijk', 'Personal') },
                        { value: 'Anders', label: t('Anders', 'Other') },
                      ]}
                    />
                  </div>
                  <FormInput
                    label={t('Notities', 'Notes')}
                    value={newAbsence.notes}
                    onChange={(e) => setNewAbsence({ ...newAbsence, notes: e.target.value })}
                    placeholder={t('Optionele notities...', 'Optional notes...')}
                  />
                  <div className="flex gap-2">
                    <DashboardButton
                      variant="secondary"
                      size="sm"
                      onClick={() => setShowAddAbsence(false)}
                    >
                      {t('Annuleren', 'Cancel')}
                    </DashboardButton>
                    <DashboardButton
                      variant="primary"
                      size="sm"
                      onClick={handleAddAbsence}
                      disabled={!newAbsence.date}
                    >
                      {t('Toevoegen', 'Add')}
                    </DashboardButton>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {student.absences && student.absences.length > 0 ? (
                  student.absences.map((absence) => (
                    <div
                      key={absence.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                          <AlertCircle className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{absence.reason}</p>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400">{absence.date} • {absence.notes}</p>
                        </div>
                      </div>
                      <Badge variant={absence.status === 'approved' ? 'secondary' : 'default'}>
                        {absence.status === 'approved' ? t('Goedgekeurd', 'Approved') : t('In afwachting', 'Pending')}
                      </Badge>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 py-8">
                    {t('Geen ziekmeldingen', 'No absences recorded')}
                  </p>
                )}
              </div>
            </div>

            {/* Attendance Details section */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                {t('Aanwezigheid Details', 'Attendance Details')}
              </h3>

              {/* Stats overview */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/30 p-4">
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-1">{t('Aanwezig', 'Present')}</p>
                  <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">{student.attendedClasses}</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">{t('lessen', 'classes')}</p>
                </div>
                <div className="rounded-xl bg-red-50 dark:bg-red-950/30 p-4">
                  <p className="text-xs text-red-600 dark:text-red-400 mb-1">{t('Afwezig', 'Absent')}</p>
                  <p className="text-2xl font-bold text-red-900 dark:text-red-100">{student.totalClasses - student.attendedClasses}</p>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1">{t('lessen', 'classes')}</p>
                </div>
                <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 p-4">
                  <p className="text-xs text-blue-600 dark:text-blue-400 mb-1">{t('Totaal', 'Total')}</p>
                  <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{student.totalClasses}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{t('lessen', 'classes')}</p>
                </div>
              </div>

              {/* Attendance history table */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">
                  {t('Recente Aanwezigheid', 'Recent Attendance')}
                </h4>
                <div className="space-y-2">
                  {student.attendanceHistory && student.attendanceHistory.slice(0, 10).map((record, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          record.status === 'present' 
                            ? 'bg-emerald-500' 
                            : 'bg-red-500'
                        }`} />
                        <div>
                          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            {record.class}
                          </p>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400">
                            {new Date(record.date).toLocaleDateString('nl-NL', { 
                              weekday: 'short', 
                              day: 'numeric', 
                              month: 'short',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {record.status === 'present' ? (
                          <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                            {t('Aanwezig', 'Present')}
                          </Badge>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800">
                              {t('Afwezig', 'Absent')}
                            </Badge>
                            {record.reason && (
                              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                                ({record.reason})
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
