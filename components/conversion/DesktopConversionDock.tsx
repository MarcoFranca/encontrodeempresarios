"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { TicketLink } from "../shared/TicketLink";

export function DesktopConversionDock() {
  const [visible, setVisible] = useState(false);
  const [coveredSection, setCoveredSection] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const update = () => {
      setVisible(scrollY > innerHeight * 0.7);
      const sections = [...document.querySelectorAll("#ingressos, #anfitriao")];
      setCoveredSection(sections.some((element) => {
        const bounds = element.getBoundingClientRect();
        return bounds.top < innerHeight * 0.75 && bounds.bottom > innerHeight * 0.25;
      }));
    };
    addEventListener("scroll", update, { passive: true });
    update();
    return () => removeEventListener("scroll", update);
  }, []);

  return <AnimatePresence>{visible && !coveredSection ? <motion.aside className="desktop-dock" initial={reduced ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 22 }}>
    <span>21 AGO · ALPHAVILLE</span><b>Ingressos a partir de R$ 197</b><TicketLink>Garantir meu ingresso ↗</TicketLink>
  </motion.aside> : null}</AnimatePresence>;
}
