import { asText, SliceZone, RichTextField } from "@prismicio/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Type Guard and Utilities ---

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

function isRichText(field: unknown): field is RichTextField {
  // 1. Check if it's an array
  if (!Array.isArray(field)) {
    return false;
  }
  if (field.length === 0 || typeof field[0] !== "object" || field[0] === null) {
    return false;
  }
  return (field[0] as { type?: unknown }).type !== undefined;
}

function calculateReadingTime(
  text: string | null | undefined,
  wordsPerMinute: number = 230
): number {
  if (!text) {
    return 0;
  }

  const wordCount = (text as string).trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function calculateReadingTimeFromSlices(slices: SliceZone): number {
  if (!slices || slices.length === 0) {
    return 0;
  }

  let totalWordCount = 0;

  slices.forEach((slice) => {
    // 1. Process PRIMARY fields
    for (const key in slice.primary) {
      const field: unknown = slice.primary[key];

      if (isRichText(field)) {
        const plainText = asText(field);
        totalWordCount += (plainText as string).trim().split(/\s+/).length;
      }
    }

    if (slice.items && Array.isArray(slice.items)) {
      slice.items.forEach((item) => {
        for (const key in item) {
          const field: unknown = item[key];

          if (isRichText(field)) {
            const plainText = asText(field);
            totalWordCount += (plainText as string).trim().split(/\s+/).length;
          }
        }
      });
    }
  });

  return Math.ceil(totalWordCount / 200);
}

export function formatBlogDate(dateInput: string | Date) {
  const date = new Date(dateInput);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return date.toLocaleDateString("en-US", options);
}
