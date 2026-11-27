"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { useSiteConfig } from "@/lib/site-context";
import { buildGeneralWhatsAppMessage, buildWhatsAppUrl } from "@/lib/site-data";

interface CtaBandProps {
  trainingName?: string;
}

export function CtaBand({ trainingName }: CtaBandProps) {
  const { config } = useSiteConfig();
  const waMessage = buildGeneralWhatsAppMessage(trainingName);
  const waHref = buildWhatsAppUrl(config.whatsappCandidateNumber, waMessage);

  return (
    <section
      aria-label="Kayıt çağrısı"
      className="w-full bg-[#0A2340] text-white"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8 py-7 lg:py-6 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-6">
          <h2 className="font-display font-extrabold text-[28px] lg:text-[32px] leading-none uppercase tracking-tight shrink-0">
            Kayıt bilgisi alın
          </h2>
          <span
            aria-hidden="true"
            className="hidden lg:block w-px h-8 bg-white/25"
          />
          <p className="text-[14px] lg:text-[15px] text-white/90 max-w-[460px]">
            Eğitim planı, kontenjan ve kayıt süreci hakkında bilgi alın.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          {config.whatsappApproved ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
            >
              <Icon name="whatsapp" size={20} />
              <span>WhatsApp’tan bilgi al</span>
              <Icon name="ok-sag" size={18} />
            </a>
          ) : (
            <Link
              href="/iletisim#kayit"
              className="inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
            >
              <Icon name="whatsapp" size={20} />
              <span>WhatsApp’tan bilgi al</span>
              <Icon name="ok-sag" size={18} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
