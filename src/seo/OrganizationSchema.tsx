import { Organization, WithContext } from "schema-dts";

const OrganizationSchema = () => {
  const organization: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": " https://www.venastechnology.com/#organization",
    name: "Venas Technologies",
    legalName: "Venas Technologies PLC",
    areaServed: [
      "Global",
      "Worldwide",
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "Europe",
      "Africa",
      "Ethiopia",
      "Middle East",
      "United Arab Emirates",
    ],
    url: "https://www.venastechnology.com/",
    email: "info@venastechnology.com",
    logo: "logo url",
    description:
      "Venas Technologies is a leading software outsourcing company helping global brands turn their ideas into intelligent digital solutions.",
    sameAs: [
      "https://www.linkedin.com/company/venastechnologies",
      "https://www.facebook.com/Venas_Technology ",
      "https://www.instagram.com/Venas_Technology ",
      "https://twitter.com/Venas_Technology ",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        "@id": " https://www.venastechnology.com/contact-us",
        telephone: "+1-202-555-0147",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["en"],
        email: "info@venas.tech",
      },
      {
        "@type": "ContactPoint",
        "@id": " https://www.venastechnology.com/contact-us",
        telephone: " +251947344248 ",
        contactType: "customer service",
        areaServed: "ET",
        availableLanguage: ["en", "am"],
        email: "info@venas.tech",
      },
      {
        "@type": "ContactPoint",
        "@id": " https://www.venastechnology.com/contact-us",
        telephone: "+44-20-7946-0958",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: ["en"],
        email: "info@venas.tech",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          description:
            "We design and build scalable custom software tailored to your business goals — from web and mobile apps to enterprise-grade platforms.",
          url: "https://www.venastechnology.com/services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dedicated Team & IT Outsourcing",
          description:
            "Access top-tier developers, designers, and project managers through our flexible and cost-effective outsourcing and team augmentation services.",
          url: "https://www.venastechnology.com/services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Automation Solutions",
          description:
            "Integrate intelligent automation into your workflows with AI-powered tools, chatbots, and process optimization systems.",
          url: "https://www.venastechnology.com/services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Consulting & DevOps",
          description:
            "Migrate, optimize, and scale your systems on the cloud with our cloud-native development, infrastructure, and DevOps expertise.",
          url: "https://www.venastechnology.com/services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Product Development",
          description:
            "From concept to launch, we help startups and enterprises build high-impact digital products that drive growth and innovation.",
          url: "https://www.venastechnology.com/services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design & Prototyping",
          description:
            "We craft beautiful, intuitive, and user-centered interfaces that elevate your brand and improve customer experience.",
          url: "https://www.venastechnology.com/services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT Strategy & Consultation",
          description:
            "Get expert guidance to modernize your IT infrastructure, enhance performance, and align technology with your business objectives.",
          url: "https://www.venastechnology.com/services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Software Solutions",
          description:
            "Empowering organizations with robust ERP, CRM, and internal management systems that streamline operations and improve efficiency.",
          url: "https://www.venastechnology.com/services",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization),
      }}
    />
  );
};

export default OrganizationSchema;
