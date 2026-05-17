'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const OCCASIONS = [
  {
    title: "Mariages",
    href: "/tarte-flambee-mariage",
    description:
      "Une animation gourmande qui marque les esprits. Cuisson en direct devant vos invités, ambiance conviviale, formule adaptée jusqu'à 250 personnes.",
    tags: ["Animation", "Jusqu'à 250 pers.", "Service à table"],
    img: "/media/tarte-flambee-classique-planche.jpg",
    alt: "Tarte flambée classique sur planche",
  },
  {
    title: "Soirées d'entreprise",
    href: "/tarte-flambee-soiree-entreprise",
    description:
      "Team-building, fin d'année, inauguration. Une alternative chaleureuse au traiteur classique, qui crée du lien entre les collaborateurs.",
    tags: ["20 à 200 pers.", "Clé en main", "Prestataire assuré"],
    img: "/media/IMG_8910.jpg",
    alt: "Événement d'entreprise autour d'un buffet",
  },
  {
    title: "Anniversaires & fêtes de famille",
    href: "/tarte-flambee-anniversaire",
    description:
      "Pour vos 30, 40, 50, 60 ans ou un grand rassemblement familial. Une prestation qui rassemble petits et grands autour du four à bois.",
    tags: ["Dès 20 couverts", "Ambiance conviviale", "Recettes traditionnelles"],
    img: "/media/tarte-flambee-classique-planche.jpg",
    alt: "Tarte flambée classique sur planche",
  },
  {
    title: "Associations & clubs",
    href: "/tarte-flambee-association",
    description:
      "Repas de club sportif, association culturelle, comité des fêtes. Formule Association dès 30 personnes, 17€/pers. tout compris, règlement le jour J.",
    tags: ["Dès 30 pers.", "17€/pers.", "Salle des fêtes ou chapiteau"],
    img: "/media/IMG_8191.jpg",
    alt: "Repas d'association autour d'une tarte flambée",
  },
]

export default function Occasions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="occasions" className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Pour qui
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 mb-3">
            Chaque événement mérite sa tarte flambée
          </h2>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl">
            De la soirée d&apos;entreprise au mariage de 200 personnes, nous adaptons notre prestation.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {OCCASIONS.map((item, i) => (
            <Link key={item.title} href={item.href}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
                className="bg-cream-100 border border-stone-200 rounded-2xl overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer h-full"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-medium text-bark-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-bark-700 mb-5">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-cream-200 border border-stone-200 font-sans text-xs text-bark-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
