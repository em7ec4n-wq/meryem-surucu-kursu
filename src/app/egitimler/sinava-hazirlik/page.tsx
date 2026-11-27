import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Sınava Hazırlık",
  description:
    "Meryem Sürücü Kursu teorik ve uygulamalı sınavlara hazırlık desteği hakkında bilgi alın.",
  openGraph: {
    title: "Sınava Hazırlık | Meryem Sürücü Kursu",
    description: "Teorik ve uygulamalı sınavlara planlı hazırlık desteği.",
    images: ["/meryem/paylasim.webp"],
  },
};

export default function SinavaHazirlikPage() {
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
          <div className="mt-2 flex items-center gap-3">
            <div className="w-12 h-12 rounded-[12px] bg-[#0A2340] text-white flex items-center justify-center shrink-0">
              <Icon name="kontrol-listesi" size={26} />
            </div>
            <div>
              <h1 className="font-display font-extrabold text-[36px] lg:text-[46px] leading-tight uppercase text-[#091B32]">
                Sınava Hazırlık
              </h1>
            </div>
          </div>
          <span className="heading-underline" aria-hidden="true" />
          <p className="mt-3 text-[15px] lg:text-[16px] text-[#4B5563] max-w-[660px] leading-relaxed">
            Teorik ve uygulamalı sınav aşamalarına yönelik düzenli takip ve
            hazırlık desteği.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8]">
            <div className="w-11 h-11 rounded-[10px] bg-white border border-[#DDDFE2] flex items-center justify-center text-[#0A2340]">
              <Icon name="belge" size={22} />
            </div>
            <h2 className="mt-4 font-display font-extrabold text-[24px] uppercase text-[#091B32]">
              Teorik Sınav Hazırlığı
            </h2>
            <p className="mt-2 text-[15px] text-[#4B5563] leading-relaxed">
              Sınıf derslerinin ardından trafik kuralları, işaretler, ilk yardım
              ve araç tekniği konularında düzenli tekrar ile teorik sınava
              hazırlık süreci desteklenir.
            </p>
          </div>

          <div className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8]">
            <div className="w-11 h-11 rounded-[10px] bg-white border border-[#DDDFE2] flex items-center justify-center text-[#0A2340]">
              <Icon name="direksiyon" size={22} />
            </div>
            <h2 className="mt-4 font-display font-extrabold text-[24px] uppercase text-[#091B32]">
              Uygulamalı Sınav Hazırlığı
            </h2>
            <p className="mt-2 text-[15px] text-[#4B5563] leading-relaxed">
              Kalkış, duruş, park, geri manevra ve trafik akışı pratiği ile
              uygulama sınavına yönelik gerekli sürüş adımları eğitmen
              eşliğinde çalışılır.
            </p>
          </div>
        </div>

        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8 mt-8">
          <Link
            href="/iletisim#kayit"
            className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
          >
            <span>Kayıt bilgisi al</span>
            <Icon name="ok-sag" size={18} />
          </Link>
        </div>
      </section>

      <CtaBand trainingName="Sınava Hazırlık" />
    </>
  );
}
