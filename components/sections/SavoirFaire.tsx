'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Flame, Leaf, Clock } from 'lucide-react'

const points = [
  { icon: Flame, label: 'Four à bois mobile' },
  { icon: Leaf, label: 'Ingrédients locaux' },
  { icon: Clock, label: 'Préparation sur place' },
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
          {/* Illustration */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-cream-200 flex items-center justify-center">
            {/* Tarte flambée SVG placeholder */}
            <svg
              width="240"
              height="240"
              viewBox="0 0 240 240"
              fill="none"
              className="opacity-50"
              aria-hidden="true"
            >
              {/* Plate */}
              <ellipse cx="120" cy="130" rx="100" ry="30" fill="#E8DFD0" />
              {/* Tarte base */}
              <ellipse cx="120" cy="120" rx="95" ry="25" fill="#F5EDD8" />
              {/* Tarte dough */}
              <ellipse cx="120" cy="118" rx="88" ry="22" fill="#EDE0BF" />
              {/* Toppings */}
              <ellipse cx="85" cy="116" rx="12" ry="8" fill="#C75A2A" opacity="0.6" />
              <ellipse cx="120" cy="114" rx="14" ry="8" fill="#D87642" opacity="0.5" />
              <ellipse cx="155" cy="116" rx="12" ry="8" fill="#C75A2A" opacity="0.6" />
              <ellipse cx="100" cy="108" rx="10" ry="6" fill="#A8451B" opacity="0.5" />
              <ellipse cx="140" cy="108" rx="10" ry="6" fill="#A8451B" opacity="0.5" />
              {/* Flame above */}
              <path
                d="M120 40C120 40 105 58 105 72C105 80 112 86 120 86C128 86 135 80 135 72C135 58 120 40 120 40Z"
                fill="#D87642"
                opacity="0.7"
              />
              <path
                d="M120 54C120 54 113 63 113 72C113 77 116 81 120 81C124 81 127 77 127 72C127 63 120 54 120 54Z"
                fill="#C75A2A"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* Texte */}
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Artisanat alsacien
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 mb-6">
              Un savoir-faire<br />transmis avec passion
            </h2>
            <p className="font-sans text-base leading-relaxed text-bark-700 mb-8">
              La flammekueche, c&apos;est une affaire de patience et de précision. Marc utilise un four à bois mobile qu&apos;il installe directement chez vous ou sur votre lieu de réception. Pâte fine faite maison, fromage blanc et crème fraîche du pays, lardons fermiers : chaque détail compte.
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
        </motion.div>
      </div>
    </section>
  )
}
