import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Simple Label component
const Label = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground mb-2">
    {children}
  </label>
);

export function AbsenceReport() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    date: '',
    reason: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would send to backend
    console.log('Absence report:', formData);
    
    toast({
      title: t('Ziekmelding verstuurd', 'Absence reported'),
      description: t('Je ziekmelding is succesvol verstuurd naar de instructeur.', 'Your absence has been successfully reported to the instructor.'),
    });

    // Reset form
    setFormData({ date: '', reason: '', notes: '' });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          {t('Ziekmelden', 'Report Absence')}
        </CardTitle>
        <CardDescription>
          {t('Meld je afwezigheid voor een les', 'Report your absence for a class')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="date">{t('Datum van afwezigheid', 'Date of absence')} *</Label>
            <Input
              id="date"
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div>
            <Label htmlFor="reason">{t('Reden', 'Reason')} *</Label>
            <select
              id="reason"
              required
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">{t('Selecteer reden', 'Select reason')}</option>
              <option value="sick">{t('Ziek', 'Sick')}</option>
              <option value="injury">{t('Blessure', 'Injury')}</option>
              <option value="personal">{t('Persoonlijk', 'Personal')}</option>
              <option value="work">{t('Werk', 'Work')}</option>
              <option value="other">{t('Anders', 'Other')}</option>
            </select>
          </div>

          <div>
            <Label htmlFor="notes">{t('Opmerkingen (optioneel)', 'Notes (optional)')}</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder={t('Eventuele extra informatie...', 'Any additional information...')}
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            {t('Verstuur Ziekmelding', 'Submit Absence Report')}
          </Button>
        </form>

        {/* Recent Absences */}
        <div className="mt-8 pt-6 border-t border-border">
          <h4 className="font-semibold text-foreground mb-4">{t('Recente Ziekmeldingen', 'Recent Absences')}</h4>
          <p className="text-sm text-muted-foreground">
            {t('Nog geen ziekmeldingen', 'No absences reported yet')}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
