"use client";

import { useEffect } from "react";
import type { MetaParameters, MetaPixelFunction } from "./meta";

const PIXEL_ID = "1019463380954426";

export function MetaPixel() {
  useEffect(() => {
    if (window.fbq) return;

    const fbq = ((command: "init" | "track", eventOrPixel: string, parameters?: MetaParameters) => {
      if (fbq.callMethod) fbq.callMethod(command, eventOrPixel, parameters);
      else fbq.queue?.push([command, eventOrPixel, parameters]);
    }) as MetaPixelFunction;

    fbq.queue = [];
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
  }, []);

  return null;
}
