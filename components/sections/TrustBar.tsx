const stats = [
  { value: '200+', label: 'Événements réalisés' },
  { value: '4,9/5', label: 'Note moyenne' },
  { value: '100%', label: 'Ingrédients frais' },
]

export default function TrustBar() {
  return (
    <section className="bg-cream-100 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center text-center gap-2">
              <p className="font-display text-5xl md:text-6xl text-copper-500 font-medium">{stat.value}</p>
              <p className="font-sans text-sm uppercase tracking-wider text-bark-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
