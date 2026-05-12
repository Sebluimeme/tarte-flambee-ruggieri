import { Flame, Wheat, Users } from 'lucide-react'

const SERVICES = [
  {
    title: "Matériel professionnel",
    description:
      "Four à bois mobile installé sur place, avec tout l'équipement nécessaire. Pas de branchement gaz, pas de four électrique — uniquement le bois et la flamme.",
    Icon: Flame,
  },
  {
    title: "Pâte fine",
    description:
      "Une pâte fine sélectionnée auprès d'un artisan spécialisé, préparée le jour même. Croustillante, légère, et cuite en 3 minutes au four à bois.",
    Icon: Wheat,
  },
  {
    title: "Animation en direct",
    description:
      "Nous préparons et cuisons les tartes devant vos invités. Le spectacle du four à bois fait partie de l'expérience — une animation culinaire unique et conviviale.",
    Icon: Users,
  },
];

export default function Services() {
  return (
    <section className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Notre service
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 max-w-xl">
            Une expérience culinaire unique pour vos invités
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-cream-100 border border-stone-200 rounded-2xl p-8 transition-all duration-200 ease-out hover:shadow-md"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-cream-50 rounded-xl border border-stone-200 mb-6">
                <s.Icon size={24} strokeWidth={1.5} className="text-copper-500" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-bark-900 mb-3">
                {s.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-bark-700">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
