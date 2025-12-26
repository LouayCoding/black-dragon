// Apple-inspired Dashboard Theme - Minimal colors, maximum clarity
export const dashboardTheme = {
  colors: {
    // Apple uses minimal colors - mostly grays with accent colors only when needed
    success: {
      bg: 'bg-white dark:bg-zinc-900',
      border: 'border-zinc-200 dark:border-zinc-800',
      text: 'text-zinc-900 dark:text-zinc-100',
      icon: 'text-emerald-600 dark:text-emerald-500',
      accent: 'text-emerald-600',
    },
    warning: {
      bg: 'bg-white dark:bg-zinc-900',
      border: 'border-zinc-200 dark:border-zinc-800',
      text: 'text-zinc-900 dark:text-zinc-100',
      icon: 'text-blue-600 dark:text-blue-500',
      accent: 'text-blue-600',
    },
    error: {
      bg: 'bg-white dark:bg-zinc-900',
      border: 'border-red-200 dark:border-red-900',
      text: 'text-zinc-900 dark:text-zinc-100',
      icon: 'text-red-600 dark:text-red-500',
      accent: 'text-red-600',
    },
    info: {
      bg: 'bg-white dark:bg-zinc-900',
      border: 'border-zinc-200 dark:border-zinc-800',
      text: 'text-zinc-900 dark:text-zinc-100',
      icon: 'text-blue-600 dark:text-blue-500',
      accent: 'text-blue-600',
    },
    neutral: {
      bg: 'bg-white dark:bg-zinc-900',
      border: 'border-zinc-200 dark:border-zinc-800',
      text: 'text-zinc-600 dark:text-zinc-400',
      icon: 'text-zinc-500 dark:text-zinc-500',
      accent: 'text-zinc-900',
    },
  },
  spacing: {
    section: 'space-y-6',
    card: 'p-6',
    compact: 'p-4',
    tight: 'p-3',
  },
  radius: {
    card: 'rounded-xl',
    button: 'rounded-lg',
    badge: 'rounded-full',
  },
  shadow: {
    card: 'shadow-sm hover:shadow-md',
    elevated: 'shadow-lg',
  },
  typography: {
    h1: 'text-3xl font-semibold tracking-tight',
    h2: 'text-2xl font-semibold tracking-tight',
    h3: 'text-xl font-semibold',
    body: 'text-sm text-muted-foreground',
    label: 'text-xs font-medium uppercase tracking-wide text-muted-foreground',
  },
};
