import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: '#home', label: t('Home', 'Home') },
    { href: '#about', label: t('Over Ons', 'About') },
    { href: '#programs', label: t('Programmas', 'Programs') },
    { href: '#schedule', label: t('Rooster', 'Schedule') },
    { href: '#instructors', label: t('Instructeurs', 'Instructors') },
    { href: '#gallery', label: t('Galerij', 'Gallery') },
    { href: '#faq', label: t('FAQ', 'FAQ') },
    { href: '#contact', label: t('Contact', 'Contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-elegant py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-primary-foreground font-serif text-xl font-bold">道</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif text-lg font-bold text-foreground leading-tight">
              태권도
            </h1>
            <p className="text-xs text-muted-foreground tracking-widest">TAEKWONDO</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span className="uppercase">{language}</span>
          </button>

          <Button
            asChild
            className="btn-korean bg-primary hover:bg-accent text-primary-foreground px-6"
          >
            <a href="#register">{t('Inschrijven', 'Register')}</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={20} />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="mt-4 btn-korean bg-primary hover:bg-accent text-primary-foreground"
          >
            <a href="#register" onClick={() => setIsMobileMenuOpen(false)}>
              {t('Nu Inschrijven', 'Register Now')}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
