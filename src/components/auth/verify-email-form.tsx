"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { z } from "zod";
import LogoSvg from "@/utils/svgs/LogoSvg";
import BackgroundWhiteLogoSvg from "@/utils/svgs/BackgroundWhiteLogoSvg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { authService } from "@/lib/services/auth.service";
import ApiErrorHandler from '@/lib/utils/error-handler';
import { useRouter } from "next/navigation";

const verifyEmailSchema = z.object({
  pin: z
    .string()
    .regex(/^\d{4}$/, { message: "Your one-time password must be 4 digits." }),
});

type VerifyEmailFormData = z.infer<typeof verifyEmailSchema>;

export default function VerifyEmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const resetEmail = localStorage.getItem("resetEmail");

  const form = useForm<VerifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      pin: "",
    },
  });

  // Countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (countdown > 0 && !canResend) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [countdown, canResend]);

  // Get email from localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const resetEmail = localStorage.getItem("resetEmail");
    if (resetEmail) {
      setEmail(resetEmail);
    } else if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const onSubmit = async (data: VerifyEmailFormData) => {
    setIsLoading(true);
    try {
      if (!email) {
        toast.error("No email found for verification.");
        setIsLoading(false);
        return;
      }
      // If resetEmail is set, this is a forgot password flow
      const isForgotPassword = Boolean(localStorage.getItem("resetEmail"));
      let response;
      if (isForgotPassword) {
        response = await authService.verifyForgotPasswordOtp({
          email,
          otp: data.pin,
        });
      } else {
        response = await authService.verifyUser({
          email,
          otp: data.pin,
        });
      }
      if (response.success) {
        if (isForgotPassword) {
          toast.success("OTP verified! Please reset your password.");
          router.push("/reset-password");
        } else {
          localStorage.removeItem("userEmail");
          toast.success("Email verified successfully! You can now log in.");
          router.push("/login");
        }
      } else {
        // Try to extract detailed error message
        const errResp = response as { message?: string } | undefined;
        console.log("Verification error response:", errResp);
        const errorMsg = errResp?.message || "Verification failed.";
        toast.error(errorMsg);
      }
    } catch (error: unknown) {
      const msg = ApiErrorHandler.getErrorMessage(error) || "Verification failed.";
      toast.error(msg);
      console.error("Verification error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!canResend || !email) return;
    try {
      setCountdown(60);
      setCanResend(false);
      const response = await authService.resendOtp({
        email,
        type: "EMAIL_VERIFICATION",
      });
      if (response.success) {
        toast.success("Verification code resent to your email.");
      } else {
        toast.error(response?.message || "Failed to resend code.");
      }
    } catch (error) {
      const msg = ApiErrorHandler.getErrorMessage(error) || "Failed to send OTP.";
      toast.error(msg);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/auth/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hidden md:block h-auto absolute -left-20 top-1/2 -translate-y-1/2 translate-x-1/2 origin-center">
        <BackgroundWhiteLogoSvg />
      </div>
      <div className="w-full md:max-w-lg">
        <div className="rounded-3xl p-8 shadow-[0_0_22px_0_rgba(143,141,235,0.55)] bg-white/15 border-2 border-[#e5e7eb]">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="text-3xl font-bold text-[#8898f0] mb-6 flex justify-center">
              <LogoSvg width={120} height={40} />
            </span>
            <h3 className="text-2xl font-bold text-[#000000] mb-2">
              {resetEmail ? "Verify Your Email For Password Reset" : "Sign in with Email"}
            </h3>
            {email && !resetEmail && (
              <p className="text-[#9ca3af] text-sm">
                {email || "ex@example.com"}{" "}
                <Link href="/signup/sender">
                  <span className="text-[#8898f0] cursor-pointer underline">
                    Change Email
                  </span>
                </Link>
              </p>
            )}
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* OTP Field */}
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center space-y-6">
                    <FormControl>
                      <InputOTP
                        maxLength={4}
                        value={field.value}
                        onChange={field.onChange}
                      >
                        <InputOTPGroup className="gap-4">
                          <InputOTPSlot
                            index={0}
                            className="w-16 h-16 !rounded-full border-2 border-[#8898f0] text-2xl font-semibold text-[#8898f0] bg-white/20 first:rounded-full"
                          />
                          <InputOTPSlot
                            index={1}
                            className="w-16 h-16 !rounded-full border-2 border-[#8898f0] text-2xl font-semibold text-[#8898f0] bg-white/20"
                          />
                          <InputOTPSlot
                            index={2}
                            className="w-16 h-16 !rounded-full border-2 border-[#8898f0] text-2xl font-semibold text-[#8898f0] bg-white/20"
                          />
                          <InputOTPSlot
                            index={3}
                            className="w-16 h-16 !rounded-full border-2 border-[#8898f0] text-2xl font-semibold text-[#8898f0] bg-white/20 last:rounded-full"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              {/* Resend Code */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={!canResend}
                  className={`text-sm transition-colors ${
                    canResend
                      ? "text-[#8898f0] hover:text-[#6977C5] cursor-pointer"
                      : "text-[#9ca3af] cursor-not-allowed"
                  }`}
                >
                  {canResend ? "Resend Code" : `Resend Code in ${countdown}s`}
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                variant="myCustomButton1"
                className="h-12"
              >
                {isLoading ? "Verifying..." : "Continue"}
              </Button>

                {/* Success Message */}
                {/* {canResend && countdown === 60 && (
                <div className="text-center">
                  <p className="text-[#9ca3af] text-sm">OTP Sent Successfully</p>
                </div>
                )} */}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
