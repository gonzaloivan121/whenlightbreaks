import { Service } from '@angular/core';

import { Link, CreateLink, DeleteLink, UpdateLink } from '@app/models/link.model';

import { LinkID, ParseLinkID } from '@app/types/link.type';

import { NotFoundError } from '@app/errors';

/**
 * Service for managing social `Link` data.
 *
 * @export
 * @class SocialLinkService
 */
@Service()
export class SocialLinkService {
    /**
     * The list of social `Link` instances.
     *
     * @private
     * @type {Link[]}
     * @memberof SocialLinkService
     */
    private readonly links: Link[] = [
        {
            id: ParseLinkID('02dc48d2-1db6-4666-b410-f743f244db03'),
            label: 'Instagram',
            icon: 'ionLogoInstagram',
            url: 'https://www.instagram.com/WhenLightBreaks',
            createdAt: new Date(),
        },
        {
            id: ParseLinkID('b54c6fc6-5321-4ca2-a3f6-e765521be1e9'),
            label: 'Facebook',
            icon: 'ionLogoFacebook',
            url: 'https://www.facebook.com/WhenLightBreaks',
            createdAt: new Date(),
        },
        {
            id: ParseLinkID('70551ddc-46a6-466f-bf84-32962337bf64'),
            label: 'TikTok',
            icon: 'ionLogoTiktok',
            url: 'https://www.tiktok.com/@WhenLightBreaks',
            createdAt: new Date(),
        },
        {
            id: ParseLinkID('edc408d6-4d63-43bc-8e55-a90af6fa2ddb'),
            label: 'Twitter',
            icon: 'ionLogoTwitter',
            url: 'https://twitter.com/WhenLightBreaksBand',
            createdAt: new Date(),
        },
        {
            id: ParseLinkID('1aeea357-b887-461d-a15e-5be50e9a6e17'),
            label: 'YouTube',
            icon: 'ionLogoYoutube',
            url: 'https://www.youtube.com/@WhenLightBreaksBand',
            createdAt: new Date(),
        },
    ];

    /**
     * Creates a new social `Link` instance and adds it to the list of links.
     *
     * @param {CreateLink} createLink - The `CreateLink` object containing the data for the new social `Link` instance.
     * @returns {Promise<Link>} A promise that resolves with the newly created social `Link` instance.
     * @memberof SocialLinkService
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
     * Retrieves a list of all social `Link` instances.
     *
     * @returns {Promise<Link[]>} A promise that resolves with the list of all social `Link` instances.
     * @memberof SocialLinkService
     */
    public GetLinks(): Promise<Link[]> {
        return new Promise<Link[]>((resolve) => {
            resolve(this.links);
        });
    }

    /**
     * Retrieves a social `Link` instance by its unique identifier.
     *
     * @param {LinkID} id - The unique identifier of the social `Link` instance to retrieve.
     * @throws {NotFoundError} If the social `Link` instance with the specified `id` does not exist.
     * @returns {Promise<Link>} A promise that resolves with the social `Link` instance.
     * @memberof SocialLinkService
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
     * Updates an existing social `Link` instance with new data.
     *
     * @param {UpdateLink} updateLink - The `UpdateLink` object containing the updated data for the social `Link` instance.
     * @throws {NotFoundError} If the social `Link` instance with the specified `id` does not exist.
     * @returns {Promise<Link>} A promise that resolves with the updated social `Link` instance.
     * @memberof SocialLinkService
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
     * Deletes an existing social `Link` instance.
     *
     * @param {DeleteLink} deleteLink - The `DeleteLink` object containing the unique identifier of the social `Link` instance to delete.
     * @throws {NotFoundError} If the social `Link` instance with the specified `id` does not exist.
     * @returns {Promise<void>} A promise that resolves when the social `Link` instance is deleted.
     * @memberof SocialLinkService
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
     * Finds a social `Link` instance by its unique identifier.
     *
     * @private
     * @param {LinkID} id - The unique identifier of the social `Link` instance to find.
     * @returns {Link | undefined} The social `Link` instance if found, otherwise `undefined`.
     * @memberof SocialLinkService
     */
    private FindLinkById(id: LinkID): Link | undefined {
        return this.links.find((link) => link.id === id);
    }

    /**
     * Finds the index of a social `Link` instance by its unique identifier.
     *
     * @private
     * @param {LinkID} id - The unique identifier of the social `Link` instance to find.
     * @returns {number} The index of the social `Link` instance if found, otherwise `-1`.
     * @memberof SocialLinkService
     */
    private FindLinkIndexById(id: LinkID): number {
        return this.links.findIndex((link) => link.id === id);
    }
}
