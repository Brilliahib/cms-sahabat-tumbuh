import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { GameType } from "@/validators/games/games-validator";
import { DetailGames } from "@/types/games/games";

interface GameApiResponse {
  data: DetailGames;
}

export const addGameHandler = async (
  body: GameType,
  token: string
): Promise<GameApiResponse> => {
  const { data } = await api.post("/games", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useAddGame = (
  options?: UseMutationOptions<GameApiResponse, AxiosError<any>, GameType>
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: GameType) =>
      addGameHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
