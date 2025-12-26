import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { ModernHeader as TransparentHeader } from '@/components/admin/ModernHeader';
import { Button } from '@/components/ui/button';
import { DashboardButton } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Edit, Trash2, Plus, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ModernSidebar } from '@/components/admin/ModernSidebar';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface Program {
  id: string;
  name: string;
  nameEn: string;
  ageRange: string;
  ageRangeEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  schedule: string;
  scheduleEn: string;
  maxStudents: number;
  active: boolean;
}

const defaultPrograms: Program[] = [
  {
    id: '1',
    name: 'Kleine Tijgers',
    nameEn: 'Little Tigers',
    ageRange: '4-6 jaar',
    ageRangeEn: '4-6 years',
    description: 'Speelse introductie tot Taekwondo voor de allerkleinsten',
    descriptionEn: 'Playful introduction to Taekwondo for the youngest',
    price: '€32,50/maand',
    schedule: 'Maandag & Woensdag 16:00-17:00',
    scheduleEn: 'Monday & Wednesday 16:00-17:00',
    maxStudents: 15,
    active: true,
  },
  {
    id: '2',
    name: 'Jeugd Programma',
    nameEn: 'Youth Program',
    ageRange: '7-12 jaar',
    ageRangeEn: '7-12 years',
    description: 'Technische training met focus op discipline en zelfvertrouwen',
    descriptionEn: 'Technical training focused on discipline and confidence',
    price: '€42,50/maand',
    schedule: 'Dinsdag & Donderdag 17:00-18:00',
    scheduleEn: 'Tuesday & Thursday 17:00-18:00',
    maxStudents: 20,
    active: true,
  },
  {
    id: '3',
    name: 'Volwassenen',
    nameEn: 'Adults',
    ageRange: '18+ jaar',
    ageRangeEn: '18+ years',
    description: 'Intensieve training voor volwassenen, alle niveaus welkom',
    descriptionEn: 'Intensive training for adults, all levels welcome',
    price: '€52,50/maand',
    schedule: 'Maandag, Woensdag & Vrijdag 19:00-20:30',
    scheduleEn: 'Monday, Wednesday & Friday 19:00-20:30',
    maxStudents: 25,
    active: true,
  },
];

export default function AdminPrograms() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated] = useLocalStorage<boolean>('admin-auth', false);
  const [programs, setPrograms] = useState<Program[]>(defaultPrograms);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [showAddProgram, setShowAddProgram] = useState(false);
  const [newProgram, setNewProgram] = useState<Program>({
    id: '',
    name: '',
    nameEn: '',
    ageRange: '',
    ageRangeEn: '',
    description: '',
    descriptionEn: '',
    price: '',
    schedule: '',
    scheduleEn: '',
    maxStudents: 20,
    active: true,
  });

  useAdminShortcuts();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    navigate('/admin');
  };

  const handleAddProgram = () => {
    const program: Program = {
      ...newProgram,
      id: Date.now().toString(),
    };
    setPrograms([...programs, program]);
    setShowAddProgram(false);
    setNewProgram({
      id: '',
      name: '',
      nameEn: '',
      ageRange: '',
      ageRangeEn: '',
      description: '',
      descriptionEn: '',
      price: '',
      schedule: '',
      scheduleEn: '',
      maxStudents: 20,
      active: true,
    });
    toast({
      title: t('Programma toegevoegd', 'Program added'),
      description: t('Het programma is succesvol toegevoegd', 'The program has been added successfully'),
    });
  };

  const handleSaveEdit = () => {
    if (!editingProgram) return;
    setPrograms(programs.map(p => p.id === editingProgram.id ? editingProgram : p));
    setEditingProgram(null);
    toast({
      title: t('Opgeslagen', 'Saved'),
      description: t('Wijzigingen zijn opgeslagen', 'Changes have been saved'),
    });
  };

  const handleDeleteProgram = (id: string) => {
    setPrograms(programs.filter(p => p.id !== id));
    toast({
      title: t('Verwijderd', 'Deleted'),
      description: t('Programma is verwijderd', 'Program has been deleted'),
    });
  };

  const toggleActive = (id: string) => {
    setPrograms(programs.map(p => 
      p.id === id ? { ...p, active: !p.active } : p
    ));
  };

  if (!isAuthenticated) {
    return null;
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
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  {t('Programmas', 'Programs')}
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {t('Beheer trainings programmas en instellingen', 'Manage training programs and settings')}
                </p>
              </div>
              <DashboardButton
                onClick={() => setShowAddProgram(true)}
                variant="primary"
              >
                <Plus className="w-4 h-4 mr-2" />
                {t('Nieuw Programma', 'New Program')}
              </DashboardButton>
            </div>

            {/* Programs Table */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Programma', 'Program')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Leeftijd', 'Age')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Rooster', 'Schedule')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Prijs', 'Price')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Max Leerlingen', 'Max Students')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Status', 'Status')}
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Acties', 'Actions')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {programs.map((program) => (
                      <tr key={program.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-zinc-900 dark:text-zinc-100">
                              {program.name}
                            </div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">
                              {program.description}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-300">
                          {program.ageRange}
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-300">
                          {program.schedule}
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-zinc-900 dark:text-zinc-100">
                            {program.price}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-300">
                          {program.maxStudents}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => toggleActive(program.id)}
                            className="inline-flex"
                          >
                            <Badge
                              variant={program.active ? 'default' : 'secondary'}
                              className={program.active ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : ''}
                            >
                              {program.active ? t('Actief', 'Active') : t('Inactief', 'Inactive')}
                            </Badge>
                          </button>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setEditingProgram({ ...program })}
                              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/20"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteProgram(program.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                  {t('Totaal Programmas', 'Total Programs')}
                </div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                  {programs.length}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                  {t('Actieve Programmas', 'Active Programs')}
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {programs.filter(p => p.active).length}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                  {t('Totaal Capaciteit', 'Total Capacity')}
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {programs.reduce((sum, p) => sum + p.maxStudents, 0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Program Modal */}
      {showAddProgram && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowAddProgram(false)}>
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {t('Nieuw Programma Toevoegen', 'Add New Program')}
              </h2>
              <button onClick={() => setShowAddProgram(false)} className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Naam (NL)', 'Name (NL)')}
                  </label>
                  <Input
                    value={newProgram.name}
                    onChange={(e) => setNewProgram({ ...newProgram, name: e.target.value })}
                    placeholder="Jeugd Programma"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Naam (EN)', 'Name (EN)')}
                  </label>
                  <Input
                    value={newProgram.nameEn}
                    onChange={(e) => setNewProgram({ ...newProgram, nameEn: e.target.value })}
                    placeholder="Youth Program"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Leeftijd (NL)', 'Age (NL)')}
                  </label>
                  <Input
                    value={newProgram.ageRange}
                    onChange={(e) => setNewProgram({ ...newProgram, ageRange: e.target.value })}
                    placeholder="7-12 jaar"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Leeftijd (EN)', 'Age (EN)')}
                  </label>
                  <Input
                    value={newProgram.ageRangeEn}
                    onChange={(e) => setNewProgram({ ...newProgram, ageRangeEn: e.target.value })}
                    placeholder="7-12 years"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Beschrijving (NL)', 'Description (NL)')}
                  </label>
                  <Textarea
                    value={newProgram.description}
                    onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Beschrijving (EN)', 'Description (EN)')}
                  </label>
                  <Textarea
                    value={newProgram.descriptionEn}
                    onChange={(e) => setNewProgram({ ...newProgram, descriptionEn: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Prijs', 'Price')}
                  </label>
                  <Input
                    value={newProgram.price}
                    onChange={(e) => setNewProgram({ ...newProgram, price: e.target.value })}
                    placeholder="€42,50/maand"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Rooster (NL)', 'Schedule (NL)')}
                  </label>
                  <Input
                    value={newProgram.schedule}
                    onChange={(e) => setNewProgram({ ...newProgram, schedule: e.target.value })}
                    placeholder="Di & Do 17:00-18:00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Max Leerlingen', 'Max Students')}
                  </label>
                  <Input
                    type="number"
                    value={newProgram.maxStudents}
                    onChange={(e) => setNewProgram({ ...newProgram, maxStudents: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <button
                onClick={handleAddProgram}
                className="w-full h-12 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                {t('Programma Toevoegen', 'Add Program')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Program Modal */}
      {editingProgram && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setEditingProgram(null)}>
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {t('Programma Bewerken', 'Edit Program')}
              </h2>
              <button onClick={() => setEditingProgram(null)} className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Naam (NL)', 'Name (NL)')}
                  </label>
                  <Input
                    value={editingProgram.name}
                    onChange={(e) => setEditingProgram({ ...editingProgram, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Naam (EN)', 'Name (EN)')}
                  </label>
                  <Input
                    value={editingProgram.nameEn}
                    onChange={(e) => setEditingProgram({ ...editingProgram, nameEn: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Leeftijd (NL)', 'Age (NL)')}
                  </label>
                  <Input
                    value={editingProgram.ageRange}
                    onChange={(e) => setEditingProgram({ ...editingProgram, ageRange: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Leeftijd (EN)', 'Age (EN)')}
                  </label>
                  <Input
                    value={editingProgram.ageRangeEn}
                    onChange={(e) => setEditingProgram({ ...editingProgram, ageRangeEn: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Beschrijving (NL)', 'Description (NL)')}
                  </label>
                  <Textarea
                    value={editingProgram.description}
                    onChange={(e) => setEditingProgram({ ...editingProgram, description: e.target.value })}
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Beschrijving (EN)', 'Description (EN)')}
                  </label>
                  <Textarea
                    value={editingProgram.descriptionEn}
                    onChange={(e) => setEditingProgram({ ...editingProgram, descriptionEn: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Prijs', 'Price')}
                  </label>
                  <Input
                    value={editingProgram.price}
                    onChange={(e) => setEditingProgram({ ...editingProgram, price: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Rooster (NL)', 'Schedule (NL)')}
                  </label>
                  <Input
                    value={editingProgram.schedule}
                    onChange={(e) => setEditingProgram({ ...editingProgram, schedule: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Max Leerlingen', 'Max Students')}
                  </label>
                  <Input
                    type="number"
                    value={editingProgram.maxStudents}
                    onChange={(e) => setEditingProgram({ ...editingProgram, maxStudents: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <button
                onClick={handleSaveEdit}
                className="w-full h-12 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                {t('Wijzigingen Opslaan', 'Save Changes')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
