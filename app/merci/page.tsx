import type { Metadata } from 'next'
import MerciContent from './MerciContent'

export const metadata: Metadata = {
  title: 'Merci pour votre demande · Poivre & Salé',
  description: 'Votre demande de devis a bien été reçue. Marc vous répond sous 24h.',
  robots: { index: false, follow: false },
}

export default function MerciPage() {
  return <MerciContent />
}
