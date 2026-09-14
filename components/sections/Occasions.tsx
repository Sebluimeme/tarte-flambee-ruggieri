'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const OCCASIONS = [
  {
    title: "Mariages",
    href: "/tarte-flambee-mariage",
    description:
      "Une expérience conviviale au feu de bois pour marquer votre journée.",
    img: "/media/tarte-flambee-classique-planche.jpg",
    alt: "Tarte flambée classique crème et lardons servie sur une planche en bois",
  },
  {
    title: "Soirées d'entreprise",
    href: "/tarte-flambee-soiree-entreprise",
    description:
      "Une formule chaleureuse pour réunir vos collaborateurs autrement.",
    img: "/media/buffet-traiteur-soiree-retouche.webp",
    alt: "Chef derrière un buffet de soirée d'entreprise sous un éclairage violet",
  },
  {
    title: "Anniversaires & fêtes de famille",
    href: "/tarte-flambee-anniversaire",
    description:
      "Un repas généreux qui rassemble petits et grands autour du four.",
    img: "/media/anniversaire-famille-partage.webp",
    alt: "Famille partageant des tartes flambées autour d'une table lors d'un anniversaire",
  },
  {
    title: "Associations & clubs",
    href: "/tarte-flambee-association",
    description:
      "Une solution simple et conviviale pour vos repas et rassemblements.",
    img: "/media/garnitures-fraiches.jpg",
    alt: "Poste de préparation en extérieur avec fonds de tartes flambées empilés pour un repas associatif",
  },
]

export default function Occasions() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = ref.current
    if (!carousel) return
    carousel.scrollBy({ left: direction * carousel.clientWidth * 0.84, behavior: 'smooth' })
  }

  return (
    <section id="occasions" className="bg-cream-50 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Pour qui
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 mb-3">
            Pour tous vos événements
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-bark-700 max-w-2xl">
            Mariage, anniversaire, entreprise ou association : choisissez l&apos;occasion qui vous ressemble.
          </p>
        </div>

        <div className="md:hidden flex items-center justify-between mb-4">
          <p className="font-sans text-sm font-medium text-bark-700">4 occasions à découvrir</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label="Voir l'occasion précédente"
              className="size-10 rounded-full border border-copper-500 text-copper-500 inline-flex items-center justify-center"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label="Voir l'occasion suivante"
              className="size-10 rounded-full bg-copper-500 text-cream-50 inline-flex items-center justify-center shadow-sm"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-4 scrollbar-hide md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6"
        >
          {OCCASIONS.map((item, i) => (
            <Link key={item.title} href={item.href} className="w-[78vw] max-w-[19rem] shrink-0 snap-center md:w-auto md:max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
                className="bg-cream-100 border border-stone-200 rounded-2xl overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 78vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl md:text-2xl font-medium text-bark-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-bark-700 mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-copper-500 group-hover:gap-2 transition-all duration-200">
                    Découvrir
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
