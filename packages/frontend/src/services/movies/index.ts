// import { AuthResponseDTO } from '@/entities/api-models';
import { MoviesApiFactory } from "@/openapi-services/moviespot/api/movies-api";
import { apiMovieStopV1 } from "@/lib/axios";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { DefaultErrorType } from "@/entities/error";

const {
  apiV1MoviesGet,
  apiV1MoviesIdDelete,
  apiV1MoviesIdGet,
  apiV1MoviesIdPut,
  apiV1MoviesPost,
} = MoviesApiFactory(undefined, "", apiMovieStopV1);

export const useGetMovies = ({
  requestParams,
  options,
}: {
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof apiV1MoviesGet>>["data"],
    DefaultErrorType
  >;
  requestParams: Parameters<typeof apiV1MoviesGet>[0];
}) => {
  return useQuery<
    Awaited<ReturnType<typeof apiV1MoviesGet>>["data"],
    DefaultErrorType
  >({
    queryKey: ["useGetMovies"],
    queryFn: () => apiV1MoviesGet(requestParams).then((res) => res.data),
    ...options,
  });
};

export const useGetMovieByID = ({
  requestParams,
  options,
}: {
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof apiV1MoviesIdGet>>["data"],
    DefaultErrorType
  >;
  requestParams: Parameters<typeof apiV1MoviesIdGet>[0];
}) => {
  return useQuery<
    Awaited<ReturnType<typeof apiV1MoviesIdGet>>["data"],
    DefaultErrorType
  >({
    queryKey: ["useGetMovieByID"],
    queryFn: () => apiV1MoviesIdGet(requestParams).then((res) => res.data),
    ...options,
  });
};

export const useDeleteMovies = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1MoviesIdDelete>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1MoviesIdDelete>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1MoviesIdDelete>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1MoviesIdDelete>[0]
  >({
    mutationKey: ["useDeleteMovies"],
    mutationFn: (data) => apiV1MoviesIdDelete(data).then((res) => res.data),
    ...options,
  });
};
export const useUpdateMovie = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1MoviesIdPut>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1MoviesIdPut>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1MoviesIdPut>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1MoviesIdPut>[0]
  >({
    mutationKey: ["useUpdateMovie"],
    mutationFn: (data) => apiV1MoviesIdPut(data).then((res) => res.data),
    ...options,
  });
};
export const useCreateMovie = (
  baseUrl?: string,
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof apiV1MoviesPost>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1MoviesPost>[0]
  >
) => {
  return useMutation<
    Awaited<ReturnType<typeof apiV1MoviesPost>>["data"],
    DefaultErrorType,
    Parameters<typeof apiV1MoviesPost>[0]
  >({
    mutationKey: ["useCreateMovie"],
    mutationFn: (data) => apiV1MoviesPost(data).then((res) => res.data),
    ...options,
  });
};

export type MovieData = Awaited<
  ReturnType<typeof apiV1MoviesGet>
>["data"][number];

export type DetaileMovieData = Awaited<
  ReturnType<typeof useGetMovieByID>
>["data"];
