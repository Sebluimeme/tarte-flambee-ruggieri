'use client'

import { useEffect } from 'react'
import Link from 'next/link'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export default function MerciContent() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'lead_form_submit' })
    }
  }, [])

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-20 bg-cream-50">
      <div className="max-w-2xl mx-auto text-center">

        {/* Icône */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-copper-500/10 mb-8">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-copper-500" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        {/* Titre */}
        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 mb-4">
          Merci pour votre demande !
        </h1>

        {/* Sous-titre */}
        <p className="font-sans text-lg leading-relaxed text-bark-700 mb-3">
          Marc a bien reçu votre message. Il vous répond personnellement sous&nbsp;
          <strong className="text-copper-500">24h</strong> avec un devis adapté à votre événement.
        </p>
        <p className="font-sans text-base text-bark-600 mb-10">
          En attendant, vous pouvez l&apos;appeler directement ou lui envoyer un message WhatsApp.
        </p>

        {/* Badges réassurance */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            'Devis gratuit',
            'Sans engagement',
            'Annulation gratuite',
            'Règlement le jour J',
          ].map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 rounded-full bg-cream-100 border border-stone-200 font-sans text-sm text-bark-700"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Contact direct */}
        <div className="rounded-2xl bg-bark-900 p-8 mb-10 text-center">
          <p className="font-sans text-cream-100/70 text-sm mb-2">En attendant, contactez Marc directement :</p>
          <p className="font-display text-2xl text-cream-50 mb-5">+33 7 85 62 10 89</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+33785621089"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cream-50 text-bark-900 font-sans font-medium text-sm hover:bg-cream-100 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
              </svg>
              Appeler Marc
            </a>
            <a
              href="https://wa.me/33785621089?text=Bonjour%20Marc%2C%20j%27ai%20envoy%C3%A9%20une%20demande%20de%20devis%20sur%20votre%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-sans font-medium text-sm hover:bg-[#1ebe5d] transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Étapes */}
        <div className="rounded-2xl bg-cream-100 border border-stone-200 p-8 mb-10 text-left">
          <h2 className="font-display text-xl font-medium text-bark-900 mb-6 text-center">Et maintenant ?</h2>
          <div className="space-y-5">
            {[
              {
                num: '1',
                title: 'Marc vérifie la disponibilité de votre date',
                desc: 'Il consulte son planning et prépare un devis adapté à votre événement et à votre zone.',
              },
              {
                num: '2',
                title: 'Vous recevez votre devis sous 24h',
                desc: 'Par email ou par téléphone — gratuit, sans engagement, clair et détaillé.',
              },
              {
                num: '3',
                title: "Vous validez et on prépare votre soirée",
                desc: "Marc s'occupe de tout. Le jour J, il arrive avec son four à bois et fait le spectacle.",
              },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-copper-500 flex items-center justify-center text-cream-50 font-sans font-semibold text-sm shrink-0">
                  {step.num}
                </div>
                <div>
                  <p className="font-sans font-medium text-bark-900 text-sm mb-0.5">{step.title}</p>
                  <p className="font-sans text-sm text-bark-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-sm text-bark-600 hover:text-bark-900 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Retour à l&apos;accueil
        </Link>

      </div>
    </section>
  )
}
