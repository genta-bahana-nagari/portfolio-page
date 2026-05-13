import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/project", "/experience"],
        disallow: ["/contact", "/guestbook"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
