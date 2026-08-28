'use client'

import Image from 'next/image'
import { useRef, useEffect, useCallback, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const FILTERS = [
  { id: 'all', label: 'Toutes les photos' },
  { id: 'mariage', label: 'Mariages' },
  { id: 'entreprise', label: 'Entreprise' },
  { id: 'anniversaire', label: 'Anniversaire' },
  { id: 'association', label: 'Associations' },
] as const

type FilterId = (typeof FILTERS)[number]['id']

type GalleryItem = {
  src: string
  alt: string
  categories: Exclude<FilterId, 'all'>[]
  imageClassName?: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  { src: '/media/prestation-tarte-flambee.jpg', alt: 'Stand Poivre & Salé installé en extérieur avec four à bois et tables de service', categories: [] },
  { src: '/media/service-tarte-flambee.jpg', alt: 'Four à bois mobile ouvert avec bûches empilées sous la chambre de cuisson', categories: [] },
  { src: '/media/tarte-flambee-artisanale.jpg', alt: 'Tables dressées sous tente pour une réception servie par Poivre & Salé', categories: [] },
  { src: '/media/cuisson-four-a-bois.jpg', alt: 'Stand de cuisson Poivre & Salé monté sur une place extérieure avec four à bois mobile', categories: [], imageClassName: 'object-right scale-125 origin-right' },
  { src: '/media/garnitures-fraiches.jpg', alt: 'Préparation du poste de cuisson avec piles de fonds de tartes flambées pour un repas associatif', categories: ['association'] },
  { src: '/media/ambiance-soiree.jpg', alt: 'Buffet de soirée d’entreprise animé par Poivre & Salé sous éclairage violet', categories: ['entreprise'] },
  { src: '/media/tarte-flambee-cuisson-flammes-four-bois.jpg', alt: 'Tarte flambée en cuisson devant les flammes du four à bois', categories: [] },
  { src: '/media/tartes-flambees-four-bois-traiteur.jpg', alt: 'Plusieurs tartes flambées cuisent côte à côte dans le four à bois mobile', categories: [] },
  { src: '/media/preparation-tartes-flambees-exterieur.jpeg', alt: 'Table de préparation extérieure avec fonds de tartes flambées empilés devant un bâtiment vitré', categories: [] },
  { src: '/media/repas-association-four-bois-alsace.jpeg', alt: 'Repas d’association autour du four à bois en Alsace', categories: ['association'] },
  { src: '/media/marc-poivre-sale-four-bois-mobile.jpg', alt: 'Marc de Poivre & Salé souriant devant son four à bois mobile', categories: [] },
  { src: '/media/four-bois-mobile-flammes-tarte-flambee.jpg', alt: 'Four à bois mobile allumé avec flammes visibles dans la chambre de cuisson', categories: [] },
  { src: '/media/tarte-flambee-creme-lardons-four-bois.jpg', alt: 'Tarte flambée crème et lardons prête à entrer dans le four à bois', categories: [] },
  { src: '/media/four-bois-flammes.jpg', alt: 'Double foyer du four à bois alimenté par des bûches empilées', categories: [] },
  { src: '/media/buffet-exterieur.jpg', alt: 'Buffet vert installé en extérieur avec four à bois et matériel de traiteur', categories: [] },
  { src: '/media/hero-mariage.jpg', alt: 'Four à bois pour mariage en Alsace', categories: ['mariage'] },
  { src: '/media/tarte-anniversaire-famille.jpg', alt: 'Tarte flambée au four à bois pour un anniversaire en famille', categories: ['anniversaire'] },
  { src: '/media/four-bois-action.jpg', alt: 'Four à bois en action pour une prestation tarte flambée en entreprise', categories: ['entreprise'] },
  { src: '/media/accueil-cafe-entreprise.jpg', alt: 'Détail d’un stand propre pour une réception entreprise', categories: ['entreprise'] },
  { src: '/media/stand-cafe-entreprise.jpg', alt: 'Stand d’accueil installé pour une réception entreprise', categories: ['entreprise'] },
]

const SCROLL_AMOUNT = 336
const AUTO_INTERVAL = 4000

export default function Galerie() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.categories.includes(activeFilter))

  const stopAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  const scrollNext = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' })
    }
  }, [])

  const scrollPrev = useCallback(() => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })
  }, [])

  const startAuto = useCallback(() => {
    stopAuto()
    timerRef.current = setInterval(scrollNext, AUTO_INTERVAL)
  }, [scrollNext, stopAuto])

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [startAuto, stopAuto])

  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
  }, [activeFilter])

  return (
    <section id="galerie" className="scroll-mt-24 md:scroll-mt-28 bg-cream-50 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-8 mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              En images
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
              Chaque prestation est unique
            </h2>
          </div>
          <div className="flex items-center gap-2 self-end">
            <button
              onClick={() => { stopAuto(); scrollPrev(); startAuto() }}
              aria-label="Photo précédente"
              className="w-10 h-10 rounded-full border border-bark-900/15 flex items-center justify-center hover:bg-cream-100 hover:border-bark-900/30 transition-all"
            >
              <ChevronLeft size={18} className="text-bark-900" />
            </button>
            <button
              onClick={() => { stopAuto(); scrollNext(); startAuto() }}
              aria-label="Photo suivante"
              className="w-10 h-10 rounded-full border border-bark-900/15 flex items-center justify-center hover:bg-cream-100 hover:border-bark-900/30 transition-all"
            >
              <ChevronRight size={18} className="text-bark-900" />
            </button>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filtrer la galerie par occasion">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => { stopAuto(); setActiveFilter(filter.id); startAuto() }}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 font-sans text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'border-copper-500 bg-copper-500 text-cream-50 shadow-sm'
                    : 'border-bark-900/15 bg-transparent text-bark-900 hover:border-bark-900/30 hover:bg-cream-100'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          className="flex gap-4 overflow-x-auto pb-4 -mx-6 md:-mx-8 px-6 md:px-8 snap-x snap-mandatory scrollbar-hide"
        >
          {filteredItems.map((item) => (
            <div
              key={item.src}
              className="flex-none w-64 md:w-80 aspect-square rounded-2xl overflow-hidden group hover:shadow-md transition-all duration-200 relative snap-start"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={`object-cover ${item.imageClassName ?? 'object-center'} group-hover:scale-105 transition-transform duration-300`}
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://www.instagram.com/poivre.et.sale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-100 transition-all"
          >
            <InstagramIcon />
            Voir toutes les photos
          </a>
        </div>
      </div>
    </section>
  )
}
