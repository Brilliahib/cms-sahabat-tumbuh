import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Games } from "@/types/games/games";

interface GetGamesResponse {
  data: Games[];
}

export const getGamesHandler = async (
  token: string
): Promise<GetGamesResponse> => {
  const { data } = await api.get<GetGamesResponse>("/games", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetGames = (
  token: string,
  options?: Partial<UseQueryOptions<GetGamesResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["games-list"],
    queryFn: () => getGamesHandler(token),
    ...options,
  });
};
