'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const formules = [
  {
    name: 'Formule Découverte',
    label: 'Dès 30 personnes',
    description: "2h de service, jusqu'à 100 convives. Tartes flambées classiques et fromage blanc. Idéal pour les anniversaires et repas de famille.",
    features: ['Installation incluse', 'Service 2h', 'Vaisselle fournie'],
    badge: null,
    bg: 'bg-cream-100',
    border: 'border-stone-200',
  },
  {
    name: 'Formule Mariage',
    label: 'À partir de 80 personnes',
    description: "Service 3h à 4h, jusqu'à 250 convives. Gamme complète : classique, saumon, chèvre-miel, végétarienne. Formule cocktail ou buffet.",
    features: ['Service 3-4h', 'Gamme premium', 'Chef dédié'],
    badge: 'Populaire',
    bg: 'bg-cream-200',
    border: 'border-stone-300',
  },
  {
    name: 'Formule Entreprise',
    label: 'Équipe ou clients',
    description: 'Idéal pour séminaires, team-building ou réceptions clients. Service adapté, possibilité de personnalisation avec vos couleurs.',
    features: ['Devis sous 24h', 'Facture entreprise', 'Personnalisation'],
    badge: null,
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
              className={`relative ${formule.bg} border ${formule.border} rounded-2xl p-6 flex flex-col`}
            >
              {formule.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-copper-500 text-cream-50 text-xs font-sans font-medium px-3 py-1 rounded-full">
                    {formule.badge}
                  </span>
                </div>
              )}
              <p className="font-sans text-sm text-stone-400 mb-2">{formule.label}</p>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-bark-900 mb-3">{formule.name}</h3>
              <p className="font-sans text-base leading-relaxed text-bark-700 mb-6 flex-1">{formule.description}</p>
              <ul className="flex flex-col gap-2 mb-6">
                {formule.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={16} className="text-copper-500 shrink-0" aria-hidden="true" />
                    <span className="font-sans text-sm text-bark-700">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="font-display text-2xl text-bark-900 font-medium mb-4">Sur devis</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-sm hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
              >
                Demander un devis
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
