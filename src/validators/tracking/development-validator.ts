import { z } from "zod";

export const developmentRecordSchema = z.object({
  can_read: z.boolean().refine((val) => val === true || val === false, {
    message: "Harus berupa true atau false",
  }),
  can_count: z.boolean().refine((val) => val === true || val === false, {
    message: "Harus berupa true atau false",
  }),
  can_speak_simple_words: z
    .boolean()
    .refine((val) => val === true || val === false, {
      message: "Harus berupa true atau false",
    }),
  can_form_simple_sentences: z
    .boolean()
    .refine((val) => val === true || val === false, {
      message: "Harus berupa true atau false",
    }),
  can_engage_in_simple_play: z
    .boolean()
    .refine((val) => val === true || val === false, {
      message: "Harus berupa true atau false",
    }),
  can_follow_simple_directions: z
    .boolean()
    .refine((val) => val === true || val === false, {
      message: "Harus berupa true atau false",
    }),
  can_recognize_colors: z
    .boolean()
    .refine((val) => val === true || val === false, {
      message: "Harus berupa true atau false",
    }),
  can_identify_shapes: z
    .boolean()
    .refine((val) => val === true || val === false, {
      message: "Harus berupa true atau false",
    }),
  notes: z.string().optional(),
});

export type DevelopmentRecordType = z.infer<typeof developmentRecordSchema>;
