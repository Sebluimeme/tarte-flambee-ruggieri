import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-cream-50 overflow-hidden">
      {/* Grain noise overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      >
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-6">
              Prestation tarte flambée à domicile en Alsace
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
              L&apos;authentique tarte flambée alsacienne, chez vous
            </h1>
            <p className="font-sans text-lg leading-relaxed text-bark-700 mb-10 max-w-lg">
              Marc Ruggieri prépare et cuit vos tartes flambées sur place, devant vos invités, pour vos mariages, anniversaires et événements d&apos;entreprise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md"
              >
                Demander un devis
              </Link>
              <Link
                href="/#formules"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-100 transition-all"
              >
                Voir les formules
              </Link>
            </div>

            {/* Badges réassurance */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream-200 border border-stone-200">
                <span className="text-copper-500 text-sm">★★★★★</span>
                <span className="font-sans text-sm text-bark-700">Plus de 200 événements</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream-200 border border-stone-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span className="font-sans text-sm text-bark-700">Livraison du matériel incluse</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream-200 border border-stone-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="font-sans text-sm text-bark-700">100% artisanal</span>
              </div>
            </div>
          </div>

          {/* Right — Flame illustration */}
          <div className="hidden md:flex items-center justify-center">
            <svg
              width="380"
              height="460"
              viewBox="0 0 380 460"
              fill="none"
              className="animate-pulse"
              style={{ animationDuration: "4s" }}
              aria-hidden="true"
            >
              {/* Outer flame */}
              <path
                d="M190 20C190 20 80 120 80 230C80 310 128 380 190 380C252 380 320 310 320 230C320 120 190 20 190 20Z"
                fill="#EDE0BF"
                opacity="0.5"
              />
              {/* Mid flame */}
              <path
                d="M190 70C190 70 110 155 110 240C110 300 145 355 190 355C235 355 270 300 270 240C270 155 190 70 190 70Z"
                fill="#D87642"
                opacity="0.35"
              />
              {/* Inner flame */}
              <path
                d="M190 130C190 130 140 190 140 250C140 285 162 315 190 315C218 315 240 285 240 250C240 190 190 130 190 130Z"
                fill="#C75A2A"
                opacity="0.6"
              />
              {/* Core */}
              <path
                d="M190 195C190 195 168 220 168 248C168 263 178 275 190 275C202 275 212 263 212 248C212 220 190 195 190 195Z"
                fill="#A8451B"
                opacity="0.8"
              />
              {/* Highlight */}
              <ellipse cx="180" cy="230" rx="8" ry="20" fill="#FAF6EE" opacity="0.4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
