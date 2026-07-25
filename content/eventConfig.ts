export const eventConfig = { checkoutFallback: "#contato" } as const;
export const ticketHref = (url: string) => url.startsWith("http") ? url : eventConfig.checkoutFallback;
