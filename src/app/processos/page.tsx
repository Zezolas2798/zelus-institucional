import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroServico } from "@/components/sections/HeroServico";
import { Check, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Padronização e Processos Operacionais | ZELUS",
  description: "Crie uma operação independente e eficiente. Padronizamos sua produção para garantir qualidade constante e liberdade para o dono.",
};

export default function ProcessosPage() {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroServico 
          title="Processos"
          highlight="Caóticos"
          subtitle="Da Desorganização à Liberdade"
          image="/elementos/Card Implementação Ativa.webp"
          stepNumber="04"
        />

        {/* Article Content */}
        <section className="bg-paper relative py-24 min-h-screen overflow-hidden">
          <div className="absolute inset-0 pointer-events-none paper-texture z-0"></div>
          
          <article className="max-w-[800px] mx-auto px-6 relative z-10 text-lg md:text-xl font-light text-ink/90">
            
            <p className="font-medium text-2xl md:text-3xl text-ink mb-12 leading-relaxed italic">
              O caos operacional é um dos maiores ladrões de tempo e lucro. Quando a equipe não sabe exatamente o que fazer, o dono do negócio vira "escravo" da operação.
            </p>

            <p className="mb-12">
              Padronizar não é burocratizar. É criar um sistema onde a qualidade não dependa de pessoas específicas, mas sim de processos bem desenhados e executados com maestria.
            </p>


            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">Como resolvemos isso:</h2>

            <div className="space-y-12 my-12">
              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Mapeamento de Fluxos</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Identificamos gargalos e reorganizamos o layout para que a produção seja mais rápida e eficiente.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Cultura e Engajamento</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Treinamos a equipe para que entendam o impacto do seu trabalho, gerando autonomia e responsabilidade.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Padronização Inteligente</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Criamos processos que funcionam na vida real, permitindo que o negócio rode com excelência, mesmo sem a presença constante do dono.</p>
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
