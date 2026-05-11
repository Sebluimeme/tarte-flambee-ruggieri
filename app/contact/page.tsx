"use client";

import { useState } from "react";
import { Clock, Mail, Phone, MapPin } from "lucide-react";

type FormState = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  typeEvenement: string;
  date: string;
  lieu: string;
  convives: string;
  message: string;
};

const initialState: FormState = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  typeEvenement: "",
  date: "",
  lieu: "",
  convives: "",
  message: "",
};

const inputClass =
  "w-full border border-stone-200 rounded-xl px-4 py-3 bg-cream-50 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all text-bark-900 text-sm placeholder:text-stone-400";

export default function ContactPage() {
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
    <>
      {/* Hero */}
      <section className="bg-cream-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-bark-900 mb-4">
            Demandez votre devis gratuit
          </h1>
          <p className="text-bark-700 text-lg max-w-xl">
            Réponse garantie sous 24h. Sans engagement.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              {status === "success" ? (
                <div className="bg-cream-100 border border-stone-200 rounded-2xl p-10 text-center">
                  <p className="font-display text-2xl font-medium text-bark-900 mb-3">
                    Message envoyé !
                  </p>
                  <p className="text-bark-700">
                    Merci pour votre demande. Marc vous répondra sous 24h avec votre devis
                    personnalisé.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-bark-900 mb-1.5">
                        Nom *
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
                    <div>
                      <label className="block text-xs font-medium text-bark-900 mb-1.5">
                        Prénom *
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
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-bark-900 mb-1.5">
                      Email *
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
                    <label className="block text-xs font-medium text-bark-900 mb-1.5">
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

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-bark-900 mb-1.5">
                        Type d&apos;événement *
                      </label>
                      <select
                        name="typeEvenement"
                        required
                        value={form.typeEvenement}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Choisir...
                        </option>
                        <option value="mariage">Mariage</option>
                        <option value="anniversaire">Anniversaire</option>
                        <option value="entreprise">Événement d&apos;entreprise</option>
                        <option value="festival">Fête &amp; festival</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-bark-900 mb-1.5">
                        Date souhaitée *
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
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-bark-900 mb-1.5">
                      Lieu approximatif
                    </label>
                    <input
                      type="text"
                      name="lieu"
                      value={form.lieu}
                      onChange={handleChange}
                      placeholder="Colmar, Strasbourg..."
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-bark-900 mb-1.5">
                      Nombre de convives *
                    </label>
                    <input
                      type="number"
                      name="convives"
                      required
                      min={20}
                      value={form.convives}
                      onChange={handleChange}
                      placeholder="Minimum 20"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-bark-900 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Lieu de la réception, accès, contraintes particulières..."
                      rows={4}
                      className={`${inputClass} resize-vertical`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Une erreur est survenue. Veuillez réessayer.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-full bg-copper-500 text-cream-50 font-medium hover:bg-copper-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
                  </button>

                  <p className="text-xs text-center text-stone-400">
                    Gratuit · Sans engagement · Réponse sous 24h
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="md:col-span-2">
              <div className="bg-bark-900 rounded-2xl p-8 text-cream-100">
                <p className="font-display text-2xl font-medium mb-8">Marc Ruggieri</p>

                <div className="space-y-5 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock strokeWidth={1.5} size={18} className="text-copper-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-cream-100/70">Réponse garantie sous</p>
                      <p className="font-display text-2xl font-medium text-copper-400">24h</p>
                    </div>
                  </div>

                  <a
                    href="mailto:contact@poivresale.fr"
                    className="flex items-center gap-3 text-sm text-cream-100/70 hover:text-copper-400 transition-colors"
                  >
                    <Mail strokeWidth={1.5} size={18} className="flex-shrink-0" />
                    contact@poivresale.fr
                  </a>

                  <a
                    href="tel:+336XXXXXXXX"
                    className="flex items-center gap-3 text-sm text-cream-100/70 hover:text-copper-400 transition-colors"
                  >
                    <Phone strokeWidth={1.5} size={18} className="flex-shrink-0" />
                    +33 6 XX XX XX XX
                  </a>

                  <div className="flex items-center gap-3 text-sm text-cream-100/70">
                    <MapPin strokeWidth={1.5} size={18} className="flex-shrink-0" />
                    Alsace &amp; Grand Est
                  </div>
                </div>

                <div className="border-t border-cream-100/10 pt-6">
                  <p className="text-sm text-cream-100/50">Disponible 7j/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
