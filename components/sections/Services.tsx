const SERVICES = [
  {
    title: "Matériel professionnel",
    description:
      "Four à bois mobile installé sur place, avec tout l'équipement nécessaire. Pas de branchement gaz, pas de four électrique — uniquement le bois et la flamme.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C12 2 6 8 6 13.5C6 16.99 8.69 19.5 12 19.5C15.31 19.5 18 16.99 18 13.5C18 8 12 2 12 2Z" />
        <path d="M12 8C12 8 9 11 9 13.5C9 15.16 10.34 16.5 12 16.5C13.66 16.5 15 15.16 15 13.5C15 11 12 8 12 8Z" />
      </svg>
    ),
  },
  {
    title: "Pâte maison",
    description:
      "La pâte est préparée artisanalement le jour même, à base de farine, eau, sel et levure. Croustillante, fine, et cuite en 3 minutes au four à bois.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Animation en direct",
    description:
      "Marc prépare et cuit les tartes devant vos invités. Le spectacle du four à bois fait partie de l'expérience — une animation culinaire unique et conviviale.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Notre service
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 max-w-xl">
            Une expérience culinaire unique pour vos invités
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-cream-100 border border-stone-200 rounded-2xl p-8 transition-all duration-200 ease-out hover:shadow-md"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-cream-50 rounded-xl border border-stone-200 mb-6">
                {s.icon}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-bark-900 mb-3">
                {s.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-bark-700">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
