import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Count } from "@/types/count/count";

interface GetGamesTypeCountResponse {
  data: Count;
}

export const getGamesTypeCountHandler = async (
  token: string
): Promise<GetGamesTypeCountResponse> => {
  const { data } = await api.get<GetGamesTypeCountResponse>(
    "/game-types/count",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useGetGamesTypeCount = (
  token: string,
  options?: Partial<UseQueryOptions<GetGamesTypeCountResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["game-types"],
    queryFn: () => getGamesTypeCountHandler(token),
    ...options,
  });
};
