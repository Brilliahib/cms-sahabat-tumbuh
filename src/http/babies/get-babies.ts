import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Babies } from "@/types/babies/babies";

interface GetBabyResponse {
  data: Babies[];
}

export const getBabyHandler = async (
  token: string
): Promise<GetBabyResponse> => {
  const { data } = await api.get<GetBabyResponse>("/babies", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetBaby = (
  token: string,
  options?: Partial<UseQueryOptions<GetBabyResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["babies"],
    queryFn: () => getBabyHandler(token),
    ...options,
  });
};
