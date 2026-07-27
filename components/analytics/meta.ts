"use client";

export type MetaStandardEvent = "Contact" | "ViewContent" | "InitiateCheckout";

export type MetaParameters = Record<string, string | number | string[] | undefined>;

export type MetaPixelFunction = ((command: "init" | "track", eventOrPixel: string, parameters?: MetaParameters) => void) & {
  callMethod?: (command: "init" | "track", eventOrPixel: string, parameters?: MetaParameters) => void;
  queue?: Array<["init" | "track", string, MetaParameters?]>;
  push?: MetaPixelFunction;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
  }
}

export function trackMetaEvent(eventName: MetaStandardEvent, parameters?: MetaParameters) {
  window.fbq?.("track", eventName, parameters);
}
