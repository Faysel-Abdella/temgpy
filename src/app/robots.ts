import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about-us", "/blogs"],
      disallow: "/private/",
    },
    sitemap: "https://www.venastechnology.com/sitemap.xml",
  };
}
