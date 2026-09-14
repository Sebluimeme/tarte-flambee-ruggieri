'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Truck, Flame, Sparkles } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    Icon: Truck,
    title: 'Installation',
    description:
      "Nous installons le four mobile sur votre lieu de réception en environ 1 heure.",
  },
  {
    number: '02',
    Icon: Flame,
    title: 'Cuisson sur place',
    description:
      'Les tartes flambées sont préparées et cuites au feu de bois devant vos invités.',
  },
  {
    number: '03',
    Icon: Sparkles,
    title: 'Fin de prestation',
    description:
      'Nous rangeons notre installation et vous profitez pleinement de votre événement.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="comment-ca-marche" className="bg-cream-100 py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Comment ça marche ?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
            Simple, du début à la fin
          </h2>
        </div>

        <div ref={ref} className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-full bg-copper-500/10 flex items-center justify-center">
                    <step.Icon size={25} strokeWidth={1.5} className="text-copper-500" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 font-sans text-xs font-medium text-stone-400 bg-cream-100 px-1">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-bark-900 mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-sm md:text-base leading-relaxed text-bark-700 max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="font-sans text-sm text-stone-400 mb-6">
            Règlement le jour de la prestation · Annulation gratuite
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md"
          >
            Vérifier ma date
          </Link>
        </div>
      </div>
    </section>
  )
}
