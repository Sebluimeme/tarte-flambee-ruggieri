'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream-50 pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center">
          {/* Texte */}
          <div className="order-2 md:order-1">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Traiteur alsacien depuis 2012
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-6">
              La vraie tarte flambée,<br />
              servie chez vous.
            </h1>
            <p className="font-sans text-lg leading-relaxed text-bark-700 mb-8 max-w-xl">
              Mariage, anniversaire ou soirée d&apos;entreprise : Marc installe son four à bois en Alsace et ravit vos convives avec des flammekueches authentiques, faites sur place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
              >
                Vérifier ma date de disponibilité
              </Link>
              <Link
                href="/#formules"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-bark-900 font-sans font-medium text-base border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-100 transition-all focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
              >
                Découvrir les formules
              </Link>
            </div>
          </div>

          {/* Illustration flamme */}
          <div className="order-1 md:order-2 relative flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-sm bg-cream-200 flex items-center justify-center">
              {/* Flame SVG placeholder */}
              <svg
                width="200"
                height="260"
                viewBox="0 0 200 260"
                fill="none"
                className="opacity-60"
                aria-hidden="true"
              >
                <path
                  d="M100 10C100 10 40 70 40 130C40 170 65 205 100 205C135 205 160 170 160 130C160 70 100 10 100 10Z"
                  fill="#EDE0BF"
                />
                <path
                  d="M100 45C100 45 60 90 60 135C60 165 77 190 100 190C123 190 140 165 140 135C140 90 100 45 100 45Z"
                  fill="#D87642"
                  opacity="0.7"
                />
                <path
                  d="M100 90C100 90 75 115 75 145C75 162 86 175 100 175C114 175 125 162 125 145C125 115 100 90 100 90Z"
                  fill="#C75A2A"
                  opacity="0.9"
                />
                <path
                  d="M100 130C100 130 88 143 88 155C88 162 93 168 100 168C107 168 112 162 112 155C112 143 100 130 100 130Z"
                  fill="#A8451B"
                />
                <ellipse cx="94" cy="145" rx="5" ry="12" fill="#FAF6EE" opacity="0.4" />
              </svg>
              {/* Grain overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream-200/30" />
            </div>
            {/* Badge flottant */}
            <div className="absolute -bottom-4 -left-4 bg-cream-50 rounded-xl shadow-sm px-4 py-3 border border-stone-200">
              <p className="font-display text-3xl font-medium text-copper-500 leading-none">200+</p>
              <p className="font-sans text-sm text-stone-400 mt-1">convives par soirée</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
