import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type CodeBlockProps = SliceComponentProps<Content.CodeBlockSlice>;

const CodeBlock: FC<CodeBlockProps> = ({ slice }) => {
  const codeContent = slice.primary.code_snipper;

  if (!codeContent) return null;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-10"
    >
      <pre
        className="
            bg-gray-800 text-gray-50
            p-4 md:p-6
            rounded-lg 
            overflow-x-auto 
            shadow-xl
            whitespace-pre-wrap // Ensures long lines wrap instead of just scrolling
            text-sm
          "
      >
        <code className="font-mono text-sm leading-relaxed">
          <PrismicRichText field={codeContent} />{" "}
        </code>
      </pre>
    </section>
  );
};

export default CodeBlock;
