import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { ModernHeader as TransparentHeader } from '@/components/admin/ModernHeader';
import { Button } from '@/components/ui/button';
import { DashboardButton } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { Users, Edit, Eye, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ModernSidebar } from '@/components/admin/ModernSidebar';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';
import { Modal, FormInput, FormSelect, FormSection } from '@/components/shared';
import { getStudents, addStudent, type Student } from '@/lib/supabase';

export default function AdminStudents() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [programFilter, setProgramFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    program: 'youth',
    belt: 'Witte band',
    location: 'Draaistraat 16',
  });

  // Enable keyboard shortcuts
  useAdminShortcuts();

  // Fetch students from Supabase
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      setLoading(true);
      const data = await getStudents();
      setStudents(data);
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

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.phone.includes(searchQuery);
    
    const matchesProgram = programFilter === 'all' || student.program === programFilter;
    const matchesLocation = locationFilter === 'all' || student.location === locationFilter;
    
    return matchesSearch && matchesProgram && matchesLocation;
  });

  const handleAddStudent = async () => {
    try {
      const studentData = {
        name: newStudent.name,
        email: newStudent.email,
        phone: newStudent.phone,
        password: '1234',
        birthdate: new Date(new Date().getFullYear() - parseInt(newStudent.age), 0, 1).toISOString().split('T')[0],
        age: parseInt(newStudent.age),
        address: '',
        postal_code: '',
        city: newStudent.location,
        emergency_contact: '',
        emergency_phone: '',
        program: newStudent.program as 'little-tigers' | 'youth' | 'adult',
        belt: newStudent.belt,
        location: newStudent.location as 'Den Haag',
        join_date: new Date().toISOString().split('T')[0],
        attendance: 100,
        last_class: new Date().toISOString().split('T')[0],
        total_classes: 0,
        attended_classes: 0,
        avatar: null,
      };
      
      await addStudent(studentData);
      await loadStudents(); // Reload students from database
      
      setShowAddStudent(false);
      setNewStudent({
        name: '',
        email: '',
        phone: '',
        age: '',
        program: 'youth',
        belt: 'Witte band',
        location: 'Draaistraat 16',
      });
      
      toast({
        title: t('Leerling toegevoegd', 'Student added'),
        description: t('De leerling is succesvol toegevoegd', 'The student has been added successfully'),
      });
    } catch (error) {
      console.error('Error adding student:', error);
      toast({
        title: t('Fout', 'Error'),
        description: t('Kon leerling niet toevoegen', 'Could not add student'),
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex">
      <ModernSidebar onLogout={handleLogout} />
      
      <TransparentHeader
        userName="Admin"
        notificationCount={0}
        onSearch={(query) => setSearchQuery(query)}
      />
      
      <div className="flex-1 lg:ml-64">
        <div className="px-8 py-6 pt-24 lg:pt-24">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  {t('Leerlingen', 'Students')}
                </h1>
                <p className="text-sm text-zinc-500">
                  {filteredStudents.length} {t('leerlingen', 'students')}
                </p>
              </div>
              <DashboardButton 
                onClick={() => setShowAddStudent(true)}
                variant="primary"
                className="gap-2"
              >
                <Plus className="w-4 h-4" />
                {t('Nieuwe Leerling', 'New Student')}
              </DashboardButton>
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <Select value={programFilter} onValueChange={setProgramFilter}>
                <SelectTrigger className="w-[200px] rounded-xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder={t('Alle programmas', 'All programs')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('Alle programmas', 'All programs')}</SelectItem>
                  <SelectItem value="little-tigers">{t('Kleine Tijgers', 'Little Tigers')}</SelectItem>
                  <SelectItem value="youth">{t('Jeugd', 'Youth')}</SelectItem>
                  <SelectItem value="adult">{t('Volwassenen', 'Adults')}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-[200px] rounded-xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder={t('Alle locaties', 'All locations')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('Alle locaties', 'All locations')}</SelectItem>
                  <SelectItem value="Draaistraat 16">Draaistraat 16</SelectItem>
                  <SelectItem value="Withuysstraat 2">Withuysstraat 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Students Table */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-zinc-200 dark:border-zinc-800">
                    <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Leerling', 'Student')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Email', 'Email')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Programma', 'Program')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Band', 'Belt')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Locatie', 'Location')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Aanwezigheid', 'Attendance')}
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Acties', 'Actions')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {loading ? (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400">
                          <div className="flex items-center justify-center gap-2">
                            <div className="h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                            <p>{t('Laden...', 'Loading...')}</p>
                          </div>
                        </td>
                      </tr>
                    ) : filteredStudents.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400">
                          <Users className="h-12 w-12 mx-auto text-zinc-300 mb-3" />
                          <p>{t('Geen leerlingen gevonden', 'No students found')}</p>
                        </td>
                      </tr>
                    ) : (
                      filteredStudents.map((student) => (
                        <tr key={student.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              {student.avatar ? (
                                <img 
                                  src={student.avatar} 
                                  alt={student.name}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                                  {student.name.charAt(0)}
                                </div>
                              )}
                              <div>
                                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                  {student.name}
                                </p>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                  {student.age} {t('jaar', 'years')}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{student.email}</p>
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant="secondary" className="font-normal">
                              {programLabels[student.program]}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-zinc-900 dark:text-zinc-100">{student.belt}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{student.location}</p>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className={`h-2 w-2 rounded-full ${student.attendance >= 90 ? 'bg-emerald-500' : student.attendance >= 75 ? 'bg-blue-500' : 'bg-red-500'}`} />
                              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {student.attendance}%
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => navigate(`/admin/students/${student.id}`)}
                                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                title={t('Bekijken', 'View')}
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => navigate(`/admin/students/${student.id}`)}
                                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                title={t('Bewerken', 'Edit')}
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Add Student Modal */}
            <Modal
              isOpen={showAddStudent}
              onClose={() => setShowAddStudent(false)}
              title={t('Nieuwe Leerling', 'New Student')}
              description={t('Vul de gegevens in om een nieuwe leerling toe te voegen', 'Fill in the details to add a new student')}
              footer={
                <>
                  <DashboardButton
                    variant="secondary"
                    onClick={() => setShowAddStudent(false)}
                    className="flex-1"
                  >
                    {t('Annuleren', 'Cancel')}
                  </DashboardButton>
                  <DashboardButton
                    variant="primary"
                    onClick={handleAddStudent}
                    disabled={!newStudent.name || !newStudent.email || !newStudent.phone || !newStudent.age}
                    className="flex-1 disabled:bg-zinc-200 dark:disabled:bg-zinc-800 disabled:text-zinc-400 disabled:shadow-none"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {t('Leerling Toevoegen', 'Add Student')}
                  </DashboardButton>
                </>
              }
            >
              <div className="space-y-6">
                <FormSection title={t('Persoonlijke Gegevens', 'Personal Information')}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      label={t('Volledige Naam', 'Full Name')}
                      required
                      value={newStudent.name}
                      onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                      placeholder={t('Bijv. Jan de Vries', 'E.g. Jan de Vries')}
                    />
                    <FormInput
                      label={t('Leeftijd', 'Age')}
                      required
                      type="number"
                      value={newStudent.age}
                      onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
                      placeholder="10"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      label={t('Email', 'Email')}
                      required
                      type="email"
                      value={newStudent.email}
                      onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                      placeholder="jan@email.nl"
                    />
                    <FormInput
                      label={t('Telefoon', 'Phone')}
                      required
                      value={newStudent.phone}
                      onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                      placeholder="06 12345678"
                    />
                  </div>
                </FormSection>

                <FormSection title={t('Training Informatie', 'Training Information')} className="pt-2">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormSelect
                      label={t('Programma', 'Program')}
                      required
                      value={newStudent.program}
                      onValueChange={(value) => setNewStudent({ ...newStudent, program: value })}
                      options={programOptions}
                    />
                    <FormSelect
                      label={t('Locatie', 'Location')}
                      required
                      value={newStudent.location}
                      onValueChange={(value) => setNewStudent({ ...newStudent, location: value })}
                      options={locationOptions}
                    />
                  </div>
                  <FormSelect
                    label={t('Band', 'Belt')}
                    required
                    value={newStudent.belt}
                    onValueChange={(value) => setNewStudent({ ...newStudent, belt: value })}
                    options={beltOptions}
                  />
                </FormSection>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
