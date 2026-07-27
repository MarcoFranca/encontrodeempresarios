import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ScrollLink } from "./ScrollLink";

type TicketLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function TicketLink({ children, onClick, ...props }: TicketLinkProps) {
  return <ScrollLink {...props} targetId="ingressos" onClick={onClick}>{children}</ScrollLink>;
}
