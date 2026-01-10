import { services } from "@/data/services";
import { createClient } from "@/prismicio";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.venastechnology.com";

  const blogs = await client.getAllByType("blog");

  const serviceUrls = services.map((service, index) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    priority: index > 3 ? 0.64 : 0.8,
  }));

  const postUrls = blogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.uid}`,
    lastModified: new Date(post.last_publication_date),
    priority: 0.64,
  }));
  return [
    {
      url: "https://venastechnology.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://venastechnology.com/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://venastechnology.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://venastechnology.com/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://venastechnology.com/blogs",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://venastechnology.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...postUrls,
    ...serviceUrls,
  ];
}
