import { useState } from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

interface ModernHeaderProps {
  userName?: string;
  notificationCount?: number;
  onSearch?: (query: string) => void;
  onNotificationClick?: () => void;
  className?: string;
}

export function ModernHeader({
  userName = 'Admin',
  notificationCount = 0,
  onSearch,
  onNotificationClick,
  className,
}: ModernHeaderProps) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 lg:left-64 z-30',
        'bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl',
        className
      )}
    >
      <div className="flex items-center justify-between gap-4 px-8 py-4">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              type="search"
              placeholder={t('Zoeken...', 'Search...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-zinc-50 dark:bg-zinc-800/50 border-0 rounded-full"
            />
          </div>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative h-10 w-10 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all flex items-center justify-center group"
            >
              <Bell className="h-5 w-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
              {notificationCount > 0 && (
                <span className="absolute -right-1 -top-1 h-5 w-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-semibold shadow-sm">
                  {notificationCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-transparent"
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 top-full mt-3 w-96 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl z-50 overflow-hidden">
                  {/* Header */}
                  <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                        {t('Recente Ziekmeldingen', 'Recent Absences')}
                      </h3>
                      {notificationCount > 0 && (
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                          {notificationCount} {t('nieuw', 'new')}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="max-h-[400px] overflow-y-auto">
                    {notificationCount === 0 ? (
                      <div className="p-12 text-center">
                        <div className="rounded-full bg-emerald-50 dark:bg-emerald-950/30 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                          <Bell className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {t('Alles op orde!', 'All clear!')}
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                          {t('Geen nieuwe ziekmeldingen', 'No new absences')}
                        </p>
                      </div>
                    ) : (
                      <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                        {Array.from({ length: notificationCount }).map((_, i) => (
                          <div
                            key={i}
                            className="p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-all group"
                          >
                            <div className="flex gap-3">
                              <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 p-2.5 h-fit">
                                <Bell className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {t('Nieuwe ziekmelding', 'New absence report')}
                                </p>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                                  Jan de Vries • {t('Vandaag', 'Today')}
                                </p>
                                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                                  {i === 0 ? t('2 minuten geleden', '2 minutes ago') : `${5 + i * 10} ${t('minuten geleden', 'minutes ago')}`}
                                </p>
                              </div>
                              <div className="text-xs text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                →
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  {notificationCount > 0 && (
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-100 dark:border-zinc-800">
                      <button className="w-full text-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        {t('Bekijk alle ziekmeldingen', 'View all absences')} →
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">{userName}</p>
              <p className="text-xs text-zinc-500">{t('Beheerder', 'Administrator')}</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
              {userName.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
