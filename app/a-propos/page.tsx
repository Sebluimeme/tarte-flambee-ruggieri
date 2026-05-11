import type { Metadata } from "next";
import { Flame, Users, MapPin, Star } from "lucide-react";
import Button from "../../components/ui/Button";

export const metadata: Metadata = {
  title: "À propos — Marc Ruggieri, artisan tarte flambée",
  description:
    "Découvrez l'histoire de Marc Ruggieri, artisan tarte flambée en Alsace depuis 2011. Four à bois authentique, pâte maison, passion du terroir.",
};

const SELECTED_TESTIMONIALS = [
  {
    name: "Camille & Antoine",
    context: "Mariage Obernai, sept 2024",
    text: "On cherchait quelque chose d'original pour notre mariage. Marc nous a proposé la formule Prestige et c'était parfait. Nos invités n'arrêtaient pas de féliciter notre choix.",
  },
  {
    name: "Patrick R.",
    context: "Soirée d'entreprise Mulhouse, nov 2023",
    text: "Marc est intervenu pour notre soirée d'entreprise de 120 personnes. Professionnalisme au top, rapport qualité-prix imbattable. Tout le monde est reparti avec le sourire.",
  },
];

const VALUES = [
  {
    icon: Flame,
    title: "Authenticité",
    text: "Le four à bois, la pâte faite maison, les garnitures fraîches. Jamais de compromis sur la qualité.",
  },
  {
    icon: Users,
    title: "Convivialité",
    text: "La tarte flambée est avant tout un plat de partage. Créer ce moment de fête, c'est notre mission.",
  },
  {
    icon: MapPin,
    title: "Ancrage local",
    text: "Artisan alsacien, Marc travaille avec des producteurs locaux pour des garnitures de saison.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
                L&apos;artisan
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-medium text-bark-900 mb-6">
                Marc Ruggieri, artisan tarte flambée en Alsace
              </h1>
              <p className="text-bark-700 text-lg leading-relaxed">
                Depuis 2011, Marc sillonne l&apos;Alsace avec son four à bois mobile pour apporter
                la vraie tarte flambée artisanale à vos événements.
              </p>
            </div>
            {/* Photo placeholder */}
            <div className="bg-cream-200 rounded-2xl aspect-square flex items-center justify-center">
              <p className="text-stone-400 text-sm">Photo de Marc</p>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 px-6 bg-cream-50">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            L&apos;histoire
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-bark-900 mb-8">
            Tout a commencé en 2011...
          </h2>
          <div className="space-y-5 text-bark-700 leading-relaxed">
            <p>
              Marc Ruggieri a commencé à préparer des tartes flambées pour les fêtes de famille en
              Alsace. Ce qui n&apos;était qu&apos;une passion est devenu un métier.
            </p>
            <p>
              Depuis 2011, il sillonne l&apos;Alsace avec son four à bois mobile, de mariage en
              mariage, d&apos;anniversaire en anniversaire, apportant cette convivialité unique qui
              fait la réputation de la cuisine alsacienne.
            </p>
            <p>
              Aujourd&apos;hui, plus de 200 prestations plus tard, Marc continue avec la même
              passion et le même souci du détail artisanal.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-bark-900 mb-12 text-center">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="text-center p-8 bg-cream-50 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center mx-auto mb-4">
                    <Icon strokeWidth={1.5} size={22} className="text-copper-500" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-bark-900 mb-3">{v.title}</h3>
                  <p className="text-bark-700 text-sm leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Matériel */}
      <section className="py-20 px-6 bg-cream-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-bark-900 mb-8">
            Le matériel
          </h2>
          <div className="space-y-5 text-bark-700 leading-relaxed">
            <p>
              Le four à bois mobile de Marc est le coeur de chaque prestation. Conçu pour se
              transporter facilement, il peut être installé dans un jardin, une salle des fêtes, un
              parking ou en plein air.
            </p>
            <p>
              La chaleur du bois — uniquement du bois de qualité, sans additifs — est la clé d&apos;une
              cuisson parfaite en moins de 3 minutes. C&apos;est ce qui donne à la tarte flambée ce
              goût authentique impossible à reproduire avec un four électrique.
            </p>
            <p>
              Le four peut servir entre 100 et 150 tartes à l&apos;heure selon la garniture. Pour les
              grands événements, Marc peut mobiliser deux fours simultanément.
            </p>
          </div>
        </div>
      </section>

      {/* Témoignages sélectionnés */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-bark-900 mb-12 text-center">
            Ils parlent de Marc
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SELECTED_TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-cream-50 border border-stone-200 rounded-2xl p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="#C75A2A" className="text-copper-500" />
                  ))}
                </div>
                <p className="italic text-bark-700 mb-4 text-sm leading-relaxed">
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

      {/* CTA */}
      <section className="py-20 px-6 bg-cream-200 text-center">
        <h2 className="font-display text-3xl font-medium text-bark-900 mb-6">
          Prêt à faire appel à Marc ?
        </h2>
        <p className="text-bark-700 mb-8 max-w-lg mx-auto">
          Contactez-nous pour un devis gratuit. Réponse garantie sous 24h.
        </p>
        <Button href="/contact">Demander un devis</Button>
      </section>
    </>
  );
}
