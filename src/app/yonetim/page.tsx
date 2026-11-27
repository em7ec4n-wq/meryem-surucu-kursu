import type { Metadata } from "next";
import { AdminPanel } from "@/components/AdminPanel";

export const metadata: Metadata = {
  title: "Yönetim Alanı",
  description:
    "Meryem Sürücü Kursu içerik, slayt, galeri, SSS ve yayın onay yönetimi.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function YonetimPage() {
  return (
    <>
      <section className="w-full bg-[#F8F8F8] border-b border-[#DDDFE2] py-9 lg:py-11">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <h1 className="font-display font-extrabold text-[34px] lg:text-[44px] leading-tight uppercase text-[#091B32]">
            Yönetim Alanı
          </h1>
          <span className="heading-underline" aria-hidden="true" />
        </div>
      </section>

      <section className="w-full bg-white py-9 lg:py-11">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <AdminPanel />
        </div>
      </section>
    </>
  );
}
