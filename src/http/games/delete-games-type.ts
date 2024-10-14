import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { GamesType } from "@/types/games/games";

interface DeleteGamesTypePayload {
  id: number;
  token: string;
}

interface DeleteGamesTypeResponse {
  data: GamesType;
}

export const deleteGamesTypeHandler = async ({
  id,
  token,
}: DeleteGamesTypePayload): Promise<DeleteGamesTypeResponse> => {
  const { data } = await api.delete(`/game-types/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useDeleteGamesType = (
  options?: UseMutationOptions<
    DeleteGamesTypeResponse,
    AxiosError<any>,
    DeleteGamesTypePayload
  >
) => {
  return useMutation({
    mutationFn: deleteGamesTypeHandler,
    ...options,
  });
};
