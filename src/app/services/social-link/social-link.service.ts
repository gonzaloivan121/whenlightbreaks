import { inject, Service } from '@angular/core';

import { Link, CreateLink, DeleteLink, UpdateLink } from '@models/link.model';

import { LinkID } from '@app/types/link.type';

import { ApiService, EndpointRoute } from '@services/api/api.service';

/**
 * Service for managing social `Link` data.
 *
 * @export
 * @class SocialLinkService
 */
@Service()
export class SocialLinkService {
    /**
     * The API service to request and post data from.
     *
     * @private
     * @type {ApiService}
     * @memberof SongService
     */
    private readonly apiService: ApiService = inject(ApiService);

    /**
     * Creates a new social `Link` instance and adds it to the list of links.
     *
     * @param {CreateLink} createLink - The `CreateLink` object containing the data for the new social `Link` instance.
     * @memberof SocialLinkService
     */
    public CreateLink(createLink: CreateLink) {
        return this.apiService.Create<Link>(EndpointRoute.SocialLink, createLink);
    }

    /**
     * Retrieves a list of all social `Link` instances.
     *
     * @memberof SocialLinkService
     */
    public GetLinks() {
        return this.apiService.Get<Link[]>(EndpointRoute.SocialLink);
    }

    /**
     * Retrieves a social `Link` instance by its unique identifier.
     *
     * @param {LinkID} id - The unique identifier of the social `Link` instance to retrieve.
     * @memberof SocialLinkService
     */
    public GetLinkById(id: LinkID) {
        return this.apiService.GetById<Link>(EndpointRoute.SocialLink, id);
    }

    /**
     * Updates an existing social `Link` instance with new data.
     *
     * @param {UpdateLink} updateLink - The `UpdateLink` object containing the updated data for the social `Link` instance.
     * @memberof SocialLinkService
     */
    public UpdateLink(updateLink: UpdateLink) {
        return this.apiService.Update<Link>(EndpointRoute.SocialLink, updateLink.id, updateLink);
    }

    /**
     * Deletes an existing social `Link` instance.
     *
     * @param {DeleteLink} deleteLink - The `DeleteLink` object containing the unique identifier of the social `Link` instance to delete.
     * @memberof SocialLinkService
     */
    public DeleteLink(deleteLink: DeleteLink) {
        return this.apiService.Delete(EndpointRoute.SocialLink, deleteLink.id);
    }
}
