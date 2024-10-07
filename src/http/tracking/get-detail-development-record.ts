import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "@/lib/axios";
import { Development } from "@/types/tracking/development";

interface GetDetailDevelopmentParams {
  token: string;
  id: number;
}

interface GetDetailDevelopmentResponse {
  data: Development;
}

export const GetDetailDevelopmentHandler = async ({
  token,
  id,
}: GetDetailDevelopmentParams): Promise<GetDetailDevelopmentResponse> => {
  const { data } = await api.get<GetDetailDevelopmentResponse>(
    `/babies/development-records/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export const useGetDetailDevelopment = (
  { token, id }: GetDetailDevelopmentParams,
  options?: Partial<UseQueryOptions<GetDetailDevelopmentResponse, AxiosError>>
) => {
  return useQuery({
    queryKey: ["developmet-records-detail"],
    queryFn: () => GetDetailDevelopmentHandler({ token, id }),
    ...options,
  });
};
