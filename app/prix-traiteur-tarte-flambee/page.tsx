import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prix d’un traiteur tarte flambée : combien ça coûte ?',
  description:
    "Combien coûte un traiteur tarte flambée en Alsace ? Tarifs par personne, ce qui fait varier le prix, exemple de budget pour un mariage ou un événement d'entreprise.",
  alternates: { canonical: '/prix-traiteur-tarte-flambee' },
}

const TARIFS = [
  { name: 'Standard', price: '12€', unit: '/pers.', desc: 'Tartes salées à volonté, dès 30 personnes.' },
  { name: 'Gourmande', price: '17€', unit: '/pers.', desc: 'La formule la plus choisie : salées à volonté + animation autour du four.' },
  { name: 'Premium', price: '24€', unit: '/pers.', desc: 'Salées + sucrées à volonté, un verre de bière offert par personne.' },
  { name: 'Clé en main', price: 'Sur devis', unit: '', desc: 'Mobilier, vaisselle, boissons et service personnalisé selon l’événement.' },
]

const FACTEURS = [
  {
    title: 'Le nombre de convives',
    desc:
      "Les formules sont calculées au prorata du nombre d'invités, avec un minimum de 30 personnes. En dessous de ce seuil, un tarif sur mesure peut être proposé — contactez-nous pour en discuter.",
  },
  {
    title: 'La distance de déplacement',
    desc:
      "Le déplacement est inclus dans une zone principale d'environ 20 km autour de Colmar. Au-delà, une participation aux frais de déplacement peut s'ajouter — elle est toujours indiquée avant la réservation.",
  },
  {
    title: 'Les options choisies',
    desc:
      "Boissons supplémentaires, dessert sucré, décoration alsacienne, équipe de service renforcée, coordination le jour J : chaque option est ajoutée au devis selon vos besoins réels, sans forfait imposé.",
  },
  {
    title: 'Le format de l’événement',
    desc:
      "Un mariage avec formule Premium tout compris (boissons, animation) coûte naturellement plus qu'un repas d'association en formule Standard. Le type d'événement oriente la formule la plus adaptée.",
  },
]

const FAQ = [
  {
    q: "Y a-t-il un acompte à la réservation ?",
    a: "Non. Le règlement se fait le jour de la prestation, après le service. Aucun acompte n'est demandé pour bloquer la date.",
  },
  {
    q: "Le prix affiché inclut-il le déplacement ?",
    a: "Oui, dans la zone principale autour de Colmar (environ 20 km). Au-delà, une participation aux frais de déplacement est ajoutée au devis, communiquée avant toute réservation.",
  },
  {
    q: "Peut-on avoir un tarif pour moins de 30 personnes ?",
    a: "Les formules standards démarrent à 30 personnes. Pour un groupe plus restreint, contactez-nous directement : un tarif adapté peut être étudié selon la date et la configuration.",
  },
  {
    q: "Les options végétariennes ont-elles un coût supplémentaire ?",
    a: "Cette adaptation est proposée sur demande lors du devis. Précisez vos besoins dans le formulaire de contact pour obtenir un chiffrage exact. Notre pâte est préparée sur place à partir de farine de blé T55 : nous ne proposons pas de version sans gluten (détails sur notre page allergènes).",
  },
]

export default function PrixTraiteurPage() {
  return (
    <>
      <section className="bg-cream-100 pt-28 pb-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Budget
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
            Combien coûte un traiteur tarte flambée ?
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl mx-auto">
            Nos tarifs vont de 12€ à 24€ par personne selon la formule, à volonté et dès 30 convives.
            Voici le détail, et ce qui peut faire varier le prix.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 py-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TARIFS.map((t) => (
              <div key={t.name} className="rounded-2xl bg-cream-100 border border-stone-200 p-6">
                <p className="font-display text-xl font-medium text-bark-900 mb-1">{t.name}</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-display text-3xl font-medium text-copper-500">{t.price}</span>
                  {t.unit && <span className="font-sans text-sm text-stone-400">{t.unit}</span>}
                </div>
                <p className="font-sans text-sm leading-relaxed text-bark-700">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-center text-bark-700 italic mt-8">
            Détail complet des formules et de ce qui est inclus :{' '}
            <Link href="/formules" className="text-copper-500 hover:text-copper-400 not-italic font-medium">
              voir toutes les formules
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-cream-100 py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Ce qui fait varier le prix
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900">
              4 facteurs à connaître avant de demander un devis
            </h2>
          </div>
          <div className="space-y-6">
            {FACTEURS.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <Check size={18} className="text-copper-500 mt-1 shrink-0" strokeWidth={1.75} />
                <div>
                  <h3 className="font-sans font-semibold text-bark-900 mb-1">{f.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-bark-700">{f.desc}</p>
                </div>
              </div>
            ))}
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
            Obtenez un devis chiffré pour votre événement
          </h2>
          <p className="font-sans text-base leading-relaxed text-cream-100/70 mb-8 max-w-lg mx-auto">
            Nombre de convives, date, lieu : réponse rapide avec un prix clair, sans surprise.
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
