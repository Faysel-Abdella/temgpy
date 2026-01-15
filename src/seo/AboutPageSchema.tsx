import { AboutPage, WithContext } from "schema-dts";

const AboutSchema = () => {
  const aboutSchema: WithContext<AboutPage> = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://venas.tech/about-us/#aboutpage",
    name: "About Venas Technologies",
    url: "https://www.venastechnology.com/about-us",
    mainEntity: {
      "@id": "https://www.venastechnology.com/#organization",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(aboutSchema),
      }}
    />
  );
};

export default AboutSchema;
