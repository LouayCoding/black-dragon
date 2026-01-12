# 🏗️ Black Dragon Website - Professionele Herstructurering

## 📊 Huidige Situatie Analyse

### ❌ Problemen:
1. **useLanguage/useTheme overal** - Niet meer nodig (alleen Nederlands)
2. **Slechte folder structuur** - Componenten niet logisch gegroepeerd  
3. **Admin systeem** - Verwijderd, focus op publieke website
4. **Geen feature-based organisatie** - Alles door elkaar
5. **Inconsistente naming** - Mix van Engels/Nederlands
6. **Te veel dependencies** - GSAP animaties overal

---

## ✅ Nieuwe Professionele Structuur

```
src/
├── app/                          # 🎯 App configuratie
│   ├── App.tsx                   # Main app component
│   ├── routes.tsx                # Route definitie
│   └── providers.tsx             # Context providers (Query, Tooltip)
│
├── features/                     # 📦 Feature-based modules
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
│   │   │   └── ProgramCard.tsx
│   │   ├── ProgramsPage.tsx
│   │   ├── ProgramsSection.tsx
│   │   └── index.ts
│   │
│   ├── schedule/
│   │   ├── SchedulePage.tsx
│   │   ├── ScheduleSection.tsx
│   │   └── index.ts
│   │
│   ├── instructors/
│   │   ├── InstructorsPage.tsx
│   │   ├── InstructorsSection.tsx
│   │   └── index.ts
│   │
│   ├── gallery/
│   │   ├── GalleryPage.tsx
│   │   ├── GallerySection.tsx
│   │   └── index.ts
│   │
│   ├── news/
│   │   ├── NewsPage.tsx
│   │   ├── NewsArticlePage.tsx
│   │   └── index.ts
│   │
│   ├── contact/
│   │   ├── ContactPage.tsx
│   │   ├── ContactSection.tsx
│   │   ├── RegistrationPage.tsx
│   │   └── index.ts
│   │
│   └── policies/
│       ├── CodeOfConductPage.tsx
│       ├── HouseRulesPage.tsx
│       └── index.ts
│
├── shared/                       # 🔧 Gedeelde code
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── ui/                  # Shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
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
│       ├── database.ts
│       └── index.ts
│
├── assets/                       # 📁 Statische bestanden
│   ├── images/
│   │   ├── gallery/
│   │   ├── instructors/
│   │   └── logo.png
│   └── fonts/
│
└── styles/                       # 🎨 Globale styles
    ├── index.css
    └── globals.css
```

---

## 🎯 Implementatie Stappen

### Fase 1: Cleanup (PRIORITEIT)
- [ ] Verwijder `useLanguage` uit ALLE files
- [ ] Verwijder `useTheme` uit ALLE files  
- [ ] Verwijder ongebruikte hooks/providers
- [ ] Verwijder GSAP animaties (te complex)
- [ ] Alleen Nederlands behouden

### Fase 2: Nieuwe Structuur
- [ ] Maak `app/` folder met providers
- [ ] Maak `features/` folder structuur
- [ ] Maak `shared/` folder voor gedeelde code
- [ ] Verplaats components naar juiste features

### Fase 3: Refactor Components
- [ ] Update alle imports naar nieuwe structuur
- [ ] Implementeer barrel exports (`index.ts`)
- [ ] Verwijder inline styles waar mogelijk
- [ ] Consistente naming (Nederlands)

### Fase 4: Testing
- [ ] Test alle routes
- [ ] Valideer Supabase connectie
- [ ] Check responsive design
- [ ] Performance audit

---

## 📋 Best Practices

### File Naming
```
✅ GOED:
- ProgramsPage.tsx
- ProgramCard.tsx
- useLocalStorage.ts

❌ FOUT:
- programs-page.tsx
- program_card.tsx
- UseLocalStorage.ts
```

### Imports
```typescript
// ✅ GOED - Barrel exports
import { ProgramsPage, ProgramCard } from '@/features/programs';
import { Header, Footer } from '@/shared/components/layout';

// ❌ FOUT - Directe imports
import { ProgramsPage } from '@/features/programs/ProgramsPage';
import { Header } from '@/shared/components/layout/Header';
```

### Component Structure
```typescript
// ✅ GOED
export function ProgramCard({ title, description }: Props) {
  return (
    <div className="program-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ❌ FOUT - useLanguage, inline styles
export function ProgramCard({ title, description }: Props) {
  const { t } = useLanguage();
  return (
    <div style={{ padding: '20px' }}>
      <h3>{t(title, titleEn)}</h3>
    </div>
  );
}
```

---

## 🚀 Voordelen Nieuwe Structuur

1. **Feature-based** - Alles bij elkaar wat bij elkaar hoort
2. **Schaalbaar** - Makkelijk nieuwe features toevoegen
3. **Maintainable** - Duidelijke scheiding van concerns
4. **Testbaar** - Features zijn geïsoleerd
5. **Performance** - Betere code splitting mogelijk
6. **Developer Experience** - Makkelijker te navigeren

---

## 📝 Notities

- **Supabase**: Alleen voor data, geen admin UI in website
- **Styling**: Tailwind CSS + Shadcn UI components
- **Routing**: React Router DOM
- **State**: React Query voor server state
- **Forms**: React Hook Form + Zod validatie
- **Taal**: Alleen Nederlands (geen i18n nodig)
- **Theme**: Alleen light mode (geen dark mode)

---

## ⚡ Quick Wins

1. Verwijder `useLanguage` → Direct Nederlandse tekst
2. Verwijder `useTheme` → Alleen light mode
3. Verwijder GSAP → Native CSS animations
4. Verwijder admin → Focus op publieke site
5. Feature folders → Betere organisatie
