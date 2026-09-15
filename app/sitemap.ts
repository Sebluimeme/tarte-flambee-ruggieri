import { MetadataRoute } from "next";

const SITE_URL = "https://flamme-traiteur.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/formules", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/galerie", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/a-propos", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/particuliers", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/tarte-flambee-soiree-entreprise", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/tarte-flambee-mariage", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/tarte-flambee-anniversaire", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/tarte-flambee-association", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/allergenes", changeFrequency: "yearly" as const, priority: 0.4 },
    { path: "/conseils", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/guide-traiteur-tarte-flambee-alsace", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/prix-traiteur-tarte-flambee", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/four-a-bois-mobile-evenement", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/tarte-flambee-allergies-sans-gluten", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/cgv", changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  return pages.map(({ path, ...metadata }) => ({
    url: `${SITE_URL}${path}`,
    ...metadata,
  }));
}
