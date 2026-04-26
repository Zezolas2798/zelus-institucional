"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-white/5 text-center relative overflow-hidden">
      <div className="absolute inset-0 paper-texture opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <img 
          src="/logos/zelus-icon-official.svg" 
          alt="ZELUS" 
          className="h-8 w-auto mx-auto mb-6 opacity-30 brightness-0 invert" 
        />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted/40 text-[10px] tracking-[0.4em] uppercase font-branding">ZELUS | Autoridade em Soluções Alimentares</p>
          <p className="text-text-muted/20 text-[9px] uppercase tracking-widest">© {currentYear} Zelus Consultoria Alimentar</p>
        </div>
      </div>
    </footer>
  );
}
