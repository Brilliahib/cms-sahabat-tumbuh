import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Leaderboard } from "@/types/games/leaderboard-games";

interface GetLeaderboardResponse {
  data: Leaderboard[];
}

export const getLeaderboardHandler = async (
  token: string
): Promise<GetLeaderboardResponse> => {
  const { data } = await api.get<GetLeaderboardResponse>("/leaderboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetLeaderboard = (
  token: string,
  options?: Partial<UseQueryOptions<GetLeaderboardResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["leaderboard"],
    queryFn: () => getLeaderboardHandler(token),
    ...options,
  });
};
