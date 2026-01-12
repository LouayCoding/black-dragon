import type { Metadata } from 'next'
import { Lexend, Poppins } from 'next/font/google'
import '@/styles/index.css'

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Black Dragon Taekwondo | Den Haag',
  description: 'Professionele Taekwondo lessen in Den Haag voor alle leeftijden. Van Kleine Tijgers tot volwassenen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`$lexend.variable $poppins.variable`}>
      <body>children</body>
    </html>
  )
}
