import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
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
      </head>
      <body className="bg-cream-50 text-bark-900 font-sans">
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
      </body>
    </html>
  )
}
