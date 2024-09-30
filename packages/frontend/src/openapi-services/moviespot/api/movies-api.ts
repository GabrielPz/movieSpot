/* tslint:disable */
/* eslint-disable */
/**
 * MovieSpot API
 * Especificações da API para o back-end da aplicação MovieSpot
 *
 * The version of the OpenAPI document: 1/
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ApiV1MoviesGet200ResponseInner } from '../models';
// @ts-ignore
import { ApiV1MoviesIdGet200Response } from '../models';
// @ts-ignore
import { ApiV1MoviesIdPutRequest } from '../models';
// @ts-ignore
import { ApiV1MoviesPost400Response } from '../models';
// @ts-ignore
import { ApiV1MoviesPostRequest } from '../models';
/**
 * MoviesApi - axios parameter creator
 * @export
 */
export const MoviesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get All Movies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MoviesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/movies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Delete Movie by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MoviesIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiV1MoviesIdDelete', 'id', id)
            const localVarPath = `/api/v1/movies/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Get Movie by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MoviesIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiV1MoviesIdGet', 'id', id)
            const localVarPath = `/api/v1/movies/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Update Movie by ID
         * @param {string} id 
         * @param {ApiV1MoviesIdPutRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MoviesIdPut: async (id: string, body?: ApiV1MoviesIdPutRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiV1MoviesIdPut', 'id', id)
            const localVarPath = `/api/v1/movies/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * 
         * @summary Create Movie
         * @param {ApiV1MoviesPostRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MoviesPost: async (body?: ApiV1MoviesPostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/movies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * MoviesApi - functional programming interface
 * @export
 */
export const MoviesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MoviesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get All Movies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MoviesGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ApiV1MoviesGet200ResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1MoviesGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Movie by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MoviesIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1MoviesIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Movie by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MoviesIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiV1MoviesIdGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1MoviesIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Movie by ID
         * @param {string} id 
         * @param {ApiV1MoviesIdPutRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MoviesIdPut(id: string, body?: ApiV1MoviesIdPutRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiV1MoviesGet200ResponseInner>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1MoviesIdPut(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create Movie
         * @param {ApiV1MoviesPostRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MoviesPost(body?: ApiV1MoviesPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiV1MoviesGet200ResponseInner>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1MoviesPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MoviesApi - factory interface
 * @export
 */
export const MoviesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MoviesApiFp(configuration)
    return {
        /**
         * 
         * @summary Get All Movies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MoviesGet(options?: AxiosRequestConfig): AxiosPromise<Array<ApiV1MoviesGet200ResponseInner>> {
            return localVarFp.apiV1MoviesGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Movie by ID
         * @param {MoviesApiApiV1MoviesIdDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MoviesIdDelete(requestParameters: MoviesApiApiV1MoviesIdDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.apiV1MoviesIdDelete(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Movie by ID
         * @param {MoviesApiApiV1MoviesIdGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MoviesIdGet(requestParameters: MoviesApiApiV1MoviesIdGetRequest, options?: AxiosRequestConfig): AxiosPromise<ApiV1MoviesIdGet200Response> {
            return localVarFp.apiV1MoviesIdGet(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Movie by ID
         * @param {MoviesApiApiV1MoviesIdPutRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MoviesIdPut(requestParameters: MoviesApiApiV1MoviesIdPutRequest, options?: AxiosRequestConfig): AxiosPromise<ApiV1MoviesGet200ResponseInner> {
            return localVarFp.apiV1MoviesIdPut(requestParameters.id, requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Movie
         * @param {MoviesApiApiV1MoviesPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MoviesPost(requestParameters: MoviesApiApiV1MoviesPostRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ApiV1MoviesGet200ResponseInner> {
            return localVarFp.apiV1MoviesPost(requestParameters.body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for apiV1MoviesIdDelete operation in MoviesApi.
 * @export
 * @interface MoviesApiApiV1MoviesIdDeleteRequest
 */
export interface MoviesApiApiV1MoviesIdDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof MoviesApiApiV1MoviesIdDelete
     */
    readonly id: string
}

/**
 * Request parameters for apiV1MoviesIdGet operation in MoviesApi.
 * @export
 * @interface MoviesApiApiV1MoviesIdGetRequest
 */
export interface MoviesApiApiV1MoviesIdGetRequest {
    /**
     * 
     * @type {string}
     * @memberof MoviesApiApiV1MoviesIdGet
     */
    readonly id: string
}

/**
 * Request parameters for apiV1MoviesIdPut operation in MoviesApi.
 * @export
 * @interface MoviesApiApiV1MoviesIdPutRequest
 */
export interface MoviesApiApiV1MoviesIdPutRequest {
    /**
     * 
     * @type {string}
     * @memberof MoviesApiApiV1MoviesIdPut
     */
    readonly id: string

    /**
     * 
     * @type {ApiV1MoviesIdPutRequest}
     * @memberof MoviesApiApiV1MoviesIdPut
     */
    readonly body?: ApiV1MoviesIdPutRequest
}

/**
 * Request parameters for apiV1MoviesPost operation in MoviesApi.
 * @export
 * @interface MoviesApiApiV1MoviesPostRequest
 */
export interface MoviesApiApiV1MoviesPostRequest {
    /**
     * 
     * @type {ApiV1MoviesPostRequest}
     * @memberof MoviesApiApiV1MoviesPost
     */
    readonly body?: ApiV1MoviesPostRequest
}

/**
 * MoviesApi - object-oriented interface
 * @export
 * @class MoviesApi
 * @extends {BaseAPI}
 */
export class MoviesApi extends BaseAPI {
    /**
     * 
     * @summary Get All Movies
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MoviesApi
     */
    public apiV1MoviesGet(options?: AxiosRequestConfig) {
        return MoviesApiFp(this.configuration).apiV1MoviesGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Movie by ID
     * @param {MoviesApiApiV1MoviesIdDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MoviesApi
     */
    public apiV1MoviesIdDelete(requestParameters: MoviesApiApiV1MoviesIdDeleteRequest, options?: AxiosRequestConfig) {
        return MoviesApiFp(this.configuration).apiV1MoviesIdDelete(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Movie by ID
     * @param {MoviesApiApiV1MoviesIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MoviesApi
     */
    public apiV1MoviesIdGet(requestParameters: MoviesApiApiV1MoviesIdGetRequest, options?: AxiosRequestConfig) {
        return MoviesApiFp(this.configuration).apiV1MoviesIdGet(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Movie by ID
     * @param {MoviesApiApiV1MoviesIdPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MoviesApi
     */
    public apiV1MoviesIdPut(requestParameters: MoviesApiApiV1MoviesIdPutRequest, options?: AxiosRequestConfig) {
        return MoviesApiFp(this.configuration).apiV1MoviesIdPut(requestParameters.id, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create Movie
     * @param {MoviesApiApiV1MoviesPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MoviesApi
     */
    public apiV1MoviesPost(requestParameters: MoviesApiApiV1MoviesPostRequest = {}, options?: AxiosRequestConfig) {
        return MoviesApiFp(this.configuration).apiV1MoviesPost(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}

