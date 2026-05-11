'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const refuse = () => {
    localStorage.setItem('cookie-consent', 'refused')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-bark-900/95 backdrop-blur-sm border-t border-stone-200/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <p className="font-sans text-sm text-cream-100 leading-relaxed">
          Nous utilisons des cookies techniques nécessaires au fonctionnement du site.{' '}
          <Link href="/cookies" className="text-copper-400 hover:text-copper-300 underline focus:outline-none focus:ring-2 focus:ring-copper-400 rounded-sm">
            En savoir plus
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
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
