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

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Formules />
      <Concept />
      <SavoirFaire />
      <Occasions />
      <Process />
      <Galerie />
      <Temoignages />
      <Zone />
      <Faq />
      <CtaFinal />
    </>
  )
}
