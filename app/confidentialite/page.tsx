import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles — Maison Ruggieri.",
  robots: { index: false, follow: false },
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen py-20 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium mb-10 transition-colors hover:text-[#D4622A]"
          style={{ color: "#C4A882" }}
        >
          <ChevronLeft strokeWidth={1.5} size={16} />
          Retour à l&apos;accueil
        </Link>

        <h1
          className="text-4xl font-bold mb-2"
          style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
        >
          Politique de confidentialité
        </h1>
        <p className="text-sm mb-12" style={{ color: "#C4A882" }}>
          Dernière mise à jour : mai 2026
        </p>

        <div className="space-y-10">
          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              1. Responsable du traitement
            </h2>
            <div
              className="rounded-xl p-6 text-sm leading-relaxed space-y-1.5"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8DCC8", color: "#2B1810" }}
            >
              <p><strong>Maison Ruggieri</strong> — Marc Ruggieri</p>
              <p>Le Bonhomme, 68650 Haut-Rhin, Alsace, France</p>
              <p>Email : contact@poivresale.fr</p>
              <p>Téléphone : 07 85 62 10 89</p>
            </div>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              2. Données collectées
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#2B1810" }}>
              Dans le cadre de la prise de contact et des demandes de devis, nous collectons les données suivantes :
            </p>
            <ul className="text-sm leading-relaxed space-y-2">
              {[
                "Nom et prénom",
                "Adresse email",
                "Numéro de téléphone",
                "Date et lieu de l'événement",
                "Nombre de convives",
                "Type de prestation souhaitée",
                "Informations complémentaires transmises librement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5" style={{ color: "#2B1810" }}>
                  <Check strokeWidth={1.5} size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#D4622A" }} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              3. Finalités du traitement
            </h2>
            <ul className="text-sm leading-relaxed space-y-2">
              {[
                "Traitement de votre demande de devis",
                "Organisation et suivi de la prestation",
                "Communication relative à votre événement",
                "Amélioration de nos services",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5" style={{ color: "#2B1810" }}>
                  <Check strokeWidth={1.5} size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#D4622A" }} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              4. Base légale
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
              Le traitement de vos données repose sur votre consentement (article 6.1.a du RGPD) lors de la soumission du formulaire de contact, et sur l&apos;exécution d&apos;un contrat (article 6.1.b) lorsqu&apos;une prestation est commandée.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              5. Durée de conservation
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
              Vos données sont conservées pour la durée nécessaire au traitement de votre demande et à l&apos;exécution de la prestation, puis archivées pour une durée maximale de 3 ans à des fins de gestion commerciale, conformément aux obligations légales françaises.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              6. Partage des données
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
              Vos données ne sont pas cédées, vendues ou louées à des tiers. Elles peuvent être partagées avec des prestataires techniques (hébergement, outils de gestion) dans le strict cadre de l&apos;exécution du service.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              7. Cookies et mesure d&apos;audience
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
              Ce site utilise Google Analytics pour mesurer l&apos;audience et améliorer l&apos;expérience utilisateur. Google Analytics collecte des données anonymisées (pages visitées, durée de session, pays d&apos;origine). Vous pouvez désactiver ce suivi via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              8. Vos droits
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#2B1810" }}>
              Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="text-sm leading-relaxed space-y-2 mb-4">
              {[
                "Droit d'accès à vos données",
                "Droit de rectification",
                "Droit à l'effacement",
                "Droit à la portabilité des données",
                "Droit d'opposition au traitement",
                "Droit à la limitation du traitement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5" style={{ color: "#2B1810" }}>
                  <Check strokeWidth={1.5} size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#D4622A" }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
              Pour exercer ces droits, contactez-nous par email à{" "}
              <a href="mailto:contact@poivresale.fr" className="underline transition-colors hover:text-[#B84E1E]" style={{ color: "#D4622A" }}>
                contact@poivresale.fr
              </a>
              . Vous disposez également du droit d&apos;introduire une réclamation auprès de la CNIL (www.cnil.fr).
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              9. Sécurité
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
              Nous mettons en oeuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation. Le site est servi en HTTPS.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8" style={{ borderTop: "1px solid #E8DCC8" }}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[#B84E1E]"
            style={{ color: "#D4622A" }}
          >
            <ChevronLeft strokeWidth={1.5} size={16} />
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
