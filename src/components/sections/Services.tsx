"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LeadFormModal } from "../ui/LeadFormModal";
import { 
  BarChart3, 
  Settings, 
  BookOpen, 
  ShieldCheck, 
  FileText, 
  FlaskConical, 
  ChevronDown, 
  X, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    title: "Financeiro",
    icon: <BarChart3 className="h-6 w-6" />,
    desc: "Engenharia de cardápio e precificação matemática para máxima rentabilidade.",
    image: "/elementos/Gemini_Generated_Image_lpbfp7lpbfp7lpbf (1).webp",
    subServices: [
      "Precificação correta dos produtos.",
      "Definição de combos promocionais para datas especiais.",
      "Engenharia de cardápio.",
      "Auxílio para empresas participarem de licitações do governo (documentos, ajustes nas receitas, etc)."
    ]
  },
  {
    title: "Eficiência Operacional",
    icon: <Settings className="h-6 w-6" />,
    desc: "Otimização de fluxos, layout e controle rigoroso de estoque e desperdícios.",
    image: "/elementos/Card Eficiência Operacional.webp",
    subServices: [
      "Gestão de rastreabilidade para empresas que precisam implementar este controle.",
      "Planejamento de controle de estoque e validade dos alimentos.",
      "Criação de fichas técnicas (operacionais, gerenciais e de produtos).",
      "Análise e redução de desperdícios.",
      "Auxílio para selecionar os melhores fornecedores para a empresa (insumos, equipamentos, utensílios, etc).",
      "Planejamento de produção.",
      "Auxílio no reaproveitamento correto dos alimentos.",
      "Avaliação de layout quanto às regras sanitárias e fluxos.",
      "Construção de layout com base nas exigências e processos.",
      "Estruturação e orientação para cozinhas exclusivas para delivery (entregas).",
      "Escolha de embalagens que preservem a qualidade e garantam a segurança do alimento durante a entrega."
    ]
  },
  {
    title: "Treinamentos",
    icon: <BookOpen className="h-6 w-6" />,
    desc: "Capacitação técnica e estratégica para equipes e novos empreendedores.",
    image: "/elementos/Card Treinamento.webp",
    subServices: [
      "Capacitação de equipes e empresários em temas relacionados aos controles diários.",
      "Orientação personalizada para empreendedores que desejam iniciar ou melhorar seus negócios.",
      "Auxílio para uma empresa criar os padrões da franquia (manuais, procedimentos, treinamentos, etc)."
    ]
  },
  {
    title: "Qualidade e Segurança",
    icon: <ShieldCheck className="h-6 w-6" />,
    desc: "Conformidade sanitária total, auditorias e suporte regulatório completo.",
    image: "/elementos/Card Qualidade e Segurança.webp",
    subServices: [
      "Elaboração do Manual de Boas Práticas (MBP).",
      "Desenvolvimento de POPs (Procedimentos Operacionais Padrão).",
      "Desenvolvimento das IT's (Instruções de trabalho).",
      "Auditorias de qualidade para verificar se a empresa está adequada não apenas à vigilância sanitária, mas ao MAPA ou a outro requisito, como ISO, certificações, etc.",
      "Consultoria para a empresa conseguir certificações (sem glúten, orgânico, vegano, SIM, SIF, etc).",
      "Adequação às legislações vigentes.",
      "Vistorias e orientações pontuais em eventos.",
      "Avaliação de Boas Práticas de Fabricação.",
      "Auxílio na abertura de um novo negócio para que ele consiga a liberação da vigilância sanitária.",
      "Vistorias em empresas que já são franquias para verificar se estão seguindo os padrões da franquia."
    ]
  },
  {
    title: "Tabela e Rotulagem",
    icon: <FileText className="h-6 w-6" />,
    desc: "Rotulagem nutricional precisa e adequação técnica de cardápios.",
    image: "/elementos/Card Tabela e Rotulagem.webp",
    subServices: [
      "Rotulação nutricional.",
      "Criação de cardápios com sinalizadores de alergênicos."
    ]
  },
  {
    title: "Pesquisa e Desenvolvimento (P&D)",
    icon: <FlaskConical className="h-6 w-6" />,
    desc: "Inovação em produtos e análise sensorial focada no consumidor.",
    image: "/elementos/Card Pesquisa (P&D).webp",
    subServices: [
      "Análise sensorial para avaliar os produtos atuais.",
      "Cliente oculto (do local, do delivery e do atendimento).",
      "Adequação de receitas já existentes para melhorar os produtos.",
      "Auxílio na busca de tendências para o segmento.",
      "Auxílio na elaboração de cardápios de drinks, sobremesas, etc.",
      "Criação de cardápios otimizados para transporte e embalagem.",
      "Criação de cardápios personalizados para cada época do ano (verão, inverno, etc).",
      "Desenvolvimento de novos produtos para aumentar o número de itens do cardápio."
    ]
  }
];

export function Services() {
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = (service: typeof services[0]) => {
    if (activeService?.title === service.title) {
      setActiveService(null);
    } else {
      setActiveService(service);
      setTimeout(() => {
        if (detailsRef.current) {
          const yOffset = -100;
          const y = detailsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-32 relative bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand opacity-[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand font-semibold tracking-wider uppercase text-sm mb-2 block"
          >
            Nosso Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight italic uppercase"
          >
            Catálogo de Serviços
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted max-w-2xl"
          >
            Soluções personalizadas para transformar inteligência técnica em lucro real. Clique em uma categoria para explorar os serviços.
          </motion.p>
        </div>

        <div className="mobile-carousel md:grid-cols-2 lg:grid-cols-3 scrollbar-hide">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => handleServiceClick(service)}
              className={`group relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1 border ${
                activeService?.title === service.title ? 'border-brand ring-2 ring-brand/20' : 'border-white/10'
              } hover:border-brand/40 bg-surface cursor-pointer min-w-[78vw] md:min-w-0`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 transition-opacity duration-500"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-30 pointer-events-none">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-brand transition-colors uppercase tracking-tight">{service.title}</h3>
                <p className="text-[13px] text-text-muted leading-snug opacity-80 group-hover:opacity-100 transition-all duration-500 line-clamp-2">
                  {service.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-brand text-[10px] font-bold uppercase tracking-widest transition-all duration-500">
                  {activeService?.title === service.title ? 'Recolher Detalhes' : 'Ver Catálogo Completo'}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeService?.title === service.title ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Details Section */}
        <div 
          ref={detailsRef} 
          className={`mt-12 transition-all duration-700 ease-in-out overflow-hidden ${
            activeService ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {activeService && (
            <div className="relative bg-[#FDFBF7] rounded-3xl shadow-2xl overflow-hidden border border-brand/10">
              <div className="absolute inset-0 pointer-events-none opacity-[0.04] paper-texture"></div>

              {/* Detail Header */}
              <div className="relative z-10 p-6 md:p-8 border-b border-black/10 flex justify-between items-center bg-background text-foreground">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand rounded-xl shadow-lg shadow-brand/20">
                    <div className="w-6 h-6 text-background">
                      {activeService.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-brand text-[10px] font-bold uppercase tracking-[0.3em]">Catálogo Detalhado</span>
                    <h3 className="text-xl md:text-2xl font-bold uppercase italic">{activeService.title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveService(null)}
                  className="text-foreground/50 hover:text-brand transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                >
                  Fechar <X className="w-4 h-4" />
                </button>
              </div>

              {/* Detail Content */}
              <div className="relative z-10 p-6 sm:p-10 md:p-16 pb-32 md:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 sm:gap-y-6">
                  {activeService.subServices.map((sub, i) => (
                    <div 
                      key={i} 
                      className="flex gap-4 items-start group"
                    >
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-ink text-base md:text-lg font-medium leading-tight border-b border-black/5 pb-3 w-full group-hover:border-brand/30 transition-colors">
                        {sub}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-16 p-8 md:p-12 bg-background rounded-3xl text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand opacity-5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 uppercase tracking-tight italic">Pronto para transformar sua operação?</h4>
                  <p className="text-text-muted mb-8 text-base max-w-xl mx-auto opacity-80">Nossas soluções são adaptadas à realidade do seu negócio para gerar resultados imediatos.</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-3 bg-brand text-background px-10 py-5 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-brand/20 transition-all duration-300"
                  >
                    Falar com especialista <ArrowRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setActiveService(null)}
                    className="md:hidden mt-8 text-ink/40 hover:text-brand transition-colors text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 w-full"
                  >
                    <ChevronDown className="w-4 h-4 rotate-180" /> Voltar para o Catálogo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
