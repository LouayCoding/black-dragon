import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface NewsletterSubscription {
  id: string;
  email: string;
  createdAt: string;
}

export function Footer() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptions, setSubscriptions] = useLocalStorage<NewsletterSubscription[]>('newsletter-subscriptions', []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: t('Ongeldig e-mailadres', 'Invalid email address'),
        description: t('Voer een geldig e-mailadres in.', 'Please enter a valid email address.'),
        variant: 'destructive',
      });
      return;
    }

    // Check if already subscribed
    if (subscriptions.some(sub => sub.email.toLowerCase() === email.toLowerCase())) {
      toast({
        title: t('Al aangemeld', 'Already subscribed'),
        description: t('Dit e-mailadres is al aangemeld voor onze nieuwsbrief.', 'This email is already subscribed to our newsletter.'),
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const newSubscription: NewsletterSubscription = {
      id: Date.now().toString(),
      email: email.trim(),
      createdAt: new Date().toISOString(),
    };

    setSubscriptions([...subscriptions, newSubscription]);
    setEmail('');
    setIsSubmitting(false);

    toast({
      title: t('Succesvol aangemeld!', 'Successfully subscribed!'),
      description: t('Bedankt voor je aanmelding voor onze nieuwsbrief.', 'Thank you for subscribing to our newsletter.'),
    });
  };

  const quickLinks = [
    { label: t('Over Ons', 'About Us'), href: '/about' },
    { label: t('Programmas', 'Programs'), href: '/programs' },
    { label: t('Rooster', 'Schedule'), href: '/schedule' },
    { label: t('Prijzen', 'Pricing'), href: '/pricing' },
    { label: t('Instructeurs', 'Instructors'), href: '/instructors' },
    { label: t('Galerij', 'Gallery'), href: '/gallery' },
    { label: t('FAQ', 'FAQ'), href: '/faq' },
    { label: t('Contact', 'Contact'), href: '/contact' },
    { label: t('Gedragscode', 'Code of Conduct'), href: '/code-of-conduct' },
    { label: t('Huis- en Gedragsregels', 'House Rules'), href: '/house-rules' },
  ];

  const programs = [
    { label: t('Kinderlessen', 'Children Classes'), href: '/programs' },
    { label: t('Tiener Programma', 'Teen Programs'), href: '/programs' },
    { label: t('Volwassenen Training', 'Adult Training'), href: '/programs' },
    { label: t('Gezinslessen', 'Family Classes'), href: '/programs' },
    { label: t('Wedstrijdteam', 'Competition Team'), href: '/programs' },
    { label: t('Privélessen', 'Private Lessons'), href: '/contact' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section - Simplified */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Heading */}
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
              {t('Blijf op de hoogte', 'Stay Updated')}
            </h3>
            
            {/* Description */}
            <p className="text-muted-foreground mb-6">
              {t(
                'Ontvang het laatste nieuws en exclusieve aanbiedingen.',
                'Get the latest news and exclusive offers.'
              )}
            </p>
            
            {/* Form */}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t('Je e-mailadres', 'Your email address')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                variant="outline"
                size="lg"
                className="gap-2 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Send size={16} />
                {isSubmitting ? t('Aanmelden...', 'Subscribing...') : t('Aanmelden', 'Subscribe')}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-primary-foreground font-serif text-xl font-bold">龍</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">태권도 블랙 드래곤</h3>
                <p className="text-xs text-white/60 tracking-widest">BLACK DRAGON</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t(
                'Taekwondo Vereniging Black Dragon is een Goudse sportclub voor zelfverdediging en Olympische vechtsport. Aangesloten bij TBN, IMAF-Nederland en World Taekwondo.',
                'Taekwondo Association Black Dragon is a Gouda sports club for self-defense and Olympic martial arts. Affiliated with TBN, IMAF-Netherlands and World Taekwondo.'
              )}
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t('Snelle Links', 'Quick Links')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t('Onze Programmas', 'Our Programs')}</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <Link
                    to={program.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{t('Contact', 'Contact Us')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  De Draaistraat<br />
                  2516 EK Den Haag
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+31612345678" className="text-white/70 hover:text-primary transition-colors text-sm">
                  06 12345678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@taekwondoblackdragon.nl" className="text-white/70 hover:text-primary transition-colors text-sm">
                  info@taekwondoblackdragon.nl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Taekwondo Dojang. {t('Alle rechten voorbehouden.', 'All rights reserved.')}
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
            <Link to="/code-of-conduct" className="text-white/50 hover:text-primary text-sm transition-colors">
              {t('Gedragscode', 'Code of Conduct')}
            </Link>
            <Link to="/anti-bullying-protocol" className="text-white/50 hover:text-primary text-sm transition-colors">
              {t('Pestprotocol', 'Anti-Bullying Protocol')}
            </Link>
            <Link to="/sexual-harassment-protocol" className="text-white/50 hover:text-primary text-sm transition-colors">
              {t('Protocol Seksuele Intimidatie', 'Sexual Harassment Protocol')}
            </Link>
            <Link to="/faq" className="text-white/50 hover:text-primary text-sm transition-colors">
              {t('Privacybeleid', 'Privacy Policy')}
            </Link>
            <Link to="/faq" className="text-white/50 hover:text-primary text-sm transition-colors">
              {t('Algemene Voorwaarden', 'Terms of Service')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
