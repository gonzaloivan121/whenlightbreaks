import { Service } from '@angular/core';

import { Album, CreateAlbum, DeleteAlbum, UpdateAlbum } from '@models/album.model';

import { AlbumCode, AlbumID, ParseAlbumCode, ParseAlbumID } from '@app/types/album.type';
import { ArtistID, ParseArtistID } from '@app/types/artist.type';

import { AlreadyExistsError, NotFoundError } from '@app/errors';
import { ParseLinkID } from '@app/types/link.type';

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
            code: ParseAlbumCode('pre-human-state'),
            coverUrl: 'assets/images/albums/pre-human-state.webp',
            albumUrls: [
                {
                    id: ParseLinkID('aaff7713-5213-4ba1-8b02-25c4393dcbec'),
                    label: 'YouTube Video',
                    icon: 'ionLogoYoutube',
                    url: 'https://www.youtube.com/watch?v=yduB0xUIfGg',
                    createdAt: new Date(),
                },
                {
                    id: ParseLinkID('cf7856e0-02be-46a3-9a1f-f10107f1201a'),
                    label: 'Spotify',
                    icon: 'simpleSpotify',
                    url: 'https://open.spotify.com/track/3RikTRSVoKaJkQUw5Cyutu',
                    createdAt: new Date(),
                },
                {
                    id: ParseLinkID('62e69b04-2fb4-43ac-b344-33de3f966e2f'),
                    label: 'Apple Music',
                    icon: 'simpleApplemusic',
                    url: 'https://music.apple.com/song/pre-human-state/6819714262',
                    createdAt: new Date(),
                },
                {
                    id: ParseLinkID('114d73d0-2ad9-4144-b8a0-4a5dc159d51c'),
                    label: 'YouTube Music',
                    icon: 'simpleYoutubemusic',
                    url: 'https://music.youtube.com/watch?v=fj3KzEVl6qc',
                    createdAt: new Date(),
                },
                {
                    id: ParseLinkID('394a64c9-4423-4b37-b99a-d70d359cb522'),
                    label: 'Amazon Music',
                    icon: 'ionLogoAmazon',
                    url: 'https://music.amazon.com/tracks/B0HM4439TW',
                    createdAt: new Date(),
                },
                {
                    id: ParseLinkID('c8cbc009-bc53-4bfa-ad2e-6ea04906cb04'),
                    label: 'Tidal',
                    icon: 'simpleTidal',
                    url: 'https://tidal.com/track/567601109',
                    createdAt: new Date(),
                },
            ],
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
                code: createAlbum.code,
                coverUrl: createAlbum.coverUrl,
                albumUrls: createAlbum.albumUrls,
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
     * Retrieves an `Album` instance by its unique code.
     *
     * @param {AlbumCode} code - The unique code of the `Album` instance to retrieve.
     * @throws {NotFoundError} If the `Album` instance with the specified `code` does not exist.
     * @returns {Promise<Album>} A promise that resolves with the `Album` instance.
     * @memberof AlbumService
     */
    public GetAlbumByCode(code: AlbumCode): Promise<Album> {
        return new Promise<Album>((resolve, reject) => {
            const album = this.FindAlbumByCode(code);

            if (!album) {
                reject(new NotFoundError(`Album with code '${code}' not found.`));
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

            if (updateAlbum.code && this.FindAlbumByCode(updateAlbum.code)) {
                reject(
                    new AlreadyExistsError(`Album with code '${updateAlbum.code}' already exists.`),
                );
                return;
            }

            if (updateAlbum.title !== undefined) {
                album.title = updateAlbum.title;
            }

            if (updateAlbum.code !== undefined) {
                album.code = updateAlbum.code;
            }

            if (updateAlbum.coverUrl !== undefined) {
                album.coverUrl = updateAlbum.coverUrl;
            }

            if (updateAlbum.albumUrls !== undefined) {
                album.albumUrls = updateAlbum.albumUrls;
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
     * Finds an `Album` instance by its unique code.
     *
     * @private
     * @param {AlbumCode} code - The unique code of the `Album` instance to find.
     * @returns {Album | undefined} The `Album` instance if found, otherwise `undefined`.
     * @memberof AlbumService
     */
    private FindAlbumByCode(code: AlbumCode): Album | undefined {
        return this.albums.find((album) => album.code === code);
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
