import { siteConfig } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/product", "/features", "/solutions", "/why-sovtels", "/demo", "/privacy-policy"];
  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/privacy-policy" ? ("monthly" as const) : ("weekly" as const),
    priority: path === "" ? 1 : path === "/privacy-policy" ? 0.3 : 0.7,
  }));
}
