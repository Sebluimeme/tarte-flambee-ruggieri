"use client";

import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location.href = "/admin/dashboard";
      } else {
        setChecking(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/admin/dashboard";
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code;
      if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
        setError("Email ou mot de passe incorrect.");
      } else if (code === "auth/too-many-requests") {
        setError("Trop de tentatives. Réessayez dans quelques minutes.");
      } else {
        setError("Erreur de connexion. Vérifiez vos identifiants.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <main className="flex-1 flex items-center justify-center" style={{ backgroundColor: "#FFFDF7" }}>
        <div className="text-[#8B2500] text-lg">Vérification...</div>
      </main>
    );
  }

  return (
    <main
      className="flex-1 flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: "#FFFDF7" }}
    >
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full text-3xl mb-4 shadow-lg"
            style={{ background: "linear-gradient(135deg, #D4621A, #8B2500)" }}
          >
            🔐
          </div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#3D2010" }}
          >
            Espace Admin
          </h1>
          <p style={{ color: "#8B2500" }} className="text-sm">
            Réservé à Marc Ruggieri
          </p>
        </div>

        {/* Form card */}
        <div
          className="rounded-2xl shadow-xl p-8 space-y-5"
          style={{ backgroundColor: "#FBF5E6" }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: "#3D2010" }}
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="marc@example.com"
                className="w-full px-4 py-3 rounded-xl border-2 border-[#FBF5E6] focus:outline-none focus:border-[#D4621A] transition-all text-[#3D2010] bg-white"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: "#3D2010" }}
                htmlFor="password"
              >
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border-2 border-[#FBF5E6] focus:outline-none focus:border-[#D4621A] transition-all text-[#3D2010] bg-white"
              />
            </div>

            {error && (
              <div
                className="rounded-xl px-4 py-3 text-sm font-medium"
                style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D4621A] hover:bg-[#8B2500] text-white font-bold py-3 rounded-xl text-lg transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Connexion…" : "Se connecter"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
