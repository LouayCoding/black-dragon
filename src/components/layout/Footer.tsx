import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">道</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">태권도</h3>
                <p className="text-xs text-secondary-foreground/60 tracking-widest">TAEKWONDO</p>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              Discover the ancient Korean martial art of Taekwondo. 
              Build strength, discipline, and confidence through our expert-led programs.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Programs', 'Schedule', 'Instructors', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {['Children Classes', 'Teen Programs', 'Adult Training', 'Family Classes', 'Competition Team', 'Private Lessons'].map((program) => (
                <li key={program}>
                  <a
                    href="#programs"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  123 Martial Arts Way<br />
                  City, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@taekwondo.com" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  info@taekwondo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Taekwondo Dojang. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-secondary-foreground/50 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground/50 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
