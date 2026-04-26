"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ObrigadoPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://wa.me/qr/2WOCVA4LV4JIO1";
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-[#080808]">
      
      {/* Background Overlays - Fiel ao original */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)", backgroundSize: "4rem 4rem" }} />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand opacity-[0.03] rounded-full blur-[120px] pointer-events-none z-0" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-lg w-full text-center bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-brand/30 shadow-2xl backdrop-blur-md"
      >
        <div className="mb-8 flex justify-center">
          <div className="h-20 w-20 bg-brand/20 rounded-full flex items-center justify-center border border-brand/50 shadow-[0_0_30px_rgba(254,97,94,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fe615e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 uppercase tracking-tighter italic font-display">
          Solicitação Recebida!
        </h1>
        
        <p className="text-text-muted text-lg mb-8 leading-relaxed font-light">
          Você será redirecionado para falar com nosso estrategista técnico no WhatsApp em instantes.
        </p>
        
        <Link 
          href="https://wa.me/qr/2WOCVA4LV4JIO1" 
          className="inline-flex px-8 py-4 rounded-xl bg-brand text-background hover:bg-white hover:scale-105 transition-all duration-300 font-bold text-lg items-center justify-center gap-3 w-full shadow-[0_0_30px_rgba(254,97,94,0.2)]"
        >
          Falar com Especialista Agora
        </Link>
        
        <div className="mt-8">
          <Link href="/" className="text-sm text-text-muted hover:text-brand group inline-flex items-center gap-2 transition-colors uppercase tracking-widest font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Home ZELUS
          </Link>
        </div>
      </motion.div>

      {/* Countdown Indicator */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 4, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1 bg-brand/30"
      />
    </main>
  );
}
