import { LinkID } from "@app/types/link.type";

/**
 * Represents an `Link`.
 *
 * @export
 * @interface Link
 */
export interface Link {
    /**
     * The unique identifier for the `Link`.
     *
     * @type {LinkID}
     * @memberof Link
     */
    id: LinkID;

    /**
     * The label for the `Link`.
     *
     * @type {string}
     * @memberof Link
     */
    label: string;

    /**
     * The icon for the `Link`.
     *
     * @type {string}
     * @memberof Link
     */
    icon: string;

    /**
     * The URL for the `Link`.
     *
     * @type {string}
     * @memberof Link
     */
    url: string;
    
    /**
     * The date and time when the `Link` was created.
     *
     * @type {Date}
     * @memberof Link
     */
    createdAt: Date;

    /**
     * The date and time when the `Link` was last updated.
     *
     * @type {Date}
     * @memberof Link
     */
    updatedAt?: Date;
}

/**
 * Type that represents a `CreateLink` object, which is used to create a new `Link`.
 *
 * @example
 * const createLink: CreateLink = {
 *     label: "Example Link",
 *     icon: "exampleIcon",
 *     url: "https://example.com"
 * };
 * @export
 * @type {CreateLink}
 */
export type CreateLink = Omit<Link, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Type that represents an `UpdateLink` object, which is used to update an existing `Link`.
 *
 * @example
 * const updateLink: UpdateLink = {
 *     id: "123e4567-e89b-12d3-a456-426614174000",
 *     label: "Updated Link",
 *     icon: "updatedIcon",
 *     url: "https://updated.com"
 * };
 * @export
 * @type {UpdateLink}
 */
export type UpdateLink = Partial<Link> & Pick<Link, 'id'>;

/**
 * Type that represents a `DeleteLink` object, which is used to delete an existing `Link`.
 * 
 * @example
 * const deleteLink: DeleteLink = {
 *     id: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {DeleteLink}
 */
export type DeleteLink = Pick<Link, 'id'>;