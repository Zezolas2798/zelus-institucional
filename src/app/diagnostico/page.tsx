import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroServico } from "@/components/sections/HeroServico";
import { Check, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnóstico 360º | ZELUS",
  description: "O ponto de partida para a transformação do seu negócio. Um raio-x completo da sua operação para identificar falhas e oportunidades.",
};

export default function DiagnosticoPage() {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroServico 
          title="Diagnóstico"
          highlight="360º"
          subtitle="O ponto de partida da nossa consultoria"
          image="/elementos/Card Diagnóstico 360º.webp"
          stepNumber="01"
        />

        {/* Article Content */}
        <section className="bg-paper relative py-24 min-h-screen overflow-hidden">
          <div className="absolute inset-0 pointer-events-none paper-texture z-0"></div>
          
          <article className="max-w-[800px] mx-auto px-6 relative z-10 text-lg md:text-xl font-light text-ink/90">
            
            <p className="font-medium text-2xl md:text-3xl text-ink mb-12 leading-relaxed italic">
              Diagnóstico 360º: O ponto de partida da nossa consultoria
            </p>

            <p className="mb-12">
              Realizamos uma visita presencial para tirar um "raio-x" completo do seu negócio, observando processos, estrutura e o dia a dia da equipe em todos os turnos de operação.
            </p>

            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">Para que serve?</h2>
            
            <p className="mb-12 text-ink/80">
              O propósito é nortear todo o trabalho. Através dele, identificamos não conformidades e pontos de melhoria que muitas vezes passam despercebidos no "olhar acostumado" do cotidiano.
            </p>

            <ul className="space-y-4 my-12 list-none">
              <li className="flex items-start gap-4 border-b border-ink/5 pb-4">
                <Check className="text-brand w-5 h-5 shrink-0 mt-1" />
                <span className="text-ink">Mapear falhas em processos e manipulação.</span>
              </li>
              <li className="flex items-start gap-4 border-b border-ink/5 pb-4">
                <Check className="text-brand w-5 h-5 shrink-0 mt-1" />
                <span className="text-ink">Entender a dinâmica real da equipe.</span>
              </li>
              <li className="flex items-start gap-4 border-b border-ink/5 pb-4">
                <Check className="text-brand w-5 h-5 shrink-0 mt-1" />
                <span className="text-ink">Basear a criação de um Plano de Trabalho exclusivo e viável.</span>
              </li>
            </ul>


            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">Quais os benefícios?</h2>

            <div className="space-y-12 my-12">
              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Visão Sistêmica</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Enxergamos além da legislação, focando em resultados práticos e organização.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Clareza Visual</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Utilizamos fotos reais para que você veja exatamente onde estão os gargalos.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Segurança e Economia</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Identificamos onde você pode estar perdendo dinheiro ou correndo riscos desnecessários.</p>
              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-ink/10 text-center">
              <a 
                href="https://wa.me/qr/2WOCVA4LV4JIO1" 
                target="_blank" 
                className="inline-flex items-center gap-4 bg-brand text-background px-12 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-brand/20"
              >
                Falar com especialista
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </article>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
