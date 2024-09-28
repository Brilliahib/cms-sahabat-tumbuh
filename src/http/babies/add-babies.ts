import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { Babies } from "@/types/babies/babies";
import { BabiesType } from "@/validators/babies/babies-validator";

interface BabiesResponse {
  data: Babies;
}

export const addBabiesHandler = async (
  body: BabiesType,
  token: string
): Promise<BabiesResponse> => {
  const { data } = await api.post("/babies", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useAddBabies = (
  options?: UseMutationOptions<BabiesResponse, AxiosError<any>, BabiesType>
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: BabiesType) =>
      addBabiesHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
