'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FEATURED_GALLERY_ITEMS, GALLERY_ITEMS } from '@/lib/gallery-data'

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
    <section id="galerie" className="scroll-mt-24 md:scroll-mt-28 bg-cream-50 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-600 mb-4">
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

        <div
          ref={scrollRef}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          className="flex gap-4 overflow-x-auto pb-4 -mx-6 md:-mx-8 px-6 md:px-8 snap-x snap-mandatory scrollbar-hide"
        >
          {FEATURED_GALLERY_ITEMS.map((item) => (
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
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-100 transition-all"
          >
            Voir les {GALLERY_ITEMS.length} photos
            <ChevronRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
