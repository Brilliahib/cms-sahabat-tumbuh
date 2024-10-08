import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { DetailGames } from "@/types/games/games";
import { GameSubmitType } from "@/validators/games/submit-games-validator";

interface GameApiResponse {
  data: DetailGames;
}

export const submitGamesHandler = async (
  gameId: number,
  body: GameSubmitType,
  token: string
): Promise<GameApiResponse> => {
  const { data } = await api.post(`/games/${gameId}/take`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useSubmitGames = (
  options?: UseMutationOptions<
    GameApiResponse,
    AxiosError<any>,
    GameSubmitType & { gameId: number }
  >
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: ({ gameId, answers }) =>
      submitGamesHandler(
        gameId,
        { answers },
        sessionData?.access_token as string
      ),
    ...options,
  });
};
