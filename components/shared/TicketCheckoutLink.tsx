"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackMetaCustomEvent, trackMetaEvent } from "../analytics/meta";

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

    const parameters = { content_name: ticketName, content_ids: [ticketId], content_type: "product", currency: "BRL", num_items: quantity, value };
    trackMetaEvent("InitiateCheckout", parameters);
    trackMetaCustomEvent(`Checkout_${ticketId}`, parameters);

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.currentTarget.target === "_blank") return;

    event.preventDefault();
    window.setTimeout(() => window.location.assign(href), 220);
  };

  return <a {...props} href={href} onClick={handleClick}>{children}</a>;
}
