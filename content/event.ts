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
  venue: {
    name: "Plataforma Internacional",
    address: "Alameda Tocantins, 956, Alphaville Industrial, Barueri/SP",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Alameda+Tocantins+956+Alphaville+Industrial+Barueri+SP",
  },
  checkout: {
    individual: "[INSERIR URL DO CHECKOUT INDIVIDUAL]",
    duo: "[INSERIR URL DO CHECKOUT DUPLA]",
    vip: "[INSERIR URL DO CHECKOUT VIP]",
  },
  speakers: [
    { name: "Pablo Marçal", status: "Convidado citado. Credencial e tema a validar." },
    { name: "Bruno Avelar", status: "Convidado citado. Credencial e tema a validar." },
  ],
  tickets: [
    {
      name: "Individual",
      price: "R$ 197",
      description: "Para o empresário ou gestor que chega para ampliar repertório e relações.",
      includes: ["1 acesso ao encontro"],
      cta: "Escolher ingresso individual",
      checkoutUrl: "[INSERIR URL DO CHECKOUT INDIVIDUAL]",
    },
    {
      name: "Dupla",
      price: "R$ 347",
      description: "Para sócios, parceiros ou casal que querem sair com o mesmo contexto para decidir.",
      includes: ["2 acessos ao encontro"],
      cta: "Ir com meu sócio",
      checkoutUrl: "[INSERIR URL DO CHECKOUT DUPLA]",
    },
    {
      name: "VIP",
      price: "R$ 1.197",
      description: "Uma experiência com os benefícios confirmados para esta categoria.",
      includes: ["Acesso ao encontro", "Almoço", "Assento premium"],
      cta: "Escolher experiência VIP",
      checkoutUrl: "[INSERIR URL DO CHECKOUT VIP]",
      featured: true,
    },
  ] satisfies Ticket[],
  faq: [
    ["Como recebo meu ingresso?", "A emissão e as instruções de credenciamento serão informadas pelo checkout oficial quando o link for publicado."],
    ["Posso transferir ou cancelar meu ingresso?", "A política de transferência e cancelamento será apresentada no checkout oficial. Ela ainda precisa ser confirmada pela organização."],
    ["Há estacionamento?", "As informações operacionais de estacionamento ainda precisam ser confirmadas com o local."],
    ["Qual é o dress code?", "A orientação de vestimenta ainda será comunicada pela organização."],
    ["O que inclui o VIP?", "Inclui acesso ao encontro, almoço e assento premium. Outros benefícios não foram anunciados e não estão sendo presumidos."],
  ],
} as const;
