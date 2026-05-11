import { NextRequest, NextResponse } from "next/server";

// TODO: Intégrer Resend pour l'envoi d'emails une fois la clé API disponible.
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json() as {
      prenom: string;
      nom: string;
      email: string;
      telephone?: string;
      typeEvenement: string;
      date: string;
      convives: string;
      message?: string;
    };

    // Validation basique
    if (!data.email || !data.prenom || !data.nom || !data.typeEvenement || !data.date || !data.convives) {
      return NextResponse.json({ success: false, error: "Champs requis manquants" }, { status: 400 });
    }

    // Log pour debug
    console.log("[contact] Nouvelle demande de devis:", JSON.stringify(data, null, 2));

    // TODO: Envoyer l'email via Resend
    // await resend.emails.send({
    //   from: "contact@poivresale.fr",
    //   to: "contact@poivresale.fr",
    //   subject: `Demande de devis — ${data.prenom} ${data.nom}`,
    //   html: `
    //     <h2>Nouvelle demande de devis</h2>
    //     <p><strong>Nom :</strong> ${data.prenom} ${data.nom}</p>
    //     <p><strong>Email :</strong> ${data.email}</p>
    //     <p><strong>Téléphone :</strong> ${data.telephone || "Non renseigné"}</p>
    //     <p><strong>Type d'événement :</strong> ${data.typeEvenement}</p>
    //     <p><strong>Date :</strong> ${data.date}</p>
    //     <p><strong>Convives :</strong> ${data.convives}</p>
    //     <p><strong>Message :</strong> ${data.message || "Aucun"}</p>
    //   `,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Erreur:", err);
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 });
  }
}
