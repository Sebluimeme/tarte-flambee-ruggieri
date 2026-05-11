import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CookieBanner from "../components/ui/CookieBanner";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marc Ruggieri — Prestation tarte flambée à domicile en Alsace",
    template: "%s | Marc Ruggieri",
  },
  description:
    "Prestation tarte flambée à domicile pour mariages, anniversaires et événements d'entreprise en Alsace. Devis gratuit.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Marc Ruggieri — Tarte flambée artisanale",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream-50 text-bark-900 font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
