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
  { value: "association", label: "Association (17€/pers.)" },
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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialState);
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({ event: 'form_contact_submit' });
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
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
            Demandez votre devis gratuit
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            {status === "success" ? (
              <div className="bg-cream-100 border border-stone-200 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-cream-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C75A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-medium text-bark-900 mb-3">
                  Message envoyé !
                </h3>
                <p className="font-sans text-base text-bark-700">
                  Merci pour votre demande. Nous vous répondrons sous 24h avec votre devis personnalisé.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nom complet */}
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

                {/* Email */}
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

                {/* Téléphone */}
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
                    placeholder="07 85 62 10 89"
                    className={inputClass}
                  />
                </div>

                {/* Type événement */}
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

                {/* Date */}
                <div>
                  <label className={labelClass}>
                    Date de l&apos;événement <span className="text-copper-500">*</span>
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

                {/* Nombre de convives */}
                <div>
                  <label className={labelClass}>
                    Nombre de convives <span className="text-copper-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="convives"
                    required
                    min={20}
                    value={form.convives}
                    onChange={handleChange}
                    placeholder="Minimum 20 personnes"
                    className={inputClass}
                  />
                </div>

                {/* Formule souhaitée */}
                <div>
                  <label className={labelClass}>Formule souhaitée</label>
                  <div className="grid grid-cols-2 gap-3">
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

                {/* Lieu */}
                <div>
                  <label className={labelClass}>
                    Lieu de l&apos;événement <span className="text-copper-500">*</span>
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

                {/* Allergies */}
                <div>
                  <label className={labelClass}>Allergies / régimes spécifiques</label>
                  <textarea
                    name="allergies"
                    value={form.allergies}
                    onChange={handleChange}
                    placeholder="Intolérance au lactose, végétarien, sans gluten..."
                    rows={2}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Infos complémentaires */}
                <div>
                  <label className={labelClass}>Informations complémentaires</label>
                  <textarea
                    name="infosComplementaires"
                    value={form.infosComplementaires}
                    onChange={handleChange}
                    placeholder="Accès, contraintes particulières, options souhaitées..."
                    rows={4}
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {/* RGPD */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rgpd"
                      required
                      checked={form.rgpd}
                      onChange={handleChange}
                      className="mt-0.5 accent-copper-500 w-4 h-4 flex-shrink-0"
                    />
                    <span className="font-sans text-sm text-bark-700 leading-relaxed">
                      J&apos;accepte que mes données soient utilisées uniquement pour traiter ma demande, conformément à la{" "}
                      <a href="/confidentialite" className="text-copper-500 underline underline-offset-2 hover:text-copper-400 transition-colors">
                        politique de confidentialité
                      </a>. <span className="text-copper-500">*</span>
                    </span>
                  </label>
                </div>

                {status === "error" && (
                  <p className="font-sans text-sm text-red-600">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter par email.
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
                  Nous vous recontactons sous 24h · Devis gratuit · Sans engagement
                </p>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="md:col-span-2">
            <div className="bg-bark-900 rounded-2xl p-8 text-cream-100 sticky top-24">
              <p className="font-display text-2xl font-medium text-cream-50 mb-8">
                Informations de contact
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+33785621089"
                  className="flex items-center gap-3 text-cream-100/70 hover:text-copper-400 transition-colors"
                >
                  <span className="text-copper-400"><Phone size={20} strokeWidth={1.5} aria-hidden="true" /></span>
                  <div>
                    <p className="font-sans text-xs text-cream-100/40 mb-0.5">Téléphone</p>
                    <p className="font-sans text-sm">07 85 62 10 89</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@poivresale.fr"
                  className="flex items-center gap-3 text-cream-100/70 hover:text-copper-400 transition-colors"
                >
                  <span className="text-copper-400"><Mail size={20} strokeWidth={1.5} aria-hidden="true" /></span>
                  <div>
                    <p className="font-sans text-xs text-cream-100/40 mb-0.5">Email</p>
                    <p className="font-sans text-sm">contact@poivresale.fr</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/33785621089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream-100/70 hover:text-copper-400 transition-colors"
                >
                  <span className="text-copper-400"><WhatsAppIcon /></span>
                  <div>
                    <p className="font-sans text-xs text-cream-100/40 mb-0.5">WhatsApp</p>
                    <p className="font-sans text-sm">Répondre sous 2h</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-cream-100/70">
                  <span className="text-copper-400"><MapPin size={20} strokeWidth={1.5} aria-hidden="true" /></span>
                  <div>
                    <p className="font-sans text-xs text-cream-100/40 mb-0.5">Zone d&apos;intervention</p>
                    <p className="font-sans text-sm">Alsace &amp; Grand Est</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-cream-100/10">
                <p className="font-sans text-xs text-cream-100/40 leading-relaxed">
                  Devis gratuit et personnalisé selon votre événement. Aucun engagement avant la confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
