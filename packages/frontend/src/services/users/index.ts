// import { AuthResponseDTO } from '@/entities/api-models';
import { UsersApiFactory } from "@/openapi-services/moviespot/api/users-api";
import { apiMovieStopV1 } from "@/lib/axios";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { DefaultErrorType } from "@/entities/error";

const {
  apiV1UsersGet,
  apiV1UsersIdDelete,
  apiV1UsersIdPut,
  apiV1UsersPost,
  apiV1UsersIdGet,
} = UsersApiFactory(undefined, "", apiMovieStopV1);

export const useGetAllUsers = ({
  requestParams,
  options,
}: {
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof apiV1UsersGet>>["data"],
    DefaultErrorType
  >;
  requestParams: Parameters<typeof apiV1UsersGet>[0];
}) => {
  return useQuery<
    Awaited<ReturnType<typeof apiV1UsersGet>>["data"],
    DefaultErrorType
  >({
    queryKey: ["useGetAllUsers"],
    queryFn: () => apiV1UsersGet(requestParams).then((res) => res.data),
    ...options,
  });
};

export const useGetUserById = ({
  requestParams,
  options,
}: {
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof apiV1UsersIdGet>>["data"],
    DefaultErrorType
  >;
  requestParams: Parameters<typeof apiV1UsersIdGet>[0];
}) => {
  return useQuery<
    Awaited<ReturnType<typeof apiV1UsersIdGet>>["data"],
    DefaultErrorType
  >({
    queryKey: ["useGetUserById"],
    queryFn: () => apiV1UsersIdGet(requestParams).then((res) => res.data),
    ...options,
  });
};

export const useDeleteUser = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1UsersIdDelete>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1UsersIdDelete>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1UsersIdDelete>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1UsersIdDelete>[0]
  >({
    mutationKey: ["useDeleteUser"],
    mutationFn: (data) => apiV1UsersIdDelete(data).then((res) => res.data),
    ...options,
  });
};
export const useCreateUser = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1UsersPost>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1UsersPost>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1UsersPost>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1UsersPost>[0]
  >({
    mutationKey: ["useCreateUser"],
    mutationFn: (data) => apiV1UsersPost(data).then((res) => res.data),
    ...options,
  });
};

export const useUpdateUser = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1UsersIdPut>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1UsersIdPut>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1UsersIdPut>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1UsersIdPut>[0]
  >({
    mutationKey: ["useUpdateUser"],
    mutationFn: (data) => apiV1UsersIdPut(data).then((res) => res.data),
    ...options,
  });
};

export type UserData = Awaited<
  ReturnType<typeof apiV1UsersGet>
>["data"][number];
