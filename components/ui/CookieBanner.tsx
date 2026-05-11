"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

  const handleRefuse = () => {
    localStorage.setItem("cookies_accepted", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm w-full bg-cream-50 border border-stone-200 shadow-md rounded-2xl p-5">
      <p className="font-sans text-sm text-bark-700 leading-relaxed mb-4">
        Ce site utilise uniquement des cookies techniques essentiels.{" "}
        <Link href="/cookies" className="text-copper-500 hover:text-copper-400 underline transition-colors">
          En savoir plus
        </Link>
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleAccept}
          className="flex-1 py-2.5 rounded-full bg-copper-500 text-cream-50 font-sans text-sm font-medium hover:bg-copper-400 transition-all"
        >
          Accepter
        </button>
        <button
          type="button"
          onClick={handleRefuse}
          className="flex-1 py-2.5 rounded-full bg-transparent text-bark-900 font-sans text-sm font-medium border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-100 transition-all"
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
