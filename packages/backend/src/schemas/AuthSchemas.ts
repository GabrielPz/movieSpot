import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email()
    .transform((v) => v.toLowerCase()),
  password: z.string().min(6),
});

export const tokenSchema = z.object({
  token: z.string(),
  id: z.string().uuid(),
  name: z.string(),
  role: z.enum(["CLIENT", "ADMIN", "OWNER"]),
  cpf: z.string(),
  email: z.string().email(),
});

export type LoginDTO = z.infer<typeof loginSchema>;
export type TokenDTO = z.infer<typeof tokenSchema>;
