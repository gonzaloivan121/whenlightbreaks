import { inject, Service } from '@angular/core';

import { Link, CreateLink, DeleteLink, UpdateLink } from '@models/link.model';

import { LinkID } from '@app/types/link.type';

import { ApiService, EndpointRoute } from '@services/api/api.service';

/**
 * Service for managing navigation `Link` data.
 *
 * @export
 * @class NavLinkService
 */
@Service()
export class NavLinkService {
    /**
     * The API service to request and post data from.
     *
     * @private
     * @type {ApiService}
     * @memberof SongService
     */
    private readonly apiService: ApiService = inject(ApiService);

    /**
     * Creates a new navigation `Link` instance and adds it to the list of links.
     *
     * @param {CreateLink} createLink - The `CreateLink` object containing the data for the new navigation `Link` instance.
     * @memberof NavLinkService
     */
    public CreateLink(createLink: CreateLink) {
        return this.apiService.Create<Link>(EndpointRoute.NavigationLink, createLink);
    }

    /**
     * Retrieves a list of all navigation `Link` instances.
     *
     * @memberof NavLinkService
     */
    public GetLinks() {
        return this.apiService.Get<Link[]>(EndpointRoute.NavigationLink);
    }

    /**
     * Retrieves a navigation `Link` instance by its unique identifier.
     *
     * @param {LinkID} id - The unique identifier of the navigation `Link` instance to retrieve.
     * @memberof NavLinkService
     */
    public GetLinkById(id: LinkID) {
        return this.apiService.GetById<Link>(EndpointRoute.NavigationLink, id);
    }

    /**
     * Updates an existing navigation `Link` instance with new data.
     *
     * @param {UpdateLink} updateLink - The `UpdateLink` object containing the updated data for the navigation `Link` instance.
     * @memberof NavLinkService
     */
    public UpdateLink(updateLink: UpdateLink) {
        return this.apiService.Update<Link>(
            EndpointRoute.NavigationLink,
            updateLink.id,
            updateLink,
        );
    }

    /**
     * Deletes an existing navigation `Link` instance.
     *
     * @param {DeleteLink} deleteLink - The `DeleteLink` object containing the unique identifier of the navigation `Link` instance to delete.
     * @memberof NavLinkService
     */
    public DeleteLink(deleteLink: DeleteLink) {
        return this.apiService.Delete(EndpointRoute.NavigationLink, deleteLink.id);
    }
}
