import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Politique de cookies du site Marc Ruggieri — tarte flambée en Alsace.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen py-20 px-6 bg-cream-50">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-400 hover:text-copper-500 transition-colors mb-10"
        >
          <ChevronLeft strokeWidth={1.5} size={16} />
          Retour à l&apos;accueil
        </Link>

        <h1 className="font-display text-4xl font-medium text-bark-900 mb-2">
          Politique de cookies
        </h1>
        <p className="text-sm text-stone-400 mb-12">Dernière mise à jour : mai 2026</p>

        <div className="space-y-10 text-bark-700">
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              Notre engagement : aucun cookie de traçage
            </h2>
            <p className="text-sm leading-relaxed">
              Ce site n&apos;utilise <strong>aucun cookie publicitaire</strong> ni aucun cookie de
              traçage. Il n&apos;y a pas de Google Analytics, pas de Facebook Pixel, pas de pixel de
              remarketing d&apos;aucune sorte.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              Le seul cookie utilisé
            </h2>
            <div className="bg-cream-100 rounded-xl p-6 text-sm space-y-3">
              <div className="flex gap-3">
                <span className="font-medium text-bark-900 min-w-[140px]">Nom :</span>
                <code className="text-copper-600">cookies_accepted</code>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-bark-900 min-w-[140px]">Type :</span>
                <span>localStorage (stockage local, pas un cookie réseau)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-bark-900 min-w-[140px]">Finalité :</span>
                <span>Mémoriser que vous avez accepté la bannière d&apos;information sur les cookies</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-bark-900 min-w-[140px]">Durée :</span>
                <span>Stocké dans le localStorage de votre navigateur, sans expiration définie. Supprimé si vous videz les données de votre navigateur.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-bark-900 min-w-[140px]">Partagé :</span>
                <span>Non. Cette donnée ne quitte jamais votre navigateur.</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              Comment supprimer cette donnée ?
            </h2>
            <p className="text-sm leading-relaxed">
              Vous pouvez supprimer cette donnée à tout moment en vidant les données du site dans
              les paramètres de votre navigateur (Paramètres &rarr; Confidentialité &rarr; Données
              du site), ou en utilisant la console développeur (F12) et en supprimant la clé{" "}
              <code className="text-copper-600">cookies_accepted</code> dans localStorage.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">Questions ?</h2>
            <p className="text-sm leading-relaxed">
              Pour toute question relative à la gestion de vos données, contactez-nous à{" "}
              <a
                href="mailto:contact@poivresale.fr"
                className="text-copper-500 hover:text-copper-400 underline transition-colors"
              >
                contact@poivresale.fr
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-stone-200">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-copper-500 hover:text-copper-400 transition-colors"
          >
            <ChevronLeft strokeWidth={1.5} size={16} />
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
