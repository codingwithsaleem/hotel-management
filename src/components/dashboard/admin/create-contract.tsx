"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { DateTimePicker } from "@/components/ui/datetime-picker";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import {
  contractSchema,
  type ContractFormData,
} from "@/lib/validations/contract";
import HeadingSection from "./heading-section";
import PictureUpload from "@/components/ui/picture-upload";

const CreateContract = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContractFormData>({
    resolver: zodResolver(contractSchema),
    defaultValues: {
      senderName: "",
      senderEmail: "",
      senderPhone: "",
      senderAddress: "",
      senderWebsite: "",
      senderIndustry: "",
      contractType: "negotiable",
      senderLogo: "",
      receiverName: "",
      receiverEmail: "",
      receiverPhone: "",
      receiverAddress: "",
      receiverWebsite: "",
      receiverIndustry: "",
      receiverLogo: "",
      serviceOffering: "",
      serviceDateTime: undefined,
      serviceLocation: "address",
      requireDeposit: "yes",
      refundPolicy: "",
      paymentMethod: "",
    },
  });

  const onSubmit = async (data: ContractFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Contract Data:", data);
      alert("Contract created successfully!");
      form.reset();
    } catch (error) {
      console.error("Contract creation error:", error);
      alert("Error creating contract. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const industries = [
    "Beauty & Wellness",
    "Photography",
    "Event Planning",
    "Technology",
    "Healthcare",
    "Education",
    "Real Estate",
    "Food & Beverage",
    "Fitness",
    "Legal Services",
    "Marketing",
    "Construction",
  ];

  const services = [
    "Photographer",
    "Videographer",
    "Makeup Artist",
    "Hair Stylist",
    "Wedding Planner",
    "DJ/Music",
    "Catering",
    "Florist",
    "Consultant",
    "Designer",
    "Developer",
    "Other",
  ];

  const paymentMethods = [
    "Cash App",
    "PayPal",
    "Venmo",
    "Bank Transfer",
    "Check",
    "Zelle",
    "Apple Pay",
    "Credit Card",
  ];

  return (
    <div className="space-y-8">
      <HeadingSection
        heading="Contract Creation Form"
        description="Fill out the form below to create a new contract."
      />

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-black mb-2">
                Basic Contract Info
                <span className="text-[#535353]">(Sender Info)</span>
              </h3>
            </div>
            {/* Basic Contract Info (Sender Info) */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="senderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Full Name
                        </FormLabel>
                        <FormControl>
                            <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                            <Input
                              {...field}
                              placeholder="yourname"
                              className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                            />
                            </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Email Address */}
                  <FormField
                    control={form.control}
                    name="senderEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                            <Input
                              {...field}
                              type="email"
                              placeholder="yourname@gmail.com"
                              className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Phone Number */}
                  <FormField
                    control={form.control}
                    name="senderPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                            <Input
                              {...field}
                              placeholder="+1 (555) 123-4567"
                              className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Your Address */}
                  <FormField
                    control={form.control}
                    name="senderAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Your Address
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                            <Input
                              {...field}
                              placeholder="1234 Elm Street, Apt 5B, Springfield, IL 62704, USA"
                              className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 text-lg placeholder:text-lg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Website/URL */}
                  <FormField
                    control={form.control}
                    name="senderWebsite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Website/URL
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                            <Input
                              {...field}
                              placeholder="www.yourlink.com"
                              className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Contract Type */}
                  <FormField
                    control={form.control}
                    name="contractType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Contract Type
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-6"
                          >
                            <div className="flex items-center space-x-2 border px-6 py-3 rounded-4xl bg-[#EDEDFF]">
                              <RadioGroupItem
                                value="negotiable"
                                id="negotiable"
                                className="cursor-pointer border-primary"
                              />
                              <Label htmlFor="negotiable" className="cursor-pointer text-lg">Negotiable</Label>
                            </div>
                            <div className="flex items-center space-x-2 border px-6 py-3 rounded-4xl bg-[#EDEDFF]">
                              <RadioGroupItem
                                value="non-negotiable"
                                id="non-negotiable"
                                className="cursor-pointer border-primary"
                              />
                              <Label htmlFor="non-negotiable" className="cursor-pointer text-lg">
                                Non-Negotiable
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Industry */}
                <div className="mt-6">
                  <FormField
                    control={form.control}
                    name="senderIndustry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium">
                          Industry
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="pl-10 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg w-full min-h-15">
                              <SelectValue placeholder="Beauty & Wellness" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Logo Upload */}
                <div className="mt-6">
                  <FormField
                    control={form.control}
                    name="senderLogo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium">
                          Logo Upload (optional)
                        </FormLabel>
                        <FormControl>
                          <PictureUpload
                            onUpload={field.onChange}
                            onRemove={() => field.onChange("")}
                            currentImage={field.value}
                            placeholder="Please Upload Pictures"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

             
            {/* Job Details */}

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-black mb-2">
                Job Details
              </h3>
            </div>
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Receiver Name */}
                  <FormField
                    control={form.control}
                    name="receiverName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Receiver Name
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                            <Input
                              {...field}
                              placeholder="yourname"
                              className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Email Address */}
                  <FormField
                    control={form.control}
                    name="receiverEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                            <Input
                              {...field}
                              type="email"
                              placeholder="yourname@gmail.com"
                              className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Phone Number */}
                  <FormField
                    control={form.control}
                    name="receiverPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                            <Input
                              {...field}
                              placeholder="+1 (555) 123-4567"
                              className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Your Address */}
                  <FormField
                    control={form.control}
                    name="receiverAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Your Address
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                            <Input
                              {...field}
                              placeholder="1234 Elm Street, Apt 5B, Springfield, IL 62704, USA"
                              className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Website/URL */}
                  <FormField
                    control={form.control}
                    name="receiverWebsite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Website/URL
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                            <Input
                              {...field}
                              placeholder="www.yourlink.com"
                              className="pl-10 h-15 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Industry */}
                  <FormField
                    control={form.control}
                    name="receiverIndustry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          Industry
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="pl-10 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg w-full min-h-15">
                              <SelectValue placeholder="Beauty & Wellness" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Logo Upload */}
                <div className="mt-6">
                  <FormField
                    control={form.control}
                    name="receiverLogo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium">
                          Logo Upload (optional)
                        </FormLabel>
                        <FormControl>
                          <PictureUpload
                            onUpload={field.onChange}
                            onRemove={() => field.onChange("")}
                            currentImage={field.value}
                            placeholder="Please Upload Pictures"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
             <div className="mb-6">
              <h3 className="text-2xl font-semibold text-black mb-2">
                Terms And Conditions
              </h3>
            </div>
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* What service are you offering? */}
                  <FormField
                    control={form.control}
                    name="serviceOffering"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          What service are you offering?
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="pl-10 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg w-full min-h-15">
                              <SelectValue placeholder="Photographer" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* When is the service scheduled? */}
                  <FormField
                    control={form.control}
                    name="serviceDateTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium text-base">
                          When is the service scheduled?
                        </FormLabel>
                        <FormControl>
                          <DateTimePicker
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="MM/DD/YYYY hh:mm aa"
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Where will it take place? */}
                  <FormField
                    control={form.control}
                    name="serviceLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium">
                          Where will it take place?
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-6"
                          >
                            <div className="flex items-center space-x-2 border px-6 py-3 rounded-4xl bg-[#EDEDFF]">
                              <RadioGroupItem value="address" id="address" />
                              <Label htmlFor="address" className="cursor-pointer text-lg">Address</Label>
                            </div>
                            <div className="flex items-center space-x-2 border px-6 py-3 rounded-4xl bg-[#EDEDFF]">
                              <RadioGroupItem value="virtual" id="virtual" />
                              <Label htmlFor="virtual" className="cursor-pointer text-lg">Virtual</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* Do you require a deposit? */}
                  <FormField
                    control={form.control}
                    name="requireDeposit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium">
                          Do you require a deposit?
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-6"
                          >
                            <div className="flex items-center space-x-2 border px-6 py-3 rounded-4xl bg-[#EDEDFF]">
                              <RadioGroupItem value="yes" id="yes" />
                              <Label htmlFor="yes" className="cursor-pointer text-lg">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2 border px-6 py-3 rounded-4xl bg-[#EDEDFF]">
                              <RadioGroupItem value="no" id="no" />
                              <Label htmlFor="no" className="cursor-pointer text-lg">No</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  {/* How should payment be made? */}
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium">
                          How should payment be made?
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="pl-10 border-[#e5e7eb] rounded-4xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 placeholder:text-lg text-lg w-full min-h-15">
                              <SelectValue placeholder="Cash App" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {paymentMethods.map((method) => (
                              <SelectItem key={method} value={method}>
                                {method}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* What's your refund or cancellation policy? */}
                <div className="mt-6">
                  <FormField
                    control={form.control}
                    name="refundPolicy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8898f0] font-medium">
                          What&apos;s your refund or cancellation policy?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Write your own"
                            className="min-h-[150px] border-[#e5e7eb] rounded-xl focus:border-[#8898f0] focus:ring-[#8898f0] border-1 resize-none placeholder:text-lg text-lg"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8">
                  {/* <Button
                    type="button"
                    variant="outline"
                    className="h-12 px-8 border-[#8898f0] text-[#8898f0] hover:bg-[#8898f0] hover:text-white rounded-full"
                    onClick={() => {
                      console.log("Save Contract:", form.getValues());
                      alert("Contract saved as draft!");
                    }}
                  >
                    Save Contract
                  </Button> */}
                  <Button
                    variant="myCustomButton1"
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-auto px-6 py-6 bg-gradient-to-r from-[#8F8DEB] to-[#6977C5] hover:opacity-90 transition-opacity duration-300 text-white font-medium rounded-full"
                  >
                    {isLoading ? "Creating..." : "Create New Contract"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateContract;
