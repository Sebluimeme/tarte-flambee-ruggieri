import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles — Marc Ruggieri, tarte flambée en Alsace.",
  robots: { index: false, follow: false },
};

export default function ConfidentialitePage() {
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
          Politique de confidentialité
        </h1>
        <p className="text-sm text-stone-400 mb-12">Dernière mise à jour : mai 2026</p>

        <div className="space-y-10 text-bark-700">
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              1. Responsable du traitement
            </h2>
            <div className="bg-cream-100 border border-stone-200 rounded-xl p-6 text-sm leading-relaxed space-y-1.5">
              <p>
                <strong>Marc Ruggieri</strong>
              </p>
              <p>129 La Chapelle, 68650 Le Bonhomme</p>
              <p>Email : contact@poivresale.fr</p>
              <p>Téléphone : +33 6 XX XX XX XX</p>
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
                "Nom et prénom",
                "Adresse email",
                "Numéro de téléphone (optionnel)",
                "Type d'événement",
                "Date et lieu approximatif",
                "Nombre de convives",
                "Message libre",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check strokeWidth={2} size={14} className="text-copper-500 flex-shrink-0 mt-0.5" />
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
              Les données collectées ont pour unique finalité de répondre aux demandes de devis et
              d&apos;assurer le suivi commercial des prestations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              4. Base légale
            </h2>
            <p className="text-sm leading-relaxed">
              Le traitement repose sur l&apos;intérêt légitime (article 6.1.f du RGPD) de Marc
              Ruggieri pour répondre aux demandes entrantes, et sur l&apos;exécution d&apos;un
              contrat (article 6.1.b) lorsqu&apos;une prestation est commandée.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              5. Durée de conservation
            </h2>
            <p className="text-sm leading-relaxed">
              Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier
              contact, conformément aux obligations légales françaises de gestion commerciale.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              6. Partage des données
            </h2>
            <p className="text-sm leading-relaxed">
              Vos données ne sont jamais vendues, cédées ou louées à des tiers. Elles ne sont
              partagées qu&apos;avec les prestataires techniques strictement nécessaires au
              fonctionnement du site (hébergement Vercel). Aucun transfert hors Union Européenne
              n&apos;est réalisé.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">7. Cookies</h2>
            <p className="text-sm leading-relaxed">
              Ce site n&apos;utilise aucun cookie publicitaire ni de traçage. Un seul élément de
              stockage local (localStorage) est utilisé pour mémoriser votre consentement à la
              bannière cookies. Voir notre{" "}
              <Link
                href="/cookies"
                className="text-copper-500 hover:text-copper-400 underline transition-colors"
              >
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
                "Droit d'accès",
                "Droit de rectification",
                "Droit à l'effacement",
                "Droit à la portabilité",
                "Droit d'opposition",
                "Droit à la limitation du traitement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check strokeWidth={2} size={14} className="text-copper-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed">
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:contact@poivresale.fr"
                className="text-copper-500 hover:text-copper-400 underline transition-colors"
              >
                contact@poivresale.fr
              </a>
              . Vous disposez également du droit d&apos;introduire une réclamation auprès de la
              CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper-500 hover:text-copper-400 underline transition-colors"
              >
                cnil.fr
              </a>
              ).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">9. DPO</h2>
            <p className="text-sm leading-relaxed">
              En tant qu&apos;artisan exerçant à titre individuel, Marc Ruggieri n&apos;est pas
              soumis à l&apos;obligation de désigner un Délégué à la Protection des Données (DPO).
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
