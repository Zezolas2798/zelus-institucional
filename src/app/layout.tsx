import type { Metadata } from "next";
import { Montserrat, DM_Sans, Syncopate, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Preloader } from "@/components/layout/Preloader";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ZELUS | Consultoria Alimentar Inteligente",
  description: "A ZELUS transforma inteligência técnica em lucro operacional. Segurança de Alimentos e Gestão Financeira baseada em dados para negócios de alimentação.",
  keywords: ["consultoria alimentar", "segurança de alimentos", "gestão financeira", "controle de CMV", "restaurantes", "food service"],
  authors: [{ name: "ZELUS" }],
  themeColor: "#080808",
  openGraph: {
    title: "ZELUS | Consultoria Alimentar Inteligente",
    description: "Segurança de Alimentos e Gestão Financeira baseada em dados para blindar sua operação e maximizar seus lucros.",
    url: "https://zelus.com.br",
    siteName: "ZELUS",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZELUS | Consultoria Alimentar Inteligente",
    description: "Segurança de Alimentos e Gestão Financeira baseada em dados.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body
        className={`${montserrat.variable} ${dmSans.variable} ${syncopate.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
