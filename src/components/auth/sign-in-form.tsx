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
import { User, Lock, Eye, EyeOff, ChevronDown } from "lucide-react";
import { signInSchema, type SignInFormData } from "@/lib/validations/auth";
import { authService } from "@/lib/services/auth.service";
import ApiErrorHandler from "@/lib/utils/error-handler";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';
// import { signIn, getSession } from 'next-auth/react';
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";
import { setUser, setTokens } from "@/store/slices/userSlice";
import LogoSvg from "@/utils/svgs/LogoSvg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiSend, FiDownload } from "react-icons/fi";
import BackgroundWhiteLogoSvg from "@/utils/svgs/BackgroundWhiteLogoSvg";
import Link from "next/link";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    try {
      const resp = await authService.login({ email: data.email, password: data.password });
      if (resp.success && resp.data) {
        // resp.data should match LoginResponse
        const { user, tokens } = resp.data;

        // dispatch to redux
        dispatch(setUser(user));
        dispatch(
          setTokens({
            accessToken: tokens?.accessToken ?? null,
            refreshToken: tokens?.refreshToken ?? null,
            accessTokenExpiresAt: tokens?.accessTokenExpiresAt ?? null,
            refreshTokenExpiresAt: tokens?.refreshTokenExpiresAt ?? null,
          })
        );

        // success toast
        toast.success(resp.message || "Logged in successfully");

        // redirect based on role (assume user.role exists)
        const role = (user?.role as string | undefined) || "RECEIVER";
        if (role === "SENDER") router.push("/dashboard/sender");
        else if (role === "RECEIVER") router.push("/dashboard/receiver");
        else if (role === "ADMIN") router.push("/dashboard/admin");
        else router.push("/dashboard");
      } else {
        toast.error(resp.message || "Login failed");
      }
    } catch (error: unknown) {
      console.error("Sign in error:==============", error);
      const msg = ApiErrorHandler.getErrorMessage(error) || "Login failed";
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = (provider: 'google' | 'apple' | 'linkedin') => {
  signIn(provider, { callbackUrl: window.location.origin + '/auth-callback' });
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
              Login to Your Account
            </h3>
            <p className="text-[#9ca3af] text-sm">
              {"Let's login to your account"}
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email/Phone Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-sm font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                        <Input
                          {...field}
                          type="email"
                          placeholder="yourname@gmail.com"
                          className="text-[#8898f0] pl-10 h-12 border-[#e5e7eb] rounded-3xl focus:border-[#8898f0] focus:ring-[#8898f0] border-2"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] h-5 w-5" />
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••••"
                          className="pl-10 pr-10 h-12 border-[#e5e7eb] rounded-3xl focus:border-[#8898f0] focus:ring-[#8898f0] text-[#8898f0] border-2"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] hover:text-[#8898f0]"
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

              {/* Forgot Password */}
              <div className="text-right">
                <Link href="/forgot-password" className="text-[#8898f0] text-sm hover:underline">
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                variant="myCustomButton1"
                className="h-12"
              >
                {isLoading ? "Signing In..." : "Log In"}
              </Button>
            </form>
          </Form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-[#e5e7eb]"></div>
            <span className="px-4 text-[#9ca3af] text-sm">Or sign in with</span>
            <div className="flex-1 border-t border-[#e5e7eb]"></div>
          </div>

          {/* Social Sign In */}
          <div className="flex justify-center space-x-4 mb-6">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="w-20 h-12 rounded-xl border-[#e5e7eb] hover:border-[#8898f0] bg-transparent cursor-pointer"
              onClick={() => handleSocialSignIn("google")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="w-20 h-12 rounded-xl border-[#e5e7eb] hover:border-[#8898f0] bg-transparent cursor-pointer"
              onClick={() => handleSocialSignIn("apple")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="w-20 h-12 rounded-xl border-[#e5e7eb] hover:border-[#8898f0] bg-transparent cursor-pointer"
              onClick={() => handleSocialSignIn("linkedin")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Button>
          </div>

          {/* Sign Up Dropdown */}
          <div className="text-center">
            <span className="text-[#383838] text-sm">
              {"Don't have an account? "}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-[#8898f0] font-medium hover:underline inline-flex items-center gap-1 focus:outline-none cursor-pointer">
                    Sign Up
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-56 bg-white/95 backdrop-blur-sm border-[#e5e7eb] shadow-lg"
                >
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#8898f0]/10 focus:bg-[#8898f0]/10 p-0">
                    <Link href="/signup/sender" className="flex items-center gap-2 w-full p-2">
                      <FiSend className="h-4 w-4 text-[#8898f0]" />
                      <div className="flex flex-col">
                        <span className="font-medium text-[#383838]">
                          Sign up as a Sender
                        </span>
                        <span className="text-xs text-[#9ca3af]">
                          Create invoices and send requests
                        </span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#8898f0]/10 focus:bg-[#8898f0]/10 p-0">
                    <Link href="/signup/receiver" className="flex items-center gap-2 w-full p-2">
                      <FiDownload className="h-4 w-4 text-[#8898f0]" />
                      <div className="flex flex-col">
                        <span className="font-medium text-[#383838]">
                          Sign up as a Receiver
                        </span>
                        <span className="text-xs text-[#9ca3af]">
                          Receive and manage payments
                        </span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
