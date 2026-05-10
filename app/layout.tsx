import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tarte Flambée Marc Ruggieri | Prestation événementielle Alsace",
  description:
    "Marc Ruggieri — Prestation tarte flambée à domicile en Alsace. Soirées entreprise, mariages, anniversaires. À partir de 18€/personne, rayon 100 km autour de Le Bonhomme (68650). Devis gratuit.",
  keywords:
    "tarte flambée, prestation événementielle, Alsace, Haut-Rhin, mariage, soirée entreprise, anniversaire, Marc Ruggieri, Le Bonhomme",
  openGraph: {
    title: "Tarte Flambée Marc Ruggieri | Prestation événementielle Alsace",
    description:
      "Prestation tarte flambée à domicile en Alsace. À partir de 18€/personne.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <head>
        {/* Google Ads / gtag — TODO: Remplacer GTM-XXXXXXX par votre vrai ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GTM-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-XXXXXXX');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-[#3D2010]/95 backdrop-blur-sm border-b border-[#D4621A]/30 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-[#FBF5E6] hover:text-[#D4621A] transition-colors">
              <span className="text-2xl">🔥</span>
              <span className="font-bold text-lg" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Tarte Flambée
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-[#FBF5E6]/80 hover:text-[#D4621A] transition-colors text-sm font-medium">
                Accueil
              </Link>
              <Link href="/#evenements" className="text-[#FBF5E6]/80 hover:text-[#D4621A] transition-colors text-sm font-medium">
                Événements
              </Link>
              <Link href="/reservation" className="text-[#FBF5E6]/80 hover:text-[#D4621A] transition-colors text-sm font-medium">
                Réserver
              </Link>
              <Link href="/#contact" className="text-[#FBF5E6]/80 hover:text-[#D4621A] transition-colors text-sm font-medium">
                Contact
              </Link>
            </div>
            <Link
              href="/reservation"
              className="bg-[#D4621A] hover:bg-[#8B2500] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-md"
            >
              Réserver
            </Link>
          </div>
        </nav>

        {children}

        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/33785621088"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-transform hover:scale-110"
          style={{ backgroundColor: "#25D366" }}
          aria-label="Contacter Marc sur WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="w-7 h-7"
          >
            <path d="M16 0C7.164 0 0 7.163 0 16c0 2.817.733 5.462 2.015 7.769L0 32l8.445-2.214A15.94 15.94 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.28 13.28 0 01-6.771-1.847l-.486-.288-5.01 1.313 1.338-4.877-.317-.5A13.256 13.256 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.27-9.778c-.399-.199-2.358-1.162-2.723-1.295-.364-.133-.629-.199-.894.199-.265.398-1.029 1.295-1.261 1.56-.232.265-.464.298-.863.1-.399-.199-1.684-.621-3.208-1.978-1.186-1.058-1.987-2.364-2.22-2.762-.232-.398-.025-.614.175-.813.18-.178.399-.464.598-.696.199-.232.265-.398.398-.663.133-.265.066-.498-.033-.697-.1-.199-.894-2.154-1.225-2.95-.322-.774-.649-.669-.894-.681l-.762-.013c-.265 0-.696.1-1.061.498-.364.398-1.393 1.361-1.393 3.316 0 1.954 1.426 3.843 1.625 4.108.199.265 2.808 4.287 6.804 6.015.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.766-.115 2.358-.964 2.69-1.895.332-.93.332-1.728.232-1.894-.1-.166-.365-.266-.764-.465z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
