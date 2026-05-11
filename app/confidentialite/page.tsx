import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles — Tarte Flambée Marc Ruggieri.",
  robots: { index: false, follow: false },
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen py-20 px-4" style={{ backgroundColor: "#FBF5E6" }}>
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl font-bold mb-2"
          style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
        >
          Politique de confidentialité
        </h1>
        <p className="text-sm mb-12" style={{ color: "#8B2500" }}>
          Dernière mise à jour : mai 2026
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            1. Responsable du traitement
          </h2>
          <div className="rounded-xl p-6 text-sm leading-relaxed space-y-1" style={{ backgroundColor: "#FFFDF7", border: "1px solid #D4621A20", color: "#3D2010" }}>
            <p><strong>Marc Ruggieri</strong></p>
            <p>Le Bonhomme, 68650 Haut-Rhin, Alsace, France</p>
            <p>Email : contact@poivresale.fr</p>
            <p>Téléphone : 07 85 62 10 89</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            2. Données collectées
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D2010" }}>
            Dans le cadre de la prise de contact et des demandes de devis, nous collectons les données suivantes :
          </p>
          <ul className="text-sm leading-relaxed space-y-2 pl-4" style={{ color: "#3D2010" }}>
            {[
              "Nom et prénom",
              "Adresse email",
              "Numéro de téléphone",
              "Date et lieu de l'événement",
              "Nombre de convives",
              "Type de prestation souhaitée",
              "Informations complémentaires transmises librement",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#D4621A" }} className="mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            3. Finalités du traitement
          </h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#3D2010" }}>
            Vos données sont collectées pour les finalités suivantes :
          </p>
          <ul className="text-sm leading-relaxed space-y-2 pl-4" style={{ color: "#3D2010" }}>
            {[
              "Traitement de votre demande de devis",
              "Organisation et suivi de la prestation",
              "Communication relative à votre événement",
              "Amélioration de nos services",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#D4621A" }} className="mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            4. Base légale
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
            Le traitement de vos données repose sur votre consentement (article 6.1.a du RGPD) lors de la soumission du formulaire de contact, et sur l'exécution d'un contrat (article 6.1.b) lorsqu'une prestation est commandée.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            5. Durée de conservation
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
            Vos données sont conservées pour la durée nécessaire au traitement de votre demande et à l'exécution de la prestation, puis archivées pour une durée maximale de 3 ans à des fins de gestion commerciale, conformément aux obligations légales françaises.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            6. Partage des données
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
            Vos données ne sont pas cédées, vendues ou louées à des tiers. Elles peuvent être partagées avec des prestataires techniques (hébergement, outils de gestion) dans le strict cadre de l'exécution du service, et uniquement avec des prestataires offrant des garanties suffisantes au regard du RGPD.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            7. Cookies et mesure d'audience
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
            Ce site utilise Google Analytics pour mesurer l'audience et améliorer l'expérience utilisateur. Google Analytics collecte des données anonymisées (pages visitées, durée de session, pays d'origine). Ces données sont traitées par Google LLC conformément à sa propre politique de confidentialité. Vous pouvez désactiver ce suivi via les paramètres de votre navigateur ou en installant l'extension Google Analytics Opt-out.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            8. Vos droits
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#3D2010" }}>
            Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
          </p>
          <ul className="text-sm leading-relaxed space-y-2 pl-4 mb-4" style={{ color: "#3D2010" }}>
            {[
              "Droit d'accès à vos données",
              "Droit de rectification",
              "Droit à l'effacement (« droit à l'oubli »)",
              "Droit à la portabilité des données",
              "Droit d'opposition au traitement",
              "Droit à la limitation du traitement",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#D4621A" }} className="mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
            Pour exercer ces droits, contactez-nous par email à{" "}
            <a href="mailto:contact@poivresale.fr" className="underline" style={{ color: "#D4621A" }}>
              contact@poivresale.fr
            </a>{" "}
            ou par courrier à l'adresse indiquée ci-dessus. Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            9. Sécurité
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation. Le site est servi en HTTPS.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "#D4621A20" }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "#D4621A" }}
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
