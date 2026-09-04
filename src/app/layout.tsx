import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, DM_Sans, Syncopate, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Preloader } from "@/components/layout/Preloader";
import { CookieBanner } from "@/components/layout/CookieBanner";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ZELUS Consultoria de Alimentos e Negócios",
  "description": "Consultoria especializada em segurança de alimentos e gestão financeira para restaurantes, bares e food service em Campinas e Sorocaba.",
  "url": "https://zelus.com.br",
  "telephone": "+55-15-99146-4088",
  "email": "zelusfsconsultoria@gmail.com",
  "areaServed": [
    {
      "@type": "City",
      "name": "Campinas",
      "containedInPlace": { "@type": "State", "name": "São Paulo" }
    },
    {
      "@type": "City",
      "name": "Sorocaba",
      "containedInPlace": { "@type": "State", "name": "São Paulo" }
    }
  ],
  "serviceType": [
    "Consultoria de Alimentos",
    "Segurança Alimentar",
    "Gestão Financeira para Restaurantes",
    "Controle de CMV",
    "Engenharia de Cardápio",
    "Manual de Boas Práticas",
    "Rotulagem Nutricional",
    "Auditorias de Qualidade",
    "Treinamento em Boas Práticas"
  ],
  "priceRange": "$$",
  "image": "https://zelus.com.br/images/og-image.png",
  "logo": "https://zelus.com.br/logos/zelus-icon-official.svg",
  "sameAs": [
    "https://www.instagram.com/zelus_consultoria/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-15-99146-4088",
    "contactType": "sales",
    "availableLanguage": "Portuguese"
  }
};

export const metadata: Metadata = {
  title: "ZELUS | Consultoria de Alimentos em Campinas e Sorocaba",
  description: "Consultoria especializada em segurança de alimentos e gestão financeira para restaurantes, bares e food service em Campinas, Sorocaba e região. Diagnóstico 360° gratuito.",
  keywords: [
    "consultoria de alimentos", "segurança alimentar", "gestão financeira restaurante",
    "controle de CMV", "food service", "engenharia de cardápio", "manual de boas práticas",
    "rotulagem nutricional", "ficha técnica de alimentos", "auditoria sanitária"
  ],
  authors: [{ name: "ZELUS" }],
  themeColor: "#080808",
  openGraph: {
    title: "ZELUS | Consultoria de Alimentos em Campinas e Sorocaba",
    description: "Segurança de Alimentos e Gestão Financeira para restaurantes, bares e food service em Campinas e Sorocaba. Diagnóstico 360° gratuito.",
    url: "https://zelus.com.br",
    siteName: "ZELUS",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://zelus.com.br/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZELUS - Consultoria em Serviços de A&B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZELUS | Consultoria de Alimentos em Campinas e Sorocaba",
    description: "Segurança de Alimentos e Gestão Financeira para food service em Campinas e Sorocaba.",
    images: ["https://zelus.com.br/images/og-image.png"],
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
  alternates: {
    canonical: "https://zelus.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KF618E0T6Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Define config to prevent sending hits before consent
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
            
            // Listen for the custom event from CookieBanner
            window.addEventListener('cookiesAccepted', function() {
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
              gtag('js', new Date());
              gtag('config', 'G-KF618E0T6Y');
            });

            // Fallback for when the component initializes and already has consent
            if (typeof window !== 'undefined' && localStorage.getItem('zelus_cookie_consent') === 'accepted') {
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
              gtag('js', new Date());
              gtag('config', 'G-KF618E0T6Y');
            }
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} ${dmSans.variable} ${syncopate.variable} antialiased`}
      >
        <Preloader />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
