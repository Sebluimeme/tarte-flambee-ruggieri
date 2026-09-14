import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: 'Formules tarte flambée feu de bois en Alsace',
  description:
    "Prestation tarte flambée à domicile pour mariages, anniversaires et événements d'entreprise en Alsace. Devis gratuit.",
  alternates: { canonical: '/formules' },
};

const FORMULES = [
  {
    name: "Standard",
    price: "12€",
    unit: "/pers.",
    guests: "dès 40 personnes",
    duration: "",
    highlight: false,
    description:
      "La formule simple et conviviale. En dessous de 40 personnes, un devis adapté reste possible.",
    features: [
      "Four à bois mobile et cuisson sur place",
      "1 tarte flambée salée par personne",
      "Pâtes laminées fines",
      "Garnitures classiques : nature, gratinée, forestière",
      "Ingrédients frais",
    ],
    cta: "Demander un devis",
    ctaHref: "/contact",
  },
  {
    name: "Gourmande",
    price: "17€",
    unit: "/pers.",
    guests: "dès 30 personnes",
    duration: "",
    highlight: true,
    badge: "Le plus populaire",
    description:
      "La formule à volonté — parfaite pour les fêtes de famille, associations et repas d'entreprise.",
    features: [
      "Four à bois mobile et cuisson sur place",
      "Tartes flambées salées à volonté",
      "Pâtes laminées fines",
      "Garnitures classiques et variées",
      "Ingrédients frais",
    ],
    cta: "Demander un devis",
    ctaHref: "/contact",
  },
  {
    name: "Premium",
    price: "24€",
    unit: "/pers.",
    guests: "dès 30 personnes",
    duration: "",
    highlight: false,
    description:
      "Une formule généreuse et festive : salées à volonté, dessert sucré et un verre de bière offert.",
    features: [
      "Four à bois mobile et cuisson sur place",
      "Tartes flambées salées à volonté",
      "Garnitures classiques et variées",
      "Tartes flambées sucrées : pommes-cannelle, myrtilles…",
      "1 verre de bière offert par personne",
      "Pâtes laminées fines",
    ],
    cta: "Demander un devis",
    ctaHref: "/contact",
  },
  {
    name: "Clé en main",
    price: "Sur devis",
    unit: "",
    guests: "",
    duration: "",
    highlight: false,
    description:
      "Composez librement votre prestation à la carte selon vos envies et votre événement.",
    features: [
      "Formule tartes flambées au choix",
      "Options selon vos besoins",
      "Mobilier, vaisselle, boissons, tonnelles…",
      "Devis personnalisé",
    ],
    cta: "Demander un devis",
    ctaHref: "/contact",
  },
];

const INCLUS = [
  "Livraison et installation du four à bois",
  "Pâtes laminées fines",
  "Cuisson devant les invités — le spectacle fait partie de l'expérience",
  "Rangement et nettoyage complet après prestation",
  "Devis gratuit et réponse rapide",
];

const OPTIONS = [
  "Garnitures végétariennes supplémentaires",
  "Signalement des allergies ou intolérances au devis",
  "Dessert sucré (tarte alsacienne)",
  "Décoration alsacienne",
  "Équipe de service",
  "Coordination le jour J",
  "Présentation sur chevalet",
];

function CheckIcon({ className = "" }: { className?: string }) {
  return <Check size={16} strokeWidth={1.5} className={`flex-shrink-0 mt-0.5 ${className}`} aria-hidden="true" />;
}

export default function FormulesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Formules
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
            Nos formules de prestation
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl mx-auto">
            De 30 à 500 convives. Avec ou sans service. Toujours avec un four à bois authentique et des pâtes laminées fines.
          </p>
        </div>
      </section>

      {/* Formules */}
      <section className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Intro événementiel */}
          <div className="text-center mb-14">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Pour tous vos événements
            </p>
            <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-2xl mx-auto">
              Nous nous intégrons à vos soirées événementielles — soirées d&apos;entreprise, mariages, anniversaires, repas d&apos;association et fêtes de village. Chaque formule est disponible en mode animation de soirée, avec prise en charge de l&apos;ambiance autour du four.
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 -mx-6 px-6 pb-4 pt-4 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 scrollbar-hide">
            {FORMULES.map((f) => (
              <div
                key={f.name}
                className={`relative w-[82vw] max-w-[21rem] shrink-0 snap-center md:w-auto md:max-w-none rounded-2xl p-8 flex flex-col border transition-all duration-200 ${
                  f.highlight
                    ? "bg-bark-900 border-bark-900 shadow-md"
                    : "bg-cream-100 border-stone-200 hover:shadow-md"
                }`}
              >
                {f.highlight && f.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-copper-500 text-cream-50 text-xs font-sans font-medium whitespace-nowrap">
                    {f.badge}
                  </span>
                )}

                <div className="mb-5">
                  <h2
                    className={`font-display text-2xl md:text-3xl font-medium mb-2 ${
                      f.highlight ? "text-cream-50" : "text-bark-900"
                    }`}
                  >
                    {f.name}
                  </h2>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className={`font-display text-4xl font-medium tracking-tight ${
                        f.highlight ? "text-copper-400" : "text-copper-500"
                      }`}
                    >
                      {f.price}
                    </span>
                    {f.unit && (
                      <span className={`font-sans text-base ${f.highlight ? "text-cream-100/60" : "text-stone-400"}`}>
                        {f.unit}
                      </span>
                    )}
                  </div>
                  <p className={`font-sans text-sm ${f.highlight ? "text-cream-100/60" : "text-stone-400"}`}>
                    {f.guests}{f.duration ? ` · ${f.duration}` : ""}
                  </p>
                </div>

                <p className={`font-sans text-sm leading-relaxed mb-6 ${f.highlight ? "text-cream-100/70" : "text-bark-700"}`}>
                  {f.description}
                </p>

                <ul className="flex-1 space-y-3 mb-8">
                  {f.features.map((feat) => (
                    <li
                      key={feat}
                      className={`flex items-start gap-2.5 font-sans text-sm leading-relaxed ${
                        f.highlight ? "text-cream-100/80" : "text-bark-700"
                      }`}
                    >
                      <span className={f.highlight ? "text-copper-400" : "text-copper-500"}>
                        <CheckIcon />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href={f.ctaHref}
                  className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans font-medium text-base transition-all ${
                    f.highlight
                      ? "bg-copper-500 text-cream-50 hover:bg-copper-400 shadow-sm hover:shadow-md"
                      : "bg-transparent text-bark-900 border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-50"
                  }`}
                >
                  {f.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="md:hidden mt-2 text-center font-sans text-xs text-stone-400" aria-hidden="true">
            ← Faites glisser vers la gauche ou la droite pour comparer →
          </p>
          <p className="font-sans text-sm text-center text-bark-700 mt-8 max-w-2xl mx-auto">
            En dessous du seuil indiqué, la prestation reste possible selon nos disponibilités. Un forfait minimum de prestation et des frais de déplacement peuvent s&apos;appliquer selon le lieu ; ils sont toujours précisés dans le devis.
          </p>

          <p className="font-sans text-sm text-center text-bark-700 italic mt-10 max-w-xl mx-auto">
            Chaque prestation étant unique, les tarifs ci-dessous sont indicatifs. Contactez-nous pour un devis sur mesure.
          </p>
          <p className="font-sans text-sm text-center mt-3">
            <Link href="/prix-traiteur-tarte-flambee" className="text-copper-500 hover:text-copper-400 font-medium">
              Comprendre ce qui fait varier le prix d&apos;un événement →
            </Link>
          </p>
        </div>
      </section>

      {/* Toujours inclus */}
      <section className="bg-cream-100 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Sans exception
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
              Toujours inclus dans toutes les formules
            </h2>
          </div>

          <ul className="space-y-4">
            {INCLUS.map((item) => (
              <li key={item} className="flex items-start gap-3 font-sans text-base text-bark-700">
                <CheckIcon className="text-copper-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Options à la carte */}
      <section className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Personnalisation
          </p>
          <h2 className="font-display text-4xl font-medium tracking-tight text-bark-900 mb-4">
            Options à la carte
          </h2>
          <p className="font-sans text-base leading-relaxed text-bark-700 mb-10">
            Personnalisez votre prestation avec des options supplémentaires. Précisez vos souhaits dans le formulaire de devis.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {OPTIONS.map((o) => (
              <span
                key={o}
                className="px-4 py-2 rounded-full bg-cream-200 border border-stone-200 font-sans text-sm text-bark-700"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bark-900 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-cream-50 mb-6">
            Prêt à faire votre choix ?
          </h2>
          <p className="font-sans text-lg leading-relaxed text-cream-100/70 mb-10 max-w-lg mx-auto">
            Contactez-nous pour un devis personnalisé. Réponse rapide.
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
  );
}
