'use client'

import Link from 'next/link'
import { CalendarClock, ArrowRight } from 'lucide-react'

export default function UrgencyBanner() {
  return (
    <section className="bg-copper-500 py-4 md:py-5">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Link
          href="/contact"
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-cream-50 hover:text-cream-100 transition-colors group focus:outline-none focus:ring-2 focus:ring-cream-50 focus:ring-offset-2 focus:ring-offset-copper-500 rounded-sm"
        >
          <span className="inline-flex items-center gap-2 font-sans text-sm md:text-base font-medium text-center">
            <CalendarClock size={18} strokeWidth={1.75} aria-hidden="true" className="shrink-0" />
            Le calendrier estival se remplit vite — Bloquez votre date sans engagement
          </span>
          <span className="inline-flex items-center gap-1 font-sans text-sm md:text-base font-semibold underline underline-offset-4 decoration-cream-50/50 group-hover:decoration-cream-50">
            Vérifier ma date
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </section>
  )
}
