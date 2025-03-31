"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface VideoBannerProps {
  videoUrl: string;
  bannerUrl: string;
  className?: string;
}

export default function VideoBanner({
  videoUrl,
  bannerUrl,
  className,
}: VideoBannerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Function to handle closing the dialog
  const handleClose = () => {
    setIsOpen(false);
  };

  // Effect to ensure the close button works
  useEffect(() => {
    const closeButton = closeButtonRef.current;
    if (closeButton) {
      closeButton.addEventListener("click", handleClose);
      return () => {
        closeButton.removeEventListener("click", handleClose);
      };
    }
  }, []);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className={cn(
            "flex group relative flex-col px-4 lg:px-0 w-full h-full lg:w-1/2 gap-5 rounded-2xl cursor-pointer",
            className
          )}>
          {/* Image with overlay */}
          <div className="relative w-full h-full">
            <Image
              data-aos="zoom-in"
              data-aos-duration="1000"
              src={bannerUrl}
              width={1000}
              height={1000}
              alt="About Us Video"
              className="w-full rounded-2xl h-full object-cover"
            />
            {/* Overlay that appears on hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>

          {/* Button on top of image */}
          <div className="absolute border bg-black/20 p-0 flex items-center justify-center rounded-full backdrop-blur-sm size-16 md:size-28 lg:size-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110">
            <Icons.VideoPlay className="size-8 md:size-12 lg:size-12 text-white" />
            {/* <svg
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg> */}
          </div>
        </div>
      </DialogTrigger>

      {/* Dialog content with video */}
      <DialogContent
        className="p-0 border-none sm:max-w-[1212px] w-[calc(100vw-2rem)] max-h-[80vh] dialog-content-no-border"
        style={{
          border: "none",
          borderBottom: "none",
          boxShadow: "none",
        }}>
        <DialogTitle className="sr-only">About Us Video</DialogTitle>

        {/* Close button positioned in a way that it's fully visible */}
        <button
          ref={closeButtonRef}
          className="absolute bottom-full -top-6 md:bottom-full md:size-10 -right-2 lg:left-full z-50 p-1 md:p-3 bg-black text-white rounded-full hover:bg-black/80 focus:outline-none"
          onClick={handleClose}
          type="button">
          <X className="size-4 md:size-7 md:pb-3 md:pr-2" />
        </button>

        <div className="relative w-full h-full">
          {/* Video container */}
          <div className="relative w-full pt-[56.25%] bg-black">
            {isOpen && (
              <iframe
                className="absolute rounded-2xl  top-0 left-0 w-full h-full"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="2"
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
