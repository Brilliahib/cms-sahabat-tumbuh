import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { TypeGameType } from "@/validators/games/type-games-validator";
import { Games } from "@/types/games/games";

interface TypeGameResponse {
  data: Games;
}

export const addTypeGameHandler = async (
  body: TypeGameType,
  token: string
): Promise<TypeGameResponse> => {
  const { data } = await api.post("/game-types", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useAddTypeGame = (
  options?: UseMutationOptions<TypeGameResponse, AxiosError<any>, TypeGameType>
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: TypeGameType) =>
      addTypeGameHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
