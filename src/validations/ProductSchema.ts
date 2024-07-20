import { z } from "zod";

export const Gender = [
    "Hombre",
    "Mujer",
    "Kids"
  ] as const;

export const Sizes = [
    "S",
    "M",
    "L",
    "XL",
  ] as const;

const category = ["Ropa","Electronico"] as const;
export type Category = (typeof category)[number]
export const mapCategories:{[key in Category]:string} ={
    Ropa: "Ropa",
    Electronico: "Electrónico"
} 

 
export const baseSchema = z.object({
  name: z.string().min(1,{
    message:"Ingrese el titulo del producto"
  }),
  price: z.string().regex(/^\d+$/, {
    message: "Ingrese un numero valido",
  }),
  brand: z.string().min(1,{
    message: "Ingrese la marca del producto"
  }),
  color: z.string().min(1,{
    message: "Ingrese el color del producto"
  }),
  discount: z.string().regex(/^\d+$/, {
    message: "Ingrese un numero valido",
  }),
  category: z.enum(category,{
    errorMap:()=>({message: "Debe seleccionar una categoría"}),
  
  }),
  description: z.string(),
  file: z .any()
  .refine((file) => file && file[0] && ['image/webp', 'image/jpeg', 'image/jpg'].includes(file[0].type), {
    message: 'Only .webp, .jpeg, and .jpg files are allowed',
  }),
    url: z.string().optional()
});

export const clothesSchema = baseSchema.extend({
    gender:z.enum(Gender,{
        message: "Debe seleccionar un genero"
    }),
    size: z.enum(Sizes,{
        message: "Debe seleccionar un tamaño"
    }),
})

export const electronicSchema = baseSchema.extend({
    ram: z.string().min(1,{
      message: "Ingrese la cantidad de RAM"
    }),
    storage: z.string().min(1,{
      message: "Ingrese la capacidad de almacenamiento"
    }),
    screenSize: z.string().min(1,{
      message: "Ingrese el tamaño de la pantalla"
    }),
})


const productSchema = z.union([electronicSchema,clothesSchema])

export type TDefault = z.infer<typeof productSchema >;