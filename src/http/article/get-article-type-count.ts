import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Count } from "@/types/count/count";

interface GetArticleTypeCountResponse {
  data: Count;
}

export const getArticleTypeCountHandler = async (
  token: string
): Promise<GetArticleTypeCountResponse> => {
  const { data } = await api.get<GetArticleTypeCountResponse>(
    "/article-types/count",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useGetArticleTypeCount = (
  token: string,
  options?: Partial<UseQueryOptions<GetArticleTypeCountResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["article-type-count"],
    queryFn: () => getArticleTypeCountHandler(token),
    ...options,
  });
};
