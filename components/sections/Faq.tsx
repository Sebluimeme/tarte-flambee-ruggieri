'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { homeFaqs } from '@/lib/faq-data'

function FaqItem({ q, a, id }: { q: string; a: string; id: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-3.5 md:py-4 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
        aria-expanded={open}
        aria-controls={id}
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
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm md:text-base leading-relaxed text-bark-700 pb-4">{a}</p>
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
    <section className="bg-cream-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-7 md:mb-9">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-600 mb-3">
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
          className="max-w-5xl mx-auto grid md:grid-cols-2 md:gap-x-10"
        >
          {homeFaqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} id={`faq-answer-${i}`} />
          ))}
        </motion.div>
        <p className="mt-7 text-center font-sans text-sm text-bark-700">
          Une autre question ?{' '}
          <Link
            href="/contact"
            className="font-medium text-copper-600 underline underline-offset-4 hover:text-copper-500 focus:outline-none focus:ring-2 focus:ring-copper-500 rounded-sm"
          >
            Écrivez-nous
          </Link>
        </p>
      </div>
    </section>
  )
}
