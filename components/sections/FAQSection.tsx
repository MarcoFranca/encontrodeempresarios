"use client";

import { useState } from "react";
import { eventContent } from "../../content/event";
import { SectionHeading } from "../shared/SectionHeading";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="faq section" id="faq"><SectionHeading eyebrow="Informações práticas" title="Antes de entrar na sala" align="center" />
    <div className="faq-list">{eventContent.faq.map(([question, answer], index) => {
      const isOpen = open === index;
      return <div className="faq-item" key={question}><button aria-expanded={isOpen} aria-controls={`faq-${index}`} onClick={() => setOpen(isOpen ? null : index)}><span>{question}</span><b aria-hidden="true">{isOpen ? "−" : "+"}</b></button>{isOpen ? <div id={`faq-${index}`} className="faq-answer">{answer}</div> : null}</div>;
    })}</div>
  </section>;
}
