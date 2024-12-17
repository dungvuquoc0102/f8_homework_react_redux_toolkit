import * as z from "zod";
export const productSchema = z.object({
  title: z.string().min(6),
  price: z.number()
});

const requiredPrice = productSchema.required({
  title: true
});
