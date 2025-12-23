import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
  createdAt: string;
}

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();
  const [registrations, setRegistrations] = useLocalStorage<Registration[]>('tkd-registrations', []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newRegistration: Registration = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    setRegistrations([...registrations, newRegistration]);
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
    setIsSubmitting(false);
    toast.success(t('Inschrijving verzonden! We nemen snel contact met je op.', 'Registration submitted! We will contact you soon.'));
  };

  const contactInfo = [
    { icon: MapPin, label: t('Locatie', 'Location'), value: 'Marktstraat 123, 1234 AB Amsterdam' },
    { icon: Phone, label: t('Telefoon', 'Phone'), value: '(020) 123-4567' },
    { icon: Mail, label: 'Email', value: 'info@taekwondo.nl' },
    { icon: Clock, label: t('Openingstijden', 'Hours'), value: t('Ma-Za: 16:00 - 21:00', 'Mon-Sat: 4PM - 9PM') },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/50 relative">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <p className="text-primary font-medium tracking-widest text-sm mb-4">{t('CONTACT', 'CONTACT')}</p>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              {t('Begin Je ', 'Begin Your ')}<span className="text-primary">{t('Reis', 'Journey')}</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                'Klaar om te beginnen met trainen? Vul het formulier in en wij nemen contact met je op om je gratis proefles in te plannen.',
                'Ready to start training? Fill out the form and we will contact you to schedule your free trial class.'
              )}
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div id="register" className={cn(
            "bg-card rounded-lg border border-border p-8 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">{t('Nu Inschrijven', 'Register Now')}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                placeholder={t('Volledige Naam *', 'Full Name *')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
                <Input
                  type="tel"
                  placeholder={t('Telefoon', 'Phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                />
              </div>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm"
                required
              >
                <option value="">{t('Kies Programma *', 'Select Program *')}</option>
                <option value="little-tigers">{t('Kleine Tijgers (4-6)', 'Little Tigers (4-6)')}</option>
                <option value="youth">{t('Jeugd Programma (7-12)', 'Youth Program (7-12)')}</option>
                <option value="teen">{t('Tiener Krijgers (13-17)', 'Teen Warriors (13-17)')}</option>
                <option value="adult">{t('Volwassenen Training (18+)', 'Adult Training (18+)')}</option>
                <option value="family">{t('Gezinslessen', 'Family Classes')}</option>
              </select>
              <Textarea
                placeholder={t('Vragen of opmerkingen...', 'Questions or comments...')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="bg-background"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-korean bg-primary hover:bg-accent text-primary-foreground"
              >
                {isSubmitting ? t('Verzenden...', 'Submitting...') : t('Gratis Proefles Aanvragen', 'Request Free Trial')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
