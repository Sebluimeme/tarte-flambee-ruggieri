import Link from "next/link";

const FORMULES = [
  {
    name: "Découverte",
    price: "8€",
    unit: "/pers.",
    guests: "30 personnes min.",
    duration: "2h de prestation",
    highlight: false,
    features: [
      "Four à bois authentique",
      "Pâte artisanale maison",
      "Garnitures classiques",
      "Installation et rangement",
    ],
    cta: "Demander un devis",
    ctaHref: "/contact",
  },
  {
    name: "Événement",
    price: "12€",
    unit: "/pers.",
    guests: "80 personnes min.",
    duration: "3h de prestation",
    highlight: true,
    badge: "Le plus populaire",
    features: [
      "Four à bois authentique",
      "Pâte artisanale maison",
      "Garnitures premium + végétarienne",
      "Dessert sucré inclus",
      "Service complet aux tables",
      "Installation et rangement",
    ],
    cta: "Demander un devis",
    ctaHref: "/contact",
  },
  {
    name: "Sur-mesure",
    price: "Devis",
    unit: "",
    guests: "Illimité",
    duration: "Durée adaptée",
    highlight: false,
    features: [
      "Tout ce qui vous faut",
      "Formule personnalisée",
      "Options à la carte",
      "Coordination complète",
    ],
    cta: "Nous contacter",
    ctaHref: "/contact",
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Formules() {
  return (
    <section id="formules" className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Formules
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
            La formule qui correspond à votre événement
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {FORMULES.map((f) => (
            <div
              key={f.name}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-200 ease-out ${
                f.highlight
                  ? "bg-bark-900 border-bark-900 shadow-md"
                  : "bg-cream-100 border-stone-200 hover:shadow-md"
              }`}
            >
              {f.highlight && f.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-copper-500 text-cream-50 text-xs font-sans font-medium whitespace-nowrap">
                  {f.badge}
                </span>
              )}

              <div className="mb-6">
                <h3
                  className={`font-display text-2xl md:text-3xl font-medium mb-2 ${
                    f.highlight ? "text-cream-50" : "text-bark-900"
                  }`}
                >
                  {f.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`font-display text-4xl font-medium tracking-tight ${
                      f.highlight ? "text-copper-400" : "text-copper-500"
                    }`}
                  >
                    {f.price}
                  </span>
                  {f.unit && (
                    <span
                      className={`font-sans text-base ${
                        f.highlight ? "text-cream-100/60" : "text-stone-400"
                      }`}
                    >
                      {f.unit}
                    </span>
                  )}
                </div>
                <p
                  className={`font-sans text-sm ${
                    f.highlight ? "text-cream-100/60" : "text-stone-400"
                  }`}
                >
                  {f.guests} · {f.duration}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {f.features.map((feat) => (
                  <li
                    key={feat}
                    className={`flex items-start gap-2.5 font-sans text-sm leading-relaxed ${
                      f.highlight ? "text-cream-100/80" : "text-bark-700"
                    }`}
                  >
                    <span className={f.highlight ? "text-copper-400" : "text-copper-500"}>
                      <CheckIcon />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href={f.ctaHref}
                className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans font-medium text-base transition-all ${
                  f.highlight
                    ? "bg-copper-500 text-cream-50 hover:bg-copper-400 shadow-sm hover:shadow-md"
                    : "bg-transparent text-bark-900 border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-50"
                }`}
              >
                {f.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
