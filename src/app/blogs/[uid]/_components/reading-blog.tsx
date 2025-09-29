import { components } from "@/slices";
import { SliceZone } from "@prismicio/client";
import { SliceZone as SliceZoneComponent } from "@prismicio/react";
import {
  BlogDocument,
  BlogDocumentDataSlicesSlice,
} from "../../../../../prismicio-types";
import TableOfContents from "./toc";

interface ReadingBlogProps {
  blog: BlogDocument;
  slices: SliceZone<BlogDocumentDataSlicesSlice>;
  tocSections: {
    id: string;
    title: string;
    type: string;
  }[];
}
export default function ReadingBlog({
  blog,
  slices,
  tocSections,
}: ReadingBlogProps) {
  const blogTags = blog.data.tags.map((tag) => (tag.tag_name as string).trim());
  return (
    <div className="relative mx-auto w-full px-4 max-w-[1080px] flex gap-14 ">
      <div className="flex flex-col  max-w-[777px] mx-auto gap-6 md:gap-8">
        <SliceZoneComponent slices={slices} components={components} />
        <div className="flex md:-ml-4 mt-4 flex-wrap gap-2">
          {blogTags.map((item) => (
            <div
              key={item}
              className="px-5 py-2 bg-muted rounded-full inline-flex justify-start items-center gap-2"
            >
              <div className="text-center justify-start  text-base font-medium font-inter capitalize leading-normal">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <TableOfContents tocSections={tocSections} />
    </div>
  );
}
