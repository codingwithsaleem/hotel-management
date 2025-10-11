"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { toast } from "sonner";
import Container from "../Container";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Contact form data:", data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      toast.error(errorMessage || "Failed to send message. Please try again.");
    }
  };

  const subjectOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "billing", label: "Billing Question" },
    { value: "partnership", label: "Partnership" },
    { value: "feedback", label: "Feedback" },
  ];

  return (
    <Container>
      <div className="py-10 flex flex-col justify-center items-center min-h-screen">
        {/* Header */}
        <div className="text-center pb-10">
          <h1 className="font-montserrat text-[60px] font-semibold leading-[66px] not-italic mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#89DDF1] via-[#8F8DEB] to-[#6977C5]">
            Get In Touch
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Phone Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name*
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Your Full Name"
                    className="border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 bg-white/80 h-12"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phoneNumber"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number*
                  </Label>
                  <Input
                    id="phoneNumber"
                    placeholder="1 324 443 4433"
                    className="border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 bg-white/80 h-12"
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber && (
                    <p className="text-sm text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email and Subject Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="someone@example.com"
                    className="border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 bg-white/80 h-12"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message Subject*
                  </Label>
                  <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        
                      >
                        <SelectTrigger className="border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 bg-white/80 min-h-12 w-full">
                          <SelectValue placeholder="Select Subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjectOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message*
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your Message here..."
                  rows={6}
                  className="border-gray-200 focus:border-purple-400 focus:ring-purple-400/20 bg-white/80 w-full md:h-40"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-6 bg-gradient-to-r from-[#8F8DEB] to-[#6977C5] hover:opacity-90 transition-opacity duration-300 text-white font-medium rounded-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-fit bg-gradient-to-br from-[#8F8DEB] to-[#6977C5] text-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 font-montserrat">
                  Contact Info
                </h3>
                <p className="text-white/90 mb-8 leading-relaxed">
                  Lorem ipsum is Simply Dummy Text Of The Printing And
                  Typesetting Industry.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium">
                        info@FyNyL.com
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium">
                        1234 Elm Street Springfield, IL
                        <br />
                        62704 United States
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
