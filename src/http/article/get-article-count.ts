import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Count } from "@/types/count/count";

interface GetArticleCountResponse {
  data: Count;
}

export const getArticleCountHandler = async (
  token: string
): Promise<GetArticleCountResponse> => {
  const { data } = await api.get<GetArticleCountResponse>("/articles/count", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetArticleCount = (
  token: string,
  options?: Partial<UseQueryOptions<GetArticleCountResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["article-count"],
    queryFn: () => getArticleCountHandler(token),
    ...options,
  });
};
