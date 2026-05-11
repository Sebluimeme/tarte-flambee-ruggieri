'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Quelle est votre zone géographique ?',
    a: "Nous intervenons principalement en Alsace (Bas-Rhin 67 et Haut-Rhin 68) et dans le Grand Est. Des déplacements au-delà sont possibles selon les disponibilités. N'hésitez pas à nous contacter pour vérifier.",
  },
  {
    q: 'Combien de personnes pouvez-vous servir ?',
    a: 'Nous gérons des événements de 30 à 250 convives. Au-delà, contactez-nous pour étudier votre projet.',
  },
  {
    q: 'Fournissez-vous la vaisselle ?',
    a: "Oui, la vaisselle (assiettes, serviettes) est incluse dans toutes nos formules. Nous gérons aussi l'installation et le rangement.",
  },
  {
    q: 'Quelle est votre disponibilité ?',
    a: "Nos dates se réservent souvent plusieurs mois à l'avance, surtout en saison (printemps-été-automne). Nous vous conseillons de prendre contact dès que votre date est fixée.",
  },
  {
    q: 'Quelles sont les options végétariennes ?',
    a: 'Absolument. Nous proposons systématiquement une version végétarienne (fromage blanc, champignons, oignons). D\'autres variantes sont disponibles selon les formules.',
  },
  {
    q: 'Comment se passe le paiement ?',
    a: "Un acompte de 30% est demandé à la réservation. Le solde est réglé le jour de l'événement ou sur facture pour les entreprises.",
  },
]

function FaqItem({ q, a }: { q: string; a: string; index: number }) {
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
            <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
