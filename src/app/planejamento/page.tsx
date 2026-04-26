import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroServico } from "@/components/sections/HeroServico";
import { Check, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planejamento e Quick Wins | ZELUS",
  description: "Transformamos o diagnóstico em ações práticas. Implementamos soluções rápidas (Quick Wins) para alívio imediato na sua operação.",
};

export default function PlanejamentoPage() {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroServico 
          title="Planejamento e"
          highlight="Soluções Rápidas"
          subtitle="Transformando informações em ações práticas"
          image="/elementos/Card Planejamento e Quick Wins.png"
          stepNumber="02"
        />

        {/* Article Content */}
        <section className="bg-paper relative py-24 min-h-screen overflow-hidden">
          <div className="absolute inset-0 pointer-events-none paper-texture z-0"></div>
          
          <article className="max-w-[800px] mx-auto px-6 relative z-10 text-lg md:text-xl font-light text-ink/90">
            
            <p className="font-medium text-2xl md:text-3xl text-ink mb-12 leading-relaxed">
              Após o diagnóstico, transformamos as informações coletadas em um Plano de Trabalho claro e detalhado. Enquanto planejamos mudanças estruturais, implementamos as Quick Wins — soluções rápidas que trazem alívio imediato para a sua operação.
            </p>

            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">O que esperar desta etapa?</h2>

            <div className="space-y-12 my-12">
              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Plano de Trabalho Personalizado</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Um cronograma com ações, responsáveis e prazos, focado nas dores reais do seu negócio.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Soluções Rápidas (Quick Wins)</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Ajustes práticos de baixo custo e alto impacto, como reorganização de layout, padronização de etiquetas ou melhorias em processos de manipulação.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Engajamento da Equipe</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Resultados rápidos motivam os colaboradores e mostram que a mudança é possível e benéfica para todos.</p>
              </div>
            </div>


            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">Por que isso é importante?</h2>

            <p className="text-ink/80">
              O objetivo é que você veja valor desde o primeiro dia. As soluções rápidas eliminam gargalos urgentes e geram economia, enquanto o planejamento garante que o negócio cresça com segurança e organização a longo prazo.
            </p>

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
