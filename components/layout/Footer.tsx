import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

const navLinks = [
  { href: '/#formules', label: 'Nos formules' },
  { href: '/#savoir-faire', label: 'Notre savoir-faire' },
  { href: '/#temoignages', label: 'Témoignages' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-bark-900 border-t border-stone-200/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <p className="font-display text-xl text-cream-50 mb-2">Tarte Flambée Maison</p>
            <p className="text-sm text-stone-400 mb-6">Artisan traiteur alsacien depuis 2012</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-stone-400 hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="text-sm">Instagram</span>
            </a>
          </div>

          {/* Col 2 */}
          <div>
            <p className="text-sm font-sans font-medium text-cream-200 uppercase tracking-widest mb-4">Navigation</p>
            <nav className="flex flex-col gap-3" aria-label="Navigation footer">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-400 hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 */}
          <div>
            <p className="text-sm font-sans font-medium text-cream-200 uppercase tracking-widest mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-copper-400 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-stone-400">Le Bonhomme, Alsace (68650)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-copper-400 shrink-0" aria-hidden="true" />
                <a href="tel:+33665045727" className="text-sm text-stone-400 hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm">
                  +33 6 65 04 57 27
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-copper-400 shrink-0" aria-hidden="true" />
                <a href="mailto:contact@poivresale.fr" className="text-sm text-stone-400 hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm">
                  contact@poivresale.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-400">© 2024 Tarte Flambée Maison — Marc Ruggieri</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400">
            <Link href="/mentions-legales" className="hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm">Politique de confidentialité</Link>
            <Link href="/cgv" className="hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm">CGV</Link>
            <Link href="/cookies" className="hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
