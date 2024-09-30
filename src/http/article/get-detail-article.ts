import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Article } from "@/types/article/article";

interface GetDetailArticleParams {
  token: string;
  id: number;
}

interface GetDetailArticleResponse {
  data: Article;
}

export const getDetailArticleHandler = async ({
  token,
  id,
}: GetDetailArticleParams): Promise<GetDetailArticleResponse> => {
  const { data } = await api.get<GetDetailArticleResponse>(`article/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetDetailArticle = (
  { token, id }: GetDetailArticleParams,
  options?: Partial<UseQueryOptions<GetDetailArticleResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["schedule"],
    queryFn: () => getDetailArticleHandler({ token, id }),
    ...options,
  });
};
