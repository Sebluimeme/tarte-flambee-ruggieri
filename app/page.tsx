"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Cake,
  CalendarDays,
  Flame,
  HandHeart,
  Heart,
  Building2,
  Tent,
  Star,
  ChevronDown,
  ChevronUp,
  Clock,
} from "lucide-react";
import Button from "../components/ui/Button";

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-bark-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-bark-900/70 via-bark-900/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[85vh] md:min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-cream-200 mb-4">
            Alsace · Artisan tarte flambée
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] text-cream-50 mb-6 max-w-2xl">
            La tarte flambée, comme une fête.
          </h1>
          <p className="text-lg text-cream-200/90 mb-10 max-w-lg">
            Prestation à domicile pour mariages, anniversaires et événements d&apos;entreprise. En Alsace, depuis 2011.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact">Demander un devis</Button>
            <Button
              href="/formules"
              variant="secondary"
              className="text-cream-50 border-cream-50/30 hover:bg-cream-50/10 hover:border-cream-50/50"
            >
              Voir les formules
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10 bg-cream-100 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-2 text-bark-700">
              <MapPin strokeWidth={1.5} size={18} className="text-copper-500" />
              <span className="text-sm font-medium">Alsace & Grand Est</span>
            </div>
            <div className="flex items-center gap-2 text-bark-700">
              <Cake strokeWidth={1.5} size={18} className="text-copper-500" />
              <span className="text-sm font-medium">Four à bois authentique</span>
            </div>
            <div className="flex items-center gap-2 text-bark-700">
              <CalendarDays strokeWidth={1.5} size={18} className="text-copper-500" />
              <span className="text-sm font-medium">Devis gratuit sous 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pourquoi Marc ─────────────────────────────────────────────────────────────
function WhyMarc() {
  const values = [
    {
      icon: Flame,
      title: "Four à bois authentique",
      text: "Pas de four électrique. Le bois, la chaleur, la fumée — c'est ça le secret.",
    },
    {
      icon: HandHeart,
      title: "Fait maison",
      text: "Pâte, garnitures, tout est préparé artisanalement le jour J.",
    },
    {
      icon: MapPin,
      title: "On se déplace chez vous",
      text: "Marc vient installer son four où vous voulez : jardin, salle des fêtes, entreprise.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              L&apos;artisan
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-bark-900 mb-6 leading-tight">
              Plus de 15 ans de passion pour la vraie tarte flambée alsacienne
            </h2>
            <p className="text-bark-700 mb-10 leading-relaxed">
              Ce n&apos;est pas un traiteur qui ajoute la tarte flambée à son menu. C&apos;est un
              artisan qui n&apos;a jamais fait que ça. Depuis 2011, Marc sillonne l&apos;Alsace avec
              son four à bois mobile pour apporter cette convivialité unique à vos fêtes.
            </p>
            <div className="space-y-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center">
                      <Icon strokeWidth={1.5} size={18} className="text-copper-500" />
                    </div>
                    <div>
                      <p className="font-medium text-bark-900 mb-1">{v.title}</p>
                      <p className="text-sm text-bark-700">{v.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-cream-200 rounded-2xl aspect-square flex items-center justify-center">
            <p className="text-stone-400 text-sm">Photo de Marc</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Formules preview ──────────────────────────────────────────────────────────
const CARDS = [
  {
    name: "Découverte",
    guests: "20-80 pers.",
    price: "à partir de 8€/pers.",
    features: ["Four à bois", "Pâte artisanale", "1 garniture", "Service en autonomie"],
    cta: "Voir le détail",
    ctaHref: "/formules",
    highlight: false,
  },
  {
    name: "Événement",
    guests: "80-200 pers.",
    price: "Sur devis",
    features: ["Four à bois", "2 garnitures", "Service complet", "Présentation sur chevalet"],
    cta: "Demander un devis",
    ctaHref: "/contact",
    highlight: true,
  },
  {
    name: "Prestige",
    guests: "200-500 pers.",
    price: "Sur devis",
    features: [
      "2 fours",
      "Garnitures illimitées",
      "Équipe de service",
      "Décoration alsacienne",
      "Coordination J",
    ],
    cta: "Nous contacter",
    ctaHref: "/contact",
    highlight: false,
  },
];

function FormulasPreview() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Nos formules
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-bark-900 mb-4">
            Choisissez la formule qui vous ressemble
          </h2>
          <p className="text-bark-700 max-w-xl mx-auto">
            De la petite soirée intime au grand événement, une formule adaptée à chaque occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {CARDS.map((c) => (
            <div
              key={c.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                c.highlight
                  ? "border-2 border-copper-500 bg-cream-50"
                  : "border border-stone-200 bg-cream-50"
              }`}
            >
              {c.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-copper-500 text-cream-50 text-xs font-medium">
                  Populaire
                </span>
              )}
              <h3 className="font-display text-2xl font-medium text-bark-900 mb-1">{c.name}</h3>
              <p className="text-sm text-stone-400 mb-2">{c.guests}</p>
              <p className="text-xl font-medium text-copper-500 mb-6">{c.price}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-bark-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href={c.ctaHref} variant={c.highlight ? "primary" : "secondary"} className="justify-center">
                {c.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/formules" className="text-copper-500 font-medium hover:text-copper-400 transition-colors">
            Toutes nos formules en détail →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Événements ────────────────────────────────────────────────────────────────
function EventsSection() {
  const events = [
    {
      icon: Heart,
      title: "Mariage",
      text: "Le plat que vos invités vont adorer et dont ils vont parler encore des années après.",
    },
    {
      icon: Cake,
      title: "Anniversaire",
      text: "Un moment festif et convivial, de 20 à 200 personnes, autour du four à bois.",
    },
    {
      icon: Building2,
      title: "Événement d'entreprise",
      text: "Team buildings, séminaires, inaugurations : créez du lien autour de la tarte flambée.",
    },
    {
      icon: Tent,
      title: "Fêtes & festivals",
      text: "Associations, marchés de Noël, fêtes de village : disponible pour les événements publics.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Pour qui ?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-bark-900">
            Pour tous vos événements
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {events.map((e) => {
            const Icon = e.icon;
            return (
              <div key={e.title} className="flex gap-5 p-6 rounded-2xl bg-cream-100">
                <div className="flex-shrink-0">
                  <Icon strokeWidth={1.5} size={32} className="text-copper-500" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-bark-900 mb-2">{e.title}</h3>
                  <p className="text-bark-700 text-sm leading-relaxed">{e.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Zone géographique ─────────────────────────────────────────────────────────
function ZoneSection() {
  const zones = [
    "Strasbourg",
    "Colmar",
    "Mulhouse",
    "Sélestat",
    "Obernai",
    "Saverne",
    "Sur demande : Lorraine, Franche-Comté, Allemagne",
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
              Zone d&apos;intervention
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-bark-900 mb-6">
              On vient chez vous en Alsace
            </h2>
            <p className="text-bark-700 mb-8 leading-relaxed">
              Marc intervient principalement dans le Bas-Rhin (67) et le Haut-Rhin (68), ainsi que
              dans les départements limitrophes. Déplacement compris dans le devis.
            </p>
            <ul className="space-y-2">
              {zones.map((z) => (
                <li key={z} className="flex items-center gap-2 text-bark-700">
                  <MapPin strokeWidth={1.5} size={16} className="text-copper-500 flex-shrink-0" />
                  {z}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual block */}
          <div className="bg-cream-200 rounded-2xl flex flex-col items-center justify-center py-16 px-8">
            <p className="font-display text-3xl font-medium text-bark-900 mb-2">Alsace & Grand Est</p>
            <p className="text-stone-400 text-sm">Rayon ~100 km</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Témoignages ───────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Sophie M.",
    context: "Mariage Strasbourg, juin 2024",
    text: "Nous avons eu Marc pour notre mariage en juin. Nos 180 invités ont adoré. Le four à bois crée une ambiance incroyable et les tartes étaient délicieuses. Un vrai professionnel, ponctuel, sympa, et les tartes... miam !",
  },
  {
    name: "Thomas & Léa",
    context: "EVJF Colmar, mars 2024",
    text: "On a organisé un EVJF et Marc a été parfait. Il est arrivé à l'heure, tout était impeccable. Les tartes flambées faites devant nous, c'était le top. On recommande à 1000% !",
  },
  {
    name: "Patrick R.",
    context: "Soirée d'entreprise Mulhouse, nov 2023",
    text: "Marc est intervenu pour notre soirée d'entreprise de 120 personnes. Professionnalisme au top, rapport qualité-prix imbattable. Tout le monde est reparti avec le sourire.",
  },
  {
    name: "Julie D.",
    context: "Anniversaire 50 ans Sélestat, août 2024",
    text: "Une soirée inoubliable pour les 50 ans de mon mari. Marc a su mettre une ambiance de dingue avec son four à bois. La qualité était au rendez-vous.",
  },
  {
    name: "Camille & Antoine",
    context: "Mariage Obernai, sept 2024",
    text: "On cherchait quelque chose d'original pour notre mariage. Marc nous a proposé la formule Prestige et c'était parfait. Nos invités n'arrêtaient pas de féliciter notre choix.",
  },
  {
    name: "Bertrand K.",
    context: "Fête de village Wissembourg, juil 2023",
    text: "Marc est intervenu pour notre fête communale. Efficace, rapide, très bon contact. Les villageois ont adoré. On le recontactera l'année prochaine.",
  },
];

function TestimonialsSection() {
  return (
    <section id="avis" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Avis clients
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-bark-900">
            Ce qu&apos;ils disent de nous
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-cream-50 border border-stone-200 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="#C75A2A" className="text-copper-500" />
                ))}
              </div>
              <p className="italic text-bark-700 flex-1 mb-4 text-sm leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-medium text-bark-900">{t.name}</p>
                <p className="text-sm text-stone-400">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Réassurance ───────────────────────────────────────────────────────────────
function ReassuranceSection() {
  const stats = [
    { figure: "+200", label: "prestations réalisées" },
    { figure: "5★", label: "de moyenne sur les avis" },
    { figure: "2011", label: "15 ans d'expérience" },
    { figure: "24h", label: "délai de réponse au devis" },
  ];

  return (
    <section className="py-16 bg-cream-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-5xl md:text-6xl font-medium text-copper-500">
                {s.figure}
              </p>
              <p className="font-sans text-sm text-stone-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Galerie ───────────────────────────────────────────────────────────────────
const GALLERY_LABELS = [
  "Four à bois · Mariage",
  "Garnitures · Service",
  "Soirée d'entreprise",
  "Tarte flambée nature",
  "Ambiance festive",
  "Installation extérieure",
];

function GallerySection() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            En images
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-bark-900">
            Chaque prestation est unique
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_LABELS.map((label) => (
            <div
              key={label}
              className="bg-cream-200 rounded-2xl aspect-video flex items-center justify-center"
            >
              <p className="text-stone-400 text-sm text-center px-4">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "Quelle est la zone de déplacement ?",
    a: "Marc intervient dans tout le Bas-Rhin (67) et le Haut-Rhin (68), ainsi que dans les départements limitrophes. Le déplacement est inclus dans le devis pour une zone raisonnable (moins de 50 km du Bonhomme). Au-delà, des frais kilométriques peuvent s'appliquer.",
  },
  {
    q: "Quel est le délai de réservation conseillé ?",
    a: "Pour les mariages, nous recommandons de réserver 6 à 12 mois à l'avance. Pour les autres événements, 4 à 8 semaines suffisent généralement.",
  },
  {
    q: "Combien de personnes pouvez-vous accueillir ?",
    a: "De 20 à 500 personnes selon la formule. Pour les grands événements, nous pouvons mobiliser plusieurs fours à bois.",
  },
  {
    q: "Est-ce que vous proposez des options sans gluten ?",
    a: "Oui, nous proposons une pâte sans gluten sur demande. Précisez-le lors de votre demande de devis.",
  },
  {
    q: "Que comprend le service ?",
    a: "Selon la formule : installation du four, préparation des garnitures, cuisson devant vos invités, service à table ou en buffet, nettoyage et départ.",
  },
  {
    q: "Comment se déroule le paiement ?",
    a: "Un acompte de 30% est demandé à la réservation, le solde est réglé le jour de la prestation ou dans les 7 jours suivants. Nous acceptons virement, chèque et espèces.",
  },
  {
    q: "Que se passe-t-il en cas de mauvais temps ?",
    a: "Le four à bois fonctionne par tous les temps. Pour les installations en extérieur, nous recommandons une tente ou un auvent.",
  },
  {
    q: "Puis-je personnaliser les garnitures ?",
    a: "Oui, nous avons une gamme de garnitures classiques (lard, oignons, crème) mais aussi des options végétariennes et des créations maison.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Questions fréquentes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-bark-900">
            Tout ce que vous voulez savoir
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border-b border-stone-200">
              <button
                type="button"
                className="flex justify-between items-center py-5 w-full text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-bark-900 pr-4">{item.q}</span>
                {openIndex === i ? (
                  <ChevronUp strokeWidth={1.5} size={20} className="text-stone-400 flex-shrink-0" />
                ) : (
                  <ChevronDown strokeWidth={1.5} size={20} className="text-stone-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <p className="text-bark-700 pb-5 text-sm leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Final ─────────────────────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section className="py-20 md:py-28 bg-cream-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
          Prêt à réserver ?
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-bark-900 mb-6 max-w-2xl mx-auto">
          Votre événement mérite la vraie tarte flambée alsacienne.
        </h2>
        <p className="text-bark-700 mb-10 max-w-lg mx-auto">
          Dites-nous la date, le lieu et le nombre de convives. On vous répond sous 24h avec un
          devis personnalisé.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact">Demander un devis gratuit</Button>
          <Button href="tel:+336XXXXXXXX" variant="secondary">
            Appeler Marc directement
          </Button>
        </div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyMarc />
      <FormulasPreview />
      <EventsSection />
      <ZoneSection />
      <TestimonialsSection />
      <ReassuranceSection />
      <GallerySection />
      <FAQSection />
      <CTAFinal />
    </>
  );
}
