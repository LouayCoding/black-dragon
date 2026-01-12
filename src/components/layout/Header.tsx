'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Over Ons' },
    { href: '/programs', label: 'Programmas' },
    { href: '/schedule', label: 'Rooster' },
    { href: '/pricing', label: 'Prijzen' },
    { href: '/news', label: 'Nieuws' },
    { href: '/instructors', label: 'Instructeurs' },
    { href: '/gallery', label: 'Galerij' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHomePage
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="group relative z-10">
            <img 
              src="/logo.png" 
              alt="Black Dragon Logo" 
              className="h-20 lg:h-24 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group",
                  pathname === link.href
                    ? isHomePage && !isScrolled ? "text-white" : "text-primary"
                    : isHomePage && !isScrolled ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="default" size="sm" className="hidden lg:flex bg-primary hover:bg-primary/90">
              <Link href="/contact">Inschrijven</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "xl:hidden p-2.5 rounded-lg transition-all duration-200 hover:bg-foreground/10",
                isHomePage && !isScrolled ? "text-white" : "text-foreground"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-background z-40 xl:hidden overflow-y-auto">
            <nav className="container mx-auto px-4 py-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg",
                      pathname === link.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-4 py-3 text-base font-medium bg-primary text-primary-foreground rounded-lg text-center"
                >
                  Inschrijven
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
