import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Concept from '@/components/sections/Concept'
import SavoirFaire from '@/components/sections/SavoirFaire'
import Formules from '@/components/sections/Formules'
import Temoignages from '@/components/sections/Temoignages'
import Zone from '@/components/sections/Zone'
import Faq from '@/components/sections/Faq'
import CtaFinal from '@/components/sections/CtaFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Concept />
      <SavoirFaire />
      <Formules />
      <Temoignages />
      <Zone />
      <Faq />
      <CtaFinal />
    </>
  )
}
