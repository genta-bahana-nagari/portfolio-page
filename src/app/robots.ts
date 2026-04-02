import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about"],
        disallow: ["/guestbook"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
