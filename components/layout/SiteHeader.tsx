/* eslint-disable @next/next/no-img-element -- Vinext's local image optimizer crashes without a Cloudflare asset binding. */
import { TicketLink } from "../shared/TicketLink";
import { ScrollLink } from "../shared/ScrollLink";
export function SiteHeader() {
  return (
    <header className="site-header">
      <ScrollLink className="wordmark" targetId="inicio" aria-label="Encontro de Empresários, início">
        <img src="/brand/logo-encontro-empresarios.png" width="1513" height="1024" alt="Encontro de Empresários" />
      </ScrollLink>
      <nav aria-label="Navegação principal">
        <ScrollLink targetId="experiencia">A experiência</ScrollLink>
        <ScrollLink targetId="convidados">Convidados</ScrollLink>
        <ScrollLink targetId="ingressos">Ingressos</ScrollLink>
      </nav>
      <TicketLink className="header-cta" data-event="header_cta_click">Garantir meu ingresso</TicketLink>
    </header>
  );
}
