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
    { href: '/instructors', label: t('Instructeurs', 'Instructors') },
    { href: '/testimonials', label: t('Getuigenissen', 'Testimonials') },
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
          ? 'bg-background/95 backdrop-blur-md shadow-elegant py-3'
          : 'bg-gradient-to-b from-secondary/80 to-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-primary-foreground font-serif text-xl font-bold">道</span>
          </div>
          <div className="hidden sm:block">
            <h1 className={cn(
              "font-serif text-lg font-bold leading-tight transition-colors",
              isHomePage && !isScrolled ? "text-white" : "text-foreground"
            )}>
              태권도
            </h1>
            <p className={cn(
              "text-xs tracking-widest transition-colors",
              isHomePage && !isScrolled ? "text-white/70" : "text-muted-foreground"
            )}>TAEKWONDO</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors duration-300 relative group",
                location.pathname === link.href
                  ? "text-primary"
                  : isHomePage && !isScrolled
                    ? "text-white/90 hover:text-white"
                    : "text-foreground/80 hover:text-primary"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300",
                location.pathname === link.href ? "w-3/4" : "w-0 group-hover:w-3/4"
              )} />
            </Link>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isHomePage && !isScrolled
                ? "text-white/70 hover:text-white hover:bg-white/10"
                : "text-foreground/70 hover:text-primary hover:bg-muted"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors",
              isHomePage && !isScrolled
                ? "text-white/70 hover:text-white"
                : "text-foreground/70 hover:text-primary"
            )}
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span className="uppercase">{language}</span>
          </button>

          <Button
            asChild
            className="btn-korean bg-primary hover:bg-accent text-primary-foreground px-6"
          >
            <Link to="/contact">{t('Inschrijven', 'Register')}</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
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

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "py-3 px-4 rounded-md transition-all duration-300",
                location.pathname === link.href
                  ? "text-primary bg-muted"
                  : "text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-4 btn-korean bg-primary hover:bg-accent text-primary-foreground"
          >
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              {t('Nu Inschrijven', 'Register Now')}
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
