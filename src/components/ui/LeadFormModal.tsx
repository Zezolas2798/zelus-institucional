"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    consentimento: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to secure server-side API route
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome_responsavel: formData.nome_responsavel,
          telefone: formData.telefone,
          segmento: formData.segmento,
          desafio_principal: formData.desafio_principal,
        }),
      });

      if (!res.ok) {
        // Don't expose internal error details to console
      }

      // Redirect to thank-you page
      router.push("/obrigado");
      onClose();

    } catch {
      // Silent fail — user already redirected or can retry
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
                  <option value="Restaurante / Bistrô">Restaurante / Bistrô</option>
                  <option value="Hamburgueria / Fast Food">Hamburgueria / Fast Food</option>
                  <option value="Pizzaria">Pizzaria</option>
                  <option value="Padaria / Confeitaria">Padaria / Confeitaria</option>
                  <option value="Café / Cafeteria">Café / Cafeteria</option>
                  <option value="Buffet / Eventos">Buffet / Eventos</option>
                  <option value="Cozinha Industrial">Cozinha Industrial</option>
                  <option value="Refeitório Corporativo">Refeitório Corporativo</option>
                  <option value="Indústria de Alimentos">Indústria de Alimentos</option>
                  <option value="Supermercado">Supermercado</option>
                  <option value="Açougue / Peixaria">Açougue / Peixaria</option>
                  <option value="Hortifruti">Hortifruti</option>
                  <option value="Hotelaria">Hotelaria</option>
                  <option value="Escola / Creche">Escola / Creche</option>
                  <option value="Hospital / Clínica">Hospital / Clínica</option>
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

              <div className="flex items-start gap-3 mt-4 mb-2">
                <input
                  type="checkbox"
                  id="consentimento"
                  required
                  checked={formData.consentimento}
                  onChange={(e) => setFormData({ ...formData, consentimento: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-white/10 bg-background text-brand focus:ring-brand accent-brand shrink-0"
                />
                <label htmlFor="consentimento" className="text-xs text-text-muted leading-relaxed">
                  Concordo com o tratamento dos meus dados para contato comercial, de acordo com a{" "}
                  <Link href="/privacidade" onClick={onClose} className="text-brand hover:underline">
                    Política de Privacidade
                  </Link>.
                </label>
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
