import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import '@/styles/index.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Black Dragon Taekwondo | Den Haag',
  description: 'Professionele Taekwondo lessen in Den Haag voor alle leeftijden. Van Kleine Tijgers tot volwassenen.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
