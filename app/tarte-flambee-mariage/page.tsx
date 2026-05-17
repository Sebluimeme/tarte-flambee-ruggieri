import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import Galerie from '@/components/sections/Galerie'

export const metadata: Metadata = {
  title: 'Tarte flambée pour votre mariage en Alsace · Poivre & Salé',
  description:
    "Four à bois pour votre mariage en Alsace. Marc se déplace avec son four à bois, recette familiale, service à volonté. Devis gratuit sous 24h. Formule Premium dès 24€/pers.",
  alternates: { canonical: '/tarte-flambee-mariage' },
}

const BADGES = [
  '200+ événements depuis 2019',
  'Devis sous 24h',
  'Annulation gratuite',
  'Règlement le jour J',
]

const AVANTAGES = [
  {
    title: 'Le spectacle que vos invités vont retenir',
    desc: "Le four à bois s'installe au cœur de la réception. La flamme, la fumée et l'odeur du pain créent une ambiance que nul buffet ne peut égaler.",
  },
  {
    title: 'Tout inclus, vous profitez de votre journée',
    desc: "Marc installe, cuit, sert et range. Vous n'avez rien à gérer côté cuisine — juste profiter de votre mariage.",
  },
  {
    title: "Recette familiale, ingrédients frais d'Alsace",
    desc: "Pâtes laminées fines, fromage blanc fermier, oignons d'Alsace, lardons fumés maison. Rien de surgelé, jamais.",
  },
  {
    title: 'Service à volonté pendant ~2h',
    desc: "Les invités reprennent autant qu'ils veulent. Pas de comptage, pas de pénurie — c'est la convivialité alsacienne.",
  },
]

const FAQ = [
  {
    q: "Combien de temps à l'avance faut-il réserver pour un mariage ?",
    a: "Idéalement 3 à 6 mois à l'avance pour les mariages de mai à septembre, car les dates se remplissent vite. N'hésitez pas à nous contacter même à 4 semaines — si la date est libre, c'est possible.",
  },
  {
    q: "La formule Premium convient-elle pour un mariage ?",
    a: "C'est la formule la plus choisie pour les mariages : tout à volonté (tartes salées et sucrées), boissons incluses (softs et bière locale), animation autour du four. Dès 30 convives à 24€/pers.",
  },
  {
    q: "Que se passe-t-il si le mariage est en extérieur et qu'il pleut ?",
    a: "Marc prévoit toujours une solution de repli. Une tente ou un abri suffit à protéger le four. Précisez votre lieu lors du devis et il vous donnera ses recommandations.",
  },
  {
    q: "Peut-on avoir des options végétariennes pour les invités allergiques ?",
    a: "Oui. Des garnitures végétariennes et sans gluten sont proposées sur demande. Précisez-le dans le formulaire de devis.",
  },
]

export default function MariagePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Mariage en Alsace
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
            Tarte flambée pour votre mariage en Alsace
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl mx-auto mb-8">
            Marc se déplace avec son four à bois le jour de votre mariage. Le spectacle de la flamme rassemble vos invités — recette familiale, ingrédients frais, service à volonté.
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
            Pourquoi choisir la tarte flambée au four à bois pour votre mariage ?
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

      {/* Formule mise en avant : Premium */}
      <section className="bg-bark-900 py-20 px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-4">
            Formule recommandée mariage
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-cream-50 mb-2">
            Premium
          </h2>
          <div className="flex items-baseline justify-center gap-1 mb-4">
            <span className="font-display text-5xl font-medium text-copper-400">24€</span>
            <span className="font-sans text-base text-cream-100/50">/pers. · min. 30 personnes</span>
          </div>
          <ul className="space-y-3 text-left max-w-sm mx-auto mb-8">
            {[
              'Crudités en entrée',
              'Tartes flambées salées à volonté',
              'Tartes flambées dessert (pommes-cannelle, myrtilles)',
              'Boissons à volonté (softs, bière locale)',
              'Animation autour du four à bois',
              'Installation et rangement complet',
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
          <p className="font-sans text-sm text-cream-100/40 mt-4">Formule Clé en main aussi disponible sur devis</p>
        </div>
      </section>

      {/* Témoignage */}
      <section className="bg-cream-100 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" aria-hidden="true" className="mx-auto mb-6 text-copper-500 opacity-40">
            <path d="M0 32V20C0 8.954 7.163 2.477 21.49 0L23 3.6C16.19 5.2 12.493 8.8 11.91 14.4H18v17.6H0zm22 0V20C22 8.954 29.163 2.477 43.49 0L45 3.6C38.19 5.2 34.493 8.8 33.91 14.4H40v17.6H22z" fill="currentColor"/>
          </svg>
          <blockquote className="font-display text-2xl md:text-3xl font-medium italic text-bark-900 leading-relaxed mb-6">
            "Marc a fait le spectacle avec son four à bois — tous nos invités ont adoré. La flammekueche était incroyable et Marc est d'une gentillesse rare. On recommande les yeux fermés !"
          </blockquote>
          <p className="font-sans text-sm text-bark-600">
            Sophie & Thomas M. — <span className="text-copper-500">Mariage à Colmar, juin 2025</span>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 text-center mb-12">
            Questions fréquentes — Mariage
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

      <Galerie />

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
              Recevoir mon devis gratuit
            </Link>
            <a
              href="tel:+33785621089"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/20 hover:border-bark-900/40 transition-all"
            >
              Appeler Marc
            </a>
          </div>
          <p className="font-sans text-xs text-bark-500 mt-4">Devis gratuit · Sans engagement · Annulation gratuite</p>
        </div>
      </section>
    </>
  )
}
