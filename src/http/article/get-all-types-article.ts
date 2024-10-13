import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { TypesArticle } from "@/types/article/article";

interface GetAllTypesArticleResponse {
  data: TypesArticle[];
}

export const getAllTypesArticleHandler = async (
  token: string
): Promise<GetAllTypesArticleResponse> => {
  const { data } = await api.get<GetAllTypesArticleResponse>("/article-types", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetAllTypesArticle = (
  token: string,
  options?: Partial<UseQueryOptions<GetAllTypesArticleResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["type-articles"],
    queryFn: () => getAllTypesArticleHandler(token),
    ...options,
  });
};
