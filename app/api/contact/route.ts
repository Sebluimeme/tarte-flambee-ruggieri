import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiter: max 3 requests per 10 min per IP
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const VALID_TYPES = new Set(["mariage", "anniversaire", "entreprise", "inauguration", "autre"]);
const VALID_FORMULES = new Set(["cle-en-main", "standard", "association", "premium", "indecis"]);

const TYPE_LABELS: Record<string, string> = {
  mariage: "Mariage",
  anniversaire: "Anniversaire / fête de famille",
  entreprise: "Soirée d'entreprise",
  inauguration: "Inauguration / lancement",
  autre: "Autre événement privé",
};

const FORMULE_LABELS: Record<string, string> = {
  "cle-en-main": "Clé en main (sur devis)",
  standard: "Standard (12€/pers.)",
  association: "Association (17€/pers.)",
  premium: "Premium (24€/pers.)",
  indecis: "Je ne sais pas encore",
};

type ContactData = {
  nomComplet: string;
  email: string;
  telephone: string;
  typeEvenement: string;
  date: string;
  convives: string;
  formule?: string;
  lieu: string;
  allergies?: string;
  infosComplementaires?: string;
  rgpd: boolean;
};

function validateInput(data: unknown): { valid: boolean; error?: string } {
  if (!data || typeof data !== "object") return { valid: false, error: "Corps invalide" };
  const d = data as Record<string, unknown>;

  if (typeof d.nomComplet !== "string" || d.nomComplet.length < 2 || d.nomComplet.length > 100)
    return { valid: false, error: "Nom invalide" };
  if (typeof d.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) || d.email.length > 200)
    return { valid: false, error: "Email invalide" };
  if (typeof d.telephone !== "string" || !/^[0-9+\s\-()]{7,20}$/.test(d.telephone))
    return { valid: false, error: "Téléphone invalide" };
  if (typeof d.typeEvenement !== "string" || !VALID_TYPES.has(d.typeEvenement))
    return { valid: false, error: "Type d'événement invalide" };
  if (typeof d.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(d.date))
    return { valid: false, error: "Date invalide" };
  if (typeof d.convives !== "string" || !/^\d{1,4}$/.test(d.convives))
    return { valid: false, error: "Nombre de convives invalide" };
  if (d.formule !== undefined && (typeof d.formule !== "string" || !VALID_FORMULES.has(d.formule)))
    return { valid: false, error: "Formule invalide" };
  if (typeof d.lieu !== "string" || d.lieu.length < 2 || d.lieu.length > 300)
    return { valid: false, error: "Lieu invalide" };
  if (d.allergies !== undefined && (typeof d.allergies !== "string" || d.allergies.length > 500))
    return { valid: false, error: "Allergies invalides" };
  if (d.infosComplementaires !== undefined && (typeof d.infosComplementaires !== "string" || d.infosComplementaires.length > 1000))
    return { valid: false, error: "Infos invalides" };
  if (d.rgpd !== true) return { valid: false, error: "Consentement RGPD requis" };

  return { valid: true };
}

function emailToMarc(data: ContactData) {
  const e = escapeHtml;
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FFFDF7;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#FBF5E6;border-radius:12px;overflow:hidden;">
    <div style="background:#3D2010;padding:24px 32px;">
      <p style="color:#D4621A;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px;">Maison Ruggieri</p>
      <h1 style="color:#FFFDF7;font-size:22px;margin:0;">Nouvelle demande de devis</h1>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:40%;">Nom</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;font-weight:bold;">${e(data.nomComplet)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;"><a href="mailto:${e(data.email)}" style="color:#D4621A;">${e(data.email)}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Téléphone</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;"><a href="tel:${e(data.telephone)}" style="color:#D4621A;">${e(data.telephone)}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Événement</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;">${TYPE_LABELS[data.typeEvenement] ?? e(data.typeEvenement)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Date</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;">${new Date(data.date).toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Convives</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;">${e(data.convives)} personnes</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Formule</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;">${data.formule ? (FORMULE_LABELS[data.formule] ?? e(data.formule)) : "Non précisée"}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Lieu</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;">${e(data.lieu)}</td></tr>
        ${data.allergies ? `<tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Allergies</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;">${e(data.allergies)}</td></tr>` : ""}
        ${data.infosComplementaires ? `<tr><td style="padding:10px 0;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Infos</td><td style="padding:10px 0;color:#3D2010;font-size:15px;">${e(data.infosComplementaires)}</td></tr>` : ""}
      </table>

      <div style="margin-top:24px;background:#D4621A15;border:1px solid #D4621A30;border-radius:8px;padding:16px;">
        <p style="color:#3D2010;font-size:13px;margin:0;">Répondre directement à cet email pour contacter le client.</p>
      </div>
    </div>
    <div style="background:#3D2010;padding:16px 32px;text-align:center;">
      <p style="color:#FFFDF7;opacity:0.4;font-size:11px;margin:0;">Maison Ruggieri — maison-ruggieri.fr</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function emailConfirmation(nomComplet: string) {
  const safeName = escapeHtml(nomComplet);
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FFFDF7;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#FBF5E6;border-radius:12px;overflow:hidden;">
    <div style="background:#3D2010;padding:24px 32px;">
      <p style="color:#D4621A;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px;">Maison Ruggieri</p>
      <h1 style="color:#FFFDF7;font-size:22px;margin:0;">Nous avons bien reçu votre demande</h1>
    </div>
    <div style="padding:32px;">
      <p style="color:#3D2010;font-size:16px;line-height:1.6;">Bonjour ${safeName},</p>
      <p style="color:#3D2010;font-size:16px;line-height:1.6;">Merci pour votre demande de devis. Marc Ruggieri vous contactera <strong>sous 24h</strong> avec une proposition personnalisée.</p>
      <p style="color:#3D2010;font-size:16px;line-height:1.6;">En attendant, vous pouvez le joindre directement :</p>
      <div style="margin:24px 0;display:flex;gap:12px;">
        <a href="tel:0785621089" style="display:inline-block;background:#D4621A;color:white;text-decoration:none;padding:12px 20px;border-radius:8px;font-size:14px;font-weight:bold;">📞 07 85 62 10 89</a>
        <a href="https://wa.me/33785621089" style="display:inline-block;background:#25D366;color:white;text-decoration:none;padding:12px 20px;border-radius:8px;font-size:14px;font-weight:bold;">WhatsApp</a>
      </div>
      <p style="color:#8B2500;font-size:13px;">Votre devis est gratuit et sans engagement.</p>
    </div>
    <div style="background:#3D2010;padding:16px 32px;text-align:center;">
      <p style="color:#FFFDF7;opacity:0.4;font-size:11px;margin:0;">Maison Ruggieri — maison-ruggieri.fr · Le Bonhomme, Alsace</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Trop de tentatives, réessayez plus tard" },
      { status: 429 }
    );
  }

  try {
    const raw = await req.json();
    const { valid, error } = validateInput(raw);
    if (!valid) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }
    const data = raw as ContactData;

    await Promise.all([
      resend.emails.send({
        from: "Maison Ruggieri <contact@maison-ruggieri.fr>",
        to: ["contact@poivresale.fr"],
        replyTo: data.email,
        subject: `🔥 Nouveau devis — ${data.nomComplet} (${data.convives} pers.)`,
        html: emailToMarc(data),
      }),
      resend.emails.send({
        from: "Maison Ruggieri <contact@maison-ruggieri.fr>",
        to: [data.email],
        subject: "Votre demande de devis — Maison Ruggieri",
        html: emailConfirmation(data.nomComplet),
      }),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Erreur Resend:", err);
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 });
  }
}
