"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgePercent,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  FileCheck,
  FileText,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais de Contato & Redes Sociais — Advogado Luciano Igor Brandão
const WHATSAPP_NUMBER = "5531989287260";
const PHONE_DISPLAY = "(31) 98928-7260";
const EMAIL_CONTACT = "contato@lucianoigorbrandao.adv.br";
const FACEBOOK_URL = "https://www.facebook.com/adv.luciano.igor.brandao/";
const GOOGLE_MAPS_URL =
  "https://maps.google.com/?q=R.+Fern%C3%A3o+Dias,+303+-+Sl+303+B+-+Carneirinhos,+Jo%C3%A3o+Monlevade+-+MG,+35930-180";
const OAB_DISPLAY = "OAB/MG 212.247";
const ADDRESS_STREET = "R. Fernão Dias, 303 - Sl 303 B - Carneirinhos";
const ADDRESS_CITY = "João Monlevade - MG, CEP 35930-180, Brasil";

function getWhatsAppUrl(message?: string) {
  const defaultText =
    "Olá, Dr. Luciano Igor Brandão. Gostaria de solicitar uma consulta jurídica e avaliação do meu caso no escritório.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function FacebookIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-bancario",
    title: "Direito Bancário & Defesa Contra Abusos",
    icon: Landmark,
    tag: "Juros Abusivos · Fraudes · Consignados · Dívidas",
    summary:
      "Atuação incisiva na revisão de contratos de empréstimos e financiamentos, anulação de fraudes no consignado, cancelamento de juros abusivos e proteção do seu patrimônio.",
    details:
      "Instituições bancárias e financeiras frequentemente praticam taxas desproporcionais, realizam vendas casadas ou viabilizam fraudes que atingem aposentados, pensionistas e correntistas. Atuamos com perícia contratual e combatividade judicial para suspender cobranças indevidas, anular contratos fraudulentos (como RMC e RCC), reaver quantias pagas em dobro e blindar o seu patrimônio contra execuções desleais.",
    topics: [
      "Ação Revisional de Contratos de Financiamento de Veículos e Empréstimos Bancários",
      "Anulação e ressarcimento de Fraudes em Empréstimo Consignado e Golpes do Benefício INSS",
      "Cancelamento de descontos ilegais de Cartão de Crédito Consignado (RMC e RCC)",
      "Defesa e embargos em Ações de Busca e Apreensão e Execuções de Título Extrajudicial",
      "Renegociação estratégica de dívidas bancárias e redução drástica do saldo devedor",
      "Indenização por Danos Morais decorrentes de negativação indevida ou descontos abusivos",
    ],
    whatsAppText:
      "Olá, Dr. Luciano Igor Brandão. Gostaria de solicitar uma análise técnica do meu contrato bancário ou desconto indevido.",
  },
  {
    id: "direito-civil-contratos",
    title: "Direito Civil & Contratos Estratégicos",
    icon: FileCheck,
    tag: "Contratos · Indenizações · Cobranças · Danos Morais",
    summary:
      "Elaboração e revisão minuciosa de contratos, reparação de danos morais e materiais, cobranças judiciais e extrajudiciais eficazes e resolução segura de disputas civis.",
    details:
      "A segurança das suas relações e a preservação do seu patrimônio dependem de instrumentos jurídicos claros e sólidos. Conduzimos ações indenizatórias por descumprimento de deveres, cobranças rigorosas de créditos vencidos e negociações extrajudiciais com foco na máxima proteção dos seus direitos.",
    topics: [
      "Elaboração, análise e revisão de instrumentos contratuais civis e comerciais",
      "Ações de Indenização por Danos Morais, Danos Materiais e Lucros Cessantes",
      "Cobrança judicial e extrajudicial de títulos de crédito, notas promissórias e contratos",
      "Rescisão contratual motivada e aplicação de cláusulas penais e multas",
      "Notificações extrajudiciais estruturadas para resolução célere sem necessidade de litígio",
      "Defesa e propositura de ações possessórias e litígios imobiliários",
    ],
    whatsAppText:
      "Olá, Dr. Luciano Igor Brandão. Preciso de auxílio jurídico em Direito Civil (contratos, cobrança ou indenização).",
  },
  {
    id: "direito-do-consumidor",
    title: "Direito do Consumidor & Defesa de Direitos",
    icon: Scale,
    tag: "Nome Limpo · Cobranças Indevidas · Danos Morais",
    summary:
      "Defesa vigorosa contra negativações indevidas no SPC/Serasa, abusos de prestadoras de serviços, fraudes digitais e cobranças vexatórias com pedido de indenização.",
    details:
      "O consumidor não deve tolerar práticas lesivas ou pagar por falhas operacionais de terceiros. Atuamos com medidas liminares de urgência para restabelecer a regularidade do seu nome, cancelar serviços fraudulentos e buscar a devida compensação indenizatória por danos sofridos.",
    topics: [
      "Ações liminares urgentes para exclusão de nome no SPC, Serasa e cartórios de protesto",
      "Indenização por Danos Morais por negativação indevida e abalo de crédito",
      "Combate a fraudes digitais, transações não autorizadas e golpes via PIX",
      "Cancelamento de assinaturas e tarifas não solicitadas com repetição de indébito",
      "Defesa contra falhas graves na prestação de serviços de telefonia, companhias aéreas e energia",
      "Atuação contenciosa e mediação de acordos perante o Procon e Juizados Especiais",
    ],
    whatsAppText:
      "Olá, Dr. Luciano Igor Brandão. Gostaria de orientação sobre uma situação de desrespeito ao Direito do Consumidor ou negativação indevida.",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    icon: Users,
    tag: "Divórcio · Pensão · Guarda · Inventários",
    summary:
      "Atendimento sensível, ético e estratégico em divórcios judiciais e extrajudiciais em cartório, pensão alimentícia, partilha de patrimônio e inventários.",
    details:
      "Conduzimos assuntos de família com o máximo respeito, sigilo e postura firme para salvaguardar os seus interesses e o bem-estar dos seus entes queridos. Priorizamos sempre a via consensual ágil e representamos você com vigor nos casos de litígio.",
    topics: [
      "Divórcio consensual e litigioso com partilha estratégica de patrimônio",
      "Divórcio extrajudicial rápido em cartório de notas, sem burocracia",
      "Ações de Pensão Alimentícia: fixação, exoneração, revisão e execução de débitos",
      "Regulamentação de guarda (compartilhada ou unilateral) e plano de convivência",
      "Inventário judicial e extrajudicial em cartório, partilha de herança e arrolamento",
      "Reconhecimento e dissolução de união estável com proteção dos direitos patrimoniais",
    ],
    whatsAppText:
      "Olá, Dr. Luciano Igor Brandão. Gostaria de orientações jurídicas sobre Direito de Família (divórcio, pensão ou inventário).",
  },
  {
    id: "direito-do-trabalho",
    title: "Direito do Trabalho & Defesa dos Direitos",
    icon: Briefcase,
    tag: "Rescisão Indireta · Verbas · Acidentes · Empresas",
    summary:
      "Defesa incisiva de trabalhadores em rescisão indireta, reversão de justa causa abusiva, horas extras e assessoria preventiva para conformidade empresarial.",
    details:
      "Acompanhamento especializado em causas trabalhistas, garantindo que os direitos garantidos pela CLT e pela jurisprudência sejam integralmente cumpridos. Atuação combativa para trabalhadores e consultoria de compliance para empregadores.",
    topics: [
      "Rescisão Indireta do Contrato de Trabalho por falta grave do empregador ou atraso salarial",
      "Reversão de Demissão por Justa Causa indevida com liberação integral de guias e verbas",
      "Cobrança de horas extras, intervalos suprimidos e adicional noturno",
      "Adicionais de Insalubridade e Periculosidade para ambientes de risco",
      "Indenizações por Acidente de Trabalho e Doenças Ocupacionais",
      "Assessoria jurídica preventiva trabalhista para empresas e gestores",
    ],
    whatsAppText:
      "Olá, Dr. Luciano Igor Brandão. Gostaria de consultar uma situação na área trabalhista.",
  },
  {
    id: "consultoria-estrategica",
    title: "Consultoria Jurídica Estratégica & Gestão de Conflitos",
    icon: ShieldCheck,
    tag: "Pareceres · Prevenção · Negociação · Tribunais",
    summary:
      "Assessoria consultiva sob medida para tomadas de decisão importantes, pareceres técnicos fundamentados, mediações e representação firme perante tribunais.",
    details:
      "Cada demanda é conduzida com dedicação personalizada. Unimos profundo rigor técnico, análise minuciosa de documentos e clareza de comunicação para apresentar respostas precisas sobre a viabilidade jurídica de cada escolha, mitigando riscos antes que se tornem prejuízos.",
    topics: [
      "Emissão de pareceres e opiniões legais para respaldar decisões pessoais e corporativas",
      "Negociação estratégica e condução de mediações pré-processuais com foco em acordos justos",
      "Acompanhamento processual constante com relatórios periódicos em linguagem acessível",
      "Atuação combativa perante órgãos administrativos, cartórios e instâncias judiciais",
      "Diagnóstico preventivo de riscos contratuais e patrimoniais",
      "Atendimento prioritário e contato direto com o titular em todos os estágios da causa",
    ],
    whatsAppText:
      "Olá, Dr. Luciano Igor Brandão. Gostaria de agendar uma consultoria jurídica estratégica para analisar minha demanda.",
  },
];

// Avaliações Reais de Clientes no Google Meu Negócio (Nota 5,0 estrelas · 51 avaliações)
const clientReviews = [
  {
    name: "Paula Garcia",
    reviewsCount: "15 avaliações · 1 foto",
    date: "Avaliação no Google",
    highlight:
      "Se você está procurando alguém que vai levar sua causa a sério, acabou de encontrar.",
    content:
      "Se você está procurando alguém que vai levar sua causa a sério, acabou de encontrar. Recomendo o Igor por sua competência e vasto conhecimento, além de ser uma pessoa muito agradável. O ambiente também é nota 1000.",
  },
  {
    name: "Renan Nunes",
    reviewsCount: "3 avaliações",
    date: "Avaliação no Google",
    highlight: "Ótimo profissional. Inteligente e atencioso. Recomendo.",
    content:
      "Ótimo profissional. Inteligente e atencioso. Recomendo com toda a certeza.",
  },
  {
    name: "Patrícia Rodrigues",
    reviewsCount: "Local Guide · 59 avaliações · 24 fotos",
    date: "Avaliação no Google",
    highlight:
      "Excelente advogado, oferece um atendimento exemplar e busca ajudar da melhor forma possível.",
    content:
      "Excelente advogado, oferece um atendimento exemplar e busca ajudar da melhor forma possível. Muito competente!",
  },
  {
    name: "Neyla Reggiani",
    reviewsCount: "2 avaliações",
    date: "Avaliação no Google",
    highlight: "Excelente profissional!",
    content:
      "Excelente profissional! Atendimento exemplar, muita seriedade e presteza na condução do caso.",
  },
  {
    name: "Heladio Jose",
    reviewsCount: "10 avaliações",
    date: "Avaliação no Google",
    highlight: "Profissional excelente e competente.",
    content:
      "Profissional excelente e competente. Recomendo pelo conhecimento e dedicação aos clientes.",
  },
  {
    name: "Ana Célia Braz",
    reviewsCount: "3 avaliações",
    date: "Avaliação no Google",
    highlight: "Excelente profissional!!",
    content:
      "Excelente profissional!! Atencioso, dedicado e esclareceu todas as dúvidas com muita clareza.",
  },
  {
    name: "Antônio Miguel",
    reviewsCount: "1 avaliação",
    date: "Avaliação no Google",
    highlight: "Gente boa, prestativo e de total confiança.",
    content:
      "Gente boa, atencioso e muito profissional. Recomendo a todos que precisam de um bom advogado.",
  },
  {
    name: "Diego Novaes",
    reviewsCount: "1 avaliação",
    date: "Avaliação no Google",
    highlight: "Excelente profissional",
    content:
      "Excelente profissional. Passou muita segurança desde o primeiro atendimento e conduziu tudo com maestria.",
  },
  {
    name: "Gilberto Vieira",
    reviewsCount: "6 avaliações · 1 foto",
    date: "Avaliação no Google",
    highlight: "Advogado de alta competência em João Monlevade.",
    content:
      "Escritório de alto padrão em João Monlevade. Profissional ético, atencioso e muito capacitado.",
  },
  {
    name: "Taís Silva",
    reviewsCount: "4 avaliações",
    date: "Avaliação no Google",
    highlight: "Atendimento impecável e retorno ágil.",
    content:
      "Atendimento impecável! Tirou todas as minhas dúvidas e resolveu a situação com muita competência e agilidade.",
  },
  {
    name: "Marceli Alves Lagares",
    reviewsCount: "4 avaliações",
    date: "Avaliação no Google",
    highlight: "Muito atencioso e dedicado à causa.",
    content:
      "Excelente profissional, muito atencioso e dedicado à causa do cliente. Super recomendo o Dr. Luciano Igor Brandão!",
  },
  {
    name: "Thiago Mateus",
    reviewsCount: "Avaliação no Google",
    date: "Avaliação no Google",
    highlight: "Ética, transparência e conhecimento aprofundado.",
    content:
      "Profissional ético e muito transparente. Conduziu o processo com rapidez, clareza e dedicação exemplar.",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <div className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</div>
      <h2
        className={
          light
            ? "font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-[-0.015em] text-white"
            : "font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-[-0.015em] text-[#021426]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-relaxed text-slate-300 font-normal"
              : "mt-5 max-w-xl text-[15px] leading-relaxed text-[#3a4b5e] font-normal"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    if (!activeArea) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-[#fcfbf8] text-[#021426]">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 border-b border-[#d4af37]/25 bg-[#010d1a]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[95px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[110px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Advogado Luciano Igor Brandão"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-95 py-2"
            >
              {/* Official 3D Gold & Navy Logo */}
              <Image
                src="/logo.png"
                width={1024}
                height={341}
                alt="Advogado Luciano Igor Brandão"
                priority
                className="h-12 w-auto object-contain sm:h-16 lg:h-[68px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                Sobre o Advogado
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#bancario">
                Direito Bancário
              </a>
              <a className="nav-link" href="#orientacoes">
                Orientações
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (51)
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook do Advogado Luciano Igor Brandão"
                className="grid size-10 place-items-center rounded-full border border-[#d4af37]/30 text-slate-300 transition-all hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-white"
              >
                <FacebookIcon size={17} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp do Advogado Luciano Igor Brandão"
                className="grid size-10 place-items-center rounded-full border border-[#d4af37]/30 text-slate-300 transition-all hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-white"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                className="rounded-full shadow-sm"
              >
                Consulta no WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-[#d4af37]/30 text-white lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-[#d4af37]/20 bg-[#010d1a] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Sobre o Advogado", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Direito Bancário & Defesa", "#bancario"],
                    ["Orientações & Artigos", "#orientacoes"],
                    ["Avaliações no Google (51)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-semibold text-slate-200 hover:text-[#fce778]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#987226] via-[#d4af37] to-[#fce778] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#010d1a] shadow-md transition-all hover:brightness-110"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> Falar no WhatsApp
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af37]/30 bg-white/5 px-5 py-3 text-xs font-semibold text-white/90 hover:bg-white/10"
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <FacebookIcon size={15} /> Acompanhar no Facebook
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section — Nobre Fundo Escuro Azul Safira & Dourado Imperial */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#d4af37]/25 bg-[#021426] text-white"
        >
          {/* Luz ambiente de destaque dourada e azul marinho profundo */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[38rem] rounded-full bg-gradient-to-bl from-[#d4af37]/15 via-[#062547]/50 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[32rem] rounded-full bg-[#010d1a]/95 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div variants={reveal} className="mb-6 flex flex-col items-start gap-3">
                <span className="eyebrow-light">Advogado Luciano Igor Brandão · {OAB_DISPLAY}</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/35 bg-[#062547]/85 px-4 py-1.5 text-[11px] font-semibold text-[#fce778] shadow-xs backdrop-blur-md">
                  <span className="size-2 rounded-full bg-[#d4af37] animate-pulse" />
                  R. Fernão Dias, 303 - Sl 303 B · Carneirinhos · João Monlevade - MG
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-display text-[2.75rem] font-bold leading-[1.06] tracking-[-0.02em] text-white sm:text-6xl lg:text-[4.5rem]"
              >
                Defesa incisiva dos seus direitos com{" "}
                <span className="block mt-2 font-display italic text-gold-gradient font-normal">
                  técnica, combatividade e ética.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-base sm:leading-8 font-normal"
              >
                Com sólida atuação em <strong className="text-white font-semibold">Direito Bancário</strong> (revisão de contratos e defesa contra juros abusivos e fraudes no consignado),
                Direito Civil, Defesa do Consumidor e Contratos, o{" "}
                <strong className="text-[#fce778] font-semibold">Dr. Luciano Igor Brandão</strong> oferece uma advocacia
                estratégica, resolutiva e acolhedora. Atendimento presencial no bairro Carneirinhos, João Monlevade/MG,
                e consultoria jurídica com total dedicação à sua causa.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-lg"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Luciano Igor
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-3 py-3 text-sm font-bold text-slate-200 transition-colors hover:text-[#fce778]"
                >
                  Conhecer áreas de atuação{" "}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-6 text-xs text-slate-300"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={16} className="fill-[#d4af37] text-[#d4af37]" />{" "}
                  <strong className="text-white font-bold">Nota 5,0 estrelas</strong> no Google (51 avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={16} className="text-[#d4af37]" /> {OAB_DISPLAY} · Advocacia Especializada
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={16} className="text-[#d4af37]" /> Sede em
                  Carneirinhos, João Monlevade - MG
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Image Presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative mx-auto w-full max-w-[480px] lg:ml-auto lg:mr-2"
            >
              {/* Luxury ambient aura */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#d4af37]/30 via-[#062547]/40 to-transparent blur-2xl -z-10" />

              {/* Architectural outer hairline gold frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#d4af37]/35 pointer-events-none" />

              {/* Main portrait executive card */}
              <div className="relative aspect-[0.78] overflow-hidden rounded-2xl bg-[#010d1a] shadow-2xl ring-1 ring-[#d4af37]/35">
                <Image
                  src="/luciano-igor-hero.jpg"
                  alt="Dr. Luciano Igor Brandão — Advogado"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_18%]"
                />

                {/* Gradient vignette on bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#010d1a] via-[#010d1a]/65 to-transparent" />

                {/* Executive name overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="font-display text-2xl font-bold tracking-tight text-white">
                      Dr. Luciano Igor Brandão
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#fce778]">
                      Advogado · {OAB_DISPLAY}
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#d4af37]/40 bg-[#021426]/85 text-[#fce778] backdrop-blur-md shadow-lg">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-3 top-[10%] rounded-full border border-[#d4af37]/40 bg-[#031b33]/95 px-4 py-2.5 text-[10px] font-bold tracking-[0.16em] text-[#fce778] shadow-xl backdrop-blur-md sm:-left-6 sm:px-5">
                ADVOCACIA & CONSULTORIA JURÍDICA
              </div>

              <div className="absolute -right-3 bottom-[18%] rounded-2xl border border-[#d4af37]/40 bg-[#031b33]/95 p-4 shadow-2xl backdrop-blur-md sm:-right-6">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Star size={16} className="fill-[#d4af37]" />
                  <span className="font-display text-lg font-bold text-white">
                    5,0 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  51 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner — Nobre Fundo Corporativo */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#d4af37]/20 bg-[#031b33] text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["5,0 ★", "nota máxima com 51 avaliações verificadas no Google"],
              ["OAB/MG", "nº 212.247 com atuação séria, ética e transparente"],
              ["João Monlevade", "R. Fernão Dias, 303 - Sl 303 B (Carneirinhos)"],
              ["Defesa Firme", "especialista em Direito Bancário, Civil e Contratos"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-white/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-display text-3xl sm:text-4xl font-bold text-gold-gradient">
                  {value}
                </span>
                <span className="max-w-[155px] text-[11px] font-medium leading-5 text-slate-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre o Advogado / Dr. Luciano Igor Brandão — Warm Alabaster Stone */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-[#faf9f5] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-20 lg:px-12">
            {/* Team Institutional Photo Presentation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[540px]"
            >
              <div className="relative aspect-[1.05] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 border border-[#d4af37]/25">
                <Image
                  src="/luciano-igor-sobre.jpg"
                  alt="Dr. Luciano Igor Brandão em consultoria jurídica"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-[50%_20%]"
                />
              </div>

              {/* Authority card */}
              <div className="absolute -bottom-6 right-3 max-w-[320px] rounded-xl border border-[#d4af37]/35 bg-white p-5 shadow-2xl sm:-right-6 sm:p-6">
                <div className="flex items-center gap-2 text-[#987226]">
                  <ShieldCheck size={18} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Atendimento Sério & Dedicado
                  </p>
                </div>
                <p className="mt-1.5 font-display text-lg font-bold leading-snug text-[#021426]">
                  Dr. Luciano Igor Brandão
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#3a4b5e]">
                  &ldquo;Se você procura alguém que vai levar sua causa a sério, acabou de encontrar.&rdquo;
                  Conhecimento aprofundado, combatividade e atendimento humano nota 1000.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 rounded-tl-2xl border-l-2 border-t-2 border-[#d4af37]/50 sm:-left-6 sm:-top-6 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <span className="eyebrow mb-4">sobre o profissional · advocacia de excelência</span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-[-0.015em] text-[#021426]">
                Compromisso inabalável com a verdade, a ética e o{" "}
                <span className="font-display italic text-[#987226]">seu resultado.</span>
              </h2>

              <p className="mt-6 text-[15px] leading-relaxed text-[#3a4b5e]">
                O escritório do <strong className="text-[#021426] font-semibold">Advogado Luciano Igor Brandão</strong> ({OAB_DISPLAY})
                nasceu com a vocação de proporcionar uma advocacia combativa, altamente técnica e próxima de cada cliente.
                Com sede estruturada no bairro Carneirinhos em João Monlevade/MG, oferecemos uma estrutura acolhedora para atendimento presencial
                e soluções jurídicas completas.
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-[#3a4b5e]">
                Especialista na defesa contra <strong className="text-[#021426] font-semibold">abusos e fraudes do sistema bancário</strong>,
                além de atuação de destaque em Direito Civil, Contratos, Relações de Consumo e Direito de Família, o Dr. Luciano Igor Brandão
                conduz cada processo com minúcia documental, inteligência estratégica e comunicação permanente com o cliente.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Atendimento Direto com o Advogado", "Sem intermediários, com diálogo transparente e acessível."],
                  ["Análise Minuciosa de Documentos", "Identificação precisa de irregularidades, fraudes e juros ilegais."],
                  ["Ambiente Acolhedor e Nota 1000", "Sede confortável em Carneirinhos, João Monlevade - MG."],
                  ["Soluções Rápidas & Eficazes", "Foco em resultados concretos pela via consensual ou judicial."],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-xl border border-[#d4af37]/20 bg-white p-4 shadow-xs">
                    <p className="font-display text-sm font-bold text-[#021426]">{title}</p>
                    <p className="mt-1 text-xs text-[#3a4b5e] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Luciano Igor Brandão. Gostaria de agendar uma consulta para avaliar meu caso.")}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Luciano Igor
                </GlowingButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Manifesto / Foco Bancário & Defesa Patrimonial — Deep Dark Section */}
        <section
          id="bancario"
          className="relative isolate overflow-hidden bg-[#010d1a] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#d4af37]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#062547]/50 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow-light mb-4">especialidade de destaque</span>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.015em] text-white">
                Você não precisa arcar com juros abusivos{" "}
                <span className="font-display italic text-gold-gradient font-normal">
                  nem aceitar descontos indevidos na sua renda.
                </span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Milhares de pessoas pagam valores ilegais em financiamentos e sofrem descontos fraudulentos em benefícios do INSS ou folha de pagamento. A lei assegura a anulação e o ressarcimento.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#d4af37]/30 bg-[#062547]/85 p-8 backdrop-blur-md hover:border-[#d4af37]/60 transition-colors shadow-xl">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#fce778]">
                  <BadgePercent size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  Juros Abusivos em Financiamentos e Empréstimos
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Taxas acima da média de mercado do Banco Central, tarifas ilegais embutidas e vendas casadas geram cobranças desproporcionais em contratos de veículos e empréstimos pessoais. Realizamos o recálculo técnico para reduzir as parcelas ou extinguir o saldo devedor abusivo.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#fce778]">
                  <CheckCircle2 size={16} /> Ação Revisional & Redução Substancial de Parcelas
                </div>
              </div>

              <div className="rounded-2xl border border-[#d4af37]/30 bg-[#062547]/85 p-8 backdrop-blur-md hover:border-[#d4af37]/60 transition-colors shadow-xl">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#fce778]">
                  <Landmark size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  Fraudes no Consignado e Cartão RMC/RCC
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Aposentados e servidores frequentemente são vítimas de empréstimos nunca contratados ou contratos perpétuos de cartão de crédito consignado (RMC/RCC). Atuamos com rapidez para cessar os descontos, restituir o dinheiro em dobro e pleitear indenização por danos morais.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#fce778]">
                  <CheckCircle2 size={16} /> Suspensão Imediata & Devolução em Dobro dos Valores
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Luciano Igor Brandão. Gostaria de enviar os dados do meu contrato ou extrato para avaliação bancária."
                )}
                target="_blank"
                size="lg"
                className="rounded-full shadow-lg"
              >
                <WhatsAppIcon size={17} /> Enviar meu contrato para análise no WhatsApp
              </GlowingButton>
              <p className="mt-3 text-xs text-slate-400">
                Atendimento sigiloso, transparente e com retorno ágil pelo Dr. Luciano Igor Brandão.
              </p>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação — Alabaster Background */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-[#faf9f5] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="áreas de atuação especializada"
                description="Assessoria jurídica dedicada com alto rigor técnico para defender o seu patrimônio, sua dignidade e os seus direitos em João Monlevade e região."
              >
                Soluções estratégicas em{" "}
                <span className="font-display italic text-[#987226]">
                  Advocacia & Consultoria Jurídica.
                </span>
              </Heading>
              <p className="max-w-[260px] pb-1 text-xs leading-relaxed text-[#3a4b5e] font-medium">
                Selecione uma área para visualizar o detalhamento completo dos serviços
                e conversar diretamente com o Dr. Luciano Igor Brandão.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col rounded-2xl border border-[#d4af37]/25 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4af37]/60 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl bg-[#fbf3e2] text-[#987226] transition-colors group-hover:bg-[#d4af37] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.8} />
                      </span>
                      <span className="font-display font-bold text-2xl text-slate-300 group-hover:text-[#d4af37] transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md bg-[#fbf3e2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#987226]">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-display font-bold text-xl leading-snug text-[#021426]">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-[#3a4b5e]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#987226] hover:text-[#d4af37] cursor-pointer"
                    >
                      Ver detalhes e tópicos{" "}
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Informação e Análise Jurídica (Artigos Editoriais Práticos do Dr. Luciano Igor) */}
        <section id="orientacoes" className="bg-[#031b33] py-20 sm:py-28 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-7 md:grid-cols-[1fr_auto]">
              <Heading
                eyebrow="análise & orientações práticas"
                light
                description="Esclarecimentos práticos do Dr. Luciano Igor Brandão sobre Direito Bancário, revisão de dívidas e proteção contratual."
              >
                Esclarecimentos práticos para{" "}
                <span className="font-display italic text-gold-gradient font-normal">proteger os seus direitos.</span>
              </Heading>
              <a
                href={getWhatsAppUrl(
                  "Olá, Dr. Luciano Igor Brandão. Acompanho seus conteúdos jurídicos e gostaria de tirar uma dúvida sobre meu caso."
                )}
                target="_blank"
                rel="noreferrer"
                className="group mb-1 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#fce778] hover:text-white"
              >
                Fazer uma pergunta jurídica <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-11 grid gap-8 md:grid-cols-2">
              {/* Card 1: Direito Bancário e Juros */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-[#010d1a] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/60"
              >
                <div className="relative aspect-[1080/700] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/artigo-direito-bancario.webp"
                    alt="Direito Bancário e Revisão de Contratos — Advogado Luciano Igor Brandão"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-[50%_35%] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-md bg-[#d4af37]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fce778]">
                      Direito Bancário & Contratos
                    </span>
                    <h3 className="mt-4 font-display font-bold text-2xl leading-snug sm:text-3xl text-white">
                      Juros Abusivos e Fraudes no Consignado: Como saber se seu contrato está ilegal?
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      Cobranças disfarçadas de tarifas, juros capitalizados além do permitido pelo Banco Central
                      e descontos automáticos de cartões RMC e RCC sem autorização prévia são nulos perante o Código de Defesa do Consumidor.
                      A via judicial garante o estorno das parcelas e compensação financeira.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Luciano Igor Brandão. Gostaria de saber se meu contrato bancário possui juros abusivos ou descontos indevidos."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#fce778] transition-colors hover:text-white"
                  >
                    Analisar meu contrato bancário <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Direito Civil e Gestão Contratual */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-[#010d1a] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/60"
              >
                <div className="relative aspect-[1080/700] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/artigo-contratos-civel.webp"
                    alt="Direito Civil e Gestão Contratual — Advogado Luciano Igor Brandão"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-[50%_25%] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-md bg-[#d4af37]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fce778]">
                      Direito Civil & Segurança Jurídica
                    </span>
                    <h3 className="mt-4 font-display font-bold text-2xl leading-snug sm:text-3xl text-white">
                      Contratos Blindados: A importância da redação preventiva para evitar prejuízos
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      Um contrato mal redigido é a principal causa de litígios desgastantes e perdas financeiras.
                      A análise prévia de cláusulas de rescisão, penalidades, garantias e deveres das partes blinda seu patrimônio
                      e assegura tranquilidade total nas transações civis e comerciais.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Luciano Igor Brandão. Preciso de assessoria na elaboração ou revisão de um contrato civil."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#fce778] transition-colors hover:text-white"
                  >
                    Revisar ou elaborar contrato <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Compromisso Profissional e Diferenciais — Deep Dark Velvet */}
        <section className="relative overflow-hidden bg-[#021426] py-20 text-white sm:py-28 lg:py-32 border-b border-[#d4af37]/20">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#d4af37]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-slate-900/40 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="nosso compromisso profissional"
              light
              description="A condução de cada demanda com rigor técnico, ética e postura resolutiva de quem defende seus interesses com firmeza e dedicação integral."
            >
              A precisão técnica aliada ao{" "}
              <span className="font-display italic text-gold-gradient font-normal">
                cuidado humano que sua causa exige.
              </span>
            </Heading>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/10"
            >
              {[
                [
                  "01",
                  "Análise minuciosa de contratos e atendimento sob medida",
                  "Examinamos cada cláusula, taxa de juros, extrato e documento. Elaboramos teses sólidas e personalizadas, sem soluções genéricas ou modelos pré-fabricados.",
                ],
                [
                  "02",
                  "Comunicação direta, ágil e acolhedora no WhatsApp",
                  "Você é mantido informado sobre todos os andamentos da causa com clareza e transparência. Acesso facilitado ao Dr. Luciano Igor Brandão para esclarecer dúvidas com rapidez e atenção.",
                ],
                [
                  "03",
                  "Combatividade técnica e busca incansável por resultados",
                  "Atuamos com coragem e firmeza perante tribunais, bancos e empresas para que você receba integralmente os direitos que a lei e a justiça asseguram.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-display text-2xl font-bold text-gold-gradient">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-slate-300">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Autênticos do Dr. Luciano Igor Brandão) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-[#faf9f5] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">
              <div>
                <Heading
                  eyebrow="prova social & avaliações reais"
                  description="A reputação do Dr. Luciano Igor Brandão é comprovada por quem contratou e confiou. Confira os depoimentos de clientes no Google Meu Negócio."
                >
                  Confiança atestada com{" "}
                  <span className="font-display italic text-[#987226]">
                    nota máxima 5,0 por 51 clientes.
                  </span>
                </Heading>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b-2 border-[#987226] pb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#021426] hover:text-[#d4af37]"
                  >
                    Ver todas as avaliações no Google Maps <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Rating highlights pills */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Nota 5,0 Máxima no Google",
                    "Competência e vasto conhecimento",
                    "Ambiente nota 1000",
                    "Inteligente e atencioso",
                    "Atendimento exemplar",
                    "Leva a causa a sério",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-white px-3.5 py-1.5 text-[11px] font-semibold text-[#021426] shadow-xs"
                    >
                      <CheckCircle2 size={14} className="text-[#987226]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Public score box */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-[#d4af37]/35 bg-white p-8 shadow-xl sm:p-10">
                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#3a4b5e]">
                    Avaliações Verificadas · Google Meu Negócio
                  </span>
                  <div className="flex gap-1 text-[#d4af37]" aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={17}
                        className="fill-[#d4af37] text-[#d4af37]"
                      />
                    ))}
                  </div>
                </div>

                <div className="my-6 flex items-baseline gap-4">
                  <span className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-[#021426]">
                    5,0
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#021426]">
                      Classificação Máxima
                    </p>
                    <p className="text-xs text-[#3a4b5e]">
                      Com base em 51 avaliações de clientes reais
                    </p>
                  </div>
                </div>

                <p className="border-t border-slate-100 pt-4 text-xs leading-relaxed text-[#3a4b5e]">
                  &ldquo;Se você está procurando alguém que vai levar sua causa a sério, acabou de encontrar. Recomendo o Igor por sua competência e vasto conhecimento... O ambiente também é nota 1000.&rdquo; — Paula Garcia
                </p>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition-all hover:border-[#d4af37]/50 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex gap-0.5 text-[#d4af37]">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#d4af37] text-[#d4af37]"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 font-display text-sm font-bold leading-snug text-[#021426]">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-xs leading-relaxed text-[#3a4b5e]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="font-display text-sm font-bold text-[#021426]">
                      {review.name}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {review.reviewsCount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conecte-se com o Advogado Luciano Igor Brandão no Facebook */}
        <section className="border-t border-[#d4af37]/20 bg-[#010d1a] py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-[#d4af37]/30 bg-[#062547]/90 p-8 sm:p-12 lg:flex-row lg:gap-14 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                <div className="relative size-28 shrink-0 overflow-hidden rounded-full border-2 border-[#d4af37] shadow-lg sm:size-32">
                  <Image
                    src="/luciano-igor-social.jpg"
                    alt="Advogado Luciano Igor Brandão"
                    fill
                    className="object-cover object-[50%_15%]"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#fce778]">
                    <FacebookIcon size={16} /> Advogado - Luciano Igor Brandão
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                    Acompanhe o Dr. Luciano Igor Brandão
                  </h3>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Orientações práticas sobre Direito Bancário, renegociação de dívidas, defesa de direitos,
                    contratos e informativos jurídicos essenciais para o seu dia a dia.
                  </p>
                </div>
              </div>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-[#987226] via-[#d4af37] to-[#fce778] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#010d1a] shadow-md transition-all hover:brightness-110"
              >
                <FacebookIcon size={16} /> Seguir no Facebook <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização — João Monlevade - MG */}
        <section
          id="contato"
          className="scroll-mt-24 bg-[#faf9f5] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="contato & localização"
                description="Agende seu atendimento presencial em nossa sede na R. Fernão Dias, 303 no bairro Carneirinhos, ou solicite uma consulta inicial com total comodidade e segurança."
              >
                Estamos prontos para{" "}
                <span className="font-display italic text-[#987226]">defender sua causa.</span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar conversa no WhatsApp
                </GlowingButton>
                <p className="text-xs text-[#3a4b5e] font-medium">
                  Atendimento direto e retorno com agilidade:{" "}
                  <strong className="text-[#021426]">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#3a4b5e] font-medium">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#987226]" />
                  <span>Segunda a Sexta: 08h30 às 18h00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#987226]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="hover:text-[#987226] transition-colors text-[#021426] font-semibold"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#987226]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="hover:text-[#987226] transition-colors text-[#021426] font-semibold"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FacebookIcon size={16} className="text-[#987226]" />
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#987226] transition-colors text-[#021426] font-semibold"
                  >
                    facebook.com/adv.luciano.igor.brandao
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/35 bg-[#021426] text-white p-7 sm:p-10 shadow-2xl">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#d4af37] to-[#fce778]" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-[#d4af37]/20 text-[#fce778]">
                  <MapPin size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#fce778]">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">
                    João Monlevade · MG
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-relaxed text-slate-300">
                <strong className="text-white font-bold">
                  Advogado Luciano Igor Brandão
                </strong>
                <br />
                <span className="text-[#fce778] font-semibold">{OAB_DISPLAY}</span>
                <br />
                {ADDRESS_STREET}
                <br />
                {ADDRESS_CITY}
              </address>

              <div className="my-7 h-px bg-white/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Atendimento presencial no bairro Carneirinhos e consultoria jurídica para toda a região
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#062547] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#fce778] transition-colors hover:border-[#d4af37] hover:text-white shadow-xs"
                >
                  Abrir no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip — Rich Metallic Gold Gradient */}
        <section className="bg-gradient-to-r from-[#987226] via-[#d4af37] to-[#b5892b] px-5 py-14 text-[#010d1a] sm:px-8 sm:py-16 lg:px-12 shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#010d1a]/85 font-black">
                ADVOGADO LUCIANO IGOR BRANDÃO · {OAB_DISPLAY} · JOÃO MONLEVADE - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl font-bold leading-tight text-[#010d1a]">
                Pronto para proteger seus direitos e resolver sua situação jurídica com segurança e dedicação?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dr. Luciano Igor Brandão. Gostaria de agendar um atendimento inicial para avaliar minha situação jurídica."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#010d1a] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-2xl transition-all hover:-translate-y-0.5 hover:bg-black"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer — Deep Dark Section */}
        <footer className="bg-[#010d1a] px-5 py-14 text-white sm:px-8 lg:px-12 border-t border-[#d4af37]/20">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="inline-flex">
                <Image
                  src="/logo.png"
                  width={1024}
                  height={341}
                  alt="Advogado Luciano Igor Brandão"
                  className="h-12 w-auto object-contain sm:h-16"
                />
              </div>
              <p className="mt-5 max-w-xs text-xs leading-relaxed text-slate-400">
                Advocacia séria e de alto padrão com excelência em
                Direito Bancário (revisão de contratos, juros abusivos e fraudes no consignado),
                Direito Civil, Contratos, Defesa do Consumidor e Família.
                Sede na {ADDRESS_STREET}, {ADDRESS_CITY}.
              </p>
              <p className="mt-3 text-xs font-bold text-[#fce778]">
                Avaliação 5,0 ★ no Google (51 avaliações reais verificadas)
              </p>
            </div>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fce778]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-slate-300 font-medium">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  Sobre o Dr. Luciano Igor
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#bancario">
                  Direito Bancário & Fraudes
                </a>
                <a className="footer-link" href="#orientacoes">
                  Orientações Jurídicas
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (51)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fce778]">
                Contato Direto
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-slate-300 font-medium">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <FacebookIcon size={15} className="shrink-0" /> facebook.com/adv.luciano.igor.brandao
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_STREET}, {ADDRESS_CITY}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Advogado Luciano Igor Brandão · {OAB_DISPLAY}. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo meramente informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-[#d4af37]/35 bg-white p-7 shadow-2xl sm:max-w-xl sm:rounded-2xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-[#d4af37] hover:text-[#987226] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="eyebrow mb-2">Área de Atuação Especializada</div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-display text-2xl sm:text-3xl font-bold leading-snug text-[#021426]"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-[#3a4b5e]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#021426]">
                    Principais demandas e causas atendidas:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#021426]"
                      >
                        <span className="size-2 rounded-full bg-[#d4af37] shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    className="rounded-full shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta área
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-bold text-[#3a4b5e] hover:text-[#021426] transition-colors cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
