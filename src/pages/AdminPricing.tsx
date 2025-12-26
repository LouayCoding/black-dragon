import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { ModernHeader as TransparentHeader } from '@/components/admin/ModernHeader';
import { Button } from '@/components/ui/button';
import { DashboardButton } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Edit, Trash2, Plus, Save, X, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ModernSidebar } from '@/components/admin/ModernSidebar';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface PricingPlan {
  id: string;
  name: string;
  nameEn: string;
  price: string;
  period: string;
  periodEn: string;
  description: string;
  descriptionEn: string;
  sessionsPerWeek: number;
  examsPerYear: number;
  includes: string[];
  includesEn: string[];
  highlighted: boolean;
  active: boolean;
}

const defaultPlans: PricingPlan[] = [
  {
    id: '1',
    name: 'Basis',
    nameEn: 'Basic',
    price: '32,50',
    period: 'per maand',
    periodEn: 'per month',
    description: 'Ideaal voor beginners die 1x per week willen trainen',
    descriptionEn: 'Ideal for beginners who want to train once a week',
    sessionsPerWeek: 1,
    examsPerYear: 1,
    includes: ['1x per week training', 'Online lesmateriaal', 'Maandelijks opzegbaar'],
    includesEn: ['1x per week training', 'Online training materials', 'Monthly cancellation'],
    highlighted: false,
    active: true,
  },
  {
    id: '2',
    name: 'Standaard',
    nameEn: 'Standard',
    price: '42,50',
    period: 'per maand',
    periodEn: 'per month',
    description: 'Meest gekozen! Train 2x per week voor snellere progressie',
    descriptionEn: 'Most popular! Train 2x per week for faster progress',
    sessionsPerWeek: 2,
    examsPerYear: 2,
    includes: ['2x per week training', 'Alle programmas', 'Online lesmateriaal', 'Gratis uniform'],
    includesEn: ['2x per week training', 'All programs', 'Online training materials', 'Free uniform'],
    highlighted: true,
    active: true,
  },
  {
    id: '3',
    name: 'Premium',
    nameEn: 'Premium',
    price: '52,50',
    period: 'per maand',
    periodEn: 'per month',
    description: 'Voor serieuze atleten. Onbeperkt trainen met persoonlijke begeleiding',
    descriptionEn: 'For serious athletes. Unlimited training with personal coaching',
    sessionsPerWeek: 0,
    examsPerYear: 4,
    includes: ['Onbeperkt trainen', 'Alle programmas', 'Persoonlijke begeleiding', 'Gratis uniform & bescherming', 'Wedstrijdvoorbereiding'],
    includesEn: ['Unlimited training', 'All programs', 'Personal coaching', 'Free uniform & protection', 'Competition preparation'],
    highlighted: false,
    active: true,
  },
];

export default function AdminPricing() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated] = useLocalStorage<boolean>('admin-auth', false);
  const [plans, setPlans] = useState<PricingPlan[]>(defaultPlans);
  const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null);
  const [showAddPlan, setShowAddPlan] = useState(false);
  const [newPlan, setNewPlan] = useState<PricingPlan>({
    id: '',
    name: '',
    nameEn: '',
    price: '',
    period: 'per maand',
    periodEn: 'per month',
    description: '',
    descriptionEn: '',
    sessionsPerWeek: 2,
    examsPerYear: 2,
    includes: [''],
    includesEn: [''],
    highlighted: false,
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

  const handleAddPlan = () => {
    const plan: PricingPlan = {
      ...newPlan,
      id: Date.now().toString(),
    };
    setPlans([...plans, plan]);
    setShowAddPlan(false);
    setNewPlan({
      id: '',
      name: '',
      nameEn: '',
      price: '',
      period: 'per maand',
      periodEn: 'per month',
      description: '',
      descriptionEn: '',
      sessionsPerWeek: 2,
      examsPerYear: 2,
      includes: [''],
      includesEn: [''],
      highlighted: false,
      active: true,
    });
    toast({
      title: t('Prijsplan toegevoegd', 'Pricing plan added'),
      description: t('Het prijsplan is succesvol toegevoegd', 'The pricing plan has been added successfully'),
    });
  };

  const handleSaveEdit = () => {
    if (!editingPlan) return;
    setPlans(plans.map(p => p.id === editingPlan.id ? editingPlan : p));
    setEditingPlan(null);
    toast({
      title: t('Opgeslagen', 'Saved'),
      description: t('Wijzigingen zijn opgeslagen', 'Changes have been saved'),
    });
  };

  const handleDeletePlan = (id: string) => {
    setPlans(plans.filter(p => p.id !== id));
    toast({
      title: t('Verwijderd', 'Deleted'),
      description: t('Prijsplan is verwijderd', 'Pricing plan has been deleted'),
    });
  };

  const toggleActive = (id: string) => {
    setPlans(plans.map(p => 
      p.id === id ? { ...p, active: !p.active } : p
    ));
  };

  const toggleHighlighted = (id: string) => {
    setPlans(plans.map(p => 
      p.id === id ? { ...p, highlighted: !p.highlighted } : p
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
                  <DollarSign className="w-8 h-8 text-blue-600" />
                  {t('Prijzen', 'Pricing')}
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {t('Beheer prijsplannen en abonnementen', 'Manage pricing plans and subscriptions')}
                </p>
              </div>
              <DashboardButton
                onClick={() => setShowAddPlan(true)}
                variant="primary"
              >
                <Plus className="w-4 h-4 mr-2" />
                {t('Nieuw Prijsplan', 'New Pricing Plan')}
              </DashboardButton>
            </div>

            {/* Pricing Table */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Plan', 'Plan')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Prijs', 'Price')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Trainingen/Week', 'Sessions/Week')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Examens/Jaar', 'Exams/Year')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Populair', 'Popular')}
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
                    {plans.map((plan) => (
                      <tr key={plan.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-zinc-900 dark:text-zinc-100">
                              {plan.name}
                            </div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">
                              {plan.description}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-zinc-900 dark:text-zinc-100">
                            €{plan.price}
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">
                            {plan.period}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-300">
                          {plan.sessionsPerWeek === 0 ? t('Onbeperkt', 'Unlimited') : `${plan.sessionsPerWeek}x`}
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-300">
                          {plan.examsPerYear}x
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => toggleHighlighted(plan.id)}
                            className="inline-flex"
                          >
                            <Badge
                              variant={plan.highlighted ? 'default' : 'secondary'}
                              className={plan.highlighted ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                            >
                              {plan.highlighted ? <Check className="w-3 h-3 mr-1" /> : null}
                              {plan.highlighted ? t('Ja', 'Yes') : t('Nee', 'No')}
                            </Badge>
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => toggleActive(plan.id)}
                            className="inline-flex"
                          >
                            <Badge
                              variant={plan.active ? 'default' : 'secondary'}
                              className={plan.active ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : ''}
                            >
                              {plan.active ? t('Actief', 'Active') : t('Inactief', 'Inactive')}
                            </Badge>
                          </button>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setEditingPlan({ ...plan })}
                              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/20"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeletePlan(plan.id)}
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
                  {t('Totaal Prijsplannen', 'Total Plans')}
                </div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                  {plans.length}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                  {t('Actieve Plannen', 'Active Plans')}
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {plans.filter(p => p.active).length}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                  {t('Gemiddelde Prijs', 'Average Price')}
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  €{(plans.reduce((sum, p) => sum + parseFloat(p.price.replace(',', '.')), 0) / plans.length).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal - simplified for brevity */}
      {(showAddPlan || editingPlan) && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => { setShowAddPlan(false); setEditingPlan(null); }}>
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {editingPlan ? t('Prijsplan Bewerken', 'Edit Plan') : t('Nieuw Prijsplan', 'New Plan')}
              </h2>
              <button onClick={() => { setShowAddPlan(false); setEditingPlan(null); }} className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Naam (NL)', 'Name (NL)')}
                  </label>
                  <Input
                    value={editingPlan ? editingPlan.name : newPlan.name}
                    onChange={(e) => editingPlan
                      ? setEditingPlan({ ...editingPlan, name: e.target.value })
                      : setNewPlan({ ...newPlan, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {t('Prijs', 'Price')}
                  </label>
                  <Input
                    value={editingPlan ? editingPlan.price : newPlan.price}
                    onChange={(e) => editingPlan
                      ? setEditingPlan({ ...editingPlan, price: e.target.value })
                      : setNewPlan({ ...newPlan, price: e.target.value })
                    }
                    placeholder="42,50"
                  />
                </div>
              </div>

              <button
                onClick={editingPlan ? handleSaveEdit : handleAddPlan}
                className="w-full h-12 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center gap-2"
              >
                {editingPlan ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                {editingPlan ? t('Opslaan', 'Save') : t('Toevoegen', 'Add')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
