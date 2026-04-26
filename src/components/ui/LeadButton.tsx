"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { LeadFormModal } from "./LeadFormModal";

interface LeadButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function LeadButton({ className, children }: LeadButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={className || "px-12 py-4 bg-brand text-background font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-brand/20"}
      >
        {children || (
          <span className="flex items-center gap-4">
            Falar com especialista
            <ArrowRight className="w-5 h-5" />
          </span>
        )}
      </button>

      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
