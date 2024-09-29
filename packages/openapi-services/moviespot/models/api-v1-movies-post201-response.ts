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



/**
 * 
 * @export
 * @interface ApiV1MoviesPost201Response
 */
export interface ApiV1MoviesPost201Response {
    /**
     * 
     * @type {string}
     * @memberof ApiV1MoviesPost201Response
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1MoviesPost201Response
     */
    'subTitle': string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1MoviesPost201Response
     */
    'description': string;
    /**
     * 
     * @type {number}
     * @memberof ApiV1MoviesPost201Response
     */
    'duration': number;
    /**
     * 
     * @type {string}
     * @memberof ApiV1MoviesPost201Response
     */
    'releaseDate': string;
    /**
     * 
     * @type {number}
     * @memberof ApiV1MoviesPost201Response
     */
    'minimumAge': number;
    /**
     * 
     * @type {number}
     * @memberof ApiV1MoviesPost201Response
     */
    'rentPrice': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiV1MoviesPost201Response
     */
    'category': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ApiV1MoviesPost201Response
     */
    'trailerUrl': string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1MoviesPost201Response
     */
    'movieUrl': string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1MoviesPost201Response
     */
    'imageUrl': string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1MoviesPost201Response
     */
    'director': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiV1MoviesPost201Response
     */
    'actors': Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiV1MoviesPost201Response
     */
    'producers': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ApiV1MoviesPost201Response
     */
    'studio': string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1MoviesPost201Response
     */
    'contentClassification': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiV1MoviesPost201Response
     */
    'subtitles': Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiV1MoviesPost201Response
     */
    'audioLanguages': Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ApiV1MoviesPost201Response
     */
    'rating'?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiV1MoviesPost201Response
     */
    'id': string;
}

