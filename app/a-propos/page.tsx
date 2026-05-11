import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marc Ruggieri — Prestation tarte flambée à domicile en Alsace",
  description:
    "Prestation tarte flambée à domicile pour mariages, anniversaires et événements d'entreprise en Alsace. Devis gratuit.",
};

const VALEURS = [
  {
    title: "Authenticité avant tout",
    description:
      "Le four à bois, la pâte faite maison le jour même, les garnitures fraîches. Marc ne fait aucun compromis sur la qualité. Pas de four électrique, pas de pâte industrielle.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C12 2 6 8 6 13.5C6 16.99 8.69 19.5 12 19.5C15.31 19.5 18 16.99 18 13.5C18 8 12 2 12 2Z" />
        <path d="M12 8C12 8 9 11 9 13.5C9 15.16 10.34 16.5 12 16.5C13.66 16.5 15 15.16 15 13.5C15 11 12 8 12 8Z" />
      </svg>
    ),
  },
  {
    title: "Convivialité et partage",
    description:
      "La tarte flambée est un plat qui se partage, se déguste debout, entre amis. Marc apporte cet esprit de fête alsacienne à chacune de ses prestations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Ancrage alsacien",
    description:
      "Marc est né et a grandi en Alsace. Il travaille avec des producteurs locaux pour les garnitures, et porte fièrement la tradition culinaire de sa région.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const TIMELINE = [
  {
    year: "2009",
    title: "Les premières tartes",
    description:
      "Marc apprend la recette traditionnelle auprès de son grand-père, artisan boulanger à Le Bonhomme. Il commence à préparer des tartes flambées pour les fêtes familiales.",
  },
  {
    year: "2011",
    title: "Lancement de l'activité",
    description:
      "Marc acquiert son premier four à bois mobile et réalise ses premières prestations professionnelles pour des mariages et anniversaires dans le Haut-Rhin.",
  },
  {
    year: "2014",
    title: "Développement en Bas-Rhin",
    description:
      "La réputation de Marc s'étend. Il commence à intervenir régulièrement à Strasbourg et dans l'agglomération pour des événements d'entreprise et des réceptions privées.",
  },
  {
    year: "2018",
    title: "100 événements",
    description:
      "Marc franchit la barre des 100 prestations. Il s'équipe d'un deuxième four pour répondre aux demandes de grands événements dépassant 200 convives.",
  },
  {
    year: "2022",
    title: "Nouvelles formules",
    description:
      "Enrichissement de l'offre : garnitures végétariennes, desserts sucrés, formule sur-mesure. Marc s'adapte aux nouvelles attentes tout en restant fidèle à la tradition.",
  },
  {
    year: "2025",
    title: "200+ événements",
    description:
      "Plus de 200 prestations réalisées, un taux de satisfaction de 98% et des clients qui reviennent année après année. Marc continue avec la même passion du premier jour.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Section 1 — Photo + texte */}
      <section className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="aspect-[4/5] bg-cream-200 rounded-2xl flex flex-col items-center justify-center border border-stone-200 order-2 md:order-1">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#A89A82" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 mb-3" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              <p className="font-sans text-sm text-stone-400">Photo de Marc</p>
            </div>

            {/* Texte */}
            <div className="order-1 md:order-2">
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
                L&apos;artisan
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-8">
                Marc Ruggieri, artisan tarte flambée
              </h1>
              <div className="space-y-5 font-sans text-lg leading-relaxed text-bark-700">
                <p>
                  Marc Ruggieri est né à Le Bonhomme, au cœur du Haut-Rhin, dans une famille où la cuisine alsacienne n&apos;est pas un héritage mais une façon de vivre. C&apos;est son grand-père boulanger qui lui a transmis le secret d&apos;une bonne pâte et la patience qu&apos;exige le four à bois.
                </p>
                <p>
                  En 2011, Marc transforme sa passion en métier. Il acquiert son premier four à bois mobile et commence à proposer ses prestations pour les mariages et anniversaires en Alsace. Depuis, pas question de faire les choses à moitié : pâte préparée le matin même, garnitures fraîches, bois sélectionné, cuisson surveillée à la flamme.
                </p>
                <p>
                  Aujourd&apos;hui, plus de 200 événements plus tard, Marc intervient dans tout le Grand Est. Sa réputation repose sur une chose simple : quand il arrive avec son four à bois, quelque chose se passe. Les invités se rassemblent autour de la flamme, les conversations s&apos;animent, et personne ne repart sans avoir demandé comment le contacter.
                </p>
                <p>
                  Ce n&apos;est pas un traiteur qui a ajouté la tarte flambée à son menu. C&apos;est un artisan qui n&apos;a jamais fait que ça, et qui le fait mieux que quiconque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Valeurs */}
      <section className="bg-cream-100 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Ce qui nous guide
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
              Nos valeurs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {VALEURS.map((v) => (
              <div
                key={v.title}
                className="bg-cream-50 border border-stone-200 rounded-2xl p-8 text-center transition-all duration-200 hover:shadow-md"
              >
                <div className="w-14 h-14 bg-cream-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="font-display text-2xl font-medium text-bark-900 mb-3">
                  {v.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-bark-700">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Timeline */}
      <section className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Histoire
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
              Le parcours de Marc
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-200" aria-hidden="true" />

            <div className="space-y-10">
              {TIMELINE.map((step, i) => (
                <div key={i} className="flex gap-8 items-start">
                  {/* Point */}
                  <div className="relative flex-shrink-0 w-12 flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full bg-copper-500 border-2 border-cream-50 shadow-sm block" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <p className="font-sans text-sm text-copper-500 font-medium mb-1">{step.year}</p>
                    <h3 className="font-display text-xl font-medium text-bark-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-base leading-relaxed text-bark-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — CTA */}
      <section className="bg-bark-900 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-cream-50 mb-6">
            Prêt à faire appel à Marc ?
          </h2>
          <p className="font-sans text-lg leading-relaxed text-cream-100/70 mb-10 max-w-lg mx-auto">
            Devis gratuit et personnalisé sous 24h. Sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}
