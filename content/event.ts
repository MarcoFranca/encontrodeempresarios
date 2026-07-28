export type Ticket = {
  name: string;
  price: string;
  description: string;
  includes: string[];
  cta: string;
  checkoutUrl: string;
  featured?: boolean;
};

export const eventContent = {
  name: "Encontro de Empresários",
  host: "Paulo Henriques",
  date: "2026-08-21",
  dateLabel: "21 de agosto de 2026",
  timeLabel: "10h às 18h",
  city: "Alphaville, SP",
  lotNotice: "LOTE ATUAL COM VALORES PROMOCIONAIS. PREÇOS SOBEM NA VIRADA DE LOTE.",
  venue: {
    name: "Plataforma Internacional",
    address: "Alameda Tocantins, 956, Alphaville Industrial, Barueri/SP",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Alameda+Tocantins+956+Alphaville+Industrial+Barueri+SP",
  },
  checkout: {
    individual: "https://payfast.greenn.com.br/ej6hzxc",
    duo: "https://payfast.greenn.com.br/gs6att6",
    vip: "https://payfast.greenn.com.br/73e2j5m",
  },
  speakers: [
    {
      name: "Pablo Marçal",
      role: "Empresário, mentor, escritor e investidor",
      description: "Uma presença para ampliar a conversa sobre visão, posicionamento e a coragem de agir quando o negócio pede um próximo movimento.",
      focus: "Visão que provoca decisão",
    },
    {
      name: "Bruno Avelar",
      role: "Empreendedor e especialista em networking estratégico",
      description: "Reconhecido por conectar empresários a ambientes e relações de alto nível, chega para lembrar que crescimento também depende das mesas em que você escolhe sentar.",
      focus: "Relações que abrem caminhos",
    },
  ],
  tickets: [
    {
      name: "Individual",
      price: "R$ 197",
      description: "Para o empresário ou gestor que chega para ampliar repertório e relações.",
      includes: ["1 acesso ao encontro"],
      cta: "Escolher ingresso individual",
      checkoutUrl: "https://payfast.greenn.com.br/ej6hzxc",
    },
    {
      name: "Dupla",
      price: "R$ 347",
      description: "Para sócios, parceiros ou casal que querem sair com o mesmo contexto para decidir.",
      includes: ["2 acessos ao encontro"],
      cta: "Ir com meu sócio",
      checkoutUrl: "https://payfast.greenn.com.br/gs6att6",
    },
    {
      name: "VIP",
      price: "R$ 1.197",
      description: "Uma experiência com os benefícios confirmados para esta categoria.",
      includes: ["Acesso ao encontro", "Almoço", "Assento premium"],
      cta: "Escolher experiência VIP",
      checkoutUrl: "https://payfast.greenn.com.br/73e2j5m",
      featured: true,
    },
  ] satisfies Ticket[],
  faq: [
    ["Como recebo meu ingresso?", "A emissão e as instruções de credenciamento serão informadas pelo checkout oficial quando o link for publicado."],
    ["Posso transferir ou cancelar meu ingresso?", "A política de transferência e cancelamento será apresentada no checkout oficial. Ela ainda precisa ser confirmada pela organização."],
    ["O que inclui o VIP?", "Inclui acesso ao encontro, almoço e assento premium."],
  ],
} as const;
