"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formatPhone = (value: string) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 3) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  }
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
};

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome_responsavel: "",
    telefone: "",
    segmento: "",
    desafio_principal: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Salvar no Supabase
      const { error } = await supabase.from("leads").insert([
        {
          origem: "Site",
          status: "Novo",
          nome_responsavel: formData.nome_responsavel,
          telefone: formData.telefone,
          segmento: formData.segmento,
          desafio_principal: formData.desafio_principal,
        },
      ]);

      if (error) {
        console.error("Erro ao salvar lead:", error);
        // Mesmo com erro, não vamos bloquear o cliente de ir pro WhatsApp
      }

      // 2. Montar mensagem pré-preenchida pro WhatsApp (opcional com QR, mas vamos usar o link direto solicitado)
      const text = `Olá, equipe ZELUS! Meu nome é ${formData.nome_responsavel}, sou do segmento de ${formData.segmento}. Gostaria de entender como a consultoria de vocês pode me ajudar com o seguinte desafio: ${formData.desafio_principal}.`;
      const waUrl = `https://wa.me/qr/2WOCVA4LV4JIO1?text=${encodeURIComponent(text)}`;

      // 3. Redirecionar para página de obrigado
      router.push("/obrigado");
      
      // Fechar modal
      onClose();

    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-surface border border-white/10 rounded-2xl shadow-2xl z-[100] p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-2 font-syncopate">Falar com um Especialista</h2>
            <p className="text-sm text-text-muted mb-6">
              Para um atendimento mais rápido e preciso, conte-nos um pouco sobre a sua operação antes de irmos para o WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Nome do Responsável</label>
                <input
                  required
                  type="text"
                  value={formData.nome_responsavel}
                  onChange={(e) => setFormData({ ...formData, nome_responsavel: e.target.value })}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Telefone / WhatsApp</label>
                <input
                  required
                  type="tel"
                  maxLength={15}
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: formatPhone(e.target.value) })}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Segmento de Atuação</label>
                <select
                  required
                  value={formData.segmento}
                  onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors appearance-none"
                >
                  <option value="" disabled>Selecione seu segmento...</option>
                  <option value="Restaurante">Restaurante</option>
                  <option value="Hamburgueria">Hamburgueria</option>
                  <option value="Padaria / Confeitaria">Padaria / Confeitaria</option>
                  <option value="Indústria de Alimentos">Indústria de Alimentos</option>
                  <option value="Cozinha Industrial">Cozinha Industrial / Refeitório</option>
                  <option value="Supermercado">Supermercado (Açougue, Frios)</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Principal Desafio Hoje</label>
                <textarea
                  required
                  rows={3}
                  value={formData.desafio_principal}
                  onChange={(e) => setFormData({ ...formData, desafio_principal: e.target.value })}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="Ex: Quero padronizar meus processos, estou perdendo muito dinheiro com desperdício, quero me preparar para a vigilância..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-brand text-background font-bold px-6 py-4 rounded-xl hover:bg-brand/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? "Conectando..." : "Ir para o WhatsApp"}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
