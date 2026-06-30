import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Concept from '@/components/sections/Concept'
import SavoirFaire from '@/components/sections/SavoirFaire'
import Occasions from '@/components/sections/Occasions'
import Process from '@/components/sections/Process'
import Formules from '@/components/sections/Formules'
import Galerie from '@/components/sections/Galerie'
import Temoignages from '@/components/sections/Temoignages'
import Zone from '@/components/sections/Zone'
import Faq from '@/components/sections/Faq'
import CtaFinal from '@/components/sections/CtaFinal'
import UrgencyBanner from '@/components/sections/UrgencyBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Formules />
      <UrgencyBanner />
      <Concept />
      <SavoirFaire />
      <Process />
      <Occasions />
      <Galerie />
      <Temoignages />
      <Zone />

      {/* Renvoi vers la marque traiteur événementiel */}
      <section className="bg-bark-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-4">
            Et pas que la tarte flambée
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-cream-50 mb-5">
            Poivre &amp; Salé, c&apos;est aussi un traiteur événementiel complet
          </h2>
          <p className="font-sans text-base leading-relaxed text-cream-200/80 mb-8 max-w-2xl mx-auto">
            La tarte flambée au feu de bois est notre signature, mais notre équipe imagine
            des prestations sur mesure pour tous vos événements : mariages, réceptions privées,
            soirées d&apos;entreprise, buffets et animations culinaires. Découvrez l&apos;ensemble
            de nos savoir-faire sur notre site dédié.
          </p>
          <a
            href="https://poivresale.fr"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2 focus:ring-offset-bark-900"
          >
            Voir toutes nos prestations sur poivresale.fr
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <Faq />
      <CtaFinal />
    </>
  )
}
