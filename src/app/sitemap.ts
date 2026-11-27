import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/egitimler",
    "/egitimler/teorik-egitim",
    "/egitimler/direksiyon-egitimi",
    "/egitimler/sinava-hazirlik",
    "/galeri",
    "/hakkimizda",
    "/iletisim",
    "/yasal-bilgilendirme",
    "/gizlilik",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
