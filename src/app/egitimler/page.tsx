import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { CtaBand } from "@/components/CtaBand";
import { TRAINING_CARDS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Eğitimler",
  description:
    "Ordu Meryem Sürücü Kursu teorik eğitim, direksiyon eğitimi ve sınava hazırlık programları hakkında bilgi alın.",
  openGraph: {
    title: "Eğitimler | Meryem Sürücü Kursu",
    description:
      "Teorik eğitim, direksiyon eğitimi ve sınava hazırlık programlarını inceleyin.",
    images: ["/meryem/paylasim.webp"],
  },
};

export default function EgitimlerPage() {
  return (
    <>
      <section className="w-full bg-[#F8F8F8] border-b border-[#DDDFE2] py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <h1 className="font-display font-extrabold text-[36px] lg:text-[46px] leading-tight uppercase text-[#091B32]">
            Eğitimler
          </h1>
          <span className="heading-underline" aria-hidden="true" />
          <p className="mt-3 text-[15px] lg:text-[16px] text-[#4B5563] max-w-[660px] leading-relaxed">
            Sürücü belgesi sürecinde sınıfta teorik temel, araç başında
            uygulamalı direksiyon pratiği ve sınav aşamalarına yönelik düzenli
            hazırlık desteği sunuyoruz.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {TRAINING_CARDS.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group flex flex-col justify-between p-6 bg-white border border-[#DDDFE2] rounded-[14px] hover:border-[#0A2340] hover:shadow-[0_6px_20px_rgba(9,27,50,0.06)] transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-[10px] bg-[#F8F8F8] border border-[#DDDFE2] flex items-center justify-center text-[#0A2340] group-hover:bg-[#0A2340] group-hover:text-white group-hover:border-[#0A2340] transition-colors">
                    <Icon name={card.icon} size={26} />
                  </div>
                  <h2 className="mt-4 font-display font-extrabold text-[26px] leading-tight uppercase text-[#091B32] group-hover:text-[#CB1426] transition-colors">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-[15px] text-[#4B5563] leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0A2340] group-hover:text-[#CB1426]">
                  <span>Detayları incele</span>
                  <Icon name="ok-sag" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
