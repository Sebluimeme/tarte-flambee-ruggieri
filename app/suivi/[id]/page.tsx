"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Link from "next/link";

type Reservation = {
  nom: string;
  prenom: string;
  typeEvenement: string;
  date: string;
  couverts: number;
  status: "pending" | "confirmed" | "refused";
};

const EVENT_LABELS: Record<string, string> = {
  entreprise: "Soirée entreprise",
  mariage: "Mariage",
  anniversaire: "Anniversaire",
  fete: "Fête privée",
  autre: "Autre",
};

type StatusConfig = {
  icon: string;
  title: string;
  description: string;
  bgFrom: string;
  bgTo: string;
  badgeBg: string;
  badgeText: string;
};

const STATUS_CONFIG: Record<string, StatusConfig> = {
  pending: {
    icon: "⏳",
    title: "En cours d'examen",
    description:
      "Marc a bien reçu votre demande et l'examine actuellement. Vous recevrez sa réponse sous 24h.",
    bgFrom: "#D97706",
    bgTo: "#92400E",
    badgeBg: "#FEF3C7",
    badgeText: "#92400E",
  },
  confirmed: {
    icon: "✅",
    title: "Réservation confirmée !",
    description:
      "Excellente nouvelle ! Marc a confirmé votre soirée tarte flambée. N'hésitez pas à le contacter pour finaliser les détails.",
    bgFrom: "#059669",
    bgTo: "#065F46",
    badgeBg: "#D1FAE5",
    badgeText: "#065F46",
  },
  refused: {
    icon: "❌",
    title: "Non disponible à cette date",
    description:
      "Marc n'est malheureusement pas disponible pour cette date. Contactez-le directement pour trouver une autre date qui vous convient !",
    bgFrom: "#DC2626",
    bgTo: "#991B1B",
    badgeBg: "#FEE2E2",
    badgeText: "#991B1B",
  },
};

export default function SuiviPage({ params }: { params: Promise<{ id: string }> }) {
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    params.then((p) => {
      setId(p.id);
      loadReservation(p.id);
    });
  }, [params]);

  const loadReservation = async (docId: string) => {
    try {
      const snap = await getDoc(doc(db, "reservations", docId));
      if (snap.exists()) {
        setReservation(snap.data() as Reservation);
      } else {
        setNotFound(true);
      }
    } catch (err) {
      console.error("Erreur chargement réservation:", err);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="flex-1 flex items-center justify-center" style={{ backgroundColor: "#FFFDF7" }}>
        <div className="text-[#8B2500] text-lg">Chargement de votre réservation…</div>
      </main>
    );
  }

  if (notFound || !reservation) {
    return (
      <main
        className="flex-1 flex items-center justify-center px-4 py-16"
        style={{ backgroundColor: "#FFFDF7" }}
      >
        <div className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h1
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
          >
            Réservation introuvable
          </h1>
          <p className="text-[#8B2500] mb-8">
            Ce lien de suivi n&apos;existe pas ou a expiré. Vérifiez le lien reçu ou contactez Marc directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0785621089"
              className="inline-flex items-center justify-center gap-2 bg-[#D4621A] hover:bg-[#8B2500] text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              📞 07 85 62 10 89
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#3D2010] text-[#3D2010] hover:bg-[#3D2010] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Accueil
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const statusKey = reservation.status ?? "pending";
  const config = STATUS_CONFIG[statusKey] ?? STATUS_CONFIG.pending;

  const formattedDate = reservation.date
    ? new Date(reservation.date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "Non précisée";

  return (
    <main
      className="flex-1 py-16 px-4"
      style={{ backgroundColor: "#FFFDF7" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header client */}
        <div className="text-center mb-10">
          <p className="text-sm mb-1" style={{ color: "#8B2500" }}>
            Suivi de réservation pour
          </p>
          <h1
            className="text-3xl font-bold"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
          >
            {reservation.prenom} {reservation.nom}
          </h1>
        </div>

        {/* Status card */}
        <div
          className="rounded-2xl p-8 mb-6 text-center shadow-xl text-white"
          style={{
            background: `linear-gradient(135deg, ${config.bgFrom}, ${config.bgTo})`,
          }}
        >
          <div className="text-6xl mb-4">{config.icon}</div>
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {config.title}
          </h2>
          <p className="text-white/85 leading-relaxed max-w-sm mx-auto">
            {config.description}
          </p>
        </div>

        {/* Reservation details */}
        <div
          className="rounded-2xl p-6 mb-6 shadow-md"
          style={{ backgroundColor: "#FBF5E6" }}
        >
          <h3
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
          >
            Détails de votre demande
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-[#D4621A] text-lg w-6">🎉</span>
              <div>
                <p className="text-[#8B2500] text-xs">Type d&apos;événement</p>
                <p className="text-[#3D2010] font-medium">
                  {EVENT_LABELS[reservation.typeEvenement] ?? reservation.typeEvenement}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#D4621A] text-lg w-6">📅</span>
              <div>
                <p className="text-[#8B2500] text-xs">Date souhaitée</p>
                <p className="text-[#3D2010] font-medium">{formattedDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#D4621A] text-lg w-6">👥</span>
              <div>
                <p className="text-[#8B2500] text-xs">Nombre de couverts</p>
                <p className="text-[#3D2010] font-medium">{reservation.couverts} personnes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Marc */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{ background: "linear-gradient(135deg, #3D2010, #8B2500)" }}
        >
          <p className="text-white/80 mb-1 text-sm">Une question ? Contactez Marc directement</p>
          <p className="text-white font-bold text-2xl mb-4">📞 07 85 62 10 89</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0785621089"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#8B2500] hover:bg-[#FBF5E6] font-semibold px-6 py-3 rounded-xl transition-all"
            >
              📞 Appeler
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

        {/* Back link */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-sm hover:text-[#D4621A] transition-colors"
            style={{ color: "#8B2500" }}
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>

        {/* Debug id hidden */}
        <p className="sr-only">{id}</p>
      </div>
    </main>
  );
}
