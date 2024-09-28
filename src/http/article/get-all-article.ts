import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Article } from "@/types/article/article";

interface GetArticleResponse {
  data: Article[];
}

export const getArticleHandler = async (
  token: string
): Promise<GetArticleResponse> => {
  const { data } = await api.get<GetArticleResponse>("/articles", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetArticle = (
  token: string,
  options?: Partial<UseQueryOptions<GetArticleResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["article-list"],
    queryFn: () => getArticleHandler(token),
    ...options,
  });
};
