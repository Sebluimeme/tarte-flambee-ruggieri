import Link from "next/link";

export default function CtaFinal() {
  return (
    <section className="bg-bark-900 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-400 mb-6">
          Prêt à réserver ?
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-cream-50 mb-6 max-w-2xl mx-auto">
          Prêt à régaler vos invités ?
        </h2>
        <p className="font-sans text-lg leading-relaxed text-cream-100/70 mb-10 max-w-lg mx-auto">
          Dites-nous la date, le lieu et le nombre de convives. Marc vous répond sous 24h avec un devis personnalisé et sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md"
          >
            Demander un devis gratuit
          </Link>
          <a
            href="tel:+33612345678"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-cream-50 font-sans font-medium text-base border border-cream-50/20 hover:border-cream-50/40 hover:bg-cream-50/10 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5.02 2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18z" />
            </svg>
            Appeler Marc
          </a>
        </div>
      </div>
    </section>
  );
}
