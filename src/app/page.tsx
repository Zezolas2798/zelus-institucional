import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Metodologia } from "@/components/sections/Metodologia";
import { AboutZelus } from "@/components/sections/AboutZelus";
import { Solution360 } from "@/components/sections/Solution360";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      
      <main className="flex flex-col w-full">
        <Hero />
        <AboutZelus />
        <PainPoints />
        <Solution360 />
        <Metodologia />
        <Services />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
