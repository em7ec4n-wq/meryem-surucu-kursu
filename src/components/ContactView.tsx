"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "./Icons";
import { useSiteConfig } from "@/lib/site-context";
import {
  buildGeneralWhatsAppMessage,
  buildPlannerWhatsAppMessage,
  buildWhatsAppUrl,
} from "@/lib/site-data";

function ContactViewInner() {
  const { config } = useSiteConfig();
  const searchParams = useSearchParams();
  const sinif = searchParams.get("sinif");
  const vites = searchParams.get("vites");

  const hasPlan =
    Boolean(sinif) && (vites === "manuel" || vites === "otomatik");

  const waMessage = hasPlan
    ? buildPlannerWhatsAppMessage(
        sinif!,
        vites as "manuel" | "otomatik",
        false
      )
    : buildGeneralWhatsAppMessage();

  const waUrl = buildWhatsAppUrl(config.whatsappCandidateNumber, waMessage);

  return (
    <div className="space-y-8">
      {/* #kayit Section */}
      <section
        id="kayit"
        aria-labelledby="kayit-baslik"
        className="scroll-mt-24 rounded-[14px] border border-[#DDDFE2] bg-[#0A2340] text-white p-6 lg:p-8"
      >
        <h2
          id="kayit-baslik"
          className="font-display font-extrabold text-[28px] lg:text-[34px] uppercase"
        >
          Kayıt ve Bilgi Talebi
        </h2>
        <p className="mt-2 text-[15px] text-white/85 max-w-[660px] leading-relaxed">
          Eğitim planı, kayıt belgeleri ve uygun dönem bilgisi için telefonla
          arayabilir veya onaylı başvuru kanallarımızdan bize ulaşabilirsin.
        </p>

        {hasPlan && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-white/10 border border-white/20 text-[14px]">
            <span>Seçilen plan:</span>
            <strong>
              {sinif} sınıfı · {vites === "otomatik" ? "Otomatik" : "Manuel"}
            </strong>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={config.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
          >
            <Icon name="telefon" size={19} />
            <span>Hemen Ara: {config.phoneDisplay}</span>
          </a>

          {config.whatsappApproved ? (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 bg-[#1EBE5D] hover:bg-[#17A34F] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
            >
              <Icon name="whatsapp" size={20} />
              <span>WhatsApp’tan Yaz</span>
              <Icon name="ok-sag" size={18} />
            </a>
          ) : (
            <div className="w-full sm:w-auto flex items-center gap-2.5 px-4 py-2.5 rounded-[10px] bg-white/10 border border-white/20 text-[13px] text-white/90">
              <Icon name="whatsapp" size={18} className="shrink-0 text-[#1EBE5D]" />
              <span>
                WhatsApp başvuru hattı (+90 533 392 52 05) müşteri onayı sonrası
                etkinleştirilecektir. Şimdilik telefon hattımızdan hızlıca bilgi
                alabilirsin.
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8]">
          <div className="w-11 h-11 rounded-[10px] bg-white border border-[#DDDFE2] flex items-center justify-center text-[#0A2340]">
            <Icon name="telefon" size={22} />
          </div>
          <h3 className="mt-4 font-display font-extrabold text-[22px] uppercase text-[#091B32]">
            Telefon
          </h3>
          <p className="mt-1.5 text-[14px] text-[#4B5563]">
            Kayıt ve eğitim planı hakkında doğrudan bilgi almak için:
          </p>
          <a
            href={config.phoneHref}
            className="mt-3 inline-flex items-center gap-2 min-h-[44px] text-[16px] font-bold text-[#0A2340] hover:text-[#CB1426]"
          >
            {config.phoneDisplay}
          </a>
        </div>

        <div className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8]">
          <div className="w-11 h-11 rounded-[10px] bg-white border border-[#DDDFE2] flex items-center justify-center text-[#0A2340]">
            <Icon name="konum" size={22} />
          </div>
          <h3 className="mt-4 font-display font-extrabold text-[22px] uppercase text-[#091B32]">
            Adres ve Yol Tarifi
          </h3>
          <p className="mt-1.5 text-[14px] text-[#4B5563]">{config.address}</p>
          <a
            href={config.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 min-h-[44px] text-[15px] font-semibold text-[#CB1426] hover:underline"
          >
            <span>Haritada yol tarifi al</span>
            <Icon name="ok-sag" size={16} />
          </a>
        </div>

        <div className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8]">
          <div className="w-11 h-11 rounded-[10px] bg-white border border-[#DDDFE2] flex items-center justify-center text-[#0A2340]">
            <Icon name="whatsapp" size={22} />
          </div>
          <h3 className="mt-4 font-display font-extrabold text-[22px] uppercase text-[#091B32]">
            WhatsApp Hattı
          </h3>
          {config.whatsappApproved ? (
            <>
              <p className="mt-1.5 text-[14px] text-[#4B5563]">
                Onaylı WhatsApp başvuru hattımız üzerinden mesaj gönderebilirsin.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 min-h-[44px] text-[15px] font-semibold text-[#1EBE5D] hover:underline"
              >
                <span>WhatsApp’tan Yaz</span>
                <Icon name="ok-sag" size={16} />
              </a>
            </>
          ) : (
            <p className="mt-1.5 text-[14px] text-[#4B5563]">
              Aday WhatsApp hattı önizleme yapılandırmasında tanımlıdır; yayın
              onayı tamamlandığında doğrudan mesaj bağlantısı açılacaktır.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function ContactView() {
  return (
    <Suspense
      fallback={
        <div className="h-[220px] rounded-[14px] bg-[#F8F8F8] border border-[#DDDFE2]" />
      }
    >
      <ContactViewInner />
    </Suspense>
  );
}
