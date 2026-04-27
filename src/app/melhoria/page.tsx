import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroServico } from "@/components/sections/HeroServico";
import { Check } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LeadButton } from "@/components/ui/LeadButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melhoria Contínua | ZELUS",
  description: "Evolução e crescimento sustentável. Consolidamos os resultados e identificamos novas oportunidades para o seu negócio evoluir.",
};

export default function MelhoriaPage() {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroServico 
          title="Melhoria"
          highlight="Contínua"
          subtitle="Evolução e Crescimento Sustentável"
          image="/elementos/Card Melhoria Contínua.webp"
          stepNumber="04"
        />

        {/* Article Content */}
        <section className="bg-paper relative py-24 min-h-screen overflow-hidden">
          <div className="absolute inset-0 pointer-events-none paper-texture z-0"></div>
          
          <article className="max-w-[800px] mx-auto px-6 relative z-10 text-lg md:text-xl font-light text-ink/90">
            
            <p className="font-medium text-2xl md:text-3xl text-ink mb-12 leading-relaxed">
              A consultoria não termina na implementação. Nesta fase, focamos em consolidar os resultados alcançados e identificar novas oportunidades para que o seu negócio continue evoluindo e lucrando cada vez mais.
            </p>

            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">O que entregamos nesta etapa?</h2>

            <div className="space-y-12 my-12">
              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Mensuração de Impacto</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Analisamos os indicadores de sucesso, como redução de desperdícios, aumento da produtividade e conformidade sanitária.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Relatório de Resultados</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Uma apresentação clara das transformações conquistadas, reforçando o valor do investimento realizado.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Identificação de Novas Oportunidades</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Com a casa em ordem, olhamos para o futuro. Podemos explorar novos serviços, como expansão de cardápio, rotulagem nutricional ou novos controles de gestão.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Manutenção da Cultura</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Garantimos que as boas práticas se tornem um hábito permanente, evitando que a operação retroceda.</p>
              </div>
            </div>


            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">O Ciclo do Sucesso</h2>

            <p className="text-ink/80">
              Nosso objetivo é transformar sua empresa em uma referência de qualidade e eficiência. A melhoria contínua garante que você esteja sempre à frente do mercado, pronto para novos desafios e conquistas.
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
