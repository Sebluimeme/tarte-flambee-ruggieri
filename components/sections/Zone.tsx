'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

const villes = [
  'Strasbourg', 'Colmar', 'Mulhouse', 'Sélestat',
  'Obernai', 'Haguenau', 'Saverne', 'Wissembourg',
  'Ribeauvillé', 'Guebwiller',
]

export default function Zone() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-bark-900 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-4">
              Où nous intervenons
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-cream-50 mb-6">
              Alsace et alentours
            </h2>
            <p className="font-sans text-base leading-relaxed text-cream-200">
              Marc intervient principalement en Alsace (Bas-Rhin et Haut-Rhin) et dans le Grand Est. Des déplacements plus lointains sont possibles selon disponibilités.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {villes.map((ville) => (
                <div key={ville} className="flex items-center gap-2">
                  <MapPin size={14} className="text-copper-400 shrink-0" aria-hidden="true" />
                  <span className="font-sans text-sm text-cream-100">{ville}</span>
                </div>
              ))}
            </div>
            <p className="font-sans text-sm text-stone-400 italic">
              Hors zone ? Contactez-nous, nous étudions chaque demande.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
