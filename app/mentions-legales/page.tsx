import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Tarte Flambée Marc Ruggieri — Prestation à domicile en Alsace.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen py-20 px-4" style={{ backgroundColor: "#FBF5E6" }}>
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl font-bold mb-2"
          style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
        >
          Mentions légales
        </h1>
        <p className="text-sm mb-12" style={{ color: "#8B2500" }}>
          Dernière mise à jour : mai 2026
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            1. Éditeur du site
          </h2>
          <div className="rounded-xl p-6 text-sm leading-relaxed space-y-1" style={{ backgroundColor: "#FFFDF7", border: "1px solid #D4621A20", color: "#3D2010" }}>
            <p><strong>Responsable de publication :</strong> Marc Ruggieri</p>
            <p><strong>Activité :</strong> Prestation de tarte flambée à domicile</p>
            <p><strong>Adresse :</strong> Le Bonhomme, 68650 Haut-Rhin, Alsace, France</p>
            <p><strong>Téléphone :</strong> 07 85 62 10 89</p>
            <p><strong>Email :</strong> contact@poivresale.fr</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            2. Hébergement
          </h2>
          <div className="rounded-xl p-6 text-sm leading-relaxed space-y-1" style={{ backgroundColor: "#FFFDF7", border: "1px solid #D4621A20", color: "#3D2010" }}>
            <p><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p><strong>Site :</strong> vercel.com</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            3. Propriété intellectuelle
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
            L'ensemble du contenu de ce site (textes, images, structure) est la propriété exclusive de Marc Ruggieri, sauf mentions contraires. Toute reproduction, représentation ou diffusion sans autorisation préalable est interdite.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            4. Responsabilité
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
            Marc Ruggieri s'efforce de maintenir les informations de ce site à jour et exactes, mais ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisation de ce site est sous la seule responsabilité de l'utilisateur.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            5. Données personnelles
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
            Les données collectées via le formulaire de réservation sont traitées conformément au RGPD. Pour en savoir plus, consultez notre{" "}
            <Link href="/confidentialite" className="underline" style={{ color: "#D4621A" }}>
              politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            6. Cookies
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
            Ce site utilise Google Analytics (cookies de mesure d'audience). Ces cookies permettent d'analyser le trafic et d'améliorer l'expérience utilisateur. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#3D2010" }}>
            7. Loi applicable
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
