"use client";

import { useReducedMotion } from "framer-motion";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type ScrollLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  targetId: string;
};

export function ScrollLink({ children, onClick, targetId, ...props }: ScrollLinkProps) {
  const reduceMotion = useReducedMotion();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  };

  return <a {...props} href={`#${targetId}`} onClick={handleClick}>{children}</a>;
}
