import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { GamesType } from "@/types/games/games";

interface GetAllTypesGameResponse {
  data: GamesType[];
}

export const getAllTypesGameHandler = async (
  token: string
): Promise<GetAllTypesGameResponse> => {
  const { data } = await api.get<GetAllTypesGameResponse>("/game-types", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetAllTypesGame = (
  token: string,
  options?: Partial<UseQueryOptions<GetAllTypesGameResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["type-games"],
    queryFn: () => getAllTypesGameHandler(token),
    ...options,
  });
};
