import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Maison Ruggieri — Prestation tarte flambée à domicile en Alsace.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
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
          Mentions légales
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
              1. Éditeur du site
            </h2>
            <div
              className="rounded-xl p-6 text-sm leading-relaxed space-y-1.5"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8DCC8", color: "#2B1810" }}
            >
              <p><strong>Responsable de publication :</strong> Marc Ruggieri</p>
              <p><strong>Nom commercial :</strong> Maison Ruggieri</p>
              <p><strong>Activité :</strong> Prestation de tarte flambée à domicile</p>
              <p><strong>Adresse :</strong> Le Bonhomme, 68650 Haut-Rhin, Alsace, France</p>
              <p><strong>Téléphone :</strong> 07 85 62 10 89</p>
              <p><strong>Email :</strong> contact@poivresale.fr</p>
            </div>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              2. Hébergement
            </h2>
            <div
              className="rounded-xl p-6 text-sm leading-relaxed space-y-1.5"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8DCC8", color: "#2B1810" }}
            >
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p><strong>Site :</strong> vercel.com</p>
            </div>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              3. Propriété intellectuelle
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
              L&apos;ensemble du contenu de ce site (textes, images, structure) est la propriété exclusive de Marc Ruggieri, sauf mentions contraires. Toute reproduction, représentation ou diffusion sans autorisation préalable est interdite.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              4. Responsabilité
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
              Maison Ruggieri s&apos;efforce de maintenir les informations de ce site à jour et exactes, mais ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées. L&apos;utilisation de ce site est sous la seule responsabilité de l&apos;utilisateur.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              5. Données personnelles
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
              Les données collectées via le formulaire de contact sont traitées conformément au RGPD. Pour en savoir plus, consultez notre{" "}
              <Link href="/confidentialite" className="underline transition-colors hover:text-[#B84E1E]" style={{ color: "#D4622A" }}>
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              6. Cookies
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
              Ce site utilise Google Analytics (cookies de mesure d&apos;audience). Ces cookies permettent d&apos;analyser le trafic et d&apos;améliorer l&apos;expérience utilisateur. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              7. Loi applicable
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
