export type Blog = {
    title: string;
    description: string;
    slug: string;
    image: string;
    techIndustry: string;
    publishedAt: string;
    readingTime: string;
    type: "mobile-app" | "web-development" | "machine-learning";
}

export const getOneBlog = (slug: string): Blog | undefined => {
    return blogs.find((blog) => blog.slug === slug);
}

export const blogs: Blog[] = [
    {
        title: "Mobile vs. Web Apps: Which One Does Your Business Need?",
        slug: "mobile-vs-web-apps-which-one-does-your-business-need",
        description:
        "Learn how to build a successful SaaS product by following these 10 steps.",
        image: "/blogs/blog1.png",
        type: "mobile-app",
        techIndustry: "Software Engineering",
        publishedAt: "May 26, 2025",
        readingTime: "4 min read",
    },
    {
        title: "Why We Choose This Career : Understanding Software Development",
        slug: "why-we-choose-this-career-understanding-software-development",
        description:
        "Key Points to quickly get up to speed, whether you're a seasoned engineer or a newcomer.",
        image: "/blogs/sw-carer.png",
        type: "web-development",
        techIndustry: "Software Engineering",
        publishedAt: "Feb 17, 2025",
        readingTime: "4 min read",
    },
    {
        title: "The Impact of UI/UX on Digital Success",
        slug: "the-impact-of-ui-ux-on-digital-success",
        description:
        "Discover how exceptional UI/UX design drives user engagement, and customer satisfaction.",
        image: "/blogs/ui-ux.png",
        type: "web-development",
        techIndustry: "User Interface",
        publishedAt: "Feb 05, 2024",
        readingTime: "4 min read",
    },
    {
        title: "The Role of AI in Modern Software Development",
        slug: "the-role-of-ai-in-modern-software-development",
        description:
        "AI is transforming software development by enhancing productivity, and improving code quality.",
        image: "/blogs/ai.png",
        type: "web-development",
        techIndustry: "Artificial intelligence",
        publishedAt: "Mar 17, 2025",
        readingTime: "4 min read",
    },
    {
        title: "The Role of IT Consultation in Business Growth",
        slug: "the-role-of-it-consultation-in-business-growth",
        description:
        "IT consultation is a crucial investment for businesses looking to optimize their technology, drive growth.",
        image: "/blogs/it-consult.png",
        type: "web-development",
        techIndustry: "IT Consultation",
        publishedAt: "Jan 23, 2025",
        readingTime: "4 min read",
    },
    
]