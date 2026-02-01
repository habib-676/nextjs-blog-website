import * as z from "zod";

export const signupSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.email(),
  password: z.string().min(8).max(50),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(50),
});
