import { z } from "zod";

export const growthRecordSchema = z.object({
  weight: z
    .string()
    .transform((val) => parseFloat(val)) // Mengubah string menjadi number
    .refine((val) => !isNaN(val), { message: "Berat harus berupa angka" })
    .refine((val) => val > 0, { message: "Berat harus lebih dari 0" }),
  height: z
    .string()
    .transform((val) => parseFloat(val)) // Mengubah string menjadi number
    .refine((val) => !isNaN(val), { message: "Tinggi harus berupa angka" })
    .refine((val) => val > 0, { message: "Tinggi harus lebih dari 0" }),
});

export type GrowthRecordType = z.infer<typeof growthRecordSchema>;
