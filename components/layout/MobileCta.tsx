"use client";
import { useEffect, useState } from "react";
import { TicketLink } from "../shared/TicketLink";

export function MobileCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.72); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <div className={`mobile-cta ${visible ? "mobile-cta--visible" : ""}`}><span><small>A partir de</small>R$ 197</span><TicketLink data-event="mobile_cta_click">Garantir <span aria-hidden="true">↗</span></TicketLink></div>;
}
