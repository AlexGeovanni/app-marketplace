import { z } from "zod";

export const Address = [
  "Margaritas recidencial",
  "Villas del Campo",
  "Paseo de la Piedra",
  "Av. Tecnológico",
  "Calle 123",
  "Av. Los ��ngeles",
  "Carrera 456",
  "Calle 789",
  "Otro"
] as const;






export const LoginSchema = z.object({
  email: z.string().email({
    message: "Debes ingresar un email válido",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener al menos 8 caracteres",
  }),
});

export interface TLoginSchema extends z.infer<typeof LoginSchema> {}

export const SingUpUserSchema =LoginSchema.extend({
  fullName: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres",
  }),
  phone: z.string().regex(/^\d{10}$/,{
    message: "El número de teléfono debe tener 10 dígitos",
  }),
});

export interface TSingUpUserSchema extends z.infer<typeof SingUpUserSchema> {}

export const SingUpBusinesSchema =LoginSchema.extend({
  businessName: z.string().min(3, {
    message: "El nombre del negocio debe tener al menos 3 caracteres",
  }),
  address: z.enum(Address,{
    message: "Debes seleccionar una dirección"
  }),
  businessDescription: z.string().min(10, {
    message: "La descripción del negocio debe tener al menos 10 caracteres",
  })
});

export interface TSingUpBusinesSchema extends z.infer<typeof SingUpBusinesSchema> {}
