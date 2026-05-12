import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous — Devis tarte flambée gratuit",
  description:
    "Demandez un devis gratuit pour votre prestation tarte flambée en Alsace. Réponse sous 24h.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
