import Link from 'next/link'
import { Phone } from 'lucide-react'

/**
 * Section "De l'apéritif au dessert".
 * Présente les 3 moments du repas que Marc peut couvrir :
 *   1. L'apéritif (formule sur mesure)
 *   2. Le plat — Tarte flambée au feu de bois (cœur de la prestation)
 *   3. Le dessert — Tartes flambées sucrées
 * + Bloc matériel (chapiteau, tireuse, tables, chaises…) en option.
 * Réutilisée sur la home et les pages événements.
 */
export default function OffreComplete() {
  return (
    <section className="bg-bark-900 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-4">
            De l&apos;apéritif au dessert
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-cream-50 mb-4">
            Marc s&apos;occupe de tout votre repas
          </h2>
          <p className="font-sans text-base leading-relaxed text-cream-200/75 max-w-2xl mx-auto">
            La tarte flambée au feu de bois est le cœur de la prestation. Mais Marc
            peut aussi composer l&apos;apéritif et le dessert — pour un repas complet, sans
            que vous ayez à vous organiser.
          </p>
        </div>

        {/* Les 3 moments */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {/* Apéritif */}
          <div className="rounded-2xl bg-cream-50/[0.04] border border-cream-50/10 p-7 flex flex-col">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-copper-400 mb-3">
              01 — L&apos;apéritif
            </p>
            <h3 className="font-display text-xl font-medium text-cream-50 mb-3">
              Ouvrir le repas
            </h3>
            <p className="font-sans text-sm leading-relaxed text-cream-200/70 flex-1">
              Verrines, planches et bouchées alsaciennes pour accueillir vos convives.
              Formule adaptée à votre événement et à votre nombre de personnes — sur devis.
            </p>
          </div>

          {/* Plat — mis en avant */}
          <div className="rounded-2xl bg-copper-500/20 border border-copper-500/40 p-7 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 rounded-full bg-copper-500 font-sans text-xs font-medium text-cream-50">
                Notre spécialité
              </span>
            </div>
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-copper-400 mb-3 mt-2">
              02 — Le plat
            </p>
            <h3 className="font-display text-xl font-medium text-cream-50 mb-3">
              Tarte flambée au feu de bois
            </h3>
            <p className="font-sans text-sm leading-relaxed text-cream-200/70 flex-1">
              Pâte fine laminée, fromage blanc, oignons et lardons du pays.
              Cuisson en direct au four à bois, une tarte toutes les 90 secondes.
            </p>
          </div>

          {/* Dessert */}
          <div className="rounded-2xl bg-cream-50/[0.04] border border-cream-50/10 p-7 flex flex-col">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-copper-400 mb-3">
              03 — Le dessert
            </p>
            <h3 className="font-display text-xl font-medium text-cream-50 mb-3">
              Finir en douceur
            </h3>
            <p className="font-sans text-sm leading-relaxed text-cream-200/70 flex-1">
              Tarte flambée sucrée, glace, vacherin... Le dessert s&apos;adapte à votre événement.
              Consultez-nous pour composer la fin de repas qui vous ressemble.
            </p>
          </div>
        </div>

        {/* CTA repas complet */}
        <div className="text-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2 focus:ring-offset-bark-900"
          >
            <Phone size={17} aria-hidden="true" />
            Demander un devis repas complet
          </Link>
        </div>

        {/* Séparateur */}
        <div className="border-t border-cream-50/10 mb-12" />

        {/* Matériel en option */}
        <div className="rounded-2xl bg-cream-50/[0.04] border border-cream-50/10 p-8">
          <h3 className="font-display text-2xl font-medium text-cream-50 mb-3">
            Le matériel en option
          </h3>
          <p className="font-sans text-sm leading-relaxed text-cream-200/75 mb-6 max-w-xl">
            Besoin d&apos;équiper votre lieu de réception ? Marc propose en option, sur demande :
            chapiteau, tireuse à bière, tables & chaises, vaisselle et mobilier.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cream-50/10 border border-cream-50/30 text-cream-50 font-sans font-medium text-base hover:bg-cream-50/20 transition-all focus:outline-none focus:ring-2 focus:ring-cream-50 focus:ring-offset-2 focus:ring-offset-bark-900"
          >
            <Phone size={17} aria-hidden="true" />
            Renseignements matériel
          </Link>
        </div>
      </div>
    </section>
  )
}
