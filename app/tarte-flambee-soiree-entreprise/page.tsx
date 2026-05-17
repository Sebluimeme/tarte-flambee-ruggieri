import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import Galerie from '@/components/sections/Galerie'

export const metadata: Metadata = {
  title: "Traiteur Tarte Flambée Entreprise Alsace | Team Building | Poivre & Salé",
  description:
    "Organisez votre prochain repas d'équipe, séminaire ou soirée de fin d'année autour d'une tarte flambée au feu de bois. 200+ événements depuis 2019. Alsace et environs.",
  alternates: { canonical: '/tarte-flambee-soiree-entreprise' },
}

const BADGES = [
  '200+ événements depuis 2019',
  'Prestataire déclaré et assuré',
  'Devis sous 24h',
  'Annulation gratuite',
]

const AVANTAGES = [
  {
    title: 'Prestataire fiable depuis 2019',
    desc: "200+ événements d'entreprise réalisés. Ponctualité garantie, prestataire déclaré et assuré. Références disponibles sur demande.",
  },
  {
    title: 'Autonomie totale',
    desc: "Installation, service, débarrassage : vous ne touchez à rien. Vos équipes profitent, nous gérons tout de A à Z.",
  },
  {
    title: 'Convivialité garantie',
    desc: "La cuisson en direct au four à bois crée naturellement les échanges entre collègues. Bien plus efficace qu’un séminaire en salle.",
  },
  {
    title: 'Flexibilité',
    desc: "De 20 à 250+ personnes, en intérieur ou extérieur. Nous nous adaptons à votre lieu, votre format et votre budget.",
  },
]

const OCCASIONS = [
  'Repas de fin d’année',
  'Team building et séminaires',
  'Inauguration d’entreprise',
  'Journée portes ouvertes',
  'Pot de départ ou anniversaire d’entreprise',
]

const FAQ = [
  {
    q: "Peut-on obtenir une facture pour la comptabilité de l'entreprise ?",
    a: "Oui. Nous sommes une structure déclarée avec SIRET (812 751 469 00014). Vous recevez une facture en bonne et due forme, avec TVA si applicable, pour intégration directe à votre comptabilité.",
  },
  {
    q: "Quelle formule choisir pour une soirée de fin d'année ?",
    a: "La formule Standard (12€/pers, min. 20) est idéale pour les petites équipes avec budget maîtrisé. La formule Premium ou Clé en main est recommandée pour les grandes soirées avec service complet.",
  },
  {
    q: "Le four à bois nécessite-t-il un espace extérieur ?",
    a: "Un espace extérieur de ~20m² est idéal, mais nous nous adaptons : parking d'entreprise, cour intérieure, terrasse couverte. Nous évaluons la faisabilité lors du devis.",
  },
  {
    q: "Combien de temps dure la prestation ?",
    a: "En général 2h de service actif. Nous arrivons 1h avant pour installer le four et repartons après le nettoyage. Comptez 4h au total sur site.",
  },
  {
    q: "Jusqu'à combien de convives pouvez-vous servir ?",
    a: "De 20 à 250+ convives. Pour les très grands événements (250+), nous adaptons le matériel et l'équipe en conséquence.",
  },
]

export default function SoireeEntreprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-end">
        <Image
          src="/media/four-bois-action.jpg"
          fill
          className="object-cover object-center"
          alt="Four à bois en action pour un événement entreprise"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark-900/20 via-bark-900/35 to-bark-900/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 pt-40 pb-20 w-full text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-4">
            Entreprise · Team building · Séminaire
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-cream-50 mb-6">
            Un repas d&apos;équipe qui crée vraiment du lien.
          </h1>
          <p className="font-sans text-lg leading-relaxed text-cream-200/85 max-w-2xl mx-auto mb-8">
            Parce qu&apos;un bon repas autour d&apos;un four à bois vaut 10 team buildings sur PowerPoint.
            Tarte flambée au feu de bois, en Alsace, pour 20 à 250+ collaborateurs.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {BADGES.map((b) => (
              <span key={b} className="px-4 py-1.5 rounded-full bg-cream-50/10 border border-cream-50/25 font-sans text-sm text-cream-100 backdrop-blur-sm">
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
              Demander un devis entreprise
            </Link>
            <a
              href="tel:+33785621089"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cream-50/10 backdrop-blur-sm text-cream-50 font-sans font-medium text-base border border-cream-50/30 hover:bg-cream-50/20 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
              </svg>
              07 85 62 10 89
            </a>
          </div>
          <p className="font-sans text-xs text-cream-200/60 mt-4">
            Réponse sous 24h — Devis gratuit et sans engagement
          </p>
        </div>
      </section>

      {/* Arguments B2B */}
      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 text-center mb-12">
            Pourquoi les entreprises nous choisissent
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

      {/* Idéal pour */}
      <section className="bg-cream-100 py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Idéal pour
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900">
              Tous les moments forts de votre entreprise
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {OCCASIONS.map((occ) => (
              <div key={occ} className="flex items-center gap-3 rounded-xl bg-cream-50 border border-stone-200 p-4">
                <span className="w-2 h-2 rounded-full bg-copper-500 shrink-0" aria-hidden="true" />
                <span className="font-sans text-base text-bark-800">{occ}</span>
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
                  'Facture TVA',
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
                  'Facture TVA incluse',
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
              Demander un devis entreprise
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
            &laquo;&nbsp;Notre soirée de fin d&apos;année à Mulhouse était un vrai succès. Le four à bois a créé une ambiance formidable — les équipes en parlent encore. Merci&nbsp;!&nbsp;&raquo;
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

      <Galerie />

      {/* CTA bas */}
      <section className="bg-cream-100 py-16 px-6 md:px-8 border-t border-stone-200">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-bark-900 mb-3">
            Prêt à organiser votre soirée ?
          </h2>
          <p className="font-sans text-base text-bark-600 mb-6">
            Devis gratuit, réponse sous 24h. Prestataire déclaré et assuré.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-copper-500 text-cream-50 font-sans font-semibold text-base hover:bg-copper-400 transition-all shadow-md"
            >
              Demander un devis entreprise
            </Link>
            <a
              href="tel:+33785621089"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/20 hover:border-bark-900/40 transition-all"
            >
              Nous appeler
            </a>
          </div>
          <p className="font-sans text-xs text-bark-500 mt-4">Devis gratuit · Sans engagement · Prestataire déclaré · Annulation gratuite</p>
        </div>
      </section>
    </>
  )
}
