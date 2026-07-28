/* eslint-disable @next/next/no-img-element */
import { SectionHeading } from "../shared/SectionHeading";

const moments = [
  ["Conteúdo que provoca", "Ideias e perspectivas para você enxergar o negócio além do que a rotina deixa ver."],
  ["Conversas que continuam", "O que acontece perto do palco também importa: perguntas, trocas e conexões que não cabem em uma transmissão."],
  ["Relações em contexto", "Você não vai apenas colecionar contatos. Vai encontrar pessoas que também carregam decisões, desafios e ambições reais."],
  ["Próximos passos mais claros", "Talvez você não saia com todas as respostas. Mas dificilmente vai continuar fazendo as mesmas perguntas."],
];

export function ExperienceSection() {
  return <section className="experience experience--journey" id="experiencia">
    <div className="experience-visual"><img src="/images/event/networking.png" alt="Empresários em conversa durante um encontro"/><span>CONVERSAS<br/>QUE MOVEM</span></div>
    <div className="experience-copy">
      <SectionHeading eyebrow="A experiência" title="Você não vai para mais um evento."/>
      <p>Você vai entrar em uma sala onde as conversas não terminam quando o palco apaga. Um dia ao lado de empresários e líderes que entendem o peso de crescer, escolher o próximo movimento e não ter todas as respostas sozinho.</p>
      <p className="experience-copy__highlight">Aqui, você encontra mais do que conteúdo. Encontra repertório, relações e o tipo de ambiente que faz você se perguntar por que demorou tanto para estar ali.</p>
      <ol>{moments.map(([title, description], index) => <li key={title}><b>0{index + 1}</b><span><strong>{title}</strong>{description}</span></li>)}</ol>
    </div>
  </section>;
}
