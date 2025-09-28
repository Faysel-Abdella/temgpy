import { components } from "@/slices";
import { SliceZone } from "@prismicio/client";
import { SliceZone as SliceZoneComponent } from "@prismicio/react";
import { BlogDocumentDataSlicesSlice } from "../../../../../prismicio-types";
import TableOfContents from "./toc";

interface ReadingBlogProps {
  slices: SliceZone<BlogDocumentDataSlicesSlice>;
  tocSections: {
    id: string;
    title: string;
    type: string;
  }[];
}
export default function ReadingBlog({ slices, tocSections }: ReadingBlogProps) {
  return (
    <div className="relative mx-auto w-full px-4 max-w-[1080px] flex gap-14 ">
      <div className="flex flex-col  max-w-[777px] mx-auto gap-6 md:gap-8">
        <SliceZoneComponent slices={slices} components={components} />
      </div>

      <TableOfContents tocSections={tocSections} />
    </div>
  );
}
