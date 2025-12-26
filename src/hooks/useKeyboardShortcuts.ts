import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ShortcutConfig {
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  action: () => void;
  description: string;
}

export function useKeyboardShortcuts(shortcuts: ShortcutConfig[]) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const shortcut = shortcuts.find(s => 
        s.key.toLowerCase() === e.key.toLowerCase() &&
        (s.ctrlKey === undefined || s.ctrlKey === e.ctrlKey) &&
        (s.shiftKey === undefined || s.shiftKey === e.shiftKey)
      );

      if (shortcut) {
        e.preventDefault();
        shortcut.action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
}

export function useAdminShortcuts() {
  const navigate = useNavigate();

  const shortcuts: ShortcutConfig[] = [
    {
      key: 'h',
      ctrlKey: true,
      action: () => navigate('/admin/home'),
      description: 'Ga naar Dashboard',
    },
    {
      key: 'l',
      ctrlKey: true,
      action: () => navigate('/admin/students'),
      description: 'Ga naar Leerlingen',
    },
    {
      key: 'r',
      ctrlKey: true,
      action: () => navigate('/admin/schedule'),
      description: 'Ga naar Rooster',
    },
    {
      key: 'p',
      ctrlKey: true,
      action: () => navigate('/admin/pricing'),
      description: 'Ga naar Prijzen',
    },
  ];

  useKeyboardShortcuts(shortcuts);

  return shortcuts;
}
