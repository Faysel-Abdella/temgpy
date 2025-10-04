import { Button } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

interface HeroSectionShowProps {
  title: string;
  className?: string;
}

export default function HeroSectionShow({
  title,
  className = "",
}: HeroSectionShowProps) {
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="500"
      className={cn(
        "p-0.5 w-fit bg-white text-neutral-800  rounded-full  inline-flex justify-start items-center gap-1",
        className
      )}
    >
      <Button
        borderRadius="1000rem"
        containerClassName="w-fit h-fit"
        className="bg-white pl-1 pr-4 py-1 dark:bg-slate-900 w-full text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="p-1 rounded-3xl flex justify-start items-center gap-2.5 overflow-hidden">
          <div className="p-1.5 bg-primary/10 rounded-3xl flex justify-start items-center gap-2.5">
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>
        </div>
        <div className="justify-start  text-sm md:text-md font-inter leading-tight text-nowrap">
          {title}
        </div>
      </Button>
    </div>
  );
}
