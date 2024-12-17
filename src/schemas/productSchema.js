import * as z from "zod";

export const productSchema = z.object({
  title: z.string().min(5),
  price: z.number().min(1),
  description: z.string().min(1),
});

const requiredPrice = productSchema.required({
  title: true,
});
