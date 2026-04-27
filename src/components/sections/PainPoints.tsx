import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../animations/ScrollReveal";

const pains = [
  {
    title: "CMV Descontrolado",
    desc: "Desperdício oculto e compras ineficientes estão corroendo sua margem de lucro mês a mês.",
    bgImage: "/elementos/Gemini_Generated_Image_lpbfp7lpbfp7lpbf (1).webp",
    link: "/cmv"
  },
  {
    title: "Risco Sanitário",
    desc: "Não conformidades com a Vigilância Sanitária que podem resultar em multas severas ou interdição do negócio.",
    bgImage: "/elementos/Gemini_Generated_Image_inb4deinb4deinb4.webp",
    link: "/risco"
  },
  {
    title: "Processos Caóticos",
    desc: "Falta de padronização na cozinha, dependência de funcionários específicos e operação estressante.",
    bgImage: "/elementos/Gemini_Generated_Image_9n25lr9n25lr9n25.webp",
    link: "/processos"
  }
];

export function PainPoints() {
  return (
    <section id="dores" className="py-20 md:py-32 relative z-10 bg-cover bg-center bg-scroll md:bg-fixed" style={{ backgroundImage: "url('/elementos/Gemini_Generated_Image_cocf2mcocf2mcocf.webp')" }}>
      <div className="absolute inset-0 bg-background/70 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Sua operação está sangrando dinheiro?
            </h2>
          </ScrollReveal>
          <ScrollReveal transition={{ delay: 0.2 }}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto font-medium">
              A ZELUS resolve o que os outros apenas apontam. Transformamos o caos em lucro.
            </p>
          </ScrollReveal>
        </div>

        <div className="mobile-carousel md:grid-cols-3 scrollbar-hide">
          {pains.map((pain, idx) => (
            <ScrollReveal
              key={idx}
              transition={{ delay: idx * 0.15 }}
              className="group relative aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-brand/30 transition-all duration-500 min-w-[78vw] md:min-w-0"
            >
              {/* Background Image */}
              <Image
                src={pain.bgImage}
                alt={pain.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-500"></div>

              {/* Link Wrapper */}
              <Link href={pain.link} className="absolute inset-0 z-30" aria-label={`Saber mais sobre ${pain.title}`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 pointer-events-none">
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tighter">
                  {pain.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-light mb-6">
                  {pain.desc}
                </p>

                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand group-hover:text-foreground transition-colors flex items-center gap-2">
                  Saiba Mais
                  <div className="w-8 h-[1px] bg-brand group-hover:bg-foreground transition-all origin-left"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
