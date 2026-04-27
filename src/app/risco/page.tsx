import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroServico } from "@/components/sections/HeroServico";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LeadButton } from "@/components/ui/LeadButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risco Sanitário | ZELUS",
  description: "Proteja seu negócio e seus clientes. Garantimos conformidade sanitária total para eliminar riscos de multas e interdições.",
};

export default function RiscoPage() {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroServico 
          title="Risco"
          highlight="Sanitário"
          subtitle="Proteja seu Negócio e seus Clientes"
          image="/elementos/Gemini_Generated_Image_inb4deinb4deinb4.webp"
          stepNumber="02"
        />

        {/* Article Content */}
        <section className="bg-paper relative py-24 min-h-screen overflow-hidden">
          <div className="absolute inset-0 pointer-events-none paper-texture z-0"></div>
          
          <article className="max-w-[800px] mx-auto px-6 relative z-10 text-lg md:text-xl font-light text-ink/90">
            
            <p className="font-medium text-2xl md:text-3xl text-ink mb-12 leading-relaxed">
              Risco Sanitário: Proteja seu Negócio e seus Clientes
            </p>

            <p className="mb-12">
              Mais do que cumprir a lei, garantir a segurança dos alimentos é proteger a reputação da sua marca e a saúde de quem confia no seu trabalho. O risco sanitário não é apenas sobre multas, é sobre a viabilidade do seu negócio.
            </p>

            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">Como resolvemos esse desafio:</h2>

            <div className="space-y-12 my-12">
              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Adequação às Normas (RDC)</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Garantimos que seu estabelecimento cumpra todas as exigências da Vigilância Sanitária, independente do porte.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Prevenção de Multas e Interdições</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Atuamos preventivamente para evitar gastos inesperados e paralisações que geram prejuízos financeiros e de imagem.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Segurança Alimentar Real</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Implementamos controles de temperatura, higiene e armazenamento que eliminam riscos de contaminação e garantem um alimento seguro.</p>
              </div>

              <div className="border-l-2 border-brand/30 pl-8">
                <h3 className="font-bold text-xl mb-3 text-ink">Documentação Obrigatória</h3>
                <p className="text-base md:text-lg opacity-80 mb-0 text-ink/80">Elaboramos o Manual de Boas Práticas e os POPs de forma personalizada, refletindo a realidade da sua operação.</p>
              </div>
            </div>

            <h2 className="text-brand font-branding text-xs tracking-[0.3em] uppercase mb-8">Tranquilidade para Crescer</h2>

            <p>
              Com a nossa consultoria, você deixa de temer a fiscalização e passa a ter orgulho da sua operação. Transformamos as regras sanitárias em processos eficientes que geram confiança e valor para o seu cliente.
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
