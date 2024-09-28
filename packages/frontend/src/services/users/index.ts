
import {
    AuthApiFactory,
    USersApiFactory,
    USersApiGetAllUsersRequest,
    AuthApiRegisterUserRequest,
    AuthApiUpdatePasswordRequest,
    ApiResponse
} from '@/openapi-services/cyclop';
import { UseMutationOptions, useMutation, useQuery } from '@tanstack/react-query';
import { apiCyclopV1 } from '@/lib/axios';
import { ApiError } from '@/entities/api-models';
  
  
const { getAllUsers } = USersApiFactory(undefined, '', apiCyclopV1);
const { registerUser, updatePassword } = AuthApiFactory(undefined, '', apiCyclopV1);

export const useGetAllUsers = ({
    requestParams,
    queryKey,
    pageNum
}: {
    requestParams: USersApiGetAllUsersRequest;
    queryKey: string;
    pageNum: string
}) => {
return useQuery<any>({
    queryKey: [queryKey, pageNum],
    queryFn: () => getAllUsers({
        ...requestParams,
    }).then((res) => res.data.data)
});
};

export const useCreateUser = (
    baseUrl: string,
    options?: UseMutationOptions<
        ApiResponse,
        any,
        AuthApiRegisterUserRequest
    >,
) => {
    return useMutation<
        ApiResponse,
        any,
        AuthApiRegisterUserRequest
    >({
      mutationKey: ['useCreateUser'],
      mutationFn: (data) =>
      registerUser(data, {
          baseURL: baseUrl,
        }).then((res: any) => res.data),
      ...options,
    });
};

export const useUpdatePassword = (
    baseUrl: string,
    options?: UseMutationOptions<
        ApiResponse,
        ApiError,
        AuthApiUpdatePasswordRequest
    >,
) => {
    return useMutation<
        ApiResponse,
        ApiError,
        AuthApiUpdatePasswordRequest
    >({
      mutationKey: ['useUpdatePassword'],
      mutationFn: (data) =>
      updatePassword(data, {
          baseURL: baseUrl,
        }).then((res: any) => res.data),
      ...options,
    });
};

