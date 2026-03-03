import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const siteLinks = [
    { label: 'Programmas', href: '/programs' },
    { label: 'Rooster', href: '/schedule' },
    { label: 'Tarieven', href: '/tarieven' },
    { label: 'Over Ons', href: '/about' },
    { label: 'Galerij', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const moreLinks = [
    { label: 'Nieuws', href: '/news' },
    { label: 'Instructeurs', href: '/instructors' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Inschrijven', href: '/inschrijven' },
  ];

  const programs = [
    { label: 'Kleine Tijgers (4-6)', href: '/programs' },
    { label: 'Junioren (7-17)', href: '/programs' },
    { label: 'Volwassenen (18+)', href: '/programs' },
    { label: 'Ladies Only', href: '/programs' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image 
                src="/logo.png" 
                alt="Black Dragon Logo" 
                width={56}
                height={56}
                className="h-14 w-auto transition-transform group-hover:scale-105"
              />
              <div>
                <h3 className="font-serif text-lg font-bold">태권도 블랙 드래곤</h3>
                <p className="text-xs text-white/60 tracking-widest">TAEKWONDO BLACK DRAGON</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Taekwondo Vereniging Black Dragon Den Haag. Sportclub voor zelfverdediging en Olympische vechtsport. Aangesloten bij TBN, IMAF-Nederland en World Taekwondo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/taekwondoblackdragon/?locale=nl_NL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/taekwondoblackdragon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@taekwondoblackdragon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-[18px] h-[18px]"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="mailto:info@taekwondoblackdragon.nl"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Pagina's */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Pagina&apos;s</h4>
            <ul className="space-y-3">
              {siteLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-serif text-lg font-semibold mt-8 mb-4">Meer</h4>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmas */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Programma&apos;s</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <Link
                    href={program.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">{'Contact'}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  De Draaistraat<br />
                  2516 EK Den Haag
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+31615047993" className="text-white/70 hover:text-primary transition-colors text-sm">
                    06 15047993
                  </a>
                  <a 
                    href="https://wa.me/31615047993" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@taekwondoblackdragon.nl" className="text-white/70 hover:text-primary transition-colors text-sm">
                  info@taekwondoblackdragon.nl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Taekwondo Black Dragon Den Haag. Alle rechten voorbehouden.
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
          <Link href="/algemene-voorwaarden" className="text-white/50 hover:text-primary text-sm transition-colors">
            Algemene Voorwaarden
          </Link>
          <Link href="/privacy-beleid" className="text-white/50 hover:text-primary text-sm transition-colors">
            Privacybeleid
          </Link>
          <Link href="/code-of-conduct" className="text-white/50 hover:text-primary text-sm transition-colors">
            Gedragscode
          </Link>
          <Link href="/anti-bullying-protocol" className="text-white/50 hover:text-primary text-sm transition-colors">
            Pestprotocol
          </Link>
          <Link href="/sexual-harassment-protocol" className="text-white/50 hover:text-primary text-sm transition-colors">
            Protocol Seksuele Intimidatie
          </Link>
          <Link href="/house-rules" className="text-white/50 hover:text-primary text-sm transition-colors">
            Huisregels
          </Link>
        </div>
      </div>
    </footer>
  );
}
