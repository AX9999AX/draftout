import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://draftout.ai/sitemap.xml",
    host: "https://draftout.ai",
  };
}
