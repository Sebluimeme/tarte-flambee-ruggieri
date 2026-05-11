import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Formules", href: "/formules" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
  { label: "CGV", href: "/cgv" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
];

export default function Footer() {
  return (
    <footer className="bg-bark-900 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Col 1 — Brand */}
          <div>
            <p className="font-display text-2xl font-medium text-cream-100 mb-3">
              Marc Ruggieri
            </p>
            <p className="text-sm leading-relaxed text-cream-100/65 mb-5">
              Artisan tarte flambée à domicile en Alsace depuis 2011. Four à bois authentique pour
              mariages, anniversaires et événements d&apos;entreprise.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-300 hover:text-copper-400 transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-300 hover:text-copper-400 transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cream-100/40 mb-5">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-cream-300 hover:text-copper-400 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Coordonnées */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-cream-100/40 mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@poivresale.fr"
                className="flex items-center gap-3 text-sm text-cream-100/70 hover:text-copper-400 transition-colors"
              >
                <Mail strokeWidth={1.5} size={16} className="flex-shrink-0" />
                contact@poivresale.fr
              </a>
              <div className="flex items-center gap-3 text-sm text-cream-100/70">
                <MapPin strokeWidth={1.5} size={16} className="flex-shrink-0" />
                Le Bonhomme, 68650
              </div>
              <a
                href="tel:+336XXXXXXXX"
                className="flex items-center gap-3 text-sm text-cream-100/70 hover:text-copper-400 transition-colors"
              >
                <Phone strokeWidth={1.5} size={16} className="flex-shrink-0" />
                +33 6 XX XX XX XX
              </a>
              <div className="flex items-start gap-3 text-sm text-cream-100/70">
                <MapPin strokeWidth={1.5} size={16} className="flex-shrink-0 mt-0.5" />
                Zone Alsace &amp; Grand Est
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-100/10 pt-7">
          <p className="text-xs text-cream-100/35 text-center">
            &copy; 2025 Marc Ruggieri &mdash; Tarte flambée artisanale en Alsace
          </p>
        </div>
      </div>
    </footer>
  );
}
