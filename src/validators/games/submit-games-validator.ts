import { z } from "zod";

export const gameSubmitSchema = z.object({
  answers: z.array(
    z.object({
      question_id: z
        .number()
        .nonnegative({ message: "Pertanyaan tidak boleh kosong" }),
      choice_id: z
        .number()
        .nonnegative({ message: "Pilihan tidak boleh kosong" }),
    })
  ),
});

export type GameSubmitType = z.infer<typeof gameSubmitSchema>;
