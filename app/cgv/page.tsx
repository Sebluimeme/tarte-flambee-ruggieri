import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions Générales de Vente — Marc Ruggieri, artisan tarte flambée en Alsace.",
  robots: { index: false, follow: false },
};

export default function CGVPage() {
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
          Conditions Générales de Vente
        </h1>
        <p className="text-sm text-stone-400 mb-12">Dernière mise à jour : mai 2026</p>

        <div className="prose max-w-none space-y-10 text-bark-700">
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              1. Objet et champ d&apos;application
            </h2>
            <p className="text-sm leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toutes les
              prestations de service réalisées par Marc Ruggieri, artisan tarte flambée, domicilié à
              Le Bonhomme (68650). Elles régissent les relations contractuelles entre Marc Ruggieri
              et ses clients, personnes physiques ou morales souhaitant bénéficier d&apos;une
              prestation de tarte flambée à domicile.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              2. Devis et commande
            </h2>
            <p className="text-sm leading-relaxed">
              Toute prestation fait l&apos;objet d&apos;un devis préalable, établi gratuitement
              après échange avec le client. Le devis est valable 30 jours. La commande est
              confirmée à réception de l&apos;acompte et d&apos;un bon de commande ou accord écrit
              du client.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">3. Tarifs</h2>
            <p className="text-sm leading-relaxed">
              Les prix indiqués dans les devis sont exprimés en euros. Marc Ruggieri bénéficie de
              la franchise de TVA conformément à l&apos;article 293 B du Code Général des Impôts.
              Les tarifs peuvent varier en fonction du nombre de convives, de la distance de
              déplacement et des options choisies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              4. Acompte et solde
            </h2>
            <p className="text-sm leading-relaxed">
              Un acompte de 30% du montant total est exigé à la réservation pour confirmer la date.
              Le solde est réglé le jour de la prestation ou dans les 7 jours suivants, par
              virement bancaire, chèque ou espèces.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">5. Annulation</h2>
            <div className="text-sm leading-relaxed space-y-2">
              <p>En cas d&apos;annulation par le client :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Plus de 30 jours avant la date : acompte retenu à 30%</li>
                <li>Entre 15 et 30 jours avant la date : 50% du montant total retenu</li>
                <li>Moins de 15 jours avant la date : 100% du montant total retenu</li>
              </ul>
              <p>
                En cas d&apos;annulation par Marc Ruggieri pour motif légitime, l&apos;acompte est
                intégralement remboursé.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              6. Force majeure
            </h2>
            <p className="text-sm leading-relaxed">
              Marc Ruggieri ne pourra être tenu responsable de l&apos;inexécution de ses obligations
              en cas de force majeure (catastrophe naturelle, grève, épidémie, etc.). Dans ce cas,
              une solution de report sera proposée à l&apos;amiable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              7. Responsabilité
            </h2>
            <p className="text-sm leading-relaxed">
              Le client s&apos;assure que les conditions d&apos;installation du four à bois
              (espace suffisant, accès, absence de risques) sont réunies. Marc Ruggieri est assuré
              pour son activité professionnelle. Sa responsabilité ne peut être engagée pour des
              dommages résultant d&apos;informations incorrectes fournies par le client.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              8. Loi applicable et juridiction
            </h2>
            <p className="text-sm leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige, les parties
              s&apos;efforceront de trouver une solution amiable. À défaut, le tribunal compétent
              sera celui de Colmar (68).
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
