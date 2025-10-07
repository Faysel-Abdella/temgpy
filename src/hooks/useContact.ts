import { ContactFormData } from "@/lib/contact-us.schema";
import { useCallback, useState } from "react";

const useContact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const sendContactData = useCallback(async (contactData: ContactFormData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.message || "Something went wrong.");
      }
    } catch (err: unknown) {
      setError("An unexpected error occurred. Please try again.");
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { sendContactData, isLoading, error, success };
};

export default useContact;
