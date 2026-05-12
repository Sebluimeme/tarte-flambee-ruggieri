export default function Territoire() {
  return (
    <section className="bg-cream-100 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Zone d&apos;intervention
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 mb-6">
              Toute l&apos;Alsace et le Grand Est
            </h2>
            <p className="font-sans text-lg leading-relaxed text-bark-700 mb-8">
              Nous intervenons principalement dans le Bas-Rhin (67) et le Haut-Rhin (68). Le déplacement est inclus dans le devis pour un rayon de 80 km. Au-delà, des frais kilométriques modérés s&apos;appliquent.
            </p>

            <ul className="space-y-3">
              {[
                "Strasbourg et agglomération",
                "Colmar et environs",
                "Mulhouse",
                "Sélestat · Obernai · Saverne",
                "Route des vins d&apos;Alsace",
                "Sur demande : Lorraine, Franche-Comté, Bade-Wurtemberg",
              ].map((zone) => (
                <li key={zone} className="flex items-center gap-3 font-sans text-base text-bark-700">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span dangerouslySetInnerHTML={{ __html: zone }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Alsace SVG Map */}
          <div className="flex items-center justify-center">
            <div className="relative bg-cream-50 rounded-2xl border border-stone-200 p-8 shadow-sm w-full max-w-xs">
              <svg
                viewBox="0 0 200 380"
                fill="none"
                className="w-full"
                aria-label="Carte silhouette de l'Alsace"
              >
                {/* Alsace silhouette — simplified shape */}
                <path
                  d="M100 10 C115 10 130 18 138 30 L145 55 C150 70 148 85 142 98 L150 120 C158 140 155 160 148 178 L152 200 C158 220 155 242 145 258 L140 280 C135 295 128 308 115 318 L105 340 C100 350 90 355 80 350 L70 330 C60 318 55 305 58 290 L52 268 C45 248 48 228 55 210 L50 188 C44 170 46 150 54 133 L48 108 C42 92 45 73 54 58 L62 34 C70 20 84 10 100 10Z"
                  fill="#F5EDD8"
                  stroke="#A89A82"
                  strokeWidth="1.5"
                />

                {/* Rhine river suggestion */}
                <path
                  d="M148 30 C152 60 154 100 150 140 C146 180 148 220 145 258 C142 290 138 320 130 345"
                  stroke="#E8DFD0"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />

                {/* Strasbourg point */}
                <circle cx="130" cy="88" r="6" fill="#C75A2A" />
                <circle cx="130" cy="88" r="10" fill="#C75A2A" opacity="0.2" />

                {/* Colmar point */}
                <circle cx="118" cy="195" r="4" fill="#D87642" opacity="0.7" />

                {/* Mulhouse point */}
                <circle cx="108" cy="285" r="4" fill="#D87642" opacity="0.7" />

                {/* Labels */}
                <text x="140" y="92" fill="#2B1810" fontFamily="serif" fontSize="9" fontWeight="500">
                  Strasbourg
                </text>
                <text x="127" y="199" fill="#5C3A1F" fontFamily="serif" fontSize="8">
                  Colmar
                </text>
                <text x="117" y="289" fill="#5C3A1F" fontFamily="serif" fontSize="8">
                  Mulhouse
                </text>
              </svg>

              <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-copper-500 block" />
                  <span className="font-sans text-xs text-stone-400">Base</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-copper-400 opacity-70 block" />
                  <span className="font-sans text-xs text-stone-400">Villes couvertes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
