/* eslint-disable @next/next/no-img-element -- Vinext's local image optimizer crashes without a Cloudflare asset binding. */
import { TicketLink } from "../shared/TicketLink";
export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Encontro de Empresários, início">
        <img src="/brand/logo-encontro-empresarios.png" width="1513" height="1024" alt="Encontro de Empresários" />
      </a>
      <nav aria-label="Navegação principal">
        <a href="#experiencia">A experiência</a>
        <a href="#convidados">Convidados</a>
        <a href="#ingressos">Ingressos</a>
      </nav>
      <TicketLink className="header-cta" data-event="header_cta_click">Garantir meu ingresso</TicketLink>
    </header>
  );
}
