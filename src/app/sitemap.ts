import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://growztech.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://growztech.com/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://growztech.com/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://growztech.com/blogs",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.growztech.com/projects/taza-house",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.growztech.com/projects/billion-views-ai",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.growztech.com/projects/study-nest-app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.growztech.com/blogs/mobile-vs-web-apps-which-one-does-your-business-need",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: "https://www.growztech.com/blogs/why-we-choose-this-career-understanding-software-development",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: "https://www.growztech.com/blogs/the-impact-of-ui-ux-on-digital-success",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: "https://www.growztech.com/blogs/the-role-of-ai-in-modern-software-development",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: "https://www.growztech.com/blogs/the-role-of-it-consultation-in-business-growth",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.64,
    },
  ];
}
