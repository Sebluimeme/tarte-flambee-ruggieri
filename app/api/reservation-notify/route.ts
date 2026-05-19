import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const BOISSONS_LABELS: Record<string, string> = {
  sans: "Sans boissons",
  avec: "Avec boissons",
  illimite: "Formule illimitée",
};

const TYPE_LABELS: Record<string, string> = {
  entreprise: "Soirée entreprise",
  mariage: "Mariage",
  anniversaire: "Anniversaire",
  fete: "Fête privée",
  autre: "Autre",
};

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const e = escapeHtml;
    const nomAffiche = [data.prenom, data.nom].filter(Boolean).map(String).join(" ") || "Client";

    const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FFFDF7;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#FBF5E6;border-radius:12px;overflow:hidden;">
    <div style="background:#3D2010;padding:24px 32px;">
      <p style="color:#D4621A;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 8px;">Flamme Traiteur</p>
      <h1 style="color:#FFFDF7;font-size:22px;margin:0;">Nouvelle demande de devis (réservation)</h1>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:40%;">Nom</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;font-weight:bold;">${e(nomAffiche)}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;"><a href="mailto:${e(data.email)}" style="color:#D4621A;">${e(data.email)}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Téléphone</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;"><a href="tel:${e(data.telephone)}" style="color:#D4621A;">${e(data.telephone)}</a></td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Événement</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;">${TYPE_LABELS[data.typeEvenement] ?? e(data.typeEvenement ?? "")}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Date</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;">${data.date ? new Date(data.date).toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : "—"}</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Couverts</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;">${e(String(data.couverts ?? ""))} personnes</td></tr>
        <tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Boissons</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;">${BOISSONS_LABELS[data.boissons] ?? e(data.boissons ?? "")}</td></tr>
        ${data.lieu ? `<tr><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Lieu</td><td style="padding:10px 0;border-bottom:1px solid #D4621A20;color:#3D2010;font-size:15px;">${e(data.lieu)}${data.codePostal ? ` (${e(data.codePostal)})` : ""}</td></tr>` : ""}
        ${data.message ? `<tr><td style="padding:10px 0;color:#8B2500;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</td><td style="padding:10px 0;color:#3D2010;font-size:15px;">${e(data.message)}</td></tr>` : ""}
      </table>
      ${data.id ? `<div style="margin-top:16px;padding:12px 16px;background:#D4621A15;border:1px solid #D4621A30;border-radius:8px;"><p style="color:#3D2010;font-size:12px;margin:0;">ID réservation : <code>${e(data.id)}</code></p></div>` : ""}
      <div style="margin-top:16px;background:#D4621A15;border:1px solid #D4621A30;border-radius:8px;padding:16px;">
        <p style="color:#3D2010;font-size:13px;margin:0;">Répondre directement à cet email pour contacter le client.</p>
      </div>
    </div>
    <div style="background:#3D2010;padding:16px 32px;text-align:center;">
      <p style="color:#FFFDF7;opacity:0.4;font-size:11px;margin:0;">Flamme Traiteur — flamme-traiteur.fr</p>
    </div>
  </div>
</body>
</html>`.trim();

    await resend.emails.send({
      from: "Flamme Traiteur <contact@flamme-traiteur.fr>",
      to: ["contact@poivresale.fr", "bmsyoder@gmail.com"],
      replyTo: data.email,
      subject: `🔥 Nouvelle réservation — ${nomAffiche} (${data.couverts} pers.)`,
      html,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[reservation-notify] Erreur Resend:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
