import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: "Tarte flambée pour votre repas d'association ou club · Poivre & Salé",
  description:
    "Tarte flambée au four à bois pour votre repas d'association, club sportif ou amical en Alsace. Formule Association dès 17€/pers, min. 30. Devis gratuit sous 24h.",
  alternates: { canonical: '/tarte-flambee-association' },
}

const BADGES = [
  '200+ événements depuis 2019',
  'Devis sous 24h',
  'Annulation gratuite',
  'Règlement le jour J',
]

const AVANTAGES = [
  {
    title: 'Idéal pour les grands groupes',
    desc: "La formule Association est conçue pour les repas collectifs : dès 30 personnes, crudités en entrée et tartes flambées à volonté. Simple, généreux, efficace.",
  },
  {
    title: 'Partout en Alsace et dans les Vosges',
    desc: "Marc couvre un rayon de 80 km autour du Bonhomme : Bas-Rhin, Haut-Rhin, Vosges, Territoire de Belfort. Salle des fêtes, terrain sportif, chapiteau — il s'adapte.",
  },
  {
    title: 'Budget maîtrisé, prix clair',
    desc: "17€ par personne, tout compris. Pas de mauvaise surprise. Vous payez le jour J, zéro acompte requis.",
  },
  {
    title: 'Une animation qui rassemble',
    desc: "Le four à bois crée un moment de partage authentique. Vos membres repartiront avec un souvenir fort — et l'envie de revenir l'an prochain.",
  },
]

const FAQ = [
  {
    q: "La formule Association inclut-elle le déplacement ?",
    a: "Oui, le déplacement est inclus en zone principale (Alsace et Vosges, rayon ~80 km autour du Bonhomme). Pour les zones plus éloignées, un supplément modique peut s'appliquer — précisé dans le devis.",
  },
  {
    q: "Peut-on payer par chèque ou virement pour une association ?",
    a: "Oui. Marc accepte le paiement le jour J par chèque, virement ou espèces. Une facture vous est remise pour votre comptabilité associative.",
  },
  {
    q: "Y a-t-il un nombre maximum de convives ?",
    a: "Non. Marc a déjà servi jusqu'à 500 personnes lors de fêtes de village. Pour les très grands groupes, un délai de préparation supplémentaire peut être nécessaire.",
  },
  {
    q: "Que faut-il prévoir côté salle ou terrain ?",
    a: "Un espace de ~20m² pour le four, accès électrique (prise standard) et eau à proximité. Marc vous confirme les besoins exacts lors de l'échange devis.",
  },
]

export default function AssociationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Association &amp; club
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
            Tarte flambée pour votre repas d&apos;association ou club
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl mx-auto mb-8">
            Marc anime votre repas associatif avec son four à bois. Crudités en entrée, flammekueche à volonté — la formule parfaite pour fédérer vos membres autour d&apos;un vrai moment alsacien.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {BADGES.map((b) => (
              <span key={b} className="px-4 py-1.5 rounded-full bg-copper-500/10 border border-copper-500/20 font-sans text-sm text-bark-700">
                {b}
              </span>
            ))}
          </div>

          {/* CTA haut */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-copper-500 text-cream-50 font-sans font-semibold text-base hover:bg-copper-400 transition-all shadow-md hover:shadow-lg"
            >
              Recevoir mon devis gratuit
            </Link>
            <a
              href="tel:+33785621089"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/20 hover:border-bark-900/40 hover:bg-cream-200 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
              </svg>
              07 85 62 10 89
            </a>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 text-center mb-12">
            La formule taillée pour les associations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {AVANTAGES.map((av) => (
              <div key={av.title} className="rounded-2xl bg-cream-100 border border-stone-200 p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <Check size={18} className="text-copper-500" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-bark-900 mb-1">{av.title}</h3>
                    <p className="font-sans text-sm leading-relaxed text-bark-600">{av.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formule Association mise en avant */}
      <section className="bg-bark-900 py-20 px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-4">
            Formule phare
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-cream-50 mb-2">
            Association
          </h2>
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="font-display text-5xl font-medium text-copper-400">17€</span>
            <span className="font-sans text-base text-cream-100/50">/pers. · min. 30 personnes</span>
          </div>
          <ul className="space-y-3 text-left max-w-sm mx-auto mb-8">
            {[
              'Crudités en entrée',
              'Tartes flambées à volonté',
              'Pâtes laminées fines maison',
              'Four à bois et ingrédients inclus',
              'Installation et rangement complet',
              'Paiement le jour J — zéro acompte',
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2.5 font-sans text-sm text-cream-100/80">
                <Check size={16} className="text-copper-400 mt-0.5 shrink-0" strokeWidth={1.75} />
                {feat}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-copper-500 text-cream-50 font-sans font-semibold text-base hover:bg-copper-400 transition-all shadow-md"
          >
            Recevoir mon devis gratuit
          </Link>
          <p className="font-sans text-sm text-cream-100/40 mt-4">
            Déplacement inclus en Alsace · Bas-Rhin · Haut-Rhin · Vosges · Territoire de Belfort
          </p>
        </div>
      </section>

      {/* Témoignage */}
      <section className="bg-cream-100 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" aria-hidden="true" className="mx-auto mb-6 text-copper-500 opacity-40">
            <path d="M0 32V20C0 8.954 7.163 2.477 21.49 0L23 3.6C16.19 5.2 12.493 8.8 11.91 14.4H18v17.6H0zm22 0V20C22 8.954 29.163 2.477 43.49 0L45 3.6C38.19 5.2 34.493 8.8 33.91 14.4H40v17.6H22z" fill="currentColor"/>
          </svg>
          <blockquote className="font-display text-2xl md:text-3xl font-medium italic text-bark-900 leading-relaxed mb-6">
            "On organise notre repas de fin de saison chaque année. Depuis qu&apos;on a découvert Marc, on ne change plus ! La tarte flambée à volonté, c&apos;est ce qu&apos;il y a de mieux pour fédérer le groupe."
          </blockquote>
          <p className="font-sans text-sm text-bark-600">
            Club sportif — <span className="text-copper-500">Repas de fin de saison à Saint-Dié-des-Vosges, octobre 2024</span>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 text-center mb-12">
            Questions fréquentes — Association
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

      {/* CTA bas */}
      <section className="bg-cream-100 py-16 px-6 md:px-8 border-t border-stone-200">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-bark-900 mb-3">
            Organisez un repas mémorable
          </h2>
          <p className="font-sans text-base text-bark-600 mb-6">
            Devis gratuit en 24h. Marc vous répond personnellement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-copper-500 text-cream-50 font-sans font-semibold text-base hover:bg-copper-400 transition-all shadow-md"
            >
              Recevoir mon devis gratuit
            </Link>
            <a
              href="tel:+33785621089"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/20 hover:border-bark-900/40 transition-all"
            >
              Appeler Marc
            </a>
          </div>
          <p className="font-sans text-xs text-bark-500 mt-4">Devis gratuit · Sans engagement · Annulation gratuite · Règlement le jour J</p>
        </div>
      </section>
    </>
  )
}
