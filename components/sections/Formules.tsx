'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const formules = [
  {
    name: 'Clé en main',
    price: 'Sur devis',
    unit: '',
    label: 'Matériel complet fourni',
    badge: null,
    features: [
      'Four à bois mobile installé sur place',
      'Tables, échelle et pelle professionnelles',
      'Meuble réfrigéré pour les ingrédients',
      'Pâtes laminées fines et ingrédients inclus',
      'Installation et rangement complet',
    ],
    highlight: false,
    bg: 'bg-cream-100',
    border: 'border-stone-200',
  },
  {
    name: 'Standard',
    price: '12€',
    unit: '/pers.',
    label: 'Minimum 20 couverts',
    badge: null,
    features: [
      'Une tarte flambée par personne',
      'Pâtes laminées fines',
      'Recettes traditionnelles alsaciennes',
      'Four à bois et ingrédients inclus',
      'Déplacement inclus en zone principale',
    ],
    highlight: false,
    bg: 'bg-cream-100',
    border: 'border-stone-200',
  },
  {
    name: 'Association',
    price: '17€',
    unit: '/pers.',
    label: 'Minimum 30 couverts',
    badge: 'Le plus populaire',
    features: [
      'Crudités en entrée',
      'Tartes flambées à volonté',
      'Pâtes laminées fines',
      'Four à bois et ingrédients inclus',
    ],
    highlight: true,
    bg: 'bg-cream-100',
    border: 'border-copper-500',
  },
  {
    name: 'Max',
    price: '24€',
    unit: '/pers.',
    label: 'Minimum 30 couverts',
    badge: null,
    features: [
      'Tout le Association inclus',
      'Boissons à volonté (softs, bière locale)',
      'Tartes flambées dessert (pommes-cannelle, myrtilles)',
      'Animation autour du four',
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
          <p className="font-sans text-base leading-relaxed text-bark-700 max-w-2xl mx-auto mt-4">
            Soirées d&apos;entreprise, mariages, anniversaires, repas d&apos;association — nous nous adaptons à chaque occasion, y compris en mode animation de soirée.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
          * Tarifs TTC pour les particuliers, HT pour les professionnels
        </p>
      </div>
    </section>
  )
}
