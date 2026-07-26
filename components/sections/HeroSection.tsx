"use client";
/* eslint-disable @next/next/no-img-element -- Vinext's local image optimizer crashes without a Cloudflare asset binding. */
import { motion, useReducedMotion } from "framer-motion";
import { eventContent } from "../../content/event";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const };
  const enter = (delay: number) => reduceMotion ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { ...transition, delay } };

  return <section className="hero hero--cinematic" id="inicio">
    <img className="hero-scene" src="/images/cinematic-business-event.png" width="1712" height="912" alt="Público em um evento empresarial sob iluminação de palco" />
    <div className="hero-overlay" aria-hidden="true" /><div className="hero-grid" aria-hidden="true" />
    <div className="hero-content">
      <motion.p className="eyebrow hero-eyebrow" {...enter(0.05)}>{eventContent.dateLabel} <span>·</span> {eventContent.city}</motion.p>
      <motion.p className="hero-host" {...enter(0.09)}>COM PAULO HENRIQUES <span>·</span> ANFITRIÃO</motion.p>
      <motion.img className="hero-logo" src="/brand/logo-encontro-empresarios.png" width="1513" height="1024" alt="Logo oficial Encontro de Empresários" {...enter(0.12)} />
      <motion.h1 {...enter(0.2)}>Um dia na sala certa pode mudar a velocidade das suas decisões.</motion.h1>
      <motion.p className="hero-copy" {...enter(0.3)}>Estratégia prática, conexões empresariais e conversas que normalmente levariam anos para acontecer — concentradas em uma experiência presencial em Alphaville.</motion.p>
      <motion.div className="hero-actions" {...enter(0.4)}><a className="button button--gold" href="#ingressos" data-event="hero_cta_click">Garantir meu ingresso <span aria-hidden="true">↗</span></a><a className="button button--ghost" href="#experiencia">Conhecer a experiência <span aria-hidden="true">↓</span></a></motion.div>
      <motion.div className="hero-meta hero-meta--prominent" aria-label="Informações do evento" {...enter(0.52)}><span><b>21 AGO</b>2026</span><span><b>10H–18H</b>presencial</span><span><b>ALPHAVILLE</b>SP</span></motion.div>
    </div>
    <aside className="hero-proof"><span className="eyebrow">Uma experiência presencial</span><p>Uma sala desenhada para repertório, relações e decisões mais maduras.</p></aside><div className="hero-stage-card"><span>21</span><p>AGOSTO<br />ALPHAVILLE</p></div><a className="hero-scroll-cue" href="#efeito-sala-certa" aria-label="Conhecer o Efeito Sala Certa"><span>ROLE PARA EXPLORAR</span><i aria-hidden="true" /></a>
  </section>;
}
