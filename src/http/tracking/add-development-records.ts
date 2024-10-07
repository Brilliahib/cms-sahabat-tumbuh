import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { DevelopmentRecordType } from "@/validators/tracking/development-validator";
import { Development } from "@/types/tracking/development";

interface DevelopmentRecordResponse {
  data: Development;
}

export const addDevelopmentRecordHandler = async (
  body: DevelopmentRecordType,
  token: string
): Promise<DevelopmentRecordResponse> => {
  const { data } = await api.post("/babies/development-records", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useAddDevelopmentRecord = (
  options?: UseMutationOptions<
    DevelopmentRecordResponse,
    AxiosError<any>,
    DevelopmentRecordType
  >
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: DevelopmentRecordType) =>
      addDevelopmentRecordHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
