import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import Galerie from '@/components/sections/Galerie'

export const metadata: Metadata = {
  title: 'Tarte flambée à domicile pour votre anniversaire · Poivre & Salé',
  description:
    "Tarte flambée au four à bois pour votre anniversaire en Alsace. Marc se déplace chez vous ou dans votre salle. Dès 12€/pers, min. 20 convives. Devis gratuit sous 24h.",
  alternates: { canonical: '/tarte-flambee-anniversaire' },
}

const BADGES = [
  '200+ événements depuis 2019',
  'Devis sous 24h',
  'Annulation gratuite',
  'Règlement le jour J',
]

const AVANTAGES = [
  {
    title: "L'animation originale que vos invités vont adorer",
    desc: "Oubliez le traiteur classique. Le four à bois de Marc transforme votre anniversaire en soirée alsacienne mémorable — les invités gravitent naturellement autour de la flamme.",
  },
  {
    title: 'À votre domicile ou dans votre salle',
    desc: "Marc s'adapte à votre lieu. Jardin, terrasse, parking, salle communale — il vient chez vous avec tout le matériel nécessaire.",
  },
  {
    title: 'Recette traditionnelle, ingrédients frais',
    desc: "Pâtes laminées fines faites sur place, fromage blanc fermier, oignons et lardons d'Alsace. Rien de surgelé, jamais.",
  },
  {
    title: 'Service à volonté — personne ne repart le ventre vide',
    desc: "Les invités reprennent autant qu'ils le souhaitent pendant ~2h. C'est la convivialité alsacienne dans ce qu'elle a de meilleur.",
  },
]

const FAQ = [
  {
    q: "Faut-il un grand jardin pour accueillir le four à bois ?",
    a: "Non. Un espace de ~15-20m² suffit. Marc s'installe dans un jardin, une cour, un parking ou une terrasse couverte. Il vous conseille lors du devis.",
  },
  {
    q: "Quelle formule choisir pour un anniversaire de 25 personnes ?",
    a: "La formule Standard (12€/pers, min. 20) est parfaite. Pour 30 personnes et plus, la formule Association (17€/pers) avec crudités en entrée et tartes à volonté est idéale.",
  },
  {
    q: "Peut-on commander une tarte flambée sucrée pour le dessert ?",
    a: "Oui ! Marc propose des tartes flambées dessert (pommes-cannelle, myrtilles) en option. À préciser dans le formulaire de devis.",
  },
  {
    q: "Combien de temps à l'avance réserver pour un anniversaire ?",
    a: "Minimum 2 à 3 semaines à l'avance. Pour les dates d'été (mai-septembre), nous recommandons 1 à 2 mois. N'hésitez pas à demander même à courte échéance.",
  },
]

export default function AnniversairePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Anniversaire &amp; fête de famille
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
            Tarte flambée à domicile pour votre anniversaire
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl mx-auto mb-8">
            Marc se déplace chez vous avec son four à bois. Une soirée flammekueche à la maison — chaleureux, original, et tout préparé devant vos invités.
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
            Pourquoi choisir la tarte flambée pour votre anniversaire ?
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
            Formules recommandées anniversaire
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-cream-50 text-center mb-12">
            À partir de 12€ par personne
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-bark-800 border border-bark-700 p-8">
              <h3 className="font-display text-2xl text-cream-50 mb-2">Standard</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-4xl font-medium text-copper-400">12€</span>
                <span className="font-sans text-sm text-cream-100/50">/pers.</span>
              </div>
              <p className="font-sans text-sm text-cream-100/50 mb-5">20 personnes minimum</p>
              <ul className="space-y-2.5">
                {[
                  'Une tarte flambée par personne',
                  'Recettes traditionnelles alsaciennes',
                  'Four à bois et ingrédients inclus',
                  'Déplacement inclus en zone principale',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-sans text-sm text-cream-100/70">
                    <Check size={15} className="text-copper-400 mt-0.5 shrink-0" strokeWidth={1.75} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-copper-500 p-8">
              <div className="inline-block px-3 py-0.5 rounded-full bg-cream-50/20 font-sans text-xs text-cream-50 mb-3">
                Le plus choisi
              </div>
              <h3 className="font-display text-2xl text-cream-50 mb-2">Association</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-4xl font-medium text-cream-50">17€</span>
                <span className="font-sans text-sm text-cream-50/70">/pers.</span>
              </div>
              <p className="font-sans text-sm text-cream-50/70 mb-5">30 personnes minimum</p>
              <ul className="space-y-2.5">
                {[
                  'Crudités en entrée',
                  'Tartes flambées à volonté',
                  'Pâtes laminées fines',
                  'Four à bois et ingrédients inclus',
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
            "Pour les 60 ans de mon père à Sélestat, on avait opté pour la tarte flambée. Marc était ponctuel, professionnel et sa flammekueche était délicieuse. Toute la famille a été bluffée !"
          </blockquote>
          <p className="font-sans text-sm text-bark-600">
            Famille Zimmermann — <span className="text-copper-500">Anniversaire à Sélestat, août 2024</span>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 text-center mb-12">
            Questions fréquentes — Anniversaire
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
            Rendez cet anniversaire inoubliable
          </h2>
          <p className="font-sans text-base text-bark-600 mb-6">
            Devis gratuit, réponse sous 24h. Marc s&apos;occupe de tout.
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
