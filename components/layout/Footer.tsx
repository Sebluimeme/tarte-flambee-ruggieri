import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

const SIRET = '812 751 469 00014'

// Renseigner les URLs réelles et mettre la valeur à true pour afficher la section
const SOCIAL = {
  show: true,
  instagram: 'https://www.instagram.com/poivre.et.sale' as string | null,
  facebook: null as string | null,        // ex: 'https://www.facebook.com/maisonruggieri'
  googleBusiness: null as string | null,  // ex: 'https://g.page/r/...'
}

const navLinks = [
  { href: '/formules',      label: 'Nos formules' },
  { href: '/a-propos',      label: 'À propos' },
  { href: '/#temoignages',  label: 'Témoignages' },
  { href: '/contact',       label: 'Contact' },
  { href: '/allergenes',    label: 'Allergènes' },
]

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconGoogle() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21.8 11H12v3.2h5.6c-.5 2.5-2.6 4-5.6 4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 2.9.6 3.9 1.5l2.4-2.4C16.7 3.8 14.5 3 12 3 7 3 3 7 3 12s4 9 9 9c5 0 8.7-3.5 8.7-8.7 0-.5 0-1-.1-1.3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-bark-900 border-t border-stone-200/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Col 1 — Marque + réseaux (si activés) */}
          <div>
            <p className="font-display text-xl text-cream-50 mb-2">Maison Ruggieri</p>
            <p className="text-sm text-stone-400">Artisan traiteur alsacien</p>

            {SOCIAL.show && (
              <div className="flex items-center gap-3 mt-5">
                {SOCIAL.instagram && (
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Maison Ruggieri"
                    className="text-stone-400 hover:text-copper-400 transition-colors"
                  >
                    <IconInstagram />
                  </a>
                )}
                {SOCIAL.facebook && (
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Maison Ruggieri"
                    className="text-stone-400 hover:text-copper-400 transition-colors"
                  >
                    <IconFacebook />
                  </a>
                )}
                {SOCIAL.googleBusiness && (
                  <a
                    href={SOCIAL.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Laisser un avis Google"
                    className="text-stone-400 hover:text-copper-400 transition-colors"
                  >
                    <IconGoogle />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="text-sm font-sans font-medium text-cream-200 uppercase tracking-widest mb-4">
              Navigation
            </p>
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
              {SOCIAL.googleBusiness && (
                <a
                  href={SOCIAL.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone-400 hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
                >
                  Laisser un avis
                </a>
              )}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="text-sm font-sans font-medium text-cream-200 uppercase tracking-widest mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-copper-400 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-stone-400">Le Bonhomme, 68650 (Alsace)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-copper-400 shrink-0" aria-hidden="true" />
                <a
                  href="tel:+33785621089"
                  className="text-sm text-stone-400 hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
                >
                  07 85 62 10 89
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-copper-400 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contact@poivresale.fr"
                  className="text-sm text-stone-400 hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
                >
                  contact@poivresale.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-400">
            © 2026 Maison Ruggieri — Marc Ruggieri — SIRET&nbsp;{SIRET}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400">
            <Link
              href="/mentions-legales"
              className="hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
            >
              Confidentialité
            </Link>
            <Link
              href="/cgv"
              className="hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
            >
              CGV
            </Link>
            <Link
              href="/cookies"
              className="hover:text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
