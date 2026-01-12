# 🚀 VITE → NEXT.JS 15 MIGRATIE

## Status: IN PROGRESS

### ✅ Stap 1: Git Backup
- [x] Git commit gemaakt: `chore: before nextjs migration`

### 🔄 Stap 2: Next.js Installeren
```bash
npm install next@latest react@latest react-dom@latest
npm install -D @types/node @types/react @types/react-dom
```

### 🔄 Stap 3: Verwijder Vite Dependencies
```bash
npm uninstall vite @vitejs/plugin-react-swc
npm uninstall react-router-dom
```

### 🔄 Stap 4: Update package.json scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 🔄 Stap 5: Maak Next.js Config
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['zsibupsnbpnoxzjmnpcl.supabase.co'],
  },
}

module.exports = nextConfig
```

### 🔄 Stap 6: Update tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 🔄 Stap 7: Maak /app Directory Structuur
```
src/app/
├── layout.tsx              # Root layout
├── page.tsx                # Home page
├── globals.css             # Global styles
├── programs/
│   └── page.tsx
├── schedule/
│   └── page.tsx
├── instructors/
│   └── page.tsx
├── gallery/
│   └── page.tsx
├── news/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── contact/
│   └── page.tsx
└── policies/
    ├── house-rules/
    │   └── page.tsx
    └── code-of-conduct/
        └── page.tsx
```

### 🔄 Stap 8: Verplaats Assets
```
public/
├── images/
│   ├── gallery/
│   ├── instructors/
│   └── logo.png
└── fonts/
```

### 🔄 Stap 9: Update Imports
- Verwijder `import.meta.env` → gebruik `process.env`
- Update asset imports naar `/images/...`
- Verwijder React Router imports

### 🔄 Stap 10: Test
```bash
npm run dev
# Open http://localhost:3000
```

---

## 📝 Belangrijke Verschillen

### Vite vs Next.js

| Feature | Vite | Next.js |
|---------|------|---------|
| Routing | React Router | File-based |
| Assets | `src/assets/` | `public/` |
| Env vars | `import.meta.env.VITE_` | `process.env.NEXT_PUBLIC_` |
| Entry | `main.tsx` | `app/layout.tsx` |
| Build | `vite build` | `next build` |

### Server vs Client Components

```typescript
// Server Component (default)
export default function Page() {
  return <div>Server</div>
}

// Client Component (interactive)
'use client'
export function Form() {
  const [state, setState] = useState()
  return <form>...</form>
}
```

---

## ⚠️ Breaking Changes

1. **No React Router** - File-based routing
2. **No `import.meta.env`** - Use `process.env`
3. **Assets in public/** - Not src/assets
4. **Server Components** - Default, add 'use client' when needed
5. **No Vite plugins** - Use Next.js config

---

## 🎯 Voordelen Next.js

✅ SEO out of the box
✅ Server-side rendering
✅ Image optimization
✅ API routes
✅ Better performance
✅ Vercel deployment (gratis)
✅ Industry standard
