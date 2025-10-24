import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  email: z.email({ error: "E-mail is required" }),
  password: z.string().min(3, { error: "Password is to short" }),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;

export const loginUserSchema = z.object({
  email: z.email({ error: "E-mail is required" }),
  password: z.string().min(1, { error: "Password is required" }),
});

export type LoginUserDto = z.infer<typeof loginUserSchema>;
