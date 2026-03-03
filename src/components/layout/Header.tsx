'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    { href: '/about', label: 'Over Ons' },
    { href: '/programs', label: 'Programmas' },
    { href: '/schedule', label: 'Rooster' },
    { href: '/tarieven', label: 'Tarieven' },
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
    <>
    <header
      className={cn(
        'fixed top-0 left-0 right-0 transition-all duration-300',
        isMobileMenuOpen ? 'z-[60] bg-primary' : 'z-50',
        !isMobileMenuOpen && (isScrolled || !isHomePage)
          ? 'bg-background/95 backdrop-blur-md'
          : !isMobileMenuOpen ? 'bg-gradient-to-b from-black/60 to-transparent' : ''
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="group relative z-[70]">
            <Image 
              src="/logo.png" 
              alt="Black Dragon Logo" 
              width={56}
              height={56}
              className="h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
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
                    ? "text-primary font-semibold"
                    : isHomePage && !isScrolled ? "text-white/80 hover:text-primary" : "text-white/70 hover:text-primary"
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
            <Button 
              asChild 
              variant="default" 
              size="sm" 
              className={cn(
                "hidden lg:flex rounded",
                isScrolled || !isHomePage
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              )}
            >
              <Link href="/inschrijven">Inschrijven</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "xl:hidden p-2.5 rounded-lg transition-all duration-200 relative z-[70]",
                isMobileMenuOpen 
                  ? "text-primary-foreground" 
                  : isHomePage && !isScrolled 
                    ? "text-white" 
                    : "text-foreground"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

    </header>
    
    <div 
      className={cn(
        "fixed inset-0 bg-primary z-[55] xl:hidden overflow-y-auto transition-all duration-500 ease-in-out",
        isMobileMenuOpen 
          ? "opacity-100 visible translate-y-0" 
          : "opacity-0 invisible -translate-y-4"
      )}
    >
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
        <nav className="w-full">
          <div className="flex flex-col gap-6 items-center text-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "font-serif text-3xl font-bold inline-block transition-all duration-500",
                  pathname === link.href ? "text-primary-foreground" : "text-primary-foreground/60 hover:text-primary-foreground",
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: isMobileMenuOpen ? `${150 + index * 75}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className={cn(
                "mt-8 bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-500",
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: isMobileMenuOpen ? `${150 + navLinks.length * 75}ms` : '0ms' }}
            >
              <Link
                href="/inschrijven"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inschrijven
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
    </>
  )
}
