import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conseils tarte flambée événementielle en Alsace',
  description:
    "Guides pratiques pour organiser votre événement tarte flambée : bien choisir son traiteur, comprendre les tarifs, le four à bois, les allergènes.",
  alternates: { canonical: '/conseils' },
}

const ARTICLES = [
  {
    href: '/guide-traiteur-tarte-flambee-alsace',
    title: 'Comment choisir son traiteur tarte flambée en Alsace',
    desc: '5 critères pour comparer les prestataires avant de réserver.',
  },
  {
    href: '/prix-traiteur-tarte-flambee',
    title: 'Combien coûte un traiteur tarte flambée ?',
    desc: 'Nos tarifs et les facteurs qui font varier le prix d’un événement à l’autre.',
  },
  {
    href: '/four-a-bois-mobile-evenement',
    title: 'Le four à bois mobile pour événement : comment ça marche',
    desc: 'Installation, chauffe, bois utilisé et cuisson expliqués étape par étape.',
  },
  {
    href: '/tarte-flambee-allergies-sans-gluten',
    title: 'Tarte flambée et allergies : ce qu’il faut savoir',
    desc: 'Gluten, produits laitiers, porc, œufs — ce que contient la recette traditionnelle.',
  },
]

export default function ConseilsPage() {
  return (
    <section className="bg-cream-50 min-h-screen pt-28 pb-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Conseils
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 mb-4">
            Guides pour organiser votre événement
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-xl mx-auto">
            Tout ce qu&apos;il faut savoir avant de réserver une tarte flambée au feu de bois pour
            votre mariage, anniversaire ou événement d&apos;entreprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {ARTICLES.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group flex flex-col justify-between rounded-2xl bg-cream-100 border border-stone-200 p-7 hover:border-copper-500/40 hover:shadow-sm transition-all"
            >
              <div>
                <h2 className="font-display text-xl font-medium text-bark-900 mb-2 group-hover:text-copper-500 transition-colors">
                  {a.title}
                </h2>
                <p className="font-sans text-sm leading-relaxed text-bark-700">{a.desc}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-copper-500 mt-5">
                Lire le guide
                <ArrowRight size={15} strokeWidth={1.75} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
