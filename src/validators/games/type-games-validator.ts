import { z } from "zod";

export const gameTypesSchema = z.object({
  name: z.string().nonempty({ message: "Judul tidak boleh kosong" }),
});

export type TypeGameType = z.infer<typeof gameTypesSchema>;
