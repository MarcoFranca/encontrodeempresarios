/* eslint-disable @next/next/no-img-element */
import {eventContent} from "@/content/event";
import {SectionHeading} from "@/components/shared/SectionHeading";

export function SpeakersSection() {
  return <section className="speakers speakers--portrait" id="convidados">
    <SectionHeading eyebrow="Convidados especiais" title="Quem vai colocar mais repertório na sala." description="Não são nomes em um banner. É a chance de estar perto de visões, histórias e conversas que podem reposicionar a forma como você enxerga o seu negócio." align="center"/>
    <div className="speaker-grid">{eventContent.speakers.map((speaker) => {
      const image = speaker.name === "Pablo Marçal" ? "/images/people/pablo-marcal.jpg" : "/images/people/bruno-avelar.jpg";
      return <article className="speaker-card" key={speaker.name}>
        <div className="speaker-photo speaker-photo--portrait"><img src={image} alt={`Retrato de ${speaker.name}`}/></div>
        <div className="speaker-card__copy"><p className="eyebrow">{speaker.focus}</p><h3>{speaker.name}</h3><p className="speaker-role">{speaker.role}</p><p>{speaker.description}</p></div>
      </article>;
    })}</div>
    <p className="speakers-close">Você não precisa assistir de longe. Precisa estar no ambiente, captar as entrelinhas e participar de uma conversa que continua depois do encontro.</p>
  </section>;
}
