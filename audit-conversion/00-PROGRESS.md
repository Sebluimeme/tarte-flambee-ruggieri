# 00-PROGRESS — Audit conversion Poivre & Salé (flamme-traiteur.fr)

> Point de reprise anti-crash. Mis à jour après chaque étape.

## Cadrage validé (Seb, 2026-06-30)
- Marque = **Poivre & Salé** · Domaine = **flamme-traiteur.fr** · Email = **contact@poivresale.fr** · Gérant = **Marc Ruggieri**
- Source de vérité : `~/Documents/AI-Memory/Agent-Shared/poivre-et-sale-identite.md`
- Code : `/home/seb/.hermes/workspace/tarte-flambee` · repo `Sebluimeme/tarte-flambee-ruggieri` (main)
- Stack : Next.js 16.2.6, React 19, Tailwind 4, Framer Motion, Firebase, TS strict.

## Accès données
- GA4 / Search Console / GTM (GTM-54QTLCPW) : accès À CONFIRMER avec Seb (pas encore testé pour ce projet).
- Resend : domaine vérifié = flamme-traiteur.fr (à confirmer). poivresale.fr non vérifié → option email = 1 (replyTo).

## État des phases
- [x] PHASE 0 — Purge identité de marque (commit f1cd1f5, pushé, build exit 0)
- [~] PHASE 1 — Collecte matériel : code home lu intégralement. Captures rendu desktop/mobile : PAS ENCORE. Lighthouse : PAS ENCORE.
- [~] Modules : M0-M9 home rédigés (lecture seule). M10-M14 + pages internes : à faire.
- [ ] Captures headless desktop+mobile (script scripts/capture-audit-sliced.js)
- [ ] Lighthouse réel desktop+mobile
- [ ] Pages internes : formules, reservation, contact, a-propos, particuliers, entreprises, 4 landings, légales
- [ ] Priorisation finale

## Inventaire 21 routes (vérifié)
accueil, formules, reservation, contact, a-propos, allergenes, entreprises, particuliers,
tarte-flambee-{mariage,anniversaire,soiree-entreprise,association}, suivi/[id], confirmation,
merci, admin, admin/dashboard, cgv, mentions-legales, confidentialite, cookies.

## QUESTIONS À FOURNIR (bloquantes — règle 4.3, ne rien inventer)
1. ✅ RÉSOLU — Avis/témoignages : les 5 faux ont été remplacés par 6 VRAIS avis Google (Joanna Schneider, David Streissel, Thomas Marais, Renaud Peroz, Linda Hasnaoui, Alizée Escach). Note réelle 4,7/5 confirmée fiche Google. TrustBar 4,9→4,7 corrigé. Commit à pousser.
2. ⏳ **"200+ événements réalisés"** (Hero + TrustBar) : chiffre réel et défendable ? TOUJOURS À CONFIRMER.
3. ⏳ **"100% fait maison"** (TrustBar) : défendable ? (pâte laminée "sélectionnée" selon Process.tsx, pas forcément faite maison — possible contradiction).
4. ⏳ **Minimum de convives** : incohérence 20 vs 30. Hero "de 20 à 250", Occasions anniversaire "dès 20 couverts", mais toutes les formules disent "dès 30 personnes". Quel est le vrai minimum ?
5. ⏳ **Nom formule** : home = "Gourmande" (17€), mais formulaire devis API = "Association" (17€). Lequel garder ?

## Données fiche Google vérifiées (2026-06-30)
- Nom : Poivre Et Sale · kgmid /g/11w2178bdy · CID 0xc9c27150451563f2
- Note : **4,7/5** · Adresse : 129 La Chapelle, 68650 Le Bonhomme · Catégorie : Traiteur
- 11 avis lus : 10 positifs (mariage, festival/asso Kaysersberg, baptême, confirmation, entreprise) + 1 négatif (Seb 916, RDV oublié, réponse pro du proprio).

## Journal
- 2026-06-30 : cadrage + purge marque + lecture home + livrables initiaux.
