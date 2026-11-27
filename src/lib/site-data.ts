export type ContentStatus = "taslak" | "onay_bekliyor" | "yayinda";

export interface HeroSlideItem {
  id: string;
  titleLines: [string, string, string?];
  highlightLastLine: boolean;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  imageDesktop: string;
  imageMobile: string;
  imageAlt: string;
  objectPositionDesktop: string;
  objectPositionMobile: string;
  isConcept: boolean;
  status: ContentStatus;
}

export interface TrainingOptionItem {
  id: string;
  licenseClass: string;
  licenseLabel: string;
  transmissions: Array<{
    value: "manuel" | "otomatik";
    label: string;
  }>;
  status: ContentStatus;
}

export type GalleryCategory =
  | "kurum"
  | "filo"
  | "sinif"
  | "adaylar"
  | "motosiklet";

export interface GalleryPhotoItem {
  id: string;
  anchor: string;
  category: GalleryCategory;
  title: string;
  description: string;
  imageFull: string;
  imageThumb: string;
  alt: string;
  isConcept: boolean;
  status: ContentStatus;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  status: ContentStatus;
}

export interface SiteConfig {
  siteName: string;
  logoSrc: string;
  address: string;
  mapsUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappCandidateNumber: string;
  whatsappApproved: boolean;
  verifiedSocialUrl: string;
  verifiedSocialLabel: string;
  officialCompanyTitle: string;
  slides: HeroSlideItem[];
  trainingCatalog: TrainingOptionItem[];
  gallery: GalleryPhotoItem[];
  faqs: FaqItem[];
}

export const SITE_URL = "https://meryemsurucukursu.onizlememerkezi.com";

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  siteName: "Meryem Sürücü Kursu",
  logoSrc: "/meryem/meryem-logo.webp",
  address: "Şarkiye Mah., Novada AVM yanı, Ordu",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=%C5%9Earkiye%20Mahallesi%20Novada%20AVM%20yan%C4%B1%20Ordu",
  phoneDisplay: "0 452 223 11 93",
  phoneHref: "tel:+904522231193",
  whatsappCandidateNumber: "905333925205",
  whatsappApproved: false,
  verifiedSocialUrl: "",
  verifiedSocialLabel: "",
  officialCompanyTitle:
    "Meryem Sürücü Kursu (Resmî ticari unvan yayın öncesi onayı beklenmektedir)",
  slides: [
    {
      id: "slayt-1",
      titleLines: ["Yolunuz", "bizimle", "güvende."],
      highlightLastLine: true,
      subtitle: "Ordu’da sürücü eğitimi",
      ctaLabel: "Eğitim planını oluştur",
      ctaHref: "/#egitim-plani",
      imageDesktop: "/meryem/egitim-araci-dis.webp",
      imageMobile: "/meryem/egitim-araci-dis-mobil.webp",
      imageAlt: "Meryem Sürücü Kursu eğitim aracı",
      objectPositionDesktop: "68% 55%",
      objectPositionMobile: "62% 50%",
      isConcept: true,
      status: "yayinda",
    },
    {
      id: "slayt-2",
      titleLines: ["Sınıfta öğren,", "yolda", "uygula."],
      highlightLastLine: true,
      subtitle:
        "Trafik kurallarını ve güvenli sürüşün temellerini sınıfta öğren.",
      ctaLabel: "Teorik eğitimi incele",
      ctaHref: "/egitimler/teorik-egitim",
      imageDesktop: "/meryem/teorik-egitim-sinifi.webp",
      imageMobile: "/meryem/teorik-egitim-sinifi-mobil.webp",
      imageAlt: "Sürücü kursunda teorik eğitim sınıfı",
      objectPositionDesktop: "55% 45%",
      objectPositionMobile: "47% 45%",
      isConcept: true,
      status: "yayinda",
    },
    {
      id: "slayt-3",
      titleLines: ["Direksiyon", "başında", "özgüven."],
      highlightLastLine: true,
      subtitle: "Uygulamalı sürüş eğitimi hakkında bilgi al.",
      ctaLabel: "Direksiyon eğitimini incele",
      ctaHref: "/egitimler/direksiyon-egitimi",
      imageDesktop: "/meryem/direksiyon-egitimi.webp",
      imageMobile: "/meryem/direksiyon-egitimi-mobil.webp",
      imageAlt: "Eğitim aracında uygulamalı direksiyon dersi",
      objectPositionDesktop: "60% 50%",
      objectPositionMobile: "55% 50%",
      isConcept: true,
      status: "taslak",
    },
  ],
  trainingCatalog: [
    {
      id: "sinif-b",
      licenseClass: "B",
      licenseLabel: "B",
      transmissions: [
        { value: "manuel", label: "Manuel" },
        { value: "otomatik", label: "Otomatik" },
      ],
      status: "yayinda",
    },
  ],
  gallery: [
    {
      id: "galeri-arac",
      anchor: "egitim-araci",
      category: "filo",
      title: "Eğitim Aracı",
      description:
        "Meryem Sürücü Kursu uygulamalı sürüş eğitimlerinde kullanılan eğitim aracı görünümü.",
      imageFull: "/meryem/egitim-araci-dis.webp",
      imageThumb: "/meryem/egitim-araci-dis-galeri.webp",
      alt: "Meryem Sürücü Kursu eğitim aracı",
      isConcept: true,
      status: "yayinda",
    },
    {
      id: "galeri-sinif",
      anchor: "teorik-egitim",
      category: "sinif",
      title: "Teorik Eğitim Sınıfı",
      description:
        "Trafik kuralları, işaretler ve güvenli sürüş derslerinin işlendiği teorik eğitim sınıfı.",
      imageFull: "/meryem/teorik-egitim-sinifi.webp",
      imageThumb: "/meryem/teorik-egitim-sinifi-galeri.webp",
      alt: "Sürücü kursunda teorik eğitim sınıfı",
      isConcept: true,
      status: "yayinda",
    },
    {
      id: "galeri-kurum-lobi",
      anchor: "kurum-lobi",
      category: "kurum",
      title: "Kurum Karşılama ve Bekleme Alanı",
      description:
        "Şarkiye Mahallesi, Novada AVM yanındaki Meryem Sürücü Kursu modern karşılama ve bekleme alanı.",
      imageFull: "/meryem/galeri/kurum-lobi.webp",
      imageThumb: "/meryem/galeri/kurum-lobi.webp",
      alt: "Meryem Sürücü Kursu karşılama alanı",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-kurum-ofis",
      anchor: "kurum-ofis",
      category: "kurum",
      title: "Kayıt ve Danışma Ofisi",
      description:
        "Eğitim planlama ve kayıt işlemlerinin gerçekleştirildiği danışma ofisimiz.",
      imageFull: "/meryem/galeri/kurum-ofis.webp",
      imageThumb: "/meryem/galeri/kurum-ofis.webp",
      alt: "Meryem Sürücü Kursu danışma ofisi",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-kurum-yonetim",
      anchor: "kurum-yonetim",
      category: "kurum",
      title: "Kurum Yönetim ve Görüşme Odası",
      description:
        "Adaylarımızla bire bir eğitim planı ve bilgilendirme görüşmelerinin yapıldığı kurum ofisi.",
      imageFull: "/meryem/galeri/kurum-yonetim-odasi.webp",
      imageThumb: "/meryem/galeri/kurum-yonetim-odasi.webp",
      alt: "Meryem Sürücü Kursu yönetim odası",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-kurum-tabela",
      anchor: "kurum-tabela",
      category: "kurum",
      title: "Meryem Sürücü Kursu Kurumsal Alan",
      description:
        "Direksiyon ve teorik eğitim hizmetleriyle Ordu’daki merkez binamız.",
      imageFull: "/meryem/galeri/kurum-tabela.webp",
      imageThumb: "/meryem/galeri/kurum-tabela.webp",
      alt: "Meryem Sürücü Kursu ışıklı tabela",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-sinif-derslik",
      anchor: "sinif-derslik",
      category: "sinif",
      title: "Derslik ve Teorik Eğitim",
      description:
        "Eğitmenimiz eşliğinde teorik trafik ve güvenli sürüş derslerimizden gerçek kare.",
      imageFull: "/meryem/galeri/sinif-derslik.webp",
      imageThumb: "/meryem/galeri/sinif-derslik.webp",
      alt: "Meryem Sürücü Kursu derslik eğitimi",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-sinif-araclar",
      anchor: "sinif-ve-araclar",
      category: "sinif",
      title: "Teorik ve Uygulamalı Eğitim Süreci",
      description:
        "Sınıf eğitimi ve modern eğitim araçlarımızla planlı sürücü eğitimi.",
      imageFull: "/meryem/galeri/sinif-ve-araclar.webp",
      imageThumb: "/meryem/galeri/sinif-ve-araclar.webp",
      alt: "Meryem Sürücü Kursu sınıf ve araç eğitimi",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-filo-1",
      anchor: "filo-otomobil-motor",
      category: "filo",
      title: "Otomobil ve Motosiklet Eğitim Filosu",
      description:
        "Güncel otomobil ve motosiklet eğitim araçlarımızla farklı sınıflarda uygulamalı eğitim.",
      imageFull: "/meryem/galeri/filo-otomobil-motor.webp",
      imageThumb: "/meryem/galeri/filo-otomobil-motor.webp",
      alt: "Meryem Sürücü Kursu otomobil ve motosiklet filosu",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-filo-2",
      anchor: "filo-kirmizi-arac",
      category: "filo",
      title: "Modern Eğitim Araçlarımız",
      description:
        "Manuel ve otomatik vites seçenekleriyle donanımlı sürüş eğitimi araçları.",
      imageFull: "/meryem/galeri/filo-kirmizi-arac.webp",
      imageThumb: "/meryem/galeri/filo-kirmizi-arac.webp",
      alt: "Meryem Sürücü Kursu kırmızı eğitim aracı ve motosiklet",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-aday-1",
      anchor: "egitim-araci-aday-1",
      category: "adaylar",
      title: "Eğitmen ve Adayımız — Uygulamalı Eğitim",
      description:
        "Direksiyon eğitimi sonrasında eğitmenimiz ve sürücü adayımız eğitim aracımızın başında.",
      imageFull: "/meryem/galeri/egitim-araci-aday-1.webp",
      imageThumb: "/meryem/galeri/egitim-araci-aday-1.webp",
      alt: "Meryem Sürücü Kursu eğitmen ve aday",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-aday-2",
      anchor: "egitim-araci-aday-2",
      category: "adaylar",
      title: "Başarılı Adaylarımız",
      description:
        "Eğitim sürecini başarıyla tamamlayan sürücü adaylarımızla hatıra karesi.",
      imageFull: "/meryem/galeri/egitim-araci-aday-2.webp",
      imageThumb: "/meryem/galeri/egitim-araci-aday-2.webp",
      alt: "Meryem Sürücü Kursu başarılı aday ve eğitmen",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-aday-3",
      anchor: "basarili-aday-arac",
      category: "adaylar",
      title: "Direksiyon Eğitimi Başarı Kareleri",
      description:
        "Eğitim aracımızla uygulamalı sınavını tamamlayan adayımız ve eğitmenimiz.",
      imageFull: "/meryem/galeri/basarili-aday-arac.webp",
      imageThumb: "/meryem/galeri/basarili-aday-arac.webp",
      alt: "Meryem Sürücü Kursu aday ve eğitim aracı",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-motor-1",
      anchor: "motosiklet-filosu",
      category: "motosiklet",
      title: "A1 · A2 · A Motosiklet Eğitim Filosu",
      description:
        "Farklı motosiklet ehliyeti sınıflarına yönelik güncel motosiklet eğitim filomuz.",
      imageFull: "/meryem/galeri/motosiklet-filosu.webp",
      imageThumb: "/meryem/galeri/motosiklet-filosu.webp",
      alt: "Meryem Sürücü Kursu motosiklet eğitim filosu",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-motor-2",
      anchor: "motosiklet-siniflari",
      category: "motosiklet",
      title: "Motosiklet Sınıfları ve Parkur Eğitimi",
      description:
        "Otomatik ve vitesli motosiklet sınıflarında koruyucu ekipmanlı sürüş eğitimi.",
      imageFull: "/meryem/galeri/motosiklet-siniflari.webp",
      imageThumb: "/meryem/galeri/motosiklet-siniflari.webp",
      alt: "Meryem Sürücü Kursu motosiklet sınıfları",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-motor-3",
      anchor: "motosiklet-egitmenleri",
      category: "motosiklet",
      title: "Motosiklet Eğitmenlerimiz ve Saha Tanıtımı",
      description:
        "Ordu’da güvenli motosiklet eğitimi veren uzman eğitmen kadromuz.",
      imageFull: "/meryem/galeri/motosiklet-egitmenleri.webp",
      imageThumb: "/meryem/galeri/motosiklet-egitmenleri.webp",
      alt: "Meryem Sürücü Kursu motosiklet eğitmenleri",
      isConcept: false,
      status: "yayinda",
    },
    {
      id: "galeri-direksiyon",
      anchor: "direksiyon-egitimi",
      category: "filo",
      title: "Direksiyon Eğitimi",
      description:
        "Eğitmen eşliğinde araç içi uygulamalı direksiyon dersi görünümü.",
      imageFull: "/meryem/direksiyon-egitimi.webp",
      imageThumb: "/meryem/direksiyon-egitimi-galeri.webp",
      alt: "Eğitim aracında uygulamalı direksiyon dersi",
      isConcept: true,
      status: "taslak",
    },
  ],
  faqs: [
    {
      id: "sss-1",
      question: "B sınıfı ehliyet ile hangi araçları kullanabilirim?",
      answer:
        "Kullanabileceğin araçlar belgenin sınıfına ve varsa kısıtlama kodlarına göre değişir. Başvuru öncesinde güncel kapsamı kursumuzdan öğrenebilirsin.",
      status: "yayinda",
    },
    {
      id: "sss-2",
      question: "Manuel ve otomatik eğitim arasında ne fark var?",
      answer:
        "Manuel eğitimde debriyaj ve vites değişimi pratiği yapılır. Otomatik eğitimde sürüş pratiği otomatik vitesli araçla yapılır.",
      status: "yayinda",
    },
  ],
};

export const TRAINING_CARDS = [
  {
    id: "teorik",
    title: "Teorik Eğitim",
    description: "Trafik kuralları, işaretler ve güvenli sürüşün temelleri.",
    href: "/egitimler/teorik-egitim",
    icon: "direksiyon" as const,
  },
  {
    id: "direksiyon",
    title: "Direksiyon Eğitimi",
    description: "Eğitmen eşliğinde uygulamalı sürüş eğitimi.",
    href: "/egitimler/direksiyon-egitimi",
    icon: "arac" as const,
  },
  {
    id: "sinav",
    title: "Sınava Hazırlık",
    description: "Teorik ve uygulamalı sınavlara hazırlık desteği.",
    href: "/egitimler/sinava-hazirlik",
    icon: "kontrol-listesi" as const,
  },
];

export const REGISTRATION_STEPS = [
  {
    step: 1,
    title: "Bilgi Al",
    description: "Eğitim planı ve kayıt detaylarını öğren.",
    icon: "belge" as const,
  },
  {
    step: 2,
    title: "Kayıt Ol",
    description: "Kursun ilettiği belgelerle kaydını tamamla.",
    icon: "kisi" as const,
  },
  {
    step: 3,
    title: "Eğitime Başla",
    description: "Teorik ve direksiyon eğitimine katıl.",
    icon: "direksiyon" as const,
  },
];

export function buildPlannerWhatsAppMessage(
  licenseClass: string,
  transmission: "manuel" | "otomatik",
  isExample: boolean
): string {
  if (isExample && licenseClass === "B" && transmission === "otomatik") {
    return "Merhaba Meryem Sürücü Kursu, B sınıfı otomatik vites eğitimi için kayıt koşulları, ücret ve uygun dönem hakkında bilgi alabilir miyim?";
  }
  const vitesMetin = transmission === "otomatik" ? "otomatik vites" : "manuel vites";
  return `Merhaba Meryem Sürücü Kursu, ${licenseClass} sınıfı ${vitesMetin} eğitim için kayıt koşulları, ücret ve uygun dönem hakkında bilgi alabilir miyim?`;
}

export function buildGeneralWhatsAppMessage(trainingName?: string): string {
  if (trainingName) {
    return `Merhaba Meryem Sürücü Kursu, ${trainingName} ve kayıt süreci hakkında bilgi almak istiyorum.`;
  }
  return "Merhaba Meryem Sürücü Kursu, ehliyet eğitimi ve kayıt süreci hakkında bilgi almak istiyorum.";
}

export function buildWhatsAppUrl(number: string, message: string): string {
  const cleanNumber = number.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
