import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Process() {
  return (
    <section id="offre-sur-mesure" className="bg-cream-100 py-12 md:py-14 px-6 md:px-8">
      <div className="max-w-6xl mx-auto rounded-3xl border border-stone-200 bg-cream-50 px-6 py-8 md:px-10 md:py-10">
        <div className="grid gap-7 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-12">
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-3">
              Prestation à la carte
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900">
              Bien plus qu&apos;une tarte flambée
            </h2>
          </div>

          <div>
            <p className="font-sans text-base md:text-lg leading-relaxed text-bark-700 mb-2">
              Entrées, desserts, mobilier, vaisselle et tireuse à bière peuvent compléter
              votre formule pour composer une prestation adaptée à votre événement.
            </p>
            <p className="font-sans text-sm text-stone-400 mb-6">
              Options sur devis et selon disponibilité.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-copper-500 px-6 py-3 font-sans text-sm font-medium text-cream-50 shadow-sm transition-all hover:bg-copper-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
            >
              Composer ma prestation
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
