import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { ScoreGames } from "@/types/games/score-games";

interface GetScoreGamesResponse {
  data: ScoreGames;
}

export const getScoreGamesHandler = async (
  token: string
): Promise<GetScoreGamesResponse> => {
  const { data } = await api.get<GetScoreGamesResponse>(
    "/games/users/total-score",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useGetScoreGames = (
  token: string,
  options?: Partial<UseQueryOptions<GetScoreGamesResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["score-games"],
    queryFn: () => getScoreGamesHandler(token),
    ...options,
  });
};
