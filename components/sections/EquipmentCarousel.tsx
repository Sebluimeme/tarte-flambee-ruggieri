'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  Armchair,
  Beer,
  Boxes,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Flame,
  Pause,
  Play,
  Table2,
  TentTree,
  UtensilsCrossed,
} from 'lucide-react'

const EQUIPMENT = [
  {
    name: 'Four à bois mobile',
    badge: 'Prestation principale',
    description: 'Le cœur de l’animation : les tartes flambées sont préparées, cuites et servies devant vos invités.',
    icon: Flame,
    tone: 'from-copper-400 via-copper-600 to-bark-900',
    image: '/media/entreprise-cuisson-four-bois.webp',
    imageAlt: 'Tartes flambées en cuisson devant les flammes du four à bois mobile',
    imagePosition: 'object-[center_45%]',
  },
  {
    name: 'Tireuse à bière',
    badge: 'En option',
    description: 'Une solution simple pour servir la bière pendant un repas d’équipe, un afterwork ou une soirée.',
    icon: Beer,
    tone: 'from-[#d89c45] via-copper-500 to-bark-900',
    image: '/media/entreprise-tireuse-biere.webp',
    imageAlt: 'Tireuse à bière installée sur une table nappée pour un événement',
    imagePosition: 'object-[center_52%]',
  },
  {
    name: 'Tables hautes et mange-debout',
    badge: 'Selon vos besoins',
    description: 'Pour créer des points de rencontre et faciliter les échanges pendant les formats debout.',
    icon: Table2,
    tone: 'from-stone-400 via-bark-600 to-bark-900',
    image: '/media/entreprise-installation-barnums-mobilier.webp',
    imageAlt: 'Tables hautes nappées installées sous des barnums devant une entreprise',
    imagePosition: 'object-[45%_58%]',
  },
  {
    name: 'Barnum et tonnelle',
    badge: 'Selon la configuration',
    description: 'Un espace abrité pour installer le stand et anticiper les conditions météo de votre événement.',
    icon: TentTree,
    tone: 'from-[#77856d] via-bark-600 to-bark-900',
    image: '/media/entreprise-barnums-mange-debout.webp',
    imageAlt: 'Barnums et mange-debout installés dans un jardin pour recevoir les invités',
    imagePosition: 'object-center',
  },
  {
    name: 'Tables de réception',
    badge: 'En option',
    description: 'Des tables adaptées à un repas assis, à un buffet ou à la présentation des boissons et du service.',
    icon: Table2,
    tone: 'from-copper-300 via-bark-600 to-bark-900',
    image: null,
    imageAlt: '',
    imagePosition: 'object-center',
  },
  {
    name: 'Chaises',
    badge: 'En option',
    description: 'Le mobilier nécessaire pour accueillir confortablement vos collaborateurs, clients ou partenaires.',
    icon: Armchair,
    tone: 'from-stone-500 via-bark-700 to-bark-900',
    image: null,
    imageAlt: '',
    imagePosition: 'object-center',
  },
  {
    name: 'Vaisselle, couverts et verrerie',
    badge: 'En option',
    description: 'Les éléments de table peuvent être prévus pour garder une réception cohérente et bien présentée.',
    icon: UtensilsCrossed,
    tone: 'from-[#b7906b] via-copper-700 to-bark-900',
    image: null,
    imageAlt: '',
    imagePosition: 'object-center',
  },
  {
    name: 'Machine à café',
    badge: 'En option',
    description: 'Pour terminer le repas avec un café chaud servi simplement à vos collaborateurs et à vos invités.',
    icon: Coffee,
    tone: 'from-[#a97b55] via-bark-600 to-bark-900',
    image: null,
    imageAlt: '',
    imagePosition: 'object-center',
  },
  {
    name: 'Installation complète',
    badge: 'Accompagnement clé en main',
    description: 'Nous mettons en place le matériel retenu avant l’arrivée des invités, puis nous rangeons après le service.',
    icon: Boxes,
    tone: 'from-copper-500 via-bark-700 to-bark-900',
    image: '/media/entreprise-four-mobile-stand.webp',
    imageAlt: 'Four à bois mobile et tables de service installés avant une réception',
    imagePosition: 'object-[center_55%]',
  },
]

export default function EquipmentCarousel() {
  const trackRef = useRef<HTMLUListElement>(null)
  const interactionPausedRef = useRef(false)
  const [isPaused, setIsPaused] = useState(false)

  const move = useCallback((direction: -1 | 1, loop = false) => {
    const track = trackRef.current
    const firstCard = track?.firstElementChild as HTMLElement | null
    if (!track || !firstCard) return

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 20
    const step = firstCard.getBoundingClientRect().width + gap
    const maxScroll = track.scrollWidth - track.clientWidth
    const shouldReturnToStart =
      loop && direction === 1 && track.scrollLeft >= maxScroll - 2

    track.scrollTo({
      left: shouldReturnToStart
        ? 0
        : Math.max(0, Math.min(track.scrollLeft + direction * step, maxScroll)),
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (isPaused || prefersReducedMotion) return

    const timer = window.setInterval(() => {
      if (!interactionPausedRef.current) move(1, true)
    }, 2000)

    return () => window.clearInterval(timer)
  }, [isPaused, move])

  return (
    <section className="overflow-hidden bg-cream-100 py-20 md:py-24" aria-labelledby="equipment-title">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Ce que nous pouvons installer
            </p>
            <h2 id="equipment-title" className="mb-5 font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
              Composez une réception adaptée à votre lieu
            </h2>
            <p className="font-sans text-base leading-relaxed text-bark-600 md:text-lg">
              Four mobile, boissons, mobilier et vaisselle : vous retenez uniquement les éléments utiles. Les disponibilités et chaque option sont précisées dans votre devis.
            </p>
          </div>

          <div className="hidden shrink-0 gap-3 md:flex">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Voir les équipements précédents"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-bark-900/15 bg-cream-50 text-bark-900 shadow-sm transition-colors hover:border-copper-500 hover:text-copper-600"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Voir les équipements suivants"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-bark-900 text-cream-50 shadow-sm transition-colors hover:bg-copper-600"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          role="region"
          aria-roledescription="carrousel"
          aria-label="Équipements disponibles"
          onMouseEnter={() => {
            interactionPausedRef.current = true
          }}
          onMouseLeave={() => {
            interactionPausedRef.current = false
          }}
          onFocusCapture={() => {
            interactionPausedRef.current = true
          }}
          onBlurCapture={() => {
            interactionPausedRef.current = false
          }}
          onTouchStart={() => {
            interactionPausedRef.current = true
          }}
          onTouchEnd={() => {
            interactionPausedRef.current = false
          }}
        >
          <ul
            ref={trackRef}
            className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 scrollbar-hide md:mx-0 md:px-0"
          >
            {EQUIPMENT.map((item, index) => {
              const Icon = item.icon
              return (
                <li
                  key={item.name}
                  className="flex-[0_0_84%] snap-start sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
                >
                  <article className="group flex h-full min-h-[410px] flex-col overflow-hidden rounded-3xl border border-stone-200 bg-cream-50 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className={['relative flex min-h-56 items-center justify-center overflow-hidden bg-gradient-to-br', item.tone].join(' ')}>
                      {item.image ? (
                        <>
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            sizes="(max-width: 639px) 84vw, (max-width: 1023px) 48vw, 32vw"
                            className={['object-cover transition-transform duration-500 group-hover:scale-[1.03]', item.imagePosition].join(' ')}
                          />
                          <span className="absolute inset-0 bg-gradient-to-t from-bark-900/55 via-transparent to-bark-900/10" aria-hidden="true" />
                        </>
                      ) : (
                        <Icon
                          size={74}
                          strokeWidth={1.25}
                          className="relative text-cream-50 drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                          aria-hidden="true"
                        />
                      )}
                      <span className="absolute left-5 top-4 font-sans text-sm font-semibold text-cream-50/55">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full border-[28px] border-cream-50/5" aria-hidden="true" />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <span className="mb-4 w-fit rounded-full bg-cream-200 px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-wide text-copper-700">
                        {item.badge}
                      </span>
                      <h3 className="font-display text-2xl font-medium leading-tight text-bark-900">
                        {item.name}
                      </h3>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-bark-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="font-sans text-xs leading-relaxed text-bark-500">
            Une nouvelle carte apparaît toutes les 2 secondes. Vous pouvez aussi faire glisser le carrousel.
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-pressed={isPaused}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-bark-900/15 bg-cream-50 px-4 font-sans text-xs font-semibold text-bark-900 transition-colors hover:border-copper-500 hover:text-copper-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
            >
              {isPaused ? (
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {isPaused ? 'Relancer' : 'Mettre en pause'}
            </button>
            <span className="font-sans text-xs font-semibold text-copper-600">
              {EQUIPMENT.length} possibilités
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
