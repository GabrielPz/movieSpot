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


// May contain unused imports in some cases
// @ts-ignore
import { ApiV1MoviesPostRequest } from './api-v1-movies-post-request';

/**
 * 
 * @export
 * @interface ApiV1RentedMoviesGet200ResponseInner
 */
export interface ApiV1RentedMoviesGet200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof ApiV1RentedMoviesGet200ResponseInner
     */
    'userId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1RentedMoviesGet200ResponseInner
     */
    'movieId'?: string;
    /**
     * 
     * @type {any}
     * @memberof ApiV1RentedMoviesGet200ResponseInner
     */
    'dueDate'?: any;
    /**
     * 
     * @type {string}
     * @memberof ApiV1RentedMoviesGet200ResponseInner
     */
    'id'?: string;
    /**
     * 
     * @type {ApiV1MoviesPostRequest}
     * @memberof ApiV1RentedMoviesGet200ResponseInner
     */
    'movie'?: ApiV1MoviesPostRequest;
}

