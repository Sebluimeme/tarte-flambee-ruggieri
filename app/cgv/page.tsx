import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Poivre & Salé",
  description:
    "Conditions Générales de Vente de Poivre & Salé — prestation tarte flambée à domicile en Alsace. Tarifs, annulation, allergènes, assurance.",
  robots: { index: true, follow: true },
};

const SIRET = "812 751 469 00014";

export default function CGVPage() {
  return (
    <main className="bg-cream-50 min-h-screen pt-24 pb-24 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-stone-400 hover:text-copper-500 transition-colors mb-12"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <h1 className="font-display text-4xl font-medium text-bark-900 mb-2">
          Conditions Générales de Vente
        </h1>
        <p className="font-sans text-sm text-stone-400 mb-12">
          Dernière mise à jour : mai 2026
        </p>

        <div className="space-y-10 font-sans text-bark-700">

          {/* 1 — Identité du prestataire */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              1. Identité du prestataire
            </h2>
            <div className="text-sm leading-relaxed space-y-1">
              <p><strong>Poivre &amp; Salé</strong> — Cuisinier Traiteur</p>
              <p>Le Bonhomme, 68650 (Haut-Rhin, Alsace)</p>
              <p>
                Téléphone :{" "}
                <a href="tel:+33785621089" className="text-copper-500 hover:underline">
                  07 85 62 10 89
                </a>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:contact@poivresale.fr" className="text-copper-500 hover:underline">
                  contact@poivresale.fr
                </a>
              </p>
              <p>SIRET : {SIRET}</p>
              <p>
                Activité soumise à la réglementation relative à la vente de denrées alimentaires et à la
                restauration à domicile.
              </p>
            </div>
          </section>

          {/* 2 — Objet et champ d'application */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              2. Objet et champ d&apos;application
            </h2>
            <p className="text-sm leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toutes les prestations
              de service réalisées par Poivre & Salé. Elles
              régissent les relations contractuelles entre Poivre & Salé et ses clients particuliers ou
              professionnels pour toute prestation de tarte flambée à domicile (mariages, anniversaires,
              soirées d&apos;entreprise et tout événement privé ou public en Alsace). Toute commande implique
              l&apos;acceptation pleine et entière des présentes CGV.
            </p>
          </section>

          {/* 3 — Devis et commande */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              3. Devis et commande
            </h2>
            <div className="text-sm leading-relaxed space-y-3">
              <p>
                Toute prestation fait l&apos;objet d&apos;un devis préalable gratuit, établi après échange sur la
                nature de l&apos;événement, le nombre de convives, le lieu et les options souhaitées.
              </p>
              <p>
                La commande est confirmée à réception d&apos;un accord écrit du client
                (email, SMS ou signature du devis).
              </p>
            </div>
          </section>

          {/* 4 — Prix et modalités de paiement */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              4. Prix et modalités de paiement
            </h2>
            <div className="text-sm leading-relaxed space-y-3">
              <p>
                Les prix indiqués dans les devis sont exprimés en euros toutes taxes comprises (TVA applicable).
              </p>
              <p>
                Les tarifs varient en fonction du nombre de convives, de la distance, de la durée et des
                options choisies (formules, boissons, personnel supplémentaire).
              </p>
              <div className="bg-cream-100 border border-stone-200 rounded-xl p-5 space-y-2">
                <div className="flex gap-3">
                  <span className="text-copper-500 flex-shrink-0">›</span>
                  <span>
                    <strong>Paiement le jour de la prestation</strong>, avant ou après le service, par
                    virement bancaire, chèque ou espèces.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 5 — Délais et conditions d'intervention */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              5. Délais et conditions d&apos;intervention
            </h2>
            <div className="text-sm leading-relaxed space-y-3">
              <p>
                Poivre & Salé intervient principalement en Alsace, dans un rayon indicatif de 80 km autour
                de Le Bonhomme (68650). Toute intervention hors zone peut faire l&apos;objet d&apos;un supplément
                de déplacement précisé dans le devis.
              </p>
              <p>
                La réservation est recommandée <strong>au minimum 3 semaines avant l&apos;événement</strong>,
                idéalement 2 à 3 mois pour les dates en haute saison (juin à septembre, fêtes de fin
                d&apos;année).
              </p>
            </div>
          </section>

          {/* 6 — Obligations du prestataire */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              6. Obligations du prestataire
            </h2>
            <div className="text-sm leading-relaxed space-y-2">
              {[
                "Se présenter à l'heure convenue, avec l'ensemble du matériel nécessaire (four à bois mobile, ustensiles, équipements de sécurité).",
                "Fournir des ingrédients frais et de qualité, sélectionnés selon la saison.",
                "Respecter les règles d'hygiène alimentaire (normes HACCP) tout au long de la prestation.",
                "Laisser les lieux dans un état de propreté conforme à leur état initial.",
                "Informer le client sans délai de tout imprévu susceptible d'affecter le bon déroulement de la prestation.",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-copper-500 flex-shrink-0">›</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 7 — Obligations du client */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              7. Obligations du client
            </h2>
            <div className="text-sm leading-relaxed space-y-2">
              {[
                "Garantir un accès véhicule au lieu de la prestation (chemin praticable pour un utilitaire).",
                "Mettre à disposition un point d'eau à moins de 20 m du poste de travail.",
                "Fournir une prise électrique standard (230 V, 16 A) à moins de 10 m.",
                "Prévoir un espace dégagé d'au moins 4 m² avec une hauteur sous plafond ou sous structure de minimum 3 m pour l'installation du four à bois.",
                "Informer Poivre & Salé de toute allergie ou intolérance alimentaire d'un convive au minimum 7 jours avant la prestation.",
                "Prévenir sans délai de tout changement affectant les conditions d'accueil (lieu, horaire, nombre de convives).",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-copper-500 flex-shrink-0">›</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 8 — Annulation et modification */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              8. Annulation et modification
            </h2>
            <div className="text-sm leading-relaxed space-y-4">
              <div>
                <p className="font-medium text-bark-900 mb-2">Annulation par le client</p>
                <div className="bg-cream-100 border border-stone-200 rounded-xl p-5 space-y-2">
                  <div className="flex gap-3">
                    <span className="text-copper-500 flex-shrink-0">›</span>
                    <span>
                      L&apos;annulation est <strong>gratuite</strong>, sans frais, quelle que soit la date de signalement. Signalez votre annulation par écrit dès que possible.
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-medium text-bark-900 mb-2">Modification par le client</p>
                <p>
                  Toute modification (date, nombre de convives, lieu) doit être signalée par écrit dès
                  que possible. Poivre & Salé s&apos;engage à faire son possible pour l&apos;accepter sous réserve
                  de disponibilité. Un avenant au devis peut être émis si les modifications entraînent
                  un surcoût.
                </p>
              </div>
              <div>
                <p className="font-medium text-bark-900 mb-2">Annulation par le prestataire</p>
                <p>
                  En cas d&apos;annulation par Poivre & Salé pour motif légitime hors force majeure,
                  une solution de report sera proposée en priorité.
                </p>
              </div>
            </div>
          </section>

          {/* 9 — Force majeure */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              9. Force majeure
            </h2>
            <p className="text-sm leading-relaxed">
              Poivre & Salé ne pourra être tenu responsable de l&apos;inexécution totale ou partielle de ses
              obligations en cas de survenance d&apos;un événement de force majeure au sens de l&apos;article 1218
              du Code civil (catastrophe naturelle, intempéries exceptionnelles rendant le transport
              impossible, épidémie, grève affectant les approvisionnements, incendie, etc.). Les parties
              se rapprocheront pour convenir d&apos;un report dans les meilleurs délais.
            </p>
          </section>

          {/* 10 — Assurance et responsabilité */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              10. Assurance et responsabilité
            </h2>
            <div className="text-sm leading-relaxed space-y-3">
              <p>
                Poivre & Salé est titulaire d&apos;une assurance responsabilité civile professionnelle
                couvrant l&apos;ensemble de ses prestations. Une attestation peut être fournie sur demande.
              </p>
              <p>
                La responsabilité de Poivre & Salé ne saurait être engagée pour des dommages résultant
                d&apos;informations incorrectes ou incomplètes fournies par le client (lieu inadapté, accès
                non prévu, allergies non signalées dans les délais, etc.).
              </p>
              <p>
                Le client est responsable de la sécurité des convives et de la zone d&apos;accueil autour du
                four à bois pendant toute la durée de la prestation. L&apos;accès au four est interdit aux
                enfants sans surveillance adulte.
              </p>
            </div>
          </section>

          {/* 11 — Allergènes */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              11. Allergènes
            </h2>
            <p className="text-sm leading-relaxed">
              Conformément au règlement européen (UE) n° 1169/2011 relatif à l&apos;information des
              consommateurs sur les denrées alimentaires, la <strong>liste des 14 allergènes majeurs
              présents dans nos recettes est disponible sur demande</strong>. Tout convive présentant une
              allergie ou une intolérance alimentaire doit en informer Poivre & Salé{" "}
              <strong>au minimum 7 jours avant la prestation</strong>, afin de permettre l&apos;adaptation
              du menu dans la mesure du possible. Malgré toutes les précautions prises, une contamination
              croisée ne peut être totalement exclue dans un environnement de cuisine mobile.
            </p>
          </section>

          {/* 12 — Hygiène */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              12. Hygiène et sécurité alimentaire
            </h2>
            <div className="text-sm leading-relaxed space-y-3">
              <p>
                Poivre & Salé applique les principes de la méthode HACCP (Hazard Analysis Critical Control
                Points) dans le cadre de son activité de restauration mobile, conformément au règlement
                (CE) n° 852/2004 relatif à l&apos;hygiène des denrées alimentaires.
              </p>
              <p>
                Poivre & Salé est titulaire d&apos;une formation en hygiène alimentaire adaptée à l&apos;activité
                de restauration commerciale (décret n° 2011-731 du 24 juin 2011). Les produits utilisés
                respectent la chaîne du froid jusqu&apos;au moment du service.
              </p>
            </div>
          </section>

          {/* 13 — Protection des données */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              13. Protection des données personnelles
            </h2>
            <p className="text-sm leading-relaxed">
              Les données collectées (nom, coordonnées, nature de l&apos;événement) sont utilisées
              exclusivement dans le cadre de la relation commerciale et ne sont transmises à aucun
              tiers. Conformément au Règlement Général sur la Protection des Données (RGPD), vous
              disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données en
              contactant Poivre & Salé à l&apos;adresse{" "}
              <a href="mailto:contact@poivresale.fr" className="text-copper-500 hover:underline">
                contact@poivresale.fr
              </a>
              .
            </p>
          </section>

          {/* 14 — Litiges */}
          <section>
            <h2 className="font-display text-xl font-medium text-bark-900 mb-4">
              14. Litiges et droit applicable
            </h2>
            <div className="text-sm leading-relaxed space-y-3">
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, les parties
                s&apos;efforceront de trouver une solution amiable. À défaut de résolution amiable dans un
                délai de 30 jours, le litige sera porté devant le tribunal compétent du ressort de{" "}
                <strong>Strasbourg (67)</strong>.
              </p>
              <p>
                Conformément aux articles L.612-1 et suivants du Code de la consommation, tout
                consommateur a le droit de recourir gratuitement à un médiateur de la consommation en
                vue de la résolution amiable du litige. Médiateur compétent :{" "}
                <strong>Médiation de la consommation</strong> — coordonnées disponibles sur demande ou
                sur{" "}
                <a
                  href="https://www.economie.gouv.fr/mediation-conso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copper-500 hover:underline"
                >
                  economie.gouv.fr/mediation-conso
                </a>
                .
              </p>
            </div>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-stone-200">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-copper-500 hover:text-copper-400 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
