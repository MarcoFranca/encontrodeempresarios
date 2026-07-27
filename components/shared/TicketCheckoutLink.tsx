"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackMetaEvent } from "../analytics/meta";

type TicketCheckoutLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  href: string;
  ticketName: string;
  ticketId: string;
  value: number;
  quantity: number;
};

export function TicketCheckoutLink({ children, href, ticketName, ticketId, value, quantity, onClick, ...props }: TicketCheckoutLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    trackMetaEvent("InitiateCheckout", { content_name: ticketName, content_ids: [ticketId], content_type: "product", currency: "BRL", num_items: quantity, value });
  };

  return <a {...props} href={href} onClick={handleClick}>{children}</a>;
}
