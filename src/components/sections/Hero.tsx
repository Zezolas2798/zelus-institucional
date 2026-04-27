import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { LeadButton } from "../ui/LeadButton";
import { ScrollReveal } from "../animations/ScrollReveal";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/elementos/Design sem nome (3).webp"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Background Overlay - Reduzido para maior nitidez */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        {/* Camada de Gradiente Suave para Contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
        <ScrollReveal
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-brand font-medium tracking-wider uppercase text-sm mb-6 block">
            Consultoria estratégica em segurança de alimentos e gestão financeira
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal text-foreground/80 tracking-tight mb-8 leading-tight drop-shadow-lg">
            O lucro do seu negócio se constrói com
          </h1>

          <div className="flex items-center justify-center gap-4 md:gap-5 mt-4 mb-16">
            <div className="relative h-12 sm:h-16 md:h-20 lg:h-24 w-auto aspect-square">
              <Image 
                src="/logos/zelus-icon-official.svg" 
                alt="ZELUS Icon" 
                fill
                priority
                className="object-contain brightness-0 invert" 
              />
            </div>
            <span className="font-branding text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground font-bold tracking-[0.2em] uppercase leading-none drop-shadow-2xl">
              ZELUS
            </span>
          </div>

          <ScrollReveal
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <LeadButton className="px-12 py-4 bg-brand text-[#050505] font-bold rounded-full hover:bg-[#ff7a77] transition-all duration-300 shadow-xl shadow-brand/20 hover:scale-105">
              Falar com especialista
            </LeadButton>
          </ScrollReveal>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <ScrollReveal
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted flex flex-col items-center gap-2"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </ScrollReveal>
    </section>
  );
}
