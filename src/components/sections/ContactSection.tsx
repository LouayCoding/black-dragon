import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

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
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newReg: Registration = { id: Date.now().toString(), ...formData, createdAt: new Date().toISOString() };
    setRegistrations([...registrations, newReg]);
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
    setIsSubmitting(false);
    toast.success(t('Inschrijving verzonden! We nemen snel contact op.', 'Registration submitted! We will contact you soon.'));
  };

  const contactInfo = [
    { icon: MapPin, label: t('Locatie', 'Location'), value: 'Marktstraat 123, Amsterdam' },
    { icon: Phone, label: t('Telefoon', 'Phone'), value: '(020) 123-4567' },
    { icon: Mail, label: 'Email', value: 'info@taekwondo.nl' },
    { icon: Clock, label: t('Openingstijden', 'Hours'), value: t('Ma-Za: 16:00-21:00', 'Mon-Sat: 4-9PM') },
  ];

  return (
    <section id="contact" className="py-32 bg-muted/30 relative">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12")}>
            <span className="inline-block text-primary font-medium tracking-[0.2em] text-sm mb-6">{t('CONTACT', 'CONTACT')}</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('Begin Je ', 'Begin Your ')}<span className="text-primary">{t('Reis', 'Journey')}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              {t('Klaar om te beginnen? Vul het formulier in voor je gratis proefles.', 'Ready to start? Fill out the form for your free trial class.')}
            </p>
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div id="register" className={cn("bg-card rounded-3xl p-8 lg:p-10 shadow-elegant transition-all duration-700 delay-200", isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12")}>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">{t('Gratis Proefles', 'Free Trial Class')}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input placeholder={t('Naam *', 'Name *')} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="h-14 rounded-xl bg-background" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="email" placeholder="Email *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="h-14 rounded-xl bg-background" />
                <Input type="tel" placeholder={t('Telefoon', 'Phone')} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="h-14 rounded-xl bg-background" />
              </div>
              <select value={formData.program} onChange={(e) => setFormData({...formData, program: e.target.value})} required className="w-full h-14 px-4 rounded-xl border border-input bg-background text-foreground">
                <option value="">{t('Kies Programma *', 'Select Program *')}</option>
                <option value="little-tigers">{t('Kleine Tijgers (4-6)', 'Little Tigers (4-6)')}</option>
                <option value="youth">{t('Jeugd (7-12)', 'Youth (7-12)')}</option>
                <option value="teen">{t('Tieners (13-17)', 'Teens (13-17)')}</option>
                <option value="adult">{t('Volwassenen (18+)', 'Adults (18+)')}</option>
              </select>
              <Textarea placeholder={t('Bericht...', 'Message...')} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} className="rounded-xl bg-background" />
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full btn-glow bg-primary text-primary-foreground py-7 rounded-xl text-lg group">
                {isSubmitting ? '...' : t('Verstuur Aanvraag', 'Submit Request')}
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}