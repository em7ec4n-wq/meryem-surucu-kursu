import type { Metadata } from "next";
import { DEFAULT_SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Yasal Bilgilendirme",
  description:
    "Meryem Sürücü Kursu işletme bilgileri, başvuru kanalları ve web sitesi tasarım/geliştirme bilgilendirmesi.",
};

export default function YasalBilgilendirmePage() {
  return (
    <>
      <section className="w-full bg-[#F8F8F8] border-b border-[#DDDFE2] py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <h1 className="font-display font-extrabold text-[36px] lg:text-[46px] leading-tight uppercase text-[#091B32]">
            Yasal Bilgilendirme
          </h1>
          <span className="heading-underline" aria-hidden="true" />
        </div>
      </section>

      <section className="w-full bg-white py-10 lg:py-12">
        <div className="max-w-[900px] mx-auto px-4 sm:px-5 lg:px-8 space-y-6 text-[15px] text-[#091B32] leading-relaxed">
          <div className="p-6 rounded-[14px] border border-[#DDDFE2] bg-[#F8F8F8] space-y-3">
            <h2 className="font-display font-extrabold text-[24px] uppercase text-[#091B32]">
              İşletme Bilgileri
            </h2>
            <p>
              <strong>Ticari Unvan:</strong>{" "}
              {DEFAULT_SITE_CONFIG.officialCompanyTitle}
            </p>
            <p>
              <strong>Adres:</strong> {DEFAULT_SITE_CONFIG.address}
            </p>
            <p>
              <strong>Telefon:</strong>{" "}
              <a
                href={DEFAULT_SITE_CONFIG.phoneHref}
                className="underline hover:text-[#CB1426]"
              >
                {DEFAULT_SITE_CONFIG.phoneDisplay}
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-extrabold text-[24px] uppercase text-[#091B32]">
              Başvuru Kanalları
            </h2>
            <p className="text-[#4B5563]">
              Bu web sitesi bilgilendirme ve ön eğitim planı oluşturma
              amaçlıdır. Kesin kayıt işlemleri yalnızca kursun fiziksel başvuru
              noktasında ve güncel mevzuatın gerektirdiği belgelerle
              gerçekleştirilir. Sitede yer alan konsept görseller, onaylı
              orijinal çekimler eklenene kadar temsilî olarak gösterilmektedir.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-extrabold text-[24px] uppercase text-[#091B32]">
              Tasarım ve Yazılım Hizmeti
            </h2>
            <p className="text-[#4B5563]">
              Bu web sitesinin arayüz tasarımı ve yazılım geliştirme hizmeti{" "}
              <strong>İlay Ajans</strong> tarafından sunulmuştur. Sitede yer
              alan kurumsal bilgiler, eğitim seçenekleri ve iletişim kanalları
              Meryem Sürücü Kursu sorumluluğundadır.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
