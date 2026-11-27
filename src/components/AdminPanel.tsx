"use client";

import React, { useState } from "react";
import { useSiteConfig } from "@/lib/site-context";
import { ContentStatus, SiteConfig } from "@/lib/site-data";

const STATUS_LABELS: Record<ContentStatus, string> = {
  taslak: "Taslak",
  onay_bekliyor: "Onay bekliyor",
  yayinda: "Yayında",
};

export function AdminPanel() {
  const { config, updateConfig, resetConfig } = useSiteConfig();
  const [draft, setDraft] = useState<SiteConfig>(config);
  const [savedNotice, setSavedNotice] = useState<string>("");

  const handleSave = () => {
    updateConfig(draft);
    setSavedNotice(
      "Değişiklikler kaydedildi. Yalnızca 'Yayında' durumundaki içerikler herkese açık sayfalarda görünür."
    );
    window.setTimeout(() => setSavedNotice(""), 4500);
  };

  const handleReset = () => {
    resetConfig();
    setSavedNotice("Varsayılan önizleme ayarlarına dönüldü.");
    window.setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-[14px] bg-[#0A2340] text-white">
        <div>
          <h2 className="font-display font-extrabold text-[26px] uppercase">
            İçerik ve Yayın Yönetimi
          </h2>
          <p className="text-[14px] text-white/80">
            Taslak, Onay bekliyor ve Yayında durumlarını yönetin. Onaysız
            içerikler herkese açık sayfalarda gösterilmez.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="min-h-[44px] px-4 rounded-[10px] border border-white/30 text-white text-[14px] font-medium hover:bg-white/10 transition-colors"
          >
            Varsayılana Dön
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="min-h-[44px] px-5 rounded-[10px] bg-[#CB1426] hover:bg-[#A81020] text-white text-[14px] font-semibold transition-colors"
          >
            Değişiklikleri Kaydet
          </button>
        </div>
      </div>

      {savedNotice && (
        <div
          role="status"
          aria-live="polite"
          className="p-4 rounded-[12px] bg-[#1EBE5D]/10 border border-[#1EBE5D] text-[#091B32] text-[14px] font-medium"
        >
          {savedNotice}
        </div>
      )}

      {/* 1. Kurumsal & İletişim */}
      <section className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8] space-y-4">
        <h3 className="font-display font-extrabold text-[24px] uppercase text-[#091B32]">
          Logo ve İletişim Ayarları
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="block text-[13px] font-semibold text-[#091B32] mb-1">
              Logo Dosya Yolu
            </span>
            <input
              type="text"
              value={draft.logoSrc}
              onChange={(e) => setDraft({ ...draft, logoSrc: e.target.value })}
              className="w-full min-h-[44px] px-3.5 rounded-[10px] bg-white border border-[#DDDFE2] text-[14px]"
            />
          </label>
          <label className="block">
            <span className="block text-[13px] font-semibold text-[#091B32] mb-1">
              Telefon (Görünüm)
            </span>
            <input
              type="text"
              value={draft.phoneDisplay}
              onChange={(e) =>
                setDraft({ ...draft, phoneDisplay: e.target.value })
              }
              className="w-full min-h-[44px] px-3.5 rounded-[10px] bg-white border border-[#DDDFE2] text-[14px]"
            />
          </label>
          <label className="block">
            <span className="block text-[13px] font-semibold text-[#091B32] mb-1">
              Adres
            </span>
            <input
              type="text"
              value={draft.address}
              onChange={(e) => setDraft({ ...draft, address: e.target.value })}
              className="w-full min-h-[44px] px-3.5 rounded-[10px] bg-white border border-[#DDDFE2] text-[14px]"
            />
          </label>
          <label className="block">
            <span className="block text-[13px] font-semibold text-[#091B32] mb-1">
              Aday WhatsApp Numarası (Ülke Koduyla)
            </span>
            <input
              type="text"
              value={draft.whatsappCandidateNumber}
              onChange={(e) =>
                setDraft({ ...draft, whatsappCandidateNumber: e.target.value })
              }
              className="w-full min-h-[44px] px-3.5 rounded-[10px] bg-white border border-[#DDDFE2] text-[14px]"
            />
          </label>
          <label className="block md:col-span-2">
            <span className="block text-[13px] font-semibold text-[#091B32] mb-1">
              Doğrulanmış Sosyal Medya Profil Adresi (Boşsa gizlenir)
            </span>
            <input
              type="url"
              placeholder="https://instagram.com/..."
              value={draft.verifiedSocialUrl}
              onChange={(e) =>
                setDraft({ ...draft, verifiedSocialUrl: e.target.value })
              }
              className="w-full min-h-[44px] px-3.5 rounded-[10px] bg-white border border-[#DDDFE2] text-[14px]"
            />
          </label>
        </div>

        <label className="flex items-center gap-3 pt-2 cursor-pointer">
          <input
            type="checkbox"
            checked={draft.whatsappApproved}
            onChange={(e) =>
              setDraft({ ...draft, whatsappApproved: e.target.checked })
            }
            className="w-5 h-5 accent-[#1EBE5D]"
          />
          <span className="text-[14px] font-medium text-[#091B32]">
            WhatsApp başvuru hattı (+90 533 392 52 05) müşteri tarafından
            onaylandı — doğrudan <code>wa.me</code> bağlantılarını etkinleştir
          </span>
        </label>
      </section>

      {/* 2. Slaytlar */}
      <section className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8] space-y-4">
        <h3 className="font-display font-extrabold text-[24px] uppercase text-[#091B32]">
          Açılış Slaytları
        </h3>
        <div className="space-y-3">
          {draft.slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="p-4 rounded-[12px] bg-white border border-[#DDDFE2] flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex-1 space-y-1">
                <p className="font-semibold text-[15px] text-[#091B32]">
                  {idx + 1}. {slide.titleLines.filter(Boolean).join(" ")}
                </p>
                <p className="text-[13px] text-[#4B5563]">{slide.subtitle}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <label className="sr-only" htmlFor={`slide-status-${slide.id}`}>
                  Slayt durumu
                </label>
                <select
                  id={`slide-status-${slide.id}`}
                  value={slide.status}
                  onChange={(e) => {
                    const nextSlides = [...draft.slides];
                    nextSlides[idx] = {
                      ...slide,
                      status: e.target.value as ContentStatus,
                    };
                    setDraft({ ...draft, slides: nextSlides });
                  }}
                  className="min-h-[44px] px-3 rounded-[10px] border border-[#DDDFE2] bg-[#F8F8F8] text-[14px] font-medium"
                >
                  {(Object.keys(STATUS_LABELS) as ContentStatus[]).map((st) => (
                    <option key={st} value={st}>
                      {STATUS_LABELS[st]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Eğitim Seçenekleri */}
      <section className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8] space-y-4">
        <h3 className="font-display font-extrabold text-[24px] uppercase text-[#091B32]">
          Eğitim Planlayıcı Seçenekleri
        </h3>
        <div className="space-y-3">
          {draft.trainingCatalog.map((item, idx) => (
            <div
              key={item.id}
              className="p-4 rounded-[12px] bg-white border border-[#DDDFE2] flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <p className="font-semibold text-[15px] text-[#091B32]">
                  {item.licenseLabel} sınıfı
                </p>
                <p className="text-[13px] text-[#4B5563]">
                  Vitesler: {item.transmissions.map((t) => t.label).join(", ")}
                </p>
              </div>
              <select
                aria-label={`${item.licenseLabel} sınıfı durumu`}
                value={item.status}
                onChange={(e) => {
                  const next = [...draft.trainingCatalog];
                  next[idx] = {
                    ...item,
                    status: e.target.value as ContentStatus,
                  };
                  setDraft({ ...draft, trainingCatalog: next });
                }}
                className="min-h-[44px] px-3 rounded-[10px] border border-[#DDDFE2] bg-[#F8F8F8] text-[14px] font-medium"
              >
                {(Object.keys(STATUS_LABELS) as ContentStatus[]).map((st) => (
                  <option key={st} value={st}>
                    {STATUS_LABELS[st]}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Galeri */}
      <section className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8] space-y-4">
        <h3 className="font-display font-extrabold text-[24px] uppercase text-[#091B32]">
          Galeri Öğeleri
        </h3>
        <div className="space-y-3">
          {draft.gallery.map((photo, idx) => (
            <div
              key={photo.id}
              className="p-4 rounded-[12px] bg-white border border-[#DDDFE2] flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <p className="font-semibold text-[15px] text-[#091B32]">
                  {photo.title}
                </p>
                <p className="text-[13px] text-[#4B5563]">
                  {photo.description}
                </p>
              </div>
              <select
                aria-label={`${photo.title} yayın durumu`}
                value={photo.status}
                onChange={(e) => {
                  const next = [...draft.gallery];
                  next[idx] = {
                    ...photo,
                    status: e.target.value as ContentStatus,
                  };
                  setDraft({ ...draft, gallery: next });
                }}
                className="min-h-[44px] px-3 rounded-[10px] border border-[#DDDFE2] bg-[#F8F8F8] text-[14px] font-medium"
              >
                {(Object.keys(STATUS_LABELS) as ContentStatus[]).map((st) => (
                  <option key={st} value={st}>
                    {STATUS_LABELS[st]}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SSS */}
      <section className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8] space-y-4">
        <h3 className="font-display font-extrabold text-[24px] uppercase text-[#091B32]">
          Sık Sorulan Sorular
        </h3>
        <div className="space-y-3">
          {draft.faqs.map((faq, idx) => (
            <div
              key={faq.id}
              className="p-4 rounded-[12px] bg-white border border-[#DDDFE2] space-y-3"
            >
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  value={faq.question}
                  onChange={(e) => {
                    const next = [...draft.faqs];
                    next[idx] = { ...faq, question: e.target.value };
                    setDraft({ ...draft, faqs: next });
                  }}
                  className="flex-1 min-h-[44px] px-3 rounded-[10px] border border-[#DDDFE2] text-[14px] font-medium"
                />
                <select
                  aria-label="Soru yayın durumu"
                  value={faq.status}
                  onChange={(e) => {
                    const next = [...draft.faqs];
                    next[idx] = {
                      ...faq,
                      status: e.target.value as ContentStatus,
                    };
                    setDraft({ ...draft, faqs: next });
                  }}
                  className="min-h-[44px] px-3 rounded-[10px] border border-[#DDDFE2] bg-[#F8F8F8] text-[14px] font-medium"
                >
                  {(Object.keys(STATUS_LABELS) as ContentStatus[]).map((st) => (
                    <option key={st} value={st}>
                      {STATUS_LABELS[st]}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                rows={2}
                value={faq.answer}
                onChange={(e) => {
                  const next = [...draft.faqs];
                  next[idx] = { ...faq, answer: e.target.value };
                  setDraft({ ...draft, faqs: next });
                }}
                className="w-full p-3 rounded-[10px] border border-[#DDDFE2] text-[14px]"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
