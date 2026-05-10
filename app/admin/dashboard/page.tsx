"use client";

// Firestore rules à appliquer dans Firebase Console :
// match /reservations/{docId} {
//   allow create: if true;
//   allow read: if true;  // lecture par ID = token secret
//   allow list, update, delete: if request.auth != null;
// }

import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "../../lib/firebase";

type Reservation = {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  typeEvenement: string;
  date: string;
  couverts: number;
  lieu: string;
  codePostal: string;
  message: string;
  status: "pending" | "confirmed" | "refused";
  createdAt: Timestamp | null;
};

const STATUS_LABELS: Record<string, { label: string; bg: string; text: string }> = {
  pending: { label: "En attente", bg: "#FEF3C7", text: "#92400E" },
  confirmed: { label: "Confirmée", bg: "#D1FAE5", text: "#065F46" },
  refused: { label: "Refusée", bg: "#FEE2E2", text: "#991B1B" },
};

const EVENT_LABELS: Record<string, string> = {
  entreprise: "Soirée entreprise",
  mariage: "Mariage",
  anniversaire: "Anniversaire",
  fete: "Fête privée",
  autre: "Autre",
};

export default function AdminDashboard() {
  const [authChecked, setAuthChecked] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "/admin";
      } else {
        setAuthChecked(true);
        loadReservations();
      }
    });
    return () => unsubscribe();
  }, []);

  const loadReservations = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "reservations"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data: Reservation[] = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<Reservation, "id">),
      }));
      setReservations(data);
    } catch (err) {
      console.error("Erreur chargement réservations:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: "pending" | "confirmed" | "refused") => {
    try {
      await updateDoc(doc(db, "reservations", id), { status });
      setReservations((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status } : r))
      );
    } catch (err) {
      console.error("Erreur mise à jour status:", err);
    }
  };

  const copyLink = (id: string) => {
    const url = `${window.location.origin}/suivi/${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    window.location.href = "/admin";
  };

  if (!authChecked) {
    return (
      <main className="flex-1 flex items-center justify-center" style={{ backgroundColor: "#FFFDF7" }}>
        <div className="text-[#8B2500] text-lg">Vérification de l&apos;accès…</div>
      </main>
    );
  }

  return (
    <main className="flex-1 py-10 px-4" style={{ backgroundColor: "#FFFDF7" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
            >
              Tableau de bord
            </h1>
            <p className="text-sm mt-1" style={{ color: "#8B2500" }}>
              {reservations.length} réservation{reservations.length !== 1 ? "s" : ""} au total
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={loadReservations}
              className="border-2 border-[#D4621A] text-[#D4621A] hover:bg-[#D4621A] hover:text-white font-semibold px-4 py-2 rounded-xl transition-all text-sm"
            >
              Actualiser
            </button>
            <button
              onClick={handleSignOut}
              className="bg-[#3D2010] hover:bg-[#8B2500] text-white font-semibold px-4 py-2 rounded-xl transition-all text-sm"
            >
              Déconnexion
            </button>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-20 text-[#8B2500]">Chargement des réservations…</div>
        ) : reservations.length === 0 ? (
          <div
            className="rounded-2xl p-12 text-center shadow-sm"
            style={{ backgroundColor: "#FBF5E6" }}
          >
            <div className="text-5xl mb-4">📋</div>
            <p className="text-[#3D2010] font-medium">Aucune réservation pour l&apos;instant.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {reservations.map((r) => {
              const statusInfo = STATUS_LABELS[r.status] ?? STATUS_LABELS.pending;
              return (
                <div
                  key={r.id}
                  className="rounded-2xl shadow-md p-6 space-y-4"
                  style={{ backgroundColor: "#FBF5E6" }}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p
                        className="text-xl font-bold"
                        style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
                      >
                        {r.prenom} {r.nom}
                      </p>
                      <p className="text-sm" style={{ color: "#8B2500" }}>
                        {r.createdAt
                          ? new Date(r.createdAt.seconds * 1000).toLocaleDateString("fr-FR", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "Date inconnue"}
                      </p>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{ backgroundColor: statusInfo.bg, color: statusInfo.text }}
                    >
                      {statusInfo.label}
                    </span>
                  </div>

                  {/* Details grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                    <div className="flex gap-2">
                      <span className="text-[#D4621A]">📧</span>
                      <a href={`mailto:${r.email}`} className="text-[#3D2010] hover:text-[#D4621A] transition-colors">
                        {r.email}
                      </a>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#D4621A]">📞</span>
                      <a href={`tel:${r.telephone}`} className="text-[#3D2010] hover:text-[#D4621A] transition-colors">
                        {r.telephone}
                      </a>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#D4621A]">🎉</span>
                      <span className="text-[#3D2010]">{EVENT_LABELS[r.typeEvenement] ?? r.typeEvenement}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#D4621A]">📅</span>
                      <span className="text-[#3D2010]">
                        {r.date
                          ? new Date(r.date).toLocaleDateString("fr-FR", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            })
                          : "Non précisée"}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#D4621A]">👥</span>
                      <span className="text-[#3D2010]">{r.couverts} couverts</span>
                    </div>
                    {(r.lieu || r.codePostal) && (
                      <div className="flex gap-2">
                        <span className="text-[#D4621A]">📍</span>
                        <span className="text-[#3D2010]">
                          {[r.lieu, r.codePostal].filter(Boolean).join(" — ")}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  {r.message && (
                    <div
                      className="rounded-xl p-3 text-sm"
                      style={{ backgroundColor: "#D4621A15", border: "1px solid #D4621A30" }}
                    >
                      <p className="font-medium text-[#3D2010] mb-1">Message :</p>
                      <p className="text-[#3D2010]">{r.message}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: "#D4621A30" }}>
                    <button
                      onClick={() => updateStatus(r.id, "confirmed")}
                      disabled={r.status === "confirmed"}
                      className="px-4 py-2 rounded-lg text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
                    >
                      ✅ Confirmer
                    </button>
                    <button
                      onClick={() => updateStatus(r.id, "refused")}
                      disabled={r.status === "refused"}
                      className="px-4 py-2 rounded-lg text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
                    >
                      ❌ Refuser
                    </button>
                    <button
                      onClick={() => updateStatus(r.id, "pending")}
                      disabled={r.status === "pending"}
                      className="px-4 py-2 rounded-lg text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}
                    >
                      ⏳ Remettre en attente
                    </button>
                    <button
                      onClick={() => copyLink(r.id)}
                      className="ml-auto px-4 py-2 rounded-lg text-sm font-semibold border-2 border-[#D4621A] text-[#D4621A] hover:bg-[#D4621A] hover:text-white transition-all"
                    >
                      {copiedId === r.id ? "✓ Lien copié !" : "🔗 Lien suivi client"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
