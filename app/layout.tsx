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

        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/33785621089"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-transform hover:scale-110"
          style={{ backgroundColor: "#25D366" }}
          aria-label="Contacter sur WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-7 h-7">
            <path d="M16 0C7.164 0 0 7.163 0 16c0 2.817.733 5.462 2.015 7.769L0 32l8.445-2.214A15.94 15.94 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.28 13.28 0 01-6.771-1.847l-.486-.288-5.01 1.313 1.338-4.877-.317-.5A13.256 13.256 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.27-9.778c-.399-.199-2.358-1.162-2.723-1.295-.364-.133-.629-.199-.894.199-.265.398-1.029 1.295-1.261 1.56-.232.265-.464.298-.863.1-.399-.199-1.684-.621-3.208-1.978-1.186-1.058-1.987-2.364-2.22-2.762-.232-.398-.025-.614.175-.813.18-.178.399-.464.598-.696.199-.232.265-.398.398-.663.133-.265.066-.498-.033-.697-.1-.199-.894-2.154-1.225-2.95-.322-.774-.649-.669-.894-.681l-.762-.013c-.265 0-.696.1-1.061.498-.364.398-1.393 1.361-1.393 3.316 0 1.954 1.426 3.843 1.625 4.108.199.265 2.808 4.287 6.804 6.015.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.766-.115 2.358-.964 2.69-1.895.332-.93.332-1.728.232-1.894-.1-.166-.365-.266-.764-.465z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
