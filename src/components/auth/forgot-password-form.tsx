"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail } from "lucide-react";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authService } from "@/lib/services/auth.service";
import ApiErrorHandler from '@/lib/utils/error-handler';

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    try {
      const response = await authService.forgotPassword({ email: data.email });
      if (response.success) {
        toast.success("OTP sent to your email. Please check your inbox.");
        localStorage.setItem("resetEmail", data.email);
        router.push("/verify-email");
      } else {
        const errResp = response as { message?: string } | undefined;
        const errorMsg = errResp?.message || "Failed to send OTP.";
        toast.error(errorMsg);
      }
    } catch (error: unknown) {
      const msg = ApiErrorHandler.getErrorMessage(error) || "Failed to send OTP.";
      toast.error(msg);
      console.error("Forgot password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/auth/bg1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:max-w-lg">
        <div className="rounded-3xl p-8 shadow-[0_0_22px_0_rgba(143,141,235,0.55)] bg-white/15 border-2 border-white">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="text-3xl font-bold text-primary mb-6 flex justify-center">
              <Image
                width={200}
                height={40}
                src="/images/auth/logo1.svg"
                alt="Logo"
                className="w-30"
              />
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              Forgot Password
            </h3>
            <p className="text-white text-sm">
              Enter your email to reset your password
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-white">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                        <Input
                          {...field}
                          type="email"
                          placeholder="yourname@gmail.com"
                          className="placeholder:text-white text-primary pl-10 h-12 border-white rounded-3xl focus:border-primary focus:ring-primary border-2"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                variant="default"
                className="h-12 w-full rounded-3xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          </Form>

          {/* Back to Sign In */}
          <div className="text-center mt-6">
            <span className="text-white text-sm">
              Remember your password?{" "}
              <Link href="/login" className="text-primary font-medium hover:underline">
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
