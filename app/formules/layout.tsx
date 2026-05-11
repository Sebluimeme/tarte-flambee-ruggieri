import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos formules tarte flambée — Marc Ruggieri Alsace",
  description:
    "Découvrez nos 3 formules de prestation tarte flambée à domicile, de 20 à 500 personnes. Devis sur mesure.",
};

export default function FormulesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
