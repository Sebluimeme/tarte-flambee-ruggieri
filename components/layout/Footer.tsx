import Link from "next/link";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Formules", href: "/formules" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "CGV", href: "/cgv" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-bark-900 py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M14 2C14 2 8 8 8 14.5C8 18.09 10.69 21 14 21C17.31 21 20 18.09 20 14.5C20 8 14 2 14 2Z" fill="#C75A2A" opacity="0.9" />
                <path d="M14 8C14 8 10 12 10 15.5C10 17.43 11.79 19 14 19C16.21 19 18 17.43 18 15.5C18 12 14 8 14 8Z" fill="#D87642" />
                <path d="M14 13C14 13 12 15 12 16.5C12 17.33 12.9 18 14 18C15.1 18 16 17.33 16 16.5C16 15 14 13 14 13Z" fill="#FAF6EE" />
              </svg>
              <span className="font-display text-xl font-medium text-cream-100">Marc Ruggieri</span>
            </div>
            <p className="text-sm text-cream-100/60 leading-relaxed">
              L&apos;authentique tarte flambée alsacienne à domicile pour vos mariages, anniversaires et événements d&apos;entreprise.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-cream-100/40 mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-cream-100/70 hover:text-copper-400 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-cream-100/40 mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+33612345678"
                className="flex items-center gap-3 text-sm text-cream-100/70 hover:text-copper-400 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5.02 2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18z" />
                </svg>
                06 12 34 56 78
              </a>
              <a
                href="mailto:contact@poivresale.fr"
                className="flex items-center gap-3 text-sm text-cream-100/70 hover:text-copper-400 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                contact@poivresale.fr
              </a>
              <div className="flex items-center gap-3 text-sm text-cream-100/70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Alsace &amp; Grand Est
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-6">
              {LEGAL_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs text-cream-100/40 hover:text-cream-100/70 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream-100/10 pt-8">
          <p className="text-xs text-cream-100/30 text-center">
            &copy; 2025 Marc Ruggieri &mdash; Prestation tarte flambée en Alsace. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
