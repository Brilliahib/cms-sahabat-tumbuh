import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { GrowthRecordType } from "@/validators/tracking/growth-validator";
import { Growth } from "@/types/tracking/growth";

interface GrowthRecordResponse {
  data: Growth;
}

export const addGrowthRecordHandler = async (
  body: GrowthRecordType,
  token: string
): Promise<GrowthRecordResponse> => {
  const { data } = await api.put("/babies", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useAddGrowthRecord = (
  options?: UseMutationOptions<
    GrowthRecordResponse,
    AxiosError<any>,
    GrowthRecordType
  >
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: GrowthRecordType) =>
      addGrowthRecordHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
