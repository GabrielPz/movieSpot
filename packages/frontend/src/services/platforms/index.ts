import {
    PlatformApiFactory,
    PlatformApiGetAllPlatformsRequest,
    ApiResponse,
    PlatformApiCreatePlatformRequest,
    PlatformApiUpdatePlatformRequest
} from '@/openapi-services/cyclop';
import { UseMutationOptions, useMutation, useQuery } from '@tanstack/react-query';
import { AuthResponseDTO } from '@/entities/api-models'
import { apiCyclopV1 } from '@/lib/axios';
  
  
const { getAllPlatforms, createPlatform, updatePlatform, getAllPlatformsWithoutPagination } = PlatformApiFactory(undefined, '', apiCyclopV1);

export const useGetAllPlatforms = ({
    requestParams,
    queryKey,
    pageNum
}: {
    requestParams: PlatformApiGetAllPlatformsRequest;
    queryKey: string;
    pageNum: string
}) => {
return useQuery<any>({
    queryKey: [queryKey, pageNum],
    queryFn: () => getAllPlatforms({
        ...requestParams,
    }).then((res) => res.data.data)
});
};
export const useGetAllPlatformsWithoutPagination = ({
    queryKey,
}: {
    queryKey: string;
}) => {
return useQuery<any>({
    queryKey: [queryKey],
    queryFn: () => getAllPlatformsWithoutPagination().then((res) => res.data.data)
});
};

export const UseCreatePlatform = (
    baseUrl: string,
    options?: UseMutationOptions<
        ApiResponse,
        any,
        PlatformApiCreatePlatformRequest
    >,
) => {
    return useMutation<
        ApiResponse,
        any,
        PlatformApiCreatePlatformRequest
    >({
      mutationKey: ['useCreatePlatform'],
      mutationFn: (data) =>
      createPlatform(data, {
          baseURL: baseUrl,
        }).then((res: any) => res.data),
      ...options,
    });
};
export const useUpdatePlatform = (
    baseUrl: string,
    options?: UseMutationOptions<
        ApiResponse,
        any,
        PlatformApiUpdatePlatformRequest
    >,
) => {
    return useMutation<
        ApiResponse,
        any,
        PlatformApiUpdatePlatformRequest
    >({
      mutationKey: ['useUpdatePlatform'],
      mutationFn: (data) =>
      updatePlatform(data, {
          baseURL: baseUrl,
        }).then((res: any) => res.data),
      ...options,
    });
};

