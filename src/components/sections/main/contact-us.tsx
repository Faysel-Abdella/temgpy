"use client";

import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
//   import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Your Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(2, {
    message: "Your Message must be at least 7 characters.",
  }),
  subject: z.string().min(2, {
    message: "Your Subject must be at least 2 characters.",
  }),
});

export default function ContactUs() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section
      id="contact-us"
      className="w-screen flex items-center justify-center  mx-auto bg-background2 py-16 md:py-24 lg:py-32">
      <div className="flex flex-col lg:flex-row justify-center mx-auto lg:w-[1212px] gap-24 xl:gap-32">
        <div className="flex px-4 lg:px-0 flex-col w-full lg:w-1/2 gap-4 md:gap-8">
          <SectionShow
            title="Contact Us"
            className="bg-[#F4F6FF]/10 text-white font-semibold outline-[#565656]"
          />
          <p className="lg:w-[513px] justify-start mt-3 text-background2-foreground text-3xl lg:text-5xl font-extrabold font-gilroy  leading-[47px] md:leading-[57px]">
            let’s Make Something Incredible Together
          </p>
          {/* <p className=" justify-start text-background2-foreground text-5xl font-extrabold font-gilroy leading-[57.60px]">
            
          </p> */}
          <div className="flex flex-col w-full h-full relative mt-8 lg:mt-16  gap-5">
            <Image
              src={"/images/3dCard.svg"}
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-offset="400"
              width={551}
              height={282}
              alt="about us image"
              className="z-10"
            />
            <Image
              src={"/images/3dCard.png"}
              width={551}
              height={282}
              data-aos="fade-down"
              data-aos-duration="300"
              alt="about us image"
              className="absolute mt-14 z-0"
            />
          </div>
        </div>
        <div className="flex flex-col items-center px-4 lg:px-0 w-full h-full lg:w-1/2 gap-7 rounded-2xl">
          <p className="justify-start text-white text-lg font-normal font-gilroy leading-snug">
            Fields with * are required
          </p>
          <div className="flex flex-col w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 md:space-y-7 font-gilroy text-white text-xl">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="h-12 lg:h-16 px-8 placeholder:text-background2-description/80  placeholder:text-lg rounded-[32px] border-gray-300/25 lg:rounded-[31px] bg-[#334155]"
                          placeholder="Full Name *"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="ml-4 lg:text-sm text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="h-12 lg:h-16 px-8 placeholder:text-background2-description/80  placeholder:text-lg rounded-[32px] border-gray-300/25 lg:rounded-[31px] bg-[#334155]"
                          placeholder="Email *"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="ml-4 lg:text-sm text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="h-12 lg:h-16 px-8 placeholder:text-background2-description/80  placeholder:text-lg rounded-[32px] border-gray-300/25 lg:rounded-[31px] bg-[#334155]"
                          placeholder="Inquire Subject *"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="ml-4 lg:text-sm text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          className="h-40 lg:h-48 rounded-[32px] font-gilroy  placeholder:text-background2-description/80 placeholder:text-md placeholder:text-md p-8 lg:rounded-[32px] border-gray-300/25 bg-[#334155]"
                          placeholder="Your Message Here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="ml-4 lg:text-sm text-red-500" />
                    </FormItem>
                  )}
                />
                <div className="flex mx-6 lg:mx-20 pt-6">
                  <Button
                    type="submit"
                    className="bg-primary hover:cursor-pointer hover:bg-primary text-md font-semibold  flex items-center gap-4 rounded-full h-12 lg:h-14 w-full py-4 lg:py-5 px-6 lg:px-8">
                    Send A Message!
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
