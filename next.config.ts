import type { NextConfig } from "next";

// Compatible avec : GTM (GTM-54QTLCPW) + scripts inline de consentement/JSON-LD
// dans layout.tsx (pas de nonce/proxy en place), GA4, conversions Google Ads
// (AW-18117082922, conversion_linker), et l'auth/Firestore Firebase utilisés
// par /admin et le formulaire de contact.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net https://*.googleadservices.com;
  font-src 'self';
  connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net https://*.googleadservices.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://firestore.googleapis.com;
  frame-src https://www.googletagmanager.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: cspHeader },
];

const nextConfig: NextConfig = {
  images: {
    qualities: [65, 75],
    remotePatterns: [
      new URL("https://images.unsplash.com/**"),
      new URL("https://images.pexels.com/**"),
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Page /reservation supprimée — fusionnée dans /contact (formulaire de devis unique)
      { source: "/reservation", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
