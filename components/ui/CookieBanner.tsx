'use client'

import { useSyncExternalStore } from 'react'
import Link from 'next/link'

const CONSENT_CHANGE_EVENT = 'cookie-consent-change'

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange)
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange)
}

function getConsentSnapshot() {
  try {
    return !localStorage.getItem('cookie-consent')
  } catch {
    return true
  }
}

function getServerConsentSnapshot() {
  return false
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

function updateConsent(granted: boolean) {
  if (typeof window === 'undefined') return
  const value = granted ? 'granted' : 'denied'
  window.dataLayer = window.dataLayer || []
  // Signale le choix à Google Consent Mode v2 (écouté par GTM/GA4/Ads)
  window.dataLayer.push({
    event: 'consent_update',
    consent: {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    },
  })
  // gtag direct au cas où le tag GTM n'intercepte pas l'event custom
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    })
  }
}

export default function CookieBanner() {
  const visible = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  )

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    updateConsent(true)
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT))
  }

  const refuse = () => {
    localStorage.setItem('cookie-consent', 'refused')
    updateConsent(false)
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT))
  }

  if (!visible) return null

  return (
    <div data-cookie-banner className="fixed bottom-0 left-0 right-0 z-[60] p-3 md:p-4 bg-bark-900/95 backdrop-blur-sm border-t border-stone-200/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <p className="font-sans text-sm text-cream-100 leading-relaxed">
          Nous utilisons des cookies techniques nécessaires au fonctionnement du site.{' '}
          <Link href="/cookies" className="text-copper-400 hover:text-copper-300 underline focus:outline-none focus:ring-2 focus:ring-copper-400 rounded-sm">
            En savoir plus
          </Link>
        </p>
        <div className="flex gap-3 shrink-0 md:mr-16">
          <button
            onClick={refuse}
            className="px-4 py-2 rounded-full font-sans text-sm text-cream-200 border border-stone-200/20 hover:bg-stone-200/10 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-400"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 rounded-full font-sans text-sm font-medium bg-copper-500 text-cream-50 hover:bg-copper-400 transition-colors focus:outline-none focus:ring-2 focus:ring-copper-400"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
