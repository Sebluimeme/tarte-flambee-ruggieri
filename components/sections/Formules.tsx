'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const formules = [
  {
    name: 'Standard',
    price: '12€',
    unit: '/pers.',
    label: 'La formule simple et conviviale — dès 40 personnes',
    badge: null,
    features: [
      'Service par notre équipe',
      '1 tarte flambée salée par personne',
      'Garnitures classiques : nature, gratinée, forestière',
      'Déplacement inclus en zone principale (20 km autour de Colmar, au-delà participation aux frais de déplacements sur devis)',
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
      'Service complet par notre équipe',
      'Tartes flambées salées à volonté',
      'Garnitures classiques et variées',
      'Animation autour du four',
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
      'Service complet par notre équipe',
      'Tartes flambées salées à volonté',
      'Garnitures classiques et variées',
      'Tartes flambées sucrées en dessert : pommes-cannelle, myrtilles',
      '1 verre de bière offert par personne',
      'Animation complète autour du four',
    ],
    highlight: false,
    bg: 'bg-cream-100',
    border: 'border-stone-200',
  },
  {
    name: 'Clé en main',
    price: 'Sur devis',
    unit: '',
    label: 'Vous profitez, nous nous occupons du reste',
    badge: null,
    features: [
      'Formule tartes flambées au choix',
      'Tables, chaises, mange-debout et tonnelles selon disponibilité',
      'Vaisselle, verrerie et matériel de service',
      'Boissons complémentaires en option',
      'Installation, service et débarrassage',
      'Prestation personnalisée selon votre événement',
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
          <p className="font-sans text-sm text-bark-700 max-w-2xl mx-auto mt-3 font-medium">
            Toutes nos formules incluent le four mobile, la cuisson sur place, une pâte fine et des ingrédients frais.
          </p>
        </div>

        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 -mx-6 px-6 pb-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 scrollbar-hide"
        >
          {formules.map((formule, i) => (
            <motion.div
              key={formule.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
              className={`relative w-[82vw] max-w-[21rem] shrink-0 snap-center md:w-auto md:max-w-none ${formule.highlight ? 'order-first md:order-none' : ''} ${formule.bg} border ${formule.highlight ? 'border-2 border-copper-500' : formule.border} rounded-2xl p-6 flex flex-col`}
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
          Faites glisser vers la gauche ou la droite pour comparer les formules.
        </p>

        <p className="font-sans text-sm text-center text-bark-700 italic mt-8 max-w-xl mx-auto">
          Chaque prestation étant unique, les tarifs ci-dessous sont indicatifs. Contactez-nous pour un devis sur mesure.
        </p>
        <p className="font-sans text-sm text-center text-bark-700 mt-3 max-w-2xl mx-auto">
          En dessous du seuil indiqué, la prestation reste possible selon nos disponibilités. Un forfait minimum de prestation et des frais de déplacement peuvent s&apos;appliquer selon le lieu ; ils sont toujours précisés dans le devis.
        </p>
        <p className="font-sans text-xs text-center text-stone-400 mt-2">
          * Tarifs TTC pour les particuliers, HT pour les professionnels
        </p>
      </div>
    </section>
  )
}
