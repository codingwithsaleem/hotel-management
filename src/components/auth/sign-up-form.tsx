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
import { User, Lock, Eye, EyeOff, Mail } from "lucide-react";
import { signUpSchema, type SignUpFormData } from "@/lib/validations/auth";
import { authService } from "@/lib/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ApiErrorHandler from "@/lib/utils/error-handler";
import Image from "next/image";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      type: "admin",
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    try {
      // Prepare payload for API
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.type, // 'admin', 'guest', or 'staff'
      };
      const response = await authService.registerUser(payload);
      if (response.success) {
        // Store email in localStorage for verification page
        localStorage.setItem("userEmail", data.email);
        toast.success("Account created! Please verify your email to continue.");
        setTimeout(() => {
          router.push("/verify-email");
        }, 1200);
      } else {
        toast.error(response.message || "Signup failed");
      }
    } catch (error: unknown) {
      const msg = ApiErrorHandler.getErrorMessage(error) || "Signup failed";
      toast.error(msg);
      console.error("Sign up error:", error);
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
              Create Your Account
            </h3>
            <p className="text-white text-sm">{"Let's create your account"}</p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 max-h-[350px] overflow-y-auto custom-scrollbar"
            >
              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-white">
                      Username
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                        <Input
                          {...field}
                          type="text"
                          placeholder="yourusername"
                          className=" placeholder:text-white text-primary pl-10 h-12 border-white rounded-3xl focus:outline-none focus:border-primary focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 border-2"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

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
                          className="placeholder:text-white text-primary pl-10 h-12 border-white rounded-3xl focus:outline-none focus:border-primary focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 border-2"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              {/* First Name Field */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-white">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                        <Input
                          {...field}
                          type="text"
                          placeholder="Your First Name Here"
                          className="placeholder:text-white pl-10 h-12 border-white rounded-3xl focus:outline-none focus:border-primary focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 border-2"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-white">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                        <Input
                          {...field}
                          type="text"
                          placeholder="Your Last Name Here"
                          className="placeholder:text-white pl-10 h-12 border-white rounded-3xl focus:outline-none focus:border-primary focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 border-2"
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
                          className="placeholder:text-white pl-10 pr-10 h-12 border-white rounded-3xl focus:outline-none focus:border-primary focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 border-2"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-primary"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 cursor-pointer" />
                          ) : (
                            <Eye className="h-5 w-5 cursor-pointer" />
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
                          className="placeholder:text-white pl-10 pr-10 h-12 border-white rounded-3xl focus:outline-none focus:border-primary focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 border-2"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-primary"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5 cursor-pointer" />
                          ) : (
                            <Eye className="h-5 w-5 cursor-pointer" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              <p className="text-sm text-white">
                Password must be at least 8 characters, unique, not common, and
                not entirely numeric.
              </p>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                variant="default"
                className="h-12 w-full rounded-3xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </Form>
          {/* Sign In Link */}
          <div className="text-center  mt-6">
            <span className="text-white text-sm">
              {"Already have an account? "}
              <Link
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Log In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
