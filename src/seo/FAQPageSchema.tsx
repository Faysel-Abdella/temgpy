import { FAQPage, WithContext } from "schema-dts";

const FAQSchema = () => {
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Venas Technologies FAQ",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Venas Technologies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Venas Technologies is a trusted software company specializing in custom software development, AI solutions, cloud platforms, and tech talent services. We partner with businesses worldwide to design and implement digital solutions that drive growth, efficiency, and innovation.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Venas Technologies offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide a full range of IT and software services, including custom software development, AI solutions, cloud solutions, mobile & web app development, IT consulting, and staff augmentation & talent outsourcing.",
        },
      },
      {
        "@type": "Question",
        name: "Where does Venas Technologies provide services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While based in Ethiopia, Venas Technologies serves clients worldwide, delivering scalable digital transformation and enterprise software solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Why choose Venas Technologies for custom software development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Businesses choose Venas Technologies for our tailored software solutions, expertise in AI and cloud technologies, scalable systems, and long-term support focused on innovation and growth.",
        },
      },
      {
        "@type": "Question",
        name: "What industries does Venas Technologies serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve clients in finance, healthcare, logistics, media, e-commerce, education, and other industries seeking digital transformation.",
        },
      },
      {
        "@type": "Question",
        name: "Does Venas Technologies provide AI solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We deliver AI solutions including predictive analytics, chatbots, virtual assistants, and automation tools to improve business performance.",
        },
      },
      {
        "@type": "Question",
        name: "Is Venas Technologies only serving clients in Ethiopia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We support clients across Africa, the Middle East, Europe, and North America with innovative software development and IT consulting services.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Venas Technologies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach us via email at info@venas.tech or call +251 947 344 248 / +251 954 624 638.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to develop custom software with Venas Technologies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines depend on project complexity. Small projects may take a few weeks, while large enterprise systems can take several months. We follow agile development for faster delivery and transparency.",
        },
      },
      {
        "@type": "Question",
        name: "What custom software development services does Venas Technologies offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide end-to-end development for web and mobile apps, AI automation, cloud migration, and enterprise software — all built for scalability and innovation.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
};

export default FAQSchema;
