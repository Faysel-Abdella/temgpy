import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { RichTextContentComponents } from "../RichTextContent";

/**
 * Props for `ServiceAboutSolution`.
 */
export type ServiceAboutSolutionProps =
  SliceComponentProps<Content.ServiceAboutSolutionSlice>;

/**
 * Component for "ServiceAboutSolution" Slices.
 */
const ServiceAboutSolution: FC<ServiceAboutSolutionProps> = ({ slice }) => {
  const { about_solution, about_solution_image } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex w-full  flex-col md:flex-row gap-7 md:gap-12 lg:gap-16 items-center justify-center">
        <div className="flex  flex-col gap-3 md:gap-5 w-full md:w-1/2 mx-auto">
          <h1
            data-aos="fade-right"
            data-aos-duration="500"
            className="text-2xl lg:text-3xl font-extrabold font-gilroy"
          >
            About the Solution
          </h1>
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="text-description font-inter text-md lg:text-lg font-normal"
          >
            <PrismicRichText
              field={about_solution}
              components={RichTextContentComponents}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <PrismicNextImage
            field={about_solution_image}
            data-aos="fade-left"
            data-aos-duration="1200"
            className="w-full max-w-[524px] aspect-square rounded-2xl object-cover max-h-96"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceAboutSolution;
