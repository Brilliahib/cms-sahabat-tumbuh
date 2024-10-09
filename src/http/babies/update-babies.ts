import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { Auth } from "@/types/auth/auth";
import { BabiesType } from "@/validators/babies/babies-validator";

interface UpdateBabiesResponse {
  data: Auth;
}

export const updateBabiesHandler = async (
  body: BabiesType,
  token: string
): Promise<UpdateBabiesResponse> => {
  const { data } = await api.post("/babies", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useUpdateBabies = (
  options?: UseMutationOptions<
    UpdateBabiesResponse,
    AxiosError<any>,
    BabiesType
  >
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: BabiesType) =>
      updateBabiesHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
