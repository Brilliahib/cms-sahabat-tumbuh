import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { RankUser } from "@/types/users/users";

interface GetRankUserResponse {
  data: RankUser;
}

export const getRankUserHandler = async (
  token: string
): Promise<GetRankUserResponse> => {
  const { data } = await api.get<GetRankUserResponse>("/user/rank", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetRankUser = (
  token: string,
  options?: Partial<UseQueryOptions<GetRankUserResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["rank-user"],
    queryFn: () => getRankUserHandler(token),
    ...options,
  });
};
