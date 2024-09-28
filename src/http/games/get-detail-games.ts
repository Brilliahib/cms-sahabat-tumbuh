import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { DetailGames } from "@/types/games/games";

interface GetDetailGamesParams {
  token: string;
  id: number;
}

interface GetDetailGamesResponse {
  data: DetailGames;
}

export const getDetailGamesHandler = async ({
  token,
  id,
}: GetDetailGamesParams): Promise<GetDetailGamesResponse> => {
  const { data } = await api.get<GetDetailGamesResponse>(`games/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetDetailGames = (
  { token, id }: GetDetailGamesParams,
  options?: Partial<UseQueryOptions<GetDetailGamesResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["schedule"],
    queryFn: () => getDetailGamesHandler({ token, id }),
    ...options,
  });
};
