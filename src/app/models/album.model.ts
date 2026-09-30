import { AlbumID } from "@app/types/album.type";
import { ArtistID } from "@app/types/artist.type";

/**
 * Represents an `Album`.
 *
 * @export
 * @interface Album
 */
export interface Album {
    /**
     * The unique identifier for the `Album`.
     *
     * @type {AlbumID}
     * @memberof Album
     */
    id: AlbumID;

    /**
     * The title of the `Album`.
     *
     * @type {string}
     * @memberof Album
     */
    title: string;

    /**
     * The URL of the cover image for the `Album`.
     *
     * @type {string}
     * @memberof Album
     */
    coverUrl: string;

    /**
     * The URL for streaming the `Album`.
     *
     * @type {string}
     * @memberof Album
     */
    albumUrl: string;

    /**
     * The unique identifier of the `Artist` associated with the `Album`.
     *
     * @type {ArtistID}
     * @memberof Album
     */
    artistId: ArtistID;

    /**
     * The date and time when the `Album` was created.
     *
     * @type {Date}
     * @memberof Album
     */
    createdAt: Date;

    /**
     * The date and time when the `Album` was last updated.
     *
     * @type {Date}
     * @memberof Album
     */
    updatedAt?: Date;
}

/**
 * Type that represents a `CreateAlbum` object, which is used to create a new `Album`.
 *
 * @example
 * const createAlbum: CreateAlbum = {
 *     title: "Album Title",
 *     artistId: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {CreateAlbum}
 */
export type CreateAlbum = Omit<Album, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Type that represents an `UpdateAlbum` object, which is used to update an existing `Album`.
 *
 * @example
 * const updateAlbum: UpdateAlbum = {
 *     id: "123e4567-e89b-12d3-a456-426614174000",
 *     title: "Album Title",
 *     artistId: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {UpdateAlbum}
 */
export type UpdateAlbum = Partial<Album> & Pick<Album, 'id'>;

/**
 * Type that represents a `DeleteAlbum` object, which is used to delete an existing `Album`.
 *
 * @example
 * const deleteAlbum: DeleteAlbum = {
 *   id: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {DeleteAlbum}
 */
export type DeleteAlbum = Pick<Album, 'id'>;