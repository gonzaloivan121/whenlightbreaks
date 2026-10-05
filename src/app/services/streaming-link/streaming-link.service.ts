import { Service } from '@angular/core';

import { Link, CreateLink, DeleteLink, UpdateLink } from '@models/link.model';

import { LinkID, ParseLinkID } from '@app/types/link.type';

import { NotFoundError } from '@app/errors';

/**
 * Service for managing streaming `Link` data.
 *
 * @export
 * @class StreamingLinkService
 */
@Service()
export class StreamingLinkService {
    /**
     * The list of streaming `Link` instances.
     *
     * @private
     * @type {Link[]}
     * @memberof StreamingLinkService
     */
    private readonly links: Link[] = [
        {
            id: ParseLinkID('4f0303c3-8896-457c-bd6f-3fc3de465d4b'),
            label: 'Apple Music',
            icon: 'simpleApplemusic',
            url: 'https://music.apple.com/@WLB.band',
            createdAt: new Date(),
        },
        {
            id: ParseLinkID('2448e713-47d3-421f-a456-27d866a1041c'),
            label: 'YouTube Music',
            icon: 'simpleYoutubemusic',
            url: 'https://music.youtube.com/@WLB.band',
            createdAt: new Date(),
        },
        {
            id: ParseLinkID('be025a22-6a2c-4a56-a198-8c22610586b1'),
            label: 'Spotify',
            icon: 'simpleSpotify',
            url: 'https://open.spotify.com/@WLB.band',
            createdAt: new Date(),
        },
        {
            id: ParseLinkID('1ed2e447-2b7f-481c-8522-1e0e2eb39b82'),
            label: 'Amazon Music',
            icon: 'ionLogoAmazon',
            url: 'https://music.amazon.com/@WLB.band',
            createdAt: new Date(),
        },
        {
            id: ParseLinkID('9cf8a271-66b5-458d-9d03-fd8ab8269610'),
            label: 'Deezer',
            icon: 'simpleDeezer',
            url: 'https://www.deezer.com/@WLB.band',
            createdAt: new Date(),
        },
        {
            id: ParseLinkID('311ebb52-38cd-43c6-b41b-14c82a2407cc'),
            label: 'Tidal',
            icon: 'simpleTidal',
            url: 'https://www.tidal.com/@WLB.band',
            createdAt: new Date(),
        },
    ];

    /**
     * Creates a new streaming `Link` instance and adds it to the list of links.
     *
     * @param {CreateLink} createLink - The `CreateLink` object containing the data for the new streaming `Link` instance.
     * @returns {Promise<Link>} A promise that resolves with the newly created streaming `Link` instance.
     * @memberof StreamingLinkService
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
     * Retrieves a list of all streaming `Link` instances.
     *
     * @returns {Promise<Link[]>} A promise that resolves with the list of all streaming `Link` instances.
     * @memberof StreamingLinkService
     */
    public GetLinks(): Promise<Link[]> {
        return new Promise<Link[]>((resolve) => {
            resolve(this.links);
        });
    }

    /**
     * Retrieves a streaming `Link` instance by its unique identifier.
     *
     * @param {LinkID} id - The unique identifier of the streaming `Link` instance to retrieve.
     * @returns {Promise<Link>} A promise that resolves with the streaming `Link` instance.
     * @memberof StreamingLinkService
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
     * Updates an existing streaming `Link` instance with new data.
     *
     * @param {UpdateLink} updateLink - The `UpdateLink` object containing the updated data for the streaming `Link` instance.
     * @throws {NotFoundError} If the streaming `Link` instance with the specified `id` does not exist.
     * @returns {Promise<Link>} A promise that resolves with the updated streaming `Link` instance.
     * @memberof StreamingLinkService
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
     * Deletes an existing streaming `Link` instance.
     *
     * @param {DeleteLink} deleteLink - The `DeleteLink` object containing the unique identifier of the streaming `Link` instance to delete.
     * @throws {NotFoundError} If the streaming `Link` instance with the specified `id` does not exist.
     * @returns {Promise<void>} A promise that resolves when the streaming `Link` instance is deleted.
     * @memberof StreamingLinkService
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
     * Finds a streaming `Link` instance by its unique identifier.
     *
     * @private
     * @param {LinkID} id - The unique identifier of the streaming `Link` instance to find.
     * @returns {Link | undefined} The streaming `Link` instance if found, otherwise `undefined`.
     * @memberof StreamingLinkService
     */
    private FindLinkById(id: LinkID): Link | undefined {
        return this.links.find((link) => link.id === id);
    }

    /**
     * Finds the index of a streaming `Link` instance by its unique identifier.
     *
     * @private
     * @param {LinkID} id - The unique identifier of the streaming `Link` instance to find.
     * @returns {number} The index of the streaming `Link` instance if found, otherwise `-1`.
     * @memberof StreamingLinkService
     */
    private FindLinkIndexById(id: LinkID): number {
        return this.links.findIndex((link) => link.id === id);
    }
}
