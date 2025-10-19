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
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { signInSchema, type SignInFormData } from "@/lib/validations/auth";
import { authService } from "@/lib/services/auth.service";
import ApiErrorHandler from "@/lib/utils/error-handler";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";
import { setUser, setTokens } from "@/store/slices/userSlice";
import Link from "next/link";
import Image from "next/image";

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
        <div className="rounded-3xl p-8 shadow-[0_0_22px_0_rgba(143,141,235,0.55)] bg-white/15 border-2 border-[#e5e7eb]">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="text-3xl font-bold text-primary mb-6 flex justify-center">
              <Image width={200} height={40} src="/images/auth/logo1.svg" alt="Logo" className="w-30" />
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              Login to Your Account
            </h3>
            <p className="text-white text-sm">
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
                    <FormLabel className=" text-sm font-medium text-white">
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                        <Input
                          {...field}
                          type="email"
                          placeholder="yourname@gmail.com"
                          className="text-primary pl-10 h-12 border-white rounded-3xl focus:outline-none focus:border-primary focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 border-2 placeholder:text-white"
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
                    <FormLabel className="text-sm font-medium text-white">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••••"
                          className="pl-10 pr-10 h-12 border-white text-primary rounded-3xl focus:outline-none focus:border-primary focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 border-2 placeholder:text-white"
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

              {/* Forgot Password */}
              <div className="text-right">
                <Link href="/forgot-password" className="text-sm hover:underline text-white">
                  Forgot Your Password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                variant="default"
                className="h-12 w-full rounded-3xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
              >
                {isLoading ? "Signing In..." : "Log In"}
              </Button>
            </form>
          </Form>

          {/* Divider */}
          <div className="flex items-center my-6 w-25 justify-center m-auto">
            <div className="flex-1 border-t border-white"></div>
            <span className="px-4 text-black">Or</span>
            <div className="flex-1 border-t border-white"></div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-white text-sm">Don&apos;t have an account? <Link href="/sign-up" className="text-white underline hover:text-primary hover:underline-primary">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
