import { z } from "zod"

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .refine(
      (value) => {
        // Check if it's a valid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value)
      },
      {
        message: "Please enter a valid email address",
      },
    ),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
})

export const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required").min(3, "First name must be at least 3 characters"),
  lastName: z.string().min(1, "Last name is required").min(3, "Last name must be at least 3 characters"),
  username: z.string().min(1, "Username is required").min(3, "Username must be at least 3 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
  type: z.enum(["admin", "guest", "staff"], {
    required_error: "Please select account type",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type SignInFormData = z.infer<typeof signInSchema>
export type SignUpFormData = z.infer<typeof signUpSchema>
