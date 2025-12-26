import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Home, Calendar, FileText, AlertCircle, User, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface DashboardSidebarProps {
  onLogout: () => void;
}

export function DashboardSidebar({ onLogout }: DashboardSidebarProps) {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigation = [
    { name: t('Dashboard', 'Dashboard'), href: '/student', icon: Home },
    { name: t('Mijn Rooster', 'My Schedule'), href: '/student/schedule', icon: Calendar },
    { name: t('Ziekmelden', 'Report Absence'), href: '/student/absence', icon: AlertCircle },
    { name: t('Mijn Voortgang', 'My Progress'), href: '/student/progress', icon: FileText },
    { name: t('Profiel', 'Profile'), href: '/student/profile', icon: User },
  ];

  const NavContent = () => (
    <>
      {/* Logo/Header */}
      <div className="p-4 lg:p-6 border-b border-border">
        <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground">
          {t('Leerling', 'Student')} <span className="text-primary">{t('Portal', 'Portal')}</span>
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 lg:p-4 space-y-1 lg:space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                'flex items-center gap-3 px-3 lg:px-4 py-3 lg:py-3 rounded-lg transition-colors min-h-[48px]',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground active:bg-muted'
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm lg:text-base">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-3 lg:p-4 border-t border-border">
        <Button
          variant="outline"
          className="w-full justify-start gap-3 min-h-[48px]"
          onClick={onLogout}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm lg:text-base">{t('Uitloggen', 'Logout')}</span>
        </Button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden shadow-lg min-h-[48px] min-w-[48px]"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="fixed inset-y-0 left-0 w-[280px] bg-card border-r border-border flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <NavContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-card border-r border-border">
        <NavContent />
      </div>
    </>
  );
}
