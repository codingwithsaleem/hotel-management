"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const messageSchema = z.object({
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message must not exceed 1000 characters"),
});

type MessageFormData = z.infer<typeof messageSchema>;

const faqData = [
  {
    id: "item-1",
    question: "Lorem Ipsum is simply dummy text?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "item-2",
    question: "Lorem Ipsum is simply dummy text of the printing?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "item-3",
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
  },
  {
    id: "item-4",
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions sent to your email.",
  },
  {
    id: "item-5",
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team through this help page by sending us a message, or by emailing us directly at support@example.com.",
  },
];

const Help = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (data: MessageFormData) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="min-h-full px-10 py-14 md:p-14 space-y-8 rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url('/images/dashboard/bg-2.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Heading Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#383838] mb-2 leading-tight text-center">
            Support
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* FAQ Accordion */}
        <div className="mb-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white/95 backdrop-blur-sm border-0 shadow-sm rounded-2xl overflow-hidden data-[state=open]:bg-[#8898f0] data-[state=open]:text-white transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg hover:no-underline data-[state=open]:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Message Form */}
        <div className="bg-white/20 backdrop-blur-sm border-1 border-white shadow-lg rounded-2xl p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Write Here..."
                        className="min-h-32 resize-none border-[#e5e7eb] rounded-2xl text-lg placeholder:text-lg placeholder:text-gray-400 focus:border-[#8898f0] focus:ring-[#8898f0] transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button
                  variant="myCustomButton1"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-[#8F8DEB] to-[#6977C5] hover:opacity-90 transition-opacity duration-300 text-white font-medium rounded-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Help;
