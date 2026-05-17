'use client'

import Image from 'next/image'
import { useRef, useEffect, useCallback } from 'react'
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

const GALLERY_ITEMS = [
  { src: '/media/IMG_4227-2.jpg', alt: 'Prestation tarte flambée' },
  { src: '/media/IMG_5146.jpg', alt: 'Service tarte flambée' },
  { src: '/media/IMG_6678.jpg', alt: 'Tarte flambée artisanale' },
  { src: '/media/IMG_8186.jpg', alt: 'Four à bois en action' },
  { src: '/media/IMG_8191.jpg', alt: 'Garnitures fraîches' },
  { src: '/media/IMG_8910.jpg', alt: 'Ambiance soirée' },
  { src: '/media/img_1841.jpg', alt: 'Prestation en extérieur' },
  { src: '/media/img_1839.jpg', alt: 'Service flammekueche' },
  { src: '/media/DJI_20250622_161702_334.jpeg', alt: 'Vue aérienne prestation' },
  { src: '/media/DJI_20250622_161640_166.jpeg', alt: 'Vue aérienne four à bois' },
  { src: '/media/IMG_0140.JPG', alt: 'Tarte flambée dorée' },
  { src: '/media/img_0651.jpg', alt: 'Ambiance conviviale' },
  { src: '/media/img_0155.jpg', alt: 'Détail garnitures' },
  { src: '/media/four-bois-flammes.jpg', alt: 'Four à bois en pleine chauffe' },
  { src: '/media/buffet-exterieur.jpg', alt: 'Installation buffet en extérieur' },
]

const SCROLL_AMOUNT = 336
const AUTO_INTERVAL = 4000

export default function Galerie() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

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

  return (
    <section id="galerie" className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              En images
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
              Chaque prestation est unique
            </h2>
          </div>
          <div className="flex items-center gap-2">
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

        <div
          ref={scrollRef}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          className="flex gap-4 overflow-x-auto pb-4 -mx-6 md:-mx-8 px-6 md:px-8 snap-x snap-mandatory scrollbar-hide"
        >
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex-none w-64 md:w-80 aspect-square rounded-2xl overflow-hidden group hover:shadow-md transition-all duration-200 relative snap-start"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
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
