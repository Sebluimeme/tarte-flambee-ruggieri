import { ChefHat, Users, MapPin, Star } from 'lucide-react'

const stats = [
  { icon: ChefHat, value: '14 ans', label: "d'expérience" },
  { icon: Users, value: '200+', label: 'convives / soirée' },
  { icon: MapPin, value: 'Alsace', label: 'et Grand Est' },
  { icon: Star, value: '4.9/5', label: 'sur Google' },
]

export default function TrustBar() {
  return (
    <section className="bg-bark-900 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center text-center gap-2">
              <stat.icon size={24} className="text-copper-400" aria-hidden="true" />
              <p className="font-display text-3xl text-copper-400 font-medium">{stat.value}</p>
              <p className="font-sans text-sm text-cream-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
