import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Development } from "@/types/tracking/development";

interface getDevelopmentResponse {
  data: Development[];
}

export const getDevelopmentHandler = async (
  token: string
): Promise<getDevelopmentResponse> => {
  const { data } = await api.get<getDevelopmentResponse>(
    "/babies/development-records",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useGetDevelopment = (
  token: string,
  options?: Partial<UseQueryOptions<getDevelopmentResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["development-records"],
    queryFn: () => getDevelopmentHandler(token),
    ...options,
  });
};
