import { ArrowRight } from "lucide-react";
import { LeadButton } from "../ui/LeadButton";
import { ScrollReveal } from "../animations/ScrollReveal";

export function FinalCTA() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/elementos/Gemini_Generated_Image_rcv8hgrcv8hgrcv8.webp')" }}>
      {/* Camada de sombra sólida e gradiente reforçado */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-0"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <ScrollReveal
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-6xl font-medium text-white mb-8 leading-tight drop-shadow-2xl">
            Pronto para assumir o controle?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-lg">
            Agende o <span className="text-brand font-semibold underline decoration-brand/30 decoration-2 underline-offset-8">ZELUS Scan</span>. Uma análise executiva do seu negócio para identificar vazamentos de lucro e riscos sanitários.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <LeadButton className="group px-12 py-5 bg-brand text-background font-bold rounded-full hover:bg-brand/90 transition-all duration-300 shadow-2xl shadow-brand/30 flex items-center justify-center gap-3">
              Agendar Meu Scan Agora
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </LeadButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
