/* eslint-disable @next/next/no-img-element */
import { SectionHeading } from "../shared/SectionHeading";

export function HostSection() {
  return <section className="host host--editorial" id="anfitriao">
    <div className="host-placeholder">
      <img src="/images/people/paulo-henriques.jpg" alt="Paulo Henriques, anfitrião do Encontro de Empresários" />
      <div className="host-nameplate"><span>PAULO<br />HENRIQUES</span><small>ANFITRIÃO</small></div>
    </div>
    <div className="host-copy">
      <SectionHeading eyebrow="Seu anfitrião" title="Paulo abre a sala onde a conversa ganha outro nível." />
      <p>Paulo Henriques reúne empresários para aproximar estratégia, posicionamento e próximos passos em um mesmo ambiente.</p>
      <div className="host-trust" aria-label="Sinais de credibilidade do encontro">
        <span>CONVIDADOS ESPECIAIS</span><span>NETWORKING PRESENCIAL</span><span>ALPHAVILLE, SP</span>
      </div>
      <p className="host-signature">“Ambiente é uma decisão estratégica.”</p>
    </div>
  </section>;
}
