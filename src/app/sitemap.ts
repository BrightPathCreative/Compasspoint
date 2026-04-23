import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/methodology",
    "/faq",
    "/blog",
    "/book",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const s of SERVICES) {
    entries.push({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const article of articles) {
    entries.push({
      url: `${SITE_URL}/blog/${article.slug}`,
      lastModified: new Date(`${article.date}T00:00:00`),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
