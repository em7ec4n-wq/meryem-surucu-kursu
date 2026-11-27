"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { useSiteConfig } from "@/lib/site-context";
import { REGISTRATION_STEPS } from "@/lib/site-data";

const WHY_MERYEM_ITEMS = [
  {
    icon: "kisi" as const,
    title: "Bire Bir Eğitmen Rehberliği",
    description:
      "Teorik derslerden direksiyon eğitimine kadar her aşamada deneyimli eğitmen kadromuzla adım adım ilerlersin.",
  },
  {
    icon: "arac" as const,
    title: "Manuel ve Otomatik Araç Seçeneği",
    description:
      "Sürüş hedefine göre manuel veya otomatik vitesli modern eğitim araçlarıyla trafik pratiği yaparsın.",
  },
  {
    icon: "kontrol-listesi" as const,
    title: "Planlı Sınav Hazırlığı",
    description:
      "E-sınav ve uygulamalı direksiyon sınavı öncesinde eksiklerini tamamlamaya yönelik düzenli hazırlık desteği alırsın.",
  },
  {
    icon: "konum" as const,
    title: "Ordu Merkezde Kolay Ulaşım",
    description:
      "Şarkiye Mahallesi, Novada AVM yanındaki merkezi konumumuzla kayıt ve eğitim süreçlerine kolayca ulaşırsın.",
  },
];

const REAL_HIGHLIGHTS = [
  {
    anchor: "kurum-lobi",
    src: "/meryem/galeri/kurum-lobi.webp",
    badge: "Kurum",
    label: "Karşılama ve Bekleme Alanı",
  },
  {
    anchor: "egitim-araci-aday-1",
    src: "/meryem/galeri/egitim-araci-aday-1.webp",
    badge: "Direksiyon",
    label: "Uygulamalı Eğitim Araçlarımız",
  },
  {
    anchor: "motosiklet-filosu",
    src: "/meryem/galeri/motosiklet-filosu.webp",
    badge: "Motosiklet",
    label: "Motosiklet Eğitim Filomuz",
  },
  {
    anchor: "sinif-derslik",
    src: "/meryem/galeri/sinif-derslik.webp",
    badge: "Sınıf",
    label: "Teorik Eğitim Dersliğimiz",
  },
  {
    anchor: "egitim-araci-aday-2",
    src: "/meryem/galeri/egitim-araci-aday-2.webp",
    badge: "Adaylar",
    label: "Başarılı Adaylarımız",
  },
  {
    anchor: "motosiklet-egitmenleri",
    src: "/meryem/galeri/motosiklet-egitmenleri.webp",
    badge: "Eğitmenler",
    label: "Saha ve Parkur Ekibimiz",
  },
];

const REGISTRATION_CHECKLIST = [
  "Eğitim planı sayfasından sınıf ve vites tercihini belirle.",
  "Telefon veya merkezimiz üzerinden güncel kayıt evrak listesini öğren.",
  "Kimlik ve kursun ilettiği belgelerle ön kaydını tamamla.",
  "Teorik ders ve direksiyon eğitim takvimine göre eğitime başla.",
];

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
        className="w-full bg-white py-5 lg:py-7"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="relative rounded-[18px] overflow-hidden bg-[#0A2340] border border-[#DDDFE2] shadow-[0_14px_38px_rgba(10,35,64,0.12)] flex flex-col lg:block lg:h-[320px]">
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
              <div
                aria-hidden="true"
                className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#07192F]/45 to-transparent pointer-events-none"
              />
              <span className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-[6px] bg-black/55 text-white/95 text-[11px] font-medium backdrop-blur-[2px]">
                Konsept görsel
              </span>
            </div>

            {/* Mobile thin red gradient line */}
            <div
              aria-hidden="true"
              className="h-[3.5px] w-full bg-gradient-to-r from-[#CB1426] via-[#EF4444] to-[#A81020] lg:hidden"
            />

            {/* Desktop Red Diagonal Seam */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute inset-y-0 left-0 w-[calc(38%+5px)] bg-gradient-to-b from-[#E11D31] via-[#CB1426] to-[#9E0E1C] showcase-navy-panel z-20 pointer-events-none"
            />

            {/* Navy Text Panel linking to /egitimler/teorik-egitim */}
            <Link
              href="/egitimler/teorik-egitim"
              className="group relative z-30 w-full lg:w-[38%] lg:h-full bg-navy-gradient showcase-navy-panel flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-5 py-6 lg:pl-10 lg:pr-14 text-white transition-all overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#CB1426]/15 blur-2xl"
              />
              <h2
                id="sinif-vitrini-baslik"
                className="relative font-display font-extrabold text-[28px] lg:text-[36px] leading-[1.02] uppercase tracking-tight"
              >
                Sınıfta öğren,
                <br />
                yolda uygula.
              </h2>
              <p className="relative mt-2.5 text-[14px] lg:text-[15px] text-white/85 leading-relaxed max-w-[290px]">
                Sınıfta edindiğin bilgiyi direksiyon eğitimiyle yolda pekiştir.
              </p>
              <span className="relative mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[13px] font-semibold text-white group-hover:bg-[#CB1426] group-hover:border-[#CB1426] transition-all">
                <span>Teorik eğitimi incele</span>
                <Icon
                  name="ok-sag"
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6.5 NEDEN MERYEM SÜRÜCÜ KURSU? (KURUMSAL YAKLAŞIM & GERÇEK OFİS MOZAİĞİ) */}
      <section
        aria-labelledby="neden-meryem-baslik"
        className="w-full bg-gradient-to-b from-white via-[#F8FAFC] to-white py-8 lg:py-11"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-center">
          {/* Left: 4 Value Pillars */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2340]/8 text-[#0A2340] text-[12px] font-bold uppercase tracking-wider mb-2.5">
                Ordu’da Güvenli Sürüş Eğitimi
              </span>
              <h2
                id="neden-meryem-baslik"
                className="font-display font-extrabold text-[28px] lg:text-[36px] leading-tight uppercase text-[#091B32]"
              >
                Neden Meryem Sürücü Kursu?
              </h2>
              <span className="heading-underline" aria-hidden="true" />
              <p className="mt-2.5 text-[14px] lg:text-[15px] text-[#4B5563] max-w-[580px]">
                Sürücü belgesi sürecinde adaylarımızın trafik kurallarına hakim,
                özgüvenli ve dikkatli sürücüler olarak yetişmesine odaklanıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_MERYEM_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="p-4 sm:p-5 rounded-[16px] border border-[#DDDFE2] bg-white shadow-[0_4px_14px_rgba(9,27,50,0.03)] hover:border-[#0A2340]/35 hover:shadow-[0_10px_24px_rgba(10,35,64,0.07)] transition-all"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#F3F6FA] to-[#E8EEF5] border border-[#DDDFE2] flex items-center justify-center text-[#CB1426] mb-3">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#091B32]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] lg:text-[14px] text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Real Institution Photo Mosaic */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 lg:gap-3.5">
            <Link
              href="/galeri#kurum-ofis"
              className="group col-span-2 relative rounded-[16px] overflow-hidden border border-[#DDDFE2] bg-[#F8F8F8] aspect-[16/10] shadow-[0_8px_24px_rgba(10,35,64,0.08)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/meryem/galeri/kurum-ofis.webp"
                alt="Meryem Sürücü Kursu danışma ve kayıt ofisi"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07192F]/90 via-[#0A2340]/45 to-transparent px-4 py-3">
                <span className="text-[13px] font-semibold text-white">
                  Kayıt ve Danışma Merkezimiz — Ordu
                </span>
              </div>
            </Link>

            <Link
              href="/galeri#kurum-yonetim"
              className="group relative rounded-[14px] overflow-hidden border border-[#DDDFE2] bg-[#F8F8F8] aspect-[4/3] shadow-[0_4px_14px_rgba(9,27,50,0.05)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/meryem/galeri/kurum-yonetim-odasi.webp"
                alt="Meryem Sürücü Kursu yönetim odası"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07192F]/90 to-transparent px-3 py-2">
                <span className="text-[12px] font-semibold text-white">
                  Bire Bir Görüşme
                </span>
              </div>
            </Link>

            <Link
              href="/galeri#filo-kirmizi-arac"
              className="group relative rounded-[14px] overflow-hidden border border-[#DDDFE2] bg-[#F8F8F8] aspect-[4/3] shadow-[0_4px_14px_rgba(9,27,50,0.05)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/meryem/galeri/filo-kirmizi-arac.webp"
                alt="Meryem Sürücü Kursu otomobil ve motosiklet filosu"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07192F]/90 to-transparent px-3 py-2">
                <span className="text-[12px] font-semibold text-white">
                  Eğitim Araçlarımız
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. KURSUMUZDAN GÖRÜNTÜLER */}
      <section
        aria-labelledby="goruntuler-baslik"
        className="w-full bg-white py-7 lg:py-9"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2
                id="goruntuler-baslik"
                className="font-display font-extrabold text-[28px] lg:text-[36px] leading-tight uppercase text-[#091B32]"
              >
                Kursumuzdan görüntüler
              </h2>
              <span className="heading-underline" aria-hidden="true" />
              <p className="mt-2 text-[14px] text-[#4B5563]">
                Kurumumuz, dersliğimiz, otomobil ve motosiklet filomuzdan gerçek
                kareler.
              </p>
            </div>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-1.5 min-h-[44px] px-4 rounded-full border border-[#DDDFE2] bg-white hover:border-[#0A2340] text-[13px] font-semibold text-[#0A2340] hover:text-[#CB1426] transition-all shrink-0 shadow-xs"
            >
              <span>Tüm galeri</span>
              <Icon name="ok-sag" size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {previewGallery.map((item) => (
              <Link
                key={item.id}
                href={`/galeri#${item.anchor}`}
                className="group relative block rounded-[16px] overflow-hidden border border-[#DDDFE2] bg-[#F8F8F8] aspect-[1.75/1] lg:aspect-[2.4/1] shadow-[0_6px_18px_rgba(9,27,50,0.05)] hover:shadow-[0_14px_30px_rgba(10,35,64,0.12)] transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageThumb}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#07192F]/35 via-transparent to-transparent pointer-events-none"
                />
                {item.isConcept && (
                  <span className="absolute bottom-2.5 right-2.5 lg:bottom-3 lg:right-3 px-2.5 py-0.5 rounded-[6px] bg-black/55 text-white text-[10px] lg:text-[11px] font-medium backdrop-blur-[2px]">
                    Konsept görsel
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Expanded 6-Card Real Client Photos Strip */}
          <div className="mt-3.5 lg:mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {REAL_HIGHLIGHTS.map((photo) => (
              <Link
                key={photo.anchor}
                href={`/galeri#${photo.anchor}`}
                className="group relative block rounded-[14px] overflow-hidden border border-[#DDDFE2] bg-[#F8F8F8] aspect-[4/3] shadow-[0_4px_14px_rgba(9,27,50,0.04)] hover:shadow-[0_12px_26px_rgba(10,35,64,0.12)] hover:-translate-y-0.5 transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.label}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#0A2340]/85 text-white text-[11px] font-semibold backdrop-blur-[2px]">
                  {photo.badge}
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07192F]/95 via-[#0A2340]/60 to-transparent px-3.5 py-3 pt-9 flex items-end justify-between gap-2">
                  <span className="text-[12px] lg:text-[14px] font-semibold text-white leading-tight block group-hover:text-[#FFD2D7] transition-colors">
                    {photo.label}
                  </span>
                  <Icon
                    name="ok-sag"
                    size={14}
                    className="text-white/75 group-hover:text-white shrink-0"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. KAYIT SÜRECİ */}
      <section
        aria-labelledby="kayit-sureci-baslik"
        className="w-full bg-gradient-to-b from-white via-[#F8FAFC] to-white py-7 lg:py-9"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-6">
            <h2
              id="kayit-sureci-baslik"
              className="font-display font-extrabold text-[28px] lg:text-[36px] leading-tight uppercase text-[#091B32]"
            >
              Kayıt süreci
            </h2>
            <span className="heading-underline" aria-hidden="true" />
          </div>

          <ol className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-3 lg:gap-4">
            {REGISTRATION_STEPS.map((item, index) => (
              <React.Fragment key={item.step}>
                <li className="flex items-center gap-4 p-4 lg:p-5 lg:flex-1 rounded-[16px] border border-[#DDDFE2] bg-white shadow-[0_4px_14px_rgba(9,27,50,0.04)]">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-red-gradient text-white flex items-center justify-center shadow-[0_6px_16px_rgba(203,20,38,0.28)]">
                    <Icon name={item.icon} size={22} />
                  </div>
                  <div className="min-w-0">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#CB1426]">
                      Adım 0{item.step}
                    </span>
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
                    className="hidden lg:flex items-center justify-center text-[#9CA3AF] shrink-0"
                  >
                    <Icon name="ok-sag" size={22} />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>

          {/* 8.5 BAŞVURU HAZIRLIĞI & ORDU MERKEZİ BİLGİ KARTLARI */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left: Kayıt Öncesi Hazırlık */}
            <div className="lg:col-span-6 p-5 sm:p-6 rounded-[18px] border border-[#DDDFE2] bg-white shadow-[0_6px_22px_rgba(9,27,50,0.04)] flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-9 h-9 rounded-[10px] bg-[#CB1426]/10 text-[#CB1426] flex items-center justify-center">
                    <Icon name="kontrol-listesi" size={20} />
                  </span>
                  <h3 className="font-display font-extrabold text-[24px] uppercase text-[#091B32]">
                    Kayıt Öncesi Hazırlık
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {REGISTRATION_CHECKLIST.map((line, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[14px] text-[#4B5563] leading-snug"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#CB1426] shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim#kayit"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 bg-red-gradient text-white text-[14px] font-semibold rounded-[10px] transition-all shadow-[0_6px_16px_rgba(203,20,38,0.28)]"
                >
                  <span>Kayıt Bilgisi Al</span>
                  <Icon name="ok-sag" size={16} />
                </Link>
                <Link
                  href="/egitimler"
                  className="inline-flex items-center justify-center min-h-[44px] px-4 border border-[#DDDFE2] hover:border-[#0A2340] rounded-[10px] text-[14px] font-semibold text-[#091B32] transition-colors"
                >
                  Eğitimleri İncele
                </Link>
              </div>
            </div>

            {/* Right: Ordu Merkez Konum & İletişim Kartı */}
            <div className="lg:col-span-6 p-5 sm:p-6 rounded-[18px] border border-[#DDDFE2] bg-navy-gradient text-white shadow-[0_12px_32px_rgba(10,35,64,0.14)] grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              <div className="sm:col-span-5">
                <Link
                  href="/galeri#kurum-tabela"
                  className="block rounded-[12px] overflow-hidden border border-white/15 aspect-[4/3] bg-[#07192F]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/meryem/galeri/kurum-tabela.webp"
                    alt="Meryem Sürücü Kursu Ordu merkez binası"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="sm:col-span-7 space-y-3">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/12 border border-white/15 text-[11px] font-semibold text-white/90">
                  Merkez Şube
                </span>
                <h3 className="font-display font-extrabold text-[24px] leading-tight uppercase">
                  Ordu Merkezdeyiz
                </h3>
                <p className="text-[14px] text-white/85 flex items-start gap-2">
                  <Icon
                    name="konum"
                    size={17}
                    className="shrink-0 mt-0.5 text-[#FF8A94]"
                  />
                  <span>{config.address}</span>
                </p>
                <div className="pt-1 flex flex-wrap gap-2.5">
                  <a
                    href={config.phoneHref}
                    className="inline-flex items-center gap-2 min-h-[42px] px-4 rounded-[10px] bg-white text-[#0A2340] hover:bg-[#F1F5F9] text-[14px] font-bold transition-colors"
                  >
                    <Icon name="telefon" size={16} />
                    <span>{config.phoneDisplay}</span>
                  </a>
                  <a
                    href={config.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-[42px] px-4 rounded-[10px] border border-white/25 hover:bg-white/10 text-white text-[13px] font-semibold transition-colors"
                  >
                    <span>Yol Tarifi</span>
                    <Icon name="ok-sag" size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SIK SORULAN SORULAR */}
      <section
        aria-labelledby="sss-baslik"
        className="w-full bg-gradient-to-b from-white to-[#F8FAFC] pt-6 pb-12 lg:pt-8 lg:pb-14"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2
                id="sss-baslik"
                className="font-display font-extrabold text-[28px] lg:text-[36px] leading-tight uppercase text-[#091B32]"
              >
                Sık sorulan sorular
              </h2>
              <span className="heading-underline" aria-hidden="true" />
            </div>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-1.5 min-h-[44px] text-[14px] font-semibold text-[#0A2340] hover:text-[#CB1426] transition-colors"
            >
              <span>Başka sorunuz mu var? İletişime geçin</span>
              <Icon name="ok-sag" size={15} />
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {publishedFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-[14px] overflow-hidden transition-all ${
                    isOpen
                      ? "border-[#0A2340]/40 bg-white shadow-[0_10px_26px_rgba(9,27,50,0.06)]"
                      : "border-[#DDDFE2] bg-white hover:border-[#0A2340]/30 shadow-[0_2px_8px_rgba(9,27,50,0.02)]"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                      onClick={() =>
                        setOpenFaqId((prev) => (prev === faq.id ? null : faq.id))
                      }
                      className="w-full min-h-[60px] px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 text-left text-[15px] lg:text-[16px] font-semibold text-[#091B32] hover:bg-[#F8FAFC]/80 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isOpen
                            ? "bg-[#0A2340] border-[#0A2340] text-white"
                            : "bg-[#F8FAFC] border-[#DDDFE2] text-[#0A2340]"
                        }`}
                      >
                        <Icon
                          name="chevron"
                          size={18}
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={`faq-panel-${faq.id}`}
                      className="px-4 sm:px-6 pb-5 pt-2 text-[14px] lg:text-[15px] text-[#4B5563] leading-relaxed bg-gradient-to-b from-[#F8FAFC]/70 to-white border-t border-[#DDDFE2]/80"
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
