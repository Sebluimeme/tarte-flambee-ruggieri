import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Wheat, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: "À propos — Marc Ruggieri | Tarte Flambée Maison",
  description: "Découvrez l'histoire de Marc Ruggieri, artisan traiteur alsacien depuis 2012, spécialiste de la flammekueche au four à bois.",
}

const valeurs = [
  { icon: Heart, label: 'Une passion transmise' },
  { icon: Wheat, label: 'Ingrédients du terroir' },
  { icon: Users, label: 'Le plaisir partagé' },
]

export default function APropos() {
  return (
    <div className="pt-24 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Notre histoire
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-bark-900">
            Marc Ruggieri,<br />
            artisan de la flammekueche
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-16">
          {/* Illustration placeholder */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-cream-200 flex items-center justify-center">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              className="opacity-30"
              aria-hidden="true"
            >
              <circle cx="60" cy="45" r="28" fill="#A89A82" />
              <path d="M10 110C10 85 35 70 60 70C85 70 110 85 110 110" fill="#A89A82" />
            </svg>
          </div>

          <div>
            <p className="font-sans text-lg leading-relaxed text-bark-700 mb-6">
              Né en Alsace, Marc a appris la flammekueche auprès de son oncle, dans une ferme du Haut-Rhin. Ce qui a commencé comme une passion familiale est devenu, en 2012, une véritable activité artisanale itinérante.
            </p>
            <p className="font-sans text-base leading-relaxed text-bark-700 mb-8">
              Aujourd&apos;hui, il parcourt l&apos;Alsace et le Grand Est avec son four à bois pour apporter un moment de convivialité authentique à vos événements privés ou professionnels.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
            >
              Réserver une date
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valeurs.map((v) => (
            <div key={v.label} className="bg-cream-100 rounded-2xl p-6 border border-stone-200 flex items-center gap-4">
              <v.icon size={24} className="text-copper-500 shrink-0" aria-hidden="true" />
              <span className="font-display text-xl font-medium text-bark-900">{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
