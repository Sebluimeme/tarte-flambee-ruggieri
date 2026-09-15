'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'

const formules = [
  {
    name: 'Standard',
    price: '12€',
    unit: '/pers.',
    label: 'La formule simple et conviviale — dès 40 personnes',
    badge: null,
    features: [
      '1 tarte flambée salée par personne',
      'Garnitures classiques : nature, gratinée, forestière',
    ],
    highlight: false,
    bg: 'bg-cream-100',
    border: 'border-stone-200',
  },
  {
    name: 'Gourmande',
    price: '17€',
    unit: '/pers.',
    label: 'La formule à volonté — dès 30 personnes',
    badge: 'Le plus populaire',
    features: [
      'Tartes flambées salées à volonté',
      'Garnitures classiques et variées',
    ],
    highlight: true,
    bg: 'bg-cream-100',
    border: 'border-copper-500',
  },
  {
    name: 'Premium',
    price: '24€',
    unit: '/pers.',
    label: 'Salées à volonté + dessert — dès 30 personnes',
    badge: null,
    features: [
      'Tartes flambées salées à volonté',
      'Garnitures classiques et variées',
      'Tartes flambées sucrées en dessert : pommes-cannelle, myrtilles…',
      '1 verre de bière offert par personne',
    ],
    highlight: false,
    bg: 'bg-cream-100',
    border: 'border-stone-200',
  },
  {
    name: 'Clé en main',
    price: 'Sur devis',
    unit: '',
    label: 'Composez librement votre prestation à la carte',
    badge: null,
    features: [
      'Formule tartes flambées au choix',
      'Options selon vos besoins',
      'Mobilier, vaisselle, boissons, tonnelles…',
      'Devis personnalisé',
    ],
    highlight: false,
    bg: 'bg-cream-100',
    border: 'border-stone-200',
  },
]

export default function Formules() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = ref.current
    if (!carousel) return
    carousel.scrollBy({ left: direction * carousel.clientWidth * 0.86, behavior: 'smooth' })
  }

  return (
    <section id="formules" className="bg-cream-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-600 mb-4">
            Pour chaque occasion
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
            Des formules pensées<br />pour vos événements
          </h2>
          <p className="font-sans text-base leading-relaxed text-bark-700 max-w-2xl mx-auto mt-4">
            Soirées d&apos;entreprise, mariages, anniversaires, repas d&apos;association — nous nous adaptons à chaque occasion, y compris en mode animation de soirée.
          </p>
        </div>

        <div className="md:hidden flex items-center justify-between gap-4 mb-4">
          <p className="font-sans text-sm font-medium text-bark-700">
            4 formules à faire défiler
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label="Voir la formule précédente"
              className="size-10 rounded-full border border-copper-500 bg-cream-100 text-copper-500 inline-flex items-center justify-center shadow-sm"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label="Voir la formule suivante"
              className="size-10 rounded-full bg-copper-500 text-cream-50 inline-flex items-center justify-center shadow-sm"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 -mx-6 px-6 pb-4 pt-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 scrollbar-hide"
        >
          {formules.map((formule, i) => (
            <motion.div
              key={formule.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
              className={`relative w-[82vw] max-w-[21rem] shrink-0 snap-center md:w-auto md:max-w-none ${formule.bg} border ${formule.highlight ? 'border-2 border-copper-500' : formule.border} rounded-2xl p-6 flex flex-col`}
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
                Vérifier ma date
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="md:hidden mt-2 text-center font-sans text-xs text-stone-400" aria-hidden="true">
          ← Faites glisser les cartes ou utilisez les flèches →
        </p>

        <p className="font-sans text-sm text-center text-bark-700 italic mt-8 max-w-xl mx-auto">
          Chaque prestation étant unique, les tarifs ci-dessous sont indicatifs. Contactez-nous pour un devis sur mesure.
        </p>
        <p className="font-sans text-sm text-center text-bark-700 mt-3 max-w-2xl mx-auto">
          En dessous du seuil indiqué, la prestation reste possible selon nos disponibilités. Un forfait minimum de prestation et des frais de déplacement peuvent s&apos;appliquer selon le lieu ; ils sont toujours précisés dans le devis.
        </p>
      </div>
    </section>
  )
}
