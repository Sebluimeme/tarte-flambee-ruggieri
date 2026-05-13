'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const villes = [
  'Strasbourg', 'Colmar', 'Mulhouse', 'Sélestat',
  'Obernai', 'Haguenau', 'Saverne', 'Ribeauvillé',
  'Guebwiller', 'Wissembourg', 'Barr', 'Munster',
  'Épinal', 'Saint-Dié-des-Vosges', 'Gérardmer', 'Remiremont',
  'Belfort',
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Carte interactive OpenStreetMap */}
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden border border-stone-200/15 aspect-[4/3]">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=6.85%2C47.35%2C8.05%2C49.05&layer=mapnik&marker=48.1743%2C7.1278"
              className="w-full h-full"
              title="Zone d'intervention Poivre & Salé en Alsace"
              loading="lazy"
              aria-label="Carte interactive de la zone d'intervention de Poivre & Salé en Alsace"
            />
          </div>

          {/* Texte + villes */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-4">
              Où nous intervenons
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-cream-50 mb-6">
              Alsace et alentours
            </h2>
            <p className="font-sans text-base leading-relaxed text-cream-200 mb-8">
              Nous nous déplaçons principalement en Alsace (Bas-Rhin 67 et Haut-Rhin 68), dans les Vosges (88) et le Territoire de Belfort (90), dans un rayon d&apos;environ 80 km autour du Bonhomme. Des déplacements plus lointains dans le Grand Est et le sillon rhénan sont possibles — contactez-nous.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {villes.map((ville) => (
                <span
                  key={ville}
                  className="font-sans text-sm text-cream-100 bg-white/5 border border-stone-200/15 rounded-full px-3 py-1"
                >
                  {ville}
                </span>
              ))}
            </div>
            <p className="font-sans text-sm text-stone-400">
              Votre ville ne figure pas dans la liste ? Écrivez-nous — nous étudions chaque demande.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
