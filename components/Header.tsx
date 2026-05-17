"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Nos formules", href: "/formules" },
  { label: "À propos", href: "/a-propos" },
  { label: "Ils nous font confiance", href: "/#avis" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";
  };

  return (
    <>
      <header className="sticky top-0 z-50 h-16 bg-cream-50/95 backdrop-blur-sm border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-xl font-medium text-bark-900">
              Poivre et Salé
            </span>
            <span className="text-sm text-stone-400">Tarte flambée</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-sans text-sm font-medium transition-colors hover:text-bark-900 ${
                  isActive(l.href)
                    ? "text-bark-900 underline decoration-copper-500 underline-offset-4"
                    : "text-bark-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Demander un devis
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg text-bark-900"
            aria-label="Ouvrir le menu"
          >
            <Menu strokeWidth={1.5} size={24} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative flex flex-col w-80 max-w-full h-full py-8 px-6 shadow-2xl bg-cream-50">
            <div className="flex items-center justify-between mb-10">
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-medium text-bark-900">
                  Poivre et Salé
                </span>
                <span className="text-sm text-stone-400">Tarte flambée</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-cream-200 text-bark-900"
                aria-label="Fermer le menu"
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
                  className="px-4 py-3 rounded-xl text-lg font-medium text-bark-900 hover:bg-cream-200 hover:text-copper-500 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <Button href="/contact" className="w-full justify-center" onClick={() => setOpen(false)}>
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
