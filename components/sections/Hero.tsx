'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-x-clip">
      <Image
        src="/media/hero-flamme-traiteur.jpg"
        fill
        sizes="100vw"
        className="object-cover object-center"
        alt="Tarte flambée artisanale cuite au feu de bois"
        priority
        quality={65}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bark-900/40 to-bark-900/80" />

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-44 md:pb-24 w-full min-w-0 -translate-y-10 md:translate-y-0">
        <div className="max-w-3xl min-w-0">
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-medium tracking-tight leading-[1.0] text-cream-50 mb-6 break-words">
            La vraie <em>Flammekueche,</em><br />
            <span className="block">traiteur complet au feu de bois,</span>
            <span className="block">chez vous.</span>
          </h1>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-cream-50 mb-8 w-full max-w-[19rem] sm:max-w-xl min-w-0 break-words">
            La tarte flambée au feu de bois, c&apos;est notre spécialité. Et parce que chaque événement est différent,
            nous composons avec vous l&apos;apéritif et le dessert, pour un repas complet entièrement adapté à vos souhaits.
          </p>
          <div className="flex w-full max-w-[19rem] sm:max-w-full min-w-0 flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base text-center hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:+33785621089"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cream-50/10 backdrop-blur-sm text-cream-50 font-sans font-medium text-base text-center border border-cream-50/30 hover:bg-cream-50/20 transition-all focus:outline-none focus:ring-2 focus:ring-cream-50 focus:ring-offset-2"
            >
              07 85 62 10 89
            </a>
          </div>
          <p className="hidden sm:block font-sans text-sm text-cream-50/80">
            200+ événements réalisés · Devis gratuit · 07 85 62 10 89
          </p>
        </div>
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block animate-bounce">
        <ChevronDown size={28} className="text-cream-50/50" aria-hidden="true" />
      </div>
    </section>
  )
}
