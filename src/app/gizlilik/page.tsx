import type { Metadata } from "next";
import { PrivacyControls } from "@/components/PrivacyControls";

export const metadata: Metadata = {
  title: "Gizlilik ve Çerezler",
  description:
    "Meryem Sürücü Kursu web sitesi gizlilik, veri işleme ve çerez tercihleri bilgilendirmesi.",
};

export default function GizlilikPage() {
  return (
    <>
      <section className="w-full bg-[#F8F8F8] border-b border-[#DDDFE2] py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <h1 className="font-display font-extrabold text-[36px] lg:text-[46px] leading-tight uppercase text-[#091B32]">
            Gizlilik ve Çerezler
          </h1>
          <span className="heading-underline" aria-hidden="true" />
        </div>
      </section>

      <section className="w-full bg-white py-10 lg:py-12">
        <div className="max-w-[900px] mx-auto px-4 sm:px-5 lg:px-8 space-y-6 text-[15px] text-[#4B5563] leading-relaxed">
          <div className="space-y-2">
            <h2 className="font-display font-extrabold text-[24px] uppercase text-[#091B32]">
              Veri İşleme İlkeleri
            </h2>
            <p>
              Meryem Sürücü Kursu web sitesi ziyaretçilerinin kişisel iletişim
              bilgilerini tarayıcıda kaydetmez ve sunucusuz form gönderimi
              yapmaz. Telefon veya onaylı WhatsApp kanalları üzerinden
              paylaştığınız bilgiler yalnızca talep ettiğiniz eğitim ve kayıt
              bilgilendirmesini sağlamak amacıyla kullanılır.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-extrabold text-[24px] uppercase text-[#091B32]">
              Çerezler ve Tarayıcı Tercihleri
            </h2>
            <p>
              Sitede yalnızca oturum başına bir kez gösterilen açılış animasyonu
              ve çerez bildirimi tercihiniz gibi temel işlevsel kayıtlar
              kullanılır. İzne tabi üçüncü taraf analiz, reklam veya takip
              araçları açık tercihiniz olmadan çalıştırılmaz.
            </p>
          </div>

          <PrivacyControls />
        </div>
      </section>
    </>
  );
}
