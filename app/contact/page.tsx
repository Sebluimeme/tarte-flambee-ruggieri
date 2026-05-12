import type { Metadata } from "next";
import Contact from "../../components/sections/Contact";

export const metadata: Metadata = {
  title: "Maison Ruggieri — Prestation tarte flambée à domicile en Alsace",
  description:
    "Prestation tarte flambée à domicile pour mariages, anniversaires et événements d'entreprise en Alsace. Devis gratuit.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 pt-24 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Contact
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-bark-900 mb-4">
            Demandez votre devis gratuit
          </h1>
          <p className="font-sans text-lg leading-relaxed text-bark-700 max-w-xl">
            Nous vous répondons sous 24h avec un devis personnalisé. Sans engagement.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
