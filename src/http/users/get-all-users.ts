import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { User } from "@/types/users/users";

interface GetAllUsersResponse {
  data: User[];
}

export const GetAllUsersHandler = async (
  token: string
): Promise<GetAllUsersResponse> => {
  const { data } = await api.get<GetAllUsersResponse>("/admin/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetAllUsers = (
  token: string,
  options?: Partial<UseQueryOptions<GetAllUsersResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["user-list"],
    queryFn: () => GetAllUsersHandler(token),
    ...options,
  });
};
