import type { Metadata } from "next";
import { GalleryView } from "@/components/GalleryView";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Meryem Sürücü Kursu eğitim aracı ve teorik eğitim sınıfı fotoğrafları.",
  openGraph: {
    title: "Galeri | Meryem Sürücü Kursu",
    description: "Eğitim aracı ve teorik eğitim sınıfından görüntüler.",
    images: ["/meryem/egitim-araci-dis.webp"],
  },
};

export default function GaleriPage() {
  return (
    <>
      <section className="w-full bg-[#F8F8F8] border-b border-[#DDDFE2] py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <h1 className="font-display font-extrabold text-[36px] lg:text-[46px] leading-tight uppercase text-[#091B32]">
            Galeri
          </h1>
          <span className="heading-underline" aria-hidden="true" />
          <p className="mt-3 text-[15px] lg:text-[16px] text-[#4B5563] max-w-[660px] leading-relaxed">
            Eğitim aracımız ve teorik eğitim sınıfımızdan görüntüler. Fotoğrafı
            büyütmek için üzerine tıklayabilirsin.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-10 lg:py-12">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8">
          <GalleryView />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
