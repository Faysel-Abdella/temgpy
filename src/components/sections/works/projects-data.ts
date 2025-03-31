export const getOneProject = (slug: string) => {
    return projects.find((project) => project.slug === slug);
  }

  export const getThreeProjects = () => {
    return projects.slice(0, 3);
  }

export const getManyProjects = () => {
    return projects;
  }


type TechStacks = {
    title: string;
    icon: string;
  };
  
  // Define project type
  export type Project = {
    id: string;
    title: string;
    slug: string;
    imageUrl: string;
    banners: string[];
    description: string;
    overview: string[];
    publishedDate: string;
    overviewImage: string;
    techStacks: TechStacks[];
    link: string;
    sortType: "newest" | "popular" | "oldest";
    type: "web-service" | "mobile-app" | "desktop-app" | "ux-ui-design";
  };
  
  export const projects: Project[] = [
    {
      id: "1",
      title: "Taza House",
      slug: "taza-house",
      description: "House buyer and seller platform",
      imageUrl: "/projects/taza1.png",
      link: "/",
      sortType: "popular",
      type: "web-service",
      publishedDate: " January 31",
      banners: ["/projects/taza2.png", "/projects/taza3.png", "/projects/taza4.png"],
      overview: ["TazaHouse is a house buyer and seller platform/website that offers comprehensive real estate services for buying, renting, and selling homes. Designed to make the property journey simple and efficient, TazaHouse provides a user-friendly experience that streamlines every step. Whether you’re looking to purchase your dream home, find the perfect rental, or sell your property, the platform offers a smooth and hassle-free process. Buyers can explore a diverse range of homes, while sellers can easily list and showcase their properties to attract potential buyers. With a focus on speed, security, and convenience, TazaHouse transforms real estate transactions into a seamless and enjoyable experience."],
      overviewImage: "/projects/taza5.png",
      techStacks: [
        {
          title: "React.js",
          icon: "Next",
        },
        {
          title: "TailwindCSS",
          icon: "tailwindcss",
        },
  
        {
          title: "Django",
          icon: "Django",
        },
       
        {
          title: "Figma",
          icon: "figma",
        },
      ],
    },
    {
      id: "2",
      title: "BillionViews.ai",
      slug: "billion-views-ai",
      description: "AI-powered platform",
      imageUrl: "/projects/bil1.png",
      link: "/",
      sortType: "popular",
      type: "web-service",
      publishedDate: " January 31",
      banners: ["/projects/bil2.png", "/projects/bil3.png", "/projects/bil4.png"],
      overview: ["BillionViews.ai is an advanced AI-powered platform designed to revolutionize content creation and audience engagement. It offers innovative tools that help businesses and creators generate high-quality, impactful content that resonates with their target audience. With a focus on enhancing reach and maximizing visibility.", "BillionViews.ai uses cutting-edge artificial intelligence to analyze trends, optimize content, and drive meaningful interactions. Whether it’s crafting compelling stories, boosting brand presence, or delivering data-driven insights, the platform empowers users to unlock new levels of creativity and audience connection."],
      overviewImage: "/projects/bil5.png",
      techStacks: [
        {
          title: "React.js",
          icon: "Next",
        },
        {
          title: "TailwindCSS",
          icon: "tailwindcss",
        },
  
        {
          title: "Django",
          icon: "Django",
        },
       
        {
          title: "Figma",
          icon: "figma",
        },
      ],
    },
    {
      id: "3",
      title: "StudyNest App",
      slug: "study-nest-app",
      description: "A learning and study App",
      imageUrl: "/projects/nest1.png",
      link: "/",
      sortType: "popular",
      type: "mobile-app",
      publishedDate: " January 31",
      banners: ["/projects/nest2.png", "/projects/nest3.png", "/projects/nest4.png"],
      overview:["StudyNest is a mobile app designed to enhance the learning experience by providing students with easy access to educational resources and collaborative study tools. The app offers a user-friendly platform where students can find study materials, participate in group discussions, and organize their academic schedules. With features like personalized study plans, resource sharing, and real-time collaboration, StudyNest aims to simplify learning and improve productivity. Our team focused on creating an intuitive interface, ensuring seamless navigation, and delivering a responsive design to support students in achieving their academic goals efficiently."],
      overviewImage: "/projects/bil5.png",
      techStacks: [
        {
          title: "Flutter",
          icon: "Flutter",
        },
        {
          title: "Flutter Flow",
          icon: "FlutterFlow",
        },
        {
          title: "Firebase",
          icon: "firebase",
        },
        {
          title: "Figma",
          icon: "figma",
        },
      ],
    },
   
  
   
  ];