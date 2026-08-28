import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Le four à bois mobile pour événement : comment ça marche',
  description:
    "Comment fonctionne un four à bois mobile pour tarte flambée événementielle : température, temps de cuisson, bois utilisé, installation. Le fonctionnement expliqué.",
  alternates: { canonical: '/four-a-bois-mobile-evenement' },
}

const ETAPES = [
  {
    step: '01',
    title: 'Le four et son installation',
    desc:
      "Construit en briques réfractaires et monté sur remorque, le four est transporté directement sur le lieu de votre événement. L'installation prend environ 45 minutes : montage, mise en place et premiers réglages, sans que vous ayez à intervenir.",
  },
  {
    step: '02',
    title: 'La chauffe',
    desc:
      "Le four monte à 350°C en 45 minutes. Cette température est maintenue pendant toute la durée de la prestation, ce qui garantit une cuisson régulière du début à la fin du service, même pour un grand nombre de convives.",
  },
  {
    step: '03',
    title: 'Le bois utilisé',
    desc:
      "Hêtre et charme secs, provenant des forêts vosgiennes. Pas de bois traité ni de briquettes industrielles — la fumée doit sentir la forêt, pas l'usine. C'est ce bois qui donne à la pâte son léger goût fumé caractéristique.",
  },
  {
    step: '04',
    title: 'La cuisson',
    desc:
      "À 350°C, une tarte flambée cuit en 3 à 4 minutes. La chaleur intense et directe donne une pâte craquante en surface, moelleuse à cœur — une texture qu'un four électrique domestique ne reproduit pas.",
  },
]

export default function FourABoisPage() {
  return (
    <>
      <section className="bg-cream-100 pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Le four à bois
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
            Comment fonctionne un four à bois mobile
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl mx-auto">
            De l&apos;installation à la cuisson : le fonctionnement réel du four qui donne à la
            tarte flambée son goût de feu de bois, directement sur le lieu de votre événement.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          {ETAPES.map((e) => (
            <div key={e.step} className="flex gap-6 items-start">
              <span className="font-display text-3xl font-medium text-copper-500/50 shrink-0 w-14">
                {e.step}
              </span>
              <div>
                <h2 className="font-display text-2xl font-medium text-bark-900 mb-2">{e.title}</h2>
                <p className="font-sans text-base leading-relaxed text-bark-700">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-100 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Pourquoi ça change tout
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 mb-6">
            Le spectacle fait partie de la prestation
          </h2>
          <p className="font-sans text-base leading-relaxed text-bark-700 max-w-2xl mx-auto">
            Le four s&apos;installe au cœur de la réception. La flamme, la fumée et l&apos;odeur
            du pain créent une ambiance qu&apos;un buffet classique ne peut pas égaler — vos invités
            se rassemblent naturellement autour de la cuisson, plat après plat.
          </p>
        </div>
      </section>

      <section className="bg-bark-900 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-cream-50 mb-6">
            Voir le four en action pour votre événement
          </h2>
          <p className="font-sans text-base leading-relaxed text-cream-100/70 mb-8 max-w-lg mx-auto">
            Marc Ruggieri installe, chauffe, cuit et sert lui-même — de A à Z.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/a-propos"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-cream-50 font-sans font-medium text-base border border-cream-50/25 hover:border-cream-50/50 transition-all"
            >
              Découvrir notre histoire
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
