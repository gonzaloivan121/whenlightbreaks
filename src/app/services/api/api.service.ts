import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpMethod } from '@app/types/http-method.type';

/**
 * Enum that holds every possible API endpoint.
 *
 * @export
 * @enum {number}
 */
export enum EndpointRoute {
    Album = 'album',
    ApiKey = 'api-key',
    Artist = 'artist',
    Concert = 'concert',
    Invoice = 'invoice',
    NavigationLink = 'navigation-link',
    Order = 'order',
    Product = 'product',
    SocialLink = 'social-link',
    Song = 'song',
    StreamingLink = 'streaming-link',
    User = 'user',
}

/**
 * Service for making requests to the API Server.
 *
 * @export
 * @class ApiService
 */
@Service()
export class ApiService {
    private readonly http: HttpClient = inject(HttpClient);
    private readonly baseUrl = 'http://localhost:3000';

    private Request<T>(method: HttpMethod, url: string, data?: Object) {
        return this.http.request<T>(method, url, {
            body: data,
            responseType: 'json',
            observe: 'body',
        });
    }

    public Create<T>(route: EndpointRoute, data: Object) {
        return this.Request<T>('POST', `${this.baseUrl}/${route}s`, data);
    }

    public Get<T>(route: EndpointRoute) {
        return this.Request<T>('GET', `${this.baseUrl}/${route}s`);
    }

    public GetById<T>(route: EndpointRoute, id: string) {
        return this.Request<T>('GET', `${this.baseUrl}/${route}s/${id}`);
    }

    public GetByDependantId<T>(
        route: EndpointRoute,
        dependantRoute: EndpointRoute,
        dependantId: string,
    ) {
        return this.Request<T>('GET', `${this.baseUrl}/${route}s/${dependantRoute}/${dependantId}`);
    }

    public GetByField<T>(route: EndpointRoute, fieldName: string, fieldValue: string) {
        return this.Request<T>('GET', `${this.baseUrl}/${route}s/${fieldName}/${fieldValue}`);
    }

    public Update<T>(route: EndpointRoute, id: string, data: Object) {
        return this.Request<T>('PUT', `${this.baseUrl}/${route}s/${id}`, data);
    }

    public Delete(route: EndpointRoute, id: string) {
        this.Request('DELETE', `${this.baseUrl}/${route}s/${id}`);
    }
}
