'use client'

import Image from 'next/image'
import { Flame, Wheat, Users } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  { icon: Flame, label: 'Cuisson au feu de bois' },
  { icon: Wheat, label: 'Pâte fine de qualité' },
  { icon: Users, label: 'À volonté pendant 2h' },
]

export default function Concept() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="concept" className="bg-cream-50 py-20 md:py-28">
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
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              La prestation
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 mb-6">
              Un four à bois qui se déplace chez vous
            </h2>
            <p className="font-sans text-base leading-relaxed text-bark-700 mb-8">
              Nous arrivons avec tout le matériel — four à bois mobile, pâtes laminées fines,
              ingrédients frais d&apos;Alsace. Vous accueillez vos invités, nous nous occupons de tout :
              préparation, cuisson, découpe. Les tartes sortent du four toutes les 90 secondes,
              croustillantes, fumantes, à volonté.
            </p>
            <div className="flex flex-col gap-4">
              {features.map((feat) => (
                <div key={feat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center shrink-0">
                    <feat.icon size={18} className="text-copper-500" aria-hidden="true" />
                  </div>
                  <span className="font-sans text-base text-bark-800 font-medium">{feat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
            <Image
              src="/media/four-bois-action.jpg"
              fill
              className="object-cover"
              alt="Four à bois en action lors d'une prestation Poivre & Salé"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
