"use client";

import { cn } from "@/lib/utils";
import { CopyCheck, CopyIcon } from "lucide-react";
import React, { useState } from "react";

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  interface HandleLinkCopyProps {
    textToCopy: string;
  }

  const handleLinkCopy = (
    textToCopy: HandleLinkCopyProps["textToCopy"]
  ): void => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Hide check icon after 2 seconds
      })
      .catch((err: unknown) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <button
      onClick={() => handleLinkCopy(text)}
      className={cn(
        "flex items-center gap-1.5 hover:cursor-pointer transition-colors group",
        isCopied ? "text-blue-500" : "text-white/70 "
      )}>
      {text}
      <div className="relative flex items-center">
        <CopyIcon
          className={cn(
            "w-4 h-4 transition-opacity",
            isCopied ? "opacity-0" : "opacity-0 group-hover:opacity-100"
          )}
        />
        <CopyCheck
          className={cn(
            "w-4 h-4 absolute transition-opacity",
            isCopied ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    </button>
  );
};

export default CopyButton;
