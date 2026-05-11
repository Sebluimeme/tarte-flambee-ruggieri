import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "À propos — Marc Ruggieri | Maison Ruggieri",
  description: "L'histoire de Marc Ruggieri, artisan alsacien passionné de tarte flambée. Son four à bois, ses valeurs, ses producteurs partenaires.",
}

export default function APropos() {
  return (
    <div className="pt-24 bg-cream-50">

      {/* Hero secondaire */}
      <div className="relative bg-bark-900 text-cream-50 py-24 px-6 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-5">
            Notre histoire
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight leading-[1.05]">
            Marc Ruggieri,<br />artisan alsacien
          </h1>
        </div>
        <div className="absolute inset-0 bg-[url('/images/hero-four.jpg')] bg-cover bg-center opacity-20" aria-hidden="true" />
      </div>

      {/* L'histoire */}
      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-start">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-cream-200 flex items-center justify-center">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-30" aria-hidden="true">
              <circle cx="60" cy="45" r="28" fill="#A89A82" />
              <path d="M10 110C10 85 35 70 60 70C85 70 110 85 110 110" fill="#A89A82" />
            </svg>
            <span className="absolute bottom-4 left-4 right-4 text-center font-sans text-xs text-stone-400">
              Photo de Marc à remplacer
            </span>
          </div>

          <div className="space-y-6">
            <p className="font-sans text-lg leading-relaxed text-bark-700">
              Marc Ruggieri a grandi dans une ferme du Haut-Rhin, où la tarte flambée n'était pas une spécialité de restaurant — c'était le repas du vendredi soir, celui qu'on préparait ensemble devant le four à pain encore chaud après la cuisson du pain.
            </p>
            <p className="font-sans text-base leading-relaxed text-bark-700">
              C'est son oncle Franz qui lui a transmis la recette familiale : la pâte fine et craquante, la crème fraîche épaisse, les oignons tranchés à la mandoline, les lardons fumés du boucher du village. Rien de compliqué. Mais tout dans la précision du geste et la chaleur du bois.
            </p>
            <p className="font-sans text-base leading-relaxed text-bark-700">
              En 2019, après quinze ans passés dans la restauration traditionnelle alsacienne, Marc décide de partir à son compte avec un projet simple : apporter la tarte flambée là où les gens se réunissent. Il fait construire son premier four à bois mobile par un artisan ferronnuer de Sainte-Marie-aux-Mines, et lance Maison Ruggieri.
            </p>
            <p className="font-sans text-base leading-relaxed text-bark-700">
              Depuis, il intervient pour des mariages, des fêtes de famille, des soirées d'entreprise — partout en Alsace et dans le Grand Est. Ce qui ne change pas : la pâte préparée le matin, les ingrédients frais, et Marc derrière son four.
            </p>
          </div>
        </div>
      </section>

      {/* Le four à bois */}
      <section className="bg-cream-100 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-start">
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              L&apos;outil
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 mb-6">
              Le four à bois
            </h2>
            <div className="space-y-4 font-sans text-base leading-relaxed text-bark-700">
              <p>
                Le four est construit en briques réfractaires, monté sur remorque pour pouvoir l'amener partout. Il monte à 350°C en 45 minutes et maintient cette chaleur pendant toute la durée de la prestation — c'est ce qui permet de cuire une tarte en 3 à 4 minutes, avec cette texture impossible à reproduire autrement : craquante, légèrement fumée, jamais sèche.
              </p>
              <p>
                Le bois utilisé est du hêtre et du charme sec, provenant des forêts vosgiennes. Pas de bois traité, pas de briquettes. La fumée doit sentir la forêt, pas l'usine.
              </p>
              <p>
                L'installation nécessite environ 45 minutes. Marc gère seul le montage, la chauffe et la cuisson — vous n'avez rien à prévoir côté cuisine.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-200 flex items-center justify-center">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-30" aria-hidden="true">
              <rect x="10" y="30" width="60" height="35" rx="4" fill="#A89A82" />
              <path d="M20 30 L40 10 L60 30" fill="#A89A82" />
              <rect x="32" y="50" width="16" height="15" rx="2" fill="#7A6A54" />
            </svg>
            <span className="absolute bottom-4 left-4 right-4 text-center font-sans text-xs text-stone-400">
              Photo du four à remplacer
            </span>
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Nos valeurs
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900">
              Notre engagement
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            <div className="bg-cream-100 rounded-2xl p-7 border border-stone-200">
              <p className="font-display text-xl font-medium text-bark-900 mb-3">Ingrédients locaux</p>
              <p className="font-sans text-sm leading-relaxed text-bark-700">
                La crème fraîche vient de la Laiterie de Saint-Dié. Les lardons fumés sont préparés par la charcuterie Braun à Lapoutroie. Les oignons — blancs, doux, croquants — viennent d'un maraîcher à Orbey avec qui Marc travaille depuis le début. Rien n'est acheté en grande surface.
              </p>
            </div>
            <div className="bg-cream-100 rounded-2xl p-7 border border-stone-200">
              <p className="font-display text-xl font-medium text-bark-900 mb-3">Recette familiale</p>
              <p className="font-sans text-sm leading-relaxed text-bark-700">
                Pas de pâte industrielle. Pas de crème allégée. La recette est celle de la famille Ruggieri — ajustée au fil des années, jamais trahie. Chaque tarte sort du four comme elle devrait : fine, craquante, généreuse.
              </p>
            </div>
            <div className="bg-cream-100 rounded-2xl p-7 border border-stone-200">
              <p className="font-display text-xl font-medium text-bark-900 mb-3">Rapport humain</p>
              <p className="font-sans text-sm leading-relaxed text-bark-700">
                Marc répond lui-même aux messages. Il visite les lieux en amont si nécessaire. Il est là le jour J, derrière son four, du début à la fin. Pas de sous-traitance, pas d'intermédiaire.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/formules"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
            >
              Découvrir nos formules
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
