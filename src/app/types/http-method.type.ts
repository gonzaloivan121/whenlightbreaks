/**
 * A type representing all possible HTTP methods available to use in the format of a string.
 * 
 * @example
 * const method: HttpMethod = "GET" ;
 * @export
 * @type {HttpMethod}
 */
export type HttpMethod =
    | 'GET'
    | 'QUERY'
    | 'HEAD'
    | 'OPTIONS'
    | 'TRACE'
    | 'PUT'
    | 'DELETE'
    | 'POST'
    | 'PATCH'
    | 'CONNECT';
