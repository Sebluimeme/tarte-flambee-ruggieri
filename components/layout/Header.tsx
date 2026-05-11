"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Formules", href: "/#formules" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const base = href.split("#")[0];
    if (base === "/") return false;
    return pathname.startsWith(base);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-cream-50/80 border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path
                d="M14 2C14 2 8 8 8 14.5C8 18.09 10.69 21 14 21C17.31 21 20 18.09 20 14.5C20 8 14 2 14 2Z"
                fill="#C75A2A"
                opacity="0.9"
              />
              <path
                d="M14 8C14 8 10 12 10 15.5C10 17.43 11.79 19 14 19C16.21 19 18 17.43 18 15.5C18 12 14 8 14 8Z"
                fill="#D87642"
              />
              <path
                d="M14 13C14 13 12 15 12 16.5C12 17.33 12.9 18 14 18C15.1 18 16 17.33 16 16.5C16 15 14 13 14 13Z"
                fill="#FAF6EE"
              />
            </svg>
            <span className="font-display text-xl font-medium text-bark-900">Marc Ruggieri</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-sans text-sm font-medium transition-colors duration-200 hover:text-copper-500 ${
                  isActive(l.href) ? "text-copper-500" : "text-bark-800"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md"
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-bark-900"
            aria-label="Ouvrir le menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-0 bg-cream-50 flex flex-col px-8 py-8">
            {/* Header drawer */}
            <div className="flex items-center justify-between mb-12">
              <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M14 2C14 2 8 8 8 14.5C8 18.09 10.69 21 14 21C17.31 21 20 18.09 20 14.5C20 8 14 2 14 2Z" fill="#C75A2A" opacity="0.9" />
                  <path d="M14 8C14 8 10 12 10 15.5C10 17.43 11.79 19 14 19C16.21 19 18 17.43 18 15.5C18 12 14 8 14 8Z" fill="#D87642" />
                  <path d="M14 13C14 13 12 15 12 16.5C12 17.33 12.9 18 14 18C15.1 18 16 17.33 16 16.5C16 15 14 13 14 13Z" fill="#FAF6EE" />
                </svg>
                <span className="font-display text-xl font-medium text-bark-900">Marc Ruggieri</span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 text-bark-900"
                aria-label="Fermer le menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col gap-2 flex-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-medium text-bark-900 py-3 hover:text-copper-500 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
