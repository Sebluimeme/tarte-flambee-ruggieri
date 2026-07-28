import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Traiteur tarte flambée entreprise | Devis rapide',
  description:
    'Traiteur tarte flambée entreprise clé en main : four, service, boissons, mobilier, installation et nettoyage. Devis rapide pour votre événement.',
  alternates: { canonical: '/tarte-flambee-soiree-entreprise' },
}

const PHONE_DISPLAY = '07 85 62 10 89'
const PHONE_HREF = 'tel:0785621089'

const INCLUDED = [
  'four et service sur place',
  'préparation et cuisson pendant l’événement',
  'tireuse à bière selon la formule retenue',
  'barnum selon la configuration du lieu',
  'tables, couverts et vaisselle selon besoin',
  'installation avant l’arrivée des invités',
  'service pendant le repas',
  'débarrassage et nettoyage de l’espace utilisé',
]

const EVENTS = [
  {
    label: 'Équipe',
    title: 'Repas de fin d’année',
    desc: 'Un format chaleureux pour réunir vos équipes avant les fêtes, sans transformer l’organisation en charge supplémentaire.',
  },
  {
    label: 'Clients',
    title: 'Portes ouvertes et invitation clients',
    desc: 'Un point d’accueil vivant pour faire circuler vos visiteurs, prolonger les échanges et rendre vos locaux plus accueillants.',
  },
  {
    label: 'Temps fort',
    title: 'Inauguration ou séminaire',
    desc: 'Une solution simple pour marquer une étape, remercier vos collaborateurs ou clôturer une journée de travail.',
  },
]

const STEPS = [
  {
    title: 'Vous décrivez votre événement',
    desc: 'Date, lieu, nombre de convives, type de moment et contraintes d’accès. Vous donnez le contexte, on vérifie ce qui est possible.',
  },
  {
    title: 'Vous recevez une proposition adaptée',
    desc: 'La formule est préparée selon votre lieu, vos invités et les options souhaitées. Vous savez ce qui est prévu avant de valider.',
  },
  {
    title: 'Le jour J, tout est installé',
    desc: 'Le stand, le service et le matériel prévu sont mis en place avant l’arrivée de vos invités.',
  },
  {
    title: 'Vous profitez, puis on nettoie',
    desc: 'Vos invités sont servis pendant l’événement. À la fin, le matériel est rangé et l’espace utilisé est nettoyé.',
  },
]

const FAQ = [
  {
    q: 'De combien de place avez-vous besoin ?',
    a: 'Cela dépend du nombre de convives, du matériel prévu et de la configuration du lieu. Cour, terrasse, parking ou espace extérieur : on vérifie la faisabilité au moment du devis.',
  },
  {
    q: 'Faut-il de l’électricité ?',
    a: 'Certains éléments peuvent nécessiter une arrivée électrique, notamment la tireuse ou l’éclairage selon les options choisies. Les besoins exacts sont précisés avant l’événement.',
  },
  {
    q: 'Peut-on organiser l’événement en intérieur ?',
    a: 'Le service peut s’adapter selon votre lieu. Le four et l’installation doivent respecter les contraintes de sécurité, d’accès et d’aération.',
  },
  {
    q: 'Que se passe-t-il s’il pleut ?',
    a: 'Le barnum permet de prévoir une solution d’abri pour le stand selon la configuration. En cas de météo compliquée, l’organisation est validée avec vous avant le jour J.',
  },
  {
    q: 'Proposez-vous des options végétariennes ?',
    a: 'Oui, des options végétariennes peuvent être prévues si vous les indiquez au moment de la demande.',
  },
  {
    q: 'Les boissons sont-elles incluses ?',
    a: 'La tireuse à bière et les boissons dépendent de la formule choisie. Le devis précise clairement ce qui est inclus pour votre événement.',
  },
  {
    q: 'Qui s’occupe du nettoyage ?',
    a: 'Le débarrassage et le nettoyage de l’espace utilisé sont prévus dans l’accompagnement clé en main. Vous ne terminez pas la soirée avec le stand à ranger.',
  },
  {
    q: 'Y a-t-il un nombre minimum de personnes ?',
    a: 'Le minimum dépend de la formule et du lieu. Indiquez votre nombre de convives dans la demande de devis pour recevoir une proposition adaptée.',
  },
]

function PrimaryCta({ children = 'Demander un devis entreprise' }: { children?: string }) {
  return (
    <Link
      href="/contact"
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-copper-500 px-7 py-3 font-sans text-base font-semibold text-cream-50 shadow-md transition-all hover:bg-copper-400 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
    >
      {children}
    </Link>
  )
}

export default function SoireeEntreprisePage() {
  return (
    <>
      <section className="overflow-hidden bg-cream-50 px-6 pb-20 pt-32 md:px-8 md:pt-40">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Traiteur tarte flambée entreprise
            </p>
            <h1 className="mb-6 max-w-4xl font-display text-4xl font-medium leading-[1.02] tracking-tight text-bark-900 md:text-6xl">
              Organisez votre événement d’entreprise sans courir après la logistique
            </h1>
            <p className="mb-8 max-w-2xl font-sans text-lg leading-relaxed text-bark-600">
              Pour votre soirée d’entreprise, repas de fin d’année, inauguration, séminaire ou journée portes ouvertes, Poivre &amp; Salé installe une prestation clé en main directement sur votre lieu.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryCta>Demander un devis entreprise</PrimaryCta>
              <a
                href={PHONE_HREF}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-bark-900/20 bg-transparent px-7 py-3 font-sans text-base font-medium text-bark-900 transition-all hover:border-bark-900/40 active:scale-[0.98]"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-4 font-sans text-xs text-bark-500">
              Devis gratuit et sans engagement · Réponse rapide
            </p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-xl md:min-h-[560px]">
            <Image
              src="/media/stand-cafe-entreprise.jpg"
              fill
              className="object-cover object-center"
              alt="Stand accueillant installé pour un événement d’entreprise"
              sizes="(min-width: 768px) 45vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-cream-50 px-6 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Nous nous occupons de tout
            </p>
            <h2 className="mb-5 font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
              Vous avez l’événement à organiser. Vous n’avez pas à tout gérer.
            </h2>
            <p className="font-sans text-base leading-relaxed text-bark-600 md:text-lg">
              Quand on vous confie un repas d’entreprise, le vrai sujet n’est pas seulement le menu. Il faut que l’accueil soit fluide, que les invités soient bien servis, que le lieu reste propre, et que tout paraisse maîtrisé.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-bark-600 md:text-lg">
              Vous évitez de coordonner plusieurs prestataires. Vous restez disponible pour vos équipes, vos clients ou vos partenaires.
            </p>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-cream-100 p-6 shadow-sm md:p-8">
            <h3 className="mb-5 font-display text-2xl font-medium text-bark-900">
              Ce qui peut être prévu sur place
            </h3>
            <ul className="grid gap-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-bark-700 md:text-base">
                  <Check size={18} className="mt-0.5 shrink-0 text-copper-500" strokeWidth={1.75} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 px-6 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Comment ça se passe
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
              Une organisation simple, du devis au nettoyage
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {STEPS.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-stone-200 bg-cream-50 p-6 shadow-sm">
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-bark-900 font-sans text-sm font-semibold text-cream-50">
                  {index + 1}
                </span>
                <h3 className="mb-2 font-sans text-lg font-semibold text-bark-900">{step.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-bark-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 px-6 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Pour quels événements ?
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
              Pour les moments où vous devez recevoir sans vous compliquer la vie
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {EVENTS.map((event) => (
              <article key={event.title} className="flex min-h-56 flex-col justify-between rounded-3xl border border-stone-200 bg-cream-100 p-7 shadow-sm">
                <span className="mb-6 w-fit rounded-full bg-cream-300 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-copper-700">
                  {event.label}
                </span>
                <div>
                  <h3 className="mb-3 font-display text-2xl font-medium text-bark-900">{event.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-bark-600 md:text-base">{event.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bark-900 px-6 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-xl md:min-h-[560px]">
            <Image
              src="/media/accueil-cafe-entreprise.jpg"
              fill
              className="object-cover object-center"
              alt="Détail d’un stand propre pour une réception entreprise"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-300">
              Accueil soigné
            </p>
            <h2 className="mb-5 font-display text-3xl font-medium leading-tight tracking-tight text-cream-50 md:text-5xl">
              Vos locaux deviennent un vrai lieu de réception
            </h2>
            <p className="font-sans text-base leading-relaxed text-cream-100/75 md:text-lg">
              Cour, parking, terrasse ou espace extérieur : l’idée est de créer un point de rassemblement simple, propre et accueillant. Les photos du stand café montrent ce soin apporté à l’accueil, sans faire du café le sujet principal de l’offre.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-cream-100/75 md:text-lg">
              Pour une invitation client ou une porte ouverte, ce détail compte. Vos invités comprennent tout de suite où se retrouver, discuter et profiter du moment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 px-6 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Réassurance
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
              Ce qu’une entreprise veut savoir avant d’appeler
            </h2>
          </div>
          <div className="grid gap-4">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-2xl border border-stone-200 bg-cream-100 p-6">
                <h3 className="mb-2 font-sans text-base font-semibold text-bark-900 md:text-lg">{item.q}</h3>
                <p className="font-sans text-sm leading-relaxed text-bark-600 md:text-base">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-cream-100 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
            Demande de devis entreprise
          </p>
          <h2 className="mb-4 font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
            Vous voulez organiser un événement simple, propre et convivial ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-sans text-base leading-relaxed text-bark-600 md:text-lg">
            Envoyez la date, le lieu, le nombre de convives et le type d’événement. Vous recevez une proposition claire pour votre soirée d’entreprise, repas de fin d’année, inauguration, séminaire ou portes ouvertes.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryCta>Recevoir mon devis entreprise</PrimaryCta>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-bark-900/20 bg-transparent px-7 py-3 font-sans text-base font-medium text-bark-900 transition-all hover:border-bark-900/40 active:scale-[0.98]"
            >
              Nous appeler
            </a>
          </div>
          <p className="mt-4 font-sans text-xs text-bark-500">
            Devis gratuit · Sans engagement · Réponse rapide
          </p>
        </div>
      </section>
    </>
  )
}
