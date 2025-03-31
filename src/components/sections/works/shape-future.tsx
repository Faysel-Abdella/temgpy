import React from "react";
import ProjectsSocials from "./projects-socials";
// import BlogSocials from "./blog-socials";

export default function ShapeFuture() {
  return (
    <section className="flex w-full mx-auto items-center justify-center bg-background2 z-20 px-4 lg:px-0 py-24">
      <div className=" flex flex-wrap justify-between w-full max-w-7xl items-center gap-5 md:gap-12">
        <p className="max-w-[721px] self-stretch text-background2-foreground relative text-3xl lg:leading-[57px] md:text-4xl lg:text-5xl font-extrabold font-gilroy ">
          Visit out Official Social Networks to Keep in touch with us!
        </p>
        <ProjectsSocials />
      </div>
    </section>
  );
}
