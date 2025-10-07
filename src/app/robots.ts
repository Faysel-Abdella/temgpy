import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about-us", "/projects", "/blogs"],
      disallow: "/private/",
    },
    sitemap: "https://venastechnology.com/sitemap.xml",
  };
}
