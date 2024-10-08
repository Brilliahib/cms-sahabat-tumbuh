import { z } from "zod";

export const gameSchema = z.object({
  title: z.string().nonempty({ message: "Title tidak boleh kosong" }),
  type_id: z
    .number()
    .positive({ message: "Type ID harus berupa angka positif" }),
  questions: z
    .array(
      z.object({
        question_text: z
          .string()
          .nonempty({ message: "Pertanyaan tidak boleh kosong" }),
        choices: z
          .array(
            z.object({
              choice_text: z
                .string()
                .nonempty({ message: "Pilihan tidak boleh kosong" }),
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
