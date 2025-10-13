import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const FooterNewsletter = () => {
  return (
    <div className="w-full max-w-7xl mx-auto max-md:gap-12 flex max-md:flex-col items-center justify-between pb-14">
      <div className="w-full  md:w-1/2 md:pr-10">
        <p className=" max-md:text-center text-xl lg:text-3xl font-bold text-white">
          Stay in the know by subscribing to our newsletter below
        </p>
      </div>
      <form className="max-w-md md:w-1/2 flex items-center gap-4">
        <Input
          placeholder="Enter email here*"
          type="email"
          className="w-full rounded-l-[24px] border-border-secondary  rounded-r-sm bg-[#29314D] text-background2-description placeholder:text-background2-description"
        />
        <Button className="rounded-r-[24px] rounded-l-sm h-11 md:px-8">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default FooterNewsletter;
