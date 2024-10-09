import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { profileSettingType } from "@/validators/settings/settings-validator";
import { Auth } from "@/types/auth/auth";

interface SettingProfileResponse {
  data: Auth;
}

export const settingProfileHandler = async (
  body: profileSettingType,
  token: string
): Promise<SettingProfileResponse> => {
  const { data } = await api.post("/auth/update-account", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useSettingProfile = (
  options?: UseMutationOptions<
    SettingProfileResponse,
    AxiosError<any>,
    profileSettingType
  >
) => {
  const { data: sessionData } = useSession();
  return useMutation({
    mutationFn: (body: profileSettingType) =>
      settingProfileHandler(body, sessionData?.access_token as string),
    ...options,
  });
};
