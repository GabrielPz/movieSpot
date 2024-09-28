
import {
    ApiResponse,
    SchemeApiFactory,
    SchemeApiGetAllSubschemesRequest
} from '@/openapi-services/cyclop';
import { UseMutationOptions, useMutation, useQuery } from '@tanstack/react-query';
import { AuthResponseDTO } from '@/entities/api-models'
import { apiCyclopV1 } from '@/lib/axios';
  
  
const { getAllSubschemes, getAllSubschemesWithoutPagination } = SchemeApiFactory(undefined, '', apiCyclopV1);

export const useGetAllSubschemes = ({
    requestParams,
    queryKey,
    pageNum
}: {
    requestParams: SchemeApiGetAllSubschemesRequest;
    queryKey: string;
    pageNum: string
}) => {
return useQuery<any>({
    queryKey: [queryKey, pageNum],
    queryFn: () => getAllSubschemes({
        ...requestParams,
    }).then((res) => res.data)
});
};
export const useGetAllSubschemesWithoutPagination = ({
    queryKey,
}: {
    queryKey: string;
}) => {
return useQuery<any>({
    queryKey: [queryKey],
    queryFn: () => getAllSubschemesWithoutPagination().then((res) => res.data)
});
};

