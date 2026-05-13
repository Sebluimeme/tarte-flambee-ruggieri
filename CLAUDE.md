@AGENTS.md

# CLAUDE.md — Maison Ruggieri / Tarte Flambée

## Projet

Site vitrine + réservation pour **Maison Ruggieri** — prestation tarte flambée (flammekueche) au four à bois à domicile en Alsace.

- **Domaine** : maison-ruggieri.fr
- **Client** : Marc Ruggieri, Le Bonhomme (Alsace)
- **Contact** : +33 7 85 62 10 89 / contact@poivresale.fr
- **SIRET** : 812 751 469 00014
- **Repo GitHub** : `git@github.com:Sebluimeme/tarte-flambee-ruggieri.git`
- **Local** : `~/.openclaw/workspace/tarte-flambee/`
- **Branche principale** : `main`

## Stack

| Couche | Techno |
|--------|--------|
| Framework | Next.js 16.2.6 (App Router) |
| UI | React 19, Tailwind 4, Framer Motion, Lucide React |
| Typo | Fraunces (serif, display) + Inter (sans, corps) |
| Backend | Firebase (Firestore + Auth + Analytics) |
| Langue | TypeScript strict |

## Structure

```
app/
  layout.tsx          — RootLayout, metadata SEO, JSON-LD Schema.org
  page.tsx            — Page d'accueil
  lib/firebase.ts     — Init Firebase (db, auth, analyticsPromise)
  reservation/        — Formulaire de réservation
  formules/           — Offres et tarifs
  contact/            — Formulaire contact/devis
  a-propos/           — Histoire Maison Ruggieri
  allergenes/         — Mentions allergènes
  admin/              — Back-office (page protégée)
  cgv/ mentions-legales/ confidentialite/ cookies/

components/
  layout/
    Header.tsx        — Navigation sticky
    Footer.tsx
  sections/           — Blocs page d'accueil (Hero, Concept, Formules, etc.)
  ui/
    Button.tsx
    CookieBanner.tsx
```

## Firebase

Variables d'environnement dans `.env.local` (ne jamais committer) :

```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
```

Initialisation dans `app/lib/firebase.ts` — exports : `db` (Firestore), `auth`, `analyticsPromise`.

## Identité visuelle

- Palette : crème (`cream-50`), brun écorce (`bark-900`), cuivre (`copper-500`)
- Ton : artisanal, chaleureux, authentique alsacien
- Photos réelles dans `public/media/` (ne pas remplacer par des placeholders)

## Règles importantes

- **Ne jamais changer le SIRET** (812 751 469 00014) ni le domaine (`maison-ruggieri.fr`)
- **Email de contact** : `contact@poivresale.fr` (lié au domaine poivresale.fr du client)
- **Numéro de téléphone** : +33 7 85 62 10 89
- Les métadonnées SEO sont dans `app/layout.tsx` — ne pas dupliquer dans les pages filles
- Analytics Firebase uniquement côté client (guard `typeof window !== "undefined"`)

## Commandes

```bash
cd ~/.openclaw/workspace/tarte-flambee
npm run dev      # dev sur localhost:3000
npm run build    # build de prod
npm run lint     # ESLint
```
