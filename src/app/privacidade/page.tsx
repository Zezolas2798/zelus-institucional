import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | ZELUS Consultoria",
  description: "Política de Privacidade da ZELUS Consultoria de Alimentos e Negócios.",
};

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
        <div className="absolute inset-0 paper-texture opacity-5 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight font-syncopate">
            Política de <span className="text-brand">Privacidade</span>
          </h1>
          
          <div className="prose prose-invert max-w-none text-ink/80 prose-headings:text-foreground prose-a:text-brand hover:prose-a:text-brand/80">
            <p className="lead text-lg mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introdução</h2>
              <p className="mb-4">
                A <strong>ZELUS Consultoria de Alimentos e Negócios</strong> ("nós", "nosso", "nossa") está comprometida com a proteção e a privacidade dos seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos as suas informações quando você utiliza o nosso site (zelus.com.br).
              </p>
              <p>
                Tratamos os seus dados pessoais de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Controlador de Dados</h2>
              <p className="mb-4">
                Para efeitos da LGPD, a ZELUS atua como controladora dos dados pessoais coletados por meio deste site. 
              </p>
              <p>
                Caso tenha dúvidas sobre esta política ou queira exercer seus direitos, você pode contatar nosso Encarregado pelo Tratamento de Dados Pessoais (DPO) através do e-mail: <strong>zelusfsconsultoria@gmail.com</strong>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Dados Pessoais que Coletamos e Finalidade</h2>
              <p className="mb-4">Coletamos informações das seguintes formas:</p>
              
              <h3 className="text-xl font-semibold mb-2 mt-6 text-foreground">3.1. Dados fornecidos ativamente pelo usuário (Formulário de Contato)</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>O que coletamos:</strong> Nome do responsável, número de telefone/WhatsApp, segmento de atuação e principal desafio do negócio.</li>
                <li><strong>Finalidade:</strong> Retornar o seu contato para fins comerciais, agendar reuniões de diagnóstico e oferecer nossos serviços de consultoria.</li>
                <li><strong>Base legal:</strong> Consentimento do titular (Art. 7º, I da LGPD).</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 mt-6 text-foreground">3.2. Dados coletados automaticamente (Analytics)</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>O que coletamos:</strong> Informações sobre como você navega no site (páginas visitadas, tempo de permanência, cliques) através do Google Analytics. Os dados são anonimizados ou pseudonimizados.</li>
                <li><strong>Finalidade:</strong> Entender o comportamento dos visitantes para melhorar o conteúdo do site e nossas campanhas de marketing.</li>
                <li><strong>Base legal:</strong> Consentimento do titular (Art. 7º, I da LGPD), coletado através do nosso Banner de Cookies.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Compartilhamento e Transferência Internacional de Dados</h2>
              <p className="mb-4">
                Nós não vendemos os seus dados. Compartilhamos suas informações apenas com prestadores de serviços de tecnologia essenciais para a operação do site:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Supabase:</strong> Utilizamos como banco de dados para armazenar os formulários de contato.</li>
                <li><strong>Google Analytics:</strong> Utilizamos para análise de tráfego.</li>
                <li><strong>Vercel:</strong> Utilizamos para hospedagem do site.</li>
              </ul>
              <p>
                Alguns desses parceiros (como Supabase e Google) podem processar e armazenar dados em servidores localizados fora do Brasil, como nos Estados Unidos. Esta transferência internacional é realizada apenas para empresas que demonstram estar em conformidade com leis de proteção de dados adequadas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Período de Retenção</h2>
              <p className="mb-4">
                Os dados pessoais coletados via formulário de contato (leads) são armazenados em nossa base por um período de <strong>2 (dois) anos</strong> a partir do último contato ou interação. Após este prazo, caso não haja contratação de serviços ou nova interação, os dados serão excluídos de forma segura.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Seus Direitos como Titular</h2>
              <p className="mb-4">
                A LGPD garante a você diversos direitos relacionados aos seus dados pessoais, incluindo:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
                <li>Portabilidade dos dados a outro fornecedor;</li>
                <li>Eliminação dos dados tratados com consentimento;</li>
                <li>Revogação do consentimento a qualquer momento.</li>
              </ul>
              <p>
                Para exercer qualquer um desses direitos, envie um e-mail para <strong>zelusfsconsultoria@gmail.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
