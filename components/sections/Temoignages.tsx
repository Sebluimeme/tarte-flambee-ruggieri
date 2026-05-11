const TEMOIGNAGES = [
  {
    name: "Sophie & Matthieu Kieffer",
    context: "Mariage · Obernai, juin 2024",
    text: "Marc a transformé notre réception de mariage en quelque chose d'inoubliable. Voir la flamme du four à bois, sentir la pâte qui cuit, entendre le craquant... Nos 160 invités en parlent encore. Une prestation d'une qualité et d'une convivialité exceptionnelles.",
    stars: 5,
  },
  {
    name: "Gérard Schmitt",
    context: "Anniversaire 50 ans · Colmar, mars 2024",
    text: "Pour mes 50 ans, j'ai voulu marquer le coup. Marc est arrivé deux heures en avance pour tout installer. Professionnel, chaleureux, attentionné. Les tartes flambées étaient délicieuses — la pâte maison fait vraiment la différence. Je recommande sans réserve.",
    stars: 5,
  },
  {
    name: "Claire Wendling, DRH",
    context: "Séminaire d'entreprise · Strasbourg, nov 2023",
    text: "Nous avons fait appel à Marc pour notre séminaire annuel de 90 personnes. L'animation autour du four à bois a créé une vraie cohésion d'équipe. Le rapport qualité-prix est excellent. Marc est ponctuel, rigoureux et le contact est simple et agréable.",
    stars: 5,
  },
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#C75A2A" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Temoignages() {
  return (
    <section className="bg-cream-50 py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Avis clients
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900">
            Ce qu&apos;ils disent de Marc
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {TEMOIGNAGES.map((t) => (
            <div
              key={t.name}
              className="bg-cream-100 border border-stone-200 rounded-2xl p-8 flex flex-col transition-all duration-200 hover:shadow-md"
            >
              <div className="flex gap-1 mb-5" aria-label={`${t.stars} étoiles sur 5`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="font-display text-base md:text-lg italic text-bark-700 leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-stone-200 pt-5">
                <p className="font-sans font-medium text-bark-900">{t.name}</p>
                <p className="font-sans text-sm text-stone-400 mt-0.5">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
