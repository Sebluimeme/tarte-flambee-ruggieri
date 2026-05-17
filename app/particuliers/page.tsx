import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Traiteur Mariage Tarte Flambée Alsace | Anniversaire | Baptême | Poivre & Salé',
  description:
    "Un traiteur original pour votre mariage, lendemain de mariage, anniversaire ou baptême en Alsace. Tarte flambée au feu de bois à domicile. Devis gratuit.",
  alternates: { canonical: '/particuliers' },
}

const BADGES = [
  '200+ événements depuis 2019',
  'Devis sous 24h',
  'Annulation gratuite',
  'Règlement le jour J',
]

const OCCASIONS = [
  { label: 'Mariages', detail: '150 à 250 personnes', href: '/tarte-flambee-mariage' },
  { label: 'Lendemain de mariage / Brunch de récupération', detail: 'Format détendu, gourmand', href: '/tarte-flambee-mariage' },
  { label: 'Anniversaires', detail: '20 à 120 personnes', href: '/tarte-flambee-anniversaire' },
  { label: 'Baptêmes et communions', detail: 'Repas familial chaleureux', href: '/tarte-flambee-anniversaire' },
  { label: 'Soirées entre amis', detail: 'Dès 20 convives', href: '/contact' },
]

const ARGUMENTS = [
  {
    title: 'Originalité',
    desc: "Fini le traiteur classique. Le four à bois, c'est le spectacle inclus dans le menu — vos invités s'en souviennent six mois plus tard.",
  },
  {
    title: 'Chaleur et convivialité',
    desc: "Vos invités se rassemblent naturellement autour du four. La flamme casse la glace mieux que n'importe quel animateur.",
  },
  {
    title: 'Budget maîtrisé',
    desc: "Formule all-inclusive : un prix par personne, pas de mauvaise surprise. Vous savez exactement combien vous dépensez.",
  },
  {
    title: 'Service à volonté',
    desc: "Tout le monde repart rassasié. Personne ne compte les parts. Les enfants reprennent, les adultes aussi.",
  },
  {
    title: 'On gère tout',
    desc: "Installation, cuisson, service, débarrassage. Vous n'avez qu'à accueillir vos invités et profiter de votre événement.",
  },
]

const FAQ = [
  {
    q: "Combien de temps à l'avance faut-il réserver ?",
    a: "Idéalement 3 à 6 mois à l'avance pour les mariages de mai à septembre, car les dates se remplissent vite. Pour les autres événements, comptez 1 à 2 mois. N'hésitez pas à nous contacter même à 4 semaines — si la date est libre, c'est possible.",
  },
  {
    q: "Que se passe-t-il si l'événement est en extérieur et qu'il pleut ?",
    a: "Nous prévoyons toujours une solution de repli. Une tente ou un abri suffit à protéger le four. Précisez votre lieu lors du devis et nous vous donnons nos recommandations.",
  },
  {
    q: "Peut-on avoir des options végétariennes ou sans gluten ?",
    a: "Oui. Des garnitures végétariennes et sans gluten sont proposées sur demande. Précisez-le dans le formulaire de devis pour que nous adaptions les ingrédients.",
  },
  {
    q: "Le règlement se fait quand ?",
    a: "Le règlement se fait le jour de la prestation, après le service. Aucun acompte demandé à la réservation — vous engagez uniquement la date.",
  },
]

export default function ParticuliersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Mariage · Anniversaire · Baptême · Entre amis
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
            Votre événement, une ambiance unique.
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl mx-auto mb-8">
            La tarte flambée cuite au feu de bois chez vous — parce que le meilleur traiteur est
            celui dont vos invités parlent encore six mois après.
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
              Demander un devis pour mon événement
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

      {/* Idéal pour */}
      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Idéal pour
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900">
              Tous vos événements personnels
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OCCASIONS.map((occ) => (
              <Link
                key={occ.label}
                href={occ.href}
                className="group flex items-start gap-3 rounded-2xl bg-cream-100 border border-stone-200 p-5 hover:border-copper-500/40 hover:shadow-sm transition-all"
              >
                <Check size={18} className="text-copper-500 mt-0.5 shrink-0" strokeWidth={1.75} />
                <div>
                  <p className="font-sans font-semibold text-bark-900 group-hover:text-copper-500 transition-colors">{occ.label}</p>
                  <p className="font-sans text-sm text-bark-600">{occ.detail}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Arguments B2C */}
      <section className="bg-cream-100 py-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 text-center mb-12">
            Pourquoi vos invités vont s&apos;en souvenir
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ARGUMENTS.map((arg) => (
              <div key={arg.title} className="rounded-2xl bg-cream-50 border border-stone-200 p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <Check size={18} className="text-copper-500" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-bark-900 mb-1">{arg.title}</h3>
                    <p className="font-sans text-sm leading-relaxed text-bark-600">{arg.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" aria-hidden="true" className="mx-auto mb-6 text-copper-500 opacity-40">
            <path d="M0 32V20C0 8.954 7.163 2.477 21.49 0L23 3.6C16.19 5.2 12.493 8.8 11.91 14.4H18v17.6H0zm22 0V20C22 8.954 29.163 2.477 43.49 0L45 3.6C38.19 5.2 34.493 8.8 33.91 14.4H40v17.6H22z" fill="currentColor"/>
          </svg>
          <blockquote className="font-display text-2xl md:text-3xl font-medium italic text-bark-900 leading-relaxed mb-6">
            &laquo;&nbsp;On a eu Poivre &amp; Salé pour notre mariage en juillet. Tout le monde en parle encore. Le four au milieu du jardin, la cuisson en direct... c&apos;était magique.&nbsp;&raquo;
          </blockquote>
          <p className="font-sans text-sm text-bark-600">
            Marie &amp; Thomas — <span className="text-copper-500">Mariage juillet 2024</span>
          </p>
        </div>
      </section>

      {/* Formules mises en avant */}
      <section className="bg-bark-900 py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-4 text-center">
            Nos formules particuliers
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-cream-50 text-center mb-12">
            Du repas entre amis au grand mariage
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-bark-800 border border-bark-700 p-8">
              <h3 className="font-display text-2xl text-cream-50 mb-2">Standard</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-4xl font-medium text-copper-400">12€</span>
                <span className="font-sans text-sm text-cream-100/50">/pers.</span>
              </div>
              <p className="font-sans text-sm text-cream-100/50 mb-5">Dès 20 personnes</p>
              <ul className="space-y-2.5 mb-6">
                {[
                  'Tartes flambées salées à volonté',
                  'Four à bois et ingrédients inclus',
                  'Service complet',
                  'Déplacement inclus',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-sans text-sm text-cream-100/70">
                    <Check size={15} className="text-copper-400 mt-0.5 shrink-0" strokeWidth={1.75} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-copper-500 p-8">
              <h3 className="font-display text-2xl text-cream-50 mb-2">Premium</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-4xl font-medium text-cream-50">24€</span>
                <span className="font-sans text-sm text-cream-50/70">/pers.</span>
              </div>
              <p className="font-sans text-sm text-cream-50/70 mb-5">Idéal mariage — dès 30 personnes</p>
              <ul className="space-y-2.5 mb-6">
                {[
                  'Crudités en entrée',
                  'Tartes salées + sucrées à volonté',
                  'Boissons à volonté (softs, bière locale)',
                  'Animation autour du four',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-sans text-sm text-cream-50/90">
                    <Check size={15} className="text-cream-50 mt-0.5 shrink-0" strokeWidth={1.75} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/formules"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cream-50 text-bark-900 font-sans font-semibold text-base hover:bg-cream-100 transition-all shadow-md"
            >
              Voir toutes les formules
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 text-center mb-12">
            Questions fréquentes — Particuliers
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
            Votre date est disponible ?
          </h2>
          <p className="font-sans text-base text-bark-600 mb-6">
            Les week-ends de mai à septembre partent vite. Vérifiez dès maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-copper-500 text-cream-50 font-sans font-semibold text-base hover:bg-copper-400 transition-all shadow-md"
            >
              Demander un devis pour mon événement
            </Link>
            <a
              href="tel:+33785621089"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/20 hover:border-bark-900/40 transition-all"
            >
              Nous appeler
            </a>
          </div>
          <p className="font-sans text-xs text-bark-500 mt-4">Devis gratuit · Sans engagement · Annulation gratuite</p>
        </div>
      </section>
    </>
  )
}
