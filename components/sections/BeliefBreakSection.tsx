import { Reveal } from "../shared/Reveal";

export function BeliefBreakSection() {
  return <section className="belief belief--immersive">
    <div className="belief-image">
      <div className="belief-image-note">
        <span>ENCONTRO PRESENCIAL</span>
        <p>Decisões relevantes<br />pedem conversas à altura.</p>
      </div>
    </div>
    <Reveal className="belief-copy-wrap">
      <p className="eyebrow">O custo do isolamento</p>
      <h2>O problema não é falta de informação.<br /><em>É continuar decidindo sozinho.</em></h2>
      <p>Quando o ambiente melhora, as perguntas ficam melhores. E boas perguntas levam a decisões mais claras.</p>
    </Reveal>
  </section>;
}
