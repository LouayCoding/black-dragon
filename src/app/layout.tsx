import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import '@/styles/index.css'
import { Toaster } from '@/components/ui/toaster'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Black Dragon Taekwondo | Den Haag',
  description: 'Professionele Taekwondo lessen in Den Haag voor alle leeftijden. Van Kleine Tijgers tot volwassenen.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  other: {
    'theme-color': '#0a0a0a',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${geist.variable} ${inter.variable} ${geistMono.variable}`}>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
