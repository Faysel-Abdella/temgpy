"use client";

import { Loader } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState(defaultValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formValues;

    if (name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (subject.trim().length < 3) {
      toast.error("Subject must be at least 3 characters long.");
      return false;
    }

    if (message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long.");
      return false;
    }

    return true;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormValues(defaultValues);
      } else {
        const data = await res.json();
        toast.error(data.message || "Something went wrong.");
      }
    } catch {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="lg:bg-background relative mx-auto bg-transparent lg:max-w-xl rounded-3xl p-6 lg:border"
    >
      <div className="flex flex-col gap-8">
        <div className="flex w-full gap-6 max-sm:flex-col">
          <div className="w-full">
            <Label className="mb-2">
              Your Name <span className="text-primary">*</span>
            </Label>
            <Input
              className="shadow-none"
              name="name"
              placeholder="Eg, Lost"
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <Label className="mb-2">
            Email <span className="text-primary">*</span>
          </Label>
          <Input
            className="shadow-none"
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label className="mb-2">
            Subject <span className="text-primary">*</span>
          </Label>
          <Input
            className="shadow-none"
            name="subject"
            placeholder="Write your subject here..."
            value={formValues.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label className="mb-2">
            Message <span className="text-primary">*</span>
          </Label>
          <Textarea
            name="message"
            placeholder="Write your questions in detail..."
            value={formValues.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <Button
        className="mt-14 w-full py-6 rounded-xl"
        type="submit"
        disabled={isLoading}
        size="lg"
      >
        {isLoading ? <Loader className="animate-spin" /> : "Send"}
      </Button>
    </form>
  );
};

export default ContactUsForm;
