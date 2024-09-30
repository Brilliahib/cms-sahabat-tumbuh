import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { TypeArticleType } from "@/validators/article/type-article-validator";
import { TypesArticle } from "@/types/article/article";

interface TypeArticleResponse {
  data: TypesArticle;
}

export const addTypeArticleHandler = async (
  body: TypeArticleType,
  token: string
): Promise<TypeArticleResponse> => {
  const { data } = await api.post("/article-types", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useAddTypeArticle = (
  options?: UseMutationOptions<
    TypeArticleResponse,
    AxiosError<any>,
    TypeArticleType
  >
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: TypeArticleType) =>
      addTypeArticleHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
