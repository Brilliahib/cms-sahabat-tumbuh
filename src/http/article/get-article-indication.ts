import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Article } from "@/types/article/article";

interface GetAllArticleIndicationResponse {
  data: Article[];
}

export const GetAllArticleIndicationHandler = async (
  token: string
): Promise<GetAllArticleIndicationResponse> => {
  const { data } = await api.get<GetAllArticleIndicationResponse>(
    "/articles/2",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useGetAllArticleIndication = (
  token: string,
  options?: Partial<
    UseQueryOptions<GetAllArticleIndicationResponse, AxiosError>
  >
) => {
  return useQuery({
    queryKey: ["article-indication-list"],
    queryFn: () => GetAllArticleIndicationHandler(token),
    ...options,
  });
};
