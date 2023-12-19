import { z } from "zod";

export const loginSchema = z.object({
  userName: z.string().min(1, {
    message: "Enter a username"
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const registerSchema = z
  .object({
    userName: z
      .string({
        required_error: "Enter a username",
      })
      .min(3, {
        message: "The username must have at least 3 characters",
      }),
    email: z.string().email({
      message: "Enter a valid mail",
    }),
    password: z.string().min(6, {
      message: "The password must be at least 6 characters long",
    }),
    confirmPassword: z.string().min(6, {
      message: "The password must be at least 6 characters long",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The password do not coincide",
    path: ["confirmPassword"],
  });
