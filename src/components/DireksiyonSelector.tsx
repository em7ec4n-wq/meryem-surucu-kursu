"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icons";

export function DireksiyonSelector() {
  const [vites, setVites] = useState<"" | "manuel" | "otomatik">("");

  const plannerHref =
    vites === "manuel" || vites === "otomatik"
      ? `/?egitim=direksiyon&vites=${vites}#egitim-plani`
      : "/?egitim=direksiyon#egitim-plani";

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display font-extrabold text-[26px] uppercase text-[#091B32]">
          Manuel ve Otomatik Seçenekleri
        </h2>
        <p className="mt-2 text-[15px] text-[#4B5563] leading-relaxed">
          Uygulamalı direksiyon eğitimini sürüş tercihine göre manuel veya
          otomatik vitesli eğitim aracıyla planlayabilirsin.
        </p>
      </div>

      <div
        role="group"
        aria-label="Vites tercihi seç"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        <button
          type="button"
          onClick={() => setVites((prev) => (prev === "manuel" ? "" : "manuel"))}
          aria-pressed={vites === "manuel"}
          className={`p-4 rounded-[12px] border text-left transition-all min-h-[88px] ${
            vites === "manuel"
              ? "border-[#CB1426] bg-[#CB1426]/5 ring-1 ring-[#CB1426]"
              : "border-[#DDDFE2] bg-[#F8F8F8] hover:border-[#0A2340]"
          }`}
        >
          <span className="block font-bold text-[16px] text-[#091B32]">
            Manuel Vites
          </span>
          <span className="mt-1 block text-[13px] text-[#4B5563] leading-snug">
            Debriyaj kullanımı, kalkış ve vites değişimi üzerine pratik.
          </span>
        </button>

        <button
          type="button"
          onClick={() =>
            setVites((prev) => (prev === "otomatik" ? "" : "otomatik"))
          }
          aria-pressed={vites === "otomatik"}
          className={`p-4 rounded-[12px] border text-left transition-all min-h-[88px] ${
            vites === "otomatik"
              ? "border-[#CB1426] bg-[#CB1426]/5 ring-1 ring-[#CB1426]"
              : "border-[#DDDFE2] bg-[#F8F8F8] hover:border-[#0A2340]"
          }`}
        >
          <span className="block font-bold text-[16px] text-[#091B32]">
            Otomatik Vites
          </span>
          <span className="mt-1 block text-[13px] text-[#4B5563] leading-snug">
            Vites değiştirmeden kalkış, duruş ve trafik akışına odaklanma.
          </span>
        </button>
      </div>

      <div className="pt-1 flex flex-wrap items-center gap-3">
        <Link
          href={plannerHref}
          className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
        >
          <span>Eğitim planını oluştur</span>
          <Icon name="ok-sag" size={18} />
        </Link>
        {vites && (
          <span className="text-[13px] text-[#4B5563]">
            Seçili tercih:{" "}
            <strong className="text-[#091B32]">
              {vites === "manuel" ? "Manuel" : "Otomatik"}
            </strong>{" "}
            (planlayıcıya aktarılır)
          </span>
        )}
      </div>
    </div>
  );
}
