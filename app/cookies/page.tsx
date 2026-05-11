import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de cookies | Marc Ruggieri",
  description: "Politique de cookies du site Marc Ruggieri — tarte flambée en Alsace.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
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
          Politique de cookies
        </h1>
        <p className="font-sans text-sm text-stone-400 mb-12">Dernière mise à jour : mai 2026</p>

        <div className="space-y-10 font-sans text-bark-700">
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              Notre engagement : aucun cookie de traçage
            </h2>
            <p className="text-sm leading-relaxed">
              Ce site n&apos;utilise <strong>aucun cookie publicitaire</strong> ni de traçage. Pas de Google Analytics, pas de Facebook Pixel, pas de pixel de remarketing d&apos;aucune sorte.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              Le seul stockage local utilisé
            </h2>
            <div className="bg-cream-100 border border-stone-200 rounded-xl p-6 text-sm space-y-3">
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Nom :</span>
                <code className="text-copper-600 font-mono">cookies_accepted</code>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Type :</span>
                <span>localStorage (stockage local, pas un cookie réseau)</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Finalité :</span>
                <span>Mémoriser que vous avez accepté ou refusé la bannière d&apos;information</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Durée :</span>
                <span>Stocké dans votre navigateur, sans expiration. Supprimé si vous videz les données du site.</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Partagé :</span>
                <span>Non. Cette donnée ne quitte jamais votre navigateur.</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              Comment supprimer cette donnée ?
            </h2>
            <p className="text-sm leading-relaxed">
              Vous pouvez supprimer cette donnée à tout moment dans les paramètres de votre navigateur (Paramètres → Confidentialité → Données du site), ou via la console développeur (F12) en supprimant la clé{" "}
              <code className="text-copper-600 font-mono">cookies_accepted</code> dans le localStorage.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">Questions ?</h2>
            <p className="text-sm leading-relaxed">
              Pour toute question relative à la gestion de vos données, contactez-nous à{" "}
              <a href="mailto:contact@poivresale.fr" className="text-copper-500 hover:text-copper-400 underline transition-colors">
                contact@poivresale.fr
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-stone-200">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-copper-500 hover:text-copper-400 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
