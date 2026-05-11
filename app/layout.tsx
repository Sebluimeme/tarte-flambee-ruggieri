import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://maison-ruggieri.fr";
const OG_IMAGE = "https://images.unsplash.com/photo-1571501210331-41105cb1b3e7?w=1200&q=80";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FoodEstablishment"],
  name: "Maison Ruggieri",
  description:
    "Prestation tarte flambée artisanale à domicile en Alsace — mariages, anniversaires et événements. Devis gratuit, départ de Le Bonhomme (68650).",
  url: SITE_URL,
  telephone: "+33785621089",
  email: "contact@poivresale.fr",
  priceRange: "€€",
  servesCuisine: "Alsatian",
  image: OG_IMAGE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Le Bonhomme",
    postalCode: "68650",
    addressLocality: "Le Bonhomme",
    addressRegion: "Alsace",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1667,
    longitude: 7.1333,
  },
  areaServed: [
    { "@type": "City", name: "Colmar" },
    { "@type": "City", name: "Strasbourg" },
    { "@type": "City", name: "Mulhouse" },
    { "@type": "City", name: "Sélestat" },
    { "@type": "City", name: "Saint-Dié-des-Vosges" },
    { "@type": "AdministrativeArea", name: "Alsace" },
    { "@type": "AdministrativeArea", name: "Haut-Rhin" },
    { "@type": "AdministrativeArea", name: "Bas-Rhin" },
    { "@type": "AdministrativeArea", name: "Vosges" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
    worstRating: "1",
  },
};

export const metadata: Metadata = {
  title: {
    default: "Maison Ruggieri — Tarte flambée à domicile en Alsace",
    template: "%s | Maison Ruggieri",
  },
  description:
    "Prestation tarte flambée artisanale pour mariages, anniversaires et événements en Alsace. Devis gratuit, départ de Le Bonhomme (68650).",
  keywords: [
    "tarte flambée",
    "prestation tarte flambée",
    "tarte flambée à domicile",
    "tarte flambée Alsace",
    "tarte flambée Colmar",
    "tarte flambée Strasbourg",
    "tarte flambée Mulhouse",
    "tarte flambée Sélestat",
    "tarte flambée mariage Alsace",
    "tarte flambée soirée entreprise",
    "traiteur alsacien",
    "four à bois Alsace",
    "Maison Ruggieri",
    "Le Bonhomme 68650",
  ],
  authors: [{ name: "Marc Ruggieri" }],
  creator: "Maison Ruggieri",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Maison Ruggieri — Tarte flambée à domicile en Alsace",
    description:
      "Prestation tarte flambée artisanale pour mariages, anniversaires et événements en Alsace. Devis gratuit, départ de Le Bonhomme (68650).",
    locale: "fr_FR",
    type: "website",
    siteName: "Maison Ruggieri",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Maison Ruggieri — Tarte flambée alsacienne, prestation four à bois à domicile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Ruggieri — Tarte flambée à domicile en Alsace",
    description:
      "Prestation tarte flambée artisanale pour mariages, anniversaires et événements en Alsace.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3ENEQ729D7"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3ENEQ729D7');
          `}
        </Script>
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-inter), sans-serif", backgroundColor: "#FAF7F2" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
