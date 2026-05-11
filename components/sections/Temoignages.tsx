'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const temoignages = [
  {
    name: 'Sophie B.',
    location: 'Strasbourg',
    event: 'Mariage juin 2024',
    text: 'Marc a transformé notre mariage en un moment inoubliable. Ses tartes flambées étaient à tomber et il a géré tout avec un professionnalisme remarquable.',
  },
  {
    name: 'Thomas K.',
    location: 'Colmar',
    event: 'Anniversaire décembre 2023',
    text: "Un service impeccable du début à la fin. Nos 80 convives sont repartis ravis. On a déjà pris date pour l'an prochain !",
  },
  {
    name: 'Entreprise Mulhouse',
    location: 'Mulhouse',
    event: 'Séminaire octobre 2023',
    text: "Organisation parfaite, produits de qualité, équipe sympathique. Nos collaborateurs ont adoré ce moment authentiquement alsacien.",
  },
]

export default function Temoignages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="temoignages" className="bg-cream-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Ils nous ont fait confiance
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
            Ce qu&apos;en disent<br />nos clients
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {temoignages.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-cream-50 rounded-2xl p-6 border border-stone-200"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-copper-500 fill-copper-500" aria-hidden="true" />
                ))}
              </div>
              <p className="font-sans text-base leading-relaxed text-bark-700 mb-4">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-sans text-sm font-medium text-bark-900">{t.name} · {t.location}</p>
                <p className="font-sans text-sm text-stone-400">{t.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
