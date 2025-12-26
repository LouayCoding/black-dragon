import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { LayoutDashboard, Users, Calendar, DollarSign, BookOpen, Newspaper, ClipboardCheck, LogOut, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ModernSidebarProps {
  onLogout: () => void;
}

export function ModernSidebar({ onLogout }: ModernSidebarProps) {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigation = [
    { name: t('Dashboard', 'Dashboard'), href: '/admin', icon: LayoutDashboard },
    { name: t('Leerlingen', 'Students'), href: '/admin/students', icon: Users },
    { name: t('Aanwezigheid', 'Attendance'), href: '/admin/attendance', icon: ClipboardCheck },
    { name: t('Rooster', 'Schedule'), href: '/admin/schedule', icon: Calendar },
    { name: t('Prijzen', 'Pricing'), href: '/admin/pricing', icon: DollarSign },
    { name: t('Programmas', 'Programs'), href: '/admin/programs', icon: BookOpen },
    { name: t('Nieuws', 'News'), href: '/admin/news', icon: Newspaper },
  ];

  const NavContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo/Header */}
      <div className="px-6 py-6">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Black Dragon
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
          {t('Taekwondo Admin', 'Taekwondo Admin')}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4 py-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all',
                isActive
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-md'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100'
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4">
        <Button
          variant="ghost"
          onClick={onLogout}
          className="w-full justify-start gap-3 px-4 py-3 text-zinc-600 hover:bg-red-50 hover:text-red-600 dark:text-zinc-400 dark:hover:bg-red-950/20 dark:hover:text-red-400 rounded-xl transition-all"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-medium">{t('Uitloggen', 'Logout')}</span>
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen w-64 bg-white dark:bg-zinc-900 transition-transform lg:translate-x-0 shadow-sm',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <NavContent />
      </aside>
    </>
  );
}
