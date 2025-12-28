import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Check, User, Mail, Phone, Calendar, Users, Target } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  location: string;
  message: string;
}

export function RegistrationForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    program: '',
    location: '',
    message: '',
  });

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would send the data to your backend
    alert(t('Bedankt voor je inschrijving! We nemen binnenkort contact met je op.', 'Thank you for registering! We will contact you soon.'));
  };

  const programs = [
    { value: 'little-tigers', label: t('Kleine Tijgers (4-6 jaar)', 'Little Tigers (4-6)') },
    { value: 'youth', label: t('Jeugd (7-12 jaar)', 'Youth (7-12)') },
    { value: 'adult', label: t('Volwassenen (18+)', 'Adults (18+)') },
  ];

  const locations = [
    { value: 'draaistraat-16', label: t('Draaistraat 16 - De Ontmoetingsschool', 'Draaistraat 16 - De Ontmoetingsschool') },
    { value: 'withuysstraat-2', label: t('Withuysstraat 2 - Gert van Wijkschool', 'Withuysstraat 2 - Gert van Wijkschool') },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-korean-white mb-2">
              {t('Naam', 'Name')} *
            </label>
            <Input
              required
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              placeholder={t('Volledige naam', 'Full name')}
              className="bg-korean-black/50 border-primary/30 text-korean-white placeholder:text-korean-white/40"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-korean-white mb-2">
              {t('Telefoon', 'Phone')} *
            </label>
            <Input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              placeholder={t('06 12345678', '06 12345678')}
              className="bg-korean-black/50 border-primary/30 text-korean-white placeholder:text-korean-white/40"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-korean-white mb-2">
            {t('E-mail', 'Email')} *
          </label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            placeholder={t('jouw@email.nl', 'your@email.com')}
            className="bg-korean-black/50 border-primary/30 text-korean-white placeholder:text-korean-white/40"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-korean-white mb-2">
              {t('Programma', 'Program')} *
            </label>
            <select
              required
              value={formData.program}
              onChange={(e) => updateFormData('program', e.target.value)}
              className="w-full px-3 py-2 bg-korean-black/50 border border-primary/30 rounded-lg text-korean-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">{t('Kies programma', 'Select program')}</option>
              {programs.map((program) => (
                <option key={program.value} value={program.value}>
                  {program.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-korean-white mb-2">
              {t('Locatie', 'Location')} *
            </label>
            <select
              required
              value={formData.location}
              onChange={(e) => updateFormData('location', e.target.value)}
              className="w-full px-3 py-2 bg-korean-black/50 border border-primary/30 rounded-lg text-korean-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">{t('Kies locatie', 'Select location')}</option>
              {locations.map((location) => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-korean-white mb-2">
            {t('Bericht (optioneel)', 'Message (optional)')}
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => updateFormData('message', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-korean-black/50 text-korean-white placeholder:text-korean-white/40 resize-none"
            placeholder={t('Eventuele vragen...', 'Any questions...')}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold"
        >
          {t('🥋 Claim Gratis Proefles', '🥋 Claim Free Trial')}
        </Button>

        <p className="text-xs text-korean-white/50 text-center">
          {t('✓ Gratis proefles  ✓ Geen verplichtingen  ✓ Direct antwoord', '✓ Free trial  ✓ No obligations  ✓ Quick response')}
        </p>
      </form>
    </div>
  );
}
