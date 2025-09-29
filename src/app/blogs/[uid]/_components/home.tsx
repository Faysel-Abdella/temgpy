import SectionShow, { SectionShowWithOutIcon } from "@/components/section-show";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { BlogDocument } from "../../../../../prismicio-types";

interface BlogHomeProps {
  blog: BlogDocument;
}
export default function BlogHome({ blog }: BlogHomeProps) {
  return (
    <div>
      <div className="relative bg-background2 w-full">
        <div className="pt-40  w-full mx-auto px-4 max-w-[1120px] md:pt-48  flex flex-col gap-4 bg-background2">
          <div className="flex  gap-2.5  md:gap-3">
            <SectionShow
              title="Blogs"
              className="bg-muted/15 border-2 border-[#565656] outline-0 text-white pr-4"
            />
            {blog.data.tags.length > 0 && blog.data.tags[0] && (
              <SectionShowWithOutIcon
                title={blog.data.tags[0].tag_name || ""}
                className="bg-muted/15 border-2 border-[#565656] outline-0 text-white px-4"
              />
            )}
          </div>

          <h1 className="mt-4 text-background2-foreground md:mt-6 font-gilroy font-extrabold text-4xl md:text-5xl lg:text-6xl">
            {blog.data.title}
          </h1>
          <div className="text-md md:text-lg text-background2-description font-inter">
            <PrismicRichText field={blog.data.short_description} />
          </div>
          <PrismicNextImage
            field={blog.data.featured_image}
            width={1115}
            height={1080}
            className="w-full z-20 h-full max-w-[1115px] max-h-[590px]"
          />
        </div>
        <div className="absolute bottom-0 w-full z-0 h-14 md:h-20 lg:h-28 bg-background" />
      </div>
    </div>
  );
}
