import { inject, Service } from '@angular/core';

import { Link, CreateLink, DeleteLink, UpdateLink } from '@models/link.model';

import { LinkID } from '@app/types/link.type';

import { ApiService, EndpointRoute } from '@services/api/api.service';

/**
 * Service for managing streaming `Link` data.
 *
 * @export
 * @class StreamingLinkService
 */
@Service()
export class StreamingLinkService {
    /**
     * The API service to request and post data from.
     *
     * @private
     * @type {ApiService}
     * @memberof SongService
     */
    private readonly apiService: ApiService = inject(ApiService);

    /**
     * Creates a new streaming `Link` instance and adds it to the list of links.
     *
     * @param {CreateLink} createLink - The `CreateLink` object containing the data for the new streaming `Link` instance.
     * @memberof StreamingLinkService
     */
    public CreateLink(createLink: CreateLink) {
        return this.apiService.Create<Link>(EndpointRoute.StreamingLink, createLink);
    }

    /**
     * Retrieves a list of all streaming `Link` instances.
     *
     * @memberof StreamingLinkService
     */
    public GetLinks() {
        return this.apiService.Get<Link[]>(EndpointRoute.StreamingLink);
    }

    /**
     * Retrieves a streaming `Link` instance by its unique identifier.
     *
     * @param {LinkID} id - The unique identifier of the streaming `Link` instance to retrieve.
     * @memberof StreamingLinkService
     */
    public GetLinkById(id: LinkID) {
        return this.apiService.GetById<Link>(EndpointRoute.StreamingLink, id);
    }

    /**
     * Updates an existing streaming `Link` instance with new data.
     *
     * @param {UpdateLink} updateLink - The `UpdateLink` object containing the updated data for the streaming `Link` instance.
     * @memberof StreamingLinkService
     */
    public UpdateLink(updateLink: UpdateLink) {
        return this.apiService.Update<Link>(EndpointRoute.StreamingLink, updateLink.id, updateLink);
    }

    /**
     * Deletes an existing streaming `Link` instance.
     *
     * @param {DeleteLink} deleteLink - The `DeleteLink` object containing the unique identifier of the streaming `Link` instance to delete.
     * @memberof StreamingLinkService
     */
    public DeleteLink(deleteLink: DeleteLink) {
        return this.apiService.Delete(EndpointRoute.StreamingLink, deleteLink.id);
    }
}
