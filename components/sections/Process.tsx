'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const UNIVERS = [
  {
    title: 'Buffet & boissons',
    description: 'Pour compléter le repas du premier verre jusqu’au café.',
    features: ['Entrées et pièces apéritives', 'Desserts', 'Tireuse à bière et machine à café'],
    images: [
      {
        src: '/media/buffet-aperitif-traiteur.webp',
        alt: 'Buffet apéritif préparé pour une réception',
      },
      {
        src: '/media/entreprise-tireuse-biere.webp',
        alt: 'Tireuse à bière proposée en option',
      },
      {
        src: '/media/accueil-cafe-entreprise.jpg',
        alt: 'Machine à café installée pour un événement',
      },
    ],
  },
  {
    title: 'Mobilier & réception',
    description: 'Les équipements utiles pour aménager votre lieu selon vos besoins.',
    features: ['Tables, chaises et mange-debout', 'Vaisselle et verrerie', 'Barnums et tonnelles'],
    images: [
      {
        src: '/media/reception-table-dressee-exterieur.webp',
        alt: 'Tables, chaises et vaisselle dressées sous un barnum',
      },
      {
        src: '/media/entreprise-barnums-mange-debout.webp',
        alt: 'Barnums et mange-debout installés dans un jardin',
      },
      {
        src: '/media/table-reception-soiree-entreprise.webp',
        alt: 'Table de réception nappée et dressée',
      },
    ],
  },
]

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null)

  const move = (direction: -1 | 1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth * 0.88, behavior: 'smooth' })
  }

  return (
    <section id="offre-sur-mesure" className="overflow-hidden bg-cream-100 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.18em] text-copper-500">
            Prestation à la carte
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-bark-900 md:text-5xl">
            Bien plus qu&apos;une tarte flambée
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-bark-700 md:text-lg">
            Composez une prestation complète en ajoutant uniquement ce dont votre événement a besoin.
          </p>
        </div>

        <div className="mb-4 flex items-center justify-between md:hidden">
          <p className="font-sans text-sm font-medium text-bark-700">2 univers à découvrir</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Voir les options précédentes"
              className="inline-flex size-10 items-center justify-center rounded-full border border-copper-500 text-copper-500"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Voir les options suivantes"
              className="inline-flex size-10 items-center justify-center rounded-full bg-copper-500 text-cream-50 shadow-sm"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:px-0 md:pb-0"
        >
          {UNIVERS.map((univers) => (
            <article
              key={univers.title}
              className="flex w-[84vw] max-w-[22rem] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-stone-200 bg-cream-50 shadow-sm md:w-auto md:max-w-none"
            >
              <div className="grid h-44 grid-cols-[1.4fr_0.8fr] grid-rows-2 gap-1.5 bg-cream-200 p-1.5 md:h-52">
                {univers.images.map((photo, index) => (
                  <div
                    key={photo.src}
                    className={`relative overflow-hidden ${index === 0 ? 'row-span-2 rounded-l-2xl' : index === 1 ? 'rounded-tr-2xl' : 'rounded-br-2xl'}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 55vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-medium text-bark-900">{univers.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-bark-700">
                  {univers.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {univers.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 font-sans text-sm text-bark-700">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-copper-500" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl bg-cream-200 px-5 py-4 sm:flex-row sm:items-center md:px-6">
          <p className="font-sans text-sm leading-relaxed text-bark-700">
            Options sur devis et selon disponibilité.
          </p>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-copper-500 px-6 py-3 font-sans text-sm font-medium text-cream-50 shadow-sm transition-all hover:bg-copper-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
          >
            Composer ma prestation
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
