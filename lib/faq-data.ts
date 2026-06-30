// Source de vérité unique des questions/réponses FAQ.
// Consommée par le composant <Faq /> (affichage) ET par le JSON-LD FAQPage
// de la home (app/page.tsx) pour le référencement Google + GEO (ChatGPT, Perplexity).
export interface FaqItem {
  q: string
  a: string
}

export const faqs: FaqItem[] = [
  {
    q: 'Dans quelle zone géographique intervenez-vous ?',
    a: "Nous intervenons principalement en Alsace (Bas-Rhin 67 et Haut-Rhin 68), dans les Vosges (88) et le Territoire de Belfort (90), dans un rayon d'environ 80 km autour du Bonhomme. Des déplacements plus lointains dans le Grand Est sont possibles selon les disponibilités — contactez-nous pour vérifier.",
  },
  {
    q: "Quelle surface faut-il prévoir pour l'installation ?",
    a: "Il faut prévoir un espace minimum de 4 m² pour le four à bois, idéalement en extérieur ou sous un abri bien ventilé. Un accès véhicule pour le déchargement est nécessaire. Nous validons ensemble les contraintes de votre lieu lors de la préparation du devis.",
  },
  {
    q: 'Les tartes flambées sont-elles préparées sur place ?',
    a: "Oui. Tout est cuit en direct au four à bois pendant la prestation. Nous utilisons des pâtes laminées fines. Vos convives voient le four, sentent la fumée de bois, et reçoivent les tartes sorties du feu — c'est l'essence de la prestation.",
  },
  {
    q: 'Que comprend exactement la prestation ?',
    a: "Four à bois mobile, bois de chauffe, pâte laminée fine, tous les ingrédients (crème, lardons, oignons, fromages selon formule), service et installation. Vous n'avez à fournir que l'eau et l'électricité (220V standard).",
  },
  {
    q: 'Proposez-vous des formules avec boissons ?',
    a: "Oui, avec la formule Premium : 1 verre de bière offert par personne, plus des boissons en option avec la formule Clé en main.",
  },
  {
    q: 'Quel est le délai pour réserver ?',
    a: "Idéalement 2 à 3 mois à l'avance pour les samedis de mai à septembre (haute saison). Pour les autres dates, 3 à 4 semaines suffisent généralement. Contactez-nous pour vérifier la disponibilité.",
  },
  {
    q: 'Intervenez-vous pour les mariages en Alsace ?',
    a: "Oui. Nous adaptons le format (buffet cocktail, fin de soirée, déjeuner champêtre) selon vos souhaits et la configuration de votre lieu de réception.",
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: "Virement bancaire, chèque ou espèces. Le règlement s'effectue le jour de la prestation ou dans la semaine qui suit — aucun acompte n'est demandé. Nous travaillons sur la confiance.",
  },
  {
    q: 'Que se passe-t-il en cas de mauvais temps ?',
    a: "Il suffit d'un abri couvert — une terrasse, un préau, une grange ou tout espace ventilé — pour que la prestation se déroule sans problème. Nous vous conseillons sur la configuration lors de la préparation du devis.",
  },
  {
    q: 'Puis-je annuler ou modifier ma réservation ?',
    a: "Oui. L'annulation est gratuite, sans frais. Pour une modification (date, nombre de convives, lieu), signalez-le par écrit le plus tôt possible — nous ferons tout pour l'accommoder sous réserve de disponibilité.",
  },
]
