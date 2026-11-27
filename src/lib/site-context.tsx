"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_SITE_CONFIG, SiteConfig } from "./site-data";

const STORAGE_KEY = "meryem_cms_config_v1";

interface SiteContextValue {
  config: SiteConfig;
  updateConfig: (next: SiteConfig) => void;
  resetConfig: () => void;
  cookieConsent: "pending" | "accepted" | "essential";
  setCookieConsent: (val: "accepted" | "essential") => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_SITE_CONFIG);
  const [cookieConsent, setCookieConsentState] = useState<
    "pending" | "accepted" | "essential"
  >("essential");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<SiteConfig>;
        setConfig({ ...DEFAULT_SITE_CONFIG, ...parsed });
      }
      const consent = window.localStorage.getItem("meryem_cookie_pref");
      if (consent === "accepted" || consent === "essential") {
        setCookieConsentState(consent);
      } else {
        setCookieConsentState("pending");
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const updateConfig = (next: SiteConfig) => {
    setConfig(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore storage errors
    }
  };

  const resetConfig = () => {
    setConfig(DEFAULT_SITE_CONFIG);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore storage errors
    }
  };

  const setCookieConsent = (val: "accepted" | "essential") => {
    setCookieConsentState(val);
    try {
      window.localStorage.setItem("meryem_cookie_pref", val);
    } catch {
      // ignore storage errors
    }
  };

  return (
    <SiteContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        cookieConsent,
        setCookieConsent,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteConfig() {
  const ctx = useContext(SiteContext);
  if (!ctx) {
    throw new Error("useSiteConfig must be used inside SiteProvider");
  }
  return ctx;
}
