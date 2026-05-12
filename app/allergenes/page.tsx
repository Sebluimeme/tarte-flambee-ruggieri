import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Allergènes | Maison Ruggieri",
  description: "Informations sur les allergènes présents dans nos tartes flambées — Maison Ruggieri.",
};

const ALLERGENES = [
  {
    nom: "Gluten",
    detail: "Présent dans la pâte (farine de blé T55). Notre pâte est préparée sur place — nous ne proposons pas de version sans gluten.",
  },
  {
    nom: "Produits laitiers",
    detail: "La crème fraîche épaisse est l'ingrédient principal de la tarte flambée traditionnelle. Fromage blanc également utilisé selon les variantes. Certaines garnitures contiennent du fromage (Munster, Comté selon formule).",
  },
  {
    nom: "Porc",
    detail: "Les lardons fumés (charcuterie Braun, Lapoutroie) contiennent du porc. Une version végétarienne sans lardons est disponible sur demande.",
  },
  {
    nom: "Oeufs",
    detail: "Présents dans certaines variantes de pâte. À préciser lors de la commande si allergie sévère.",
  },
  {
    nom: "Sulfites",
    detail: "Présents dans les vins servis (Riesling d'Alsace, formule Illimitée).",
  },
];

export default function AllergenesPage() {
  return (
    <main className="bg-cream-50 min-h-screen pt-24 py-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-stone-400 hover:text-copper-500 transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <h1 className="font-display text-4xl font-medium text-bark-900 mb-2">
          Informations allergènes
        </h1>
        <p className="font-sans text-sm text-stone-400 mb-10">
          Conformément au règlement (UE) n°1169/2011 sur l&apos;information des consommateurs.
        </p>

        <div className="bg-cream-100 border border-stone-200 rounded-2xl p-6 mb-10">
          <p className="font-sans text-sm leading-relaxed text-bark-700">
            Nos prestations sont réalisées avec du matériel commun. Malgré nos précautions, nous ne pouvons pas garantir une absence totale de contamination croisée. Si vous souffrez d&apos;une allergie sévère, contactez-nous avant de réserver.
          </p>
        </div>

        <div className="space-y-6">
          {ALLERGENES.map((a) => (
            <div key={a.nom} className="border-b border-stone-200 pb-6">
              <p className="font-sans text-base font-semibold text-bark-900 mb-1.5">{a.nom}</p>
              <p className="font-sans text-sm leading-relaxed text-bark-700">{a.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <p className="font-sans text-sm text-bark-700 mb-4">
            Pour toute question sur les allergènes ou demande d&apos;adaptation, contactez-nous directement :
          </p>
          <a
            href="tel:+33785621089"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-copper-500 hover:text-copper-400 transition-colors"
          >
            07 85 62 10 89
          </a>
        </div>
      </div>
    </main>
  );
}
