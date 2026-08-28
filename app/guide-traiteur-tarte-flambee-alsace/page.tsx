import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Comment choisir son traiteur tarte flambée en Alsace',
  description:
    "5 critères pour bien choisir un traiteur tarte flambée en Alsace : four à bois ou électrique, formule à volonté, ingrédients frais, zone de déplacement. Guide pratique.",
  alternates: { canonical: '/guide-traiteur-tarte-flambee-alsace' },
}

const CRITERES = [
  {
    title: 'Four à bois ou four électrique ?',
    desc:
      "Un vrai four à bois monte à 350°C et cuit une tarte en 3 à 4 minutes, avec une pâte craquante et légèrement fumée. Un four électrique mobile chauffe moins fort et ne reproduit pas ce goût. Demandez toujours si le four fonctionne au bois — et avec quel bois (le hêtre et le charme secs brûlent proprement, sans odeur chimique).",
  },
  {
    title: 'Formule comptée ou à volonté ?',
    desc:
      "Certains traiteurs facturent à la part, d'autres proposent un forfait à volonté par personne. Le forfait à volonté évite les mauvaises surprises : vous connaissez le prix exact par convive avant l'événement, sans compter les parts pendant la soirée.",
  },
  {
    title: 'Ingrédients frais ou surgelés ?',
    desc:
      "La pâte laminée fraîche, la crème fraîche épaisse et les lardons fumés font toute la différence face à une pâte surgelée. N'hésitez pas à demander d'où viennent les ingrédients et si la pâte est préparée sur place.",
  },
  {
    title: 'Zone de déplacement et frais annexes',
    desc:
      "Vérifiez la zone incluse dans le tarif (souvent une trentaine de kilomètres autour de la base du traiteur) et si des frais de déplacement s'appliquent au-delà. Un devis clair doit préciser ce point avant la réservation.",
  },
  {
    title: 'Service complet ou juste la cuisson ?',
    desc:
      "Installation, cuisson, service à table ou en buffet, débarrassage : certains traiteurs gèrent tout, d'autres livrent seulement les tartes. Pour un événement sans stress, privilégiez une prestation clé en main.",
  },
]

const FAQ = [
  {
    q: "Quelle est la différence entre tarte flambée et flammekueche ?",
    a: "Aucune — ce sont deux noms pour le même plat alsacien : une pâte fine garnie de crème fraîche, d'oignons et de lardons, cuite au four à bois. « Flammekueche » est le nom alsacien, « tarte flambée » sa traduction française.",
  },
  {
    q: "Combien de convives minimum pour réserver un traiteur tarte flambée ?",
    a: "Cela dépend du prestataire. Chez Poivre & Salé, les formules démarrent à partir de 30 personnes ; en dessous, il est possible de demander un tarif sur mesure.",
  },
  {
    q: "Faut-il réserver longtemps à l'avance ?",
    a: "Pour un mariage entre mai et septembre, comptez 3 à 6 mois à l'avance : les dates partent vite. Pour un autre événement, 1 à 2 mois suffisent généralement.",
  },
  {
    q: "Un traiteur tarte flambée peut-il gérer un événement en intérieur ?",
    a: "Oui, à condition que l'espace permette l'installation du four (ventilation, hauteur sous plafond) ou qu'il y ait un accès extérieur proche. Précisez le lieu lors de votre demande de devis.",
  },
]

export default function GuideTraiteurPage() {
  return (
    <>
      <section className="bg-cream-100 pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Guide pratique
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
            Comment choisir son traiteur tarte flambée en Alsace
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl mx-auto">
            Four à bois, formule à volonté, ingrédients frais, zone de déplacement : voici les
            5 questions à poser avant de réserver un traiteur tarte flambée pour votre événement.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {CRITERES.map((c, i) => (
            <div key={c.title} className="rounded-2xl bg-cream-100 border border-stone-200 p-7">
              <p className="font-sans text-sm text-copper-500 font-medium mb-2">Critère {i + 1}</p>
              <h2 className="font-display text-2xl font-medium text-bark-900 mb-3">{c.title}</h2>
              <p className="font-sans text-base leading-relaxed text-bark-700">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-100 py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              En pratique
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900">
              Ce que propose Poivre &amp; Salé
            </h2>
          </div>
          <div className="rounded-2xl bg-bark-900 p-8 md:p-10">
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Four à bois mobile, briques réfractaires, cuisson au hêtre et charme vosgien",
                "Formules à volonté dès 30 personnes, prix fixe par personne",
                "Pâtes laminées fraîches, crème fraîche épaisse, ingrédients de producteurs locaux",
                "Déplacement inclus en zone principale autour de Colmar",
                "Installation, cuisson, service et débarrassage assurés de A à Z",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-cream-100/85">
                  <Check size={16} className="text-copper-400 mt-0.5 shrink-0" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/formules"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all"
              >
                Voir les formules et tarifs
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-cream-50 font-sans font-medium text-base border border-cream-50/25 hover:border-cream-50/50 transition-all"
              >
                Découvrir le four à bois
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 text-center mb-12">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-2xl bg-cream-100 border border-stone-200 p-6">
                <h3 className="font-sans font-semibold text-bark-900 mb-2">{item.q}</h3>
                <p className="font-sans text-sm leading-relaxed text-bark-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bark-900 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-cream-50 mb-6">
            Une question sur votre événement ?
          </h2>
          <p className="font-sans text-base leading-relaxed text-cream-100/70 mb-8 max-w-lg mx-auto">
            Décrivez-nous votre projet, nous répondons rapidement avec un devis clair.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  )
}
