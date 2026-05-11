import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("[contact] Nouvelle demande de devis:", JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Erreur:", err);
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 });
  }
}
