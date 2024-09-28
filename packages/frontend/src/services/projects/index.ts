
import {
    ProjectApiFactory,
    ProjectApiGetAllProjectsRequest,
    ProjectApiCreateProjectRequest,
    ProjectApiUpdateProjectRequest,
    ApiResponse
} from '@/openapi-services/cyclop';
import { UseMutationOptions, useMutation, useQuery } from '@tanstack/react-query';
import { AuthResponseDTO } from '@/entities/api-models'
import { apiCyclopV1 } from '@/lib/axios';
  
  
const { getAllProjects, createProject, updateProject, getAllProjectsWithouPagination } = ProjectApiFactory(undefined, '', apiCyclopV1);

export const useGetAllProjects = ({
    requestParams,
    queryKey,
    pageNum
}: {
    requestParams: ProjectApiGetAllProjectsRequest;
    queryKey: string;
    pageNum: string
}) => {
return useQuery<any>({
    queryKey: [queryKey, pageNum],
    queryFn: () => getAllProjects({
        ...requestParams,
    }).then((res) => res.data.data)
});
};

export const useGetAllProjectsWithoutPagination = ({
    queryKey,
}: {
    queryKey: string;
}) => {
return useQuery<any>({
    queryKey: [queryKey],
    queryFn: () => getAllProjectsWithouPagination().then((res) => res.data.data)
});
};

export const useGetProjectById = ({
    requestParams,
    queryKey,
    pageNum
}: {
    requestParams: ProjectApiGetAllProjectsRequest;
    queryKey: string;
    pageNum: string
}) => {
return useQuery<any>({
    queryKey: [queryKey, pageNum],
    queryFn: () => getAllProjects({
        ...requestParams,
    }).then((res) => res.data.data)
});
};

export const useCreateproject = (
    baseUrl: string,
    options?: UseMutationOptions<
        ApiResponse,
        any,
        ProjectApiCreateProjectRequest
    >,
) => {
    return useMutation<
        ApiResponse,
        any,
        ProjectApiCreateProjectRequest
    >({
      mutationKey: ['useCreateproject'],
      mutationFn: (data) =>
      createProject(data, {
          baseURL: baseUrl,
        }).then((res: any) => res.data),
      ...options,
    });
};

export const useUpdateProject = (
    baseUrl: string,
    options?: UseMutationOptions<
        ApiResponse,
        any,
        ProjectApiUpdateProjectRequest
    >,
) => {
    return useMutation<
        ApiResponse,
        any,
        ProjectApiUpdateProjectRequest
    >({
      mutationKey: ['useUpdateProject'],
      mutationFn: (data) =>
      updateProject(data, {
          baseURL: baseUrl,
        }).then((res: any) => res.data),
      ...options,
    });
};
