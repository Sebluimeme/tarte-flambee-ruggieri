'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

const villes = [
  'Strasbourg', 'Colmar', 'Mulhouse', 'Sélestat',
  'Obernai', 'Haguenau', 'Saverne', 'Ribeauvillé',
  'Guebwiller', 'Wissembourg', 'Barr', 'Munster',
  'Épinal', 'Saint-Dié-des-Vosges', 'Gérardmer', 'Remiremont',
  'Belfort',
]

const mapTiles = [87, 88, 89].flatMap((y) =>
  [131, 132, 133, 134].map((x) => ({ x, y }))
)

function ServiceAreaMap() {
  return (
    <a
      href="https://www.openstreetmap.org/?mlat=48.1743&mlon=7.1278#map=8/48.1743/7.1278"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Voir Le Bonhomme et notre zone d'intervention sur OpenStreetMap"
      className="group relative block order-2 lg:order-1 rounded-2xl overflow-hidden border border-stone-200/15 aspect-[4/3] bg-cream-100 focus:outline-none focus:ring-2 focus:ring-copper-400"
    >
      <div
        className="absolute left-1/2 top-1/2 w-[1024px] h-[768px]"
        style={{ transform: 'translate(-530px, -462px)' }}
        aria-hidden="true"
      >
        {mapTiles.map(({ x, y }) => (
          <div
            key={`${x}-${y}`}
            className="absolute size-64 bg-cover"
            style={{
              left: `${(x - 131) * 256}px`,
              top: `${(y - 87) * 256}px`,
              backgroundImage: `url(https://tile.openstreetmap.org/8/${x}/${y}.png)`,
            }}
          />
        ))}

        <div className="absolute left-[530px] top-[462px] size-72 md:size-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-copper-500 bg-copper-500/15 shadow-[0_0_0_1px_rgba(255,255,255,0.65)]" />
        <MapPin
          className="absolute left-[530px] top-[462px] -translate-x-1/2 -translate-y-full text-copper-600 fill-cream-50 drop-shadow-md"
          size={38}
          strokeWidth={2.5}
        />
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-cream-50/95 px-3 py-1.5 font-sans text-xs font-semibold text-bark-900 shadow-sm">
        Le Bonhomme · zone principale
      </span>
      <span className="absolute bottom-2 right-2 rounded bg-cream-50/90 px-2 py-1 font-sans text-[10px] text-bark-700">
        © OpenStreetMap contributors
      </span>
      <span className="absolute bottom-3 left-3 rounded-full bg-bark-900/85 px-3 py-1.5 font-sans text-xs font-medium text-cream-50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        Ouvrir la carte
      </span>
    </a>
  )
}

export default function Zone() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-bark-900 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <ServiceAreaMap />

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
