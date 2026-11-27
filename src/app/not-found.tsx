import React from "react";
import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[680px] mx-auto px-4 sm:px-5 text-center">
        <p className="font-display font-extrabold text-[72px] lg:text-[96px] leading-none text-[#CB1426]">
          404
        </p>
        <h1 className="mt-3 font-display font-extrabold text-[32px] lg:text-[42px] uppercase text-[#091B32]">
          Aradığın sayfayı bulamadık.
        </h1>
        <p className="mt-3 text-[15px] text-[#4B5563]">
          Bağlantı değişmiş veya kaldırılmış olabilir. Ana sayfaya dönerek
          eğitim planını oluşturabilirsin.
        </p>
        <div className="mt-7">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
          >
            <Icon name="ok-sol" size={18} />
            <span>Ana sayfaya dön</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
