"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <main
      className="flex-1 flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: "#FFFDF7" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Icône de succès */}
        <div
          className="inline-flex items-center justify-center w-24 h-24 rounded-full text-5xl mb-8 shadow-xl"
          style={{ background: "linear-gradient(135deg, #D4621A, #8B2500)" }}
        >
          ✅
        </div>

        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
        >
          Votre demande a bien été envoyée à Marc !
        </h1>

        <p className="text-lg mb-6 leading-relaxed" style={{ color: "#3D2010" }}>
          Marc Ruggieri vous contactera sous{" "}
          <strong className="text-[#D4621A]">24h</strong> pour confirmer votre soirée et vous envoyer un devis personnalisé.
        </p>

        {/* Lien de suivi */}
        {id && (
          <div
            className="rounded-2xl p-6 mb-8 text-left shadow-md"
            style={{ backgroundColor: "#FBF5E6", border: "2px solid #D4621A40" }}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">🔗</span>
              <div>
                <p className="font-bold text-[#3D2010] mb-1">Suivez votre réservation en temps réel</p>
                <p className="text-sm text-[#8B2500] mb-3">
                  Ce lien vous permet de voir le statut de votre demande dès que Marc la traite. Mémorisez-le ou envoyez-le vous par email.
                </p>
                <a
                  href={`/suivi/${id}`}
                  className="inline-flex items-center gap-2 bg-[#D4621A] hover:bg-[#8B2500] text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
                >
                  Voir le suivi de ma réservation →
                </a>
              </div>
            </div>
            <div
              className="mt-3 rounded-lg px-3 py-2 text-xs font-mono break-all"
              style={{ backgroundColor: "#3D201015", color: "#3D2010" }}
            >
              {typeof window !== "undefined"
                ? `${window.location.origin}/suivi/${id}`
                : `/suivi/${id}`}
            </div>
          </div>
        )}

        {/* Card informative */}
        <div
          className="rounded-2xl p-8 mb-8 text-left shadow-lg"
          style={{ backgroundColor: "#FBF5E6" }}
        >
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
          >
            Et maintenant ?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5"
                style={{ backgroundColor: "#D4621A" }}
              >
                1
              </div>
              <p style={{ color: "#3D2010" }}>
                <strong>Marc vérifie vos disponibilités</strong> et prépare un devis adapté à votre événement.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5"
                style={{ backgroundColor: "#D4621A" }}
              >
                2
              </div>
              <p style={{ color: "#3D2010" }}>
                <strong>Vous recevez votre devis par email ou téléphone</strong> dans les 24h — gratuit et sans engagement.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5"
                style={{ backgroundColor: "#D4621A" }}
              >
                3
              </div>
              <p style={{ color: "#3D2010" }}>
                <strong>Vous validez et c&apos;est parti !</strong> Marc prépare votre soirée tarte flambée de rêve.
              </p>
            </div>
          </div>
        </div>

        {/* Contact direct */}
        <div
          className="rounded-2xl p-6 mb-8"
          style={{ background: "linear-gradient(135deg, #3D2010, #8B2500)" }}
        >
          <p className="text-white/80 mb-2">
            En attendant, n&apos;hésitez pas à contacter Marc directement
          </p>
          <p className="text-white font-bold text-xl mb-4">📞 07 85 62 10 89</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0785621089"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#8B2500] hover:bg-[#FBF5E6] font-semibold px-6 py-3 rounded-xl transition-all"
            >
              📞 Appeler maintenant
            </a>
            <a
              href="https://wa.me/33785621089"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#D4621A] hover:bg-[#8B2500] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
        >
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <main className="flex-1 flex items-center justify-center" style={{ backgroundColor: "#FFFDF7" }}>
        <div className="text-[#8B2500]">Chargement…</div>
      </main>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
