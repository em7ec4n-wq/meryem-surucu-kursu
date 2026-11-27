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
    description:
      "Debriyaj kullanımı, kalkış ve vites değişimi üzerine pratik yaparsın.",
  },
  otomatik: {
    label: "Otomatik",
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
      const exists = publishedCatalog.some(
        (c) => c.licenseClass.toLowerCase() === sinifParam.toLowerCase()
      );
      if (exists) {
        const match = publishedCatalog.find(
          (c) => c.licenseClass.toLowerCase() === sinifParam.toLowerCase()
        );
        if (match) {
          setSelectedClass(match.licenseClass);
          setIsExample(false);
        }
      }
    }
  }, [searchParams, publishedCatalog]);

  // Validation logic
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

  // Only updates planner when user actively switches the comparison tab
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
        className="w-full bg-white py-8 lg:py-10 scroll-mt-20"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-5">
            <h2
              id="egitim-plani-baslik"
              className="font-display font-extrabold text-[28px] lg:text-[34px] leading-tight uppercase text-[#091B32]"
            >
              Eğitim planını oluştur
            </h2>
            <span className="heading-underline" aria-hidden="true" />
            <p className="mt-2.5 text-[14px] lg:text-[15px] text-[#4B5563]">
              Sana uygun eğitim planını hızlıca oluştur, detaylı bilgi al.
            </p>
          </div>

          <div className="border border-[#DDDFE2] rounded-[14px] overflow-hidden bg-[#F8F8F8] grid grid-cols-1 lg:grid-cols-12 shadow-[0_2px_10px_rgba(9,27,50,0.03)]">
            {/* Left 60% Selection Area */}
            <div className="lg:col-span-7 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="ehliyet-sinifi-select"
                    className="block text-[13px] font-semibold text-[#091B32] mb-1.5"
                  >
                    Ehliyet sınıfı
                  </label>
                  <div className="relative">
                    <select
                      id="ehliyet-sinifi-select"
                      value={selectedClass}
                      onChange={(e) => handleClassChange(e.target.value)}
                      className="w-full min-h-[46px] appearance-none bg-white border border-[#DDDFE2] rounded-[10px] pl-3.5 pr-10 text-[15px] font-medium text-[#091B32] hover:border-[#0A2340] transition-colors"
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
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#091B32]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="vites-tercihi-select"
                    className="block text-[13px] font-semibold text-[#091B32] mb-1.5"
                  >
                    Vites tercihi
                  </label>
                  <div className="relative">
                    <select
                      id="vites-tercihi-select"
                      value={selectedTransmission}
                      onChange={(e) =>
                        handleTransmissionChange(
                          e.target.value as TransmissionValue
                        )
                      }
                      className="w-full min-h-[46px] appearance-none bg-white border border-[#DDDFE2] rounded-[10px] pl-3.5 pr-10 text-[15px] font-medium text-[#091B32] hover:border-[#0A2340] transition-colors"
                    >
                      <option value="">Seçiniz</option>
                      <option value="manuel">Manuel</option>
                      <option value="otomatik">Otomatik</option>
                    </select>
                    <Icon
                      name="chevron"
                      size={18}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#091B32]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right 40% Navy Result Panel */}
            <div
              aria-live="polite"
              className="lg:col-span-5 bg-[#0A2340] text-white p-5 lg:p-6 flex flex-col justify-between gap-4"
            >
              <div>
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
                      <span className="inline-block text-[12px] font-medium text-white/75 mb-1">
                        Örnek
                      </span>
                    )}
                    <p className="font-display font-bold text-[26px] lg:text-[28px] leading-tight tracking-tight text-white">
                      {selectedClass} sınıfı · {transmissionDisplay}
                    </p>
                  </>
                )}
              </div>

              <div>
                {!isValidCombination ? (
                  <button
                    type="button"
                    disabled
                    className="w-full inline-flex items-center justify-center gap-2.5 min-h-[46px] px-5 bg-[#CB1426]/45 text-white/70 text-[15px] font-semibold rounded-[10px] cursor-not-allowed"
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
                    className="w-full inline-flex items-center justify-center gap-2.5 min-h-[46px] px-5 bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
                  >
                    <Icon name="whatsapp" size={20} />
                    <span>WhatsApp’tan bilgi al</span>
                    <Icon name="ok-sag" size={18} />
                  </a>
                ) : (
                  <div className="space-y-2">
                    <Link
                      href={`/iletisim?sinif=${encodeURIComponent(
                        selectedClass
                      )}&vites=${encodeURIComponent(
                        selectedTransmission
                      )}#kayit`}
                      className="w-full inline-flex items-center justify-center gap-2.5 min-h-[46px] px-5 bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
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
        className="w-full bg-white py-6 lg:py-8"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-5">
            <h2
              id="egitimler-baslik"
              className="font-display font-extrabold text-[28px] lg:text-[34px] leading-tight uppercase text-[#091B32]"
            >
              Eğitimler
            </h2>
            <span className="heading-underline" aria-hidden="true" />
            <p className="mt-2.5 text-[14px] lg:text-[15px] text-[#4B5563]">
              Sürücü belgesi yolculuğunda teorik ve uygulamalı eğitim.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {TRAINING_CARDS.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group flex items-start gap-4 p-5 bg-white border border-[#DDDFE2] rounded-[14px] hover:border-[#0A2340] hover:shadow-[0_4px_16px_rgba(9,27,50,0.06)] transition-all min-h-[96px]"
              >
                <div className="w-12 h-12 shrink-0 rounded-[10px] bg-[#F8F8F8] border border-[#DDDFE2] flex items-center justify-center text-[#0A2340] group-hover:bg-[#0A2340] group-hover:text-white group-hover:border-[#0A2340] transition-colors">
                  <Icon name={card.icon} size={26} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-extrabold text-[22px] leading-tight uppercase text-[#091B32] group-hover:text-[#CB1426] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-[#4B5563] leading-relaxed">
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
        className="w-full bg-white py-6 lg:py-9 scroll-mt-20"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-start">
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
                className="grid grid-cols-2 p-1 bg-[#F8F8F8] border border-[#DDDFE2] rounded-[12px]"
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
                      className={`min-h-[44px] rounded-[9px] text-[15px] font-semibold transition-colors ${
                        isActive
                          ? "bg-[#CB1426] text-white shadow-xs"
                          : "bg-transparent text-[#091B32] hover:bg-white"
                      }`}
                    >
                      {COMPARE_CONTENT[tabKey].label}
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                id={`panel-${compareTab}`}
                aria-labelledby={`tab-${compareTab}`}
                aria-live="polite"
                className="mt-4 text-[15px] text-[#091B32] leading-relaxed"
              >
                {COMPARE_CONTENT[compareTab].description}
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
          <div className="h-[180px] rounded-[14px] bg-[#F8F8F8] border border-[#DDDFE2]" />
        </div>
      }
    >
      <PlannerAndCompareInner />
    </Suspense>
  );
}
