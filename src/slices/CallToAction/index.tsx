import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client"; // Needed for isFilled and asLink
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  const { cta_title, text, cta_button_link, button_text } = slice.primary;

  if (!prismic.isFilled.keyText(cta_title)) {
    return null;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 md:py-24 bg-gray-50 border-y border-gray-200"
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          {cta_title}
        </h2>

        {prismic.isFilled.keyText(text) && (
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            {text}
          </p>
        )}

        {prismic.isFilled.link(cta_button_link) &&
          prismic.isFilled.keyText(button_text) && (
            <Button asChild>
              <Link href={prismic.asLink(cta_button_link) || "#"}>
                {button_text}
              </Link>
            </Button>
          )}
      </div>
    </section>
  );
};

export default CallToAction;
