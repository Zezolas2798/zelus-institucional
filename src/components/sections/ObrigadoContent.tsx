"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Check, ArrowLeft, MessageSquare } from "lucide-react";
import Link from "next/link";

export function ObrigadoContent() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://wa.me/qr/2WOCVA4LV4JIO1";
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-background">
      {/* Background Overlays */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand opacity-[0.05] rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-lg w-full text-center bg-surface/50 p-8 md:p-12 rounded-[2.5rem] border border-brand/30 shadow-2xl backdrop-blur-md">
        <div className="mb-8 flex justify-center">
          <div className="h-20 w-20 bg-brand/20 rounded-full flex items-center justify-center border border-brand/50 shadow-[0_0_30px_rgba(254,97,94,0.3)]">
            <Check className="text-brand w-10 h-10" strokeWidth={3} />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tighter">
          Solicitação Recebida!
        </h1>
        
        <p className="text-text-muted text-lg mb-8 leading-relaxed font-light">
          Você será redirecionado para falar com nosso estrategista técnico no WhatsApp em instantes.
        </p>
        
        <a 
          href="https://wa.me/qr/2WOCVA4LV4JIO1" 
          className="inline-flex px-8 py-4 rounded-xl bg-brand text-background hover:bg-white hover:scale-105 transition-all duration-300 font-bold text-lg items-center justify-center gap-3 w-full shadow-[0_0_30px_rgba(254,97,94,0.2)]"
        >
          <MessageSquare size={20} />
          Falar com especialista
        </a>
        
        <div className="mt-8">
          <Link 
            href="/" 
            className="text-sm text-text-muted hover:text-brand group inline-flex items-center gap-2 transition-colors uppercase tracking-widest font-bold"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Home ZELUS
          </Link>
        </div>
      </div>
    </main>
  );
}
