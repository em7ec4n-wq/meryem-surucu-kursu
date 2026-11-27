"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Icon } from "./Icons";
import { useSiteConfig } from "@/lib/site-context";
import {
  TRAINING_CARDS,
  buildPlannerWhatsAppMessage,
  buildWhatsAppUrl,
} from "@/lib/site-data";

type TransmissionValue = "" | "manuel" | "otomatik";

const COMPARE_CONTENT = {
  manuel: {
    label: "Manuel",
    badge: "Tam kontrol",
    description:
      "Debriyaj kullanımı, kalkış ve vites değişimi üzerine pratik yaparsın.",
  },
  otomatik: {
    label: "Otomatik",
    badge: "Akıcı sürüş",
    description:
      "Vites değiştirmeden kalkış, duruş ve trafik akışına odaklanırsın.",
  },
} as const;

function PlannerAndCompareInner() {
  const { config } = useSiteConfig();
  const searchParams = useSearchParams();

  const publishedCatalog = useMemo(
    () => config.trainingCatalog.filter((c) => c.status === "yayinda"),
    [config.trainingCatalog]
  );

  // Initial state: Example B + Otomatik
  const [selectedClass, setSelectedClass] = useState<string>("B");
  const [selectedTransmission, setSelectedTransmission] =
    useState<TransmissionValue>("otomatik");
  const [isExample, setIsExample] = useState<boolean>(true);

  // Compare tab starts on Manuel without changing planner's initial Otomatik example
  const [compareTab, setCompareTab] = useState<"manuel" | "otomatik">("manuel");

  // Sync valid URL params (e.g. /?egitim=direksiyon&vites=manuel#egitim-plani)
  useEffect(() => {
    const vitesParam = searchParams.get("vites");
    const sinifParam = searchParams.get("sinif");
    if (vitesParam === "manuel" || vitesParam === "otomatik") {
      setSelectedTransmission(vitesParam);
      setIsExample(false);
    }
    if (sinifParam) {
      const match = publishedCatalog.find(
        (c) => c.licenseClass.toLowerCase() === sinifParam.toLowerCase()
      );
      if (match) {
        setSelectedClass(match.licenseClass);
        setIsExample(false);
      }
    }
  }, [searchParams, publishedCatalog]);

  const isMissingSelection = !selectedClass || !selectedTransmission;
  const matchedClass = publishedCatalog.find(
    (c) => c.licenseClass === selectedClass
  );
  const isValidCombination =
    !isMissingSelection &&
    Boolean(
      matchedClass?.transmissions.some((t) => t.value === selectedTransmission)
    );

  const transmissionDisplay =
    selectedTransmission === "otomatik"
      ? "Otomatik"
      : selectedTransmission === "manuel"
      ? "Manuel"
      : "";

  const waMessage =
    isValidCombination &&
    (selectedTransmission === "manuel" || selectedTransmission === "otomatik")
      ? buildPlannerWhatsAppMessage(
          selectedClass,
          selectedTransmission,
          isExample
        )
      : "";

  const waHref = waMessage
    ? buildWhatsAppUrl(config.whatsappCandidateNumber, waMessage)
    : "#";

  const handleClassChange = (val: string) => {
    setSelectedClass(val);
    setIsExample(false);
  };

  const handleTransmissionChange = (val: TransmissionValue) => {
    setSelectedTransmission(val);
    setIsExample(false);
  };

  const handleUserCompareTabChange = (nextTab: "manuel" | "otomatik") => {
    setCompareTab(nextTab);
    setSelectedTransmission(nextTab);
    if (!selectedClass && publishedCatalog[0]) {
      setSelectedClass(publishedCatalog[0].licenseClass);
    }
    setIsExample(false);
  };

  const handleCompareKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      handleUserCompareTabChange(
        compareTab === "manuel" ? "otomatik" : "manuel"
      );
    }
  };

  return (
    <>
      {/* 3. EĞİTİM PLANLAYICI */}
      <section
        id="egitim-plani"
        aria-labelledby="egitim-plani-baslik"
        className="w-full bg-gradient-to-b from-white via-[#F8FAFC] to-white py-8 lg:py-11 scroll-mt-20"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-6">
            <h2
              id="egitim-plani-baslik"
              className="font-display font-extrabold text-[28px] lg:text-[36px] leading-tight uppercase text-[#091B32]"
            >
              Eğitim planını oluştur
            </h2>
            <span className="heading-underline" aria-hidden="true" />
            <p className="mt-2.5 text-[14px] lg:text-[15px] text-[#4B5563]">
              Sana uygun eğitim planını hızlıca oluştur, detaylı bilgi al.
            </p>
          </div>

          <div className="border border-[#DDDFE2] rounded-[18px] overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-12 shadow-[0_14px_38px_rgba(9,27,50,0.07)]">
            {/* Left 60% Modern Selection Cards Area */}
            <div className="lg:col-span-7 p-4 sm:p-6 lg:p-7 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F3F6FA] flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Ehliyet Sınıfı Selector Box */}
                <div className="group p-3.5 rounded-[14px] bg-white border border-[#DDDFE2] shadow-[0_2px_10px_rgba(9,27,50,0.03)] hover:border-[#0A2340]/45 focus-within:border-[#CB1426] focus-within:ring-2 focus-within:ring-[#CB1426]/15 transition-all">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <label
                      htmlFor="ehliyet-sinifi-select"
                      className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#4B5563]"
                    >
                      <span className="w-6 h-6 rounded-[7px] bg-[#0A2340]/8 text-[#0A2340] flex items-center justify-center">
                        <Icon name="belge" size={14} />
                      </span>
                      <span>Ehliyet sınıfı</span>
                    </label>
                    {selectedClass && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#0A2340]/8 text-[#0A2340]">
                        Seçili
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <select
                      id="ehliyet-sinifi-select"
                      value={selectedClass}
                      onChange={(e) => handleClassChange(e.target.value)}
                      className="custom-select w-full min-h-[44px] appearance-none bg-[#F8FAFC] border border-[#DDDFE2]/80 rounded-[10px] pl-3.5 pr-10 text-[15px] font-semibold text-[#091B32] hover:bg-white focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="">Seçiniz</option>
                      {publishedCatalog.map((item) => (
                        <option key={item.id} value={item.licenseClass}>
                          {item.licenseLabel}
                        </option>
                      ))}
                    </select>
                    <Icon
                      name="chevron"
                      size={18}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0A2340]"
                    />
                  </div>
                </div>

                {/* Vites Tercihi Selector Box */}
                <div className="group p-3.5 rounded-[14px] bg-white border border-[#DDDFE2] shadow-[0_2px_10px_rgba(9,27,50,0.03)] hover:border-[#0A2340]/45 focus-within:border-[#CB1426] focus-within:ring-2 focus-within:ring-[#CB1426]/15 transition-all">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <label
                      htmlFor="vites-tercihi-select"
                      className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#4B5563]"
                    >
                      <span className="w-6 h-6 rounded-[7px] bg-[#CB1426]/10 text-[#CB1426] flex items-center justify-center">
                        <Icon name="direksiyon" size={14} />
                      </span>
                      <span>Vites tercihi</span>
                    </label>
                    {selectedTransmission && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#CB1426]/10 text-[#CB1426]">
                        {transmissionDisplay}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <select
                      id="vites-tercihi-select"
                      value={selectedTransmission}
                      onChange={(e) =>
                        handleTransmissionChange(
                          e.target.value as TransmissionValue
                        )
                      }
                      className="custom-select w-full min-h-[44px] appearance-none bg-[#F8FAFC] border border-[#DDDFE2]/80 rounded-[10px] pl-3.5 pr-10 text-[15px] font-semibold text-[#091B32] hover:bg-white focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="">Seçiniz</option>
                      <option value="manuel">Manuel</option>
                      <option value="otomatik">Otomatik</option>
                    </select>
                    <Icon
                      name="chevron"
                      size={18}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0A2340]"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Interactive Pill Chips synced with select */}
              <div className="mt-4 pt-3.5 border-t border-[#DDDFE2]/70 flex flex-wrap items-center justify-between gap-2.5">
                <span className="text-[12px] font-medium text-[#4B5563]">
                  Hızlı vites seçimi:
                </span>
                <div className="inline-flex items-center gap-2">
                  {(["manuel", "otomatik"] as const).map((v) => {
                    const active = selectedTransmission === v;
                    return (
                      <button
                        key={v}
                        type="button"
                        onClick={() => handleTransmissionChange(v)}
                        aria-pressed={active}
                        className={`min-h-[36px] px-3.5 rounded-full text-[13px] font-semibold border transition-all ${
                          active
                            ? "bg-[#0A2340] border-[#0A2340] text-white shadow-[0_4px_12px_rgba(10,35,64,0.2)]"
                            : "bg-white border-[#DDDFE2] text-[#091B32] hover:border-[#0A2340]"
                        }`}
                      >
                        {v === "manuel" ? "Manuel Vites" : "Otomatik Vites"}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right 40% Gradient Navy Result Panel */}
            <div
              aria-live="polite"
              className="relative overflow-hidden lg:col-span-5 bg-navy-gradient text-white p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-5"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-14 w-44 h-44 rounded-full bg-[#CB1426]/20 blur-2xl"
              />
              <div className="relative">
                {isMissingSelection ? (
                  <p className="text-[15px] font-medium text-white/90">
                    Ehliyet sınıfını ve vites tercihini seç.
                  </p>
                ) : !isValidCombination ? (
                  <p className="text-[15px] font-medium text-white/90">
                    Bu eğitim seçeneği şu anda listelenmiyor.
                  </p>
                ) : (
                  <>
                    {isExample && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/12 border border-white/20 text-[11px] font-semibold tracking-wide text-white/90 mb-2">
                        Örnek
                      </span>
                    )}
                    <p className="font-display font-bold text-[28px] lg:text-[32px] leading-tight tracking-tight text-white">
                      {selectedClass} sınıfı · {transmissionDisplay}
                    </p>
                    <p className="mt-1 text-[13px] text-white/75">
                      Kayıt koşulları ve uygun dönem bilgisi için hazır mesaj
                    </p>
                  </>
                )}
              </div>

              <div className="relative">
                {!isValidCombination ? (
                  <button
                    type="button"
                    disabled
                    className="w-full inline-flex items-center justify-center gap-2.5 min-h-[48px] px-5 bg-[#CB1426]/40 text-white/65 text-[15px] font-semibold rounded-[12px] cursor-not-allowed"
                  >
                    <Icon name="whatsapp" size={20} />
                    <span>WhatsApp’tan bilgi al</span>
                    <Icon name="ok-sag" size={18} />
                  </button>
                ) : config.whatsappApproved ? (
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 min-h-[48px] px-5 bg-red-gradient text-white text-[15px] font-semibold rounded-[12px] transition-all shadow-[0_8px_22px_rgba(203,20,38,0.38)] hover:-translate-y-0.5"
                  >
                    <Icon name="whatsapp" size={20} />
                    <span>WhatsApp’tan bilgi al</span>
                    <Icon name="ok-sag" size={18} />
                  </a>
                ) : (
                  <div className="space-y-2.5">
                    <Link
                      href={`/iletisim?sinif=${encodeURIComponent(
                        selectedClass
                      )}&vites=${encodeURIComponent(
                        selectedTransmission
                      )}#kayit`}
                      className="w-full inline-flex items-center justify-center gap-2.5 min-h-[48px] px-5 bg-red-gradient text-white text-[15px] font-semibold rounded-[12px] transition-all shadow-[0_8px_22px_rgba(203,20,38,0.38)] hover:-translate-y-0.5"
                    >
                      <Icon name="whatsapp" size={20} />
                      <span>WhatsApp’tan bilgi al</span>
                      <Icon name="ok-sag" size={18} />
                    </Link>
                    <p className="text-[12px] text-white/75 text-center">
                      Hemen aramak için:{" "}
                      <a
                        href={config.phoneHref}
                        className="underline hover:text-white font-medium"
                      >
                        {config.phoneDisplay}
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EĞİTİMLER */}
      <section
        aria-labelledby="egitimler-baslik"
        className="w-full bg-white py-6 lg:py-9"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-6">
            <h2
              id="egitimler-baslik"
              className="font-display font-extrabold text-[28px] lg:text-[36px] leading-tight uppercase text-[#091B32]"
            >
              Eğitimler
            </h2>
            <span className="heading-underline" aria-hidden="true" />
            <p className="mt-2.5 text-[14px] lg:text-[15px] text-[#4B5563]">
              Sürücü belgesi yolculuğunda teorik ve uygulamalı eğitim.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
            {TRAINING_CARDS.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group relative overflow-hidden flex items-start gap-4 p-5 lg:p-6 bg-gradient-to-br from-white via-white to-[#F8FAFC] border border-[#DDDFE2] rounded-[16px] shadow-[0_4px_16px_rgba(9,27,50,0.03)] hover:border-[#0A2340]/50 hover:shadow-[0_14px_30px_rgba(10,35,64,0.09)] hover:-translate-y-0.5 transition-all min-h-[108px]"
              >
                <div className="w-12 h-12 shrink-0 rounded-[12px] bg-gradient-to-br from-[#F3F6FA] to-[#E8EEF5] border border-[#DDDFE2] flex items-center justify-center text-[#0A2340] group-hover:bg-navy-gradient group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_6px_16px_rgba(10,35,64,0.22)] transition-all">
                  <Icon name={card.icon} size={25} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-extrabold text-[22px] leading-tight uppercase text-[#091B32] group-hover:text-[#CB1426] transition-colors">
                      {card.title}
                    </h3>
                    <Icon
                      name="ok-sag"
                      size={16}
                      className="text-[#9CA3AF] group-hover:text-[#CB1426] group-hover:translate-x-0.5 transition-all shrink-0"
                    />
                  </div>
                  <p className="mt-1.5 text-[14px] text-[#4B5563] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EHLİYET SEÇİMİ */}
      <section
        id="ehliyet-secimi"
        aria-labelledby="ehliyet-secimi-baslik"
        className="w-full bg-gradient-to-b from-white via-[#F8FAFC]/75 to-white py-7 lg:py-10 scroll-mt-20"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="p-5 sm:p-6 lg:p-8 rounded-[18px] border border-[#DDDFE2] bg-white shadow-[0_8px_28px_rgba(9,27,50,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 lg:pr-8">
              <h2
                id="ehliyet-secimi-baslik"
                className="font-display font-extrabold text-[28px] lg:text-[34px] leading-tight uppercase text-[#091B32]"
              >
                Ehliyet seçimi
              </h2>
              <span className="heading-underline" aria-hidden="true" />
              <p className="mt-3 text-[14px] lg:text-[15px] text-[#4B5563] leading-relaxed max-w-[360px]">
                Sürüş alışkanlığına ve ihtiyacına uygun vites tipini karşılaştır.
              </p>
            </div>

            {/* Right Column with subtle vertical divider on desktop */}
            <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-[#DDDFE2]">
              <div
                role="tablist"
                aria-label="Vites tipi karşılaştırma"
                onKeyDown={handleCompareKeyDown}
                className="grid grid-cols-2 p-1.5 bg-[#F1F5F9] border border-[#DDDFE2] rounded-[14px] gap-1"
              >
                {(["manuel", "otomatik"] as const).map((tabKey) => {
                  const isActive = compareTab === tabKey;
                  return (
                    <button
                      key={tabKey}
                      type="button"
                      role="tab"
                      id={`tab-${tabKey}`}
                      aria-selected={isActive}
                      aria-controls={`panel-${tabKey}`}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => handleUserCompareTabChange(tabKey)}
                      className={`min-h-[46px] rounded-[10px] text-[15px] font-semibold transition-all flex items-center justify-center gap-2 ${
                        isActive
                          ? "bg-red-gradient text-white shadow-[0_6px_16px_rgba(203,20,38,0.28)]"
                          : "bg-transparent text-[#091B32] hover:bg-white/80"
                      }`}
                    >
                      <span>{COMPARE_CONTENT[tabKey].label}</span>
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                id={`panel-${compareTab}`}
                aria-labelledby={`tab-${compareTab}`}
                aria-live="polite"
                className="mt-4 p-4 rounded-[12px] bg-gradient-to-br from-[#F8FAFC] to-white border border-[#DDDFE2]/80 flex items-start gap-3"
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#CB1426] shrink-0" />
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#0A2340] mb-0.5">
                    {COMPARE_CONTENT[compareTab].badge}
                  </span>
                  <p className="text-[15px] text-[#091B32] leading-relaxed">
                    {COMPARE_CONTENT[compareTab].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function EducationPlannerAndCompare() {
  return (
    <Suspense
      fallback={
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8 py-10">
          <div className="h-[180px] rounded-[16px] bg-[#F8F8F8] border border-[#DDDFE2]" />
        </div>
      }
    >
      <PlannerAndCompareInner />
    </Suspense>
  );
}
