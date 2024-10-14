import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { GamesType } from "@/types/games/games";

interface DeleteGamesPayload {
  id: number;
  token: string;
}

interface DeleteGamesResponse {
  data: GamesType;
}

export const deleteGamesHandler = async ({
  id,
  token,
}: DeleteGamesPayload): Promise<DeleteGamesResponse> => {
  const { data } = await api.delete(`/games/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useDeleteGames = (
  options?: UseMutationOptions<
    DeleteGamesResponse,
    AxiosError<any>,
    DeleteGamesPayload
  >
) => {
  return useMutation({
    mutationFn: deleteGamesHandler,
    ...options,
  });
};
