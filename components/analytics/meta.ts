"use client";

export type MetaStandardEvent = "Contact" | "ViewContent" | "InitiateCheckout";
export type MetaEventCommand = "init" | "track" | "trackCustom";

export type MetaParameters = Record<string, string | number | string[] | undefined>;

export type MetaPixelFunction = ((command: MetaEventCommand, eventOrPixel: string, parameters?: MetaParameters) => void) & {
  callMethod?: (command: MetaEventCommand, eventOrPixel: string, parameters?: MetaParameters) => void;
  queue?: Array<[MetaEventCommand, string, MetaParameters?]>;
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

export function trackMetaCustomEvent(eventName: string, parameters?: MetaParameters) {
  window.fbq?.("trackCustom", eventName, parameters);
}
