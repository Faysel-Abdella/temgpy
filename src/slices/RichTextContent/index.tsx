import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { components } from "..";
import { getHeadingId } from "@/lib/utils";

export type RichTextContentProps =
  SliceComponentProps<Content.RichTextContentSlice>;

interface RichTextStandardProps {
  children: React.ReactNode;

  text?: string;
}

interface RichTextLinkNode {
  data: {
    url?: string;
    target?: string;
  };
}

interface RichTextLinkProps extends RichTextStandardProps {
  node: RichTextLinkNode;
}

export const BlogContentComponents = {
  heading1: ({ children, text }: RichTextStandardProps) => (
    <h1
      id={getHeadingId(text)}
      className="font-gilroy font-extrabold text-4xl md:text-5xl text-gray-900 mb-6 mt-12"
    >
      {children}
    </h1>
  ),
  heading2: ({ children, text }: RichTextStandardProps) => (
    <h2
      id={getHeadingId(text)}
      className="font-gilroy font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 mt-10"
    >
      {children}
    </h2>
  ),
  heading3: ({ children, text }: RichTextStandardProps) => (
    <h3
      id={getHeadingId(text)}
      className="font-inter font-semibold text-xl md:text-2xl text-gray-900 mb-3 mt-8"
    >
      {children}
    </h3>
  ),
  heading4: ({ children, text }: RichTextStandardProps) => (
    <h4
      id={getHeadingId(text)}
      className="font-inter font-semibold text-lg md:text-xl text-gray-900 mb-3 mt-6"
    >
      {children}
    </h4>
  ),
  paragraph: ({ children }: RichTextStandardProps) => (
    <p className="font-inter text-md md:text-lg leading-relaxed font-normal text-description mb-4">
      {children}
    </p>
  ),

  strong: ({ children }: RichTextStandardProps) => (
    <span className="text-black font-semibold">{children}</span>
  ),

  list: ({ children }: RichTextStandardProps) => (
    <ul className="list-disc pl-8 font-normal text-description flex flex-col gap-2.5 md:gap-3 my-5">
      {children}
    </ul>
  ),
  listItem: ({ children }: RichTextStandardProps) => (
    <li className="font-inter text-md md:text-lg leading-relaxed font-normal text-description">
      {children}
    </li>
  ),

  hyperlink: ({ children, node }: RichTextLinkProps) => {
    if (node.data.url) {
      return (
        <a
          href={node.data.url}
          className="text-blue-600 hover:text-blue-800 underline transition-colors duration-150"
          target={node.data.target}
        >
          {children}
        </a>
      );
    }
    return <span>{children}</span>;
  },

  table: ({ children }: RichTextStandardProps) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border-2 border-gray-500 rounded-lg">
        {children}
      </table>
    </div>
  ),
  tableHead: ({ children }: RichTextStandardProps) => (
    <thead className="overflow-hidden rounded-t-2xl">
      <tr className="bg-gray-400 text-xs md:text-md lg:text-lg">{children}</tr>
    </thead>
  ),
  tableRow: ({ children }: RichTextStandardProps) => (
    <tr className="bg-muted">{children}</tr>
  ),
  tableHeader: ({ children }: RichTextStandardProps) => (
    <th className="border-2 border-gray-600 px-2 md:px-3 py-2 text-left font-semibold text-black">
      {children}
    </th>
  ),
  tableCell: ({ children }: RichTextStandardProps) => (
    <td className="border-2 border-gray-600 px-2 md:px-3 py-2 text-gray-900">
      {children}
    </td>
  ),
};

const RichTextContent = ({ slice }: RichTextContentProps) => {
  const richTextData = slice.primary.content;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {richTextData && (
        <PrismicRichText
          field={richTextData}
          components={BlogContentComponents}
        />
      )}
      {/* <div className=" prose-zinc  prose sm:prose-sm lg:prose-lg ">
      </div> */}
    </section>
  );
};

export default RichTextContent;
