import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const ADMIN_PIN = '9999';

export default function AdminLogin() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean>('admin-auth', false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const navigate = useNavigate();

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsAuthenticated(true);
      setPinError(false);
      toast({
        title: t('Welkom Admin!', 'Welcome Admin!'),
        description: t('Je wordt doorgestuurd...', 'Redirecting...'),
      });
      navigate('/admin');
    } else {
      setPinError(true);
      toast({
        title: t('Onjuiste PIN', 'Incorrect PIN'),
        description: t('Probeer het opnieuw.', 'Please try again.'),
        variant: 'destructive',
      });
    }
    setPin('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-800">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 mb-4">
              <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              {t('Admin Dashboard', 'Admin Dashboard')}
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {t('Voer je PIN in om door te gaan', 'Enter your PIN to continue')}
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-6">
            <div>
              <label htmlFor="pin" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                {t('PIN Code', 'PIN Code')}
              </label>
              <Input
                id="pin"
                type="password"
                inputMode="numeric"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="••••"
                className={`text-center text-2xl tracking-widest ${
                  pinError ? 'border-red-500 focus:ring-red-500' : ''
                }`}
                maxLength={4}
                autoFocus
              />
              {pinError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {t('Onjuiste PIN code', 'Incorrect PIN code')}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t('Inloggen', 'Login')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            >
              {t('← Terug naar website', '← Back to website')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
