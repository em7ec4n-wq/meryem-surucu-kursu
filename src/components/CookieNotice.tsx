"use client";

import React from "react";
import Link from "next/link";
import { useSiteConfig } from "@/lib/site-context";

export function CookieNotice() {
  const { cookieConsent, setCookieConsent } = useSiteConfig();

  if (cookieConsent !== "pending") return null;

  return (
    <aside
      aria-label="Çerez bildirimi"
      className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[#DDDFE2] shadow-[0_-4px_18px_rgba(9,27,50,0.08)]"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-[13px] text-[#091B32] leading-snug pr-14 lg:pr-0">
          Bu sitede yalnızca temel işlevler için gerekli tarayıcı tercihleri
          kullanılır. İzne tabi analiz veya pazarlama çerezleri tercih
          verilmeden çalıştırılmaz.{" "}
          <Link
            href="/gizlilik"
            className="underline font-medium text-[#0A2340] hover:text-[#CB1426]"
          >
            Gizlilik ve çerez politikası
          </Link>
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setCookieConsent("essential")}
            className="min-h-[40px] px-3.5 text-[13px] font-medium border border-[#DDDFE2] rounded-[8px] text-[#091B32] hover:bg-[#F8F8F8] transition-colors"
          >
            Yalnızca Gerekli
          </button>
          <button
            type="button"
            onClick={() => setCookieConsent("accepted")}
            className="min-h-[40px] px-3.5 text-[13px] font-semibold bg-[#0A2340] hover:bg-[#07192F] text-white rounded-[8px] transition-colors"
          >
            Tamam
          </button>
        </div>
      </div>
    </aside>
  );
}
