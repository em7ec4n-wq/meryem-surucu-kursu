import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { CtaBand } from "@/components/CtaBand";
import { DireksiyonSelector } from "@/components/DireksiyonSelector";

export const metadata: Metadata = {
  title: "Direksiyon Eğitimi",
  description:
    "Meryem Sürücü Kursu uygulamalı direksiyon eğitimi: manuel ve otomatik vites seçenekleriyle eğitmen eşliğinde sürüş pratiği.",
  openGraph: {
    title: "Direksiyon Eğitimi | Meryem Sürücü Kursu",
    description:
      "Eğitmen eşliğinde manuel veya otomatik vitesli uygulamalı sürüş eğitimi.",
    images: ["/meryem/direksiyon-egitimi.webp"],
  },
};

export default function DireksiyonEgitimiPage() {
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
            Direksiyon Eğitimi
          </h1>
          <span className="heading-underline" aria-hidden="true" />
          <p className="mt-3 text-[15px] lg:text-[16px] text-[#4B5563] max-w-[660px] leading-relaxed">
            Eğitmen eşliğinde kontrollü ve aşamalı uygulamalı sürüş eğitimiyle
            direksiyon başında özgüven kazan.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <div className="relative rounded-[14px] overflow-hidden border border-[#DDDFE2] bg-[#F8F8F8] aspect-[16/10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/meryem/direksiyon-egitimi.webp"
                alt="Eğitim aracında uygulamalı direksiyon dersi"
                className="w-full h-full object-cover"
                style={{ objectPosition: "60% 50%" }}
              />
              <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-[6px] bg-black/55 text-white text-[11px] font-medium">
                Konsept görsel
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <DireksiyonSelector />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8F8F8] border-t border-[#DDDFE2] py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-extrabold text-[28px] lg:text-[34px] leading-tight uppercase text-[#091B32]">
                Eğitim Filomuz ve Aday Kareleri
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                src: "/meryem/galeri/egitim-araci-aday-1.webp",
                title: "Uygulamalı Eğitim Aracımız",
                anchor: "egitim-araci-aday-1",
              },
              {
                src: "/meryem/galeri/egitim-araci-aday-2.webp",
                title: "Başarılı Adaylarımız",
                anchor: "egitim-araci-aday-2",
              },
              {
                src: "/meryem/galeri/filo-otomobil-motor.webp",
                title: "Otomobil ve Motosiklet Filosu",
                anchor: "filo-otomobil-motor",
              },
              {
                src: "/meryem/galeri/motosiklet-filosu.webp",
                title: "A1 · A2 · A Motosiklet Filosu",
                anchor: "motosiklet-filosu",
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
                <p className="px-3.5 py-3 text-[14px] font-semibold text-[#091B32] group-hover:text-[#CB1426]">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand trainingName="Direksiyon Eğitimi" />
    </>
  );
}
