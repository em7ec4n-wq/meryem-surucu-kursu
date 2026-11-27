import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Ordu Meryem Sürücü Kursu hakkında bilgi ve güvenli sürüş odaklı eğitim yaklaşımımız.",
  openGraph: {
    title: "Hakkımızda | Meryem Sürücü Kursu",
    description:
      "Ordu’da teorik ve uygulamalı sürücü eğitimi yaklaşımımızı inceleyin.",
    images: ["/meryem/teorik-egitim-sinifi.webp"],
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      <section className="w-full bg-[#F8F8F8] border-b border-[#DDDFE2] py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <h1 className="font-display font-extrabold text-[36px] lg:text-[46px] leading-tight uppercase text-[#091B32]">
            Hakkımızda
          </h1>
          <span className="heading-underline" aria-hidden="true" />
          <p className="mt-3 text-[15px] lg:text-[16px] text-[#4B5563] max-w-[680px] leading-relaxed">
            Meryem Sürücü Kursu, Ordu’da sürücü adaylarının trafik bilincini
            kazanması ve güvenli sürüş alışkanlığı edinmesi için teorik ve
            uygulamalı eğitim süreçlerini bir arada yürütür.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="relative rounded-[14px] overflow-hidden border border-[#DDDFE2] bg-[#F8F8F8] aspect-[16/10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/meryem/teorik-egitim-sinifi.webp"
                alt="Meryem Sürücü Kursu teorik eğitim sınıfı"
                className="w-full h-full object-cover"
                style={{ objectPosition: "53% 43%" }}
              />
              <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-[6px] bg-black/55 text-white text-[11px] font-medium">
                Konsept görsel
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-display font-extrabold text-[28px] uppercase text-[#091B32]">
              Eğitim Yaklaşımımız
            </h2>
            <p className="text-[15px] text-[#4B5563] leading-relaxed">
              Eğitim sürecimiz yalnızca sınav aşamasına değil, günlük trafikte
              kurallara uygun ve kontrollü sürüş becerisine odaklanır. Teorik
              derslerde öğrenilen kurallar, direksiyon eğitiminde eğitmen
              rehberliğinde uygulamaya dönüştürülür.
            </p>
            <p className="text-[15px] text-[#4B5563] leading-relaxed">
              Şarkiye Mahallesi’nde, Novada AVM yanında yer alan kursumuzda
              kayıt, eğitim planlama ve sınav süreçleri hakkında doğrudan bilgi
              alabilirsin.
            </p>
            <div className="pt-2">
              <Link
                href="/egitimler"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
              >
                <span>Eğitimleri incele</span>
                <Icon name="ok-sag" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8F8F8] border-t border-[#DDDFE2] py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-extrabold text-[28px] lg:text-[34px] leading-tight uppercase text-[#091B32]">
                Kurumumuzdan Kareler
              </h2>
              <span className="heading-underline" aria-hidden="true" />
            </div>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-1.5 min-h-[44px] text-[14px] font-semibold text-[#0A2340] hover:text-[#CB1426]"
            >
              <span>Tüm galeri</span>
              <Icon name="ok-sag" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                src: "/meryem/galeri/kurum-lobi.webp",
                title: "Karşılama ve Bekleme Alanı",
                anchor: "kurum-lobi",
              },
              {
                src: "/meryem/galeri/kurum-ofis.webp",
                title: "Kayıt ve Danışma Ofisi",
                anchor: "kurum-ofis",
              },
              {
                src: "/meryem/galeri/kurum-yonetim-odasi.webp",
                title: "Yönetim ve Görüşme Odası",
                anchor: "kurum-yonetim",
              },
            ].map((item) => (
              <Link
                key={item.anchor}
                href={`/galeri#${item.anchor}`}
                className="group block rounded-[14px] overflow-hidden border border-[#DDDFE2] bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F8F8F8]">
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

      <CtaBand />
    </>
  );
}
