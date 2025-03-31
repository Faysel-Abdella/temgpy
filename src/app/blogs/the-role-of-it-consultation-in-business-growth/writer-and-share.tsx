"use client";

import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { Share2 } from "lucide-react";
import React from "react";

export default function WriterAndShare({ slug }: { slug: string }) {
  // Get the base URL from environment variable
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://growztech.com";
  const postUrl = `${baseUrl}/blogs/${slug}`;
  const encodedUrl = encodeURIComponent(postUrl);
  const title = "Check out this blog post by growztech";
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    instagram: "https://www.instagram.com/",
  };

  return (
    <div className="flex mx-auto w-full px-4 max-w-[1080px] h-fit justify-between items-center">
      <div className="flex flex-col gap-1.5">
        <p className="text-lg md:text-xl font-bold font-gilroy">
          By Faysel Abdella
        </p>
        <div className="flex items-center gap-2 opacity-60">
          <span className="text-xs md:text-sm font-inter font-medium tracking-wide">
            Jan 23, 2025
          </span>
          <span className="size-[4px] mb-1 md:mb-0 md:size-[5px] bg-black rounded-full items-center justify-center" />
          <span className="text-xs md:text-sm font-inter font-medium tracking-wide">
            4 min Read
          </span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Share2
          fill=""
          className="size-5"
        />
        <Separator
          className="min-h-6"
          orientation="vertical"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 items-center w-full flex-wrap">
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook">
            <Icons.Facebook className="size-5" />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn">
            <Icons.LinkedIn className="size-5" />
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter">
            <Icons.XTwitter
              fill="black"
              className="size-5 fill-black"
            />
          </a>
          <a
            href={shareLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter">
            <Icons.Instagram className="size-5" />
          </a>
          {/* Instagram doesn’t support direct URL sharing; you could use a fallback or custom logic */}
        </div>
      </div>
    </div>
  );
}
