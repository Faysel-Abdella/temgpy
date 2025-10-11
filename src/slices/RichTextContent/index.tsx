import React from "react";
import { getHeadingId } from "@/lib/utils";
import { Content, ImageFieldImage, RTImageNode } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

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
interface RichTextImage extends RichTextStandardProps {
  node: ImageFieldImage;
}

export const RichTextContentComponents = {
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
  heading5: ({ children, text }: RichTextStandardProps) => (
    <h5
      id={getHeadingId(text)}
      className="font-inter font-medium text-base md:text-lg text-gray-900 mb-2 mt-5"
    >
      {children}
    </h5>
  ),
  heading6: ({ children, text }: RichTextStandardProps) => (
    <h6
      id={getHeadingId(text)}
      className="font-inter font-medium text-sm md:text-base text-gray-800 mb-2 mt-4 uppercase tracking-wide"
    >
      {children}
    </h6>
  ),

  paragraph: ({ children }: RichTextStandardProps) => (
    <p className="font-inter text-md md:text-lg leading-relaxed font-normal text-description mb-4">
      {children}
    </p>
  ),

  preformatted: ({ text }: RichTextStandardProps) => (
    <pre className="bg-gray-100 text-gray-800 text-sm md:text-base font-mono rounded-lg p-4 overflow-x-auto my-5 border border-gray-200">
      {text}
    </pre>
  ),

  strong: ({ children }: RichTextStandardProps) => (
    <strong className="text-black font-semibold">{children}</strong>
  ),

  em: ({ children }: RichTextStandardProps) => (
    <em className="italic text-gray-800">{children}</em>
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
  oList: ({ children }: RichTextStandardProps) => (
    <ol className="list-decimal pl-8 font-normal text-description flex flex-col gap-2.5 md:gap-3 my-5">
      {children}
    </ol>
  ),
  oListItem: ({ children }: RichTextStandardProps) => (
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

  label: ({
    children,
    node,
  }: {
    children: React.ReactNode;
    node: { data: { label: string } };
  }) => (
    <span
      className={`${
        node.data.label === "highlight"
          ? "bg-yellow-100 text-gray-900 px-1 rounded"
          : "text-gray-900"
      }`}
    >
      {children}
    </span>
  ),

  span: ({ text }: RichTextStandardProps) => <>{text}</>,

  // Table Elements
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
  image: ({ node }: RichTextImage) => (
    <PrismicNextImage
      field={node}
      className="rounded-2xl aspect-video object-cover"
    />
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
          components={RichTextContentComponents}
        />
      )}
    </section>
  );
};

export default RichTextContent;
