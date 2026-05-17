'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Truck, Wheat, Flame, Utensils } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    Icon: Truck,
    title: 'Le four arrive',
    description:
      "Notre four à bois mobile s'installe en 30 minutes sur votre lieu de réception. Jardin, salle des fêtes, parking d'entreprise : on s'adapte à votre espace.",
  },
  {
    number: '02',
    Icon: Wheat,
    title: 'La pâte, fraîche du jour',
    description:
      "Fine, croustillante, authentique. Une pâte de qualité, laminée avec soin. Pas de surgelé, jamais.",
  },
  {
    number: '03',
    Icon: Flame,
    title: 'La cuisson en direct',
    description:
      "Vos invités voient, sentent et entendent la cuisson. C'est le spectacle en plus du repas. La convivialité commence avant même la première bouchée.",
  },
  {
    number: '04',
    Icon: Utensils,
    title: 'Le service à volonté',
    description:
      "Tartes salées et sucrées se succèdent tant qu'il y a de l'appétit. Vous ne gérez rien — on est là du début à la fin.",
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
            Comment ça marche ?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
            Vous recevez, on s&apos;occupe du reste
          </h2>
        </div>

        <div ref={ref} className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 relative">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
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
            Règlement le jour de la prestation · Annulation gratuite
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
