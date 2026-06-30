# Priorisation finale — Poivre & Salé

Score Impact/Effort. Bloquants en tête. Équilibré technique / conversion / confiance.

## ✅ DÉJÀ FAIT (ce jour)
- TRUST-001 Purge marque · TRUST-002 vrais avis Google · TRUST-003 note 4,7 · TRUST-004 "fait maison" retiré
- CRO-001 🔴 bug formule gourmande (devis 17€ perdus) · CONTENU-001 minimum 20→30

## 🔴 BLOQUANTS (à faire avant toute pub / priorité absolue)
| ID | Tâche | Effort | Fichier |
|----|-------|--------|---------|
| FORM-001 | `/api/contact` n'enregistre PAS les leads en Firestore (email seul) → 12 CTA sur 14 perdent la trace du lead. Faire écrire dans `reservations`/`leads`. | M | app/api/contact/route.ts |
| ANALYTICS-001 | Measurement ID incohérent : code=G-3ENEQ729D7 (fantôme) vs réel G-M1D5TRM3MT. Nettoyer .env.local / layout. | S | .env.local, layout.tsx |
| SEO-001 | robots.txt pointe sur tarte-flambee.vercel.app. Définir NEXT_PUBLIC_SITE_URL=https://flamme-traiteur.fr | S | .env.local / robots.ts |
| ANALYTICS-002 | ✅ FAIT/EXISTANT : conversions Ads déjà branchées (AW-18117082922, 2 labels, conversion_linker). Reste à vérifier EN COMPTE Ads que les conversions remontent + sont "Principales". | — |

## ⚡ QUICK WINS (fort impact, faible effort)
| ID | Tâche | Effort | Fichier |
|----|-------|--------|---------|
| FORM-002 | Aligner minimum couverts /reservation (35→30) sur le reste du site, OU clarifier la règle. | S | app/reservation/page.tsx:60,196,197 |
| SEO-002 | Ajouter /reservation + /allergenes au sitemap.ts | S | app/sitemap.ts |
| SEO-003 | Ajouter metadata (title/description) à /reservation via layout.tsx | S | app/reservation/layout.tsx (à créer) |
| CONTENU-002 | Unifier la zone d'intervention (3 périmètres → 1 cohérent) | S | Formules.tsx, Zone.tsx, Faq.tsx, layout JSON-LD (À FOURNIR rayon) |
| DESIGN-002 | Remplacer emojis-icônes du formulaire reservation par lucide | S | app/reservation/page.tsx:14-17,227,251,263,275,278 |

## 🟠 P2 (impact moyen / effort moyen)
| ID | Tâche | Effort |
|----|-------|--------|
| DESIGN-001 | Refondre /reservation aux tokens du site (41 hex → copper/bark, police Fraunces) OU supprimer la page et rediriger vers /contact (unifier en 1 seul formulaire de devis) | L |
| PERF-001 | Optimiser images (Hero 1,8 Mo + galerie) → WebP/AVIF responsive. Cible LCP mobile <2,5s (actuel 5,2s) | M |
| TECH-001 | Occasions.tsx : <img> natif → next/image (4 images) | S |
| SEO-004 | Double H1 sur /suivi/[id] → un seul | S |

## 🟡 P3 (nettoyage / faible impact) — ✅ TOUS FAITS
| ID | Tâche | État |
|----|-------|------|
| TECH-002 | Code mort supprimé (7 fichiers orphelins) | ✅ commit 26bf40e |
| ANALYTICS-003 | Consent Mode v2 RÉEL : default denied + consent_update au clic | ✅ commit 07359c1 |
| CONTENU-003 | "pâte préparée le matin" → "pâte laminée fine" + coquille ferronnier | ✅ commit 07359c1 |
| TECH-001 | Occasions <img> → next/image | ✅ commit 07359c1 |
| MEDIA | Nettoyage 232Mo → 7Mo (vidéos/HEIC/doublons non servis) | ✅ commit 07359c1 |
| SEO-004 | "double H1" /suivi/[id] → FAUX POSITIF : 2 H1 dans branches séparées (early-return), jamais ensemble. Rien à corriger. | ✅ vérifié |

## RESTE (dépend de Seb ou externe)
- Zone d'intervention : harmoniser le rayon chiffré (Seb : pas prioritaire). Garder les VILLES (bon SEO).
- LCP mobile ~5,4s : cause = H1 police Fraunces (images déjà optimisées + servies WebP par Next). Investigation perf fine optionnelle.
- Vérifier EN COMPTE Google Ads que les 2 conversions remontent + sont "Principales" (pas d'accès API au compte Ads).
- Search Console : re-tirer les mots-clés réels vers début juillet (propriété créée le 30/06).
- Refonte visuelle /contact (optionnel — formulaire unique désormais).
