import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { Games } from "@/types/games/games";
import { GameType } from "@/validators/games/games-validator";

interface GameResponse {
  data: Games;
}

// Fungsi untuk memeriksa apakah file adalah gambar dengan tipe yang valid
const isValidImage = (file: File) => {
  const validTypes = ["image/jpeg", "image/png", "image/jpg"];
  return validTypes.includes(file.type);
};

export const addGameHandler = async (
  body: GameType,
  token: string
): Promise<GameResponse> => {
  const formData = new FormData();

  formData.append("type_id", body.type_id.toString());
  formData.append("title", body.title);

  // Validasi untuk memastikan ada pertanyaan dan setiap pertanyaan memiliki pilihan
  if (!body.questions || body.questions.length === 0) {
    throw new Error("At least one question is required.");
  }

  body.questions.forEach((question, index) => {
    if (!question.question_text) {
      throw new Error(`Question ${index + 1} is missing text.`);
    }

    formData.append(
      `questions[${index}].question_text`,
      question.question_text
    );

    if (question.image && question.image instanceof File) {
      formData.append(`questions[${index}].image`, question.image);
    }

    if (!question.choices || question.choices.length === 0) {
      throw new Error(`Question ${index + 1} must have at least one choice.`);
    }

    question.choices.forEach((choice, choiceIndex) => {
      if (!choice.choice_text) {
        throw new Error(
          `Choice ${choiceIndex + 1} for question ${index + 1} is missing text.`
        );
      }

      formData.append(
        `questions[${index}].choices[${choiceIndex}].choice_text`,
        choice.choice_text
      );

      const isCorrectValue = choice.is_correct ? "1" : "0";
      formData.append(
        `questions[${index}].choices[${choiceIndex}].is_correct`,
        isCorrectValue
      );

      if (choice.image && choice.image instanceof File) {
        formData.append(
          `questions[${index}].choices[${choiceIndex}].image`,
          choice.image
        );
      }
    });
  });

  const { data } = await api.post("/games", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const useAddGame = (
  options?: UseMutationOptions<GameResponse, AxiosError<any>, GameType>
) => {
  const { data: sessionData } = useSession();

  return useMutation({
    mutationFn: (body: GameType) =>
      addGameHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
