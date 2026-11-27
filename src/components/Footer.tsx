"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { useSiteConfig } from "@/lib/site-context";

export function Footer() {
  const { config } = useSiteConfig();

  return (
    <footer className="w-full bg-white border-t border-[#DDDFE2] text-[#091B32]">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8 py-6 lg:py-7">
        {/* Top Row: Logo + Contact Info matching reference */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 pb-5 border-b border-[#DDDFE2]">
          <Link
            href="/"
            className="inline-flex items-center min-h-[44px] shrink-0"
            aria-label="Meryem Sürücü Kursu ana sayfa"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={config.logoSrc}
              alt="Meryem Sürücü Kursu"
              width={142}
              height={42}
              className="w-[130px] lg:w-[142px] h-auto object-contain"
            />
          </Link>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-7 text-[14px] text-[#091B32]">
            <a
              href={config.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-[44px] hover:text-[#CB1426] transition-colors text-center"
            >
              <Icon name="konum" size={18} className="text-[#0A2340] shrink-0" />
              <span>{config.address}</span>
            </a>

            <a
              href={config.phoneHref}
              className="inline-flex items-center gap-2 min-h-[44px] font-semibold hover:text-[#CB1426] transition-colors"
            >
              <Icon name="telefon" size={18} className="text-[#0A2340] shrink-0" />
              <span>{config.phoneDisplay}</span>
            </a>

            {/* Social icon/link strictly hidden until verified URL is configured */}
            {config.verifiedSocialUrl && (
              <a
                href={config.verifiedSocialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-[44px] hover:text-[#CB1426] transition-colors"
              >
                <span>{config.verifiedSocialLabel || "Sosyal Medya"}</span>
              </a>
            )}
          </div>
        </div>

        {/* Bottom Row: Navigation & Legal Links */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-[#4B5563]">
          <nav
            aria-label="Altbilgi bağlantıları"
            className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2"
          >
            <Link href="/egitimler" className="hover:text-[#091B32] py-1">
              Eğitimler
            </Link>
            <Link href="/galeri" className="hover:text-[#091B32] py-1">
              Galeri
            </Link>
            <Link href="/hakkimizda" className="hover:text-[#091B32] py-1">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="hover:text-[#091B32] py-1">
              İletişim
            </Link>
            <Link
              href="/yasal-bilgilendirme"
              className="hover:text-[#091B32] py-1"
            >
              Yasal Bilgilendirme
            </Link>
            <Link href="/gizlilik" className="hover:text-[#091B32] py-1">
              Gizlilik ve Çerezler
            </Link>
            <Link href="/yonetim" className="hover:text-[#091B32] py-1">
              Yönetim
            </Link>
          </nav>

          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} Meryem Sürücü Kursu · Ordu
          </p>
        </div>
      </div>
    </footer>
  );
}
