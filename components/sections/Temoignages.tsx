'use client'

import { motion, useInView } from 'framer-motion'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react'

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=/g/11w2178bdy'
const GOOGLE_PROFILE_URL = 'https://share.google/688KYf8wXGMTY3dvm'

// Sélection d'avis Google affichés sur le site, vérifiée le 2026-08-28 (max. 5 avis à texte réel).
// Source : fiche Google Business publique. Ne pas en déduire la note globale GBP.
// Nouveaux avis non repris le 2026-09-02 : la fiche publique ci-dessus ne peut pas être
// récupérée sans rendu JS (aucun outil navigateur dans cette session) — le fetch direct
// redirige vers une page google.com/share.google sans contenu d'avis exploitable.
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

const AUTO_INTERVAL = 6000

export default function Temoignages() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [active, setActive] = useState(0)
  const [cardHeight, setCardHeight] = useState<number>()

  const stopAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current
    if (!el) return
    const clamped = (index + temoignages.length) % temoignages.length
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
    setActive(clamped)
  }, [])

  const goNext = useCallback(() => scrollToIndex(active + 1), [active, scrollToIndex])
  const goPrev = useCallback(() => scrollToIndex(active - 1), [active, scrollToIndex])

  const startAuto = useCallback(() => {
    stopAuto()
    timerRef.current = setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % temoignages.length
        const el = scrollRef.current
        if (el) el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' })
        return next
      })
    }, AUTO_INTERVAL)
  }, [stopAuto])

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [startAuto, stopAuto])

  // Garde l'index actif synchronisé si l'utilisateur scrolle/swipe manuellement.
  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el || el.clientWidth === 0) return
    const index = Math.round(el.scrollLeft / el.clientWidth)
    setActive(index)
  }, [])

  // Aligne la hauteur du carrousel sur le seul avis visible : évite l'espace
  // vide laissé par un avis plus long présent hors écran dans la même rangée.
  useLayoutEffect(() => {
    const measure = () => {
      const el = cardRefs.current[active]
      if (el) setCardHeight(el.offsetHeight)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  return (
    <section id="avis" className="bg-cream-100 py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Avis clients
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-bark-900 mb-5">
            Ce qu&apos;ils en pensent
          </h2>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-bark-700 hover:text-copper-500 transition-colors"
          >
            <GoogleLogo />
            <span>Voir la fiche Google</span>
          </a>
        </div>

        <div
          ref={sectionRef}
          className="relative"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            role="region"
            aria-roledescription="carrousel"
            aria-label="Avis clients Google"
            style={cardHeight ? { height: cardHeight } : undefined}
            className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide rounded-2xl transition-[height] duration-300 ease-out"
          >
            {temoignages.map((t, i) => (
              <div
                key={t.nom}
                ref={(el) => { cardRefs.current[i] = el }}
                className="flex-none w-full snap-center px-1 self-start"
                role="group"
                aria-roledescription="avis"
                aria-label={`Avis ${i + 1} sur ${temoignages.length}`}
                aria-hidden={active !== i}
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="bg-cream-50 rounded-2xl p-7 md:p-9 border border-stone-200 flex flex-col gap-5 min-h-[220px] justify-center"
                >
                  <StarRating rating={t.rating} />
                  <p className="font-display text-xl md:text-2xl italic leading-relaxed text-bark-900">
                    &ldquo;{t.citation}&rdquo;
                  </p>
                  <div>
                    <p className="font-sans text-sm font-medium text-bark-900">{t.nom}</p>
                    <p className="font-sans text-sm text-stone-400">{t.contexte}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => { stopAuto(); goPrev(); startAuto() }}
              aria-label="Avis précédent"
              className="w-10 h-10 rounded-full border border-bark-900/15 flex items-center justify-center hover:bg-cream-50 hover:border-bark-900/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
            >
              <ChevronLeft size={18} className="text-bark-900" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Sélectionner un avis">
              {temoignages.map((t, i) => (
                <button
                  key={t.nom}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Aller à l'avis ${i + 1}`}
                  onClick={() => { stopAuto(); scrollToIndex(i); startAuto() }}
                  className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 ${
                    active === i ? 'w-6 bg-copper-500' : 'w-2 bg-bark-900/20 hover:bg-bark-900/35'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => { stopAuto(); goNext(); startAuto() }}
              aria-label="Avis suivant"
              className="w-10 h-10 rounded-full border border-bark-900/15 flex items-center justify-center hover:bg-cream-50 hover:border-bark-900/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
            >
              <ChevronRight size={18} className="text-bark-900" />
            </button>
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 font-sans text-sm text-bark-700 hover:text-copper-500 transition-colors"
          >
            <GoogleLogo />
            <span>Laisser un avis Google</span>
          </a>
        </div>
      </div>
    </section>
  )
}
