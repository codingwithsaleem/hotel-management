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
import { Lock, Eye, EyeOff } from "lucide-react";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authService } from "@/lib/services/auth.service";
import ApiErrorHandler from '@/lib/utils/error-handler';

const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true);
    try {
      const email = localStorage.getItem("resetEmail");
      if (!email) {
        toast.error("No email found for password reset.");
        setIsLoading(false);
        return;
      }
      const response = await authService.resetPassword({
        email,
        newPassword: data.password,
      });
      if (response.success) {
        toast.success("Password reset successfully! You can now log in.");
        localStorage.removeItem("resetEmail");
        router.push("/login");
      } else {
        const errResp = response as { message?: string } | undefined;
        const errorMsg = errResp?.message || "Failed to reset password.";
        toast.error(errorMsg);
      }
    } catch (error: unknown) {
      const msg = ApiErrorHandler.getErrorMessage(error) || "Failed to reset password.";
      toast.error(msg);
      console.error("Reset password error:", error);
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
              Reset Password
            </h3>
            <p className="text-white text-sm">
              Enter your new password
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* New Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-white">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••••"
                          className="placeholder:text-white text-primary pl-10 pr-10 h-12 border-white rounded-3xl focus:outline-none focus:border-primary focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 border-2"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-primary"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              {/* Confirm Password Field */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-white">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                        <Input
                          {...field}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••••••"
                          className="placeholder:text-white text-primary pl-10 pr-10 h-12 border-white rounded-3xl focus:outline-none focus:border-primary focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 border-2"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-primary"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
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
                {isLoading ? "Resetting..." : "Reset Password"}
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
