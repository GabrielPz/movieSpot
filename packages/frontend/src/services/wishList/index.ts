// import { AuthResponseDTO } from '@/entities/api-models';
import { WishListApiFactory } from "@/openapi-services/moviespot/api/wish-list-api";
import { apiMovieStopV1 } from "@/lib/axios";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { DefaultErrorType } from "@/entities/error";

const {
  apiV1WishListGet,
  apiV1WishListIdDelete,
  apiV1WishListPost,
  apiV1WishListUserIdGet,
  apiV1WishListUserIdMovieIdDelete,
} = WishListApiFactory(undefined, "", apiMovieStopV1);

export const useGetAllWishList = ({
  requestParams,
  options,
}: {
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof apiV1WishListGet>>["data"],
    DefaultErrorType
  >;
  requestParams: Parameters<typeof apiV1WishListGet>[0];
}) => {
  return useQuery<
    Awaited<ReturnType<typeof apiV1WishListGet>>["data"],
    DefaultErrorType
  >({
    queryKey: ["useGetAllWishList"],
    queryFn: () => apiV1WishListGet(requestParams).then((res) => res.data),
    ...options,
  });
};

export const useGetUserWishList = ({
  requestParams,
  options,
}: {
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof apiV1WishListUserIdGet>>["data"],
    DefaultErrorType
  >;
  requestParams: Parameters<typeof apiV1WishListUserIdGet>[0];
}) => {
  return useQuery<
    Awaited<ReturnType<typeof apiV1WishListUserIdGet>>["data"],
    DefaultErrorType
  >({
    queryKey: ["useGetUserWishList"],
    queryFn: () =>
      apiV1WishListUserIdGet(requestParams).then((res) => res.data),
    ...options,
  });
};

export const useDeleteWishList = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1WishListIdDelete>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1WishListIdDelete>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1WishListIdDelete>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1WishListIdDelete>[0]
  >({
    mutationKey: ["useDeleteWishList"],
    mutationFn: (data) => apiV1WishListIdDelete(data).then((res) => res.data),
    ...options,
  });
};
export const useAddWishList = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1WishListPost>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1WishListPost>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1WishListPost>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1WishListPost>[0]
  >({
    mutationKey: ["useAddWishList"],
    mutationFn: (data) => apiV1WishListPost(data).then((res) => res.data),
    ...options,
  });
};

export const useRemoveWishList = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1WishListUserIdMovieIdDelete>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1WishListUserIdMovieIdDelete>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1WishListUserIdMovieIdDelete>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1WishListUserIdMovieIdDelete>[0]
  >({
    mutationKey: ["useRemoveWishList"],
    mutationFn: (data) =>
      apiV1WishListUserIdMovieIdDelete(data).then((res) => res.data),
    ...options,
  });
};

export type WishListData = Awaited<
  ReturnType<typeof apiV1WishListGet>
>["data"][number];
