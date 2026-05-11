'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Dans quelle zone géographique intervenez-vous ?',
    a: "Nous intervenons principalement en Alsace (Bas-Rhin 67 et Haut-Rhin 68) et dans le Grand Est. Des déplacements plus lointains sont possibles selon les disponibilités — contactez-nous pour vérifier.",
  },
  {
    q: "Quelle surface faut-il prévoir pour l'installation ?",
    a: "Il faut prévoir un espace minimum de 4 m² pour le four à bois, idéalement en extérieur ou sous un abri bien ventilé. Un accès véhicule pour le déchargement est nécessaire. Nous validons ensemble les contraintes de votre lieu lors de la préparation du devis.",
  },
  {
    q: 'Les tartes flambées sont-elles préparées sur place ?',
    a: "Oui. La pâte est préparée le matin même, les ingrédients sont frais. Tout est cuit en direct au four à bois pendant la prestation. Vos convives voient le four, sentent la fumée de bois, et reçoivent les tartes sorties du feu — c'est l'essence de la prestation.",
  },
  {
    q: 'Que comprend exactement la prestation ?',
    a: "Four à bois mobile, bois de chauffe, pâte fraîche préparée le matin, tous les ingrédients (crème, lardons, oignons, fromages selon formule), service et installation. Vous n'avez à fournir que l'eau et l'électricité (220V standard).",
  },
  {
    q: 'Proposez-vous des formules avec boissons ?',
    a: "Oui, dès la formule Prestige : softs et bière locale à volonté. La formule Illimitée ajoute le Riesling d'Alsace à volonté.",
  },
  {
    q: 'Quel est le délai pour réserver ?',
    a: "Idéalement 2 à 3 mois à l'avance pour les samedis de mai à septembre (haute saison). Pour les autres dates, 3 à 4 semaines suffisent généralement. Contactez-nous pour vérifier la disponibilité.",
  },
  {
    q: 'Intervenez-vous pour les mariages en Alsace ?',
    a: "Oui, c'est même l'une de nos prestations les plus demandées. Nous adaptons le format (buffet cocktail, fin de soirée, déjeuner champêtre) selon vos souhaits et la configuration de votre lieu de réception.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
        aria-expanded={open}
      >
        <span className="font-sans text-base font-medium text-bark-900">{q}</span>
        <ChevronDown
          size={20}
          className={`text-copper-500 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="font-sans text-base leading-relaxed text-bark-700 pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Questions fréquentes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
            Tout ce que vous<br />voulez savoir
          </h2>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
