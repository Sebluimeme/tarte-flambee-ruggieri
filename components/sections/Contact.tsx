"use client";

import { useState } from "react";

type FormState = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  typeEvenement: string;
  date: string;
  convives: string;
  message: string;
};

const initialState: FormState = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  typeEvenement: "",
  date: "",
  convives: "",
  message: "",
};

const inputClass =
  "w-full border border-stone-200 rounded-xl px-4 py-3 bg-cream-50 font-sans text-sm text-bark-900 placeholder:text-stone-400 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all duration-200";

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5.02 2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.59a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
                  Merci pour votre demande. Marc vous répondra sous 24h avec votre devis personnalisé.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Prénom + Nom */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-sm font-medium text-bark-900 mb-1.5">
                      Prénom <span className="text-copper-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      value={form.prenom}
                      onChange={handleChange}
                      placeholder="Marie"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-bark-900 mb-1.5">
                      Nom <span className="text-copper-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Dupont"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email + Tél */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-sm font-medium text-bark-900 mb-1.5">
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
                  <div>
                    <label className="block font-sans text-sm font-medium text-bark-900 mb-1.5">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Type événement */}
                <div>
                  <label className="block font-sans text-sm font-medium text-bark-900 mb-1.5">
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
                    <option value="anniversaire">Anniversaire</option>
                    <option value="entreprise">Événement d&apos;entreprise</option>
                    <option value="festival">Fête &amp; festival</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block font-sans text-sm font-medium text-bark-900 mb-1.5">
                    Date souhaitée <span className="text-copper-500">*</span>
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

                {/* Nombre invités */}
                <div>
                  <label className="block font-sans text-sm font-medium text-bark-900 mb-1.5">
                    Nombre d&apos;invités <span className="text-copper-500">*</span>
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

                {/* Message */}
                <div>
                  <label className="block font-sans text-sm font-medium text-bark-900 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Lieu de la réception, accès, contraintes particulières, options souhaitées..."
                    rows={4}
                    className={`${inputClass} resize-y`}
                  />
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
                  Gratuit · Sans engagement · Réponse sous 24h
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
                  href="tel:+33612345678"
                  className="flex items-center gap-3 text-cream-100/70 hover:text-copper-400 transition-colors"
                >
                  <span className="text-copper-400"><PhoneIcon /></span>
                  <div>
                    <p className="font-sans text-xs text-cream-100/40 mb-0.5">Téléphone</p>
                    <p className="font-sans text-sm">06 12 34 56 78</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@poivresale.fr"
                  className="flex items-center gap-3 text-cream-100/70 hover:text-copper-400 transition-colors"
                >
                  <span className="text-copper-400"><MailIcon /></span>
                  <div>
                    <p className="font-sans text-xs text-cream-100/40 mb-0.5">Email</p>
                    <p className="font-sans text-sm">contact@poivresale.fr</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-cream-100/70">
                  <span className="text-copper-400"><MapIcon /></span>
                  <div>
                    <p className="font-sans text-xs text-cream-100/40 mb-0.5">Zone d&apos;intervention</p>
                    <p className="font-sans text-sm">Alsace &amp; Grand Est</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-cream-100/70">
                  <span className="text-copper-400"><ClockIcon /></span>
                  <div>
                    <p className="font-sans text-xs text-cream-100/40 mb-0.5">Disponibilité</p>
                    <p className="font-sans text-sm">7j/7, réponse sous 24h</p>
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
