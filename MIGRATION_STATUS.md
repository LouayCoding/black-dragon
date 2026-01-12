# 🚀 Next.js Migratie Status

## ✅ Voltooid
- [x] Git backup gemaakt
- [x] Next.js 15 geïnstalleerd
- [x] Vite verwijderd
- [x] next.config.mjs aangemaakt
- [x] tsconfig.json voor Next.js
- [x] /app/layout.tsx aangemaakt
- [x] /app/page.tsx aangemaakt
- [x] Dev server draait (met errors)

## 🔄 In Progress - Grote Refactor Nodig

### Errors te fixen:

1. **react-router-dom → next/link** (~15 files)
   - Header.tsx
   - Footer.tsx
   - HeroSection.tsx
   - ProgramsSection.tsx
   - ContactSection.tsx
   - Alle andere sections

2. **useLanguage verwijderen** (~50 files)
   - Alle sections
   - Header, Footer
   - Alle pages

3. **useTheme verwijderen** (~30 files)
   - Header
   - Alle components met dark mode

4. **GSAP verwijderen** (~10 files)
   - Alle sections met animaties

5. **Asset imports fixen**
   - Verplaats naar /public
   - Update alle imports

## 🎯 Aanpak

**Optie A: Automatisch Script (AANBEVOLEN)**
Maak PowerShell script dat:
- Alle `react-router-dom` vervangt met `next/link`
- Alle `useLanguage` verwijdert
- Alle `useTheme` verwijdert
- Alle `t('NL', 'EN')` vervangt met `'NL'`
- Alle `dark:` classes verwijdert

**Optie B: Handmatig Per Component**
Ga component per component door

**Optie C: Nieuwe Clean Start**
Maak nieuwe components van scratch

## 📊 Geschatte Tijd
- Optie A: 30 minuten (script + test)
- Optie B: 4-6 uur (handmatig)
- Optie C: 8-12 uur (volledig nieuw)

## 🔥 Volgende Stap
Kies optie en start met cleanup!
