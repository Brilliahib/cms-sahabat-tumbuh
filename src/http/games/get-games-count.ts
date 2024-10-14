import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Count } from "@/types/count/count";

interface GetGamesCountResponse {
  data: Count;
}

export const getGamesCountHandler = async (
  token: string
): Promise<GetGamesCountResponse> => {
  const { data } = await api.get<GetGamesCountResponse>("/games/count", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetGamesCount = (
  token: string,
  options?: Partial<UseQueryOptions<GetGamesCountResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["games-count"],
    queryFn: () => getGamesCountHandler(token),
    ...options,
  });
};
