import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "Nos formules", href: "/#formules" },
  { label: "Déroulement", href: "/#deroulement" },
  { label: "Témoignages", href: "/#temoignages" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2B1810" }} className="py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-fraunces), serif", color: "#FAF7F2" }}
              >
                Poivre & Salé
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.65)" }}>
              Tarte flambée d&apos;Alsace, prestation à domicile. Nous vous accueillons avec notre four à bois traditionnel pour tous vos événements, au départ de Le Bonhomme (68650).
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm font-semibold tracking-wide uppercase mb-5"
              style={{ color: "rgba(250,247,242,0.45)", letterSpacing: "0.1em" }}
            >
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm transition-colors hover:text-[#D4622A]"
                  style={{ color: "rgba(250,247,242,0.65)" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold tracking-wide uppercase mb-5"
              style={{ color: "rgba(250,247,242,0.45)", letterSpacing: "0.1em" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@poivresale.fr"
                className="flex items-center gap-3 text-sm transition-colors hover:text-[#D4622A]"
                style={{ color: "rgba(250,247,242,0.65)" }}
              >
                <Mail strokeWidth={1.5} size={16} className="flex-shrink-0" />
                contact@poivresale.fr
              </a>
              <a
                href="tel:0785621089"
                className="flex items-center gap-3 text-sm transition-colors hover:text-[#D4622A]"
                style={{ color: "rgba(250,247,242,0.65)" }}
              >
                <Phone strokeWidth={1.5} size={16} className="flex-shrink-0" />
                07 85 62 10 89
              </a>
              <div
                className="flex items-center gap-3 text-sm"
                style={{ color: "rgba(250,247,242,0.65)" }}
              >
                <MapPin strokeWidth={1.5} size={16} className="flex-shrink-0" />
                Le Bonhomme, 68650 — Alsace
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t pt-7 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(196,168,130,0.25)" }}
        >
          <p className="text-xs" style={{ color: "rgba(250,247,242,0.4)" }}>
            &copy; 2026 Poivre & Salé — Tarte flambée d&apos;Alsace
          </p>
          <div className="flex gap-5">
            <Link
              href="/mentions-legales"
              className="text-xs transition-colors hover:text-[#D4622A]"
              style={{ color: "rgba(250,247,242,0.4)" }}
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-xs transition-colors hover:text-[#D4622A]"
              style={{ color: "rgba(250,247,242,0.4)" }}
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
