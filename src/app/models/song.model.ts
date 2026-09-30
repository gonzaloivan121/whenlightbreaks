import { SongID } from '@app/types/song.type';
import { ArtistID } from '@app/types/artist.type';
import { AlbumID } from '@app/types/album.type';

/**
 * Represents a `Song`.
 *
 * @export
 * @interface Song
 */
export interface Song {
    /**
     * The unique identifier for the `Song`.
     *
     * @type {SongID}
     * @memberof Song
     */
    id: SongID;

    /**
     * The title of the `Song`.
     *
     * @type {string}
     * @memberof Song
     */
    title: string;

    /**
     * The URL of the cover image for the `Song`.
     *
     * @type {string}
     * @memberof Song
     */
    coverUrl: string;

    /**
     * The URL for streaming the `Song`.
     *
     * @type {string}
     * @memberof Song
     */
    songUrl: string;

    /**
     * The unique identifier of the `Album` associated with the `Song`.
     *
     * @type {AlbumID}
     * @memberof Song
     */
    albumId: AlbumID;

    /**
     * The unique identifier of the `Artist` associated with the `Song`.
     *
     * @type {ArtistID}
     * @memberof Song
     */
    artistId: ArtistID;

    /**
     * The date and time when the `Song` was created.
     *
     * @type {Date}
     * @memberof Song
     */
    createdAt: Date;

    /**
     * The date and time when the `Song` was last updated.
     *
     * @type {Date}
     * @memberof Song
     */
    updatedAt?: Date;
}

/**
 * Type that represents a `CreateSong` object, which is used to create a new `Song`.
 *
 * @example
 * const createSong: CreateSong = {
 *     title: "Sample Song",
 *     coverUrl: "https://example.com/cover.jpg",
 *     songUrl: "https://example.com/song.mp3",
 *     albumId: "123e4567-e89b-12d3-a456-426614174000",
 *     artistId: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {CreateSong}
 */
export type CreateSong = Omit<Song, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Type that represents an `UpdateSong` object, which is used to update an existing `Song`.
 *
 * @example
 * const updateSong: UpdateSong = {
 *     id: "123e4567-e89b-12d3-a456-426614174000",
 *     title: "Updated Song Title",
 *     coverUrl: "https://example.com/updated-cover.jpg",
 *     songUrl: "https://example.com/updated-song.mp3",
 *     albumId: "123e4567-e89b-12d3-a456-426614174000",
 *     artistId: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {UpdateSong}
 */
export type UpdateSong = Partial<Song> & Pick<Song, 'id'>;

/**
 * Type that represents a `DeleteSong` object, which is used to delete an existing `Song`.
 *
 * @example
 * const deleteSong: DeleteSong = {
 *   id: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {DeleteSong}
 */
export type DeleteSong = Pick<Song, 'id'>;
