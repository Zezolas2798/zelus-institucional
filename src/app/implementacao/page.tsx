import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroServico } from "@/components/sections/HeroServico";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LeadButton } from "@/components/ui/LeadButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implementação Ativa | ZELUS",
  description: "Transformando planejamento em realidade com treinamentos práticos e padronização operacional.",
};

export default function ImplementacaoPage() {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroServico 
          title="Implementação"
          highlight="Ativa"
          subtitle="Saímos do papel e partimos para a execução. Construindo uma nova cultura de excelência."
          image="/elementos/Card Implementação Ativa.webp"
          stepNumber="03"
        />

        {/* Article Content */}
        <section className="bg-paper relative py-24 min-h-screen overflow-hidden">
          <div className="absolute inset-0 pointer-events-none paper-texture z-0"></div>
          
          <article className="max-w-[800px] mx-auto px-6 relative z-10 text-lg md:text-xl font-light text-ink/90">
            
            <p className="font-medium text-2xl md:text-3xl text-ink mb-12 leading-relaxed italic">
              Nesta fase, saímos do papel e partimos para a execução. É o momento de construir uma nova cultura no seu negócio, garantindo que cada processo seja seguido com excelência.
            </p>

            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">O que entregamos nesta etapa?</h2>

            <div className="space-y-12 my-12">
              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Treinamentos Práticos</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Capacitamos sua equipe para que entendam o "porquê" de cada mudança, gerando conscientização e engajamento.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Documentação Viva</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Construímos o Manual de Boas Práticas, POPs e planilhas de controle baseados na realidade do seu dia a dia, e não apenas para "cumprir tabela".</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Padronização e Controle</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Implementamos ferramentas como fichas técnicas e tabelas nutricionais para garantir a qualidade e o lucro de cada produto.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 italic text-ink">Acompanhamento Periódico</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Estamos presentes para ajustar processos em tempo real e garantir que os resultados sejam sustentáveis.</p>
              </div>
            </div>


            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">Diferencial da nossa Consultoria de Impacto</h2>

            <p>
              Não entregamos apenas documentos; entregamos mudança de comportamento. Nosso acompanhamento na linha de frente garante que a equipe se sinta segura para executar as novas rotinas.
            </p>

            <div className="mt-24 pt-12 border-t border-ink/10 text-center">
              <LeadButton />
            </div>
          </article>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
