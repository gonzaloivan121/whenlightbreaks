import { Service } from '@angular/core';

import { Album, CreateAlbum, DeleteAlbum, UpdateAlbum } from '@app/models/album.model';

import { AlbumID, ParseAlbumID } from '@app/types/album.type';
import { ArtistID, ParseArtistID } from '@app/types/artist.type';

import { NotFoundError } from '@app/errors';

/**
 * Service for managing `Album` data.
 *
 * @export
 * @class AlbumService
 */
@Service()
export class AlbumService {
    /**
     * The list of `Album` instances.
     *
     * @private
     * @type {Album[]}
     * @memberof AlbumService
     */
    private readonly albums: Album[] = [
        {
            id: ParseAlbumID('a8c171e2-aa8d-4b27-ab1f-29d8a6e86aa2'),
            title: 'Pre-Human State',
            coverUrl: 'https://placehold.co/1024x1024',
            albumUrl: 'https://example.com/albums/pre-human-state',
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
        {
            id: ParseAlbumID('fddfe4bc-d678-477e-b1ed-6fcbdf600dc9'),
            title: 'Altar',
            coverUrl: 'https://placehold.co/1024x1024',
            albumUrl: 'https://example.com/albums/altar',
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
        {
            id: ParseAlbumID('572cac8e-0bae-41de-8846-48ad7b27cbb0'),
            title: "I'll Be There",
            coverUrl: 'https://placehold.co/1024x1024',
            albumUrl: 'https://example.com/albums/ill-be-there',
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
    ];

    /**
     * Creates a new `Album` instance and adds it to the list of albums.
     *
     * @param {CreateAlbum} createAlbum - The `CreateAlbum` object containing the data for the new `Album` instance.
     * @returns {Promise<Album>} A promise that resolves with the newly created `Album` instance.
     * @memberof AlbumService
     */
    public CreateAlbum(createAlbum: CreateAlbum): Promise<Album> {
        return new Promise<Album>((resolve) => {
            const album: Album = {
                id: ParseAlbumID(crypto.randomUUID()),
                title: createAlbum.title,
                coverUrl: createAlbum.coverUrl,
                albumUrl: createAlbum.albumUrl,
                artistId: createAlbum.artistId,
                createdAt: new Date(),
            };

            this.albums.push(album);
            resolve(album);
        });
    }

    /**
     * Retrieves a list of all `Album` instances.
     *
     * @returns {Promise<Album[]>} A promise that resolves with the list of all `Album` instances.
     * @memberof AlbumService
     */
    public GetAlbums(): Promise<Album[]> {
        return new Promise<Album[]>((resolve) => {
            resolve(this.albums);
        });
    }

    /**
     * Retrieves an `Album` instance by its unique identifier.
     *
     * @param {AlbumID} id - The unique identifier of the `Album` instance to retrieve.
     * @throws {NotFoundError} If the `Album` instance with the specified `id` does not exist.
     * @returns {Promise<Album>} A promise that resolves with the `Album` instance.
     * @memberof AlbumService
     */
    public GetAlbumById(id: AlbumID): Promise<Album> {
        return new Promise<Album>((resolve, reject) => {
            const album = this.FindAlbumById(id);

            if (!album) {
                reject(new NotFoundError(`Album with id '${id}' not found.`));
                return;
            }

            resolve(album);
        });
    }

    /**
     * Retrieves a list of `Album` instances by the unique identifier of the associated `Artist`.
     *
     * @param {ArtistID} artistId - The unique identifier of the `Artist` whose `Album` instances are to be retrieved.
     * @returns {Promise<Album[]>} A promise that resolves with the list of `Album` instances.
     * @memberof AlbumService
     */
    public GetAlbumsByArtistId(artistId: ArtistID): Promise<Album[]> {
        return new Promise<Album[]>((resolve) => {
            const albums = this.FilterAlbumsByArtistId(artistId);
            resolve(albums);
        });
    }

    /**
     * Updates an existing `Album` instance with new data.
     *
     * @param {UpdateAlbum} updateAlbum - The `UpdateAlbum` object containing the updated data for the `Album` instance.
     * @throws {NotFoundError} If the `Album` instance with the specified `id` does not exist.
     * @returns {Promise<Album>} A promise that resolves with the updated `Album` instance.
     * @memberof AlbumService
     */
    public UpdateAlbum(updateAlbum: UpdateAlbum): Promise<Album> {
        return new Promise<Album>((resolve, reject) => {
            const album = this.FindAlbumById(updateAlbum.id);

            if (!album) {
                reject(new NotFoundError(`Album with id '${updateAlbum.id}' not found.`));
                return;
            }

            if (updateAlbum.title !== undefined) {
                album.title = updateAlbum.title;
            }

            if (updateAlbum.coverUrl !== undefined) {
                album.coverUrl = updateAlbum.coverUrl;
            }

            if (updateAlbum.albumUrl !== undefined) {
                album.albumUrl = updateAlbum.albumUrl;
            }

            if (updateAlbum.artistId !== undefined) {
                album.artistId = updateAlbum.artistId;
            }

            album.updatedAt = new Date();
            resolve(album);
        });
    }

    /**
     * Deletes an existing `Album` instance.
     *
     * @param {DeleteAlbum} deleteAlbum - The `DeleteAlbum` object containing the unique identifier of the `Album` instance to delete.
     * @throws {NotFoundError} If the `Album` instance with the specified `id` does not exist.
     * @returns {Promise<void>} A promise that resolves when the `Album` instance is deleted.
     * @memberof AlbumService
     */
    public DeleteAlbum(deleteAlbum: DeleteAlbum): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const index = this.FindAlbumIndexById(deleteAlbum.id);

            if (index === -1) {
                reject(new NotFoundError(`Album with id '${deleteAlbum.id}' not found.`));
                return;
            }

            this.albums.splice(index, 1);
            resolve();
        });
    }

    /**
     * Finds an `Album` instance by its unique identifier.
     *
     * @private
     * @param {AlbumID} id - The unique identifier of the `Album` instance to find.
     * @returns {Album | undefined} The `Album` instance if found, otherwise `undefined`.
     * @memberof AlbumService
     */
    private FindAlbumById(id: AlbumID): Album | undefined {
        return this.albums.find((album) => album.id === id);
    }

    /**
     * Filters the list of `Album` instances by the unique identifier of the associated `Artist`.
     *
     * @private
     * @param {ArtistID} artistId - The unique identifier of the `Artist` whose `Album` instances are to be filtered.
     * @returns {Album[]} The list of `Album` instances for the specified `Artist`.
     * @memberof AlbumService
     */
    private FilterAlbumsByArtistId(artistId: ArtistID): Album[] {
        return this.albums.filter((album) => album.artistId === artistId);
    }

    /**
     * Finds the index of an `Album` instance by its unique identifier.
     *
     * @private
     * @param {AlbumID} id - The unique identifier of the `Album` instance to find.
     * @returns {number} The index of the `Album` instance if found, otherwise `-1`.
     * @memberof AlbumService
     */
    private FindAlbumIndexById(id: AlbumID): number {
        return this.albums.findIndex((album) => album.id === id);
    }
}
