"use client";

import React from "react";
import { useSiteConfig } from "@/lib/site-context";

export function PrivacyControls() {
  const { cookieConsent, setCookieConsent } = useSiteConfig();

  return (
    <div className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8] space-y-3">
      <h3 className="font-display font-extrabold text-[22px] uppercase text-[#091B32]">
        Çerez Tercihiniz
      </h3>
      <p className="text-[14px] text-[#4B5563]">
        Mevcut durum:{" "}
        <strong className="text-[#091B32]">
          {cookieConsent === "accepted"
            ? "Temel tercihler onaylandı"
            : cookieConsent === "essential"
            ? "Yalnızca gerekli tercihler"
            : "Henüz seçilmedi"}
        </strong>
      </p>
      <div className="flex flex-wrap gap-3 pt-1">
        <button
          type="button"
          onClick={() => setCookieConsent("essential")}
          className="min-h-[44px] px-4 rounded-[10px] border border-[#DDDFE2] bg-white hover:border-[#0A2340] text-[14px] font-medium text-[#091B32] transition-colors"
        >
          Yalnızca Gerekli
        </button>
        <button
          type="button"
          onClick={() => setCookieConsent("accepted")}
          className="min-h-[44px] px-4 rounded-[10px] bg-[#0A2340] hover:bg-[#07192F] text-[14px] font-semibold text-white transition-colors"
        >
          Tercihi Onayla
        </button>
      </div>
    </div>
  );
}
