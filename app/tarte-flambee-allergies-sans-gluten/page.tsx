import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarte flambée et allergies : ce qu’il faut savoir',
  description:
    "Gluten, produits laitiers, porc, œufs : les allergènes présents dans la tarte flambée traditionnelle, les adaptations possibles et les précautions à connaître avant de réserver.",
  alternates: { canonical: '/tarte-flambee-allergies-sans-gluten' },
}

const POINTS = [
  {
    title: 'Le gluten, présent dans la pâte',
    desc:
      "La pâte est préparée sur place à partir de farine de blé T55. Nous ne proposons pas de version sans gluten : si un invité souffre d'une intolérance ou d'une allergie au gluten, prévenez-nous avant l'événement pour en discuter.",
  },
  {
    title: 'Les produits laitiers, ingrédient central',
    desc:
      "La crème fraîche épaisse est l'ingrédient principal de la recette traditionnelle. Le fromage blanc et certains fromages (Munster, Comté selon la formule) sont utilisés dans certaines variantes de garniture.",
  },
  {
    title: 'Le porc, dans les lardons fumés',
    desc:
      "Les lardons fumés contiennent du porc. Une version végétarienne, préparée sans lardons, est disponible sur demande — précisez-le lors de votre demande de devis.",
  },
  {
    title: 'Les œufs, selon la variante de pâte',
    desc:
      "Présents dans certaines préparations de pâte. En cas d'allergie sévère, signalez-le impérativement avant la commande pour que nous puissions vous conseiller.",
  },
]

export default function AllergiesArticlePage() {
  return (
    <>
      <section className="bg-cream-100 pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            À savoir avant de réserver
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
            Tarte flambée, allergies et sans gluten
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl mx-auto">
            La tarte flambée traditionnelle contient du gluten, des produits laitiers, parfois du
            porc et des œufs. Voici les points à connaître avant de réserver un traiteur pour un
            événement avec des invités allergiques ou intolérants.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {POINTS.map((p) => (
            <div key={p.title} className="border-b border-stone-200 pb-6">
              <h2 className="font-sans text-base font-semibold text-bark-900 mb-1.5">{p.title}</h2>
              <p className="font-sans text-sm leading-relaxed text-bark-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-100 py-16 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-cream-50 border border-stone-200 rounded-2xl p-7">
            <p className="font-sans text-sm leading-relaxed text-bark-700">
              Nos prestations sont réalisées avec du matériel commun. Malgré nos précautions, une
              absence totale de contamination croisée ne peut pas être garantie. Si un de vos
              invités souffre d&apos;une allergie sévère, contactez-nous avant de réserver pour en
              parler directement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            En pratique
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-bark-900 mb-6">
            Précisez vos besoins dès le devis
          </h2>
          <p className="font-sans text-base leading-relaxed text-bark-700 max-w-xl mx-auto mb-8">
            Options végétariennes, garnitures adaptées : indiquez les allergies de vos invités
            dans le formulaire de contact pour que nous en tenions compte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/allergenes"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/15 hover:border-bark-900/30 transition-all"
            >
              Voir la liste complète des allergènes
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
