import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Teorik Eğitim",
  description:
    "Meryem Sürücü Kursu teorik eğitim programı: trafik kuralları, işaretler, ilk yardım ve güvenli sürüş temelleri.",
  openGraph: {
    title: "Teorik Eğitim | Meryem Sürücü Kursu",
    description:
      "Trafik kuralları, işaretler ve güvenli sürüşün temellerini sınıfta öğrenin.",
    images: ["/meryem/teorik-egitim-sinifi.webp"],
  },
};

export default function TeorikEgitimPage() {
  return (
    <>
      <section className="w-full bg-[#F8F8F8] border-b border-[#DDDFE2] py-9 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <Link
            href="/egitimler"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#0A2340] hover:text-[#CB1426] min-h-[44px]"
          >
            <Icon name="ok-sol" size={16} />
            <span>Tüm Eğitimler</span>
          </Link>
          <h1 className="mt-1 font-display font-extrabold text-[36px] lg:text-[46px] leading-tight uppercase text-[#091B32]">
            Teorik Eğitim
          </h1>
          <span className="heading-underline" aria-hidden="true" />
          <p className="mt-3 text-[15px] lg:text-[16px] text-[#4B5563] max-w-[660px] leading-relaxed">
            Trafik kurallarını, yol işaretlerini ve güvenli sürüşün temellerini
            sınıf ortamında adım adım öğren.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="relative rounded-[14px] overflow-hidden border border-[#DDDFE2] bg-[#F8F8F8] aspect-[16/10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/meryem/teorik-egitim-sinifi.webp"
                alt="Sürücü kursunda teorik eğitim sınıfı"
                className="w-full h-full object-cover"
                style={{ objectPosition: "53% 43%" }}
              />
              <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-[6px] bg-black/55 text-white text-[11px] font-medium">
                Konsept görsel
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <h2 className="font-display font-extrabold text-[26px] uppercase text-[#091B32]">
              Teorik Eğitim İçeriği
            </h2>
            <p className="text-[15px] text-[#4B5563] leading-relaxed">
              Teorik derslerde adayların trafik ortamını doğru okuması,
              kuralları kavraması ve güvenli sürüş bilincini kazanması
              hedeflenir.
            </p>
            <ul className="space-y-3 text-[15px] text-[#091B32]">
              <li className="flex items-start gap-3 p-3.5 rounded-[12px] bg-[#F8F8F8] border border-[#DDDFE2]">
                <Icon
                  name="direksiyon"
                  size={20}
                  className="text-[#CB1426] shrink-0 mt-0.5"
                />
                <span>
                  Trafik ve çevre bilgisi, trafik işaret ve levhaları
                </span>
              </li>
              <li className="flex items-start gap-3 p-3.5 rounded-[12px] bg-[#F8F8F8] border border-[#DDDFE2]">
                <Icon
                  name="arac"
                  size={20}
                  className="text-[#CB1426] shrink-0 mt-0.5"
                />
                <span>Temel araç tekniği ve sürüş öncesi kontroller</span>
              </li>
              <li className="flex items-start gap-3 p-3.5 rounded-[12px] bg-[#F8F8F8] border border-[#DDDFE2]">
                <Icon
                  name="kontrol-listesi"
                  size={20}
                  className="text-[#CB1426] shrink-0 mt-0.5"
                />
                <span>İlk yardım bilgisi ve trafik adabı</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/#egitim-plani"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
              >
                <span>Eğitim planını oluştur</span>
                <Icon name="ok-sag" size={18} />
              </Link>
              <Link
                href="/egitimler/direksiyon-egitimi"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 border border-[#DDDFE2] hover:border-[#0A2340] text-[#091B32] text-[15px] font-medium rounded-[10px] transition-colors"
              >
                <span>Direksiyon Eğitimi</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8F8F8] border-t border-[#DDDFE2] py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-6">
            <h2 className="font-display font-extrabold text-[28px] lg:text-[34px] leading-tight uppercase text-[#091B32]">
              Sınıfımızdan Gerçek Kareler
            </h2>
            <span className="heading-underline" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                src: "/meryem/galeri/sinif-derslik.webp",
                title: "Teorik Derslik ve Sınıf Eğitimi",
                anchor: "sinif-derslik",
              },
              {
                src: "/meryem/galeri/sinif-ve-araclar.webp",
                title: "Sınıftan Direksiyona Eğitim Süreci",
                anchor: "sinif-ve-araclar",
              },
            ].map((item) => (
              <Link
                key={item.anchor}
                href={`/galeri#${item.anchor}`}
                className="group block rounded-[14px] overflow-hidden border border-[#DDDFE2] bg-white"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#F8F8F8]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <p className="px-4 py-3 text-[14px] font-semibold text-[#091B32] group-hover:text-[#CB1426]">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand trainingName="Teorik Eğitim" />
    </>
  );
}
