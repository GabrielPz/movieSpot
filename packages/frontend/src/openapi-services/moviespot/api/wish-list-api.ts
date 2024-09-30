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
import { ApiV1MoviesPost400Response } from '../models';
// @ts-ignore
import { ApiV1WishListPost201Response } from '../models';
// @ts-ignore
import { ApiV1WishListPostRequest } from '../models';
/**
 * WishListApi - axios parameter creator
 * @export
 */
export const WishListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get All Wish Lists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1WishListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/wish-list`;
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
         * @summary Remove Wish List by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1WishListIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiV1WishListIdDelete', 'id', id)
            const localVarPath = `/api/v1/wish-list/{id}`
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
         * @summary Add to Wish List
         * @param {ApiV1WishListPostRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1WishListPost: async (body?: ApiV1WishListPostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/wish-list`;
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
        /**
         * 
         * @summary Get User\'s Wish List
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1WishListUserIdGet: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('apiV1WishListUserIdGet', 'userId', userId)
            const localVarPath = `/api/v1/wish-list/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
         * @summary Remove from Wish List
         * @param {string} userId 
         * @param {string} movieId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1WishListUserIdMovieIdDelete: async (userId: string, movieId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('apiV1WishListUserIdMovieIdDelete', 'userId', userId)
            // verify required parameter 'movieId' is not null or undefined
            assertParamExists('apiV1WishListUserIdMovieIdDelete', 'movieId', movieId)
            const localVarPath = `/api/v1/wish-list/{userId}/{movieId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"movieId"}}`, encodeURIComponent(String(movieId)));
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
    }
};

/**
 * WishListApi - functional programming interface
 * @export
 */
export const WishListApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WishListApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get All Wish Lists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1WishListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<object>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1WishListGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Remove Wish List by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1WishListIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1WishListIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Add to Wish List
         * @param {ApiV1WishListPostRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1WishListPost(body?: ApiV1WishListPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiV1WishListPost201Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1WishListPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get User\'s Wish List
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1WishListUserIdGet(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<object>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1WishListUserIdGet(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Remove from Wish List
         * @param {string} userId 
         * @param {string} movieId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1WishListUserIdMovieIdDelete(userId: string, movieId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1WishListUserIdMovieIdDelete(userId, movieId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WishListApi - factory interface
 * @export
 */
export const WishListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WishListApiFp(configuration)
    return {
        /**
         * 
         * @summary Get All Wish Lists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1WishListGet(options?: AxiosRequestConfig): AxiosPromise<Array<object>> {
            return localVarFp.apiV1WishListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Remove Wish List by ID
         * @param {WishListApiApiV1WishListIdDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1WishListIdDelete(requestParameters: WishListApiApiV1WishListIdDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.apiV1WishListIdDelete(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Add to Wish List
         * @param {WishListApiApiV1WishListPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1WishListPost(requestParameters: WishListApiApiV1WishListPostRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ApiV1WishListPost201Response> {
            return localVarFp.apiV1WishListPost(requestParameters.body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get User\'s Wish List
         * @param {WishListApiApiV1WishListUserIdGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1WishListUserIdGet(requestParameters: WishListApiApiV1WishListUserIdGetRequest, options?: AxiosRequestConfig): AxiosPromise<Array<object>> {
            return localVarFp.apiV1WishListUserIdGet(requestParameters.userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Remove from Wish List
         * @param {WishListApiApiV1WishListUserIdMovieIdDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1WishListUserIdMovieIdDelete(requestParameters: WishListApiApiV1WishListUserIdMovieIdDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.apiV1WishListUserIdMovieIdDelete(requestParameters.userId, requestParameters.movieId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for apiV1WishListIdDelete operation in WishListApi.
 * @export
 * @interface WishListApiApiV1WishListIdDeleteRequest
 */
export interface WishListApiApiV1WishListIdDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof WishListApiApiV1WishListIdDelete
     */
    readonly id: string
}

/**
 * Request parameters for apiV1WishListPost operation in WishListApi.
 * @export
 * @interface WishListApiApiV1WishListPostRequest
 */
export interface WishListApiApiV1WishListPostRequest {
    /**
     * 
     * @type {ApiV1WishListPostRequest}
     * @memberof WishListApiApiV1WishListPost
     */
    readonly body?: ApiV1WishListPostRequest
}

/**
 * Request parameters for apiV1WishListUserIdGet operation in WishListApi.
 * @export
 * @interface WishListApiApiV1WishListUserIdGetRequest
 */
export interface WishListApiApiV1WishListUserIdGetRequest {
    /**
     * 
     * @type {string}
     * @memberof WishListApiApiV1WishListUserIdGet
     */
    readonly userId: string
}

/**
 * Request parameters for apiV1WishListUserIdMovieIdDelete operation in WishListApi.
 * @export
 * @interface WishListApiApiV1WishListUserIdMovieIdDeleteRequest
 */
export interface WishListApiApiV1WishListUserIdMovieIdDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof WishListApiApiV1WishListUserIdMovieIdDelete
     */
    readonly userId: string

    /**
     * 
     * @type {string}
     * @memberof WishListApiApiV1WishListUserIdMovieIdDelete
     */
    readonly movieId: string
}

/**
 * WishListApi - object-oriented interface
 * @export
 * @class WishListApi
 * @extends {BaseAPI}
 */
export class WishListApi extends BaseAPI {
    /**
     * 
     * @summary Get All Wish Lists
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WishListApi
     */
    public apiV1WishListGet(options?: AxiosRequestConfig) {
        return WishListApiFp(this.configuration).apiV1WishListGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Remove Wish List by ID
     * @param {WishListApiApiV1WishListIdDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WishListApi
     */
    public apiV1WishListIdDelete(requestParameters: WishListApiApiV1WishListIdDeleteRequest, options?: AxiosRequestConfig) {
        return WishListApiFp(this.configuration).apiV1WishListIdDelete(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Add to Wish List
     * @param {WishListApiApiV1WishListPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WishListApi
     */
    public apiV1WishListPost(requestParameters: WishListApiApiV1WishListPostRequest = {}, options?: AxiosRequestConfig) {
        return WishListApiFp(this.configuration).apiV1WishListPost(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get User\'s Wish List
     * @param {WishListApiApiV1WishListUserIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WishListApi
     */
    public apiV1WishListUserIdGet(requestParameters: WishListApiApiV1WishListUserIdGetRequest, options?: AxiosRequestConfig) {
        return WishListApiFp(this.configuration).apiV1WishListUserIdGet(requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Remove from Wish List
     * @param {WishListApiApiV1WishListUserIdMovieIdDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WishListApi
     */
    public apiV1WishListUserIdMovieIdDelete(requestParameters: WishListApiApiV1WishListUserIdMovieIdDeleteRequest, options?: AxiosRequestConfig) {
        return WishListApiFp(this.configuration).apiV1WishListUserIdMovieIdDelete(requestParameters.userId, requestParameters.movieId, options).then((request) => request(this.axios, this.basePath));
    }
}

