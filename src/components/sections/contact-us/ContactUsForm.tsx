"use client";

import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const defaultValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const onSubmit = async (values: typeof defaultValues) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast.success("Message sent successfully");
      } else {
        const data = await res.json();
        toast.error(data.message || "Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:bg-background relative mx-auto bg-transparent lg:max-w-xl rounded-3xl p-6 lg:border"
      >
        <div className="flex flex-col gap-8">
          <div className="flex w-full gap-6 max-sm:flex-col">
            {/* <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    First Name <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="shadow-none"
                      placeholder="Eg, Peter"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Your Name <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="shadow-none"
                      placeholder="Eg, Lost"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="shadow-none"
                    type="email"
                    placeholder="example@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject as simple input */}
          <FormField
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Subject <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="shadow-none"
                    placeholder="Write your subject here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Message <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your questions in detail..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          className="mt-14 w-full py-6 rounded-xl"
          type="submit"
          disabled={isLoading}
          size={"lg"}
        >
          {isLoading ? <Loader className="animate-spin" /> : "Send"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactUsForm;
