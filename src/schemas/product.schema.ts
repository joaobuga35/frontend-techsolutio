import { z } from "zod";

const productSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres")
    .nonempty("Nome é obrigatório"),
  supplier: z
    .string()
    .max(50, "O fornecedor deve ter no máximo 50 caracteres")
    .nonempty("O fornecedor é obrigatário"),
  price: z.number().min(0, "O preço deve ser maior que zero"),
});

type productData = z.infer<typeof productSchema>;
export { productSchema };
export type { productData };
