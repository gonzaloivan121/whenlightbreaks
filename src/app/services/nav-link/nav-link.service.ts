import { Service } from '@angular/core';

import { Link, CreateLink, DeleteLink, UpdateLink } from '@models/link.model';

import { LinkID, ParseLinkID } from '@app/types/link.type';

import { NotFoundError } from '@app/errors';

/**
 * Service for managing navigation `Link` data.
 *
 * @export
 * @class NavLinkService
 */
@Service()
export class NavLinkService {
    /**
     * The list of navigation `Link` instances.
     *
     * @private
     * @type {Link[]}
     * @memberof NavLinkService
     */
    private readonly links: Link[] = [
        {
            id: ParseLinkID('21050fed-0e53-411a-80a2-cc8705599456'),
            label: 'Home',
            icon: 'ionHome',
            url: '/',
            createdAt: new Date(),
        },
        {
            id: ParseLinkID('08a1e80b-d895-4be9-a721-634324f26fee'),
            label: 'Music',
            icon: 'ionMusicalNotes',
            url: '/music',
            createdAt: new Date(),
        },
        /*{
            id: ParseLinkID('ee33feee-eb3a-4111-bd7d-a7eb20a0d860'),
            label: 'Tour',
            icon: 'ionCalendarNumber',
            url: '/tour',
            createdAt: new Date(),
        },*/
        {
            id: ParseLinkID('09f65b01-690d-40b2-91da-f5197d1066b6'),
            label: 'About',
            icon: 'ionInformationCircle',
            url: '/about',
            createdAt: new Date(),
        },
        {
            id: ParseLinkID('87504d87-effe-4a8a-89d4-7f77aaaa8897'),
            label: 'Press Kit',
            icon: 'ionDocumentText',
            url: '/presskit',
            createdAt: new Date(),
        },
    ];

    /**
     * Creates a new navigation `Link` instance and adds it to the list of links.
     *
     * @param {CreateLink} createLink - The `CreateLink` object containing the data for the new navigation `Link` instance.
     * @returns {Promise<Link>} A promise that resolves with the newly created navigation `Link` instance.
     * @memberof NavLinkService
     */
    public CreateLink(createLink: CreateLink): Promise<Link> {
        return new Promise<Link>((resolve) => {
            const link: Link = {
                id: ParseLinkID(crypto.randomUUID()),
                label: createLink.label,
                icon: createLink.icon,
                url: createLink.url,
                createdAt: new Date(),
            };

            this.links.push(link);
            resolve(link);
        });
    }

    /**
     * Retrieves a list of all navigation `Link` instances.
     *
     * @returns {Promise<Link[]>} A promise that resolves with the list of all navigation `Link` instances.
     * @memberof NavLinkService
     */
    public GetLinks(): Promise<Link[]> {
        return new Promise<Link[]>((resolve) => {
            resolve(this.links);
        });
    }

    /**
     * Retrieves a navigation `Link` instance by its unique identifier.
     *
     * @param {LinkID} id - The unique identifier of the navigation `Link` instance to retrieve.
     * @throws {NotFoundError} If the navigation `Link` instance with the specified `id` does not exist.
     * @returns {Promise<Link>} A promise that resolves with the navigation `Link` instance.
     * @memberof NavLinkService
     */
    public GetLinkById(id: LinkID): Promise<Link> {
        return new Promise<Link>((resolve, reject) => {
            const link = this.FindLinkById(id);

            if (!link) {
                reject(new NotFoundError(`Link with id '${id}' not found.`));
                return;
            }

            resolve(link);
        });
    }

    /**
     * Updates an existing navigation `Link` instance with new data.
     *
     * @param {UpdateLink} updateLink - The `UpdateLink` object containing the updated data for the navigation `Link` instance.
     * @throws {NotFoundError} If the navigation `Link` instance with the specified `id` does not exist.
     * @returns {Promise<Link>} A promise that resolves with the updated navigation `Link` instance.
     * @memberof NavLinkService
     */
    public UpdateLink(updateLink: UpdateLink): Promise<Link> {
        return new Promise<Link>((resolve, reject) => {
            const link = this.FindLinkById(updateLink.id);

            if (!link) {
                reject(new NotFoundError(`Link with id '${updateLink.id}' not found.`));
                return;
            }

            if (updateLink.label !== undefined) {
                link.label = updateLink.label;
            }

            if (updateLink.icon !== undefined) {
                link.icon = updateLink.icon;
            }

            if (updateLink.url !== undefined) {
                link.url = updateLink.url;
            }

            link.updatedAt = new Date();
            resolve(link);
        });
    }

    /**
     * Deletes an existing navigation `Link` instance.
     *
     * @param {DeleteLink} deleteLink - The `DeleteLink` object containing the unique identifier of the navigation `Link` instance to delete.
     * @throws {NotFoundError} If the navigation `Link` instance with the specified `id` does not exist.
     * @returns {Promise<void>} A promise that resolves when the navigation `Link` instance is deleted.
     * @memberof NavLinkService
     */
    public DeleteLink(deleteLink: DeleteLink): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const index = this.FindLinkIndexById(deleteLink.id);

            if (index === -1) {
                reject(new NotFoundError(`Link with id '${deleteLink.id}' not found.`));
                return;
            }

            this.links.splice(index, 1);
            resolve();
        });
    }

    /**
     * Finds a navigation `Link` instance by its unique identifier.
     *
     * @private
     * @param {LinkID} id - The unique identifier of the navigation `Link` instance to find.
     * @returns {Link | undefined} The navigation `Link` instance if found, otherwise `undefined`.
     * @memberof NavLinkService
     */
    private FindLinkById(id: LinkID): Link | undefined {
        return this.links.find((link) => link.id === id);
    }

    /**
     * Finds the index of a navigation `Link` instance by its unique identifier.
     *
     * @private
     * @param {LinkID} id - The unique identifier of the navigation `Link` instance to find.
     * @returns {number} The index of the navigation `Link` instance if found, otherwise `-1`.
     * @memberof NavLinkService
     */
    private FindLinkIndexById(id: LinkID): number {
        return this.links.findIndex((link) => link.id === id);
    }
}
