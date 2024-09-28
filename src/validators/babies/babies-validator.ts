import { z } from "zod";

export const babiesSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi" }).trim(),
  birth_date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Tanggal lahir harus berupa format yang valid",
  }),
  gender: z.enum(["male", "female", "other"], {
    message: "Jenis kelamin harus dipilih antara male, female, atau other",
  }),
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

export type BabiesType = z.infer<typeof babiesSchema>;
