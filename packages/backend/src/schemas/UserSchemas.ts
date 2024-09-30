import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório." }),
  cpf: z
    .string()
    .min(11, { message: "O CPF deve ter pelo menos 11 caracteres." }),
  email: z.string().email({ message: "O email deve ser válido." }),
  phone: z
    .string()
    .min(10, { message: "O telefone deve ter pelo menos 10 caracteres." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
  role: z.enum(["CLIENT", "ADMIN", "OWNER"]).optional(),
});

export type UserDTO = z.infer<typeof userSchema>;
