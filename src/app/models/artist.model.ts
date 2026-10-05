import { ArtistID } from "@app/types/artist.type";

/**
 * Represents an `Artist`.
 *
 * @export
 * @interface Artist
 */
export interface Artist {
    /**
     * The unique identifier for the `Artist`.
     *
     * @type {ArtistID}
     * @memberof Artist
     */
    id: ArtistID;
    
    /**
     * The name of the `Artist`.
     *
     * @type {string}
     * @memberof Artist
     */
    name: string;

    /**
     * The URL for streaming the `Artist`.
     *
     * @type {string}
     * @memberof Artist
     */
    artistUrl: string;

    /**
     * The URL for picture of the the `Artist`.
     *
     * @type {string}
     * @memberof Artist
     */
    pictureUrl: string;

    /**
     * The date and time when the `Artist` was created.
     *
     * @type {Date}
     * @memberof Artist
     */
    createdAt: Date;

    /**
     * The date and time when the `Artist` was last updated.
     *
     * @type {Date}
     * @memberof Artist
     */
    updatedAt?: Date;
}

/**
 * Type that represents a `CreateArtist` object, which is used to create a new `Artist`.
 * 
 * @example
 * const createArtist: CreateArtist = {
 *     name: "Artist Name",
 *     artistUrl: "https://example.com",
 *     pictureUrl: "https://example.com/picture.jpg"
 * };
 * @export
 * @type {CreateArtist}
 */
export type CreateArtist = Omit<Artist, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Type that represents an `UpdateArtist` object, which is used to update an existing `Artist`.
 *
 * @example
 * const updateArtist: UpdateArtist = {
 *     id: "123e4567-e89b-12d3-a456-426614174000",
 *     name: "Artist Name",
 *     artistUrl: "https://example.com",
 *     pictureUrl: "https://example.com/picture.jpg"
 * };
 * @export
 * @type {UpdateArtist}
 */
export type UpdateArtist = Partial<Artist> & Pick<Artist, 'id'>;

/**
 * Type that represents a `DeleteArtist` object, which is used to delete an existing `Artist`.
 * 
 * @example
 * const deleteArtist: DeleteArtist = {
 *     id: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {DeleteArtist}
 */
export type DeleteArtist = Pick<Artist, 'id'>;