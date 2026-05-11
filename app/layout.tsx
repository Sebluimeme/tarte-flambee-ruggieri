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
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Tarte Flambée Maison — Traiteur alsacien, service à domicile',
  description: "Marc Ruggieri, artisan traiteur alsacien depuis 2012. Flammekueche authentique au four à bois pour vos mariages, anniversaires et événements d'entreprise en Alsace et Grand Est.",
  keywords: 'tarte flambée, flammekueche, traiteur alsacien, mariage alsace, four à bois, événement entreprise',
  openGraph: {
    title: 'Tarte Flambée Maison — Traiteur alsacien',
    description: 'Flammekueche authentique au four à bois pour vos événements en Alsace.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream-50 text-bark-900 font-sans">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-copper-500 focus:text-cream-50 focus:rounded-full">
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
