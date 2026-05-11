"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import Button from "../../components/ui/Button";

// Note: metadata export must be in a server component.
// We keep this page client-only for the FAQ accordion.

const FORMULAS = [
  {
    name: "Découverte",
    guests: "20 à 80 personnes",
    price: "À partir de 8€/pers.",
    highlight: false,
    features: [
      "Four à bois authentique",
      "Pâte artisanale maison",
      "1 garniture au choix",
      "Service en autonomie",
      "Installation et rangement inclus",
    ],
    cta: "Demander un devis",
    ctaHref: "/contact",
  },
  {
    name: "Événement",
    guests: "80 à 200 personnes",
    price: "Sur devis",
    highlight: true,
    badge: "Populaire",
    features: [
      "Four à bois authentique",
      "Pâte artisanale maison",
      "2 garnitures au choix",
      "Service complet",
      "Présentation sur chevalet",
      "Installation et rangement inclus",
    ],
    cta: "Demander un devis",
    ctaHref: "/contact",
  },
  {
    name: "Prestige",
    guests: "200 à 500 personnes",
    price: "Sur devis",
    highlight: false,
    features: [
      "2 fours à bois",
      "Garnitures illimitées",
      "Équipe de service",
      "Décoration alsacienne",
      "Coordination jour J",
      "Installation et rangement inclus",
    ],
    cta: "Nous contacter",
    ctaHref: "/contact",
  },
];

const ALWAYS_INCLUDED = [
  "Livraison et installation du four à bois",
  "Four à bois authentique",
  "Pâte artisanale maison",
  "Cuisson devant les invités",
  "Rangement et nettoyage complet",
];

const OPTIONS = [
  "Option sans gluten",
  "Décoration alsacienne",
  "Équipe de service supplémentaire",
  "Coordination jour J",
  "Présentation sur chevalet",
];

const FAQ_ITEMS = [
  {
    q: "Comment commander ?",
    a: "Via le formulaire de contact, par email ou téléphone. Devis gratuit sous 24h.",
  },
  {
    q: "Puis-je modifier ma formule après réservation ?",
    a: "Oui, jusqu'à 15 jours avant l'événement sous réserve de disponibilité.",
  },
  {
    q: "Y a-t-il un minimum de commande ?",
    a: "Oui, 20 personnes minimum.",
  },
];

export default function FormulesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Formules
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-bark-900 mb-6">
            Nos formules de prestation tarte flambée
          </h1>
          <p className="text-bark-700 max-w-2xl mx-auto text-lg">
            De 20 à 500 convives. Avec ou sans service. Toujours avec un four à bois authentique.
          </p>
        </div>
      </section>

      {/* Formulas */}
      <section className="py-20 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {FORMULAS.map((f) => (
              <div
                key={f.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  f.highlight
                    ? "border-2 border-copper-500 bg-cream-50"
                    : "border border-stone-200 bg-cream-50"
                }`}
              >
                {f.highlight && f.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-copper-500 text-cream-50 text-xs font-medium">
                    {f.badge}
                  </span>
                )}
                <h2 className="font-display text-2xl font-medium text-bark-900 mb-1">{f.name}</h2>
                <p className="text-sm text-stone-400 mb-2">{f.guests}</p>
                <p className="text-xl font-medium text-copper-500 mb-6">{f.price}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-bark-700">
                      <Check strokeWidth={2} size={16} className="text-copper-500 flex-shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button
                  href={f.ctaHref}
                  variant={f.highlight ? "primary" : "secondary"}
                  className="justify-center"
                >
                  {f.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toujours inclus */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium text-bark-900 mb-8">
            Toujours inclus dans toutes les formules
          </h2>
          <ul className="space-y-4">
            {ALWAYS_INCLUDED.map((item) => (
              <li key={item} className="flex items-center gap-3 text-bark-700">
                <Check strokeWidth={2} size={18} className="text-copper-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Options à la carte */}
      <section className="py-20 px-6 bg-cream-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium text-bark-900 mb-4">
            Options à la carte
          </h2>
          <p className="text-bark-700 mb-8">
            Personnalisez votre prestation avec des options supplémentaires.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {OPTIONS.map((o) => (
              <span
                key={o}
                className="px-4 py-2 rounded-full bg-cream-200 text-bark-700 text-sm"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-bark-900 mb-10 text-center">
            Questions fréquentes
          </h2>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border-b border-stone-200">
              <button
                type="button"
                className="flex justify-between items-center py-5 w-full text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-bark-900 pr-4">{item.q}</span>
                {openIndex === i ? (
                  <ChevronUp strokeWidth={1.5} size={20} className="text-stone-400 flex-shrink-0" />
                ) : (
                  <ChevronDown strokeWidth={1.5} size={20} className="text-stone-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <p className="text-bark-700 pb-5 text-sm leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-cream-200 text-center">
        <h2 className="font-display text-3xl font-medium text-bark-900 mb-6">
          Prêt à faire votre choix ?
        </h2>
        <p className="text-bark-700 mb-8 max-w-lg mx-auto">
          Contactez-nous pour un devis personnalisé. Réponse garantie sous 24h.
        </p>
        <Button href="/contact">Demander un devis gratuit</Button>
      </section>
    </>
  );
}
