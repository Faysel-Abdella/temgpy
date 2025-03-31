import React from "react";
import BlogSocials from "./blogs-socials";
// import BlogSocials from "./blog-socials";

export default function ShapeFuture() {
  return (
    <section className="flex items-center justify-center relative w-full h-fit bg-background">
      <div className="flex flex-col items-center justify-center w-full max-w-[calc(100%-1.3rem)] mx-auto py-20 md:py-24 lg:py-28 bg-muted  min-h-full rounded-t-3xl gap-6 md:gap-8 lg:gap-11">
        <p className="lg:max-w-[783px] font-gilroy text-center text-3xl md:text-4xl lg:text-5xl font-extrabold px-2.5">
          Let&apos;s Shape the Future Together with tailored
        </p>
        <BlogSocials />
      </div>
    </section>
  );
}
