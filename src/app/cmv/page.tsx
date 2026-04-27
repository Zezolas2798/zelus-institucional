import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroServico } from "@/components/sections/HeroServico";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LeadButton } from "@/components/ui/LeadButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMV Descontrolado | ZELUS",
  description: "Onde o seu lucro está escorrendo? Identificamos e eliminamos desperdícios para aumentar sua margem de lucro real.",
};

export default function CMVPage() {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroServico 
          title="CMV"
          highlight="Descontrolado"
          subtitle="Onde o seu lucro está escorrendo?"
          image="/elementos/Gemini_Generated_Image_lpbfp7lpbfp7lpbf (1).webp"
          stepNumber="01"
        />

        {/* Article Content */}
        <section className="bg-paper relative py-24 min-h-screen overflow-hidden">
          <div className="absolute inset-0 pointer-events-none paper-texture z-0"></div>
          
          <article className="max-w-[800px] mx-auto px-6 relative z-10 text-lg md:text-xl font-light text-ink/90">
            
            <p className="font-medium text-2xl md:text-3xl text-ink mb-12 leading-relaxed">
              CMV Descontrolado: Onde o seu lucro está escorrendo?
            </p>

            <p className="mb-12">
              O Custo de Mercadoria Vendida (CMV) é o coração financeiro do seu negócio. Quando ele está alto ou sem controle, você pode estar vendendo muito e, ainda assim, não ver a cor do dinheiro no final do mês.
            </p>

            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">Como resolvemos esse desafio:</h2>

            <div className="space-y-12 my-12">
              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Fichas Técnicas Precisas</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Padronizamos cada prato para que você saiba exatamente quanto gasta e quanto lucra em cada venda. Sem "olhômetro"!</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Controle de Desperdícios</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Identificamos falhas no armazenamento e na manipulação que fazem insumos caros irem direto para o lixo.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Gestão de Compras e Estoque</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Implementamos processos para evitar compras desnecessárias e garantir que o seu dinheiro não fique parado em prateleiras.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Engenharia de Cardápio</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Analisamos quais itens realmente trazem margem e quais estão apenas ocupando espaço, otimizando sua lucratividade.</p>
              </div>
            </div>


            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">O Impacto no seu Bolso</h2>

            <p>
              Nossa consultoria não apenas aponta o erro, ela implementa a solução. O objetivo é reduzir custos operacionais e aumentar a margem de lucro real, garantindo a saúde financeira do seu negócio.
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
