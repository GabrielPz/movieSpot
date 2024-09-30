// import { AuthResponseDTO } from '@/entities/api-models';
import { AuthApiFactory } from "@/openapi-services/moviespot/api/auth-api";
import { apiMovieStopV1 } from "@/lib/axios";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { DefaultErrorType } from "@/entities/error";

const { apiV1CurrentGet, apiV1LoginPost } = AuthApiFactory(
  undefined,
  "",
  apiMovieStopV1
);

export const useGetCurrentUser = ({
  requestParams,
  options,
}: {
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof apiV1CurrentGet>>["data"],
    DefaultErrorType
  >;
  requestParams: Parameters<typeof apiV1CurrentGet>[0];
}) => {
  return useQuery<
    Awaited<ReturnType<typeof apiV1CurrentGet>>["data"],
    DefaultErrorType
  >({
    queryKey: ["useGetCurrentUser"],
    queryFn: () => apiV1CurrentGet(requestParams).then((res) => res.data),
    ...options,
  });
};

export const useLogin = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1LoginPost>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1LoginPost>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1LoginPost>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1LoginPost>[0]
  >({
    mutationKey: ["useLogin"],
    mutationFn: (data) => apiV1LoginPost(data).then((res) => res.data),
    ...options,
  });
};

export type UserData = Awaited<ReturnType<typeof apiV1CurrentGet>>["data"];
