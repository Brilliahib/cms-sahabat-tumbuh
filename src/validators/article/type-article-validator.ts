import { z } from "zod";

export const typeArticleSchema = z.object({
  name: z.string().min(1, { message: "Nama Tipe harus diisi" }),
});

export type TypeArticleType = z.infer<typeof typeArticleSchema>;
