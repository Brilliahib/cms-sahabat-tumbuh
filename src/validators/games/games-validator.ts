import { z } from "zod";

// Enum untuk jenis gambar yang valid
const validImageTypes = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "image/gif",
] as const;

// Modifikasi untuk GameType agar dapat menyertakan file
export const gameSchema = z.object({
  title: z.string().nonempty({ message: "Judul tidak boleh kosong" }),
  type_id: z
    .number()
    .positive({ message: "Type ID harus berupa angka positif" }),
  questions: z
    .array(
      z.object({
        question_text: z
          .string()
          .nonempty({ message: "Pertanyaan tidak boleh kosong" }),
        image: z
          .union([
            z.string().nullable().optional(), // Memungkinkan string atau null
            z.instanceof(File).refine(
              (file) => {
                // Validasi hanya dilakukan jika tipe adalah File
                return (
                  validImageTypes.includes(file.type as any) &&
                  file.size <= 2048 * 1024
                );
              },
              {
                message:
                  "Gambar harus berformat jpeg, png, jpg, atau gif dan ukuran maksimal 2MB",
              }
            ),
            z.instanceof(Blob).refine(
              (blob) => {
                const fileType = blob.type;
                return validImageTypes.includes(fileType as any);
              },
              {
                message: "Gambar harus berformat jpeg, png, jpg, atau gif",
              }
            ),
          ])
          .optional(), // Menjadikan gambar opsional
        choices: z
          .array(
            z.object({
              choice_text: z
                .string()
                .nonempty({ message: "Pilihan tidak boleh kosong" }),
              image: z
                .union([
                  z.string().nullable().optional(), // Memungkinkan string atau null
                  z.instanceof(File).refine(
                    (file) => {
                      return (
                        validImageTypes.includes(file.type as any) &&
                        file.size <= 2048 * 1024
                      );
                    },
                    {
                      message:
                        "Gambar harus berformat jpeg, png, jpg, atau gif dan ukuran maksimal 2MB",
                    }
                  ),
                  z.instanceof(Blob).refine(
                    (blob) => {
                      const fileType = blob.type;
                      return validImageTypes.includes(fileType as any);
                    },
                    {
                      message:
                        "Gambar harus berformat jpeg, png, jpg, atau gif",
                    }
                  ),
                ])
                .optional(), // Menjadikan gambar opsional
              is_correct: z.boolean({
                message: "is_correct harus berupa boolean",
              }),
            })
          )
          .min(2, {
            message: "Setiap pertanyaan harus memiliki minimal 2 pilihan",
          }),
      })
    )
    .min(1, { message: "Harus ada minimal 1 pertanyaan" }),
});

export type GameType = z.infer<typeof gameSchema>;
