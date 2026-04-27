"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../animations/ScrollReveal";
import { motion } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Diagnóstico 360º",
    desc: "Imersão na sua realidade. Aplicamos checklists técnicos entregando um mapa exato de onde o dinheiro está vazando.",
    image: "/elementos/Card Diagnóstico 360º.webp",
    link: "/diagnostico"
  },
  {
    num: "02",
    title: "Planejamento e Soluções Rápidas",
    desc: "Ação imediata para estancar o ralo financeiro. Definimos KPIs para metas com ROI visível logo no início.",
    image: "/elementos/Gemini_Generated_Image_rcv8hgrcv8hgrcv8.webp",
    link: "/planejamento"
  },
  {
    num: "03",
    title: "Implementação Ativa",
    desc: "A teoria vai para a bancada. Treinamos a equipe na linha de frente e entregamos relatórios de controle gerencial.",
    image: "/elementos/Card Implementação Ativa.webp",
    link: "/implementacao"
  },
  {
    num: "04",
    title: "Melhoria Contínua",
    desc: "A operação atinge a maturidade estrutural e nos tornamos o conselho estratégico para sua evolução constante.",
    image: "/elementos/Card Melhoria Contínua.webp",
    link: "/melhoria"
  }
];

export function Metodologia() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="metodologia" ref={containerRef} className="py-24 md:py-48 relative bg-background border-y border-white/5 overflow-hidden">
      {/* Main Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/elementos/Gemini_Generated_Image_cocf2mcocf2mcocf.webp"
          alt="Zelus Methodology Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <ScrollReveal>
            <span className="text-brand font-semibold tracking-wider uppercase text-sm mb-2 block">
              Processo em 4 Etapas
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              A Metodologia ZELUS
            </h2>
          </ScrollReveal>
          <ScrollReveal transition={{ delay: 0.2 }}>
            <p className="text-text-muted text-lg font-light leading-relaxed max-w-3xl mx-auto">
              Não usamos manuais de gaveta. Entramos na sua operação para resolver problemas estruturais e garantir independência técnica e lucro.
            </p>
          </ScrollReveal>
        </div>

        {/* 
            Container with pt-16 (64px) to clear the top area. 
            The cards and SVG are relative to this container.
        */}
        <div className="mobile-carousel md:grid md:grid-cols-4 md:gap-4 md:justify-items-center scrollbar-hide md:items-start relative z-20 overflow-x-auto min-h-[500px] md:min-h-[650px] pt-16">
          
          {/* SVG Connector Layer */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-visible min-w-max md:min-w-0">
            {/* 
                Desktop SVG 
                X: 160, 480, 800, 1120 (Column centers)
                Y: 52 (pt-16 - 12px for tag), 212 (pt-16 + mt-40 - 12px)
            */}
            <svg viewBox="0 0 1280 650" className="hidden md:block w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M 160,52 L 480,212 L 800,52 L 1120,212"
                fill="none"
                stroke="var(--brand)"
                strokeWidth="2.5"
                strokeDasharray="8 4"
                initial={{ pathLength: 1, opacity: 0.4 }}
              />
              <circle cx="160" cy="52" r="6" fill="var(--brand)" className="opacity-80" />
              <circle cx="480" cy="212" r="6" fill="var(--brand)" className="opacity-80" />
              <circle cx="800" cy="52" r="6" fill="var(--brand)" className="opacity-80" />
              <circle cx="1120" cy="212" r="6" fill="var(--brand)" className="opacity-80" />
            </svg>

            {/* 
                Mobile SVG 
                X: 164, 468, 772, 1076 (Card centers in 280px + 24px gap flow)
                Y: 52 (pt-16 - 12px), 148 (pt-16 + mt-24 - 12px)
            */}
            <div className="md:hidden flex h-full" style={{ width: '1240px' }}>
              <svg viewBox="0 0 1240 650" className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M 164,52 L 468,148 L 772,52 L 1076,148"
                  fill="none"
                  stroke="var(--brand)"
                  strokeWidth="3"
                  strokeDasharray="10 5"
                  className="opacity-40"
                />
                <circle cx="164" cy="52" r="8" fill="var(--brand)" />
                <circle cx="468" cy="148" r="8" fill="var(--brand)" />
                <circle cx="772" cy="52" r="8" fill="var(--brand)" />
                <circle cx="1076" cy="148" r="8" fill="var(--brand)" />
              </svg>
            </div>
          </div>

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center transition-all duration-700 min-w-[280px] md:min-w-0 px-6 md:px-0 relative z-20 ${
                  !isEven ? 'mt-24 md:mt-40' : 'mt-0'
                }`}
              >
                <ScrollReveal transition={{ delay: idx * 0.1 }}>
                  <Link href={step.link} className="group relative block text-center">
                    {/* Number tag - Centered vertically and horizontally at the exact point */}
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 w-8 h-8 bg-surface border border-brand rounded-full flex items-center justify-center text-[10px] font-branding text-brand group-hover:bg-brand group-hover:text-background transition-all duration-500 shadow-[0_0_20px_rgba(254,97,94,0.4)]">
                      {step.num}
                    </span>
                    
                    {/* Card Image */}
                    <div className="relative w-40 h-40 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-white/10 group-hover:border-brand transition-all duration-700 bg-surface/30 backdrop-blur-sm shadow-2xl mx-auto">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80"></div>
                    </div>

                    {/* Content Below */}
                    <div className="mt-8 px-2">
                      <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-tight group-hover:text-brand transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-text-muted leading-relaxed font-light mb-4 line-clamp-3">
                        {step.desc}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-brand group-hover:text-foreground transition-colors">
                        Saber mais
                        <div className="w-4 h-[1px] bg-brand group-hover:w-8 group-hover:bg-foreground transition-all"></div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
