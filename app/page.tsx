import { homeFaqs } from '@/lib/faq-data'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Concept from '@/components/sections/Concept'
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
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustBar />
      <Concept />
      <Formules />
      <UrgencyBanner />
      <Process />
      <Temoignages />
      <Occasions />
      <Galerie />
      <Zone />
      <Faq />
      <CtaFinal />
    </>
  )
}
