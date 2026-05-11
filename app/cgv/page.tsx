import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Marc Ruggieri",
  description: "Conditions Générales de Vente — Marc Ruggieri, prestation tarte flambée en Alsace.",
  robots: { index: false, follow: false },
};

export default function CGVPage() {
  return (
    <main className="bg-cream-50 min-h-screen py-20 px-6 md:px-8">
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
          Conditions Générales de Vente
        </h1>
        <p className="font-sans text-sm text-stone-400 mb-12">Dernière mise à jour : mai 2026</p>

        <div className="space-y-10 font-sans text-bark-700">
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              1. Objet et champ d&apos;application
            </h2>
            <p className="text-sm leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toutes les prestations de service réalisées par Marc Ruggieri, artisan tarte flambée, domicilié à Le Bonhomme (68650). Elles régissent les relations contractuelles entre Marc Ruggieri et ses clients pour toute prestation de tarte flambée à domicile.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              2. Devis et commande
            </h2>
            <p className="text-sm leading-relaxed">
              Toute prestation fait l&apos;objet d&apos;un devis préalable gratuit. Le devis est valable 30 jours. La commande est confirmée à réception de l&apos;acompte et d&apos;un bon de commande ou accord écrit du client.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              3. Tarifs
            </h2>
            <p className="text-sm leading-relaxed">
              Les prix indiqués dans les devis sont exprimés en euros TTC. Marc Ruggieri bénéficie de la franchise de TVA conformément à l&apos;article 293 B du Code Général des Impôts. Les tarifs varient en fonction du nombre de convives, de la distance et des options choisies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              4. Acompte et solde
            </h2>
            <p className="text-sm leading-relaxed">
              Un acompte de <strong>30%</strong> du montant total est exigé à la réservation pour confirmer la date. Le solde est réglé <strong>48h avant la prestation</strong> par virement bancaire, chèque ou espèces.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              5. Annulation et remboursement
            </h2>
            <div className="text-sm leading-relaxed space-y-3">
              <p>En cas d&apos;annulation par le client :</p>
              <div className="bg-cream-100 border border-stone-200 rounded-xl p-5 space-y-2">
                <div className="flex gap-3">
                  <span className="text-copper-500 flex-shrink-0">›</span>
                  <span><strong>Plus de 15 jours avant</strong> l&apos;événement : acompte intégralement remboursé</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-copper-500 flex-shrink-0">›</span>
                  <span><strong>Entre 7 et 15 jours</strong> avant : 50% du montant total retenu</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-copper-500 flex-shrink-0">›</span>
                  <span><strong>Moins de 7 jours</strong> avant : 100% du montant total retenu</span>
                </div>
              </div>
              <p>
                En cas d&apos;annulation par Marc Ruggieri pour motif légitime, l&apos;acompte est intégralement remboursé sous 5 jours ouvrés.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              6. Force majeure
            </h2>
            <p className="text-sm leading-relaxed">
              Marc Ruggieri ne pourra être tenu responsable de l&apos;inexécution de ses obligations en cas de force majeure (catastrophe naturelle, intempéries exceptionnelles, grève, épidémie, etc.). Une solution de report sera proposée à l&apos;amiable dans les meilleurs délais.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              7. Responsabilité du client
            </h2>
            <p className="text-sm leading-relaxed">
              Le client s&apos;assure que les conditions d&apos;installation du four à bois (espace minimum 4 m², accès, absence de risques d&apos;incendie) sont réunies. Marc Ruggieri est couvert par une assurance responsabilité civile professionnelle. Sa responsabilité ne peut être engagée pour des dommages résultant d&apos;informations incorrectes fournies par le client.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              8. Loi applicable et tribunal compétent
            </h2>
            <p className="text-sm leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige, les parties s&apos;efforceront de trouver une solution amiable. À défaut, le tribunal compétent sera celui de <strong>Strasbourg (67)</strong>.
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
