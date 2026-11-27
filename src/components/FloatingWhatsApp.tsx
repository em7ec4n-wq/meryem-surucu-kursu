"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icons";
import { useSiteConfig } from "@/lib/site-context";
import { buildGeneralWhatsAppMessage, buildWhatsAppUrl } from "@/lib/site-data";

function getTrainingNameFromPath(pathname: string | null): string | undefined {
  if (!pathname) return undefined;
  if (pathname.includes("/egitimler/teorik-egitim")) return "Teorik Eğitim";
  if (pathname.includes("/egitimler/direksiyon-egitimi"))
    return "Direksiyon Eğitimi";
  if (pathname.includes("/egitimler/sinava-hazirlik")) return "Sınava Hazırlık";
  return undefined;
}

export function FloatingWhatsApp() {
  const { config, cookieConsent } = useSiteConfig();
  const pathname = usePathname();
  const trainingName = getTrainingNameFromPath(pathname);
  const message = buildGeneralWhatsAppMessage(trainingName);
  const waUrl = buildWhatsAppUrl(config.whatsappCandidateNumber, message);

  // Stay above cookie banner when visible
  const bottomOffsetClass =
    cookieConsent === "pending"
      ? "bottom-[84px] sm:bottom-[76px]"
      : "bottom-4 sm:bottom-5";

  const sharedClass = `fixed right-4 sm:right-5 ${bottomOffsetClass} z-50 inline-flex items-center justify-center bg-[#1EBE5D] hover:bg-[#17A34F] text-white shadow-[0_6px_20px_rgba(10,35,64,0.22)] transition-all w-[52px] h-[52px] lg:w-auto lg:h-[48px] lg:px-5 rounded-full gap-2.5`;

  if (config.whatsappApproved) {
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp’tan Yaz"
        className={sharedClass}
        style={{
          marginBottom: "env(safe-area-inset-bottom, 0px)",
          marginRight: "env(safe-area-inset-right, 0px)",
        }}
      >
        <Icon name="whatsapp" size={24} className="shrink-0" />
        <span className="hidden lg:inline text-[14px] font-semibold whitespace-nowrap">
          WhatsApp’tan Yaz
        </span>
      </a>
    );
  }

  return (
    <Link
      href="/iletisim#kayit"
      aria-label="WhatsApp’tan Yaz"
      title="Başvuru ve iletişim kanalları"
      className={sharedClass}
      style={{
        marginBottom: "env(safe-area-inset-bottom, 0px)",
        marginRight: "env(safe-area-inset-right, 0px)",
      }}
    >
      <Icon name="whatsapp" size={24} className="shrink-0" />
      <span className="hidden lg:inline text-[14px] font-semibold whitespace-nowrap">
        WhatsApp’tan Yaz
      </span>
    </Link>
  );
}
