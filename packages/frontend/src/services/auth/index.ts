import {
  AuthApiFactory,
  AuthApiGenerateAuthTokenRequest,
} from '@/openapi-services/cyclop';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AuthResponseDTO } from '@/entities/api-models'
import { apiCyclopV1 } from '@/lib/axios';


const { generateAuthToken } = AuthApiFactory(undefined, '', apiCyclopV1);

export const useLogin = (
  baseUrl: string,
  options?: UseMutationOptions<
    AuthResponseDTO,
    any,
    AuthApiGenerateAuthTokenRequest
  >,
) => {
  return useMutation<
    AuthResponseDTO,
    any,
    AuthApiGenerateAuthTokenRequest
  >({
    mutationKey: ['useLogin'],
    mutationFn: (data) =>
    generateAuthToken(data, {
        baseURL: baseUrl,
      }).then((res: any) => res.data),
    ...options,
  });
};


