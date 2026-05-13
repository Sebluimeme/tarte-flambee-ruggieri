import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de cookies | Poivre & Salé",
  description: "Politique de cookies du site Poivre & Salé — tarte flambée en Alsace.",
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
              Cookies utilisés sur ce site
            </h2>
            <p className="text-sm leading-relaxed">
              Ce site utilise des cookies à des fins d&apos;analyse d&apos;audience et de mesure publicitaire. En naviguant sur ce site, vous acceptez l&apos;utilisation de ces cookies conformément à la présente politique.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              Cookies analytiques — Google Analytics
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Nous utilisons Google Analytics pour mesurer l&apos;audience de notre site (pages visitées, durée des sessions, provenance des visiteurs). Ces données sont anonymisées et agrégées.
            </p>
            <div className="bg-cream-100 border border-stone-200 rounded-xl p-6 text-sm space-y-3">
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Émetteur :</span>
                <span>Google LLC</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Cookies :</span>
                <code className="text-copper-600 font-mono">_ga, _ga_*</code>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Finalité :</span>
                <span>Mesure d&apos;audience, statistiques de navigation</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Durée :</span>
                <span>13 mois maximum</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              Cookies publicitaires — Google Ads
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Nous utilisons Google Ads pour diffuser des annonces et mesurer leurs performances. Ces cookies permettent le suivi des conversions et le ciblage publicitaire.
            </p>
            <div className="bg-cream-100 border border-stone-200 rounded-xl p-6 text-sm space-y-3">
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Émetteur :</span>
                <span>Google LLC</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Cookies :</span>
                <code className="text-copper-600 font-mono">_gcl_au, IDE, DSID</code>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Finalité :</span>
                <span>Mesure des conversions, personnalisation des annonces</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Durée :</span>
                <span>90 jours à 13 mois selon le cookie</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              Cookie de consentement
            </h2>
            <div className="bg-cream-100 border border-stone-200 rounded-xl p-6 text-sm space-y-3">
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Nom :</span>
                <code className="text-copper-600 font-mono">cookies_accepted</code>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Type :</span>
                <span>localStorage (stockage local)</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Finalité :</span>
                <span>Mémoriser votre choix de consentement à la bannière cookies</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <span className="font-medium text-bark-900">Partagé :</span>
                <span>Non. Cette donnée reste dans votre navigateur.</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              Gérer vos préférences
            </h2>
            <p className="text-sm leading-relaxed">
              Vous pouvez refuser ou supprimer les cookies à tout moment via les paramètres de votre navigateur (Paramètres → Confidentialité → Données du site). Vous pouvez également vous opposer au ciblage publicitaire Google via{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-copper-500 hover:text-copper-400 underline transition-colors">
                adssettings.google.com
              </a>
              .
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
