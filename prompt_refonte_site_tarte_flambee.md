# PROMPT — REFONTE COMPLÈTE DU SITE TARTE FLAMBÉE

Tu es designer + développeur front-end senior spécialisé dans les sites artisans premium. Tu vas refaire entièrement le site `tarte-flambee-one.vercel.app` (Marc Ruggieri, prestation tarte flambée à domicile en Alsace). Le site est en **Next.js + Tailwind CSS**, déployé sur Vercel. Tu travailles sur le repo existant.

L'objectif : transformer un site qui ressemble actuellement à un template générique avec des emojis partout en un site **artisan premium, chaleureux, crédible**, qui donne envie de réserver pour un mariage, un anniversaire ou un événement d'entreprise.

Tu vas suivre **rigoureusement** toutes les instructions ci-dessous, dans l'ordre. Tu ne dois rien laisser de côté. Si quelque chose n'est pas spécifié, tu utilises ton jugement de senior et tu fais le choix le plus premium / artisan / sobre.

---

## 1. PRINCIPES NON NÉGOCIABLES

Avant toute chose, voici les règles à appliquer **partout sur le site** :

1. **ZÉRO emoji**. Plus aucun emoji nulle part. Ni dans les logos, ni dans les titres, ni dans les boutons, ni dans les cartes, ni dans la navigation, ni dans le footer. Tous les emojis sont remplacés par des icônes SVG de la bibliothèque **Lucide React** (`lucide-react`), avec un trait fin (`strokeWidth={1.5}`).
2. **Pas de filtre orange sur les photos**. Les photos de nourriture doivent être nettes, dorées, appétissantes. Maximum un léger overlay sombre en bas (gradient `from-black/40 to-transparent`) pour la lisibilité du texte par-dessus.
3. **Respiration visuelle**. Backgrounds majoritairement crème / blanc cassé. L'orange est utilisé uniquement en accent (CTA, hover, séparateurs, liens). Pas de bloc orange massif.
4. **Pas de noir pur**. Le texte foncé utilise `#2B1810` (brun très sombre). Le noir pur fait synthétique.
5. **Photos réelles uniquement**. Aucune illustration générée IA évidente, aucune photo stock générique. Privilégier les vraies photos de Marc en intervention. Si placeholders nécessaires, utiliser des URLs Unsplash de tartes flambées / fours à bois / événements alsaciens authentiques (avec attribution si requis).
6. **Pas de pastilles colorées avec lettres** pour les témoignages (le "S", "J", "P" actuels sont à virer).
7. **Animations sobres**. Fade-in au scroll (avec `framer-motion`), hover discrets (translate-y de 2px max, ombre qui se renforce). Pas de bounce, pas de rotation, pas d'effet flashy.
8. **Mobile-first**. Tout doit être impeccable en mobile avant le desktop.

---

## 2. IDENTITÉ DE MARQUE

Renommer le site. Le nom actuel "Tarte Flambée" est le nom du produit, pas une marque. Nouvelle identité :

- **Nom de marque** : `Maison Ruggieri`
- **Tagline** : `Tarte flambée d'Alsace · Prestation à domicile`
- **Logo** : composer un logotype en `Fraunces` (titre du site), pas d'icône flamme. Le mot "Maison" en plus petit au-dessus de "Ruggieri" en plus grand. Ou les deux côte à côte. À toi de juger. Si tu veux un symbole, dessine un SVG sobre : un brin de blé stylisé, une flamme géométrique fine au trait, ou les initiales "MR" entrelacées. Pas d'emoji.
- **Voix** : artisan passionné, sincère, ancré en Alsace, sans esbroufe. Pas de superlatifs vides ("incroyable", "exceptionnel" sans contexte). Tutoiement non, vouvoiement professionnel.

---

## 3. DESIGN SYSTEM

### 3.1 Palette de couleurs (à mettre dans `tailwind.config.ts` sous `theme.extend.colors`)

```js
colors: {
  cream: {
    50:  '#FDFBF5',  // background principal
    100: '#FAF6EE',  // sections claires
    200: '#F5EDD8',  // cards, alternance de sections
    300: '#EDE0BF',  // bordures douces, hover sur fond clair
  },
  copper: {
    400: '#D87642',  // hover des CTA
    500: '#C75A2A',  // CTA principal (orange brûlé, moins saturé que l'actuel)
    600: '#A8451B',  // CTA actif / pressed
    700: '#8A3614',  // accents discrets
  },
  bark: {
    700: '#5C3A1F',  // texte secondaire
    800: '#3D2715',  // titres et navigation
    900: '#2B1810',  // texte principal (jamais de noir pur)
  },
  stone: {
    200: '#E8DFD0',  // bordures
    400: '#A89A82',  // texte tertiaire / labels
  },
}
```

Le fond global du `<body>` passe en `bg-cream-50`. Les sections alternent `cream-50` et `cream-100`. Les "blocs orange massifs" actuels sont supprimés.

### 3.2 Typographie

Charger via `next/font/google` :

- **Display / titres** : `Fraunces` (variable, axes opsz + soft + wght). C'est une serif moderne avec une chaleur artisanale parfaite pour le positionnement.
- **Corps de texte** : `Inter` (variable, wght).

Configuration Tailwind :

```js
fontFamily: {
  display: ['var(--font-fraunces)', 'serif'],
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
}
```

Échelle typographique (à utiliser strictement) :

| Usage | Classe | Détail |
|---|---|---|
| Hero H1 | `font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]` | Soft 100, opsz 144 |
| Section H2 | `font-display text-4xl md:text-5xl font-medium tracking-tight` | |
| Sous-titre / H3 | `font-display text-2xl md:text-3xl font-medium` | |
| Eyebrow / kicker | `font-sans text-sm uppercase tracking-[0.18em] text-copper-500` | Au-dessus des H2 |
| Corps grand | `font-sans text-lg leading-relaxed text-bark-700` | |
| Corps standard | `font-sans text-base leading-relaxed text-bark-700` | |
| Petit / label | `font-sans text-sm text-stone-400` | |
| Stats / chiffres | `font-display text-6xl md:text-7xl font-medium tracking-tight text-copper-500` | Pas en italique |

### 3.3 Espacements

- Padding vertical des sections : `py-20 md:py-28` (généreux)
- Padding horizontal du container : `px-6 md:px-8`
- Container max : `max-w-6xl mx-auto` (sauf hero qui peut être `max-w-7xl`)
- Gap entre cards : `gap-6 md:gap-8`

### 3.4 Composants visuels

- **Border radius** : `rounded-2xl` pour les cards, `rounded-full` pour les boutons CTA, `rounded-xl` pour les inputs.
- **Ombres** : `shadow-sm` au repos, `shadow-md` au hover. Jamais `shadow-2xl` ou ombres dramatiques.
- **Bordures** : `border border-stone-200` sur les cards sur fond clair.
- **Transitions** : `transition-all duration-200 ease-out` partout sur les éléments interactifs.

### 3.5 Boutons

Deux variantes seulement :

**Primaire** (CTA principal) :
```jsx
className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md"
```

**Secondaire** (CTA contextuel) :
```jsx
className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-100 transition-all"
```

Pas de troisième style. Pas de bouton blanc plein. Pas de bouton avec gradient.

---

## 4. STRUCTURE GLOBALE DU SITE

Pages à avoir :

1. `/` — Accueil (single page avec ancres)
2. `/a-propos` — Page À propos de Marc (nouvelle, voir section 6.13)
3. `/formules` — Détail des formules (peut être ancre `/#formules` ou page dédiée, choisir page dédiée pour le SEO)
4. `/contact` — Formulaire complet (peut être ancre, mais avoir aussi une page dédiée)
5. `/mentions-legales` — déjà présent, à retravailler (voir section 7)
6. `/confidentialite` — déjà présent, à retravailler
7. `/cgv` — À CRÉER (voir section 7)
8. `/cookies` — Bandeau RGPD avec page dédiée

---

## 5. NAVIGATION (HEADER)

Header sticky, fond `bg-cream-50/90 backdrop-blur-md` quand scrollé (transparent en haut de page si hero plein écran).

Structure :

- À gauche : logotype `Maison Ruggieri` en `font-display` taille `text-xl`
- Au centre (desktop) : liens `Accueil` · `Le concept` · `Formules` · `Galerie` · `Avis` · `Contact`
- À droite : numéro de téléphone discret `font-sans text-sm text-bark-700` + bouton CTA "Demander un devis" (style primaire, taille plus compacte `px-5 py-2.5`)
- Mobile : menu burger qui ouvre un overlay plein écran en `bg-cream-50` avec les liens centrés en gros

Hauteur header : `h-20`. Le numéro de téléphone doit être cliquable (`tel:`).

---

## 6. SECTIONS DE LA PAGE D'ACCUEIL

### 6.1 Hero

Refonte totale.

- Image de fond : photo de tarte flambée sortie du four, dorée, lumière chaude naturelle (PAS de filtre orange). Object-fit cover.
- Overlay : `bg-gradient-to-b from-transparent via-bark-900/20 to-bark-900/60` pour la lisibilité.
- Layout : texte aligné à gauche (pas centré), `max-w-3xl`, padding `pt-32 pb-24`.
- Hauteur : `min-h-[88vh]`.

Contenu :

```
[Eyebrow] ARTISAN ALSACIEN · LE BONHOMME

[H1] La vraie tarte flambée,
     cuite au feu de bois,
     chez vous.

[Sous-titre] Marc Ruggieri se déplace en Alsace avec son four
            à bois traditionnel pour vos mariages, anniversaires
            et soirées d'entreprise. Recette familiale, ingrédients
            frais, ambiance garantie.

[Boutons] [Demander un devis →]  [07 85 62 10 89]

[Trust line en dessous, petit, blanc cassé]
★★★★★  4,9/5 · 87 avis  ·  200+ événements depuis 2019  ·  Devis sous 24h
```

Le sous-titre H1 doit être en `font-display text-6xl md:text-8xl`, avec un retour à la ligne maîtrisé (utilise `<br />` ou un span avec `block`). Le mot "vraie" peut être en italique (Fraunces a un italique magnifique) pour souligner l'authenticité.

Petit indicateur de scroll en bas (chevron qui pulse doucement vers le bas).

### 6.2 Bandeau de chiffres (juste après le hero)

Remplacer la section actuelle ("200+ / 87 / 4,9/5 / 100%") :

- Fond `bg-cream-100`
- 4 colonnes en desktop, 2x2 en mobile
- Chaque chiffre en `font-display text-5xl md:text-6xl text-copper-500`
- Label en dessous en `font-sans text-sm uppercase tracking-wider text-bark-700`
- Pas de fond foncé. Pas d'italique sur les chiffres.

Chiffres à afficher :
- `200+` Événements réalisés
- `87` Avis 5 étoiles
- `4,9/5` Note moyenne
- `100%` Ingrédients frais

### 6.3 Section "Le concept" (nouvelle)

Avant "Pour chaque occasion", ajouter une section qui explique ce qu'est la prestation. Beaucoup de visiteurs ne savent pas exactement ce que ça implique.

- Eyebrow : `LA PRESTATION`
- H2 : `Un four à bois qui se déplace chez vous`
- Paragraphe (3-4 lignes) : `Marc Ruggieri arrive avec tout le matériel — four à bois mobile, pâte préparée le matin même, ingrédients frais d'Alsace. Vous accueillez vos invités, lui s'occupe de tout : préparation, cuisson, service. Les tartes sortent du four toutes les 90 secondes, croustillantes, fumantes, à volonté.`
- Layout : texte à gauche, photo verticale du four à bois en action à droite (avec flammes visibles, ambiance soirée).
- En dessous, 3 mini-features avec icônes Lucide (`Flame`, `Wheat`, `Users`) : "Cuisson au feu de bois" · "Pâte fraîche du jour" · "À volonté pendant 2h"

### 6.4 Section "Pour chaque occasion"

Refonte complète (image 10 actuellement).

- Eyebrow : `POUR QUI`
- H2 : `Chaque événement mérite sa tarte flambée`
- Sous-titre : `De la soirée d'entreprise au mariage de 200 personnes, Marc adapte sa prestation.`

Trois cards, format vertical, avec **vraie photo** en haut (pas d'emoji) :

**Card 1 — Mariages**
- Photo : table de mariage dressée avec tartes flambées et fleurs (genre image 5 partie droite)
- Titre : `Mariages`
- Description : `Une animation gourmande qui marque les esprits. Cuisson en direct devant vos invités, ambiance conviviale, formule adaptée jusqu'à 250 personnes.`
- Tags : `Animation` · `Jusqu'à 250 pers.` · `Service à table`

**Card 2 — Soirées d'entreprise**
- Photo : buffet en entreprise / team event
- Titre : `Soirées d'entreprise`
- Description : `Team-building, fin d'année, inauguration. Une alternative chaleureuse au traiteur classique, qui crée du lien entre les collaborateurs.`
- Tags : `20 à 200 pers.` · `Clé en main` · `Facture sur SIRET`

**Card 3 — Anniversaires & fêtes de famille**
- Photo : famille autour d'une table
- Titre : `Anniversaires & fêtes de famille`
- Description : `Pour vos 30, 40, 50, 60 ans ou un grand rassemblement familial. Une prestation qui rassemble petits et grands autour du four à bois.`
- Tags : `Dès 20 couverts` · `Ambiance conviviale` · `Recettes traditionnelles`

Cards en `bg-cream-100`, bordure `border-stone-200`, hover : translate-y de -4px et shadow-md.

### 6.5 Section "Comment ça marche"

Refonte (image 8 actuellement).

- Fond `bg-cream-100` (pas brun foncé)
- Eyebrow : `EN 3 ÉTAPES`
- H2 : `De votre demande à votre soirée`

Trois étapes en ligne, séparées par une fine ligne pointillée horizontale (en CSS, pas d'image) :

**01 — Vous nous contactez**
- Icône Lucide : `MessageSquare` dans un cercle `bg-copper-500/10 text-copper-500`, taille 64px
- Texte : `Formulaire en ligne ou appel direct. Précisez la date, le nombre de convives, le type d'événement et vos contraintes.`

**02 — Devis personnalisé sous 24h**
- Icône Lucide : `FileCheck`
- Texte : `Marc analyse votre demande, vérifie sa disponibilité et vous envoie un devis détaillé. Aucun engagement à ce stade.`

**03 — Intervention sur votre site**
- Icône Lucide : `Flame`
- Texte : `Le jour J, Marc arrive 2h avant le service avec four et ingrédients. Vous accueillez vos invités, il s'occupe du reste.`

Sous les 3 étapes, ligne de réassurance : `Acompte de 30% à la signature · Solde le jour de la prestation · Devis valable 30 jours`

CTA centré en bas : `Demander mon devis gratuit`

### 6.6 Section "Formules & Tarifs"

Garder la structure 3 colonnes (image 9 est correcte), mais retravailler le visuel :

- Fond `bg-cream-50`
- Eyebrow : `FORMULES`
- H2 : `Trois formules, zéro mauvaise surprise`
- Sous-titre : `Tarifs nets, déplacement inclus dans la zone d'intervention principale.`

Trois cards :

**Classique — 12€ / pers.**
- Tartes flambées à volonté cuites au four à bois
- Recettes alsaciennes traditionnelles (crème, lardons, oignons)
- Minimum 20 couverts
- Four à bois et ingrédients inclus
- Déplacement inclus en zone principale

**Prestige — 16€ / pers.** (carte mise en avant, bordure `border-copper-500 border-2`, badge "Le choix préféré")
- Tout le Classique +
- Carte de tartes étendue (chèvre-miel, forestière, savoyarde)
- Boissons soft + bière locale Météor à volonté
- Service à table
- Minimum 30 couverts

**Illimitée — 20€ / pers.**
- Tout le Prestige +
- Vin blanc d'Alsace Riesling à volonté
- Animation du four à bois (Marc explique la tradition)
- Tartes flambées dessert (pommes-cannelle, myrtille)
- Minimum 40 couverts

Chaque card a un bouton "Demander un devis" en bas. Card du milieu a le bouton primaire orange, les autres en secondaire.

Sous les cards, ligne fine en `text-sm text-stone-400` : `* Tarifs HT pour les professionnels · TTC pour les particuliers · Déplacement au-delà de 30 km : 0,80€/km`

### 6.7 Section "Galerie" (nouvelle, à structurer proprement)

Actuellement (image 5) la section "Nos soirées en images" existe mais est faible. La refaire :

- Eyebrow : `EN IMAGES`
- H2 : `Quelques moments partagés`
- Grille `grid-cols-2 md:grid-cols-4 gap-3`, 8 photos minimum
- Format : carré (`aspect-square`), `object-cover`, `rounded-xl`, hover : légère scale 1.02
- Mix de photos : tartes en gros plan, four à bois en action, mariages/événements, ambiance, Marc en train de cuisiner
- Optionnel : un lien "Voir plus sur Instagram" sous la grille (renvoie au compte Insta)

**Note pour Seb** : il faudra que Marc fournisse de vraies photos. En attendant, utiliser des placeholders Unsplash (`https://source.unsplash.com/random/600x600/?tarte-flambee` ou photos libres).

### 6.8 Section "Témoignages"

Refonte complète (images 3 et 4 actuellement).

- Fond `bg-cream-100`
- Eyebrow : `AVIS CLIENTS`
- H2 : `Ce qu'ils en pensent`
- Sous-titre avec logo Google : `4,9/5 sur 87 avis Google` (avec une vraie pastille Google, lien vers la fiche Google Business)

Trois cards :
- **Pas de pastilles avec lettre**.
- À la place : étoiles en haut (5 étoiles SVG `Star` de Lucide remplies en `text-copper-500`).
- Citation en `font-display text-xl italic leading-relaxed text-bark-900` (la serif italique de Fraunces donne du caractère).
- En bas : nom + contexte en `font-sans text-sm`. Format : `**Sophie M.** — DRH, événement entreprise Colmar`.
- Pas de photo dans les cards (ou alors la photo doit être réelle, sinon rien).

Témoignages à utiliser (réécriture des existants pour plus de naturel) :

> "Une soirée d'entreprise mémorable. Marc a géré 80 couverts avec un calme impressionnant. Les tartes étaient excellentes et l'ambiance que crée le four à bois est vraiment unique. Nos collaborateurs en parlent encore."
> — Sophie M., DRH, Colmar

> "Pour notre mariage, Marc a créé une atmosphère qu'on n'aurait jamais eue avec un traiteur classique. Tous nos invités sont passés voir le four. Service impeccable, tartes à tomber. On le recommande sans hésiter."
> — Julien & Céline, mariage à Strasbourg

> "Pour mes 40 ans, je voulais quelque chose de différent. Marc est arrivé tôt, s'est installé tranquillement, et la soirée s'est transformée en moment magique autour du four. Mes amis n'ont parlé que de ça pendant des semaines."
> — Patrick R., anniversaire à Sélestat

Ajouter un 4ème et 5ème témoignage si possible pour étoffer (à toi de les inventer dans le même style sobre).

CTA discret en bas : `Voir tous les avis sur Google →`

### 6.9 Section "Zone d'intervention"

Garder la structure (image 6) mais retravailler :

- Eyebrow : `ZONE D'INTERVENTION`
- H2 : `Marc se déplace dans toute l'Alsace`
- Sous-titre : `Au départ de Le Bonhomme (68650) — Haut-Rhin, Bas-Rhin et Vosges. Au-delà sur devis.`

Layout 2 colonnes :
- Gauche : grille de communes en 2 colonnes, chaque ligne avec icône Lucide `Check` en `text-copper-500` taille 16px :
  - Colmar · Strasbourg · Mulhouse · Sélestat · Saint-Dié · Obernai · Saverne · Ribeauvillé · Guebwiller · Thann
  - En dessous, mention "Sur demande" : Épinal · Nancy · Belfort · Metz
- Droite : une vraie carte interactive (`react-leaflet` ou `mapbox-gl`) centrée sur Le Bonhomme avec un marqueur custom (pas l'emoji 📍). Le marqueur peut être un SVG simple ou l'icône Lucide `MapPin`. Sous la carte, card en `bg-cream-100` avec :
  - "Le Bonhomme · 68650 Haut-Rhin"
  - "Zone principale : 50 km autour"
  - Bouton "Nous contacter" en style secondaire

Ligne en bas : `Votre commune n'est pas listée ? Contactez-nous, nous étudierons votre demande.`

### 6.10 Section FAQ

Garder le principe accordéon (images 2 et 3) mais raffiner :

- Eyebrow : `QUESTIONS FRÉQUENTES`
- H2 : `Vos questions, nos réponses`
- Sous-titre : `Tout ce que vous voulez savoir avant de réserver.`

Cards en `bg-cream-100`, bordure `border-stone-200`, transition smooth à l'ouverture. Icône `Plus` qui devient `Minus` (Lucide), pas un "+" texte. Animation `transition-all duration-300`.

Questions à inclure (plus complètes que l'existant) :

1. **Quelle est la zone d'intervention de Marc Ruggieri ?**
   `Marc se déplace dans tout le Haut-Rhin, le Bas-Rhin et les Vosges au départ de Le Bonhomme (68650). Au-delà de 50 km, un forfait kilométrique de 0,80€/km s'ajoute. Les Vosges et la Lorraine sont accessibles sur demande.`

2. **Quel est le nombre minimum de convives ?**
   `20 couverts pour la formule Classique, 30 pour la Prestige, 40 pour l'Illimitée. En dessous, contactez-nous pour étudier votre demande.`

3. **Combien de temps dure la prestation ?**
   `Marc arrive 2h avant le début du service pour installer le four et préchauffer. Le service dure en moyenne 2h, à volonté. Le rangement prend 1h après. Soit une présence totale de 5 à 6h sur place.`

4. **Que comprend exactement la prestation ?**
   `Four à bois mobile, bois de chauffe, pâte fraîche préparée le matin, tous les ingrédients (crème, lardons, oignons, fromages selon formule), service. Vous n'avez à fournir que l'eau et l'électricité (220V standard).`

5. **Proposez-vous des formules avec boissons ?**
   `Oui, dès la formule Prestige : softs et bière locale à volonté. La formule Illimitée ajoute le Riesling d'Alsace à volonté.`

6. **Quel est le délai pour réserver ?**
   `Idéalement 2 à 3 mois à l'avance pour les samedis de mai à septembre (haute saison). Pour les autres dates, 3 à 4 semaines suffisent généralement. Contactez-nous pour vérifier la disponibilité.`

7. **Intervenez-vous pour les mariages en Alsace ?**
   `Oui, c'est même l'une de nos prestations les plus demandées. Nous adaptons le format à votre cérémonie : vin d'honneur, repas principal, brunch du lendemain. Capacité jusqu'à 250 personnes.`

8. **Est-il possible de personnaliser les recettes ?**
   `Les recettes traditionnelles sont au cœur de notre savoir-faire, mais nous proposons des variantes pour s'adapter à votre événement : tarte flambée végétarienne, sans porc, ou recette dessert. Précisez vos contraintes dans le formulaire.`

9. **Comment se passe le paiement ?** (NOUVELLE — importante pour rassurer)
   `Acompte de 30% à la signature du devis, solde le jour de la prestation. Paiement par virement, chèque ou espèces. Facture remise systématiquement.`

10. **Que se passe-t-il en cas d'annulation ?** (NOUVELLE — obligation légale + rassurance)
    `Annulation gratuite jusqu'à 30 jours avant l'événement. Entre 30 et 14 jours : 50% de l'acompte conservé. Moins de 14 jours : acompte non remboursable. En cas de force majeure (météo extrême, deuil), nous reportons sans frais.`

11. **Les ingrédients sont-ils locaux ?** (NOUVELLE)
    `Au maximum : crème et fromages d'Alsace, lardons d'un artisan vosgien, oignons et légumes locaux selon la saison. La farine vient d'un moulin alsacien.`

12. **Comment gérez-vous les allergies et régimes spécifiques ?** (NOUVELLE — obligation légale RGPD allergènes)
    `Nous proposons systématiquement une option végétarienne et sans lardons. Pour les allergies (gluten, lactose, fruits à coque), précisez-le dans votre demande, nous adapterons les recettes. Liste complète des allergènes fournie sur demande.`

13. **Avez-vous une assurance professionnelle ?** (NOUVELLE — rassure énormément)
    `Oui, Maison Ruggieri est couverte en responsabilité civile professionnelle. Attestation fournie sur demande.`

Sous l'accordéon, bloc CTA centré : `Une question non listée ?` + bouton secondaire `Appeler maintenant` qui ouvre `tel:0785621089`.

### 6.11 Section "Formulaire de contact"

Refonte complète (image 1 actuellement, illisible).

- Fond `bg-cream-100` (PAS orange massif)
- Eyebrow : `DEMANDE DE DEVIS`
- H2 : `Faisons connaissance`
- Sous-titre : `Remplissez ce formulaire, Marc vous recontacte sous 24h avec un devis personnalisé. Aucun engagement.`

Layout : formulaire centré, `max-w-2xl mx-auto`, cards en `bg-cream-50` avec `p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm`.

Champs (tous avec label visible au-dessus, pas placeholder seul) :

1. **Nom complet** *(requis)* — `<input type="text">`
2. **Email** *(requis)* — `<input type="email">`
3. **Téléphone** *(requis)* — `<input type="tel">`
4. **Type d'événement** *(requis)* — `<select>` avec options :
   - Mariage
   - Anniversaire / fête de famille
   - Soirée d'entreprise
   - Inauguration / lancement
   - Autre événement privé
5. **Date de l'événement** *(requis)* — `<input type="date">`
6. **Nombre de convives** *(requis)* — `<input type="number" min="20">`
7. **Formule souhaitée** *(non requis, helpful)* — Radio :
   - Classique (12€/pers.)
   - Prestige (16€/pers.)
   - Illimitée (20€/pers.)
   - Je ne sais pas encore
8. **Lieu de l'événement** *(requis)* — `<input type="text">` avec placeholder "Ville ou code postal"
9. **Allergies / régimes spécifiques** *(non requis)* — `<textarea>` court
10. **Informations complémentaires** *(non requis)* — `<textarea>` 4 lignes
11. **Case à cocher RGPD** *(requise)* — "J'accepte que mes données soient utilisées uniquement pour traiter ma demande, conformément à la [politique de confidentialité]."

Bouton de soumission : primaire, large, centré, `Envoyer ma demande`. Sous le bouton : `Marc vous recontacte sous 24h · Devis gratuit · Sans engagement`.

Style des inputs :
```jsx
className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-200 text-bark-900 placeholder:text-stone-400 focus:outline-none focus:border-copper-500 focus:ring-2 focus:ring-copper-500/20 transition-all"
```

Labels en `font-sans text-sm font-medium text-bark-900 mb-2 block`.

Envoi : à connecter à une API route Next.js `/api/contact` qui envoie un email via Resend, SendGrid ou similaire. Toast de confirmation après envoi.

### 6.12 Footer

Refonte (visible bas de image 1).

- Fond `bg-bark-900` text-cream-100`
- 4 colonnes en desktop, stack en mobile :

**Colonne 1 — Marque**
- Logo `Maison Ruggieri` en grand
- Tagline : `Tarte flambée d'Alsace, prestation à domicile depuis 2019.`
- Icônes réseaux sociaux (Lucide : `Instagram`, `Facebook`) — couleur `text-cream-300 hover:text-copper-400`

**Colonne 2 — Contact**
- `Marc Ruggieri`
- `Le Bonhomme · 68650 Haut-Rhin`
- `07 85 62 10 89` (cliquable tel:)
- `contact@maison-ruggieri.fr` (à changer si autre domaine)
- WhatsApp link

**Colonne 3 — Navigation**
- Accueil
- Le concept
- Formules
- Galerie
- Avis
- Contact

**Colonne 4 — Légal**
- À propos
- Mentions légales
- CGV
- Politique de confidentialité
- Politique cookies
- Allergènes (obligation légale)

En bas, séparateur fin `border-t border-bark-700 pt-6 mt-12` avec ligne :
`© 2026 Maison Ruggieri · SIRET XXX XXX XXX XXXXX · Conçu avec soin en Alsace`

**Note pour Seb** : insérer le vrai SIRET de Marc. Si Marc est en micro-entreprise / EI, ajouter aussi `TVA non applicable, art. 293 B du CGI` si applicable.

---

## 7. PAGES À CRÉER

### 7.1 Page `/a-propos`

Une vraie page À propos qui humanise la marque. Structure :

- Hero secondaire avec photo de Marc devant son four à bois, plein cadre, lumière naturelle
- H1 : `Marc Ruggieri, artisan alsacien`
- Section "L'histoire" : 3-4 paragraphes (que tu rédiges, dans un style sobre et sincère, parlant de sa passion pour la tarte flambée traditionnelle, sa formation, son installation à Le Bonhomme, son four à bois construit avec un artisan local, ses valeurs : produit frais, recette familiale, rapport humain)
- Section "Le four à bois" avec photo détaillée et explication technique
- Section "Notre engagement" : ingrédients locaux, producteurs partenaires (citer 2-3 noms fictifs ou réels alsaciens)
- CTA fin de page : `Découvrir nos formules`

### 7.2 Page `/cgv` (à créer)

Conditions générales de vente. Inclure les sections obligatoires :
- Identité du prestataire (Marc Ruggieri, adresse, SIRET, contact)
- Objet et champ d'application
- Devis et commande (acceptation, validité 30 jours)
- Prix et modalités de paiement (acompte 30%, solde le jour J)
- Délais et conditions d'intervention
- Obligations du prestataire (matériel, ingrédients, ponctualité)
- Obligations du client (accès, eau, électricité, hauteur sous plafond pour le four)
- Annulation / modification (cf. FAQ question 10)
- Force majeure
- Assurance et responsabilité
- Allergènes (mention obligatoire pour restauration : "Liste des 14 allergènes majeurs disponible sur demande")
- Hygiène : conformité HACCP, formation hygiène alimentaire
- Litiges et droit applicable (médiateur de la consommation)
- RGPD (renvoi vers la politique de confidentialité)

Rédige un texte propre et juridiquement correct (sans inventer de mentions exotiques). Précise à Seb à la fin : "À faire valider par un juriste avant publication."

### 7.3 Page `/confidentialite` (à retravailler)

Sections RGPD obligatoires :
- Identité du responsable de traitement
- Données collectées (via formulaire de contact)
- Finalités (traiter la demande de devis, communication commerciale)
- Base légale (consentement, contrat)
- Destinataires (Marc uniquement, pas de partage)
- Durée de conservation (3 ans après dernier contact pour prospects, 10 ans pour clients facturés)
- Droits (accès, rectification, suppression, opposition, portabilité)
- Comment exercer ses droits (email de contact)
- Cookies (renvoi vers la page cookies)
- Réclamation CNIL

### 7.4 Page `/cookies` + bandeau

Bandeau cookies en bas de page (RGPD) :
- Position : `fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md`
- Style : card `bg-cream-50 rounded-2xl shadow-lg border border-stone-200 p-6`
- Texte : "Ce site utilise des cookies pour améliorer votre expérience et mesurer l'audience. Vous pouvez accepter, refuser, ou personnaliser vos choix."
- Boutons : `Tout accepter` (primaire) · `Tout refuser` (secondaire) · `Personnaliser` (lien)
- Lien vers page `/cookies` avec détail des cookies utilisés

Implémentation : utiliser une lib type `react-cookie-consent` ou faire un composant maison avec localStorage. **Important** : aucun cookie analytics ne doit se charger avant acceptation.

### 7.5 Page `/mentions-legales` (à retravailler)

- Éditeur du site (Marc Ruggieri, adresse complète, SIRET, téléphone, email)
- Directeur de publication
- Hébergeur (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA)
- Propriété intellectuelle
- Crédits photos / illustrations

---

## 8. ÉLÉMENTS LÉGAUX & OBLIGATIONS

À intégrer impérativement :

1. **Allergènes** : mention dans le footer et page dédiée listant les 14 allergènes majeurs réglementaires (gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, graines de sésame, anhydride sulfureux, lupin, mollusques). Préciser ceux présents par défaut dans les tartes flambées (gluten, lait, œufs).
2. **SIRET** affiché dans le footer.
3. **Mention "TVA non applicable, art. 293 B du CGI"** si Marc est en micro-entreprise et non assujetti à la TVA.
4. **Médiateur de la consommation** : mention obligatoire dans les CGV avec coordonnées du médiateur compétent.
5. **Numéro de déclaration sanitaire** (si Marc a déclaré son activité auprès de la DDPP — Direction Départementale de la Protection des Populations) : à afficher dans le footer.
6. **Formation hygiène alimentaire** : si Marc a son attestation HACCP (formation hygiène 14h obligatoire pour la restauration), le mentionner dans "À propos" et CGV.

---

## 9. SEO & MÉTADONNÉES

### 9.1 Meta tags (dans `app/layout.tsx`)

```tsx
export const metadata: Metadata = {
  title: {
    default: 'Maison Ruggieri — Tarte flambée à domicile en Alsace',
    template: '%s · Maison Ruggieri',
  },
  description: 'Marc Ruggieri se déplace en Alsace avec son four à bois pour vos mariages, anniversaires et soirées d\'entreprise. Tarte flambée traditionnelle, ingrédients frais, dès 12€/pers.',
  keywords: ['tarte flambée Alsace', 'traiteur tarte flambée', 'four à bois mobile', 'mariage Alsace', 'soirée entreprise Colmar', 'Le Bonhomme', 'flammekueche à domicile'],
  authors: [{ name: 'Marc Ruggieri' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://maison-ruggieri.fr',
    siteName: 'Maison Ruggieri',
    title: 'Maison Ruggieri — Tarte flambée à domicile en Alsace',
    description: '...',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maison Ruggieri',
    description: '...',
    images: ['/og-image.jpg'],
  },
}
```

### 9.2 Schema.org structured data

Dans la page d'accueil, ajouter un JSON-LD pour `LocalBusiness` + `FoodEstablishment` :

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "FoodEstablishment"],
      "name": "Maison Ruggieri",
      "image": "https://maison-ruggieri.fr/og-image.jpg",
      "telephone": "+33785621089",
      "email": "contact@maison-ruggieri.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Le Bonhomme",
        "postalCode": "68650",
        "addressRegion": "Grand Est",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.1623,
        "longitude": 7.1031
      },
      "url": "https://maison-ruggieri.fr",
      "priceRange": "€€",
      "servesCuisine": "Alsatian",
      "areaServed": [
        { "@type": "City", "name": "Colmar" },
        { "@type": "City", "name": "Strasbourg" },
        { "@type": "City", "name": "Mulhouse" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "87"
      }
    })
  }}
/>
```

### 9.3 Fichiers à créer

- `public/robots.txt` (autoriser tout sauf pages légales si besoin)
- `public/sitemap.xml` (généré dynamiquement via Next.js)
- `public/favicon.ico` + `public/apple-touch-icon.png` + favicons PWA
- `public/og-image.jpg` (1200x630, photo signature de la tarte flambée avec logo discret)

### 9.4 Performance

- Toutes les images en `next/image` avec lazy loading et `priority` uniquement sur le hero
- Format `image/webp` ou `image/avif`
- Tailles responsives (`sizes` attribute correct)
- Polices avec `display: swap` et préchargement
- Lighthouse cible : Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95

---

## 10. ACCESSIBILITÉ

À respecter partout :

- Contraste texte / fond ≥ 4.5:1 (le crème + orange actuel ne passe pas, c'est pour ça qu'il faut changer)
- Tous les `<button>` et `<a>` ont un état `:focus-visible` clairement visible (outline `outline-2 outline-offset-2 outline-copper-500`)
- Tous les inputs ont des `<label>` associés
- Tous les `<img>` ont un `alt` descriptif (pas vide sauf si purement décoratif, alors `alt=""`)
- Navigation au clavier fonctionnelle partout (Tab, Enter, Échap pour fermer modals)
- ARIA labels sur les icônes décoratives (`aria-hidden="true"`)
- ARIA labels sur les boutons sans texte visible (menu burger, accordéon FAQ)
- Couleur jamais seule porteuse d'info (toujours doubler avec icône ou texte)
- Skip link en haut de page : `Aller au contenu principal`

---

## 11. RÉSEAUX SOCIAUX & TRUST SIGNALS

Ajouter dans le footer et sur la page d'accueil (mais discrètement) :

- Compte Instagram (créer si pas existant : `@maison.ruggieri`) — embed du dernier post ou simple lien
- Page Facebook
- Fiche Google Business (lien direct pour laisser un avis)
- Logo / mention "Membre de l'UMIH Alsace" si applicable
- Logo / mention "Artisan Bio Cohérence" ou autres labels si applicable

Si pas de réseaux sociaux pour l'instant, ne pas afficher d'icônes mortes — masquer la section jusqu'à ce qu'il y ait du contenu.

---

## 12. ÉLÉMENTS À AJOUTER QUE JE NE TROUVE PAS SUR LE SITE ACTUEL

Liste de tout ce qui est attendu sur un site de prestation événementielle et qui manque :

1. ✅ Vraie page À propos (humanise, crée la confiance)
2. ✅ Conditions générales de vente (obligation légale pour prestation de service)
3. ✅ Politique de cookies + bandeau RGPD (obligation légale)
4. ✅ Liste des allergènes (obligation légale restauration)
5. ✅ Mention SIRET dans le footer
6. ✅ Mention assurance RC pro dans FAQ et CGV
7. ✅ Conditions d'annulation claires
8. ✅ Délais de réservation indiqués
9. ✅ Modalités de paiement (acompte, solde, moyens)
10. ✅ Schema.org LocalBusiness pour le SEO local (critique pour ce métier)
11. ✅ Open Graph image propre (pour partages WhatsApp / Facebook / SMS)
12. ✅ Favicon + icônes PWA
13. ✅ Liens réseaux sociaux (Instagram fortement recommandé pour ce métier)
14. ✅ Lien direct vers la fiche Google Business pour récolter des avis
15. ✅ Page formules dédiée (pour le SEO sur "tarif tarte flambée Alsace")
16. ✅ Vraie carte interactive (pas juste une liste de villes)
17. ✅ Témoignages plus nombreux et plus naturels (5 minimum)
18. ✅ Galerie photos étoffée (minimum 8 photos de qualité)
19. ✅ Mention du process : ce que le client doit prévoir (eau, électricité, espace pour le four — hauteur sous plafond, accès véhicule)
20. ✅ Page contact distincte (en plus du formulaire en bas de home), avec map, horaires de joignabilité, autres canaux (WhatsApp, email, téléphone)

---

## 13. ORDRE D'EXÉCUTION SUGGÉRÉ

Pour éviter de tout casser, procéder dans cet ordre :

1. Mettre en place le design system (Tailwind config, fonts, layout root)
2. Refaire le header + footer (visibles partout)
3. Refaire le hero
4. Refaire les sections une par une dans l'ordre de la page
5. Créer les pages secondaires (À propos, formules, contact, CGV, etc.)
6. Implémenter le formulaire de contact avec API route
7. Mettre en place le bandeau cookies + analytics conditionnel
8. SEO : meta tags, sitemap, robots, schema.org, OG image
9. Tests accessibilité (Lighthouse + axe DevTools)
10. Tests responsive (mobile, tablette, desktop)
11. Optimisation performance (images, polices, code splitting)
12. Déploiement preview Vercel, validation, push en prod

---

## 14. LIVRABLES ATTENDUS

À chaque étape, fournis :

- Le code complet des composants modifiés (pas juste des diffs partiels)
- Les fichiers de configuration à jour (`tailwind.config.ts`, `app/layout.tsx`, etc.)
- Les commandes d'installation des dépendances nécessaires (`npm install lucide-react framer-motion react-leaflet`, etc.)
- Une note rapide à la fin de chaque section sur ce qui reste à faire côté humain (fournir vraies photos, valider CGV par un juriste, créer le compte Instagram, etc.)

---

## 15. CHOSES À NE PAS FAIRE

- ❌ Ne pas utiliser d'emojis, même "juste un petit"
- ❌ Ne pas mettre de fonds orange massifs
- ❌ Ne pas générer d'images IA pour les photos de nourriture
- ❌ Ne pas utiliser d'effets parallax ou de scroll-jacking
- ❌ Ne pas mettre de carousel automatique (mauvaise UX, mauvaise accessibilité)
- ❌ Ne pas mettre de pop-up newsletter intrusive
- ❌ Ne pas utiliser de typo Google Fonts générique type Montserrat / Poppins / Roboto
- ❌ Ne pas mettre de chat AI / chatbot — Marc préfère le contact humain
- ❌ Ne pas inventer de fausses certifications ou faux chiffres
- ❌ Ne pas utiliser de buzzwords creux ("exceptionnel", "unique", "extraordinaire") sans contexte

---

## 16. AVANT DE COMMENCER

Confirme-moi que tu as bien compris :

1. La nouvelle identité de marque (Maison Ruggieri)
2. Le design system (couleurs, typo, espacements)
3. Les 16 sections à traiter
4. Les contraintes légales (allergènes, RGPD, CGV, SIRET, assurance)
5. Les éléments manquants à créer

Puis attaque la section 1 (design system) en premier. Montre-moi le `tailwind.config.ts`, le `app/layout.tsx` avec les polices, et le composant `Header` refait, avant de continuer.

**Vas-y.**
