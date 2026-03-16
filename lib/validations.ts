import { z } from "zod";

// Esquema para o registo de novos utilizadores
export const registerSchema = z.object({
    name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(8, "A palavra-passe deve ter pelo menos 8 caracteres"),
    company: z.string().min(2, "O nome da empresa deve ter pelo menos 2 caracteres").optional(),
    phone: z.string().regex(/^\d{9}$/, "O telefone deve ter exatamente 9 dígitos (Angola)").optional(),
});

// Esquema para o login
export const loginSchema = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(1, "A palavra-passe é obrigatória"),
});

// Esquema para atualização de perfil
export const profileSchema = z.object({
    name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
    company: z.string().min(2, "O nome da empresa deve ter pelo menos 2 caracteres").optional(),
    phone: z.string().regex(/^\d{9}$/, "O telefone deve ter exatamente 9 dígitos (Angola)").optional(),
    avatar: z.string().url("URL de avatar inválida").optional().or(z.literal("")),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;
