"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (email) {
      // Log the email value
      console.log("Subscribed email:", email);

      // Show success toast
      toast({
        title: "Subscription Successful",
        description:
          "Thank you for subscribing! You'll receive our latest tech updates.",
        variant: "success",
      });

      setEmail("");
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex w-full mx-auto items-center justify-center bg-background2 z-20 px-4 lg:px-0 py-20">
      <div className="flex flex-wrap justify-between w-full max-w-7xl items-center gap-5 md:gap-12">
        <p className="max-w-[487px] self-stretch text-background2-foreground relative text-2xl md:text-3xl font-bold font-gilroy">
          Subscribe to our blogs to keep informed with as about technology.
        </p>
        <div className="inline-flex justify-start items-center gap-2">
          <Input
            placeholder="Enter email here*"
            type="text"
            className="w-full md:w-[395px] text-white h-[50px] relative rounded-full  bg-secondary/15 placeholder:text-muted/70 text-base px-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className="px-8 py-6 bg-primary hover:cursor-pointer rounded-[100px] flex justify-center items-center gap-3"
            onClick={handleSubscribe}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
