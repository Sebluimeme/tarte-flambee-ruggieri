"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const BOISSONS_OPTIONS = [
  { id: "sans", label: "Sans boissons", icon: "🍽️" },
  { id: "avec", label: "Avec boissons", icon: "🥂" },
  { id: "illimite", label: "Formule illimitée", icon: "✨" },
];

function ReservationForm() {
  const params = useSearchParams();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    typeEvenement: "",
    date: "",
    couverts: "",
    boissons: "sans",
    lieu: "",
    codePostal: "",
    message: "",
  });

  useEffect(() => {
    const couverts = params.get("couverts");
    const boissons = params.get("boissons");
    if (couverts || boissons) {
      setFormData((prev) => ({
        ...prev,
        ...(couverts ? { couverts } : {}),
        ...(boissons ? { boissons } : {}),
      }));
    }
  }, [params]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Un email valide est requis";
    if (!formData.telephone.trim() || formData.telephone.replace(/\s/g, "").length < 10)
      newErrors.telephone = "Un numéro valide est requis";
    if (!formData.typeEvenement) newErrors.typeEvenement = "Sélectionnez un type d'événement";
    if (!formData.date) newErrors.date = "La date est requise";
    if (!formData.couverts || Number(formData.couverts) < 20)
      newErrors.couverts = "Minimum 20 couverts";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    try {
      const { db } = await import("../lib/firebase");
      const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
      const docRef = await addDoc(collection(db, "reservations"), {
        ...formData,
        couverts: Number(formData.couverts) || 0,
        status: "pending",
        createdAt: serverTimestamp(),
      });
      window.location.href = `/confirmation?id=${docRef.id}`;
      return;
    } catch (err) {
      console.error("Firestore error:", err);
    }
    window.location.href = "/confirmation";
  };

  const fieldClass = (fieldName: string) =>
    `w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#D4621A] transition-all text-[#3D2010] bg-white ${
      errors[fieldName] ? "border-red-400" : "border-[#FBF5E6]"
    }`;

  return (
    <main className="flex-1 py-16 px-4" style={{ backgroundColor: "#FFFDF7" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm mb-6 hover:text-[#D4621A] transition-colors"
            style={{ color: "#8B2500" }}
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
          >
            Demande de devis
          </h1>
          <p style={{ color: "#8B2500" }} className="text-lg">
            Nous vous recontactons sous 24h avec un devis personnalisé — gratuit et sans engagement
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl shadow-xl p-8 md:p-10 space-y-6"
          style={{ backgroundColor: "#FBF5E6" }}
        >
          {/* Identité */}
          <div>
            <h2
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010", borderColor: "#D4621A40" }}
            >
              Vos coordonnées
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#3D2010" }}>Nom *</label>
                <input type="text" name="nom" placeholder="Dupont" required value={formData.nom} onChange={handleChange} className={fieldClass("nom")} />
                {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#3D2010" }}>Prénom</label>
                <input type="text" name="prenom" placeholder="Jean" value={formData.prenom} onChange={handleChange} className={fieldClass("prenom")} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#3D2010" }}>Email *</label>
                <input type="email" name="email" placeholder="jean.dupont@email.com" required value={formData.email} onChange={handleChange} className={fieldClass("email")} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#3D2010" }}>Téléphone *</label>
                <input type="tel" name="telephone" placeholder="07 12 34 56 78" required value={formData.telephone} onChange={handleChange} className={fieldClass("telephone")} />
                {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
              </div>
            </div>
          </div>

          {/* Événement */}
          <div>
            <h2
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010", borderColor: "#D4621A40" }}
            >
              Votre événement
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#3D2010" }}>Type d&apos;événement *</label>
                <select name="typeEvenement" required value={formData.typeEvenement} onChange={handleChange} className={`${fieldClass("typeEvenement")} ${!formData.typeEvenement ? "text-gray-400" : ""}`}>
                  <option value="" disabled>Sélectionnez...</option>
                  <option value="entreprise">Soirée entreprise</option>
                  <option value="mariage">Mariage</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="fete">Fête privée</option>
                  <option value="autre">Autre</option>
                </select>
                {errors.typeEvenement && <p className="text-red-500 text-xs mt-1">{errors.typeEvenement}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#3D2010" }}>Date souhaitée *</label>
                <input type="date" name="date" required value={formData.date} onChange={handleChange} className={fieldClass("date")} />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#3D2010" }}>Nombre de couverts * (min. 20)</label>
                <input type="number" name="couverts" placeholder="ex. 50" min={20} required value={formData.couverts} onChange={handleChange} className={fieldClass("couverts")} />
                {errors.couverts && <p className="text-red-500 text-xs mt-1">{errors.couverts}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: "#3D2010" }}>Ville / Lieu</label>
                <input type="text" name="lieu" placeholder="Colmar" value={formData.lieu} onChange={handleChange} className={fieldClass("lieu")} />
              </div>
            </div>
          </div>

          {/* Boissons */}
          <div>
            <h2
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010", borderColor: "#D4621A40" }}
            >
              Formule boissons
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {BOISSONS_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, boissons: opt.id })}
                  className="flex flex-col items-center gap-2 rounded-xl p-4 border-2 transition-all text-center"
                  style={{
                    borderColor: formData.boissons === opt.id ? "#D4621A" : "#D4621A30",
                    backgroundColor: formData.boissons === opt.id ? "#D4621A10" : "white",
                  }}
                >
                  <span className="text-2xl">{opt.icon}</span>
                  <span className="text-sm font-medium" style={{ color: "#3D2010" }}>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#3D2010" }}>Message complémentaire</label>
            <textarea
              name="message"
              placeholder="Informations supplémentaires, souhaits particuliers, accès au lieu, allergies éventuelles..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={fieldClass("message")}
            />
          </div>

          <div
            className="rounded-xl p-4 flex items-start gap-3"
            style={{ backgroundColor: "#D4621A15", border: "1px solid #D4621A30" }}
          >
            <span className="text-2xl">ℹ️</span>
            <p className="text-sm leading-relaxed" style={{ color: "#3D2010" }}>
              <strong>Aucun paiement n&apos;est requis à ce stade.</strong> Nous vous contacterons sous 24h pour confirmer la disponibilité et vous envoyer un devis sur mesure.
            </p>
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-[#D4621A] hover:bg-[#8B2500] text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Envoi en cours…" : "🔥 Envoyer ma demande de devis"}
            </button>
            <p className="text-sm mt-3" style={{ color: "#8B2500" }}>
              Gratuit · Sans engagement · Réponse sous 24h
            </p>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm mb-4" style={{ color: "#8B2500" }}>Vous préférez un contact direct ?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0785621089" className="inline-flex items-center gap-2 border-2 border-[#D4621A] text-[#D4621A] hover:bg-[#D4621A] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all">
              📞 07 85 62 10 89
            </a>
            <a href="mailto:contact@poivresale.fr" className="inline-flex items-center gap-2 border-2 border-[#3D2010] text-[#3D2010] hover:bg-[#3D2010] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all">
              ✉️ contact@poivresale.fr
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ReservationPage() {
  return (
    <Suspense>
      <ReservationForm />
    </Suspense>
  );
}
