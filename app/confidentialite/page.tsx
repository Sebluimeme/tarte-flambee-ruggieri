import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Poivre & Salé",
  description: "Politique de confidentialité et protection des données personnelles — Poivre & Salé, tarte flambée en Alsace.",
  robots: { index: false, follow: false },
};

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ConfidentialitePage() {
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
          Politique de confidentialité
        </h1>
        <p className="font-sans text-sm text-stone-400 mb-12">Dernière mise à jour : mai 2026</p>

        <div className="space-y-10 font-sans text-bark-700">
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              1. Responsable du traitement
            </h2>
            <div className="bg-cream-100 border border-stone-200 rounded-xl p-6 text-sm leading-relaxed space-y-1.5">
              <p><strong>Poivre &amp; Salé</strong></p>
              <p>Le Bonhomme, 68650 Haut-Rhin</p>
              <p>Email : contact@poivresale.fr</p>
              <p>Téléphone : 06 12 34 56 78</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              2. Données collectées
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Seules les données transmises via le formulaire de contact sont collectées :
            </p>
            <ul className="space-y-2">
              {[
                "Prénom et nom",
                "Adresse email",
                "Numéro de téléphone (optionnel)",
                "Type d'événement",
                "Date et nombre de convives",
                "Message libre",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              3. Finalité du traitement
            </h2>
            <p className="text-sm leading-relaxed">
              Les données collectées ont pour unique finalité de répondre aux demandes de devis et d&apos;assurer le suivi commercial des prestations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              4. Base légale
            </h2>
            <p className="text-sm leading-relaxed">
              Le traitement repose sur l&apos;intérêt légitime (article 6.1.f du RGPD) de Poivre & Salé pour répondre aux demandes entrantes, et sur l&apos;exécution d&apos;un contrat (article 6.1.b) lorsqu&apos;une prestation est commandée.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              5. Durée de conservation
            </h2>
            <p className="text-sm leading-relaxed">
              Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact, conformément aux obligations légales françaises de gestion commerciale.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              6. Partage des données
            </h2>
            <p className="text-sm leading-relaxed">
              Vos données ne sont jamais vendues, cédées ou louées à des tiers. Elles ne sont partagées qu&apos;avec les prestataires techniques strictement nécessaires au fonctionnement du site (hébergement Vercel). Aucun transfert hors Union Européenne n&apos;est réalisé.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">7. Cookies</h2>
            <p className="text-sm leading-relaxed">
              Ce site utilise des cookies Google Analytics (mesure d&apos;audience) et Google Ads (publicité). Un cookie de consentement est stocké localement. Voir notre{" "}
              <Link href="/cookies" className="text-copper-500 hover:text-copper-400 underline transition-colors">
                politique de cookies
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              8. Vos droits
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Droit d'accès à vos données",
                "Droit de rectification",
                "Droit à l'effacement",
                "Droit à la portabilité",
                "Droit d'opposition",
                "Droit à la limitation du traitement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@poivresale.fr" className="text-copper-500 hover:text-copper-400 underline transition-colors">
                contact@poivresale.fr
              </a>
              . Vous disposez également du droit d&apos;introduire une réclamation auprès de la CNIL (
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-copper-500 hover:text-copper-400 underline transition-colors">
                cnil.fr
              </a>
              ).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">9. DPO</h2>
            <p className="text-sm leading-relaxed">
              En tant que société de taille réduite, Poivre & Salé n&apos;est pas soumise à l&apos;obligation de désigner un Délégué à la Protection des Données (DPO).
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
