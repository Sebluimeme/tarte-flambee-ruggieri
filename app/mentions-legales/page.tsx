import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Marc Ruggieri — artisan tarte flambée en Alsace.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
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

        <h1 className="font-display text-4xl font-medium text-bark-900 mb-2">Mentions légales</h1>
        <p className="text-sm text-stone-400 mb-12">Dernière mise à jour : mai 2026</p>

        <div className="space-y-10 text-bark-700">
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              1. Éditeur du site
            </h2>
            <div className="bg-cream-100 border border-stone-200 rounded-xl p-6 text-sm leading-relaxed space-y-1.5">
              <p>
                <strong>Responsable de publication :</strong> Marc Ruggieri
              </p>
              <p>
                <strong>Activité :</strong> Prestation artisanale tarte flambée à domicile
              </p>
              <p>
                <strong>Adresse :</strong> 129 La Chapelle, 68650 Le Bonhomme
              </p>
              <p>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:contact@poivresale.fr"
                  className="text-copper-500 hover:text-copper-400 transition-colors"
                >
                  contact@poivresale.fr
                </a>
              </p>
              <p>
                <strong>Téléphone :</strong> +33 6 XX XX XX XX
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              2. Hébergement
            </h2>
            <div className="bg-cream-100 border border-stone-200 rounded-xl p-6 text-sm leading-relaxed space-y-1.5">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104,
                États-Unis
              </p>
              <p>
                <strong>Site :</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copper-500 hover:text-copper-400 transition-colors"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              3. Propriété intellectuelle
            </h2>
            <p className="text-sm leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, structure) est la propriété
              exclusive de Marc Ruggieri, sauf mentions contraires. Toute reproduction,
              représentation ou diffusion sans autorisation préalable est interdite et constitue une
              contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              4. Responsabilité
            </h2>
            <p className="text-sm leading-relaxed">
              Marc Ruggieri s&apos;efforce de maintenir les informations de ce site à jour et
              exactes, mais ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité
              des informations diffusées. L&apos;utilisation de ce site est sous la seule
              responsabilité de l&apos;utilisateur.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              5. Données personnelles et cookies
            </h2>
            <p className="text-sm leading-relaxed">
              Les données collectées via ce site sont traitées conformément au RGPD. Ce site
              n&apos;utilise aucun cookie de traçage ou publicitaire. Pour en savoir plus,
              consultez notre{" "}
              <Link
                href="/cookies"
                className="text-copper-500 hover:text-copper-400 underline transition-colors"
              >
                politique de cookies
              </Link>{" "}
              et notre{" "}
              <Link
                href="/confidentialite"
                className="text-copper-500 hover:text-copper-400 underline transition-colors"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              6. Loi applicable
            </h2>
            <p className="text-sm leading-relaxed">
              Les présentes mentions légales sont soumises au droit français. En cas de litige,
              les tribunaux français seront seuls compétents.
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
