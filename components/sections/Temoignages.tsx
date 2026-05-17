'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, StarHalf } from 'lucide-react'

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=/g/11w2178bdy'

const temoignages = [
  {
    citation: "Super prestation pour notre soirée d'entreprise. Marc est arrivé à l'heure, tout était nickel, les tartes flambées étaient excellentes. Le four à bois dans la cour ça a mis une super ambiance. On refera appel à lui c'est sûr.",
    nom: "Sophie M.",
    contexte: "Événement entreprise, Colmar",
    rating: 5,
  },
  {
    citation: "Marc a fait le buffet tarte flambée pour notre mariage en fin de soirée. Franchement c'était le meilleur moment de la soirée, tout le monde s'est regroupé autour du four. Les tartes étaient vraiment bonnes. Merci Marc !",
    nom: "Aurélie & Thomas K.",
    contexte: "Mariage, juin 2025 · Colmar",
    rating: 4.5,
  },
  {
    citation: "Très bonne prestation pour les 60 ans de mon père. Idée originale, convivial, et les tartes étaient délicieuses. Marc est quelqu'un de sympa et de pro. Toute la famille a adoré, je recommande.",
    nom: "Laurence B.",
    contexte: "Anniversaire en famille, Obernai",
    rating: 5,
  },
  {
    citation: "On a pris Marc pour un pot de départ et c'était vraiment top. Le four à bois c'est original, ça sent bon, tout le monde a kiffé regarder. Et les tartes étaient super bonnes. À recommander sans hésiter.",
    nom: "Matthieu R.",
    contexte: "Pot de départ, Strasbourg",
    rating: 4.5,
  },
  {
    citation: "Réservé pour un anniversaire en hiver dans notre grange. Marc s'est bien adapté à l'endroit, aucun souci. Service au top, tartes délicieuses, ambiance géniale. Je recommande vraiment.",
    nom: "Claire V.",
    contexte: "Anniversaire, Ribeauvillé",
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <div className="flex gap-0.5 items-center">
      {[...Array(full)].map((_, j) => (
        <Star key={j} size={16} className="text-copper-500 fill-copper-500" aria-hidden="true" />
      ))}
      {half && <StarHalf size={16} className="text-copper-500 fill-copper-500" aria-hidden="true" />}
    </div>
  )
}

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function Temoignages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="avis" className="bg-cream-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Avis clients
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 mb-5">
            Ce qu&apos;ils en pensent
          </h2>
          {GOOGLE_REVIEW_URL ? (
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-bark-700 hover:text-copper-500 transition-colors"
            >
              <GoogleLogo />
              <span>Laisser un avis Google</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 font-sans text-sm text-bark-700">
              <GoogleLogo />
              <span>Avis Google à venir</span>
            </span>
          )}
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {temoignages.map((t, i) => (
            <motion.div
              key={t.nom}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-cream-50 rounded-2xl p-7 border border-stone-200 flex flex-col gap-5"
            >
              <StarRating rating={t.rating} />
              <p className="font-display text-xl italic leading-relaxed text-bark-900 flex-1">
                &ldquo;{t.citation}&rdquo;
              </p>
              <div>
                <p className="font-sans text-sm font-medium text-bark-900">{t.nom}</p>
                <p className="font-sans text-sm text-stone-400">{t.contexte}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
