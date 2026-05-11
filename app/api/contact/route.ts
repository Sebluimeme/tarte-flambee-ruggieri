import { NextRequest, NextResponse } from "next/server";

// TODO: Intégrer Resend pour l'envoi d'emails une fois la clé API disponible.
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json() as {
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

    if (!data.email || !data.nomComplet || !data.telephone || !data.typeEvenement || !data.date || !data.convives || !data.lieu || !data.rgpd) {
      return NextResponse.json({ success: false, error: "Champs requis manquants" }, { status: 400 });
    }

    console.log("[contact] Nouvelle demande de devis:", JSON.stringify(data, null, 2));

    // TODO: Envoyer l'email via Resend
    // await resend.emails.send({
    //   from: "contact@maison-ruggieri.fr",
    //   to: "contact@maison-ruggieri.fr",
    //   subject: `Demande de devis — ${data.nomComplet}`,
    //   html: `
    //     <h2>Nouvelle demande de devis</h2>
    //     <p><strong>Nom :</strong> ${data.nomComplet}</p>
    //     <p><strong>Email :</strong> ${data.email}</p>
    //     <p><strong>Téléphone :</strong> ${data.telephone}</p>
    //     <p><strong>Type d'événement :</strong> ${data.typeEvenement}</p>
    //     <p><strong>Date :</strong> ${data.date}</p>
    //     <p><strong>Convives :</strong> ${data.convives}</p>
    //     <p><strong>Formule :</strong> ${data.formule || "Non précisée"}</p>
    //     <p><strong>Lieu :</strong> ${data.lieu}</p>
    //     <p><strong>Allergies :</strong> ${data.allergies || "Aucune"}</p>
    //     <p><strong>Infos complémentaires :</strong> ${data.infosComplementaires || "Aucune"}</p>
    //   `,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Erreur:", err);
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 });
  }
}
