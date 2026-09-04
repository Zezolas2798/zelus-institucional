"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("zelus_cookie_consent");
    if (!consent) {
      // Small delay so it doesn't pop up instantly
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (consent === "accepted") {
      // If already accepted, we can initialize GA4 here or in layout
      window.dispatchEvent(new Event("cookiesAccepted"));
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("zelus_cookie_consent", "accepted");
    setIsVisible(false);
    // Dispatch event to initialize GA4
    window.dispatchEvent(new Event("cookiesAccepted"));
  };

  const handleDecline = () => {
    localStorage.setItem("zelus_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-surface border border-white/10 rounded-2xl shadow-2xl p-6 pointer-events-auto flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 pr-4">
              <div className="flex items-start justify-between mb-2 md:hidden">
                <h3 className="font-syncopate font-bold text-white">Sua Privacidade</h3>
                <button onClick={handleDecline} className="text-text-muted hover:text-white">
                  <X size={20} />
                </button>
              </div>
              <p className="text-sm text-text-muted">
                Utilizamos cookies de terceiros (Google Analytics) para analisar o tráfego e melhorar a sua experiência em nosso site. Não utilizamos cookies para publicidade direcionada. Ao clicar em "Aceitar", você concorda com o uso de cookies. Leia nossa{" "}
                <Link href="/privacidade" className="text-brand hover:underline">
                  Política de Privacidade
                </Link>{" "}
                para mais detalhes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-2.5 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-sm"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 rounded-lg bg-brand text-background font-bold hover:bg-brand/90 transition-colors text-sm"
              >
                Aceitar Cookies
              </button>
            </div>
            <button 
              onClick={handleDecline} 
              className="hidden md:block absolute top-4 right-4 text-text-muted hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
