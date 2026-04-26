"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface HeroServicoProps {
  title: string;
  subtitle: string;
  highlight: string;
  image: string;
  stepNumber: string;
}

export function HeroServico({ title, subtitle, highlight, image, stepNumber }: HeroServicoProps) {
  return (
    <header className="relative pt-64 pb-32 overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image 
          src={image} 
          alt={title} 
          fill
          priority
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand font-branding text-[10px] tracking-[0.5em] uppercase mb-6 block"
          >
            Metodologia ZELUS | {stepNumber}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight uppercase italic"
          >
            {title} <span className="font-light text-brand not-italic">{highlight}</span>
          </motion.h1>
        </div>
      </div>
    </header>
  );
}
