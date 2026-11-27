"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "./Icons";
import { useSiteConfig } from "@/lib/site-context";
import { GalleryCategory, GalleryPhotoItem } from "@/lib/site-data";

const CATEGORY_TABS: Array<{ key: "tumu" | GalleryCategory; label: string }> = [
  { key: "tumu", label: "Tümü" },
  { key: "kurum", label: "Kurum ve Ofis" },
  { key: "filo", label: "Eğitim Filosu" },
  { key: "sinif", label: "Sınıf ve Eğitim" },
  { key: "adaylar", label: "Başarılı Adaylar" },
  { key: "motosiklet", label: "Motosiklet Eğitimi" },
];

export function GalleryView() {
  const { config } = useSiteConfig();
  const publishedPhotos = useMemo(
    () => config.gallery.filter((g) => g.status === "yayinda"),
    [config.gallery]
  );

  const [activeCategory, setActiveCategory] = useState<
    "tumu" | GalleryCategory
  >("tumu");
  const [activePhoto, setActivePhoto] = useState<GalleryPhotoItem | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "tumu") return publishedPhotos;
    return publishedPhotos.filter((p) => p.category === activeCategory);
  }, [publishedPhotos, activeCategory]);

  useEffect(() => {
    if (!activePhoto) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
        requestAnimationFrame(() => triggerRef.current?.focus());
      } else if (e.key === "ArrowRight") {
        const idx = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
        if (idx >= 0) {
          setActivePhoto(filteredPhotos[(idx + 1) % filteredPhotos.length]);
        }
      } else if (e.key === "ArrowLeft") {
        const idx = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
        if (idx >= 0) {
          setActivePhoto(
            filteredPhotos[
              (idx - 1 + filteredPhotos.length) % filteredPhotos.length
            ]
          );
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activePhoto, filteredPhotos]);

  const openPhoto = (
    photo: GalleryPhotoItem,
    btn: HTMLButtonElement | null
  ) => {
    triggerRef.current = btn;
    setActivePhoto(photo);
  };

  const closePhoto = () => {
    setActivePhoto(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const navigateLightbox = (dir: -1 | 1) => {
    if (!activePhoto || filteredPhotos.length <= 1) return;
    const idx = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    if (idx < 0) return;
    const nextIdx =
      (idx + dir + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIdx]);
  };

  return (
    <>
      {/* Category Filter Bar */}
      <div
        role="tablist"
        aria-label="Galeri kategorileri"
        className="mb-7 flex flex-wrap gap-2"
      >
        {CATEGORY_TABS.map((tab) => {
          const isActive = activeCategory === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(tab.key)}
              className={`min-h-[44px] px-4 rounded-[10px] text-[14px] font-semibold border transition-colors ${
                isActive
                  ? "bg-[#CB1426] border-[#CB1426] text-white"
                  : "bg-[#F8F8F8] border-[#DDDFE2] text-[#091B32] hover:border-[#0A2340]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPhotos.map((item) => (
          <article
            key={item.id}
            id={item.anchor}
            className="scroll-mt-24 border border-[#DDDFE2] rounded-[14px] overflow-hidden bg-white shadow-[0_2px_10px_rgba(9,27,50,0.03)] flex flex-col"
          >
            <button
              type="button"
              onClick={(e) => openPhoto(item, e.currentTarget)}
              aria-label={`${item.title} fotoğrafını büyüt`}
              className="group relative block w-full aspect-[4/3] overflow-hidden bg-[#F8F8F8] text-left"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageFull}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
              />
              {item.isConcept && (
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-[6px] bg-black/55 text-white text-[11px] font-medium">
                  Konsept görsel
                </span>
              )}
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-[6px] bg-[#0A2340]/85 text-white text-[12px] font-medium">
                Büyüt
              </span>
            </button>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="font-display font-extrabold text-[22px] leading-tight uppercase text-[#091B32]">
                {item.title}
              </h2>
              <p className="mt-1.5 text-[14px] text-[#4B5563] leading-relaxed">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={closePhoto}
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-[2px] flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[1040px] w-full bg-[#0A2340] rounded-[14px] overflow-hidden border border-white/15 shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/15 text-white">
              <p className="font-display font-bold text-[22px] uppercase truncate pr-4">
                {activePhoto.title}
              </p>
              <div className="flex items-center gap-1 shrink-0">
                {filteredPhotos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => navigateLightbox(-1)}
                      aria-label="Önceki fotoğraf"
                      className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-full text-white hover:bg-white/15 transition-colors"
                    >
                      <Icon name="ok-sol" size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateLightbox(1)}
                      aria-label="Sonraki fotoğraf"
                      className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-full text-white hover:bg-white/15 transition-colors"
                    >
                      <Icon name="ok-sag" size={20} />
                    </button>
                  </>
                )}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closePhoto}
                  aria-label="Görseli kapat"
                  className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-full text-white hover:bg-white/15 transition-colors"
                >
                  <Icon name="kapat" size={22} />
                </button>
              </div>
            </div>
            <div className="relative bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.imageFull}
                alt={activePhoto.alt}
                className="w-full max-h-[74vh] object-contain mx-auto"
              />
              {activePhoto.isConcept && (
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-[6px] bg-black/65 text-white text-[12px] font-medium">
                  Konsept görsel
                </span>
              )}
            </div>
            <div className="px-4 sm:px-5 py-3 text-[14px] text-white/85">
              {activePhoto.description}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
