import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { evoAgreementNL, evoAgreementEN } from '@/data/evoAgreement';
import { toast } from 'sonner';

interface FormData {
  firstName: string;
  lastName: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  birthDate: string;
  phone: string;
  email: string;
  program: string;
  location: string;
  emergencyContact: string;
  emergencyPhone: string;
  agreedToTerms: boolean;
}

export function RegistrationForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    birthDate: '',
    phone: '',
    email: '',
    program: '',
    location: '',
    emergencyContact: '',
    emergencyPhone: '',
    agreedToTerms: false,
  });

  const [showAgreement, setShowAgreement] = useState(false);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms) {
      toast.error(
        t('Je moet akkoord gaan met de voorwaarden', 'You must agree to the terms'),
        {
          description: t('Lees en accepteer de EVO overeenkomst om door te gaan.', 'Read and accept the EVO agreement to continue.')
        }
      );
      return;
    }

    console.log('Form submitted:', formData);
    
    toast.success(
      t('Inschrijving succesvol!', 'Registration successful!'),
      {
        description: t('We nemen binnen 24 uur contact met je op.', 'We will contact you within 24 hours.')
      }
    );

    setFormData({
      firstName: '',
      lastName: '',
      street: '',
      houseNumber: '',
      postalCode: '',
      city: '',
      birthDate: '',
      phone: '',
      email: '',
      program: '',
      location: '',
      emergencyContact: '',
      emergencyPhone: '',
      agreedToTerms: false,
    });
  };

  const programs = [
    { value: 'little-tigers', label: t('Kleine Tijgers (4-6 jaar)', 'Little Tigers (4-6)') },
    { value: 'youth', label: t('Jeugd (7-17 jaar)', 'Youth (7-17)') },
    { value: 'adult', label: t('Volwassenen (18+)', 'Adults (18+)') },
  ];

  const locations = [
    { value: 'draaistraat-16', label: t('Draaistraat 16 - De Ontmoetingsschool', 'Draaistraat 16 - De Ontmoetingsschool') },
    { value: 'withuysstraat-2', label: t('Withuysstraat 2 - Gert van Wijkschool', 'Withuysstraat 2 - Gert van Wijkschool') },
  ];

  const agreementText = language === 'nl' ? evoAgreementNL : evoAgreementEN;

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-16">
        {/* Personal Information */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            {t('Persoonlijke Gegevens', 'Personal Information')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('Voornaam', 'First Name')}
              </label>
              <Input
                required
                value={formData.firstName}
                onChange={(e) => updateFormData('firstName', e.target.value)}
                placeholder={t('Voornaam', 'First name')}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('Achternaam', 'Last Name')}
              </label>
              <Input
                required
                value={formData.lastName}
                onChange={(e) => updateFormData('lastName', e.target.value)}
                placeholder={t('Achternaam', 'Last name')}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('Straat', 'Street')}
              </label>
              <Input
                required
                value={formData.street}
                onChange={(e) => updateFormData('street', e.target.value)}
                placeholder={t('Straatnaam', 'Street name')}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('Huisnummer', 'House Number')}
              </label>
              <Input
                required
                value={formData.houseNumber}
                onChange={(e) => updateFormData('houseNumber', e.target.value)}
                placeholder={t('Nr.', 'No.')}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('Postcode', 'Postal Code')}
              </label>
              <Input
                required
                value={formData.postalCode}
                onChange={(e) => updateFormData('postalCode', e.target.value)}
                placeholder={t('1234 AB', '1234 AB')}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('Woonplaats', 'City')}
              </label>
              <Input
                required
                value={formData.city}
                onChange={(e) => updateFormData('city', e.target.value)}
                placeholder={t('Woonplaats', 'City')}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              {t('Geboortedatum', 'Date of Birth')}
            </label>
            <Input
              type="date"
              required
              value={formData.birthDate}
              onChange={(e) => updateFormData('birthDate', e.target.value)}
              className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            {t('Contactgegevens', 'Contact Information')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('Telefoonnummer', 'Phone Number')}
              </label>
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder={t('06 12345678', '06 12345678')}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('E-mailadres', 'Email Address')}
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder={t('jouw@email.nl', 'your@email.com')}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            {t('Noodcontact', 'Emergency Contact')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('Naam noodcontact', 'Emergency Contact Name')}
              </label>
              <Input
                required
                value={formData.emergencyContact}
                onChange={(e) => updateFormData('emergencyContact', e.target.value)}
                placeholder={t('Volledige naam', 'Full name')}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('Telefoonnummer noodcontact', 'Emergency Phone')}
              </label>
              <Input
                type="tel"
                required
                value={formData.emergencyPhone}
                onChange={(e) => updateFormData('emergencyPhone', e.target.value)}
                placeholder={t('06 12345678', '06 12345678')}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Program Selection */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            {t('Programma & Locatie', 'Program & Location')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('Programma', 'Program')}
              </label>
              <select
                required
                value={formData.program}
                onChange={(e) => updateFormData('program', e.target.value)}
                className="w-full h-12 px-4 bg-muted/50 border-0 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">{t('Kies programma', 'Select program')}</option>
                {programs.map((program) => (
                  <option key={program.value} value={program.value}>
                    {program.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {t('Locatie', 'Location')}
              </label>
              <select
                required
                value={formData.location}
                onChange={(e) => updateFormData('location', e.target.value)}
                className="w-full h-12 px-4 bg-muted/50 border-0 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
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
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-6 pt-8">
          <div className="bg-muted/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Checkbox
                id="terms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) => updateFormData('agreedToTerms', checked as boolean)}
                className="mt-1"
              />
              <div className="flex-1 space-y-2">
                <label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer block">
                  {t(
                    'Ik ga akkoord met de ',
                    'I agree to the '
                  )}
                  <Dialog open={showAgreement} onOpenChange={setShowAgreement}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="text-primary hover:underline font-medium"
                      >
                        {t('EVO Lidmaatschapsovereenkomst', 'EVO Membership Agreement')}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-serif">
                          {t('EVO Lidmaatschapsovereenkomst', 'EVO Membership Agreement')}
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="h-[70vh] pr-4">
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                            {agreementText}
                          </pre>
                        </div>
                      </ScrollArea>
                      <div className="flex justify-end gap-3 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowAgreement(false)}
                        >
                          {t('Sluiten', 'Close')}
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            updateFormData('agreedToTerms', true);
                            setShowAgreement(false);
                          }}
                          className="bg-primary hover:bg-primary/90"
                        >
                          {t('Akkoord & Sluiten', 'Accept & Close')}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </label>
                {!formData.agreedToTerms && (
                  <p className="text-xs text-muted-foreground">
                    {t(
                      'Lees en accepteer de overeenkomst om door te gaan',
                      'Read and accept the agreement to continue'
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-14 rounded-xl"
        >
          {t('Inschrijving Voltooien', 'Complete Registration')}
        </Button>
      </form>
    </div>
  );
}
