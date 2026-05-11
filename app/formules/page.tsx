import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Marc Ruggieri — Prestation tarte flambée à domicile en Alsace",
  description:
    "Prestation tarte flambée à domicile pour mariages, anniversaires et événements d'entreprise en Alsace. Devis gratuit.",
};

const FORMULES = [
  {
    name: "Découverte",
    price: "8€",
    unit: "/pers.",
    guests: "30 personnes minimum",
    duration: "2h de prestation",
    highlight: false,
    description:
      "La formule idéale pour les petites réunions et anniversaires intimes. Marc arrive, installe son four, et régale vos proches avec les recettes classiques.",
    features: [
      "Four à bois authentique",
      "Pâte artisanale maison",
      "Garnitures classiques (lard, crème, oignons)",
      "Installation et rangement complet",
      "Cuisson devant les invités",
    ],
    cta: "Demander un devis",
    ctaHref: "/contact",
  },
  {
    name: "Événement",
    price: "12€",
    unit: "/pers.",
    guests: "80 personnes minimum",
    duration: "3h de prestation",
    highlight: true,
    badge: "Le plus populaire",
    description:
      "La formule plébiscitée pour les mariages, séminaires et fêtes d'anniversaire. Garnitures variées, service complet, et un dessert sucré pour finir en beauté.",
    features: [
      "Four à bois authentique",
      "Pâte artisanale maison",
      "Garnitures premium + végétarienne",
      "Dessert sucré (tarte alsacienne au fromage blanc)",
      "Service complet aux tables",
      "Installation et rangement complet",
      "Cuisson devant les invités",
    ],
    cta: "Demander un devis",
    ctaHref: "/contact",
  },
  {
    name: "Sur-mesure",
    price: "Devis",
    unit: "",
    guests: "Illimité",
    duration: "Durée adaptée",
    highlight: false,
    description:
      "Pour les grands événements ou les demandes particulières. Marc adapte tout à vos besoins : nombre de fours, garnitures exclusives, coordination, équipe de service.",
    features: [
      "Tout ce dont vous avez besoin",
      "Formule entièrement personnalisée",
      "Options à la carte",
      "Plusieurs fours si nécessaire",
      "Équipe de service supplémentaire",
      "Coordination le jour J",
    ],
    cta: "Nous contacter",
    ctaHref: "/contact",
  },
];

const INCLUS = [
  "Livraison et installation du four à bois",
  "Pâte artisanale maison préparée le jour même",
  "Cuisson devant les invités — le spectacle fait partie de l'expérience",
  "Rangement et nettoyage complet après prestation",
  "Devis gratuit et réponse sous 24h",
];

const OPTIONS = [
  "Option sans gluten (sur demande)",
  "Garnitures végétariennes supplémentaires",
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
            De 30 à 500 convives. Avec ou sans service. Toujours avec un four à bois authentique et une pâte maison.
          </p>
        </div>
      </section>

      {/* Formules */}
      <section className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {FORMULES.map((f) => (
              <div
                key={f.name}
                className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-200 ${
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
                    {f.guests} · {f.duration}
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
            Contactez-nous pour un devis personnalisé. Réponse garantie sous 24h.
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
