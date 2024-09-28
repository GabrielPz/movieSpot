import {
    ProfilesApiFactory,
    ProfilesApiGetAllProfilesRequest,
    ProfileApiFactory,
    ApiResponse,
    ProfileApiCreateProfileRequest,
    ProfileApiUpdateProfileRequest
} from '@/openapi-services/cyclop';
import { UseMutationOptions, useMutation, useQuery } from '@tanstack/react-query';
import { AuthResponseDTO } from '@/entities/api-models'
import { apiCyclopV1 } from '@/lib/axios';
  
  
const { getAllProfiles, getAllProfilesWithoutPagination } = ProfilesApiFactory(undefined, '', apiCyclopV1);
const { createProfile, updateProfile } = ProfileApiFactory(undefined, '', apiCyclopV1);

export const useGetAllProfiles = ({
    requestParams,
    queryKey,
    pageNum
}: {
    requestParams: ProfilesApiGetAllProfilesRequest;
    queryKey: string;
    pageNum: string
}) => {
return useQuery<any>({
    queryKey: [queryKey, pageNum],
    queryFn: () => getAllProfiles({
        ...requestParams,
    }).then((res) => res.data.data)
});
};
export const useGetAllProfilesWithoutPagination = ({
    queryKey,
}: {
    queryKey: string;
}) => {
return useQuery<any>({
    queryKey: [queryKey],
    queryFn: () => getAllProfilesWithoutPagination().then((res) => res.data.data)
});
};

export const useCreateProfile = (
    baseUrl: string,
    options?: UseMutationOptions<
        ApiResponse,
        any,
        ProfileApiCreateProfileRequest
    >,
) => {
    return useMutation<
        ApiResponse,
        any,
        ProfileApiCreateProfileRequest
    >({
      mutationKey: ['useCreateProfile'],
      mutationFn: (data) =>
      createProfile(data, {
          baseURL: baseUrl,
        }).then((res: any) => res.data),
      ...options,
    });
};

export const useUpdateProfile = (
    baseUrl: string,
    options?: UseMutationOptions<
        ApiResponse,
        any,
        ProfileApiUpdateProfileRequest
    >,
) => {
    return useMutation<
        ApiResponse,
        any,
        ProfileApiUpdateProfileRequest
    >({
      mutationKey: ['useUpdateProfile'],
      mutationFn: (data) =>
      updateProfile(data, {
          baseURL: baseUrl,
        }).then((res: any) => res.data),
      ...options,
    });
};