import Link from 'next/link'
import { Tent, Beer, Armchair, UtensilsCrossed, ArrowUpRight, Phone } from 'lucide-react'

const MATERIEL = [
  { icon: Tent, label: 'Chapiteau' },
  { icon: Beer, label: 'Tireuse à bière' },
  { icon: Armchair, label: 'Tables & chaises' },
  { icon: UtensilsCrossed, label: 'Vaisselle & mobilier' },
]

/**
 * Section "notre offre ne se limite pas à la tarte flambée".
 * - Bloc A : repas complet (apéritif, entrée, accompagnements, dessert) -> renvoi poivresale.fr
 * - Bloc B : matériel & options sur demande (chapiteau, tireuse, tables, chaises...) -> contact
 * Réutilisée sur la home et les pages événements (mariage, entreprise, anniversaire).
 */
export default function OffreComplete() {
  return (
    <section className="bg-bark-900 py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-4">
            Et pas que la tarte flambée
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-cream-50 mb-4">
            On peut s&apos;occuper de tout votre événement
          </h2>
          <p className="font-sans text-base leading-relaxed text-cream-200/75 max-w-2xl mx-auto">
            La tarte flambée au feu de bois est notre signature. Mais selon vos envies,
            nous composons un repas complet et apportons tout le matériel nécessaire à votre réception.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bloc A — Repas complet -> poivresale.fr */}
          <div className="rounded-2xl bg-cream-50/[0.04] border border-cream-50/10 p-8 flex flex-col">
            <h3 className="font-display text-2xl font-medium text-cream-50 mb-3">
              Un repas complet
            </h3>
            <p className="font-sans text-sm leading-relaxed text-cream-200/75 mb-6 flex-1">
              Apéritif, entrée, accompagnements, dessert… Pour un repas traiteur complet
              au-delà de la tarte flambée, notre équipe Poivre &amp; Salé imagine des
              prestations sur mesure. Découvrez tous nos savoir-faire sur notre site dédié.
            </p>
            <a
              href="https://poivresale.fr"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2 focus:ring-offset-bark-900 self-start"
            >
              Découvrir nos prestations sur poivresale.fr
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Bloc B — Matériel & options -> contact */}
          <div className="rounded-2xl bg-cream-50/[0.04] border border-cream-50/10 p-8 flex flex-col">
            <h3 className="font-display text-2xl font-medium text-cream-50 mb-3">
              Le matériel en option
            </h3>
            <p className="font-sans text-sm leading-relaxed text-cream-200/75 mb-5">
              Besoin d&apos;équiper votre lieu de réception ? Nous proposons en option, sur demande :
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-6 flex-1">
              {MATERIEL.map((m) => (
                <li key={m.label} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-copper-500/15 flex items-center justify-center shrink-0">
                    <m.icon size={17} className="text-copper-400" aria-hidden="true" />
                  </div>
                  <span className="font-sans text-sm text-cream-100/85">{m.label}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream-50/10 border border-cream-50/30 text-cream-50 font-sans font-medium text-base hover:bg-cream-50/20 transition-all focus:outline-none focus:ring-2 focus:ring-cream-50 focus:ring-offset-2 focus:ring-offset-bark-900 self-start"
            >
              <Phone size={17} aria-hidden="true" />
              Nous contacter pour le matériel
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
