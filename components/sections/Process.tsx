'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { MessageSquare, FileCheck, Flame } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    Icon: MessageSquare,
    title: 'Vous nous contactez',
    description:
      "Formulaire en ligne ou appel direct. Précisez la date, le nombre de convives, le type d'événement et vos contraintes.",
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Devis personnalisé sous 24h',
    description:
      "Marc analyse votre demande, vérifie sa disponibilité et vous envoie un devis détaillé. Aucun engagement à ce stade.",
  },
  {
    number: '03',
    Icon: Flame,
    title: 'Intervention sur votre site',
    description:
      "Le jour J, Marc arrive 2h avant le service avec four et ingrédients. Vous accueillez vos invités, il s'occupe du reste.",
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="comment-ca-marche" className="bg-cream-100 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            En 3 étapes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
            De votre demande à votre soirée
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* Ligne pointillée horizontale entre étapes (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] border-t border-dashed border-stone-300" aria-hidden="true" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-copper-500/10 flex items-center justify-center">
                    <step.Icon size={28} strokeWidth={1.5} className="text-copper-500" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 font-sans text-xs font-medium text-stone-400 bg-cream-100 px-1">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-medium text-bark-900 mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-bark-700">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-sans text-sm text-stone-400 mb-8">
            Acompte de 30% à la signature · Solde le jour de la prestation · Devis valable 30 jours
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md"
          >
            Demander mon devis gratuit
          </Link>
        </div>
      </div>
    </section>
  )
}
