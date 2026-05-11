"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BOISSONS_OPTIONS = [
  {
    id: "sans",
    label: "Sans boissons",
    desc: "Tartes flambées uniquement",
    icon: "🍽️",
  },
  {
    id: "avec",
    label: "Avec boissons",
    desc: "Soft, bière, vin inclus",
    icon: "🥂",
  },
  {
    id: "illimite",
    label: "Formule illimitée",
    desc: "Boissons & tartes à volonté",
    icon: "✨",
  },
];

export default function HomePage() {
  const [covers, setCovers] = useState(40);
  const [boissons, setBoissons] = useState("sans");

  return (
    <main className="flex-1">
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-4"
      >
        {/* Photo de fond */}
        <Image
          src="https://images.unsplash.com/photo-1571501210331-41105cb1b3e7?w=1920&q=80"
          alt="Tartes flambées alsaciennes"
          fill
          priority
          unoptimized
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(61,32,16,0.62) 0%, rgba(139,37,0,0.52) 50%, rgba(212,98,26,0.40) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-8">
            <span>✓ Devis gratuit sous 24h</span>
            <span className="text-white/40">•</span>
            <span>✓ Alsace authentique</span>
            <span className="text-white/40">•</span>
            <span>✓ Four à bois traditionnel</span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            La tarte flambée,<br />
            <span className="text-[#FBF5E6]">l&apos;art de partager</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Prestation à domicile en Alsace • Soirées d&apos;exception depuis Le Bonhomme
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center gap-2 bg-[#D4621A] hover:bg-[#8B2500] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              🔥 Réserver ma soirée
            </Link>
            <a
              href="tel:0785621089"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:bg-white/10"
            >
              📞 07 85 62 10 89
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <p className="text-white/60">
              À partir de <strong className="text-[#FBF5E6]">12€/personne</strong> • Minimum 20 couverts
            </p>
            <span className="hidden sm:block text-white/30">•</span>
            <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-4 py-1.5 border border-white/20">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#D4621A] text-xs">★</span>
              ))}
              <span className="text-white/80 text-xs ml-1">4,9/5 · 87 avis</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ===== CHIFFRES CLÉS ===== */}
      <section className="py-12 px-4" style={{ backgroundColor: "#3D2010" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "200+", label: "Événements réalisés" },
              { value: "87", label: "Avis 5 étoiles" },
              { value: "4,9/5", label: "Note moyenne" },
              { value: "100%", label: "Ingrédients frais" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-4xl font-bold text-[#D4621A] mb-1"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm" style={{ color: "#FBF5E6B0" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ÉVÉNEMENTS ===== */}
      <section id="evenements" className="py-20 px-4" style={{ backgroundColor: "#FFFDF7" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
            >
              Pour chaque occasion
            </h2>
            <p className="text-lg" style={{ color: "#8B2500" }}>
              Marc Ruggieri s&apos;adapte à vos événements avec passion et authenticité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Soirée entreprise",
                subtitle: "Team building & incentive",
                desc: "Fédérez vos équipes autour d'une flamme conviviale. Un moment de partage authentique qui renforce les liens et crée des souvenirs mémorables entre collègues.",
                tags: ["20 à 200 personnes", "Clé en main"],
              },
              {
                icon: "💍",
                title: "Mariage",
                subtitle: "Le jour le plus beau",
                desc: "Un moment chaleureux et authentique pour vos invités. La tarte flambée au four à bois crée une atmosphère unique et conviviale qui enchante petits et grands.",
                tags: ["Ambiance unique", "Tradition alsacienne"],
              },
              {
                icon: "🎉",
                title: "Anniversaire & Fête",
                subtitle: "Célébrations de tous types",
                desc: "Surprenez vos proches avec l'authenticité alsacienne. Marc transforme chaque fête en soirée inoubliable avec son four à bois et ses recettes traditionnelles.",
                tags: ["Dès 20 couverts", "Ambiance festive"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl overflow-hidden shadow-lg border hover:shadow-xl transition-shadow"
                style={{ borderColor: "#FBF5E6", backgroundColor: "#FBF5E6" }}
              >
                <div
                  className="h-3"
                  style={{ background: "linear-gradient(90deg, #D4621A, #8B2500)" }}
                />
                <div className="p-8">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium mb-4" style={{ color: "#D4621A" }}>
                    {item.subtitle}
                  </p>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#3D2010" }}>
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ backgroundColor: "#D4621A20", color: "#8B2500" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TARIFS ===== */}
      <section className="py-20 px-4" style={{ backgroundColor: "#3D2010" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Formules & Tarifs
            </h2>
            <p style={{ color: "#FBF5E6CC" }} className="text-lg">
              Tarification transparente — devis personnalisé sous 24h
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Classique",
                price: "12€",
                unit: "/ pers.",
                desc: "Tartes flambées à volonté cuites au four à bois traditionnel. Recettes alsaciennes authentiques.",
                features: ["Minimum 20 couverts", "Four à bois inclus", "Ingrédients frais", "Déplacement inclus*"],
                highlight: false,
              },
              {
                name: "Prestige",
                price: "16€",
                unit: "/ pers.",
                desc: "Formule classique + boissons soft et bière. Idéale pour les soirées entreprise et mariages.",
                features: ["Minimum 30 couverts", "Boissons soft & bière", "Installation complète", "Service à table"],
                highlight: true,
              },
              {
                name: "Illimitée",
                price: "20€",
                unit: "/ pers.",
                desc: "Tout illimité — tartes, boissons, service. La formule clé en main pour les grandes occasions.",
                features: ["Minimum 40 couverts", "Boissons à volonté", "Service haut de gamme", "Animation four à bois"],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{
                  backgroundColor: plan.highlight ? "#D4621A" : "#FFFDF720",
                  border: plan.highlight ? "none" : "1px solid #D4621A40",
                }}
              >
                {plan.highlight && (
                  <div className="text-center py-2 text-xs font-bold text-white/80 tracking-widest uppercase"
                    style={{ backgroundColor: "#8B2500" }}>
                    Plus populaire
                  </div>
                )}
                <div className="p-8">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      color: plan.highlight ? "white" : "#FBF5E6",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span
                      className="text-4xl font-bold"
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                        color: plan.highlight ? "white" : "#D4621A",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#FBF5E6B0" }} className="text-sm">
                      {plan.unit}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: plan.highlight ? "rgba(255,255,255,0.85)" : "#FBF5E6B0" }}>
                    {plan.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: plan.highlight ? "white" : "#FBF5E6" }}>
                        <span className="text-xs">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/reservation"
                    className="block text-center font-semibold py-3 rounded-xl transition-all text-sm"
                    style={{
                      backgroundColor: plan.highlight ? "white" : "#D4621A",
                      color: plan.highlight ? "#8B2500" : "white",
                    }}
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-4" style={{ color: "#FBF5E6B0" }}>
            * Déplacement inclus selon zone. Contactez-nous pour un devis personnalisé.
          </p>
        </div>
      </section>

      {/* ===== COMMENT ÇA MARCHE ===== */}
      <section className="py-20 px-4" style={{ backgroundColor: "#3D2010" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Comment ça marche ?
            </h2>
            <p className="text-lg" style={{ color: "#FBF5E6CC" }}>
              Une prestation clé en main — Marc gère l&apos;intégralité de l&apos;organisation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                icon: "📋",
                title: "Faites votre demande",
                desc: "Remplissez le formulaire en ligne ou appelez directement Marc. Précisez la date, le nombre de convives et le type d'événement.",
              },
              {
                num: "02",
                icon: "✅",
                title: "Marc confirme",
                desc: "Validation sous 24h. Marc vous envoie un devis personnalisé adapté à votre événement et vos besoins spécifiques.",
              },
              {
                num: "03",
                icon: "🔥",
                title: "Intervention sur votre site",
                desc: "Marc prend en charge l'installation complète : four à bois, ingrédients frais, mise en place. Il ne vous reste qu'à accueillir vos convives.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl mb-6 font-bold border-2"
                  style={{
                    backgroundColor: "#D4621A20",
                    borderColor: "#D4621A",
                    color: "#D4621A",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  {step.num}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "#FBF5E6B0" }} className="leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 bg-[#D4621A] hover:bg-[#8B2500] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Demander un devis →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DEMANDE DE DEVIS ===== */}
      <section className="py-20 px-4" style={{ backgroundColor: "#FBF5E6" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
            >
              Quelle soirée imaginez-vous ?
            </h2>
            <p className="text-lg" style={{ color: "#8B2500" }}>
              Dites-nous en plus — Marc vous prépare un devis sur mesure sous 24h
            </p>
          </div>

          <div
            className="rounded-2xl shadow-xl p-8 md:p-10"
            style={{ backgroundColor: "#FFFDF7", border: "1px solid #D4621A20" }}
          >
            {/* Choix boissons */}
            <p className="text-base font-semibold mb-4" style={{ color: "#3D2010" }}>
              Formule boissons
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {BOISSONS_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setBoissons(opt.id)}
                  className="flex flex-col items-center gap-2 rounded-xl p-4 border-2 transition-all text-center"
                  style={{
                    borderColor: boissons === opt.id ? "#D4621A" : "#D4621A30",
                    backgroundColor: boissons === opt.id ? "#D4621A10" : "transparent",
                  }}
                >
                  <span className="text-3xl">{opt.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: "#3D2010" }}>
                    {opt.label}
                  </span>
                  <span className="text-xs" style={{ color: "#8B2500" }}>
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>

            {/* Nombre de convives */}
            <div className="flex items-center justify-between mb-4">
              <label className="text-base font-semibold" style={{ color: "#3D2010" }}>
                Nombre de convives
              </label>
              <span
                className="text-2xl font-bold"
                style={{ color: "#D4621A", fontFamily: "var(--font-playfair), serif" }}
              >
                {covers} personnes
              </span>
            </div>

            <input
              type="range"
              min={20}
              max={200}
              step={5}
              value={covers}
              onChange={(e) => setCovers(Number(e.target.value))}
              className="w-full h-2 rounded-full outline-none cursor-pointer mb-2"
              style={{
                accentColor: "#D4621A",
                background: `linear-gradient(to right, #D4621A 0%, #D4621A ${((covers - 20) / 180) * 100}%, #FBF5E6 ${((covers - 20) / 180) * 100}%, #FBF5E6 100%)`,
              }}
            />
            <div className="flex justify-between text-xs mb-8" style={{ color: "#8B2500" }}>
              <span>20 pers.</span>
              <span>200 pers.</span>
            </div>

            <div className="text-center">
              <Link
                href={`/reservation?couverts=${covers}&boissons=${boissons}`}
                className="inline-flex items-center gap-2 bg-[#D4621A] hover:bg-[#8B2500] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
              >
                Obtenir un devis gratuit →
              </Link>
              <p className="text-xs mt-3" style={{ color: "#8B2500" }}>
                Gratuit · Sans engagement · Réponse sous 24h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ZONE DE SERVICE ===== */}
      <section className="py-20 px-4" style={{ backgroundColor: "#FFFDF7" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
              >
                Déplacement sur votre lieu d&apos;événement
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#3D2010" }}>
                Marc Ruggieri se déplace en{" "}
                <strong className="text-[#D4621A]">Alsace et régions voisines</strong>{" "}
                au départ de Le Bonhomme (68650) — Haut-Rhin, Bas-Rhin, Vosges. Contactez-nous pour votre zone.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { city: "Colmar", ok: true },
                  { city: "Strasbourg", ok: true },
                  { city: "Mulhouse", ok: true },
                  { city: "Sélestat", ok: true },
                  { city: "Saint-Dié", ok: true },
                  { city: "Obernai", ok: true },
                  { city: "Saverne", ok: true },
                  { city: "Ribeauvillé", ok: true },
                  { city: "Guebwiller", ok: true },
                  { city: "Thann", ok: true },
                  { city: "Épinal", ok: false, note: "sur demande" },
                  { city: "Nancy", ok: false, note: "sur demande" },
                ].map((loc) => (
                  <div
                    key={loc.city}
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{ backgroundColor: "#FBF5E6" }}
                  >
                    <span className="text-lg" style={{ color: loc.ok ? "#16a34a" : "#D4621A" }}>
                      {loc.ok ? "✓" : "~"}
                    </span>
                    <span className="font-medium" style={{ color: "#3D2010" }}>
                      {loc.city}
                    </span>
                    {loc.note && (
                      <span className="text-xs" style={{ color: "#8B2500" }}>
                        ({loc.note})
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm" style={{ color: "#8B2500" }}>
                Votre ville n&apos;est pas dans la liste ? Contactez-nous — nous étudierons votre demande avec attention.
              </p>
            </div>

            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "linear-gradient(135deg, #3D2010, #8B2500)" }}
            >
              <div className="text-8xl mb-4">📍</div>
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Le Bonhomme
              </h3>
              <p className="text-white/70 mb-4">68650 Haut-Rhin, Alsace</p>
              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "#FFFDF720" }}>
                <p className="text-white font-semibold text-xl">📍 Alsace & alentours</p>
                <p className="text-white/70 text-sm">Zone d&apos;intervention</p>
              </div>
              <a
                href="tel:0785621089"
                className="inline-flex items-center gap-2 bg-[#D4621A] hover:bg-[#c4571a] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                📞 Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALERIE ===== */}
      <section className="py-20 px-4" style={{ backgroundColor: "#FBF5E6" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
            >
              Nos soirées en images
            </h2>
            <p style={{ color: "#8B2500" }}>
              Quelques moments mémorables partagés avec nos clients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                label: "Four à tarte flambée",
                src: "https://images.pexels.com/photos/37290115/pexels-photo-37290115.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Tartes flambées cuisant dans un four à bois traditionnel",
              },
              {
                label: "Soirée entreprise",
                src: "https://images.unsplash.com/photo-1576842546422-60562b9242ae?w=800&q=80",
                alt: "Buffet soirée entreprise avec tartes flambées",
              },
              {
                label: "Mariage Colmar 2024",
                src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
                alt: "Prestation mariage tarte flambée Alsace",
              },
              {
                label: "Tarte flambée traditionnelle",
                src: "https://images.pexels.com/photos/35583069/pexels-photo-35583069.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Tarte flambée alsacienne maison vue de dessus",
              },
              {
                label: "Sortie du four",
                src: "https://images.pexels.com/photos/37290111/pexels-photo-37290111.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Tartes flambées cuisant avec les flammes du four à bois",
              },
              {
                label: "Tarte flambée dorée",
                src: "https://images.pexels.com/photos/35583100/pexels-photo-35583100.jpeg?auto=compress&cs=tinysrgb&w=800",
                alt: "Tarte flambée garnie sortant du four sur plaque",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold drop-shadow-md">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TÉMOIGNAGES ===== */}
      <section className="py-20 px-4" style={{ backgroundColor: "#FFFDF7" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
            >
              Ils en parlent mieux que nous
            </h2>
            <p style={{ color: "#8B2500" }}>
              La satisfaction de nos clients, notre plus belle récompense
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Une soirée entreprise mémorable ! Marc a géré 80 couverts avec une efficacité remarquable. Les tartes flambées étaient délicieuses et l'ambiance, inoubliable.",
                author: "Sophie M.",
                role: "DRH à Colmar",
                stars: 5,
              },
              {
                text: "Pour notre mariage, Marc a créé une atmosphère unique et chaleureuse. Tous nos invités en parlent encore des mois après. Un vrai artisan passionné.",
                author: "Julien & Céline",
                role: "Mariage à Strasbourg",
                stars: 5,
              },
              {
                text: "Incroyable pour notre anniversaire de 40 ans. Chaleureux, professionnel et délicieux. Marc a su mettre tout le monde à l'aise avec sa gentillesse.",
                author: "Patrick R.",
                role: "Anniversaire à Sélestat",
                stars: 5,
              },
            ].map((testi, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-8 shadow-lg"
                style={{ backgroundColor: "#FBF5E6" }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testi.stars }).map((_, i) => (
                    <span key={i} className="text-[#D4621A] text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p
                  className="text-base leading-relaxed mb-6 italic"
                  style={{ color: "#3D2010" }}
                >
                  &ldquo;{testi.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: "#D4621A" }}
                  >
                    {testi.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#3D2010" }}>
                      {testi.author}
                    </p>
                    <p className="text-xs" style={{ color: "#8B2500" }}>
                      {testi.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FaqSection />

      {/* ===== CTA FINAL + FORMULAIRE ===== */}
      <section
        id="contact"
        className="py-20 px-4"
        style={{ background: "linear-gradient(135deg, #D4621A, #8B2500)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Faites de votre événement<br />
              un moment inoubliable
            </h2>
            <p className="text-white/80 text-lg">
              Remplissez ce formulaire et Marc vous recontacte sous 24h avec un devis personnalisé
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ backgroundColor: "#3D2010" }} className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🔥</span>
                <span
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Tarte Flambée
                </span>
              </div>
              <p className="text-sm" style={{ color: "#FBF5E6B0" }}>
                Marc Ruggieri — Artisan passionné de la tradition alsacienne. Prestation événementielle à domicile depuis Le Bonhomme.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2">
                <a
                  href="mailto:contact@poivresale.fr"
                  className="flex items-center gap-2 text-sm hover:text-[#D4621A] transition-colors"
                  style={{ color: "#FBF5E6B0" }}
                >
                  ✉️ contact@poivresale.fr
                </a>
                <a
                  href="tel:0785621089"
                  className="flex items-center gap-2 text-sm hover:text-[#D4621A] transition-colors"
                  style={{ color: "#FBF5E6B0" }}
                >
                  📞 07 85 62 10 89
                </a>
                <a
                  href="https://wa.me/33785621089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-[#D4621A] transition-colors"
                  style={{ color: "#FBF5E6B0" }}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Zone d&apos;intervention</h4>
              <div className="flex flex-wrap gap-2">
                {["Alsace", "Haut-Rhin", "Bas-Rhin", "Vosges"].map((zone) => (
                  <span
                    key={zone}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#D4621A20", color: "#FBF5E6" }}
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderColor: "#FFFDF720" }}
          >
            <p className="text-sm" style={{ color: "#FBF5E6B0" }}>
              © 2026 Marc Ruggieri — Tarte Flambée
            </p>
            <div className="flex gap-4">
              <Link
                href="/mentions-legales"
                className="text-sm hover:text-[#D4621A] transition-colors"
                style={{ color: "#FBF5E6B0" }}
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="text-sm hover:text-[#D4621A] transition-colors"
                style={{ color: "#FBF5E6B0" }}
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ===== FAQ =====
const FAQ_ITEMS = [
  {
    q: "Quelle est la zone d'intervention de Marc Ruggieri ?",
    a: "Marc intervient en Alsace et régions voisines au départ de Le Bonhomme (68650). Cela couvre le Haut-Rhin, le Bas-Rhin, les Vosges, et des villes comme Colmar, Strasbourg, Mulhouse, Sélestat, Obernai, Ribeauvillé, Saverne ou Guebwiller. Contactez-nous pour confirmer votre localisation.",
  },
  {
    q: "Quel est le nombre minimum de convives requis ?",
    a: "La prestation est possible dès 20 couverts. Il n'y a pas de maximum — Marc a réalisé des événements pour plus de 200 personnes avec plusieurs rotations au four.",
  },
  {
    q: "Combien de temps dure une prestation tarte flambée ?",
    a: "En général, le service tarte flambée dure entre 1h30 et 3h selon le nombre de convives et la formule choisie. Marc prévoit le montage du four à bois environ 1h avant le début du service.",
  },
  {
    q: "Que comprend la prestation ?",
    a: "Marc arrive avec son four à bois traditionnel, tous les ingrédients frais (pâte, crème, lardons, oignons, fromage blanc...) et le matériel complet. Vous n'avez rien à prévoir. En formule Prestige ou Illimitée, boissons et service à table sont inclus.",
  },
  {
    q: "Proposez-vous des formules avec boissons ?",
    a: "Oui — trois formules : Classique (tartes uniquement, dès 12€/pers.), Prestige (avec soft & bière, dès 16€/pers.), et Illimitée (boissons à volonté + service haut de gamme, dès 20€/pers.).",
  },
  {
    q: "Quel est le délai pour réserver ?",
    a: "Marc vous répond sous 24h après votre demande de devis. Pour les grandes occasions (mariage, soirée d'entreprise), nous recommandons de réserver 2 à 3 mois à l'avance pour garantir la disponibilité.",
  },
  {
    q: "Intervenez-vous pour les mariages en Alsace ?",
    a: "Oui, le mariage est l'une des prestations phares de Marc. La tarte flambée au four à bois crée une ambiance unique et conviviale très appréciée des invités. Marc s'adapte à votre lieu de réception partout en Alsace.",
  },
  {
    q: "Est-il possible de personnaliser les recettes ?",
    a: "Absolument. Marc propose les recettes traditionnelles alsaciennes, mais peut adapter les garnitures selon vos préférences (versions végétariennes, sans lactose...). Mentionnez vos souhaits dans le formulaire de demande.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FBF5E6" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
          >
            Questions fréquentes
          </h2>
          <p style={{ color: "#8B2500" }}>
            Tout ce que vous devez savoir avant de réserver
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border"
              style={{ borderColor: "#D4621A20", backgroundColor: "#FFFDF7" }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold hover:bg-[#D4621A08] transition-colors"
                style={{ color: "#3D2010" }}
              >
                <span>{item.q}</span>
                <span
                  className="flex-shrink-0 text-xl transition-transform duration-200"
                  style={{
                    color: "#D4621A",
                    transform: open === idx ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              {open === idx && (
                <div className="px-6 pb-5 text-base leading-relaxed" style={{ color: "#3D2010" }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm mb-4" style={{ color: "#8B2500" }}>
            Une question non listée ?
          </p>
          <a
            href="tel:0785621089"
            className="inline-flex items-center gap-2 bg-[#D4621A] hover:bg-[#8B2500] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            📞 Appeler maintenant
          </a>
        </div>
      </div>
    </section>
  );
}

// ===== CONTACT FORM =====
function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeEvenement: "",
    date: "",
    couverts: "",
    boissons: "sans",
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

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="nom"
          placeholder="Votre nom *"
          required
          value={formData.nom}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email *"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="tel"
          name="telephone"
          placeholder="Votre téléphone *"
          required
          value={formData.telephone}
          onChange={handleChange}
          className={inputClass}
        />
        <select
          name="typeEvenement"
          required
          value={formData.typeEvenement}
          onChange={handleChange}
          className={`${inputClass} ${!formData.typeEvenement ? "text-white/50" : "text-white"}`}
        >
          <option value="" disabled className="text-gray-800">
            Type d&apos;événement *
          </option>
          <option value="entreprise" className="text-gray-800">
            Soirée entreprise
          </option>
          <option value="mariage" className="text-gray-800">
            Mariage
          </option>
          <option value="anniversaire" className="text-gray-800">
            Anniversaire
          </option>
          <option value="fete" className="text-gray-800">
            Fête privée
          </option>
          <option value="autre" className="text-gray-800">
            Autre
          </option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="number"
          name="couverts"
          placeholder="Nombre de couverts *"
          min={20}
          required
          value={formData.couverts}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      {/* Boissons */}
      <div className="grid grid-cols-3 gap-2">
        {BOISSONS_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setFormData({ ...formData, boissons: opt.id })}
            className="flex flex-col items-center gap-1 rounded-xl p-3 border-2 transition-all text-center"
            style={{
              borderColor: formData.boissons === opt.id ? "white" : "rgba(255,255,255,0.2)",
              backgroundColor: formData.boissons === opt.id ? "rgba(255,255,255,0.15)" : "transparent",
            }}
          >
            <span className="text-2xl">{opt.icon}</span>
            <span className="text-xs text-white font-medium">{opt.label}</span>
          </button>
        ))}
      </div>
      <textarea
        name="message"
        placeholder="Informations complémentaires (lieu, besoins spécifiques...)"
        rows={3}
        value={formData.message}
        onChange={handleChange}
        className={inputClass}
      />
      <div className="text-center pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 bg-white text-[#8B2500] hover:bg-[#FBF5E6] font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Envoi en cours…" : "🔥 Envoyer ma demande"}
        </button>
        <p className="text-white/60 text-sm mt-3">
          Marc vous recontacte sous 24h — Devis gratuit et sans engagement
        </p>
      </div>
    </form>
  );
}
