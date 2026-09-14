'use client'

import { useRef } from 'react'
import {
  Armchair,
  Beer,
  Boxes,
  ChevronLeft,
  ChevronRight,
  Flame,
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
  },
  {
    name: 'Tireuse à bière',
    badge: 'En option',
    description: 'Une solution simple pour servir la bière pendant un repas d’équipe, un afterwork ou une soirée.',
    icon: Beer,
    tone: 'from-[#d89c45] via-copper-500 to-bark-900',
  },
  {
    name: 'Tables hautes et mange-debout',
    badge: 'Selon vos besoins',
    description: 'Pour créer des points de rencontre et faciliter les échanges pendant les formats debout.',
    icon: Table2,
    tone: 'from-stone-400 via-bark-600 to-bark-900',
  },
  {
    name: 'Barnum et tonnelle',
    badge: 'Selon la configuration',
    description: 'Un espace abrité pour installer le stand et anticiper les conditions météo de votre événement.',
    icon: TentTree,
    tone: 'from-[#77856d] via-bark-600 to-bark-900',
  },
  {
    name: 'Tables de réception',
    badge: 'En option',
    description: 'Des tables adaptées à un repas assis, à un buffet ou à la présentation des boissons et du service.',
    icon: Table2,
    tone: 'from-copper-300 via-bark-600 to-bark-900',
  },
  {
    name: 'Chaises',
    badge: 'En option',
    description: 'Le mobilier nécessaire pour accueillir confortablement vos collaborateurs, clients ou partenaires.',
    icon: Armchair,
    tone: 'from-stone-500 via-bark-700 to-bark-900',
  },
  {
    name: 'Vaisselle, couverts et verrerie',
    badge: 'En option',
    description: 'Les éléments de table peuvent être prévus pour garder une réception cohérente et bien présentée.',
    icon: UtensilsCrossed,
    tone: 'from-[#b7906b] via-copper-700 to-bark-900',
  },
  {
    name: 'Installation complète',
    badge: 'Accompagnement clé en main',
    description: 'Nous mettons en place le matériel retenu avant l’arrivée des invités, puis nous rangeons après le service.',
    icon: Boxes,
    tone: 'from-copper-500 via-bark-700 to-bark-900',
  },
]

export default function EquipmentCarousel() {
  const trackRef = useRef<HTMLUListElement>(null)

  const move = (direction: -1 | 1) => {
    const track = trackRef.current
    const firstCard = track?.firstElementChild as HTMLElement | null
    if (!track || !firstCard) return

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 20
    track.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    })
  }

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

        <div role="region" aria-roledescription="carrousel" aria-label="Équipements disponibles">
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
                    <div className={['relative flex min-h-52 items-center justify-center overflow-hidden bg-gradient-to-br', item.tone].join(' ')}>
                      <span className="absolute left-5 top-4 font-sans text-sm font-semibold text-cream-50/55">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full border-[28px] border-cream-50/5" aria-hidden="true" />
                      <Icon
                        size={74}
                        strokeWidth={1.25}
                        className="relative text-cream-50 drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                        aria-hidden="true"
                      />
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

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="font-sans text-xs leading-relaxed text-bark-500">
            Faites glisser pour découvrir tout le matériel.
          </p>
          <span className="font-sans text-xs font-semibold text-copper-600">
            8 possibilités
          </span>
        </div>
      </div>
    </section>
  )
}
