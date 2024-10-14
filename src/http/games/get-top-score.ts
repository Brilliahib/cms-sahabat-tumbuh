import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Leaderboard } from "@/types/games/leaderboard-games";

interface GetTopThreeResponse {
  data: Leaderboard[];
}

export const getTopThreeHandler = async (
  token: string
): Promise<GetTopThreeResponse> => {
  const { data } = await api.get<GetTopThreeResponse>("/top", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetTopThree = (
  token: string,
  options?: Partial<UseQueryOptions<GetTopThreeResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["top-list"],
    queryFn: () => getTopThreeHandler(token),
    ...options,
  });
};
