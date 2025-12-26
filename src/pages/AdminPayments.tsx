import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ModernHeader as TransparentHeader } from '@/components/admin/ModernHeader';
import { ModernSidebar } from '@/components/admin/ModernSidebar';
import { DashboardButton } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { 
  Euro, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Download,
  Send,
  Eye,
  Filter,
  Search
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { FormInput, FormSelect, Modal } from '@/components/shared';
import { useNavigate } from 'react-router-dom';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';

interface Payment {
  id: string;
  studentId: string;
  studentName: string;
  amount: number;
  dueDate: string;
  paidDate?: string;
  status: 'paid' | 'pending' | 'overdue';
  invoiceNumber: string;
  description: string;
  method?: string;
}

interface Invoice {
  id: string;
  invoiceNumber: string;
  studentId: string;
  studentName: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  items: {
    description: string;
    amount: number;
  }[];
}

const mockPayments: Payment[] = [
  {
    id: '1',
    studentId: '1',
    studentName: 'Jan de Vries',
    amount: 45.00,
    dueDate: '2024-12-31',
    paidDate: '2024-12-20',
    status: 'paid',
    invoiceNumber: 'INV-2024-001',
    description: 'Maandelijkse contributie December',
    method: 'iDEAL',
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Emma Jansen',
    amount: 45.00,
    dueDate: '2024-12-31',
    status: 'pending',
    invoiceNumber: 'INV-2024-002',
    description: 'Maandelijkse contributie December',
  },
  {
    id: '3',
    studentId: '1',
    studentName: 'Jan de Vries',
    amount: 45.00,
    dueDate: '2024-11-30',
    paidDate: '2024-11-25',
    status: 'paid',
    invoiceNumber: 'INV-2024-003',
    description: 'Maandelijkse contributie November',
    method: 'Bank Transfer',
  },
  {
    id: '4',
    studentId: '3',
    studentName: 'Mohammed Ali',
    amount: 60.00,
    dueDate: '2024-11-15',
    status: 'overdue',
    invoiceNumber: 'INV-2024-004',
    description: 'Maandelijkse contributie November',
  },
];

export default function AdminPayments() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [payments, setPayments] = useState<Payment[]>(mockPayments);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  useAdminShortcuts();

  const handleLogout = () => {
    navigate('/admin');
  };

  const markAsPaid = (paymentId: string) => {
    setPayments(payments.map(p => 
      p.id === paymentId 
        ? { ...p, status: 'paid' as const, paidDate: new Date().toISOString().split('T')[0] }
        : p
    ));
    toast({
      title: t('Betaling gemarkeerd', 'Payment marked'),
      description: t('De betaling is gemarkeerd als betaald', 'The payment has been marked as paid'),
    });
  };

  const sendReminder = (payment: Payment) => {
    toast({
      title: t('Herinnering verzonden', 'Reminder sent'),
      description: t(`Herinnering verzonden naar ${payment.studentName}`, `Reminder sent to ${payment.studentName}`),
    });
  };

  // Calculate stats
  const totalRevenue = payments
    .filter(p => p.status === 'paid')
    .reduce((sum, p) => sum + p.amount, 0);
  
  const pendingAmount = payments
    .filter(p => p.status === 'pending')
    .reduce((sum, p) => sum + p.amount, 0);
  
  const overdueAmount = payments
    .filter(p => p.status === 'overdue')
    .reduce((sum, p) => sum + p.amount, 0);

  const overdueCount = payments.filter(p => p.status === 'overdue').length;

  // Filter payments
  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusOptions = [
    { value: 'all', label: t('Alle', 'All') },
    { value: 'paid', label: t('Betaald', 'Paid') },
    { value: 'pending', label: t('In afwachting', 'Pending') },
    { value: 'overdue', label: t('Achterstallig', 'Overdue') },
  ];

  const getStatusBadge = (status: Payment['status']) => {
    switch (status) {
      case 'paid':
        return (
          <Badge variant="secondary" className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            {t('Betaald', 'Paid')}
          </Badge>
        );
      case 'pending':
        return (
          <Badge variant="secondary" className="bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
            <Clock className="h-3 w-3 mr-1" />
            {t('In afwachting', 'Pending')}
          </Badge>
        );
      case 'overdue':
        return (
          <Badge variant="secondary" className="bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800">
            <AlertCircle className="h-3 w-3 mr-1" />
            {t('Achterstallig', 'Overdue')}
          </Badge>
        );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex">
      <ModernSidebar onLogout={handleLogout} />
      
      <TransparentHeader
        userName="Admin"
        notificationCount={overdueCount}
        onSearch={() => {}}
      />
      
      <div className="flex-1 lg:ml-64">
        <div className="px-8 py-6 pt-24 lg:pt-24">
          <div className="space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {t('Financiën & Betalingen', 'Finance & Payments')}
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {filteredPayments.length} {t('betalingen', 'payments')}
                </p>
              </div>
              <DashboardButton
                variant="primary"
                onClick={() => {}}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                {t('Exporteer', 'Export')}
              </DashboardButton>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center">
                    <Euro className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Totale Omzet', 'Total Revenue')}</p>
                    <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">€{totalRevenue.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('In afwachting', 'Pending')}</p>
                    <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">€{pendingAmount.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Achterstallig', 'Overdue')}</p>
                    <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">€{overdueAmount.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-zinc-900 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{t('Deze maand', 'This month')}</p>
                    <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      {payments.filter(p => p.status === 'paid').length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    type="text"
                    placeholder={t('Zoek op naam of factuurnummer...', 'Search by name or invoice number...')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <FormSelect
                  label=""
                  value={statusFilter}
                  onValueChange={setStatusFilter}
                  options={statusOptions}
                  placeholder={t('Filter op status', 'Filter by status')}
                />
              </div>
            </div>

            {/* Payments Table */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-zinc-200 dark:border-zinc-800">
                    <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Leerling', 'Student')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Factuur', 'Invoice')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Beschrijving', 'Description')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Bedrag', 'Amount')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Vervaldatum', 'Due Date')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Status', 'Status')}
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Acties', 'Actions')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {filteredPayments.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400">
                          {t('Geen betalingen gevonden', 'No payments found')}
                        </td>
                      </tr>
                    ) : (
                      filteredPayments.map((payment) => (
                        <tr key={payment.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                          <td className="px-6 py-4">
                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              {payment.studentName}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                              {payment.invoiceNumber}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                              {payment.description}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                              €{payment.amount.toFixed(2)}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                              {new Date(payment.dueDate).toLocaleDateString('nl-NL')}
                            </p>
                            {payment.paidDate && (
                              <p className="text-xs text-emerald-600 dark:text-emerald-400">
                                {t('Betaald:', 'Paid:')} {new Date(payment.paidDate).toLocaleDateString('nl-NL')}
                              </p>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            {getStatusBadge(payment.status)}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => {
                                  setSelectedPayment(payment);
                                  setShowInvoiceModal(true);
                                }}
                                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                title={t('Bekijk factuur', 'View invoice')}
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                              {payment.status !== 'paid' && (
                                <>
                                  <button
                                    onClick={() => markAsPaid(payment.id)}
                                    className="p-2 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
                                    title={t('Markeer als betaald', 'Mark as paid')}
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                  </button>
                                  <button
                                    onClick={() => sendReminder(payment)}
                                    className="p-2 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                                    title={t('Stuur herinnering', 'Send reminder')}
                                  >
                                    <Send className="h-4 w-4" />
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Invoice Modal */}
            {showInvoiceModal && selectedPayment && (
              <Modal
                isOpen={showInvoiceModal}
                onClose={() => {
                  setShowInvoiceModal(false);
                  setSelectedPayment(null);
                }}
                title={t('Factuur Details', 'Invoice Details')}
                description={selectedPayment.invoiceNumber}
              >
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{t('Leerling', 'Student')}</p>
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{selectedPayment.studentName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{t('Factuurnummer', 'Invoice Number')}</p>
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 font-mono">{selectedPayment.invoiceNumber}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{t('Vervaldatum', 'Due Date')}</p>
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {new Date(selectedPayment.dueDate).toLocaleDateString('nl-NL')}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{t('Status', 'Status')}</p>
                        {getStatusBadge(selectedPayment.status)}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">{t('Omschrijving', 'Description')}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{selectedPayment.description}</p>
                  </div>

                  <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{t('Totaal bedrag', 'Total amount')}</p>
                      <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">€{selectedPayment.amount.toFixed(2)}</p>
                    </div>
                  </div>

                  {selectedPayment.paidDate && (
                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">
                        <CheckCircle className="h-4 w-4 inline mr-2" />
                        {t('Betaald op', 'Paid on')} {new Date(selectedPayment.paidDate).toLocaleDateString('nl-NL')}
                        {selectedPayment.method && ` ${t('via', 'via')} ${selectedPayment.method}`}
                      </p>
                    </div>
                  )}

                  <div className="flex gap-2 pt-4">
                    <DashboardButton
                      variant="secondary"
                      onClick={() => {
                        toast({
                          title: t('Factuur gedownload', 'Invoice downloaded'),
                          description: t('De factuur is gedownload als PDF', 'The invoice has been downloaded as PDF'),
                        });
                      }}
                      className="flex-1 gap-2"
                    >
                      <Download className="h-4 w-4" />
                      {t('Download PDF', 'Download PDF')}
                    </DashboardButton>
                    {selectedPayment.status !== 'paid' && (
                      <DashboardButton
                        variant="primary"
                        onClick={() => {
                          sendReminder(selectedPayment);
                          setShowInvoiceModal(false);
                        }}
                        className="flex-1 gap-2"
                      >
                        <Send className="h-4 w-4" />
                        {t('Stuur herinnering', 'Send reminder')}
                      </DashboardButton>
                    )}
                  </div>
                </div>
              </Modal>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
