'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
} from '@/lib/gallery-data'

const ASPECT_CLASSES = {
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
}

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Toutes')

  const visibleItems = activeCategory === 'Toutes'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <section className="bg-cream-50 px-6 pb-20 md:px-8 md:pb-28" aria-labelledby="gallery-grid-title">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 border-b border-stone-200 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Toutes nos réalisations
            </p>
            <h2 id="gallery-grid-title" className="font-display text-3xl font-medium tracking-tight text-bark-900 md:text-5xl">
              Du four à bois à la table dressée
            </h2>
          </div>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-bark-600 md:text-base">
            Tartes flambées, mobilier, buffets et ambiances : parcourez les prestations déjà réalisées par Poivre &amp; Salé.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filtrer les photos">
          {GALLERY_CATEGORIES.map((category) => {
            const isActive = category === activeCategory
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`min-h-11 rounded-full border px-4 py-2 font-sans text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'border-bark-900 bg-bark-900 text-cream-50'
                    : 'border-bark-900/15 bg-cream-100 text-bark-700 hover:border-copper-500 hover:text-copper-600'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          {visibleItems.length} photos affichées
        </p>

        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-3xl border border-stone-200 bg-cream-100 shadow-sm ${ASPECT_CLASSES[item.orientation]}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className={`object-cover transition-transform duration-500 group-hover:scale-[1.025] ${item.imageClassName ?? 'object-center'}`}
              />
              <span className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bark-900/85 via-bark-900/25 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-5 bottom-5 text-cream-50">
                <span className="block font-display text-xl font-medium leading-tight">{item.label}</span>
                <span className="mt-1 block font-sans text-xs text-cream-100/75">{item.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
