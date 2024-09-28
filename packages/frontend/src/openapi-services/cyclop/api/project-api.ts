/* tslint:disable */
/* eslint-disable */
/**
 * Cyclop APIs
 * Welcome to the Cyclop API service\'s documentation. You can play around with the different API endpoints to familiarise yourself with. --- **Release notes:**   * Improvments in CI/CD   * Platform endpoint   * Update password endpoint   * Profiles Endpoint   * JWT token revogation    * Test coverage improvment 10% - 20%   * Unit tests fix 
 *
 * The version of the OpenAPI document: {version}
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Project } from '../models';
// @ts-ignore
import { ProjectApiResponse } from '../models';
// @ts-ignore
import { UpdateProject } from '../models';
/**
 * ProjectApi - axios parameter creator
 * @export
 */
export const ProjectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create new Project to cyclop backend
         * @param {Project} body Project object that needs to be added
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProject: async (body: Project, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('createProject', 'body', body)
            const localVarPath = `/document/project`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns projects
         * @summary Get all Projects
         * @param {string} pageNum page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProjects: async (pageNum: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pageNum' is not null or undefined
            assertParamExists('getAllProjects', 'pageNum', pageNum)
            const localVarPath = `/document/projects/{pageNum}`
                .replace(`{${"pageNum"}}`, encodeURIComponent(String(pageNum)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns projects
         * @summary Get all Projects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProjectsWithouPagination: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/document/projects`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Project to cyclop backend
         * @param {string} projectId projectId
         * @param {UpdateProject} body Project object that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProject: async (projectId: string, body: UpdateProject, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('updateProject', 'projectId', projectId)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('updateProject', 'body', body)
            const localVarPath = `/document/project/{projectId}`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProjectApi - functional programming interface
 * @export
 */
export const ProjectApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create new Project to cyclop backend
         * @param {Project} body Project object that needs to be added
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProject(body: Project, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createProject(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProjectApi.createProject']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns projects
         * @summary Get all Projects
         * @param {string} pageNum page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllProjects(pageNum: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectApiResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllProjects(pageNum, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProjectApi.getAllProjects']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns projects
         * @summary Get all Projects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllProjectsWithouPagination(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectApiResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllProjectsWithouPagination(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProjectApi.getAllProjectsWithouPagination']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update Project to cyclop backend
         * @param {string} projectId projectId
         * @param {UpdateProject} body Project object that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProject(projectId: string, body: UpdateProject, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProject(projectId, body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProjectApi.updateProject']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ProjectApi - factory interface
 * @export
 */
export const ProjectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectApiFp(configuration)
    return {
        /**
         * 
         * @summary Create new Project to cyclop backend
         * @param {ProjectApiCreateProjectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProject(requestParameters: ProjectApiCreateProjectRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createProject(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns projects
         * @summary Get all Projects
         * @param {ProjectApiGetAllProjectsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProjects(requestParameters: ProjectApiGetAllProjectsRequest, options?: RawAxiosRequestConfig): AxiosPromise<ProjectApiResponse> {
            return localVarFp.getAllProjects(requestParameters.pageNum, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns projects
         * @summary Get all Projects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProjectsWithouPagination(options?: RawAxiosRequestConfig): AxiosPromise<ProjectApiResponse> {
            return localVarFp.getAllProjectsWithouPagination(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Project to cyclop backend
         * @param {ProjectApiUpdateProjectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProject(requestParameters: ProjectApiUpdateProjectRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateProject(requestParameters.projectId, requestParameters.body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createProject operation in ProjectApi.
 * @export
 * @interface ProjectApiCreateProjectRequest
 */
export interface ProjectApiCreateProjectRequest {
    /**
     * Project object that needs to be added
     * @type {Project}
     * @memberof ProjectApiCreateProject
     */
    readonly body: Project
}

/**
 * Request parameters for getAllProjects operation in ProjectApi.
 * @export
 * @interface ProjectApiGetAllProjectsRequest
 */
export interface ProjectApiGetAllProjectsRequest {
    /**
     * page number
     * @type {string}
     * @memberof ProjectApiGetAllProjects
     */
    readonly pageNum: string
}

/**
 * Request parameters for updateProject operation in ProjectApi.
 * @export
 * @interface ProjectApiUpdateProjectRequest
 */
export interface ProjectApiUpdateProjectRequest {
    /**
     * projectId
     * @type {string}
     * @memberof ProjectApiUpdateProject
     */
    readonly projectId: string

    /**
     * Project object that needs to be updated
     * @type {UpdateProject}
     * @memberof ProjectApiUpdateProject
     */
    readonly body: UpdateProject
}

/**
 * ProjectApi - object-oriented interface
 * @export
 * @class ProjectApi
 * @extends {BaseAPI}
 */
export class ProjectApi extends BaseAPI {
    /**
     * 
     * @summary Create new Project to cyclop backend
     * @param {ProjectApiCreateProjectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public createProject(requestParameters: ProjectApiCreateProjectRequest, options?: RawAxiosRequestConfig) {
        return ProjectApiFp(this.configuration).createProject(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns projects
     * @summary Get all Projects
     * @param {ProjectApiGetAllProjectsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public getAllProjects(requestParameters: ProjectApiGetAllProjectsRequest, options?: RawAxiosRequestConfig) {
        return ProjectApiFp(this.configuration).getAllProjects(requestParameters.pageNum, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns projects
     * @summary Get all Projects
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public getAllProjectsWithouPagination(options?: RawAxiosRequestConfig) {
        return ProjectApiFp(this.configuration).getAllProjectsWithouPagination(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Project to cyclop backend
     * @param {ProjectApiUpdateProjectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public updateProject(requestParameters: ProjectApiUpdateProjectRequest, options?: RawAxiosRequestConfig) {
        return ProjectApiFp(this.configuration).updateProject(requestParameters.projectId, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}

