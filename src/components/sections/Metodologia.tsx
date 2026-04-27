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
      {/* Main Background Image - Increased visibility */}
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

        <div className="relative min-h-[500px] md:min-h-[600px]">
          {/* SVG Zigzag Line (Desktop only) - Connecting Numbers statically */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-10">
            <svg viewBox="0 0 1280 600" className="w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M 84,40 L 404,200 L 724,40 L 1044,200"
                fill="none"
                stroke="var(--brand)"
                strokeWidth="2.5"
                strokeDasharray="8 4"
                initial={{ pathLength: 1, opacity: 0.4 }}
              />
              {/* Connector Points exactly at numbers */}
              <circle cx="84" cy="40" r="6" fill="var(--brand)" className="opacity-80" />
              <circle cx="404" cy="200" r="6" fill="var(--brand)" className="opacity-80" />
              <circle cx="724" cy="40" r="6" fill="var(--brand)" className="opacity-80" />
              <circle cx="1044" cy="200" r="6" fill="var(--brand)" className="opacity-80" />
            </svg>
          </div>

          <div className="mobile-carousel md:grid md:grid-cols-4 md:gap-4 md:justify-items-center scrollbar-hide md:items-start relative z-20">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col items-center md:items-start text-center md:text-left transition-all duration-700 min-w-[85vw] md:min-w-0 px-4 md:px-0 ${
                    !isEven ? 'md:mt-40' : ''
                  }`}
                >
                  <ScrollReveal transition={{ delay: idx * 0.1 }}>
                    <Link href={step.link} className="group relative block">
                      {/* Number tag - Exact connection point */}
                      <span className="absolute -top-3 -left-3 z-30 w-8 h-8 bg-surface border border-brand rounded-full flex items-center justify-center text-[10px] font-branding text-brand group-hover:bg-brand group-hover:text-background transition-all duration-500 shadow-[0_0_20px_rgba(254,97,94,0.4)]">
                        {step.num}
                      </span>
                      
                      {/* Card Image */}
                      <div className="relative w-36 h-36 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-white/10 group-hover:border-brand transition-all duration-700 bg-surface/30 backdrop-blur-sm shadow-2xl">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80"></div>
                      </div>

                      {/* Content Below */}
                      <div className="mt-8 md:pr-4">
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
      </div>
    </section>
  );
}
