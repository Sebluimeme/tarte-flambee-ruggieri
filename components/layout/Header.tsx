'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'

const navBeforeEvents = [
  { href: '/', label: 'Accueil', exact: true },
  { href: '/formules', label: 'Formules', exact: false },
]

const eventLinks = [
  { href: '/tarte-flambee-mariage', label: 'Mariage' },
  { href: '/tarte-flambee-soiree-entreprise', label: 'Entreprise' },
  { href: '/tarte-flambee-anniversaire', label: 'Anniversaire' },
  { href: '/tarte-flambee-association', label: 'Association & club' },
]

const navAfterEvents = [
  { href: '/galerie', label: 'Galerie', exact: false },
  { href: '/#avis', label: 'Avis', exact: false },
  { href: '/contact', label: 'Contact', exact: false },
]

const PHONE_DISPLAY = '07 85 62 10 89'
const PHONE_HREF    = 'tel:+33785621089'

function useIsActive(href: string, exact: boolean): boolean {
  const pathname = usePathname()
  if (href.includes('#')) return false
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
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen]         = useState(false)
  const [isEventsOpen, setIsEventsOpen] = useState(false)
  const eventsMenuRef = useRef<HTMLDivElement>(null)
  const eventsActive = eventLinks.some((link) => pathname.startsWith(link.href))

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Ferme le menu si on passe en navigation desktop */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const close = (e: MediaQueryListEvent) => { if (e.matches) setIsOpen(false) }
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  useEffect(() => {
    if (!isEventsOpen) return

    const closeOutside = (event: PointerEvent) => {
      if (!eventsMenuRef.current?.contains(event.target as Node)) {
        setIsEventsOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsEventsOpen(false)
    }

    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isEventsOpen])

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
            className="flex flex-col hover:text-copper-600 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm shrink-0"
          >
            <span className="font-display text-xl text-bark-900 leading-tight">Poivre & Salé</span>
            <span className="font-sans text-[10px] text-bark-600 tracking-wide uppercase leading-tight">Cuisinier - Traiteur événementiel</span>
          </Link>

          {/* Nav desktop */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-7"
            aria-label="Navigation principale"
          >
            {navBeforeEvents.map((link) => (
              <NavLink key={link.href} {...link} onClick={() => setIsEventsOpen(false)} />
            ))}

            <div ref={eventsMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setIsEventsOpen((open) => !open)}
                aria-haspopup="menu"
                aria-expanded={isEventsOpen}
                className={`relative inline-flex items-center gap-1 rounded-sm font-sans text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 ${
                  eventsActive ? 'text-bark-900' : 'text-bark-700 hover:text-bark-900'
                }`}
              >
                Vos événements
                <ChevronDown
                  size={15}
                  aria-hidden="true"
                  className={`transition-transform ${isEventsOpen ? 'rotate-180' : ''}`}
                />
                {eventsActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-copper-500" />
                )}
              </button>

              {isEventsOpen && (
                <div
                  role="menu"
                  className="absolute left-1/2 top-[calc(100%+1rem)] w-72 -translate-x-1/2 rounded-2xl border border-stone-200 bg-cream-50 p-2 shadow-xl"
                >
                  <p className="px-3 pb-2 pt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-copper-600">
                    Choisissez votre occasion
                  </p>
                  {eventLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      onClick={() => setIsEventsOpen(false)}
                      className={`block rounded-xl px-3 py-2.5 font-sans text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 ${
                        pathname.startsWith(link.href)
                          ? 'bg-cream-200 font-semibold text-bark-900'
                          : 'text-bark-700 hover:bg-cream-100 hover:text-bark-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navAfterEvents.map((link) => (
              <NavLink key={link.href} {...link} onClick={() => setIsEventsOpen(false)} />
            ))}
          </nav>

          {/* Droite : tél + CTA */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href={PHONE_HREF}
              className="hidden 2xl:flex items-center gap-1.5 font-sans text-sm text-bark-700 hover:text-bark-900 transition-colors"
            >
              <Phone size={14} strokeWidth={1.75} className="text-copper-500" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-copper-600 text-cream-50 font-sans font-medium text-sm hover:bg-copper-700 active:bg-copper-700 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-600 focus:ring-offset-2"
            >
              Vérifier ma date
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            className="lg:hidden p-2 rounded-lg text-bark-900 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
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
      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation mobile"
          className="fixed inset-0 z-50 flex flex-col bg-cream-50 lg:hidden"
        >
        {/* Header du menu */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-stone-200/70">
          <span className="flex flex-col">
            <span className="font-display text-xl text-bark-900 leading-tight">Poivre & Salé</span>
            <span className="font-sans text-[10px] text-bark-600 tracking-wide uppercase leading-tight">Cuisinier - Traiteur événementiel</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-bark-900 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Liens */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <div className="mx-auto flex max-w-sm flex-col gap-5">
              {navBeforeEvents.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-2xl text-bark-800 hover:text-copper-500 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
                >
                  {link.label}
                </Link>
              ))}

              <div className="rounded-2xl border border-stone-200 bg-cream-100 p-5">
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-copper-600">
                  Vos événements
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {eventLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-xl px-3 py-3 font-sans text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500 ${
                        pathname.startsWith(link.href)
                          ? 'bg-bark-900 text-cream-50'
                          : 'bg-cream-50 text-bark-700 hover:text-copper-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navAfterEvents.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-2xl text-bark-800 hover:text-copper-500 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
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
            Vérifier ma date
          </Link>
        </div>
        </div>
      )}
    </>
  )
}
