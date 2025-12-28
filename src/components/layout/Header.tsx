import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { href: '/', label: t('Home', 'Home') },
    { href: '/about', label: t('Over Ons', 'About') },
    { href: '/programs', label: t('Programmas', 'Programs') },
    { href: '/schedule', label: t('Rooster', 'Schedule') },
    { href: '/pricing', label: t('Prijzen', 'Pricing') },
    { href: '/news', label: t('Nieuws', 'News') },
    { href: '/instructors', label: t('Instructeurs', 'Instructors') },
    { href: '/gallery', label: t('Galerij', 'Gallery') },
    { href: '/faq', label: t('FAQ', 'FAQ') },
    { href: '/contact', label: t('Contact', 'Contact') },
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
        isScrolled || !isHomePage
          ? 'bg-background/95 backdrop-blur-md shadow-elegant py-2'
          : 'bg-gradient-to-b from-secondary/80 to-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group">
          <img 
            src="/logo.png" 
            alt="Taekwondo Logo" 
            className="h-14 sm:h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Menu Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 transition-colors",
              isHomePage && !isScrolled
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-primary"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleLanguage}
            className={cn(
              "p-2 transition-colors",
              isHomePage && !isScrolled
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-primary"
            )}
            aria-label="Toggle language"
          >
            <Globe size={20} />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 transition-colors",
              isHomePage && !isScrolled
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-primary"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-[60]',
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Side Menu - Apple Style */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-96 bg-background transition-transform duration-400 ease-out z-[70]',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-end px-8 py-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-8 pt-4 pb-8">
            <div className="flex flex-col gap-0">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "py-4 text-2xl font-light tracking-tight transition-opacity duration-200 border-b border-border/50",
                    location.pathname === link.href
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-100",
                    index === 0 && "border-t"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Menu Footer */}
          <div className="px-8 py-8 space-y-6">
            <Button
              asChild
              className="w-full bg-foreground hover:bg-foreground/90 text-background py-6 text-base font-normal rounded-full"
            >
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                {t('Inschrijven', 'Register')}
              </Link>
            </Button>
            <div className="flex items-center justify-center gap-6 text-sm opacity-60">
              <button
                onClick={toggleLanguage}
                className="hover:opacity-100 transition-opacity font-light"
                aria-label="Toggle language"
              >
                {language.toUpperCase()}
              </button>
              <span>·</span>
              <button
                onClick={toggleTheme}
                className="hover:opacity-100 transition-opacity"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
