export const GALLERY_CATEGORIES = [
  'Toutes',
  'Tartes flambées',
  'Installations',
  'Buffets & réceptions',
  'Ambiances',
] as const

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]

export type GalleryItem = {
  src: string
  alt: string
  label: string
  category: Exclude<GalleryCategory, 'Toutes'>
  orientation: 'landscape' | 'portrait' | 'square'
  imageClassName?: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: '/media/reception-table-dressee-exterieur.webp',
    alt: 'Tables nappées, vaisselle et chaises installées sous un barnum dans un jardin',
    label: 'Table dressée en extérieur',
    category: 'Buffets & réceptions',
    orientation: 'portrait',
  },
  {
    src: '/media/buffet-aperitif-reception.webp',
    alt: 'Buffet apéritif dressé avec petits pains, légumes frais, sauces et bouchées salées',
    label: 'Buffet apéritif',
    category: 'Buffets & réceptions',
    orientation: 'landscape',
  },
  {
    src: '/media/cocktail-buffet-champagne-entreprise.webp',
    alt: 'Verrines, verres et bouteilles disposés sur un buffet de réception éclairé en bleu',
    label: 'Cocktail et verrines',
    category: 'Buffets & réceptions',
    orientation: 'portrait',
  },
  {
    src: '/media/buffet-aperitif-traiteur.webp',
    alt: 'Long buffet apéritif avec légumes, sauces, bretzels garnis et bouchées salées',
    label: 'Buffet apéritif dressé',
    category: 'Buffets & réceptions',
    orientation: 'landscape',
  },
  {
    src: '/media/buffet-traiteur-soiree-retouche.webp',
    alt: 'Chef derrière un grand buffet lors d’une soirée d’entreprise sous un éclairage violet',
    label: 'Buffet de soirée',
    category: 'Ambiances',
    orientation: 'portrait',
  },
  {
    src: '/media/table-reception-soiree-entreprise.webp',
    alt: 'Table ronde dressée pour un dîner d’entreprise dans une salle décorée',
    label: 'Dîner d’entreprise',
    category: 'Ambiances',
    orientation: 'portrait',
  },
  {
    src: '/media/entreprise-installation-barnums-mobilier.webp',
    alt: 'Barnums, mange-debout et chaises installés devant les locaux d’une entreprise',
    label: 'Installation en entreprise',
    category: 'Installations',
    orientation: 'landscape',
  },
  {
    src: '/media/entreprise-barnums-mange-debout.webp',
    alt: 'Barnums et mange-debout installés dans un jardin pour accueillir les invités',
    label: 'Barnums et mange-debout',
    category: 'Installations',
    orientation: 'landscape',
  },
  {
    src: '/media/entreprise-tireuse-biere.webp',
    alt: 'Tireuse à bière professionnelle installée sur une table nappée',
    label: 'Tireuse à bière',
    category: 'Installations',
    orientation: 'portrait',
  },
  {
    src: '/media/accueil-cafe-entreprise.jpg',
    alt: 'Machine à café et tasses installées pour l’accueil des invités',
    label: 'Accueil café',
    category: 'Installations',
    orientation: 'portrait',
  },
  {
    src: '/media/four-bois-action.jpg',
    alt: 'Tarte flambée en cuisson dans le four à bois mobile',
    label: 'Cuisson au feu de bois',
    category: 'Tartes flambées',
    orientation: 'landscape',
  },
  {
    src: '/media/tarte-flambee-cuisson-flammes-four-bois.jpg',
    alt: 'Tarte flambée en cuisson devant les flammes du four à bois',
    label: 'La flamme en action',
    category: 'Tartes flambées',
    orientation: 'landscape',
  },
  {
    src: '/media/stand-cafe-entreprise.jpg',
    alt: 'Stand café complet avec machine, tasses et table nappée',
    label: 'Stand café',
    category: 'Installations',
    orientation: 'landscape',
  },
  {
    src: '/media/entreprise-four-mobile-stand.webp',
    alt: 'Four mobile et tables de service préparés pour une réception',
    label: 'Stand prêt avant l’arrivée',
    category: 'Installations',
    orientation: 'landscape',
  },
  {
    src: '/media/entreprise-cuisson-four-bois.webp',
    alt: 'Plusieurs tartes flambées cuisent au-dessus des braises du four à bois',
    label: 'Tartes au-dessus des braises',
    category: 'Tartes flambées',
    orientation: 'portrait',
  },
  {
    src: '/media/prestation-tarte-flambee.jpg',
    alt: 'Stand Poivre et Salé installé en extérieur avec le four à bois mobile',
    label: 'Prestation en extérieur',
    category: 'Installations',
    orientation: 'landscape',
  },
  {
    src: '/media/service-tarte-flambee.jpg',
    alt: 'Four à bois mobile ouvert avec les bûches rangées sous la chambre de cuisson',
    label: 'Le four mobile',
    category: 'Installations',
    orientation: 'portrait',
  },
  {
    src: '/media/tarte-flambee-artisanale.jpg',
    alt: 'Tables dressées sous une tente pour une réception en extérieur',
    label: 'Réception sous tente',
    category: 'Ambiances',
    orientation: 'landscape',
  },
  {
    src: '/media/cuisson-four-a-bois.jpg',
    alt: 'Stand de cuisson avec four à bois mobile installé sur une place extérieure',
    label: 'Stand de cuisson',
    category: 'Installations',
    orientation: 'landscape',
    imageClassName: 'object-right',
  },
  {
    src: '/media/tartes-flambees-four-bois-traiteur.jpg',
    alt: 'Plusieurs tartes flambées cuisent côte à côte dans le four à bois',
    label: 'Cuisson de plusieurs tartes',
    category: 'Tartes flambées',
    orientation: 'landscape',
  },
  {
    src: '/media/marc-poivre-sale-four-bois-mobile.jpg',
    alt: 'Marc de Poivre et Salé devant son four à bois mobile',
    label: 'Marc et son four mobile',
    category: 'Ambiances',
    orientation: 'portrait',
  },
  {
    src: '/media/hero-mariage.jpg',
    alt: 'Tarte flambée dans le four à bois pendant une réception',
    label: 'Four à bois en réception',
    category: 'Tartes flambées',
    orientation: 'landscape',
  },
  {
    src: '/media/tarte-anniversaire-famille.jpg',
    alt: 'Tarte flambée généreusement garnie pour une fête de famille',
    label: 'Anniversaire en famille',
    category: 'Tartes flambées',
    orientation: 'landscape',
  },
  {
    src: '/media/hero-flamme-traiteur.jpg',
    alt: 'Tarte flambée artisanale dorée au feu de bois',
    label: 'Flammekueche artisanale',
    category: 'Tartes flambées',
    orientation: 'landscape',
  },
  {
    src: '/media/tarte-flambee-classique-planche.jpg',
    alt: 'Tarte flambée classique servie sur une planche en bois',
    label: 'La classique sur planche',
    category: 'Tartes flambées',
    orientation: 'portrait',
  },
  {
    src: '/media/garnitures-fraiches.jpg',
    alt: 'Poste de préparation avec ingrédients et fonds de tartes flambées',
    label: 'Préparation sur place',
    category: 'Tartes flambées',
    orientation: 'landscape',
  },
  {
    src: '/media/repas-association-four-bois-alsace.jpeg',
    alt: 'Repas associatif organisé autour du four à bois mobile',
    label: 'Repas associatif',
    category: 'Ambiances',
    orientation: 'portrait',
  },
  {
    src: '/media/preparation-tartes-flambees-exterieur.jpeg',
    alt: 'Préparation des tartes flambées sur le lieu de réception',
    label: 'Préparation devant les invités',
    category: 'Tartes flambées',
    orientation: 'portrait',
  },
  {
    src: '/media/tarte-flambee-creme-lardons-four-bois.jpg',
    alt: 'Tarte flambée crème, oignons et lardons prête à être servie',
    label: 'Crème, oignons et lardons',
    category: 'Tartes flambées',
    orientation: 'portrait',
  },
  {
    src: '/media/tarte-flambee-traditionnelle.webp',
    alt: 'Tarte flambée traditionnelle alsacienne fraîchement cuite',
    label: 'La traditionnelle',
    category: 'Tartes flambées',
    orientation: 'landscape',
  },
  {
    src: '/media/four-bois-mobile-flammes-tarte-flambee.jpg',
    alt: 'Flammes visibles dans le four à bois mobile pendant la cuisson',
    label: 'Le feu de bois',
    category: 'Tartes flambées',
    orientation: 'landscape',
  },
  {
    src: '/media/four-bois-flammes.jpg',
    alt: 'Flammes et braises dans le four à bois de Poivre et Salé',
    label: 'Flammes et braises',
    category: 'Tartes flambées',
    orientation: 'landscape',
  },
  {
    src: '/media/buffet-exterieur.jpg',
    alt: 'Buffet de réception dressé en extérieur',
    label: 'Buffet en extérieur',
    category: 'Buffets & réceptions',
    orientation: 'landscape',
  },
]

export const FEATURED_GALLERY_ITEMS = GALLERY_ITEMS.slice(0, 12)
