"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-bark-800 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-cream-100/80 max-w-2xl">
          Ce site utilise uniquement des cookies techniques essentiels, nécessaires à son
          fonctionnement. Aucun cookie de traçage ou publicitaire n&apos;est utilisé.
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="flex-shrink-0 px-6 py-2.5 rounded-full bg-copper-500 text-cream-50 text-sm font-medium hover:bg-copper-400 transition-colors"
        >
          J&apos;ai compris
        </button>
      </div>
    </div>
  );
}
