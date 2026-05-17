'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Flame, Leaf } from 'lucide-react'

const points = [
  { icon: Flame, label: 'Four à bois mobile' },
  { icon: Leaf, label: 'Ingrédients locaux' },
]

export default function SavoirFaire() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="savoir-faire" className="bg-cream-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Texte */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 mb-6">
              Un savoir-faire<br />transmis avec passion
            </h2>
            <p className="font-sans text-base leading-relaxed text-bark-700 mb-8">
              La flammekueche, c&apos;est une affaire de patience et de précision. Nous installons notre four à bois mobile directement chez vous ou sur votre lieu de réception. Pâtes laminées fines, fromage blanc et crème fraîche du pays, lardons fermiers : chaque détail compte.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {points.map((point) => (
                <div key={point.label} className="flex items-center gap-2">
                  <point.icon size={20} className="text-copper-500 shrink-0" aria-hidden="true" />
                  <span className="font-sans text-sm text-bark-700 font-medium">{point.label}</span>
                </div>
              ))}
            </div>
            <Link
              href="/#formules"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-100 transition-all focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
            >
              Voir nos formules
            </Link>
          </div>

          <div className="md:order-first relative rounded-2xl overflow-hidden aspect-[4/5]">
            <Image
              src="/media/tarte-flambee-classique-planche.jpg"
              fill
              className="object-cover"
              alt="Tarte flambée alsacienne traditionnelle Poivre & Salé"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
