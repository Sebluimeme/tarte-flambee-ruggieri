import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: "Tarte flambée soirée d'entreprise en Alsace · Poivre & Salé",
  description:
    "Animation four à bois pour votre soirée d'entreprise en Alsace. Facture avec SIRET, devis sous 24h. Marc se déplace avec son four à bois de 20 à 500 convives.",
  alternates: { canonical: '/tarte-flambee-soiree-entreprise' },
}

const BADGES = [
  '200+ événements depuis 2019',
  'Facture SIRET disponible',
  'Devis sous 24h',
  'Annulation gratuite',
]

const AVANTAGES = [
  {
    title: 'Une animation conviviale qui brise la glace',
    desc: "Le spectacle du four à bois crée un point de rassemblement naturel. Vos équipes se mélangent autour de la flamme — bien mieux qu'un buffet classique.",
  },
  {
    title: 'Facture avec numéro de SIRET',
    desc: "Poivre & Salé est une entreprise déclarée (SIRET 812 751 469 00014). Toutes les prestations donnent lieu à une facture déductible.",
  },
  {
    title: 'Zéro logistique pour vous',
    desc: "Marc arrive avec son four, installe, sert et range. Votre seule mission : profiter et fédérer vos équipes.",
  },
  {
    title: 'Du sur-mesure pour chaque groupe',
    desc: "De 20 à 500 convives, en soirée de fin d'année, team building ou pot de départ. Chaque prestation est adaptée à votre contexte.",
  },
]

const FAQ = [
  {
    q: "Peut-on obtenir une facture pour la comptabilité de l'entreprise ?",
    a: "Absolument. Poivre & Salé est une structure déclarée avec SIRET (812 751 469 00014). Vous recevez une facture en bonne et due forme, avec TVA si applicable.",
  },
  {
    q: "Quelle formule choisir pour une soirée de fin d'année en entreprise ?",
    a: "La formule Standard (12€/pers, min. 20) est idéale pour les petites équipes avec budget maîtrisé. La formule Clé en main (sur devis) est recommandée pour les grandes soirées avec service complet.",
  },
  {
    q: "Le four à bois nécessite-t-il un espace extérieur ?",
    a: "Un espace extérieur de ~20m² est idéal, mais Marc s'adapte : parking d'entreprise, cour intérieure, terrasse couverte. Il évaluera la faisabilité lors du devis.",
  },
  {
    q: "Combien de temps dure la prestation ?",
    a: "En général 2h de service actif. Marc arrive 1h avant pour installer le four et repart après le nettoyage. Comptez 4h au total sur site.",
  },
]

export default function SoireeEntreprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Soirée d&apos;entreprise en Alsace
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
            Tarte flambée pour votre soirée d&apos;entreprise en Alsace
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl mx-auto mb-8">
            Marc anime votre soirée avec son four à bois mobile. Une expérience authentique qui fédère vos équipes — facture SIRET, devis gratuit sous 24h.
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
            L&apos;animation qui marque les esprits
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

      {/* Formules */}
      <section className="bg-bark-900 py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-4 text-center">
            Formules recommandées entreprise
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-cream-50 text-center mb-12">
            Choisissez selon la taille de votre équipe
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-bark-800 border border-bark-700 p-8">
              <h3 className="font-display text-2xl text-cream-50 mb-2">Standard</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-4xl font-medium text-copper-400">12€</span>
                <span className="font-sans text-sm text-cream-100/50">/pers.</span>
              </div>
              <p className="font-sans text-sm text-cream-100/50 mb-5">20 personnes minimum</p>
              <ul className="space-y-2.5 mb-6">
                {[
                  'Une tarte flambée par personne',
                  'Four à bois et ingrédients inclus',
                  'Déplacement inclus',
                  'Facture SIRET',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-sans text-sm text-cream-100/70">
                    <Check size={15} className="text-copper-400 mt-0.5 shrink-0" strokeWidth={1.75} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-copper-500 p-8">
              <h3 className="font-display text-2xl text-cream-50 mb-2">Clé en main</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-4xl font-medium text-cream-50">Sur devis</span>
              </div>
              <p className="font-sans text-sm text-cream-50/70 mb-5">Adapté à votre événement</p>
              <ul className="space-y-2.5 mb-6">
                {[
                  'Four à bois + tables + matériel complet',
                  'Meuble réfrigéré sur place',
                  'Service personnalisé',
                  'Installation et rangement complet',
                  'Facture SIRET incluse',
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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cream-50 text-bark-900 font-sans font-semibold text-base hover:bg-cream-100 transition-all shadow-md"
            >
              Recevoir mon devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="bg-cream-100 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" aria-hidden="true" className="mx-auto mb-6 text-copper-500 opacity-40">
            <path d="M0 32V20C0 8.954 7.163 2.477 21.49 0L23 3.6C16.19 5.2 12.493 8.8 11.91 14.4H18v17.6H0zm22 0V20C22 8.954 29.163 2.477 43.49 0L45 3.6C38.19 5.2 34.493 8.8 33.91 14.4H40v17.6H22z" fill="currentColor"/>
          </svg>
          <blockquote className="font-display text-2xl md:text-3xl font-medium italic text-bark-900 leading-relaxed mb-6">
            "Notre soirée de fin d&apos;année à Mulhouse était un vrai succès. Le four à bois a créé une ambiance formidable — les équipes en parlent encore. Merci Marc !"
          </blockquote>
          <p className="font-sans text-sm text-bark-600">
            Jean-Luc B., DRH — <span className="text-copper-500">Soirée de fin d&apos;année à Mulhouse, décembre 2024</span>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 text-center mb-12">
            Questions fréquentes — Entreprise
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
            Prêt à organiser votre soirée ?
          </h2>
          <p className="font-sans text-base text-bark-600 mb-6">
            Devis gratuit, réponse sous 24h, facture SIRET disponible.
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
          <p className="font-sans text-xs text-bark-500 mt-4">Devis gratuit · Sans engagement · Facture SIRET · Annulation gratuite</p>
        </div>
      </section>
    </>
  )
}
