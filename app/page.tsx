import type { Metadata } from "next";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Services from "../components/sections/Services";
import Formules from "../components/sections/Formules";
import Territoire from "../components/sections/Territoire";
import Galerie from "../components/sections/Galerie";
import Temoignages from "../components/sections/Temoignages";
import Faq from "../components/sections/Faq";
import Contact from "../components/sections/Contact";
import CtaFinal from "../components/sections/CtaFinal";

export const metadata: Metadata = {
  title: "Marc Ruggieri — Prestation tarte flambée à domicile en Alsace",
  description:
    "Prestation tarte flambée à domicile pour mariages, anniversaires et événements d'entreprise en Alsace. Devis gratuit.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Marc Ruggieri — Tarte flambée artisanale",
  description:
    "Prestation tarte flambée à domicile pour mariages, anniversaires et événements d'entreprise en Alsace.",
  url: "https://tarte-flambee-one.vercel.app",
  telephone: "+33612345678",
  email: "contact@poivresale.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Le Bonhomme",
    addressLocality: "Le Bonhomme",
    postalCode: "68650",
    addressCountry: "FR",
  },
  areaServed: { "@type": "State", name: "Alsace" },
  priceRange: "€€",
  servesCuisine: "Alsatian",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stats />
      <Services />
      <Formules />
      <Territoire />
      <Galerie />
      <Temoignages />
      <Faq />
      <Contact />
      <CtaFinal />
    </>
  );
}
