'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/',          label: 'Accueil',    exact: true  },
  { href: '/formules',  label: 'Formules',   exact: false },
  { href: '/#galerie',  label: 'Galerie',    exact: false },
  { href: '/#temoignages', label: 'Avis',    exact: false },
  { href: '/contact',   label: 'Contact',    exact: false },
]

const PHONE_DISPLAY = '07 85 62 10 89'
const PHONE_HREF    = 'tel:+33785621089'

function useIsActive(href: string, exact: boolean): boolean {
  const pathname = usePathname()
  if (href.includes('#')) return pathname === '/'
  if (exact) return pathname === href
  return pathname.startsWith(href)
}

function NavLink({ href, label, exact, onClick }: {
  href: string
  label: string
  exact: boolean
  onClick?: () => void
}) {
  const active = useIsActive(href, exact)
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative font-sans text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm
        ${active ? 'text-bark-900' : 'text-bark-700 hover:text-bark-900'}`}
    >
      {label}
      {active && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-copper-500 rounded-full" />
      )}
    </Link>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Ferme le menu si on passe > md */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const close = (e: MediaQueryListEvent) => { if (e.matches) setIsOpen(false) }
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  /* Bloque le scroll body quand menu ouvert */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 bg-cream-50/95 backdrop-blur-md border-b border-stone-200/70 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-between gap-8">

          {/* Logotype */}
          <Link
            href="/"
            className="font-display text-xl text-bark-900 hover:text-copper-600 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm shrink-0 leading-none"
          >
            Poivre & Salé
          </Link>

          {/* Nav desktop */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          {/* Droite : tél + CTA */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 font-sans text-sm text-bark-700 hover:text-bark-900 transition-colors"
            >
              <Phone size={14} strokeWidth={1.75} className="text-copper-500" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-sm hover:bg-copper-400 active:bg-copper-600 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
            >
              Demander un devis
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-bark-900 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Menu mobile plein écran */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation mobile"
        className={`fixed inset-0 z-50 md:hidden bg-cream-50 flex flex-col transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Header du menu */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-stone-200/70">
          <span className="font-display text-xl text-bark-900">Poivre & Salé</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-bark-900 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Liens */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-7">
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
        </nav>

        {/* Pied du menu */}
        <div className="flex flex-col items-center gap-4 px-6 pb-12">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 font-sans text-sm text-bark-700"
          >
            <Phone size={14} strokeWidth={1.75} className="text-copper-500" />
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </>
  )
}
