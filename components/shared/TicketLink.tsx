"use client";

import { useReducedMotion } from "framer-motion";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type TicketLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function TicketLink({ children, onClick, ...props }: TicketLinkProps) {
  const reduceMotion = useReducedMotion();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    event.preventDefault();
    document.getElementById("ingressos")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  };

  return <a {...props} href="#ingressos" onClick={handleClick}>{children}</a>;
}
