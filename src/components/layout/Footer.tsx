'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';
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
        title: 'Ongeldig e-mailadres',
        description: 'Voer een geldig e-mailadres in.',
        variant: 'destructive',
      });
      return;
    }

    // Check if already subscribed
    if (subscriptions.some(sub => sub.email.toLowerCase() === email.toLowerCase())) {
      toast({
        title: 'Al aangemeld',
        description: 'Dit e-mailadres is al aangemeld voor onze nieuwsbrief.',
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
      title: 'Succesvol aangemeld!',
      description: 'Bedankt voor je aanmelding voor onze nieuwsbrief.',
    });
  };

  const quickLinks = [
    { label: 'Over Ons', href: '/about' },
    { label: 'Programmas', href: '/programs' },
    { label: 'Rooster', href: '/schedule' },
    { label: 'Prijzen', href: '/pricing' },
    { label: 'Instructeurs', href: '/instructors' },
    { label: 'Galerij', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Gedragscode', href: '/code-of-conduct' },
    { label: 'Huis- en Gedragsregels', href: '/house-rules' },
  ];

  const programs = [
    { label: 'Kinderlessen', href: '/programs' },
    { label: 'Tiener Programma', href: '/programs' },
    { label: 'Volwassenen Training', href: '/programs' },
    { label: 'Gezinslessen', href: '/programs' },
    { label: 'Wedstrijdteam', href: '/programs' },
    { label: 'Privélessen', href: '/contact' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-primary-foreground font-serif text-xl font-bold">龍</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">태권도 블랙 드래곤</h3>
                <p className="text-xs text-white/60 tracking-widest">BLACK DRAGON</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {Taekwondo Vereniging Black Dragon is een Goudse sportclub voor zelfverdediging en Olympische vechtsport. Aangesloten bij TBN, IMAF-Nederland en World Taekwondo.}
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
            <h4 className="font-serif text-lg font-semibold mb-6">{'Snelle Links'}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
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
            <h4 className="font-serif text-lg font-semibold mb-6">{'Onze Programmas'}</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <Link
                    href={program.href}
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
            <h4 className="font-serif text-lg font-semibold mb-6">{'Contact'}</h4>
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
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Taekwondo Dojang. {'Alle rechten voorbehouden.'}
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
          <Link href="/code-of-conduct" className="text-white/50 hover:text-primary text-sm transition-colors">
            {'Gedragscode'}
          </Link>
          <Link href="/anti-bullying-protocol" className="text-white/50 hover:text-primary text-sm transition-colors">
            {'Pestprotocol'}
          </Link>
          <Link href="/sexual-harassment-protocol" className="text-white/50 hover:text-primary text-sm transition-colors">
            {'Protocol Seksuele Intimidatie'}
          </Link>
          <Link href="/faq" className="text-white/50 hover:text-primary text-sm transition-colors">
            {'Privacybeleid'}
          </Link>
          <Link href="/faq" className="text-white/50 hover:text-primary text-sm transition-colors">
            {'Algemene Voorwaarden'}
          </Link>
        </div>
      </div>
    </footer>
  );
}
