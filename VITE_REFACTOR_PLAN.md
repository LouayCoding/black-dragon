# 🔥 VITE + REACT - PROFESSIONELE REFACTOR

## ⚠️ DIT IS VITE, NIET NEXT.JS!

Stack:
- ✅ Vite
- ✅ React 18
- ✅ TypeScript
- ✅ React Router DOM
- ✅ Tailwind CSS
- ✅ Shadcn UI

---

## 🧹 FASE 1 — HARD CLEANUP (START HIER!)

### 1.1 Git Safety
```bash
git add .
git commit -m "chore: before vite architecture refactor"
```

### 1.2 Verwijder useLanguage OVERAL
```bash
# Zoek alle files
grep -r "useLanguage" src/

# Acties:
❌ Verwijder: import { useLanguage } from '@/hooks/useLanguage'
❌ Verwijder: const { t } = useLanguage()
❌ Verwijder: t('Nederlands', 'English')
✅ Vervang met: 'Nederlands'
```

**Files te fixen (~50 files):**
- All pages
- All sections
- Header, Footer
- Forms

### 1.3 Verwijder useTheme
```bash
❌ Verwijder: import { useTheme } from '@/hooks/useTheme'
❌ Verwijder: const { theme, toggleTheme } = useTheme()
❌ Verwijder: dark: classes uit Tailwind
✅ Alleen light mode
```

### 1.4 Verwijder GSAP
```bash
npm uninstall gsap

# Verwijder uit files:
❌ import gsap from 'gsap'
❌ import { ScrollTrigger } from 'gsap/ScrollTrigger'
❌ useEffect met gsap animaties
✅ Gebruik CSS transitions
```

**Alternatieven:**
```css
/* CSS transitions */
.fade-in {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

## 🏗️ FASE 2 — VITE FOLDER STRUCTUUR

### 2.1 Nieuwe Structuur
```
src/
├── main.tsx                    # Entry point
├── App.tsx                     # Routes + Providers
│
├── features/                   # Feature modules
│   ├── home/
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── index.ts
│   │   ├── HomePage.tsx
│   │   └── index.ts
│   │
│   ├── programs/
│   │   ├── components/
│   │   │   ├── ProgramCard.tsx
│   │   │   └── index.ts
│   │   ├── ProgramsPage.tsx
│   │   ├── ProgramsSection.tsx
│   │   └── index.ts
│   │
│   ├── schedule/
│   ├── instructors/
│   ├── gallery/
│   ├── news/
│   ├── contact/
│   └── policies/
│
├── shared/                     # Shared code
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── ui/                # Shadcn
│   │   └── common/
│   │       ├── BackToTop.tsx
│   │       ├── PageHero.tsx
│   │       └── index.ts
│   │
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   └── index.ts
│   │
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── utils.ts
│   │   └── index.ts
│   │
│   └── types/
│       └── index.ts
│
├── assets/                     # Blijft in src voor Vite
│   ├── images/
│   └── fonts/
│
└── styles/
    └── index.css
```

### 2.2 App.tsx (Clean)
```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipProvider } from '@/shared/components/ui/tooltip';
import { Toaster } from '@/shared/components/ui/toaster';

// Pages
import { HomePage } from '@/features/home';
import { ProgramsPage } from '@/features/programs';
// ... etc

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            {/* ... */}
          </Routes>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
```

---

## 📦 FASE 3 — FEATURE MODULES

### 3.1 Feature Template
```
features/programs/
├── components/
│   ├── ProgramCard.tsx
│   ├── ProgramGrid.tsx
│   └── index.ts
├── ProgramsPage.tsx
├── ProgramsSection.tsx
└── index.ts
```

### 3.2 Barrel Exports (index.ts)
```typescript
// features/programs/index.ts
export { ProgramsPage } from './ProgramsPage';
export { ProgramsSection } from './ProgramsSection';
export * from './components';
```

### 3.3 Page Component
```typescript
// features/programs/ProgramsPage.tsx
import { Header } from '@/shared/components/layout';
import { Footer } from '@/shared/components/layout';
import { PageHero } from '@/shared/components/common';
import { ProgramsSection } from './ProgramsSection';

export function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero 
          title="Onze Programma's"
          subtitle="Voor alle leeftijden en niveaus"
        />
        <ProgramsSection />
      </main>
      <Footer />
    </>
  );
}
```

---

## 🔧 FASE 4 — SHARED COMPONENTS

### 4.1 Layout Components
```typescript
// shared/components/layout/Header.tsx
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Geen useLanguage!
  // Geen useTheme!
  
  return (
    <header className={isScrolled ? 'bg-white shadow' : 'bg-transparent'}>
      {/* ... */}
    </header>
  );
}
```

### 4.2 Common Components
```typescript
// shared/components/common/PageHero.tsx
interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container">
        <h1 className="text-5xl font-bold">{title}</h1>
        {subtitle && <p className="text-xl mt-4">{subtitle}</p>}
      </div>
    </section>
  );
}
```

---

## 🎨 FASE 5 — STYLING CLEANUP

### 5.1 Verwijder Dark Mode
```typescript
// ❌ VERWIJDER
className="bg-white dark:bg-zinc-900"
className="text-zinc-900 dark:text-zinc-100"

// ✅ VERVANG MET
className="bg-white"
className="text-zinc-900"
```

### 5.2 Animaties
```css
/* index.css - Voeg toe */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

---

## 🗄️ FASE 6 — SUPABASE

### 6.1 Clean Supabase Setup
```typescript
// shared/lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### 6.2 Types
```typescript
// shared/lib/supabase/types.ts
export interface Student {
  id: string;
  name: string;
  email: string;
  program: 'little-tigers' | 'youth' | 'women' | 'adult';
  belt: string;
  // ...
}

export interface Program {
  id: string;
  name: string;
  description: string;
  // ...
}
```

---

## ✅ FASE 7 — CONTROLE CHECKLIST

### Pre-refactor
- [ ] Git commit gemaakt
- [ ] Backup van project

### Cleanup
- [ ] useLanguage verwijderd uit alle files
- [ ] useTheme verwijderd uit alle files
- [ ] GSAP verwijderd
- [ ] Dark mode classes verwijderd
- [ ] Alleen Nederlandse tekst

### Structuur
- [ ] features/ folder aangemaakt
- [ ] shared/ folder georganiseerd
- [ ] Barrel exports (index.ts) overal
- [ ] App.tsx opgeschoond

### Testing
- [ ] `npm run dev` werkt
- [ ] Alle routes werken
- [ ] Geen console errors
- [ ] `npm run build` succesvol

---

## 🚀 IMPLEMENTATIE VOLGORDE

1. **Git commit** ✅
2. **Verwijder useLanguage** (50+ files) 🔥
3. **Verwijder useTheme** (30+ files)
4. **Verwijder GSAP** (10+ files)
5. **Maak nieuwe folders**
6. **Verplaats components**
7. **Update imports**
8. **Test alles**

---

## 💡 PRO TIPS

### Vite Specifiek
```typescript
// ✅ Assets importeren in Vite
import logo from '@/assets/images/logo.png';
<img src={logo} alt="Logo" />

// ✅ Env variables
import.meta.env.VITE_SUPABASE_URL

// ✅ Dynamic imports
const Component = lazy(() => import('./Component'));
```

### Performance
```typescript
// Code splitting per route
const ProgramsPage = lazy(() => import('@/features/programs'));

<Suspense fallback={<Loading />}>
  <ProgramsPage />
</Suspense>
```

---

## 🎯 EINDRESULTAAT

✔ Vite + React correct
✔ Feature-based architectuur
✔ Geen onnodige dependencies
✔ Alleen Nederlands
✔ Alleen light mode
✔ Clean, maintainable code
✔ Agency-level kwaliteit
✔ Klaar voor productie

---

## 📝 VOLGENDE STAP

**Start met FASE 1 - Cleanup:**
```bash
# 1. Maak backup
git commit -am "chore: before cleanup"

# 2. Zoek alle useLanguage
grep -r "useLanguage" src/ | wc -l

# 3. Start met verwijderen
# Ik kan een script maken om dit automatisch te doen
```

**Wil je dat ik:**
A) Script maak om useLanguage/useTheme automatisch te verwijderen
B) Handmatig file per file doorlopen
C) Direct naar nieuwe structuur (riskanter)
