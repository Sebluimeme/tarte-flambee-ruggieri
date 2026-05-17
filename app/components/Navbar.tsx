"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Nos formules", href: "/#formules" },
  { label: "Déroulement", href: "/#deroulement" },
  { label: "Témoignages", href: "/#temoignages" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(250,247,242,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid #E8DCC8" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 12px rgba(43,24,16,0.06)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Poivre & Salé — Accueil"
          >
            <span
              className="text-2xl font-bold transition-colors"
              style={{
                fontFamily: "var(--font-fraunces), serif",
                color: scrolled ? "#2B1810" : "#ffffff",
              }}
            >
              Poivre et Salé
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors hover:text-[#D4622A]"
                style={{ color: scrolled ? "#2B1810" : "rgba(255,255,255,0.85)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA desktop */}
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide uppercase transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            style={{ backgroundColor: "#D4622A", color: "#FAF7F2" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B84E1E")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#D4622A")}
          >
            Demander un devis
          </Link>

          {/* Hamburger mobile */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg transition-colors"
            aria-label="Ouvrir le menu"
            style={{ color: scrolled ? "#2B1810" : "#ffffff" }}
          >
            <Menu strokeWidth={1.5} size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <div
            className="relative flex flex-col w-80 max-w-full h-full py-8 px-6 shadow-2xl"
            style={{ backgroundColor: "#FAF7F2" }}
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
                >
                  Poivre et Salé
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg transition-colors hover:bg-[#E8DCC8]"
                aria-label="Fermer le menu"
                style={{ color: "#2B1810" }}
              >
                <X strokeWidth={1.5} size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-1 flex-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium transition-colors hover:bg-[#E8DCC8] hover:text-[#D4622A]"
                  style={{ color: "#2B1810" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-8 flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold tracking-wide uppercase transition-colors"
              style={{ backgroundColor: "#D4622A", color: "#FAF7F2" }}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
