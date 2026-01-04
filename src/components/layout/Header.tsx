import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon, ChevronDown } from 'lucide-react';
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHomePage
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="group relative z-10">
            <img 
              src="/logo.png" 
              alt="Taekwondo Black Dragon Logo" 
              className="h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group",
                  location.pathname === link.href
                    ? isHomePage && !isScrolled
                      ? "text-white"
                      : "text-primary"
                    : isHomePage && !isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA Button */}
            <Button
              asChild
              variant="default"
              size="sm"
              className="hidden lg:flex bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/contact">
                {t('Inschrijven', 'Register')}
              </Link>
            </Button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2.5 rounded-lg transition-all duration-200 hover:bg-foreground/10",
                isHomePage && !isScrolled
                  ? "text-white"
                  : "text-foreground"
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={cn(
                "p-2.5 rounded-lg transition-all duration-200 hover:bg-foreground/10",
                isHomePage && !isScrolled
                  ? "text-white"
                  : "text-foreground"
              )}
              aria-label="Toggle language"
            >
              <Globe size={20} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "xl:hidden p-2.5 rounded-lg transition-all duration-200 hover:bg-foreground/10",
                isHomePage && !isScrolled
                  ? "text-white"
                  : "text-foreground"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 xl:hidden',
          isMobileMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background shadow-2xl transition-transform duration-300 ease-out xl:hidden z-50',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-serif text-lg font-bold">龍</span>
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold">Black Dragon</h3>
                <p className="text-xs text-muted-foreground">Taekwondo</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-foreground/10 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-200",
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-foreground/5"
                  )}
                >
                  <span>{link.label}</span>
                  {location.pathname === link.href && (
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="border-t border-border/50 p-6 space-y-4">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-medium"
            >
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                {t('Inschrijven', 'Register')}
              </Link>
            </Button>
            
            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-foreground/5 transition-colors"
                aria-label="Toggle language"
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              <div className="w-px h-6 bg-border" />
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-foreground/5 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span className="text-sm font-medium capitalize">{theme}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
