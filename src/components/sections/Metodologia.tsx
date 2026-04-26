import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../animations/ScrollReveal";

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
  return (
    <section id="metodologia" className="py-20 md:py-32 relative bg-background border-y border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand opacity-[0.015] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <ScrollReveal
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand font-semibold tracking-wider uppercase text-sm mb-2 block"
          >
            Processo em 4 Etapas
          </ScrollReveal>
          <ScrollReveal
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">A Metodologia ZELUS</h2>
          </ScrollReveal>
          <ScrollReveal
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted max-w-3xl mx-auto"
          >
            <p className="text-lg text-text-muted">
              Não usamos manuais de gaveta. Entramos na sua operação para resolver problemas estruturais e garantir independência técnica e lucro.
            </p>
          </ScrollReveal>
        </div>

        <div className="mobile-carousel md:grid-cols-2 lg:grid-cols-4 scrollbar-hide">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative aspect-[3/2] overflow-hidden rounded-2xl border border-white/10 hover:border-brand/40 transition-all duration-500 min-w-[70vw] md:min-w-0"
            >
              {/* Background Image */}
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-all duration-700 group-hover:scale-110 opacity-50"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-500"></div>

              {/* Link Wrapper */}
              <Link href={step.link} className="absolute inset-0 z-30" aria-label={`Saber mais sobre ${step.title}`} />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left pointer-events-none">
                <h3 className="text-lg font-medium text-foreground mb-1 group-hover:text-brand transition-colors">
                  {step.title}
                </h3>
                <p className="text-[12px] text-foreground/70 leading-snug opacity-90 group-hover:opacity-100 transition-all duration-500 mb-3">
                  {step.desc}
                </p>
                <div className="text-[9px] uppercase tracking-[0.2em] text-brand/80 group-hover:text-brand font-bold flex items-center gap-1.5 transition-colors">
                  Saiba Mais
                  <span className="w-4 h-[1px] bg-brand/30 group-hover:w-6 group-hover:bg-brand transition-all duration-300"></span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
