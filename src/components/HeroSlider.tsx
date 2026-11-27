"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { useSiteConfig } from "@/lib/site-context";

export function HeroSlider() {
  const { config } = useSiteConfig();
  const activeSlides = config.slides.filter((s) => s.status === "yayinda");
  const slides =
    activeSlides.length > 0 ? activeSlides : config.slides.slice(0, 1);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Keep index valid if published slide count changes in CMS
  const safeIndex = currentIndex >= slides.length ? 0 : currentIndex;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onVisibility = () => setIsTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries[0]?.isIntersecting ?? true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const autoPlayActive =
    slides.length > 1 &&
    !userPaused &&
    !isFocusWithin &&
    isInView &&
    isTabVisible &&
    !reducedMotion;

  useEffect(() => {
    if (!autoPlayActive) return;
    const timer = window.setInterval(goNext, 7000);
    return () => window.clearInterval(timer);
  }, [autoPlayActive, goNext]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (slides.length <= 1) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setUserPaused(true);
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setUserPaused(true);
      goPrev();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || slides.length <= 1) return;
    const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 40) {
      setUserPaused(true);
      if (delta < 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[safeIndex];

  return (
    <section
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Öne çıkan eğitim slaytları"
      onKeyDown={handleKeyDown}
      onFocus={() => setIsFocusWithin(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsFocusWithin(false);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full bg-[#0A2340] overflow-hidden"
    >
      {/* Desktop Split Layout (>= 1024px) */}
      <div className="relative lg:h-[620px] flex flex-col lg:block">
        {/* Photo Area: top on mobile (240-270px), right/full-bleed behind slanted panel on desktop */}
        <div className="relative w-full h-[244px] sm:h-[268px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[66%] lg:h-full bg-[#091B32] overflow-hidden">
          {slides.map((slide, idx) => {
            const isActive = idx === safeIndex;
            return (
              <div
                key={slide.id}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-opacity duration-[420ms] ease-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <picture>
                  <source
                    media="(max-width: 1023px)"
                    srcSet={slide.imageMobile}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.imageDesktop}
                    alt={slide.imageAlt}
                    loading={idx === 0 ? "eager" : "lazy"}
                    fetchPriority={idx === 0 ? "high" : "auto"}
                    className="w-full h-full object-cover hidden lg:block"
                    style={{ objectPosition: slide.objectPositionDesktop }}
                  />
                </picture>
                {/* Mobile explicit object-position */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.imageMobile}
                  alt={slide.imageAlt}
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : "auto"}
                  className="w-full h-full object-cover lg:hidden"
                  style={{ objectPosition: slide.objectPositionMobile }}
                />
                {/* Soft edge gradient blend */}
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#07192F]/45 to-transparent pointer-events-none"
                />
                <div
                  aria-hidden="true"
                  className="lg:hidden absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#07192F]/35 to-transparent pointer-events-none"
                />
                {slide.isConcept && (
                  <span className="absolute top-3 right-3 lg:top-auto lg:bottom-4 lg:right-6 z-20 px-2.5 py-1 rounded-[6px] bg-black/55 text-white/95 text-[11px] font-medium backdrop-blur-[2px]">
                    Konsept görsel
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile thin red gradient line between photo and navy panel */}
        <div
          aria-hidden="true"
          className="h-[3.5px] w-full bg-gradient-to-r from-[#CB1426] via-[#EF4444] to-[#A81020] lg:hidden"
        />

        {/* Desktop Red Diagonal Seam (sits 5px beyond the navy panel's diagonal right edge) */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-y-0 left-0 w-[calc(44%+5px)] bg-gradient-to-b from-[#E11D31] via-[#CB1426] to-[#9E0E1C] hero-red-seam z-20 pointer-events-none"
        />

        {/* Navy Text Panel */}
        <div className="relative z-30 w-full lg:w-[44%] lg:h-full bg-navy-gradient hero-navy-panel flex flex-col justify-between px-4 sm:px-6 pt-5 pb-4 lg:pt-14 lg:pb-10 lg:pl-[72px] xl:pl-[84px] lg:pr-14 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#1D4ED8]/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 left-12 w-64 h-64 rounded-full bg-[#CB1426]/12 blur-3xl"
          />
          <div className="relative max-w-[450px] my-auto">
            <h1
              key={currentSlide.id}
              className="font-display font-extrabold italic uppercase text-white tracking-[-0.01em] text-[44px] sm:text-[48px] lg:text-[78px] xl:text-[88px] leading-[0.93] transition-opacity duration-[420ms]"
            >
              {currentSlide.titleLines.map((line, i, arr) => {
                if (!line) return null;
                const isLast = i === arr.filter(Boolean).length - 1;
                return (
                  <span
                    key={`${currentSlide.id}-line-${i}`}
                    className={`block ${
                      isLast && currentSlide.highlightLastLine
                        ? "text-[#CB1426]"
                        : "text-white"
                    }`}
                  >
                    {line}
                  </span>
                );
              })}
            </h1>

            <p className="mt-2.5 lg:mt-4 text-[15px] lg:text-[18px] text-white/90 font-normal leading-snug max-w-[360px]">
              {currentSlide.subtitle}
            </p>

            <div className="mt-4 lg:mt-6">
              <Link
                href={currentSlide.ctaHref}
                className="inline-flex items-center justify-center gap-2.5 min-h-[46px] lg:min-h-[50px] px-5 lg:px-6 bg-red-gradient text-white text-[15px] lg:text-[16px] font-semibold rounded-[12px] transition-all shadow-[0_8px_22px_rgba(203,20,38,0.38)] hover:shadow-[0_10px_28px_rgba(203,20,38,0.5)] hover:-translate-y-0.5"
              >
                <span>{currentSlide.ctaLabel}</span>
                <Icon name="ok-sag" size={18} />
              </Link>
            </div>
          </div>

          {/* Slide Controls (bottom-left of navy panel, left-aligned so mobile WhatsApp on right never overlaps) */}
          <div className="mt-5 lg:mt-6 flex items-center gap-2 pr-16 lg:pr-0">
            <div
              role="tablist"
              aria-label="Slayt seçimi"
              className="flex items-center gap-1"
            >
              {slides.map((slide, idx) => {
                const isActive = idx === safeIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`${idx + 1}. slayta geç: ${slide.titleLines.filter(Boolean).join(" ")}`}
                    onClick={() => {
                      setUserPaused(true);
                      setCurrentIndex(idx);
                    }}
                    className="inline-flex items-center justify-center min-w-[32px] min-h-[44px] px-1 rounded-full"
                  >
                    <span
                      className={`block rounded-full transition-all ${
                        isActive
                          ? "w-3.5 h-3.5 bg-[#CB1426]"
                          : "w-3 h-3 border-2 border-white/60 bg-transparent hover:border-white"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {slides.length > 1 && (
              <div className="flex items-center gap-1 ml-2">
                <button
                  type="button"
                  onClick={() => {
                    setUserPaused(true);
                    goPrev();
                  }}
                  aria-label="Önceki slayt"
                  className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon name="ok-sol" size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUserPaused(true);
                    goNext();
                  }}
                  aria-label="Sonraki slayt"
                  className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon name="ok-sag" size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setUserPaused((p) => !p)}
                  aria-label={
                    userPaused
                      ? "Otomatik slayt geçişini başlat"
                      : "Otomatik slayt geçişini durdur"
                  }
                  aria-pressed={userPaused}
                  className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon name={userPaused ? "oynat" : "duraklat"} size={17} />
                </button>
              </div>
            )}

            <span className="sr-only" aria-live="polite">
              Slayt {safeIndex + 1} / {slides.length}:{" "}
              {currentSlide.titleLines.filter(Boolean).join(" ")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
