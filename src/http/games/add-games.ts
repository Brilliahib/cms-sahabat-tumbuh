import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { Games } from "@/types/games/games";
import { GameType } from "@/validators/games/games-validator";

interface GameResponse {
  data: Games;
}

export const addGameHandler = async (
  body: GameType,
  token: string
): Promise<GameResponse> => {
  const formData = new FormData();

  formData.append("type_id", body.type_id.toString());
  formData.append("title", body.title);

  body.questions.forEach((question, index) => {
    formData.append(
      `questions[${index}].question_text`,
      question.question_text
    );

    // Memastikan image adalah instance dari File sebelum menambahkannya ke formData
    if (question.image && question.image instanceof File) {
      formData.append(`questions[${index}].image`, question.image);
    }

    question.choices.forEach((choice, choiceIndex) => {
      formData.append(
        `questions[${index}].choices[${choiceIndex}].choice_text`,
        choice.choice_text
      );

      const isCorrectValue = choice.is_correct ? "1" : "0";
      formData.append(
        `questions[${index}].choices[${choiceIndex}].is_correct`,
        isCorrectValue
      );

      // Memastikan image adalah instance dari File sebelum menambahkannya ke formData
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
