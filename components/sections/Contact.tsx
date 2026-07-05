"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

type FormState = {
  nomComplet: string;
  email: string;
  telephone: string;
  typeEvenement: string;
  date: string;
  convives: string;
  formule: string;
  lieu: string;
  allergies: string;
  infosComplementaires: string;
  rgpd: boolean;
};

const initialState: FormState = {
  nomComplet: "",
  email: "",
  telephone: "",
  typeEvenement: "",
  date: "",
  convives: "",
  formule: "",
  lieu: "",
  allergies: "",
  infosComplementaires: "",
  rgpd: false,
};

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-cream-50 border border-stone-200 text-bark-900 placeholder:text-stone-400 focus:outline-none focus:border-copper-500 focus:ring-2 focus:ring-copper-500/20 transition-all";

const labelClass = "font-sans text-sm font-medium text-bark-900 mb-2 block";

const FORMULES = [
  { value: "cle-en-main", label: "Clé en main (sur devis)" },
  { value: "standard", label: "Standard (12€/pers.)" },
  { value: "gourmande", label: "Gourmande (17€/pers.)" },
  { value: "premium", label: "Premium (24€/pers.)" },
  { value: "indecis", label: "Je ne sais pas encore" },
];

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm({ ...form, [target.name]: target.checked });
    } else {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // 1. Persister le lead en base AVANT l'email
    try {
      const { db } = await import("@/app/lib/firebase");
      const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
      await addDoc(collection(db, "reservations"), {
        ...form,
        convives: Number(form.convives) || 0,
        source: "contact",
        status: "pending",
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("[contact] Firestore error:", err);
    }

    // 2. Envoyer l'email via l'API
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialState);
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({ event: "form_contact_submit" });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">

        {status === "success" ? (
          <div className="bg-cream-100 border border-stone-200 rounded-2xl p-12 text-center">
            <div className="w-14 h-14 bg-cream-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-medium text-bark-900 mb-3">Message envoyé !</h3>
            <p className="font-sans text-base text-bark-700">
              Merci pour votre demande. Marc vous répondra rapidement avec votre devis personnalisé.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Ligne 1 — Nom / Email */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>
                  Nom complet <span className="text-copper-500">*</span>
                </label>
                <input
                  type="text"
                  name="nomComplet"
                  required
                  value={form.nomComplet}
                  onChange={handleChange}
                  placeholder="Marie Dupont"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Email <span className="text-copper-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="marie@exemple.fr"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Ligne 2 — Téléphone / Type événement */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>
                  Téléphone <span className="text-copper-500">*</span>
                </label>
                <input
                  type="tel"
                  name="telephone"
                  required
                  value={form.telephone}
                  onChange={handleChange}
                  placeholder="06 00 00 00 00"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Type d&apos;événement <span className="text-copper-500">*</span>
                </label>
                <select
                  name="typeEvenement"
                  required
                  value={form.typeEvenement}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Choisir...</option>
                  <option value="mariage">Mariage</option>
                  <option value="anniversaire">Anniversaire / fête de famille</option>
                  <option value="entreprise">Soirée d&apos;entreprise</option>
                  <option value="inauguration">Inauguration / lancement</option>
                  <option value="autre">Autre événement privé</option>
                </select>
              </div>
            </div>

            {/* Ligne 3 — Date / Convives / Lieu */}
            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className={labelClass}>
                  Date <span className="text-copper-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Nombre de convives <span className="text-copper-500">*</span>
                </label>
                <input
                  type="number"
                  name="convives"
                  required
                  min={1}
                  value={form.convives}
                  onChange={handleChange}
                  placeholder="Min. 30"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Lieu <span className="text-copper-500">*</span>
                </label>
                <input
                  type="text"
                  name="lieu"
                  required
                  value={form.lieu}
                  onChange={handleChange}
                  placeholder="Ville ou code postal"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Formule */}
            <div>
              <label className={labelClass}>Formule souhaitée</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {FORMULES.map((f) => (
                  <label
                    key={f.value}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                      form.formule === f.value
                        ? "border-copper-500 bg-copper-500/5"
                        : "border-stone-200 bg-cream-50 hover:border-stone-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="formule"
                      value={f.value}
                      checked={form.formule === f.value}
                      onChange={handleChange}
                      className="accent-copper-500"
                    />
                    <span className="font-sans text-sm text-bark-900">{f.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Ligne 4 — Allergies / Infos (optionnels, collapsés visuellement) */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>
                  Allergies / régimes{" "}
                  <span className="font-normal text-stone-400">(optionnel)</span>
                </label>
                <textarea
                  name="allergies"
                  value={form.allergies}
                  onChange={handleChange}
                  placeholder="Sans lactose, végétarien..."
                  rows={2}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Informations complémentaires{" "}
                  <span className="font-normal text-stone-400">(optionnel)</span>
                </label>
                <textarea
                  name="infosComplementaires"
                  value={form.infosComplementaires}
                  onChange={handleChange}
                  placeholder="Accès, contraintes, options..."
                  rows={2}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            {/* RGPD + Submit */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer flex-1">
                <input
                  type="checkbox"
                  name="rgpd"
                  required
                  checked={form.rgpd}
                  onChange={handleChange}
                  className="mt-0.5 accent-copper-500 w-4 h-4 flex-shrink-0"
                />
                <span className="font-sans text-sm text-bark-700 leading-relaxed">
                  J&apos;accepte que mes données soient utilisées pour traiter ma demande —{" "}
                  <a href="/confidentialite" className="text-copper-500 underline underline-offset-2 hover:text-copper-400 transition-colors">
                    politique de confidentialité
                  </a>. <span className="text-copper-500">*</span>
                </span>
              </label>
            </div>

            {status === "error" && (
              <p className="font-sans text-sm text-red-600">
                Une erreur est survenue. Réessayez ou contactez-nous par email.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>

            <p className="font-sans text-xs text-center text-stone-400">
              Devis gratuit · Sans engagement · Réponse rapide
            </p>
          </form>
        )}

        {/* Informations de contact — en dessous du formulaire */}
        <div className="mt-12 pt-10 border-t border-stone-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="tel:+33785621089"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center shrink-0 group-hover:bg-copper-500/10 transition-colors">
                <Phone size={18} className="text-copper-500" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <p className="font-sans text-xs text-stone-400 mb-0.5">Téléphone</p>
                <p className="font-sans text-sm font-medium text-bark-900 group-hover:text-copper-500 transition-colors">07 85 62 10 89</p>
              </div>
            </a>

            <a
              href="mailto:contact@poivresale.fr"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center shrink-0 group-hover:bg-copper-500/10 transition-colors">
                <Mail size={18} className="text-copper-500" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <p className="font-sans text-xs text-stone-400 mb-0.5">Email</p>
                <p className="font-sans text-sm font-medium text-bark-900 group-hover:text-copper-500 transition-colors">contact@poivresale.fr</p>
              </div>
            </a>

            <a
              href="https://wa.me/33785621089"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center shrink-0 group-hover:bg-copper-500/10 transition-colors">
                <span className="text-copper-500"><WhatsAppIcon /></span>
              </div>
              <div>
                <p className="font-sans text-xs text-stone-400 mb-0.5">WhatsApp</p>
                <p className="font-sans text-sm font-medium text-bark-900 group-hover:text-copper-500 transition-colors">Réponse rapide</p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-copper-500" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <p className="font-sans text-xs text-stone-400 mb-0.5">Zone</p>
                <p className="font-sans text-sm font-medium text-bark-900">Alsace &amp; Grand Est</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
