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
2. ✅ RÉSOLU — "200+ événements réalisés" : confirmé défendable par Seb. Conservé.
3. ✅ RÉSOLU — "100% fait maison" : RETIRÉ (jugement Hermes : non défendable, décret 2014-797 fait-maison, pâte "sélectionnée" donc achetée). Remplacé par "Feu de bois / Cuisson sur place".
4. ✅ RÉSOLU — Minimum convives : unifié à 30 partout (Hero, Occasions, particuliers, formules, soiree-entreprise).
5. ✅ RÉSOLU — Nom formule : "Gourmande" retenu (utilisé 8× partout vs "association" oublié dans 1 fichier API). BUG CONVERSION corrigé au passage (API rejetait formule=gourmande → 400 → devis 17€ perdus).

## Commits poussés
- f1cd1f5 : purge identité marque
- dbd4648 : vrais avis Google + note 4,7 + fix bug formule + minimum 30
- 73d3c69 : balise vérif Search Console
- 14e5996 : FORM-001 persistance leads /contact Firestore + SEO-001 robots domaine
- 497c7a3 : suppression /reservation (redirect 308→/contact) + retrait Firebase Analytics (tout via GTM)
- 26bf40e : suppression 7 fichiers code mort + /allergenes au sitemap
- 516bfd3 : compression 13 images servies (22Mo→5Mo, hero 1,8Mo→335Ko)

## Accès Google (tous OK, persistants ~/.hermes/credentials/tarte-flambee-sa.json)
- GA4 ✅ property 536984060 (vrai MID G-M1D5TRM3MT ; code a un ID fantôme G-3ENEQ729D7)
- Search Console ✅ https://flamme-traiteur.fr/ (créée 30/06, 0 donnée encore, re-tirer début juillet)
- Google Ads ✅ AW-18117082922, 2 conversions, conversion_linker (Seb a confirmé : tracking déjà branché)
- GTM ✅ GTM-54QTLCPW lu

## RESTE bloquant en attente validation Seb
- ✅ ANALYTICS-001 RÉSOLU (commit 497c7a3) : Firebase Analytics retiré de lib/firebase.ts. Tout via GTM (choix Seb option A). ID fantôme G-3ENEQ729D7 éliminé.
- ✅ /reservation SUPPRIMÉE (commit 497c7a3) : page + API reservation-notify supprimées, redirect 308 → /contact (vérifié en prod). Formulaire unique = /contact (qui persiste les leads).

## Points ouverts NON prioritaires (Seb a dit : pas important pour l'instant)
- Zone d'intervention : 3 rayons chiffrés incohérents (80km Bonhomme / 20km Colmar / 4 départements). NE PAS toucher aux VILLES listées (bon pour SEO local). Juste harmoniser le rayon de déplacement inclus quand Seb donnera le vrai chiffre. → reporté.
- LCP mobile 5,4s : cause = H1 police Fraunces (pas les images, déjà optimisées). Investigation perf fine si besoin un jour.
- Refonte visuelle /contact (formulaire unique désormais).
- Nom : Poivre Et Sale · kgmid /g/11w2178bdy · CID 0xc9c27150451563f2
- Note : **4,7/5** · Adresse : 129 La Chapelle, 68650 Le Bonhomme · Catégorie : Traiteur
- 11 avis lus : 10 positifs (mariage, festival/asso Kaysersberg, baptême, confirmation, entreprise) + 1 négatif (Seb 916, RDV oublié, réponse pro du proprio).

## Journal
- 2026-06-30 : cadrage + purge marque + lecture home + livrables initiaux.
