import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Growth } from "@/types/tracking/growth";

interface getGrowthResponse {
  data: Growth[];
}

export const getGrowthHandler = async (
  token: string
): Promise<getGrowthResponse> => {
  const { data } = await api.get<getGrowthResponse>("/babies/growth", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const usegetGrowth = (
  token: string,
  options?: Partial<UseQueryOptions<getGrowthResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["growth-records"],
    queryFn: () => getGrowthHandler(token),
    ...options,
  });
};
