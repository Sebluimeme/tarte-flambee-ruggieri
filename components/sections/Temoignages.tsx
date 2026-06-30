'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, StarHalf } from 'lucide-react'

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=/g/11w2178bdy'

// Avis Google réels de l'établissement « Poivre Et Sale » (note 4,7/5).
// Source : fiche Google Business. Noms, textes et contextes authentiques — ne pas inventer.
const temoignages = [
  {
    citation: "Nous avons fait appel à Marc et son équipe pour notre mariage le week-end du 9 mai 2026 et nous en sommes plus que ravis !",
    nom: "Joanna Schneider",
    contexte: "Mariage · mai 2026",
    rating: 5,
  },
  {
    citation: "Marc est très réactif aux demandes, il est force de proposition, son matériel est de qualité, il est arrangeant. Un vrai plaisir de travailler avec lui.",
    nom: "David Streissel",
    contexte: "Festival du jeu de rôle · Kaysersberg",
    rating: 5,
  },
  {
    citation: "Marc et son équipe sont venus pour le baptême de nos enfants. Nous avons été ravis — une personne superbe et attachante, tout comme son équipe. Le repas et le service ont été bien au-delà de nos attentes. Au top !",
    nom: "Thomas Marais",
    contexte: "Baptême",
    rating: 5,
  },
  {
    citation: "Voici un traiteur à l'écoute des convives, belle prestation et un super moment culinaire. Je recommande vivement.",
    nom: "Renaud Peroz",
    contexte: "Local Guide Google",
    rating: 5,
  },
  {
    citation: "Nous avons confié le repas de la confirmation de notre fils à Marc et nous sommes absolument ravis de sa prestation, qui a grandement contribué à la réussite de cette magnifique journée.",
    nom: "Linda Hasnaoui",
    contexte: "Repas de confirmation",
    rating: 5,
  },
  {
    citation: "Parfait, rien à redire. Super ambiance, super service, cuisine délicieuse. Impeccable.",
    nom: "Alizée Escach",
    contexte: "Avis Google",
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
