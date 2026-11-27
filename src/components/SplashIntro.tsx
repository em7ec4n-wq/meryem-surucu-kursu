"use client";

import React, { useEffect, useState } from "react";
import { useSiteConfig } from "@/lib/site-context";

const SPLASH_SESSION_KEY = "meryem_splash_seen_v1";

export function SplashIntro() {
  const { config } = useSiteConfig();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reducedMotion) return;

      const alreadySeen = window.sessionStorage.getItem(SPLASH_SESSION_KEY);
      if (alreadySeen) return;

      window.sessionStorage.setItem(SPLASH_SESSION_KEY, "1");
      setVisible(true);

      const timer = window.setTimeout(() => {
        setVisible(false);
      }, 650);

      return () => window.clearTimeout(timer);
    } catch {
      // ignore storage errors
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-white pointer-events-none splash-backdrop-anim"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={config.logoSrc}
        alt=""
        width={240}
        height={72}
        onError={() => setVisible(false)}
        className="w-[180px] sm:w-[220px] h-auto object-contain splash-logo-anim"
      />
    </div>
  );
}
