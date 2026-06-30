# Audit de conversion — Poivre & Salé (flamme-traiteur.fr)

> Audit lecture seule. Toute reco étiquetée : [OBSERVÉ] preuve fichier:ligne · [BONNE PRATIQUE] · [DOC] · [VÉRIFIÉ] commande réelle · [HYPOTHÈSE].
> Date : 2026-06-30. Site Next.js 16.2.6 / React 19 / Tailwind 4 / Firebase. Stack vérifiée.
> ⚠️ Volume GA4 faible (352 sessions/30j) → AUCUN taux de conversion exploité. Audit basé sur CODE / CONTENU / UX / SEO technique.

---

## SYNTHÈSE EXÉCUTIVE

Site globalement bien construit (Lighthouse mobile : Perf 79, A11y 96, Best-practices 100, SEO 100). Structure home solide, FAQ riche, vrais avis Google en place (corrigés ce jour). Les vrais problèmes ne sont PAS techniques de base mais :
1. **Incohérences de données factuelles** entre pages (minimums convives, formules) — nuit à la confiance.
2. **Architecture des leads à deux têtes** (/contact email-only vs /reservation Firestore) — risque de perte de leads + reporting impossible.
3. **Page /reservation non refondue** — design en rupture totale avec le reste du site (hex hardcodés, mauvaise police, emojis-icônes).
4. **SEO technique** : robots.txt mauvais domaine, 2 pages hors sitemap, 1 page sans metadata.
5. **Perf mobile** : LCP 5,2 s (image Hero 1,8 Mo non optimisée).

---

## ✅ DÉJÀ CORRIGÉ CE JOUR (commits f1cd1f5 + dbd4648)
- Purge identité marque (Maison Ruggieri → Poivre & Salé partout, domaine flamme-traiteur.fr). [VÉRIFIÉ grep]
- 5 faux témoignages → 6 vrais avis Google. [VÉRIFIÉ fiche Google]
- Note 4,9 → 4,7 (vraie note Google). [VÉRIFIÉ]
- "100% fait maison" retiré (non défendable, décret 2014-797) → "Feu de bois / Cuisson sur place".
- 🔴 BUG conversion : formulaire contact postait formule="gourmande" rejetée par l'API (validait "association") → 400, devis 17€ perdus. CORRIGÉ. [VÉRIFIÉ Contact.tsx:48 vs route.ts:33]
- Minimum convives unifié 20→30 (Hero, Occasions, particuliers, formules, soiree-entreprise). [VÉRIFIÉ grep]

---

## M11 — ANALYTICS / TRACKING (gate avant pub) 🔴 PRIORITAIRE

- [VÉRIFIÉ API GA4] Trafic 30j : 352 sessions, 269 users, 582 pv, 31 form_start, 13 click. Events présents : page_view, scroll, form_start. **Aucun `generate_lead` visible côté événements GA4 standard** → à confirmer en temps réel.
- [VÉRIFIÉ conteneur GTM public GTM-54QTLCPW] Le pipeline existe : GTM écoute `form_contact_submit`, `form_reservation_submit`, émet `generate_lead` → GA4 `G-M1D5TRM3MT`.
- 🔴 [VÉRIFIÉ] **Incohérence Measurement ID** : la vraie propriété GA4 (536984060, stream "Tarte flambée") = `G-M1D5TRM3MT`. Le code `.env.local` déclare `G-3ENEQ729D7` (ID fantôme, absent de la propriété). Le tracking marche via GTM mais l'ID du code est mort/erroné → nettoyer.
- ✅ [VÉRIFIÉ conteneur GTM] **Conversions Google Ads BRANCHÉES** : compte `AW-18117082922`, ≥2 actions de conversion (labels `u8r8CLO_hq8cEKr-8r5D`, `eN_fCK-6n68cEKr-8r5D`), 10 tags `__awct` + 5 `conversion_linker` + gestion gclid (75 occ.). Tracking Ads opérationnel. (Correction : un 1er passage avait conclu à tort "pas d'Ads" en cherchant un ID `AW-` en clair ; dans un conteneur compilé l'ID est dans `vtp_conversionId`.)
- 🟡 [À VÉRIFIER en Ads] Que chaque action de conversion reçoit bien des conversions (pas juste le tag posé) + qu'elle est marquée "Principale". Nécessite accès compte Ads.
- 🟡 Consent Mode v2 : à vérifier réellement (le CookieBanner pousse-t-il un consent_update écouté par GTM ?). [À CREUSER]

## M12 — FORMULAIRES / CAPTURE DE LEADS 🔴

- 🔴 [VÉRIFIÉ] **Deux formulaires de devis concurrents avec destinations différentes** :
  - `/contact` (Contact.tsx:80) → POST `/api/contact` → **email Resend uniquement, PAS de persistance Firestore**. Si l'email échoue, lead perdu, aucune trace.
  - `/reservation` (reservation/page.tsx:84) → **Firestore `reservations`** + email notify. Persisté.
  - 12 CTA du site pointent vers `/contact`, 1 seul vers `/reservation`. Donc **la majorité des leads ne sont PAS enregistrés en base** — uniquement par email. [VÉRIFIÉ grep 12 vs 1]
  - **Reco** : faire écrire `/api/contact` dans Firestore aussi (collection `leads` ou `reservations`), comme le fait /reservation. Source unique de vérité des demandes.
- 🟠 [VÉRIFIÉ reservation:60] **3e incohérence minimum** : /reservation impose "min. 35 couverts", le reste du site dit 30. (note : mariage Premium = "dès 35 convives" 24€, cohérent ; mais le minimum GLOBAL formulaire à 35 bloque une demande Standard à 30.)
- 🟡 Contact.tsx : champ formule "gourmande" désormais aligné (corrigé). RGPD checkbox présente. Anti-spam : rate-limit IP 3/10min côté API [VÉRIFIÉ route.ts:7-21]. Bien.

## M9 — GRAPHIQUE / VISUEL 🟠

- 🔴 [VÉRIFIÉ reservation/page.tsx] **Page /reservation non refondue** : 41 couleurs hex hardcodées (#D4621A, #3D2010…) au lieu des tokens Tailwind ; police `var(--font-playfair)` (inexistante — le site utilise Fraunces/Inter) → fallback serif ; emojis comme icônes (🍽️🥂✨ℹ️📞✉️🔥). Rupture visuelle totale avec le reste du site refondu. **Soit la refondre, soit la supprimer au profit de /contact.**
- 🟡 [VÉRIFIÉ reservation:14-17,227] **Emojis comme icônes** dans le sélecteur boissons et le bouton submit → remplacer par icônes lucide (le reste du site utilise lucide proprement).
- 🟡 [OBSERVÉ] Occasions.tsx:227 utilise `<img>` natif au lieu de `next/image` (eslint-disable explicite) → perte d'optimisation auto sur 4 images.

## M10 — TECHNIQUE / PERF 🟠

- 🟠 [VÉRIFIÉ Lighthouse mobile 2 passes] **LCP 5,2-5,4 s** (seuil bon < 2,5 s). CLS 0 ✅, TBT ~150-180 ms ✅, FCP ~1,1-1,3 s ✅.
  - ⚠️ CONSTAT CORRIGÉ : la cause n'est PAS le poids des images. [VÉRIFIÉ] Next/Image sert déjà le hero en **WebP 35 Ko** sur mobile (w=750, q75). La compression des sources (22→5 Mo, commit 516bfd3) a allégé le repo/build mais n'a PAS bougé le LCP (5,2→5,4s, poids page identique ~1640 KiB).
  - Cause réelle probable [HYPOTHÈSE à confirmer] : le LCP est le **H1 en police Fraunces** (font display chargée via next/font, swap) ou un retard de rendu mobile. Piste : précharger la font du H1, ou réduire la taille du H1 above-the-fold. À investiguer avec une trace WebPageTest/film LCP.
  - 🟡 unused-javascript ~214 KiB (Framer Motion partout). Optimisable (lazy-load animations hors viewport).
- ✅ Best-practices 100, HTTPS OK, headers via Vercel.

## M3 — SEO TECHNIQUE 🟠

- 🔴 [VÉRIFIÉ robots.ts] **robots.txt pointe vers le mauvais domaine** : `NEXT_PUBLIC_SITE_URL` non défini → fallback `https://tarte-flambee.vercel.app`, donc le sitemap déclaré dans robots.txt = `tarte-flambee.vercel.app/sitemap.xml` au lieu de flamme-traiteur.fr. [VÉRIFIÉ .env.local : var absente]
- 🟠 [VÉRIFIÉ] **3 pages absentes du sitemap.ts** : `/reservation`, `/allergenes` (réelles), `/entreprises` (redirect 308 → normal de l'exclure).
- 🟠 [VÉRIFIÉ] **2 pages sans metadata SEO** : `/reservation` et `/entreprises` (cette dernière = redirect, OK). /reservation = vraie page indexable sans title/description propres → mauvais snippet Google.
- 🟡 [VÉRIFIÉ] **Double H1** sur `/suivi/[id]` (lignes 113 + 163). Un seul H1 par page. (page noindex via robots, impact faible.)
- ✅ Lighthouse SEO 100. JSON-LD LocalBusiness+Caterer présent (layout.tsx), métadonnées home riches, sitemap.xml + robots.txt générés.
- ✅ FAQ 10 questions = excellent pour SEO longue traîne + GEO.

## M5 — CONTENU / COHÉRENCE 🟠

- 🟠 [VÉRIFIÉ] **Zone d'intervention à 3 périmètres différents** : JSON-LD = Bas-Rhin+Haut-Rhin+Vosges+Belfort ; texte Zone/FAQ = "80 km autour du Bonhomme" ; formule Standard = "20 km autour de Colmar". À unifier (quel rayon réel + quels frais au-delà ?).
- 🟡 [OBSERVÉ] "Pâte laminée fine sélectionnée" (Process) vs ailleurs "pâte fraîche" (Hero) — léger flou sur le fait maison ou non de la pâte.

## CODE MORT (M10) 🟡
- [VÉRIFIÉ] 3 composants Footer : seul `components/layout/Footer.tsx` est importé (layout.tsx). `components/Footer.tsx` et `app/components/Footer.tsx` = orphelins.
- [VÉRIFIÉ] 2 Header : seul `components/layout/Header.tsx` importé. `components/Header.tsx` orphelin.
- [VÉRIFIÉ] Sections jamais importées : `Services.tsx`, `Territoire.tsx`, `Stats.tsx`. (Contact.tsx EST utilisé par /contact.)
- Reco : supprimer les orphelins pour clarté (sans impact rendu, ils ne sont pas bundlés).

## ✅ POINTS FORTS CONFIRMÉS
- Entonnoir home complet et logique. CTA répétés, tél partout, WhatsApp flottant.
- Accessibilité 96 (aria-labels, focus rings, skip-link, alt texts présents).
- FAQ riche, mentions légales complètes (SIRET, APE 5610C, hébergeur, raison sociale POIVR'&SALE).
- Vrais avis Google variés (mariage, asso, baptême, confirmation, Local Guide).
- Anti-spam rate-limit, RGPD, escapeHtml côté API. Bon niveau de sérieux back.

---

## À FOURNIR (Seb) — valeurs non vérifiables
1. Zone d'intervention réelle : rayon exact + frais de déplacement au-delà ?
2. Compte Google Ads : existe ou part de zéro ? (détermine le branchement conversion AW-)
3. Minimum de couverts définitif : 30 partout, ou bien 30 Standard / 35 pour certaines formules ? (clarifier la règle)
