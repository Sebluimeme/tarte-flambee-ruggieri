"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Users,
  Check,
  MessageSquareQuote,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ClipboardList,
  Truck,
  Utensils,
} from "lucide-react";

// ─── Fade-in variant ───────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ─── Separator ─────────────────────────────────────────────────────────────────
function Separator() {
  return (
    <div className="flex justify-center my-6">
      <div style={{ width: 40, height: 1, backgroundColor: "#C4A882" }} />
    </div>
  );
}

// ─── Homepage ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <AboutSection />
      <FormulasSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ZoneSection />
      <ContactSection />
    </main>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4">
      <Image
        src="https://images.unsplash.com/photo-1571501210331-41105cb1b3e7?w=1920&q=80"
        alt="Tarte flambée alsacienne sortant du four à bois"
        fill
        priority
        unoptimized
        className="object-cover"
        sizes="100vw"
      />
      {/* Gradient overlay — sombre en bas vers transparent en haut */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.10) 100%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Logotype */}
          <div className="flex flex-col items-center mb-6">
            <span
              className="text-sm tracking-[0.3em] uppercase text-white/70 mb-1"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Maison
            </span>
            <h1
              className="text-6xl md:text-8xl font-bold text-white leading-none"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Ruggieri
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/80 mb-2">
            Tarte flambée d&apos;Alsace · Prestation à domicile
          </p>
          <p className="text-base text-white/60 mb-10 max-w-xl mx-auto">
            Four à bois traditionnel pour vos mariages, anniversaires et soirées d&apos;entreprise en Alsace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold tracking-wide uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: "#D4622A", color: "#FAF7F2" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B84E1E")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#D4622A")}
            >
              Demander un devis
            </Link>
            <Link
              href="/#formules"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold tracking-wide uppercase transition-all hover:bg-[#E8DCC8]"
              style={{
                border: "1.5px solid #D4622A",
                color: "#D4622A",
                backgroundColor: "transparent",
              }}
            >
              Découvrir nos formules
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown strokeWidth={1.5} size={28} className="text-white/40" />
      </motion.div>
    </section>
  );
}

// ─── About Section ─────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <motion.section
      className="py-24 px-4"
      style={{ backgroundColor: "#FAF7F2" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt="Marc Ruggieri artisan tarte flambée en action"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div>
            <span
              className="inline-block rounded-full px-3 py-1 text-xs mb-6"
              style={{ backgroundColor: "#E8DCC8", color: "#2B1810" }}
            >
              Artisan alsacien depuis 2015
            </span>
            <h2
              className="text-4xl font-bold mb-4 leading-snug"
              style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
            >
              Qui sommes-nous ?
            </h2>
            <Separator />
            <p className="text-base leading-relaxed mb-4" style={{ color: "#2B1810" }}>
              Marc Ruggieri est un artisan passionné, né et grandi en Alsace. Depuis 2015, il perpétue la tradition de la tarte flambée au four à bois lors de vos événements privés et professionnels.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#2B1810" }}>
              Chaque prestation est préparée avec soin : pâte maison, ingrédients frais du terroir, four à bois monté sur place. Marc gère tout, de l&apos;installation à la cuisson, pour que vous profitiez pleinement de vos invités.
            </p>
            <Link
              href="/#formules"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#B84E1E]"
              style={{ color: "#D4622A" }}
            >
              En savoir plus sur nos formules
              <ChevronDown strokeWidth={1.5} size={16} style={{ transform: "rotate(-90deg)" }} />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Formulas Section ──────────────────────────────────────────────────────────
const FORMULAS = [
  {
    name: "Essentielle",
    price: "12€",
    unit: "/ pers.",
    minCouverts: "Minimum 20 couverts",
    popular: false,
    features: [
      "Tartes flambées à volonté",
      "Four à bois traditionnel",
      "Ingrédients frais du terroir",
      "Installation et rangement inclus",
    ],
  },
  {
    name: "Prestige",
    price: "16€",
    unit: "/ pers.",
    minCouverts: "Minimum 30 couverts",
    popular: true,
    features: [
      "Tout de la formule Essentielle",
      "Boissons soft et bière incluses",
      "Service à table",
      "Installation complète clé en main",
    ],
  },
  {
    name: "Illimitée",
    price: "20€",
    unit: "/ pers.",
    minCouverts: "Minimum 40 couverts",
    popular: false,
    features: [
      "Tartes et boissons à volonté",
      "Service haut de gamme",
      "Animation four à bois",
      "Formule clé en main complète",
    ],
  },
];

function FormulasSection() {
  return (
    <section id="formules" className="py-24 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl font-bold mb-2"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
          >
            Nos formules
          </h2>
          <Separator />
          <p className="text-base" style={{ color: "#2B1810" }}>
            Tarification transparente — devis personnalisé sous 24h
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {FORMULAS.map((f, i) => (
            <motion.div
              key={f.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col"
              style={{
                backgroundColor: f.popular ? "#2B1810" : "#FFFFFF",
                border: f.popular ? "none" : "1px solid #E8DCC8",
              }}
            >
              {f.popular && (
                <div
                  className="rounded-t-2xl text-center py-2 text-xs font-semibold tracking-widest uppercase"
                  style={{ backgroundColor: "#D4622A", color: "#FAF7F2" }}
                >
                  Populaire
                </div>
              )}
              <div className="p-8 flex flex-col flex-1">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    color: f.popular ? "#FAF7F2" : "#2B1810",
                  }}
                >
                  {f.name}
                </h3>

                <div className="flex items-center gap-2 mb-2">
                  <Users strokeWidth={1.5} size={14} style={{ color: f.popular ? "#C4A882" : "#C4A882" }} />
                  <span className="text-xs" style={{ color: f.popular ? "#C4A882" : "#C4A882" }}>
                    {f.minCouverts}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-6 mt-2">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      color: f.popular ? "#D4622A" : "#D4622A",
                    }}
                  >
                    {f.price}
                  </span>
                  <span className="text-sm" style={{ color: f.popular ? "rgba(250,247,242,0.55)" : "#C4A882" }}>
                    {f.unit}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {f.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: f.popular ? "rgba(250,247,242,0.85)" : "#2B1810" }}
                    >
                      <Check strokeWidth={1.5} size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#D4622A" }} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className="block text-center rounded-full py-3 text-sm font-semibold tracking-wide uppercase transition-all"
                  style={
                    f.popular
                      ? { backgroundColor: "#D4622A", color: "#FAF7F2" }
                      : { border: "1.5px solid #D4622A", color: "#D4622A", backgroundColor: "transparent" }
                  }
                  onMouseEnter={(e) => {
                    if (f.popular) e.currentTarget.style.backgroundColor = "#B84E1E";
                    else e.currentTarget.style.backgroundColor = "#E8DCC8";
                  }}
                  onMouseLeave={(e) => {
                    if (f.popular) e.currentTarget.style.backgroundColor = "#D4622A";
                    else e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  Demander un devis
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs mt-5" style={{ color: "#C4A882" }}>
          Déplacement selon zone — contactez-nous pour un devis personnalisé
        </p>
      </div>
    </section>
  );
}

// ─── How It Works Section ──────────────────────────────────────────────────────
const STEPS = [
  {
    icon: ClipboardList,
    label: "Échange & devis",
    desc: "Décrivez votre événement via le formulaire. Marc vous répond sous 24h avec un devis sur mesure.",
  },
  {
    icon: Calendar,
    label: "Préparation",
    desc: "Marc prépare la pâte maison et sélectionne les ingrédients frais du terroir alsacien.",
  },
  {
    icon: Truck,
    label: "Installation sur place",
    desc: "Arrivée 1h avant le service, montage du four à bois, mise en place complète.",
  },
  {
    icon: Utensils,
    label: "Service & départ",
    desc: "Tartes cuites à la demande pendant tout l'événement. Marc range et repart sans laisser de trace.",
  },
];

function HowItWorksSection() {
  return (
    <section id="deroulement" className="py-24 px-4" style={{ backgroundColor: "#E8DCC8" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl font-bold mb-2"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
          >
            Comment se déroule une prestation ?
          </h2>
          <Separator />
          <p className="text-base" style={{ color: "#2B1810" }}>
            Une organisation clé en main — vous n&apos;avez qu&apos;à accueillir vos invités
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline / Mobile: vertical */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                className="flex flex-col items-center text-center md:items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full mb-4 shadow-sm"
                  style={{ backgroundColor: "#FAF7F2" }}
                >
                  <Icon strokeWidth={1.5} size={22} style={{ color: "#D4622A" }} />
                </div>
                <span
                  className="text-xs font-semibold mb-1"
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontStyle: "italic",
                    color: "#D4622A",
                  }}
                >
                  Étape {i + 1}
                </span>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
                >
                  {step.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#2B1810" }}>
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ──────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    text: "Une soirée entreprise mémorable. Marc a géré 80 couverts avec une efficacité remarquable. Les tartes flambées étaient délicieuses et l'ambiance, inoubliable.",
    author: "Sophie M.",
    event: "Soirée d'entreprise à Colmar",
  },
  {
    text: "Pour notre mariage, Marc a créé une atmosphère unique et chaleureuse. Tous nos invités en parlent encore des mois après. Un vrai artisan passionné.",
    author: "Julien & Céline",
    event: "Mariage à Strasbourg",
  },
  {
    text: "Incroyable pour notre anniversaire. Chaleureux, professionnel et délicieux. Marc a su mettre tout le monde à l'aise avec sa sincérité et son savoir-faire.",
    author: "Patrick R.",
    event: "Anniversaire à Sélestat",
  },
];

function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-24 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl font-bold mb-2"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
          >
            Ils nous font confiance
          </h2>
          <Separator />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              className="rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8DCC8" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Guillemet SVG */}
              <MessageSquareQuote
                strokeWidth={1.5}
                size={32}
                className="mb-4"
                style={{ color: "#C4A882" }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    strokeWidth={0}
                    fill="#D4622A"
                    style={{ color: "#D4622A" }}
                  />
                ))}
              </div>

              <p
                className="text-sm leading-relaxed italic flex-1 mb-6"
                style={{ color: "#2B1810" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              <div>
                <p className="text-sm font-semibold" style={{ color: "#2B1810" }}>
                  {t.author}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#C4A882" }}>
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Zone Section ──────────────────────────────────────────────────────────────
const VILLES = [
  "Colmar", "Strasbourg", "Mulhouse", "Sélestat",
  "Obernai", "Ribeauvillé", "Saverne", "Guebwiller",
  "Thann", "Saint-Dié", "Épinal*", "Nancy*",
];

function ZoneSection() {
  return (
    <motion.section
      className="py-24 px-4"
      style={{ backgroundColor: "#E8DCC8" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <MapPin strokeWidth={1.5} size={28} className="mx-auto mb-4" style={{ color: "#D4622A" }} />
        <h2
          className="text-4xl font-bold mb-2"
          style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
        >
          Nous intervenons dans toute l&apos;Alsace
        </h2>
        <Separator />
        <p className="text-base mb-8" style={{ color: "#2B1810" }}>
          Au départ de <strong>Le Bonhomme (68650)</strong>, Marc se déplace dans les départements 67 et 68, ainsi que les Vosges et régions voisines.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {VILLES.map((v) => (
            <span
              key={v}
              className="rounded-full px-4 py-1.5 text-sm"
              style={{ backgroundColor: "#FAF7F2", color: "#2B1810" }}
            >
              {v}
            </span>
          ))}
        </div>

        <p className="text-xs" style={{ color: "#C4A882" }}>
          * Sur demande selon la distance — contactez-nous pour confirmation
        </p>
      </div>
    </motion.section>
  );
}

// ─── Contact Section ───────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl font-bold mb-2"
            style={{ fontFamily: "var(--font-fraunces), serif", color: "#2B1810" }}
          >
            Demander un devis
          </h2>
          <Separator />
          <p className="text-base" style={{ color: "#2B1810" }}>
            Remplissez ce formulaire — Marc vous répond sous 24h avec un devis personnalisé
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          {/* Info card */}
          <motion.div
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-2xl p-8 h-full"
              style={{ backgroundColor: "#2B1810" }}
            >
              <div className="mb-6">
                <span
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-fraunces), serif", color: "#C4A882" }}
                >
                  Maison
                </span>
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-fraunces), serif", color: "#FAF7F2" }}
                >
                  Ruggieri
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <a
                  href="tel:0785621089"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-[#D4622A]"
                  style={{ color: "rgba(250,247,242,0.75)" }}
                >
                  <Phone strokeWidth={1.5} size={16} className="flex-shrink-0" />
                  07 85 62 10 89
                </a>
                <a
                  href="mailto:contact@poivresale.fr"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-[#D4622A]"
                  style={{ color: "rgba(250,247,242,0.75)" }}
                >
                  <Mail strokeWidth={1.5} size={16} className="flex-shrink-0" />
                  contact@poivresale.fr
                </a>
                <div
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "rgba(250,247,242,0.75)" }}
                >
                  <MapPin strokeWidth={1.5} size={16} className="flex-shrink-0" />
                  Le Bonhomme, 68650 — Alsace
                </div>
              </div>

              <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(196,168,130,0.25)" }}>
                <p className="text-xs mb-2" style={{ color: "rgba(250,247,242,0.45)" }}>
                  Réponse garantie sous
                </p>
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-fraunces), serif", color: "#D4622A" }}
                >
                  24h
                </p>
                <p className="text-xs mt-1" style={{ color: "rgba(250,247,242,0.45)" }}>
                  Devis gratuit · Sans engagement
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Form ──────────────────────────────────────────────────────────────
function ContactForm() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    typeEvenement: "",
    date: "",
    couverts: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { db } = await import("./lib/firebase");
      const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
      await addDoc(collection(db, "reservations"), {
        ...formData,
        couverts: Number(formData.couverts) || 0,
        status: "pending",
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Firestore error:", err);
    }
    window.location.href = "/confirmation";
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1px solid #E8DCC8",
    backgroundColor: "#FFFFFF",
    color: "#2B1810",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "#2B1810" }}>
            Prénom *
          </label>
          <input
            type="text"
            name="prenom"
            placeholder="Marc"
            required
            value={formData.prenom}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "#2B1810" }}>
            Nom *
          </label>
          <input
            type="text"
            name="nom"
            placeholder="Dupont"
            required
            value={formData.nom}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "#2B1810" }}>
          Email *
        </label>
        <input
          type="email"
          name="email"
          placeholder="marc@exemple.fr"
          required
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "#2B1810" }}>
          Téléphone *
        </label>
        <input
          type="tel"
          name="telephone"
          placeholder="06 12 34 56 78"
          required
          value={formData.telephone}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "#2B1810" }}>
            Type d&apos;événement *
          </label>
          <select
            name="typeEvenement"
            required
            value={formData.typeEvenement}
            onChange={handleChange}
            style={{ ...inputStyle, color: formData.typeEvenement ? "#2B1810" : "#C4A882" }}
          >
            <option value="" disabled>
              Choisir...
            </option>
            <option value="entreprise">Soirée entreprise</option>
            <option value="mariage">Mariage</option>
            <option value="anniversaire">Anniversaire</option>
            <option value="fete">Fête privée</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "#2B1810" }}>
            Date souhaitée *
          </label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "#2B1810" }}>
          Nombre de convives *
        </label>
        <input
          type="number"
          name="couverts"
          placeholder="Minimum 20"
          min={20}
          required
          value={formData.couverts}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: "#2B1810" }}>
          Message (lieu, besoins spécifiques...)
        </label>
        <textarea
          name="message"
          placeholder="Lieu de la réception, accès, contraintes particulières..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full py-4 text-base font-semibold tracking-wide uppercase transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: "#D4622A", color: "#FAF7F2" }}
        onMouseEnter={(e) => !submitting && (e.currentTarget.style.backgroundColor = "#B84E1E")}
        onMouseLeave={(e) => !submitting && (e.currentTarget.style.backgroundColor = "#D4622A")}
      >
        {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>

      <p className="text-xs text-center" style={{ color: "#C4A882" }}>
        Gratuit · Sans engagement · Réponse sous 24h
      </p>
    </motion.form>
  );
}
