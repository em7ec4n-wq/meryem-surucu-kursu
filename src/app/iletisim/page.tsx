import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Ordu Meryem Sürücü Kursu iletişim bilgileri, kayıt kanalları, telefon ve yol tarifi.",
  openGraph: {
    title: "İletişim | Meryem Sürücü Kursu",
    description: "Şarkiye Mah., Novada AVM yanı, Ordu · 0 452 223 11 93",
    images: ["/meryem/paylasim.webp"],
  },
};

export default function IletisimPage() {
  return (
    <>
      <section className="w-full bg-[#F8F8F8] border-b border-[#DDDFE2] py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <h1 className="font-display font-extrabold text-[36px] lg:text-[46px] leading-tight uppercase text-[#091B32]">
            İletişim
          </h1>
          <span className="heading-underline" aria-hidden="true" />
          <p className="mt-3 text-[15px] lg:text-[16px] text-[#4B5563] max-w-[660px] leading-relaxed">
            Kayıt koşulları, eğitim planı ve yol tarifi için aşağıdaki iletişim
            kanallarımızdan bize ulaşabilirsin.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <ContactView />
        </div>
      </section>
    </>
  );
}
