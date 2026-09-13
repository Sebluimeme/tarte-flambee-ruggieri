import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import ClientLogos from '@/components/sections/ClientLogos'

export const metadata: Metadata = {
  title: 'Traiteur tarte flambée entreprise clé en main | Alsace',
  description:
    'Tartes flambées au feu de bois pour votre entreprise : four mobile, service, installation et nettoyage. Mobilier, tireuse et boissons en option.',
  alternates: { canonical: '/tarte-flambee-soiree-entreprise' },
}

const PHONE_DISPLAY = '07 85 62 10 89'
const PHONE_HREF = 'tel:0785621089'

const CORE_SERVICE = [
  'four à bois mobile et matériel de cuisson',
  'préparation et cuisson des tartes sur place',
  'équipe de service pendant votre événement',
  'installation du stand avant l’arrivée des invités',
  'débarrassage et nettoyage de l’espace utilisé',
]

const RECEPTION_OPTIONS = [
  'tireuse à bière et boissons',
  'tables, chaises et mange-debout',
  'barnum ou tonnelle selon la configuration',
  'vaisselle, couverts et verrerie',
  'accueil café et matériel complémentaire',
]

const EVENTS = [
  {
    label: 'Équipe',
    title: 'Repas de fin d’année',
    desc: 'Un repas chaleureux pour remercier vos équipes, sans transformer son organisation en charge supplémentaire.',
  },
  {
    label: 'Clients',
    title: 'Portes ouvertes et réception clients',
    desc: 'Un point d’accueil vivant pour faire circuler les visiteurs et prolonger naturellement les échanges.',
  },
  {
    label: 'Temps fort',
    title: 'Inauguration ou séminaire',
    desc: 'Une prestation conviviale pour marquer une étape, réunir les collaborateurs ou clôturer une journée de travail.',
  },
]

const STEPS = [
  {
    title: 'Vous décrivez votre événement',
    desc: 'Date, lieu, nombre de convives, type de réception et contraintes d’accès : vous nous donnez simplement le contexte.',
  },
  {
    title: 'Vous recevez une proposition claire',
    desc: 'Le devis distingue la prestation tarte flambée, le matériel et les options. Vous savez précisément ce qui est prévu.',
  },
  {
    title: 'Nous installons avant l’arrivée',
    desc: 'Le four, le stand et le matériel retenu sont mis en place avant l’accueil de vos équipes ou de vos clients.',
  },
  {
    title: 'Nous servons, rangeons et nettoyons',
    desc: 'Vous profitez de vos invités. À la fin, nous débarrassons le matériel et nettoyons l’espace utilisé.',
  },
]

const REVIEWS = [
  {
    name: 'Aurélie',
    company: 'PÖTTINGER France',
    text: 'Nous faisons appel à la société Poivre & Salé depuis maintenant près de 10 ans et avons toujours été très satisfaits. Leurs maîtres mots sont : adaptation à nos besoins et à notre budget, variété des produits et des saveurs, disponibilité, service impeccable, soin apporté à la décoration… Tout est parfait !',
  },
  {
    name: 'Patrice',
    company: 'Station du Lac Blanc',
    text: 'Grâce à une organisation exemplaire, des produits de qualité, une équipe sympathique et professionnelle, nous avons pu satisfaire tous nos invités. Au top avant, pendant et après la manifestation. À recommander sans hésitation.',
  },
  {
    name: 'Léa',
    company: 'Soirée collaborateurs',
    text: 'Nous sommes une entreprise et nous avons fait appel à eux pour animer une soirée avec nos collaborateurs. Je salue la qualité des tartes flambées qui ont fait l’unanimité. Merci encore à eux pour leur flexibilité et leur adaptabilité. Je recommande !',
  },
]

const FAQ = [
  {
    q: 'De combien de place avez-vous besoin ?',
    a: 'Cela dépend du nombre de convives, du matériel prévu et de la configuration du lieu. Cour, terrasse, parking ou espace extérieur : nous vérifions la faisabilité avec vous au moment du devis.',
  },
  {
    q: 'Faut-il de l’électricité ?',
    a: 'Certains éléments peuvent nécessiter une arrivée électrique, notamment la tireuse ou l’éclairage selon les options choisies. Les besoins exacts sont précisés avant l’événement.',
  },
  {
    q: 'Peut-on organiser l’événement en intérieur ?',
    a: 'Le repas peut se dérouler à l’intérieur. Le four et le stand sont installés dans un emplacement adapté aux contraintes de sécurité, d’accès et d’aération de votre site.',
  },
  {
    q: 'Que se passe-t-il s’il pleut ?',
    a: 'Un barnum peut abriter le stand selon la configuration du lieu. En cas de météo compliquée, nous validons l’organisation et la solution de repli avec vous avant le jour J.',
  },
  {
    q: 'Proposez-vous des options végétariennes ?',
    a: 'Oui. Des tartes sans viande peuvent être prévues si vous nous indiquez les régimes alimentaires au moment de la demande.',
  },
  {
    q: 'Le mobilier et les boissons sont-ils inclus ?',
    a: 'La tireuse, les boissons, les tables, les chaises, les mange-debout et la vaisselle sont ajoutés selon la formule et les besoins de votre réception. Chaque élément inclus figure clairement sur le devis.',
  },
  {
    q: 'Qui s’occupe du nettoyage ?',
    a: 'Nous débarrassons le matériel et nettoyons l’espace utilisé pour la prestation. Vous ne terminez pas la soirée avec le stand à ranger.',
  },
  {
    q: 'Combien de temps à l’avance faut-il réserver ?',
    a: 'La réservation est recommandée au minimum 3 semaines avant l’événement. Pour les périodes chargées, de mai à septembre, ou les grands groupes, mieux vaut compter 1 à 2 mois.',
  },
  {
    q: 'Pour combien de convives ?',
    a: 'Les prestations entreprise sont possibles à partir de 30 convives et jusqu’à 500 pour les grands événements. Indiquez votre estimation pour recevoir une proposition adaptée.',
  },
  {
    q: 'Où intervenez-vous ?',
    a: 'Principalement en Alsace, dans les Vosges et le Territoire de Belfort, dans un rayon d’environ 80 km autour du Bonhomme. Un déplacement plus lointain dans le Grand Est peut être étudié sur devis.',
  },
]

function PrimaryCta({ children = 'Recevoir mon devis entreprise' }: { children?: string }) {
  return (
    <Link
      href="/contact?type=entreprise"
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-copper-500 px-7 py-3 text-center font-sans text-base font-semibold text-cream-50 shadow-md transition-all hover:bg-copper-400 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
    >
      {children}
    </Link>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-bark-700 md:text-base">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper-500/10 text-copper-600">
            <Check size={14} strokeWidth={2.25} aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function SoireeEntreprisePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="overflow-hidden bg-cream-50 px-6 pb-20 pt-32 md:px-8 md:pt-40">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Traiteur événementiel pour entreprises en Alsace
            </p>
            <h1 className="mb-6 max-w-4xl font-display text-4xl font-medium leading-[1.02] tracking-tight text-bark-900 md:text-6xl">
              Un repas d’entreprise clé en main autour de la tarte flambée au feu de bois
            </h1>
            <p className="mb-7 max-w-2xl font-sans text-base leading-relaxed text-bark-600 md:text-lg">
              Poivre &amp; Salé installe son four mobile, prépare et sert les tartes flambées directement dans votre entreprise. Selon vos besoins, nous pouvons aussi prévoir la tireuse, les boissons, les tables, les chaises, le barnum et la vaisselle.
            </p>
            <ul className="mb-8 grid gap-3 font-sans text-sm text-bark-700 sm:grid-cols-2">
              {[
                'Tartes flambées cuites sur place',
                'Four à bois et équipe de service',
                'Mobilier et boissons en option',
                'Installation et nettoyage',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={17} className="shrink-0 text-copper-500" strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryCta />
              <a
                href="#prestations"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-bark-900/20 bg-transparent px-7 py-3 text-center font-sans text-base font-medium text-bark-900 transition-all hover:border-bark-900/40 active:scale-[0.98]"
              >
                Découvrir la prestation
              </a>
            </div>
            <p className="mt-4 font-sans text-xs text-bark-500">
              De 30 à 500 convives · Devis gratuit et sans engagement · Réponse rapide
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-xl md:min-h-[600px]">
            <Image
              src="/media/four-bois-action.jpg"
              fill
              className="object-cover object-center"
              alt="Tarte flambée cuite dans le four à bois mobile de Poivre et Salé"
              sizes="(min-width: 768px) 45vw, 100vw"
              priority
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-bark-900/90 p-4 text-cream-50 shadow-lg backdrop-blur-sm md:inset-x-6 md:bottom-6 md:p-5">
              <p className="font-display text-xl font-medium">Cuisson au feu de bois devant vos invités</p>
              <p className="mt-1 font-sans text-sm text-cream-100/75">Le four mobile devient le point vivant de votre réception.</p>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      <section id="prestations" className="scroll-mt-24 bg-cream-50 px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Une prestation adaptée à votre événement
            </p>
            <h2 className="mb-5 font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
              Les tartes flambées d’abord. Toute la réception si vous en avez besoin.
            </h2>
            <p className="font-sans text-base leading-relaxed text-bark-600 md:text-lg">
              Vous pouvez nous confier uniquement la cuisson et le service, ou nous demander le matériel nécessaire pour accueillir vos invités. Le devis distingue clairement chaque élément.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-bark-900 p-7 text-cream-50 shadow-lg md:p-9">
              <span className="mb-6 inline-flex rounded-full bg-copper-500 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-cream-50">
                Le cœur de la prestation
              </span>
              <h3 className="mb-3 font-display text-3xl font-medium">Tarte flambée et service sur place</h3>
              <p className="mb-7 font-sans text-sm leading-relaxed text-cream-100/70 md:text-base">
                Tout ce qu’il faut pour préparer, cuire et servir les tartes flambées au feu de bois sur votre lieu.
              </p>
              <div className="[&_li]:text-cream-100/85 [&_span:first-child]:bg-cream-50/10 [&_span:first-child]:text-copper-300">
                <CheckList items={CORE_SERVICE} />
              </div>
            </article>

            <article className="rounded-3xl border border-stone-200 bg-cream-100 p-7 shadow-sm md:p-9">
              <span className="mb-6 inline-flex rounded-full bg-cream-300 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-copper-700">
                Selon vos besoins et votre devis
              </span>
              <h3 className="mb-3 font-display text-3xl font-medium text-bark-900">Mobilier, boissons et réception complète</h3>
              <p className="mb-7 font-sans text-sm leading-relaxed text-bark-600 md:text-base">
                Ajoutez uniquement les équipements utiles à votre événement, sans multiplier les prestataires à coordonner.
              </p>
              <CheckList items={RECEPTION_OPTIONS} />
            </article>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-copper-500/20 bg-cream-200 p-6 sm:flex-row sm:items-center md:px-8">
            <p className="max-w-2xl font-sans text-sm leading-relaxed text-bark-700 md:text-base">
              Vous ne savez pas encore quelle formule choisir ? Indiquez-nous le nombre de convives, le lieu et le type d’événement. Nous vous proposerons le niveau d’accompagnement adapté.
            </p>
            <PrimaryCta>Décrire mon événement</PrimaryCta>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Sur votre lieu
            </p>
            <h2 className="mb-5 font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
              Le four fait le spectacle. L’organisation fait la différence.
            </h2>
            <p className="font-sans text-base leading-relaxed text-bark-600 md:text-lg">
              Nous transformons une cour, un parking ou une terrasse en point de rencontre accueillant. Vos invités voient les tartes sortir du four pendant que vous restez disponible pour eux.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
            <figure className="overflow-hidden rounded-3xl bg-bark-900 shadow-lg">
              <div className="relative min-h-[380px] md:min-h-[520px]">
                <Image
                  src="/media/four-bois-action.jpg"
                  fill
                  className="object-cover object-center"
                  alt="Cuisson de tartes flambées au feu de bois pendant un événement"
                  sizes="(min-width: 768px) 58vw, 100vw"
                />
              </div>
              <figcaption className="p-6 text-cream-50">
                <p className="font-display text-2xl font-medium">Préparées et servies minute</p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-cream-100/70">Une animation gourmande qui rassemble naturellement les équipes.</p>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-3xl bg-bark-900 shadow-lg">
              <div className="relative min-h-[380px] md:min-h-[520px]">
                <Image
                  src="/media/accueil-cafe-entreprise.jpg"
                  fill
                  className="object-cover object-center"
                  alt="Stand d’accueil propre et soigné installé pour une réception"
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </div>
              <figcaption className="p-6 text-cream-50">
                <p className="font-display text-2xl font-medium">Un accueil propre et soigné</p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-cream-100/70">Le matériel utile est installé avant l’arrivée de vos collaborateurs ou clients.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Pour quels événements ?
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
              Pour les moments où vous devez bien recevoir sans vous compliquer la vie
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {EVENTS.map((event) => (
              <article key={event.title} className="flex min-h-64 flex-col justify-between rounded-3xl border border-stone-200 bg-cream-100 p-7 shadow-sm">
                <span className="mb-8 w-fit rounded-full bg-cream-300 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-copper-700">
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

      <section className="bg-cream-100 px-6 py-20 md:px-8 md:py-24">
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
              <article key={step.title} className="rounded-2xl border border-stone-200 bg-cream-50 p-6 shadow-sm">
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-bark-900 font-sans text-sm font-semibold text-cream-50">
                  {index + 1}
                </span>
                <h3 className="mb-2 font-sans text-lg font-semibold text-bark-900">{step.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-bark-600">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bark-900 px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end">
            <div>
              <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-300">
                Avis Google · 5 étoiles
              </p>
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-cream-50 md:text-5xl">
                Des entreprises qui peuvent recommander la prestation
              </h2>
            </div>
            <p className="font-sans text-sm leading-relaxed text-cream-100/65 md:text-base">
              Organisation, qualité, flexibilité et service : ces retours viennent d’événements réalisés pour des équipes et des professionnels.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {REVIEWS.map((review) => (
              <article key={review.name} className="flex h-full flex-col rounded-3xl bg-cream-50 p-7 shadow-lg md:p-8">
                <div className="mb-6 font-sans text-lg tracking-[0.16em] text-copper-500" aria-label="5 étoiles sur 5">
                  ★★★★★
                </div>
                <blockquote className="flex-1 font-sans text-sm leading-7 text-bark-700 md:text-base">
                  “{review.text}”
                </blockquote>
                <footer className="mt-7 border-t border-stone-200 pt-5">
                  <p className="font-sans font-semibold text-bark-900">{review.name}</p>
                  <p className="mt-1 font-sans text-sm text-bark-600">{review.company}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
              Questions fréquentes
            </p>
            <h2 className="mb-5 font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
              Les points pratiques à valider avant votre devis
            </h2>
            <p className="font-sans text-base leading-relaxed text-bark-600">
              Vous nous donnez le contexte. Nous vérifions ensuite l’accès, l’emplacement et le matériel nécessaire avec vous.
            </p>
          </div>
          <div className="grid content-start gap-3">
            {FAQ.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-stone-200 bg-cream-100 px-6 py-5 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-base font-semibold text-bark-900 marker:content-none md:text-lg">
                  <span>{item.q}</span>
                  <span className="text-2xl font-light leading-none text-copper-500 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 border-t border-stone-200 pt-4 font-sans text-sm leading-relaxed text-bark-600 md:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-cream-200 px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.18em] text-copper-500">
            Demande de devis entreprise
          </p>
          <h2 className="mb-4 font-display text-3xl font-medium leading-tight tracking-tight text-bark-900 md:text-5xl">
            Parlez-nous de votre événement. Nous préparons le reste.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-sans text-base leading-relaxed text-bark-600 md:text-lg">
            Envoyez la date, le lieu, le nombre de convives et le matériel souhaité. Vous recevrez une proposition claire, adaptée à votre entreprise et à votre réception.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryCta />
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-bark-900/20 bg-transparent px-7 py-3 font-sans text-base font-medium text-bark-900 transition-all hover:border-bark-900/40 active:scale-[0.98]"
            >
              Nous appeler · {PHONE_DISPLAY}
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
