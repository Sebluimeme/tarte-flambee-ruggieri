"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Quelle surface est nécessaire pour l'installation ?",
    a: "Environ 4 m² minimum, idéalement près d'une sortie ou en extérieur avec accès électrique. Le four à bois mobile est compact et s'adapte à la plupart des configurations.",
  },
  {
    q: "Intervenez-vous uniquement à domicile ou aussi en salle ?",
    a: "Les deux ! Marc intervient en intérieur (salle des fêtes, entreprise, domicile) ou en extérieur (jardin, cour) selon les conditions météo et la configuration de l'espace.",
  },
  {
    q: "Combien de temps à l'avance doit-on réserver ?",
    a: "Comptez au minimum 3 semaines à l'avance pour les événements courants. Pour les mariages, nous recommandons de réserver 2 à 3 mois à l'avance afin de garantir la disponibilité.",
  },
  {
    q: "Proposez-vous des options végétariennes ou sans gluten ?",
    a: "Oui, les garnitures végétariennes sont incluses dans les formules. Une option sans gluten est possible sur demande, mais nous ne pouvons pas garantir l'absence totale de traces de gluten en raison de la manipulation en cuisine ouverte.",
  },
  {
    q: "Que se passe-t-il en cas de mauvais temps pour une prestation extérieure ?",
    a: "Nous prévoyons toujours un plan B discuté en amont : report, installation sous une tente, ou repli en intérieur si possible. Marc est habitué à travailler dans toutes les conditions.",
  },
  {
    q: "Quels sont les délais et modalités de paiement ?",
    a: "Un acompte de 30% est demandé à la confirmation de la réservation. Le solde est réglé 48h avant la prestation par virement bancaire. Chèque et espèces acceptés sur arrangement.",
  },
];

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream-100 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Questions fréquentes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
            Tout ce que vous voulez savoir
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border-b border-stone-200">
              <button
                type="button"
                className="flex justify-between items-center py-5 w-full text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-sans font-medium text-bark-900">{item.q}</span>
                <span className={`flex-shrink-0 transition-colors ${openIndex === i ? "text-copper-500" : "text-stone-400"}`}>
                  {openIndex === i ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              {openIndex === i && (
                <p className="font-sans text-base leading-relaxed text-bark-700 pb-5 pr-8">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
