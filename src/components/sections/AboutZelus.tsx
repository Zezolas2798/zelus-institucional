import { ScrollReveal } from "../animations/ScrollReveal";

export function AboutZelus() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/elementos/Gemini_Generated_Image_e9ov1ue9ov1ue9ov.webp')" }}>
      <div className="absolute inset-0 bg-background/60 z-0"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand opacity-[0.03] rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <ScrollReveal
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">A Visão ZELUS</h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-normal">
            &quot;Acreditamos que no setor de alimentação nada funciona isolado. Nossa visão é baseada no{" "}
            <strong className="text-foreground font-semibold underline decoration-brand/30 decoration-2 underline-offset-4">
              Método ZELUS
            </strong>
            , uma abordagem integrada que une segurança alimentar e gestão financeira. Entendemos sua empresa como um organismo vivo, onde a técnica e o lucro caminham juntos para criar operações{" "}
            <strong className="text-foreground font-semibold underline decoration-brand/30 decoration-2 underline-offset-4">
              independentes, seguras e altamente rentáveis
            </strong>
            .&quot;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
