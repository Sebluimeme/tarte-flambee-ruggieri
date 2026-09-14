import type { Metadata } from 'next'
import Link from 'next/link'
import GalleryGrid from '@/components/sections/GalleryGrid'
import { GALLERY_ITEMS } from '@/lib/gallery-data'

export const metadata: Metadata = {
  title: 'Galerie de nos prestations traiteur en Alsace',
  description:
    'Découvrez en images les tartes flambées au feu de bois, installations, buffets et réceptions réalisés par Poivre & Salé en Alsace.',
  alternates: { canonical: '/galerie' },
}

export default function GalleryPage() {
  return (
    <>
      <section className="bg-cream-100 px-6 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
            Galerie Poivre &amp; Salé
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-bark-900 md:text-6xl">
            Nos prestations, simplement comme elles se vivent
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-bark-600 md:text-lg">
            Des flammes du four aux tables dressées : {GALLERY_ITEMS.length} photos pour vous aider à imaginer votre mariage, votre repas d’entreprise ou votre fête.
          </p>
        </div>
      </section>

      <GalleryGrid />

      <section className="border-t border-stone-200 bg-cream-200 px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
            Votre événement
          </p>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
            Une configuration adaptée à votre lieu et à vos invités
          </h2>
          <p className="mx-auto mb-8 mt-5 max-w-2xl font-sans text-base leading-relaxed text-bark-600 md:text-lg">
            Décrivez-nous la date, le lieu et le nombre de convives. Nous vous proposerons une organisation claire et le matériel réellement utile.
          </p>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-copper-500 px-8 py-3 font-sans text-base font-semibold text-cream-50 shadow-md transition-colors hover:bg-copper-400"
          >
            Parler de mon événement
          </Link>
        </div>
      </section>
    </>
  )
}
