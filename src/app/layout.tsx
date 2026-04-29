import type { Metadata } from "next";
import Script from "next/script";
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "ZELUS",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KF618E0T6Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KF618E0T6Y');
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} ${dmSans.variable} ${syncopate.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
