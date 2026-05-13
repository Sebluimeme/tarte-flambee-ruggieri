'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const formules = [
  {
    name: 'Classique',
    price: '12€',
    unit: '/pers.',
    label: 'Minimum 20 couverts',
    badge: null,
    features: [
      'Tartes flambées à volonté au four à bois',
      'Recettes alsaciennes traditionnelles',
      'Four à bois et ingrédients inclus',
      'Déplacement inclus en zone principale',
    ],
    highlight: false,
    bg: 'bg-cream-100',
    border: 'border-stone-200',
  },
  {
    name: 'Prestige',
    price: '16€',
    unit: '/pers.',
    label: 'Minimum 30 couverts',
    badge: 'Le choix préféré',
    features: [
      'Tout le Classique inclus',
      'Carte étendue (chèvre-miel, forestière, savoyarde)',
      'Boissons soft + bière locale Météor',
      'Service à table',
    ],
    highlight: true,
    bg: 'bg-cream-100',
    border: 'border-copper-500',
  },
  {
    name: 'Illimitée',
    price: '20€',
    unit: '/pers.',
    label: 'Minimum 40 couverts',
    badge: null,
    features: [
      'Tout le Prestige inclus',
      "Riesling d'Alsace à volonté",
      'Animation du four à bois',
      'Tartes flambées dessert (pommes-cannelle, myrtilles)',
    ],
    highlight: false,
    bg: 'bg-cream-100',
    border: 'border-stone-200',
  },
]

export default function Formules() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="formules" className="bg-cream-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Pour chaque occasion
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
            Des formules pensées<br />pour vos événements
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {formules.map((formule, i) => (
            <motion.div
              key={formule.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
              className={`relative ${formule.bg} border ${formule.highlight ? 'border-2 border-copper-500' : formule.border} rounded-2xl p-6 flex flex-col`}
            >
              {formule.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-copper-500 text-cream-50 text-xs font-sans font-medium px-3 py-1 rounded-full">
                    {formule.badge}
                  </span>
                </div>
              )}
              <h3 className="font-display text-2xl md:text-3xl font-medium text-bark-900 mb-2">{formule.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-3xl font-medium text-copper-500">{formule.price}</span>
                <span className="font-sans text-sm text-stone-400">{formule.unit}</span>
              </div>
              <p className="font-sans text-xs text-stone-400 mb-5">{formule.label}</p>
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {formule.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={16} className="text-copper-500 shrink-0" aria-hidden="true" />
                    <span className="font-sans text-sm text-bark-700">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-sans font-medium text-sm transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  formule.highlight
                    ? 'bg-copper-500 text-cream-50 hover:bg-copper-400 focus:ring-copper-500'
                    : 'bg-transparent text-bark-900 border border-bark-900/20 hover:border-bark-900/40 focus:ring-bark-900'
                }`}
              >
                Demander un devis
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="font-sans text-xs text-center text-stone-400 mt-8">
          * Tarifs TTC pour les particuliers, HT pour les professionnels · Déplacement au-delà de 30 km : 0,80€/km
        </p>
      </div>
    </section>
  )
}
