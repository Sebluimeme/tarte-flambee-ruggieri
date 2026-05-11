'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/#concept', label: 'Le concept' },
  { href: '/#formules', label: 'Formules' },
  { href: '/#galerie', label: 'Galerie' },
  { href: '/#temoignages', label: 'Avis' },
  { href: '/contact', label: 'Contact' },
]

const PHONE_DISPLAY = '07 85 62 10 89'
const PHONE_HREF = 'tel:+33785621089'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-50/90 backdrop-blur-md border-b border-stone-200/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-between gap-8">
          {/* Logotype */}
          <Link
            href="/"
            className="font-display text-xl text-bark-900 hover:text-bark-800 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm shrink-0"
          >
            Maison Ruggieri
          </Link>

          {/* Nav centre */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-bark-700 hover:text-bark-900 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Droite : téléphone + CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={PHONE_HREF}
              className="font-sans text-sm text-bark-700 hover:text-bark-900 transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-sm hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
            >
              Demander un devis
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-bark-900 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Overlay mobile plein écran */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-cream-50 flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b border-stone-200">
            <span className="font-display text-xl text-bark-900">Maison Ruggieri</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-bark-900 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav
            className="flex flex-col items-center justify-center flex-1 gap-8"
            aria-label="Navigation mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-3xl text-bark-800 hover:text-copper-500 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="font-sans text-sm text-bark-700 mt-2"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
