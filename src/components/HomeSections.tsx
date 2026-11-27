"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { useSiteConfig } from "@/lib/site-context";
import { REGISTRATION_STEPS } from "@/lib/site-data";

export function HomeSections() {
  const { config } = useSiteConfig();
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const publishedGallery = config.gallery.filter((g) => g.status === "yayinda");
  const previewGallery = publishedGallery.slice(0, 2);
  const publishedFaqs = config.faqs.filter((f) => f.status === "yayinda");

  return (
    <>
      {/* 6. SINIF VİTRİNİ */}
      <section
        aria-labelledby="sinif-vitrini-baslik"
        className="w-full bg-white py-4 lg:py-6"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="relative rounded-[14px] overflow-hidden bg-[#0A2340] border border-[#DDDFE2] flex flex-col lg:block lg:h-[310px]">
            {/* Photo: top on mobile, right 64%+ on desktop */}
            <div className="relative w-full h-[210px] sm:h-[240px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[68%] lg:h-full">
              {/* Desktop */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/meryem/teorik-egitim-sinifi.webp"
                alt="Sürücü kursunda teorik eğitim sınıfı"
                loading="lazy"
                className="hidden lg:block w-full h-full object-cover"
                style={{ objectPosition: "53% 43%" }}
              />
              {/* Mobile */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/meryem/teorik-egitim-sinifi-mobil.webp"
                alt="Sürücü kursunda teorik eğitim sınıfı"
                loading="lazy"
                className="lg:hidden w-full h-full object-cover"
                style={{ objectPosition: "48% 42%" }}
              />
              <span className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-[6px] bg-black/55 text-white/95 text-[11px] font-medium backdrop-blur-[2px]">
                Konsept görsel
              </span>
            </div>

            {/* Mobile thin red line */}
            <div
              aria-hidden="true"
              className="h-[3px] w-full bg-[#CB1426] lg:hidden"
            />

            {/* Desktop Red Diagonal Seam */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute inset-y-0 left-0 w-[calc(38%+5px)] bg-[#CB1426] showcase-navy-panel z-20 pointer-events-none"
            />

            {/* Navy Text Panel linking to /egitimler/teorik-egitim */}
            <Link
              href="/egitimler/teorik-egitim"
              className="group relative z-30 w-full lg:w-[38%] lg:h-full bg-[#0A2340] showcase-navy-panel flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-5 py-6 lg:pl-10 lg:pr-14 text-white hover:bg-[#0D2B4F] transition-colors"
            >
              <h2
                id="sinif-vitrini-baslik"
                className="font-display font-extrabold text-[28px] lg:text-[36px] leading-[1.02] uppercase tracking-tight"
              >
                Sınıfta öğren,
                <br />
                yolda uygula.
              </h2>
              <p className="mt-2.5 text-[14px] lg:text-[15px] text-white/85 leading-relaxed max-w-[290px]">
                Sınıfta edindiğin bilgiyi direksiyon eğitimiyle yolda pekiştir.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-white group-hover:text-[#FF8A94] transition-colors">
                <span>Teorik eğitimi incele</span>
                <Icon name="ok-sag" size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. KURSUMUZDAN GÖRÜNTÜLER */}
      <section
        aria-labelledby="goruntuler-baslik"
        className="w-full bg-white py-6 lg:py-8"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2
                id="goruntuler-baslik"
                className="font-display font-extrabold text-[28px] lg:text-[34px] leading-tight uppercase text-[#091B32]"
              >
                Kursumuzdan görüntüler
              </h2>
              <span className="heading-underline" aria-hidden="true" />
            </div>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-1.5 min-h-[44px] text-[14px] font-semibold text-[#0A2340] hover:text-[#CB1426] transition-colors shrink-0"
            >
              <span>Tüm galeri</span>
              <Icon name="ok-sag" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {previewGallery.map((item) => (
              <Link
                key={item.id}
                href={`/galeri#${item.anchor}`}
                className="group relative block rounded-[14px] overflow-hidden border border-[#DDDFE2] bg-[#F8F8F8] aspect-[1.75/1] lg:aspect-[2.4/1]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageThumb}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
                {item.isConcept && (
                  <span className="absolute bottom-2 right-2 lg:bottom-3 lg:right-3 px-2 py-0.5 rounded-[5px] bg-black/55 text-white text-[10px] lg:text-[11px] font-medium">
                    Konsept görsel
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Client Real Course Photos Highlight Strip */}
          <div className="mt-3 lg:mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {[
              {
                anchor: "kurum-lobi",
                src: "/meryem/galeri/kurum-lobi.webp",
                label: "Kurum ve Karşılama Alanı",
              },
              {
                anchor: "egitim-araci-aday-1",
                src: "/meryem/galeri/egitim-araci-aday-1.webp",
                label: "Eğitim Araçlarımız",
              },
              {
                anchor: "motosiklet-filosu",
                src: "/meryem/galeri/motosiklet-filosu.webp",
                label: "Motosiklet Filomuz",
              },
              {
                anchor: "sinif-derslik",
                src: "/meryem/galeri/sinif-derslik.webp",
                label: "Teorik Dersliğimiz",
              },
            ].map((photo) => (
              <Link
                key={photo.anchor}
                href={`/galeri#${photo.anchor}`}
                className="group relative block rounded-[12px] overflow-hidden border border-[#DDDFE2] bg-[#F8F8F8] aspect-[4/3]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.label}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A2340]/90 via-[#0A2340]/45 to-transparent px-3 py-2.5">
                  <span className="text-[12px] lg:text-[13px] font-semibold text-white leading-tight block">
                    {photo.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. KAYIT SÜRECİ */}
      <section
        aria-labelledby="kayit-sureci-baslik"
        className="w-full bg-white py-6 lg:py-8"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-6">
            <h2
              id="kayit-sureci-baslik"
              className="font-display font-extrabold text-[28px] lg:text-[34px] leading-tight uppercase text-[#091B32]"
            >
              Kayıt süreci
            </h2>
            <span className="heading-underline" aria-hidden="true" />
          </div>

          <ol className="flex flex-col lg:flex-row lg:items-center lg:justify-between divide-y divide-[#DDDFE2] lg:divide-y-0 gap-0 lg:gap-4">
            {REGISTRATION_STEPS.map((item, index) => (
              <React.Fragment key={item.step}>
                <li className="flex items-center gap-4 py-4 lg:py-0 lg:flex-1">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#CB1426] text-white flex items-center justify-center shadow-xs">
                    <Icon name={item.icon} size={22} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#091B32]">
                      {item.step}. {item.title}
                    </h3>
                    <p className="mt-0.5 text-[14px] text-[#4B5563] leading-snug">
                      {item.description}
                    </p>
                  </div>
                </li>
                {index < REGISTRATION_STEPS.length - 1 && (
                  <li
                    aria-hidden="true"
                    className="hidden lg:flex items-center justify-center text-[#9CA3AF] shrink-0 px-2"
                  >
                    <Icon name="ok-sag" size={24} />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      </section>

      {/* 9. SIK SORULAN SORULAR */}
      <section
        aria-labelledby="sss-baslik"
        className="w-full bg-white pt-4 pb-10 lg:pt-6 lg:pb-12"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-5">
            <h2
              id="sss-baslik"
              className="font-display font-extrabold text-[28px] lg:text-[34px] leading-tight uppercase text-[#091B32]"
            >
              Sık sorulan sorular
            </h2>
            <span className="heading-underline" aria-hidden="true" />
          </div>

          <div className="flex flex-col gap-3">
            {publishedFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-[#DDDFE2] rounded-[12px] bg-[#F8F8F8] overflow-hidden"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                      onClick={() =>
                        setOpenFaqId((prev) => (prev === faq.id ? null : faq.id))
                      }
                      className="w-full min-h-[56px] px-4 sm:px-5 py-3.5 flex items-center justify-between gap-4 text-left text-[15px] font-semibold text-[#091B32] hover:bg-white transition-colors"
                    >
                      <span>{faq.question}</span>
                      <Icon
                        name="chevron"
                        size={20}
                        className={`shrink-0 text-[#0A2340] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={`faq-panel-${faq.id}`}
                      className="px-4 sm:px-5 pb-4 pt-1 text-[14px] lg:text-[15px] text-[#4B5563] leading-relaxed bg-white border-t border-[#DDDFE2]"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
