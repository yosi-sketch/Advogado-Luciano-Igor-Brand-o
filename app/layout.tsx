import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#021426",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lucianoigorbrandao.adv.br"),
  title: "Advogado Luciano Igor Brandão | Advocacia & Consultoria Jurídica · João Monlevade - MG",
  description:
    "Advogado Luciano Igor Brandão (OAB/MG 212.247) — Advocacia combativa e de excelência em Direito Bancário (revisão de contratos, juros abusivos, fraudes e consignados), Direito Civil, Defesa do Consumidor, Contratos e Família em João Monlevade/MG e região. Avaliação 5,0 estrelas com 51 avaliações no Google.",
  keywords: [
    "Advogado Luciano Igor Brandão",
    "Luciano Igor Brandão",
    "Luciano Igor Brandão Dias",
    "Luciano Igor Advogado",
    "Advogado João Monlevade",
    "Advocacia João Monlevade MG",
    "Direito Bancário João Monlevade",
    "Revisão de Juros Abusivos João Monlevade",
    "Fraudes Empréstimo Consignado Advogado",
    "Advogado Contratos João Monlevade",
    "Direito Civil João Monlevade",
    "Advogado Carneirinhos",
    "OAB MG 212247",
  ],
  authors: [{ name: "Luciano Igor Brandão" }],
  creator: "Advogado Luciano Igor Brandão",
  publisher: "Advogado Luciano Igor Brandão",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=2026", sizes: "64x64", type: "image/png" },
      { url: "/icon.png?v=2026", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.png?v=2026",
    apple: [
      { url: "/apple-icon.png?v=2026", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.lucianoigorbrandao.adv.br",
    title: "Advogado Luciano Igor Brandão | Advocacia & Consultoria Jurídica",
    description:
      "Defesa firme dos seus direitos com técnica, ética e combatividade. Sede em Carneirinhos, João Monlevade - MG e atendimento especializado.",
    siteName: "Advogado Luciano Igor Brandão",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Advogado Luciano Igor Brandão",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.png?v=2026" type="image/png" sizes="64x64" />
        <link rel="icon" href="/icon.png?v=2026" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2026" sizes="180x180" />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#fcfbf8] font-sans text-[#021426] antialiased selection:bg-[#d4af37] selection:text-[#010d1a]">
        {children}
      </body>
    </html>
  );
}
