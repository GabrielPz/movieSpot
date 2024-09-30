// import { AuthResponseDTO } from '@/entities/api-models';
import { RentedMoviesApiFactory } from "@/openapi-services/moviespot/api/rented-movies-api";
import { apiMovieStopV1 } from "@/lib/axios";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { DefaultErrorType } from "@/entities/error";

const {
  apiV1RentedMoviesGet,
  apiV1RentedMoviesIdDelete,
  apiV1RentedMoviesPost,
  apiV1RentedMoviesUserIdGet,
} = RentedMoviesApiFactory(undefined, "", apiMovieStopV1);

export const useGetAllRentedMovies = ({
  requestParams,
  options,
}: {
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof apiV1RentedMoviesGet>>["data"],
    DefaultErrorType
  >;
  requestParams: Parameters<typeof apiV1RentedMoviesGet>[0];
}) => {
  return useQuery<
    Awaited<ReturnType<typeof apiV1RentedMoviesGet>>["data"],
    DefaultErrorType
  >({
    queryKey: ["useGetAllRentedMovies"],
    queryFn: () => apiV1RentedMoviesGet(requestParams).then((res) => res.data),
    ...options,
  });
};

export const useGetRentedMoviesByUser = ({
  requestParams,
  options,
}: {
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof apiV1RentedMoviesUserIdGet>>["data"],
    DefaultErrorType
  >;
  requestParams: Parameters<typeof apiV1RentedMoviesUserIdGet>[0];
}) => {
  return useQuery<
    Awaited<ReturnType<typeof apiV1RentedMoviesUserIdGet>>["data"],
    DefaultErrorType
  >({
    queryKey: ["useGetRentedMoviesByUser"],
    queryFn: () =>
      apiV1RentedMoviesUserIdGet(requestParams).then((res) => res.data),
    ...options,
  });
};

export const useDeleteRentedMovies = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1RentedMoviesIdDelete>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1RentedMoviesIdDelete>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1RentedMoviesIdDelete>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1RentedMoviesIdDelete>[0]
  >({
    mutationKey: ["useDeleteRentedMovies"],
    mutationFn: (data) =>
      apiV1RentedMoviesIdDelete(data).then((res) => res.data),
    ...options,
  });
};
export const useAddRentedMovie = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1RentedMoviesPost>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1RentedMoviesPost>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1RentedMoviesPost>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1RentedMoviesPost>[0]
  >({
    mutationKey: ["useAddRentedMovie"],
    mutationFn: (data) => apiV1RentedMoviesPost(data).then((res) => res.data),
    ...options,
  });
};

export type RentedMovieData = Awaited<
  ReturnType<typeof apiV1RentedMoviesGet>
>["data"][number];
