import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tarte-flambee.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/dashboard", "/suivi/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
