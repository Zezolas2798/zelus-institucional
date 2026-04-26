"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageSquare, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "A Visão ZELUS", href: "/#sobre" },
  { name: "Desafios", href: "/#dores" },
  { name: "Pilares", href: "/#solucoes" },
  { name: "Metodologia", href: "/#metodologia" },
  { name: "Serviços", href: "/#servicos" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        (isScrolled || !isHomePage)
          ? "bg-background/90 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Back Button Container */}
        <div className="flex items-center gap-6">
          <Link href="/" className="relative flex-shrink-0 flex items-center zelus-brand-container zelus-reveal h-14 w-32">
            <Image 
              src="/logos/zelus-icon-official.svg" 
              alt="ZELUS Logo" 
              fill
              priority
              className="object-contain zelus-icon-only" 
            />
          </Link>
          
          {!isHomePage && (
            <button 
              onClick={() => router.back()} 
              className="flex items-center gap-2 text-brand hover:text-white transition-all text-[11px] uppercase tracking-[0.2em] font-bold border border-brand/20 px-4 py-2 rounded-full bg-brand/5 hover:bg-brand/10 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-foreground transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <div className="magnetic-wrap">
            <button
              onClick={() => {
                // To avoid breaking the existing layout logic without global state,
                // we can dispatch a custom event that WhatsAppButton will listen to,
                // or just render another LeadFormModal here. Let's render one here too.
                const btn = document.querySelector('[aria-label="Falar no WhatsApp"]') as HTMLButtonElement;
                if (btn) btn.click();
              }}
              className="px-6 py-2.5 rounded-full bg-transparent border-2 border-brand text-brand hover:bg-brand hover:text-[#050505] transition-all duration-300 font-semibold text-sm flex items-center justify-center"
            >
              Falar com especialista
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-border p-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-text-muted hover:text-brand transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              className="flex items-center justify-center gap-2 bg-brand text-background px-6 py-4 rounded-xl text-lg font-bold"
              onClick={() => {
                setMobileMenuOpen(false);
                const btn = document.querySelector('[aria-label="Falar no WhatsApp"]') as HTMLButtonElement;
                if (btn) btn.click();
              }}
            >
              <MessageSquare size={20} />
              WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
