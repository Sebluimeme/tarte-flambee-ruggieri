// Attribution marketing (source du lead) — capture, catégorisation et
// persistance "first-touch" pour la durée de la session navigateur.
// Fonctions pures séparées du DOM pour rester testables sans environnement navigateur.

export type AttributionSource = "google_ads" | "organic" | "direct" | "referral" | "unknown";

export type Attribution = {
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  gclid: string;
  source: AttributionSource;
};

export type LeadAnalyticsEvent = {
  event: "generate_lead";
  lead_source: AttributionSource;
  lead_medium: string;
  lead_campaign: string;
  lead_content: string;
  lead_term: string;
  lead_source_medium: string;
  lead_landing_page: string;
  lead_referrer_host: string;
  lead_is_google_ads: boolean;
};

const STORAGE_KEY = "ps_attribution";

const SEARCH_ENGINE_HOSTS = ["google.", "bing.com", "yahoo.", "duckduckgo.com", "ecosia.org", "qwant.com"];

export function categorizeSource(input: {
  gclid: string;
  utmMedium: string;
  referrer: string;
  currentHost: string;
}): AttributionSource {
  if (input.gclid || input.utmMedium.toLowerCase() === "cpc") return "google_ads";
  if (!input.referrer) return "direct";

  let referrerHost: string;
  try {
    referrerHost = new URL(input.referrer).hostname;
  } catch {
    return "unknown";
  }

  if (SEARCH_ENGINE_HOSTS.some((h) => referrerHost.includes(h))) return "organic";
  if (referrerHost !== input.currentHost) return "referral";
  return "unknown";
}

export function getReferrerHost(referrer: string): string {
  if (!referrer) return "";
  try {
    return new URL(referrer).hostname;
  } catch {
    return "unknown";
  }
}

export function buildLeadAnalyticsEvent(attribution: Attribution): LeadAnalyticsEvent {
  const medium = attribution.utmMedium || (attribution.source === "google_ads" ? "cpc" : attribution.source);
  const sourceMedium = (attribution.utmSource || attribution.utmMedium)
    ? `${attribution.utmSource || attribution.source} / ${medium || "unknown"}`
    : attribution.source;

  return {
    event: "generate_lead",
    lead_source: attribution.source,
    lead_medium: medium,
    lead_campaign: attribution.utmCampaign,
    lead_content: attribution.utmContent,
    lead_term: attribution.utmTerm,
    lead_source_medium: sourceMedium,
    lead_landing_page: attribution.landingPage,
    lead_referrer_host: getReferrerHost(attribution.referrer),
    lead_is_google_ads: attribution.source === "google_ads",
  };
}

function captureCurrentAttribution(): Attribution {
  const params = new URLSearchParams(window.location.search);
  const referrer = document.referrer || "";
  const gclid = params.get("gclid") ?? "";
  const utmMedium = params.get("utm_medium") ?? "";

  return {
    landingPage: window.location.pathname,
    referrer,
    utmSource: params.get("utm_source") ?? "",
    utmMedium,
    utmCampaign: params.get("utm_campaign") ?? "",
    utmContent: params.get("utm_content") ?? "",
    utmTerm: params.get("utm_term") ?? "",
    gclid,
    source: categorizeSource({ gclid, utmMedium, referrer, currentHost: window.location.hostname }),
  };
}

// Attribution "first-touch" : capturée une fois par session (sessionStorage) et
// réutilisée telle quelle pour tous les envois de formulaire ultérieurs.
export function getAttribution(): Attribution {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as Attribution;
  } catch {
    // sessionStorage indisponible : on retombe sur une capture à la volée
  }

  const attribution = captureCurrentAttribution();
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // écriture impossible : on continue sans persistance
  }
  return attribution;
}
