const GALLERY_ITEMS = [
  { label: "Four à bois · Mariage", caption: "Mariage à Obernai" },
  { label: "Garnitures · Service", caption: "Garnitures artisanales" },
  { label: "Soirée d&apos;entreprise", caption: "Séminaire à Strasbourg" },
  { label: "Tarte flambée classique", caption: "Recette traditionnelle" },
  { label: "Ambiance festive", caption: "Anniversaire à Colmar" },
  { label: "Installation extérieure", caption: "Fête de village" },
];

export default function Galerie() {
  return (
    <section className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              En images
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
              Chaque prestation est unique
            </h2>
          </div>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-100 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Voir sur Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="aspect-square bg-cream-200 rounded-2xl flex flex-col items-center justify-center border border-stone-200 overflow-hidden group hover:shadow-md transition-all duration-200"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#A89A82"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-3 opacity-40"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              <p
                className="font-sans text-xs text-stone-400 text-center px-4"
                dangerouslySetInnerHTML={{ __html: item.caption }}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-100 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Voir sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
