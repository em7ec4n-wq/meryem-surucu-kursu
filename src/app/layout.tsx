import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/lib/site-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SplashIntro } from "@/components/SplashIntro";
import { CookieNotice } from "@/components/CookieNotice";
import { DEFAULT_SITE_CONFIG, SITE_URL } from "@/lib/site-data";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Meryem Sürücü Kursu | Ordu Sürücü Eğitimi",
    template: "%s | Meryem Sürücü Kursu",
  },
  description:
    "Ordu’da teorik eğitim, direksiyon eğitimi ve sınava hazırlık desteğiyle sürücü belgesi eğitimi. Eğitim planınızı hemen oluşturun.",
  icons: {
    icon: "/meryem/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Meryem Sürücü Kursu",
    title: "Meryem Sürücü Kursu | Ordu Sürücü Eğitimi",
    description:
      "Ordu’da teorik eğitim, direksiyon eğitimi ve sınava hazırlık desteğiyle sürücü belgesi eğitimi.",
    images: [
      {
        url: "/meryem/paylasim.webp",
        width: 1200,
        height: 630,
        alt: "Meryem Sürücü Kursu - Ordu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meryem Sürücü Kursu | Ordu Sürücü Eğitimi",
    description:
      "Ordu’da teorik eğitim, direksiyon eğitimi ve sınava hazırlık desteği.",
    images: ["/meryem/paylasim.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: DEFAULT_SITE_CONFIG.siteName,
  url: SITE_URL,
  telephone: "+90-452-223-11-93",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Şarkiye Mah., Novada AVM yanı",
    addressLocality: "Altınordu",
    addressRegion: "Ordu",
    addressCountry: "TR",
  },
  image: `${SITE_URL}/meryem/paylasim.webp`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${barlowCondensed.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#091B32] selection:bg-[#CB1426] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteProvider>
          <a
            href="#ana-icerik"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:bg-[#0A2340] focus:text-white focus:px-4 focus:py-2 focus:rounded-[8px]"
          >
            Ana içeriğe atla
          </a>
          <SplashIntro />
          <Header />
          <main id="ana-icerik" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <CookieNotice />
        </SiteProvider>
      </body>
    </html>
  );
}
