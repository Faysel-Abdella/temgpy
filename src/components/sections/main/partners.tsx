import React from "react";
import Image from "next/image";
import { Separator } from "../../ui/separator";
import { InfiniteMovingPartners } from "@/components/infinite-scrolling-partners";
// import { InfiniteMovingPartners } from "@/components/infinite-scrolling-partners";

export default function Partners() {
  return (
    <section className="flex flex-col gap-7 items-center mx-1.5 md:mx-2.5 bg-muted pt-18 justify-center w-screen h-fit pb-24 relative">
      <div className="w-full max-w-[320px] md:max-w-[477px] flex-col justify-start items-center gap-5 inline-flex relative">
        <p className="self-stretch text-center text-foreground text-2xl md:text-[32px] font-extrabold font-gilroy leading-[40px]">
          Entrusted by Our Long Term Clients World-Wide
        </p>
      </div>
      <InfiniteMovingPartners />
    </section>
  );
}
