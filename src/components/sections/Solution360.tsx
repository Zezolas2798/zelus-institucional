"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, ArrowUpRight } from "lucide-react";

export function Solution360() {
  return (
    <section id="solucoes" className="py-32 relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/elementos/Gemini_Generated_Image_lpbfp7lpbfp7lpbf (1).webp')" }}>
      {/* Sombra progressiva para proteger o texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20 z-0"></div>
      <div className="absolute inset-0 bg-background/20 z-0"></div>

      {/* Subtle background glow */}
      <div className="absolute -right-60 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand opacity-[0.05] rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6 drop-shadow-lg">
            A Solução ZELUS 360º
          </h2>
          <p className="text-foreground/90 text-lg leading-relaxed max-w-2xl drop-shadow-md">
            Integramos inteligência de dados à segurança alimentar para blindar sua operação contra riscos e maximizar seus lucros.
          </p>
        </motion.div>

        <div className="mobile-carousel lg:grid-cols-3 items-stretch scrollbar-hide">
          {/* Pillar 1: Segurança */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col group min-w-[72vw] md:min-w-0"
          >
            <div className="backdrop-blur-xl bg-white/[0.03] glass-mobile-fix p-8 md:p-10 rounded-3xl border border-white/10 hover:border-brand/40 flex-1 flex flex-col transition-all duration-500 hover:bg-white/[0.06] aspect-[4/5] md:aspect-auto">
              <div className="mb-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">Segurança e Qualidade</h3>
                <p className="text-foreground/60 font-light leading-relaxed text-sm md:text-base">
                  Garanta a conformidade sanitária e a padronização dos seus processos para oferecer alimentos seguros, eliminando riscos e fortalecendo a confiança do seu cliente.
                </p>
              </div>
              <div className="mt-auto pt-8 border-t border-white/5 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                <span className="text-[11px] text-brand uppercase tracking-[0.2em] font-bold">Qualidade garantida</span>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Eficiência (Destaque Central) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col group relative z-10 md:-mt-6 md:mb-6 min-w-[72vw] md:min-w-0"
          >
            <div className="backdrop-blur-2xl bg-white/[0.07] glass-mobile-fix p-8 md:p-10 rounded-3xl border border-brand/30 hover:border-brand/60 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex-1 flex flex-col transition-all duration-500 aspect-[4/5] md:aspect-auto">
              <div className="mb-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand border border-brand shadow-lg shadow-brand/20">
                  <Zap className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Eficiência Operacional</h3>
                <p className="text-foreground/80 font-normal leading-relaxed text-sm md:text-base">
                  Otimize sua produção e reduza desperdícios com processos inteligentes que organizam sua equipe e aumentam a produtividade do dia a dia.
                </p>
              </div>
              <div className="mt-auto pt-8 border-t border-white/10 flex justify-between items-end">
                <span className="text-brand text-[10px] font-bold uppercase tracking-[0.2em]">Organização e Produtividade</span>
                <ArrowUpRight className="h-6 w-6 text-brand" />
              </div>
            </div>
          </motion.div>

          {/* Pillar 3: Financeiro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col group min-w-[72vw] md:min-w-0"
          >
            <div className="backdrop-blur-xl bg-white/[0.03] glass-mobile-fix p-8 md:p-10 rounded-3xl border border-white/10 hover:border-brand/40 flex-1 flex flex-col transition-all duration-500 hover:bg-white/[0.06] aspect-[4/5] md:aspect-auto">
              <div className="mb-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 group-hover:scale-110 transition-transform duration-500">
                  <BarChart3 className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">Gestão Estratégica</h3>
                <p className="text-foreground/60 font-light leading-relaxed text-sm md:text-base">
                  Transforme seus números em resultados reais através do controle de CMV e lucratividade, garantindo a saúde financeira e o crescimento sustentável do seu negócio.
                </p>
              </div>
              <div className="mt-auto pt-8 border-t border-white/5">
                <span className="text-[11px] text-brand uppercase tracking-[0.2em] font-bold">Inteligência Financeira</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
