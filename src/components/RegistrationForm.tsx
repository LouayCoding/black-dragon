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
        Je moet akkoord gaan met de voorwaarden,
        {
          description: Lees en accepteer de EVO overeenkomst om door te gaan.
        }
      );
      return;
    }

    console.log('Form submitted:', formData);
    
    toast.success(
      Inschrijving succesvol!,
      {
        description: We nemen binnen 24 uur contact met je op.
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
    { value: 'little-tigers', label: Kleine Tijgers (4-6 jaar) },
    { value: 'youth', label: Jeugd (7-17 jaar) },
    { value: 'adult', label: Volwassenen (18+) },
  ];

  const locations = [
    { value: 'draaistraat-16', label: Draaistraat 16 - De Ontmoetingsschool },
    { value: 'withuysstraat-2', label: Withuysstraat 2 - Gert van Wijkschool },
  ];

  const agreementText = language === 'nl' ? evoAgreementNL : evoAgreementEN;

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-16">
        {/* Personal Information */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            {Persoonlijke Gegevens}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {Voornaam}
              </label>
              <Input
                required
                value={formData.firstName}
                onChange={(e) => updateFormData('firstName', e.target.value)}
                placeholder={Voornaam}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {Achternaam}
              </label>
              <Input
                required
                value={formData.lastName}
                onChange={(e) => updateFormData('lastName', e.target.value)}
                placeholder={Achternaam}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {Straat}
              </label>
              <Input
                required
                value={formData.street}
                onChange={(e) => updateFormData('street', e.target.value)}
                placeholder={Straatnaam}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {Huisnummer}
              </label>
              <Input
                required
                value={formData.houseNumber}
                onChange={(e) => updateFormData('houseNumber', e.target.value)}
                placeholder={Nr.}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {Postcode}
              </label>
              <Input
                required
                value={formData.postalCode}
                onChange={(e) => updateFormData('postalCode', e.target.value)}
                placeholder={1234 AB}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {Woonplaats}
              </label>
              <Input
                required
                value={formData.city}
                onChange={(e) => updateFormData('city', e.target.value)}
                placeholder={Woonplaats}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              {Geboortedatum}
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
            {Contactgegevens}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {Telefoonnummer}
              </label>
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder={06 12345678}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {E-mailadres}
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder={jouw@email.nl}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            {Noodcontact}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {Naam noodcontact}
              </label>
              <Input
                required
                value={formData.emergencyContact}
                onChange={(e) => updateFormData('emergencyContact', e.target.value)}
                placeholder={Volledige naam}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {Telefoonnummer noodcontact}
              </label>
              <Input
                type="tel"
                required
                value={formData.emergencyPhone}
                onChange={(e) => updateFormData('emergencyPhone', e.target.value)}
                placeholder={06 12345678}
                className="h-12 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Program Selection */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold">
            {Programma & Locatie}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {Programma}
              </label>
              <select
                required
                value={formData.program}
                onChange={(e) => updateFormData('program', e.target.value)}
                className="w-full h-12 px-4 bg-muted/50 border-0 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">{Kies programma}</option>
                {programs.map((program) => (
                  <option key={program.value} value={program.value}>
                    {program.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                {Locatie}
              </label>
              <select
                required
                value={formData.location}
                onChange={(e) => updateFormData('location', e.target.value)}
                className="w-full h-12 px-4 bg-muted/50 border-0 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">{Kies locatie}</option>
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
                  {Ik ga akkoord met de }
                  <Dialog open={showAgreement} onOpenChange={setShowAgreement}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="text-primary hover:underline font-medium"
                      >
                        {EVO Lidmaatschapsovereenkomst}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-serif">
                          {EVO Lidmaatschapsovereenkomst}
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
                          {Sluiten}
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            updateFormData('agreedToTerms', true);
                            setShowAgreement(false);
                          }}
                          className="bg-primary hover:bg-primary/90"
                        >
                          {Akkoord & Sluiten}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </label>
                {!formData.agreedToTerms && (
                  <p className="text-xs text-muted-foreground">
                    {Lees en accepteer de overeenkomst om door te gaan}
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
          {Inschrijving Voltooien}
        </Button>
      </form>
    </div>
  );
}
