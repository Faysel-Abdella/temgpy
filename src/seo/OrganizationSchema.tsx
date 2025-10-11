import { Organization, WithContext } from "schema-dts";

const OrganizationSchema = () => {
  const organization: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": " https://www.venastechnology.com/#organization",
    name: "Venas Technologies",
    legalName: "Venas Technologies PLC",
    url: "https://www.venastechnology.com/",
    email: "info@venastechnology.com",
    logo: "logo url",
    description:
      "Venas Technologies is a leading software outsourcing company helping global brands turn their ideas into intelligent digital solutions.",
    sameAs: [
      "https://www.linkedin.com/company/venastechnologies",
      "https://www.facebook.com/ Venas_Technology ",
      "https://www.instagram.com/ Venas_Technology ",
      "https://twitter.com/Venas_Technology ",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        "@id": " https://www.venastechnology.com/contact-us ",
        telephone: "+1-202-555-0147",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["en"],
        email: " info@venas.tech",
      },
      {
        "@type": "ContactPoint",
        "@id": " https://www.venastechnology.com/contact-us",
        telephone: " +251947344248 ",
        contactType: "customer service",
        areaServed: "ET",
        availableLanguage: ["en", "am"],
        email: " info@venas.tech",
      },
      {
        "@type": "ContactPoint",
        "@id": " https://www.venastechnology.com/contact-us",
        telephone: "+44-20-7946-0958",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: ["en"],
        email: " info@venas.tech",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
};

export default OrganizationSchema;
