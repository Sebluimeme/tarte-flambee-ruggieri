import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CookieBanner from '../components/ui/CookieBanner'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Poivre & Salé — Tarte flambée à domicile en Alsace',
    template: '%s · Poivre & Salé',
  },
  description:
    "Nous nous déplaçons en Alsace avec notre four à bois pour vos mariages, anniversaires et soirées d'entreprise. Tarte flambée traditionnelle, ingrédients frais, dès 12 €/pers.",
  keywords: [
    'tarte flambée Alsace',
    'traiteur tarte flambée',
    'four à bois mobile',
    'mariage Alsace',
    'soirée entreprise Colmar',
    'flammekueche à domicile',
'Alsace traiteur événementiel',
  ],
  authors: [{ name: 'Poivre & Salé' }],
  metadataBase: new URL('https://maison-ruggieri.fr'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://maison-ruggieri.fr',
    siteName: 'Poivre & Salé',
    title: 'Poivre & Salé — Tarte flambée à domicile en Alsace',
    description:
      "Nous nous déplaçons en Alsace avec notre four à bois pour vos mariages, anniversaires et soirées d'entreprise.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Poivre & Salé — Tarte flambée au four à bois en Alsace',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Poivre & Salé',
  description:
    "Traiteur spécialisé en tarte flambée (flammekueche) au four à bois, service à domicile en Alsace.",
  url: 'https://maison-ruggieri.fr',
  telephone: '+33785621089',
  email: 'contact@poivresale.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Le Bonhomme',
    addressRegion: 'Alsace',
    addressCountry: 'FR',
  },
  servesCuisine: ['Alsacienne', 'Tarte flambée', 'Flammekueche'],
  priceRange: '€€',
  openingHours: 'Mo-Su 08:00-22:00',
  areaServed: {
    '@type': 'State',
    name: 'Alsace',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-54QTLCPW');`,
          }}
        />
      </head>
      <body className="bg-cream-50 text-bark-900 font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-54QTLCPW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-copper-500 focus:text-cream-50 focus:rounded-full focus:font-sans focus:text-sm"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
        <a
          href="https://wa.me/33785621089"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nous contacter sur WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5d] hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </a>
      </body>
    </html>
  )
}
