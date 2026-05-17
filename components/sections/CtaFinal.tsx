'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function CtaFinal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-bark-900 py-20 md:py-28">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-6 md:px-8 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-cream-50 mb-4">
          Prêt à régaler vos convives ?
        </h2>
        <p className="hidden md:block font-sans text-lg leading-relaxed text-cream-200 mb-8">
          Vérifiez votre date dès maintenant. Réponse sous 24h.
        </p>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cream-50 text-bark-900 font-sans font-medium text-base hover:bg-cream-100 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-cream-50 focus:ring-offset-2 focus:ring-offset-bark-900"
        >
          Vérifier ma disponibilité
        </Link>
        <a
          href="tel:+33785621089"
          className="inline-flex items-center justify-center gap-2 mt-4 md:mt-0 md:ml-4 px-8 py-4 rounded-full border border-cream-200 text-cream-50 font-sans font-medium text-base hover:bg-bark-800 transition-all"
        >
          07 85 62 10 89
        </a>
      </motion.div>
    </section>
  )
}
