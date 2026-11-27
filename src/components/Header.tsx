"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icons";
import { useSiteConfig } from "@/lib/site-context";

const NAV_LINKS = [
  { label: "Eğitimler", href: "/egitimler" },
  { label: "Galeri", href: "/galeri" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export function Header() {
  const { config } = useSiteConfig();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    firstMenuLinkRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = (returnFocus = false) => {
    setMenuOpen(false);
    if (returnFocus) {
      requestAnimationFrame(() => {
        menuButtonRef.current?.focus();
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-[#DDDFE2]">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-5 lg:px-8 h-[66px] lg:h-[78px] flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center min-h-[44px] shrink-0 rounded-[8px]"
          aria-label="Meryem Sürücü Kursu ana sayfa"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={config.logoSrc}
            alt="Meryem Sürücü Kursu"
            width={178}
            height={52}
            className="w-[130px] lg:w-[178px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Ana menü"
          className="hidden lg:flex items-center gap-7 xl:gap-8"
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center min-h-[44px] text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-[#CB1426]"
                    : "text-[#091B32] hover:text-[#CB1426]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/iletisim#kayit"
            className="inline-flex items-center justify-center min-h-[44px] px-5 bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
          >
            Kayıt Bilgisi
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobil-menu"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          className="lg:hidden inline-flex items-center justify-center w-[44px] h-[44px] text-[#091B32] rounded-[10px] hover:bg-[#F8F8F8] transition-colors"
        >
          <Icon name={menuOpen ? "kapat" : "menu"} size={24} />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <nav
          id="mobil-menu"
          aria-label="Mobil menü"
          className="lg:hidden border-t border-[#DDDFE2] bg-white shadow-lg"
        >
          <div className="px-4 sm:px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((item, idx) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  ref={idx === 0 ? firstMenuLinkRef : undefined}
                  href={item.href}
                  onClick={() => closeMenu(false)}
                  className={`flex items-center min-h-[46px] px-3 rounded-[10px] text-[16px] font-medium transition-colors ${
                    isActive
                      ? "bg-[#F8F8F8] text-[#CB1426]"
                      : "text-[#091B32] hover:bg-[#F8F8F8]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/iletisim#kayit"
                onClick={() => closeMenu(false)}
                className="flex items-center justify-center w-full min-h-[46px] bg-[#CB1426] hover:bg-[#A81020] text-white text-[15px] font-semibold rounded-[10px] transition-colors"
              >
                Kayıt Bilgisi
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
