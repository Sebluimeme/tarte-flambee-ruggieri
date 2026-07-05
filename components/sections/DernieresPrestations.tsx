'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

/**
 * Bloc "Nos dernières prestations".
 * Double rôle :
 *   - Preuve sociale concrète (vrai lieu + vrai nombre de personnes)
 *   - SEO local : injection naturelle de villes et types d'événements
 *
 * ⚠️  DONNÉES À REMPLACER par Marc avec ses vraies prestations récentes.
 *     Format : { type, convives, ville, categorie }
 *     Catégories possibles : 'entreprise' | 'mariage' | 'anniversaire' | 'association' | 'famille'
 */
const TOUTES_PRESTATIONS: Prestation[] = [
  { type: 'Soirée d’entreprise', convives: 85,  ville: 'Mulhouse',     categorie: 'entreprise'  },
  { type: 'Mariage',              convives: 120, ville: 'Colmar',        categorie: 'mariage'     },
  { type: 'Anniversaire',         convives: 45,  ville: 'Strasbourg',    categorie: 'anniversaire'},
  { type: 'Séminaire',            convives: 60,  ville: 'Sélestat',      categorie: 'entreprise'  },
  { type: 'Repas de fin d’année', convives: 70,  ville: 'Saint-Louis',  categorie: 'entreprise'  },
  { type: 'Mariage',              convives: 180, ville: 'Ribeauvillé',   categorie: 'mariage'     },
  { type: 'Team building',        convives: 50,  ville: 'Munster',       categorie: 'entreprise'  },
  { type: 'Anniversaire',         convives: 55,  ville: 'Épinal',        categorie: 'anniversaire'},
  { type: 'Fête de famille',      convives: 90,  ville: 'Guebwiller',    categorie: 'famille'     },
  { type: 'Soirée d’entreprise', convives: 110, ville: 'Colmar',       categorie: 'entreprise'  },
  { type: 'Mariage',              convives: 200, ville: 'Cernay',        categorie: 'mariage'     },
  { type: 'Repas associatif',     convives: 80,  ville: 'Kaysersberg',   categorie: 'association' },
]

type Prestation = {
  type: string
  convives: number
  ville: string
  categorie: 'entreprise' | 'mariage' | 'anniversaire' | 'association' | 'famille'
}

interface Props {
  /**
   * Filtre par catégorie.
   * Ex : filter="entreprise" → garde soirées entreprise, séminaires, team building, fin d'année.
   * Pas de filtre = affiche tout.
   */
  filter?: Prestation['categorie']
  /** Nombre de prestations à afficher (défaut 8). */
  limit?: number
}

export default function DernieresPrestations({ filter, limit = 8 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const prestations = TOUTES_PRESTATIONS
    .filter((p) => (filter ? p.categorie === filter : true))
    .slice(0, limit)

  return (
    <section className="bg-cream-50 py-20 md:py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-copper-500 mb-4">
            Nos dernières prestations
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-bark-900 mb-3">
            Ils nous ont fait confiance
          </h2>
          <p className="font-sans text-base leading-relaxed text-bark-700 max-w-xl">
            200+ événements réalisés en Alsace et Grand Est depuis 2019.
          </p>
        </div>

        <div ref={ref} className="flex flex-wrap gap-3 mb-10">
          {prestations.map((p, i) => (
            <motion.div
              key={`${p.type}-${p.ville}-${i}`}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: 'easeOut', delay: i * 0.05 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100 border border-stone-200 font-sans text-sm text-bark-800">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-500 shrink-0" aria-hidden="true" />
                <span className="font-medium">{p.type}</span>
                <span className="text-bark-400">&middot;</span>
                <span>{p.convives}&nbsp;pers.</span>
                <span className="text-bark-400">&middot;</span>
                <span className="text-copper-600">{p.ville}</span>
              </span>
            </motion.div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-copper-500 text-cream-50 font-sans font-medium text-base hover:bg-copper-400 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper-500 focus:ring-offset-2"
        >
          Demander mon devis gratuit
        </Link>
      </div>
    </section>
  )
}
