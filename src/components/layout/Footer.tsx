import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-white/5 text-center relative overflow-hidden">
      <div className="absolute inset-0 paper-texture opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative h-8 w-8 mx-auto mb-6 opacity-30 brightness-0 invert">
          <Image 
            src="/logos/zelus-icon-official.svg" 
            alt="ZELUS" 
            fill
            className="object-contain" 
          />
        </div>
        <div className="flex flex-col items-center gap-6 mb-8">
          <p className="text-text-muted/60 text-xs tracking-[0.2em] uppercase font-branding text-center">
            ZELUS | Segurança de Alimentos e Gestão para Food Service
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 text-text-muted/40 text-xs font-sans">
            <span>Campinas e Sorocaba — Interior de São Paulo</span>
            <span className="hidden md:inline">•</span>
            <a href="tel:+5515991464088" className="hover:text-primary transition-colors">(15) 99146-4088</a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:zelusfsconsultoria@gmail.com" className="hover:text-primary transition-colors">zelusfsconsultoria@gmail.com</a>
            <span className="hidden md:inline">•</span>
            <a href="https://www.instagram.com/zelus_consultoria/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@zelus_consultoria</a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 pt-6 border-t border-white/5">
          <div className="flex gap-4">
            <Link href="/privacidade" className="text-text-muted/60 hover:text-brand text-xs transition-colors">
              Política de Privacidade
            </Link>
          </div>
          <p className="text-text-muted/20 text-[9px] uppercase tracking-widest">© 2026 Zelus Consultoria de Alimentos e Negócios</p>
        </div>
      </div>
    </footer>
  );
}
