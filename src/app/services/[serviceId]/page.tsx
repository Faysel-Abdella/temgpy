import ServiceHeroDetail from "@/components/sections/services/service-detail/service-detail-hero";
import React from "react";

const ServiceDetailPage = () => {
  const images = [
    "/services/ecom.webp",
    "/services/crm.webp",
    "/services/health.webp",
  ];
  return (
    <div>
      <ServiceHeroDetail
        images={images}
        title="Restaurant Ordering & Management Systems"
      />
    </div>
  );
};

export default ServiceDetailPage;
