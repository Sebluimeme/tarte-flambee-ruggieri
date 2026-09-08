import Image from 'next/image'

type Logo = {
  name: string
  src: string
  width: number
  height: number
  // Classe de hauteur affichée : par défaut h-8/md:h-9. À surcharger pour un
  // logo au format très large (bannière) afin qu'il ne domine pas visuellement
  // la bande — la largeur affichée découle de cette hauteur via object-contain.
  displayClassName?: string
}

// Uniquement des marques dont le logo a été fourni et confirmé par le client.
// Ne pas ajouter de nom ou de logo sans preuve fournie.
const LOGOS: Logo[] = [
  { name: 'Veolia', src: '/media/logos/veolia.png', width: 132, height: 34 },
  { name: 'Decathlon', src: '/media/logos/decathlon.svg', width: 160, height: 32 },
  { name: 'Lac Blanc', src: '/media/logos/lac-blanc.svg', width: 149, height: 60 },
  // Logo Pöttinger au format bannière très large (ratio ~10:1) : hauteur réduite
  // pour que sa largeur affichée reste comparable aux autres logos de la bande.
  {
    name: 'Pöttinger',
    src: '/media/logos/poettinger.svg',
    width: 164,
    height: 16,
    displayClassName: 'h-4 w-auto object-contain md:h-5',
  },
]

export default function ClientLogos() {
  // Le rail est dupliqué pour créer une boucle de défilement continue et
  // sans coupure (translateX(-50%) sur un contenu deux fois plus large).
  const track = [...LOGOS, ...LOGOS]

  return (
    <section className="border-t border-stone-200 bg-cream-100 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="mb-8 text-center font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
          Ils nous ont déjà fait confiance
        </p>
        <div className="logo-marquee">
          <div
            className="logo-marquee__track"
            role="list"
            aria-label="Marques ayant fait appel à Poivre & Salé"
          >
            {track.map((logo, index) => {
              const isDuplicate = index >= LOGOS.length
              return (
                <div
                  key={`${logo.name}-${index}`}
                  role="listitem"
                  tabIndex={isDuplicate ? -1 : 0}
                  aria-hidden={isDuplicate || undefined}
                  className="logo-marquee__item"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className={logo.displayClassName ?? 'h-8 w-auto object-contain md:h-9'}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
