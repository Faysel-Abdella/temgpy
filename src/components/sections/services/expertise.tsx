import SectionShow from "@/components/section-show";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const expertiseContent = [
  {
    id: 1,
    image: "/services/delivery-system.webp",
    title: "Delivery System Platforms",
    description:
      "Deliver convenience easily. We design smooth, reliable apps with fast orders, real-time tracking, and secure payment systems.",
  },
  {
    id: 2,
    image: "/services/booking-system.webp",
    title: "Booking Platforms",
    description:
      "Manage hotel, event, and transportation bookings with seamless customer experience.",
  },
  {
    id: 3,
    image: "/services/restaurant-order.webp",
    title: "Restaurant Ordering System",
    description:
      "Online ordering, table reservations, kitchen management, and delivery coordination—all in one platform.",
  },
  {
    id: 4,
    image: "/services/lms.webp",
    title: "Learning Management (LMS)",
    description:
      "Track courses, students, progress, and assessments with user-friendly learning platforms.",
  },
  {
    id: 5,
    image: "/services/finance-and-billing.webp",
    title: "Finance & Billing Solutions",
    description:
      "Simplify invoicing, subscription management, and payment tracking with secure, scalable systems.",
  },
  {
    id: 6,
    image: "/services/ecom.webp",
    title: "E-Commerce Platforms",
    description:
      "Multi-vendor marketplaces with inventory, payment, and order management features designed for growth.",
  },
];

const SpecializedExpertise = () => {
  return (
    <section className=" px-2.5 ">
      <div className=" py-20  bg-muted rounded-4xl">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto  max-w-3xl text-center">
            <SectionShow title="Specialized Expertise" className="bg-white" />
            <h2
              data-aos="fade-up"
              data-aos-duration="600"
              className="mt-8 text-3xl font-extrabold font-gilroy text-foreground md:text-4xl lg:text-5xl"
            >
              Specializing in Industry - Proven Digital Solutions
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="mt-6 text-base text-center text-description md:text-lg"
            >
              We bring deep experience in building platforms across key
              industries. Our proven track record ensures solutions that are
              scalable, reliable, and designed to accelerate your growth.
            </p>
          </div>

          <div className="grid mt-16 md:grid-cols-2 lg:grid-cols-3 w-full gap-8  md:gap-10 lg:gap-12 ">
            {expertiseContent.map((item) => (
              <div
                key={item.id}
                className="flex  flex-col "
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <div className="relative  w-full h-60  ">
                  <Image
                    src={item.image}
                    alt={item.title + " image"}
                    fill
                    className="object-cover rounded-t-3xl rounded-b-2xl"
                  />
                </div>

                <div className="mt-5  flex items-center w-full justify-between   ">
                  <p className="text-xl font-semibold font-gilroy">
                    {item.title}
                  </p>
                  <ArrowUpRight className="size-5" />
                </div>
                <div className="mt-4 max-md:max-w-xs max-md:mx-auto  line-clamp-2 text-description text-base font-medium font-inter leading-normal">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedExpertise;
