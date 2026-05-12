'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-end">
      <Image
        src="/hero-tarte-flambee.png"
        fill
        className="object-cover"
        alt="Tarte flambée artisanale cuite au feu de bois"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bark-900/20 to-bark-900/60" />

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-cream-200/90 mb-4">
            Artisan alsacien · Le Bonhomme
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-medium tracking-tight leading-[1.0] text-cream-50 mb-6">
            La <em>vraie</em> tarte flambée,<br />
            <span className="block">cuite au feu de bois,</span>
            <span className="block">chez vous.</span>
          </h1>
          <p className="font-sans text-lg leading-relaxed text-cream-200/85 mb-8 max-w-xl">
            Marc Ruggieri se déplace en Alsace avec son four à bois traditionnel pour vos mariages,
            anniversaires et soirées d&apos;entreprise. Recette familiale, ingrédients frais, ambiance garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
            >
              Demander un devis →
            </Link>
            <a
              href="tel:+33785621089"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cream-50/10 backdrop-blur-sm text-cream-50 font-sans font-medium text-base border border-cream-50/30 hover:bg-cream-50/20 transition-all focus:outline-none focus:ring-2 focus:ring-cream-50 focus:ring-offset-2"
            >
              07 85 62 10 89
            </a>
          </div>
          <p className="font-sans text-sm text-cream-200/65">
            ★★★★★ 4,9/5 · 87 avis · 200+ événements depuis 2019 · Devis sous 24h
          </p>
        </div>
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={28} className="text-cream-50/50" aria-hidden="true" />
      </div>
    </section>
  )
}
