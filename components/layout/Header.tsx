'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/#formules', label: 'Nos formules' },
  { href: '/#savoir-faire', label: 'Notre savoir-faire' },
  { href: '/#temoignages', label: 'Témoignages' },
  { href: '/contact', label: 'Contact' },
]

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-sm border-b border-stone-200/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-xl text-bark-900 hover:text-bark-800 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm">
            Tarte Flambée Maison
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-bark-700 hover:text-bark-900 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-sm hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
            >
              Vérifier ma date
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-bark-900 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-bark-900/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-cream-50 shadow-xl flex flex-col p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-xl text-bark-900">Tarte Flambée Maison</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-bark-900 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
                aria-label="Fermer le menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-4" aria-label="Navigation mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-base text-bark-700 hover:text-bark-900 py-2 border-b border-stone-200 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
              >
                Vérifier ma date
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
