import { Service } from '@angular/core';

import { Song, CreateSong, DeleteSong, UpdateSong } from '@models/song.model';

import { SongID, ParseSongID } from '@app/types/song.type';
import { AlbumID, ParseAlbumID } from '@app/types/album.type';
import { ArtistID, ParseArtistID } from '@app/types/artist.type';

import { NotFoundError } from '@app/errors';

/**
 * Service for managing `Song` data.
 *
 * @export
 * @class SongService
 */
@Service()
export class SongService {
    /**
     * The list of `Song` instances.
     *
     * @private
     * @type {Song[]}
     * @memberof SongService
     */
    private readonly songs: Song[] = [
        {
            id: ParseSongID('b80c08dc-a540-4dc6-8add-371a5396003f'),
            title: 'Pre-Human State',
            coverUrl: 'assets/images/albums/pre-human-state.webp',
            songUrl: 'https://example.com/songs/pre-human-state',
            albumId: ParseAlbumID('a8c171e2-aa8d-4b27-ab1f-29d8a6e86aa2'),
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
    ];

    /**
     * Creates a new `Song` instance and adds it to the list of songs.
     *
     * @param {CreateSong} createSong - The `CreateSong` object containing the data for the new `Song` instance.
     * @returns {Promise<Song>} A promise that resolves with the newly created `Song` instance.
     * @memberof SongService
     */
    public CreateSong(createSong: CreateSong): Promise<Song> {
        return new Promise<Song>((resolve) => {
            const song: Song = {
                id: ParseSongID(crypto.randomUUID()),
                title: createSong.title,
                coverUrl: createSong.coverUrl,
                songUrl: createSong.songUrl,
                albumId: createSong.albumId,
                artistId: createSong.artistId,
                createdAt: new Date(),
            };

            this.songs.push(song);
            resolve(song);
        });
    }

    /**
     * Retrieves a list of all `Song` instances.
     *
     * @returns {Promise<Song[]>} A promise that resolves with the list of all `Song` instances.
     * @memberof SongService
     */
    public GetSongs(): Promise<Song[]> {
        return new Promise<Song[]>((resolve) => {
            resolve(this.songs);
        });
    }

    /**
     * Retrieves a `Song` instance by its unique identifier.
     *
     * @param {SongID} id - The unique identifier of the `Song` instance to retrieve.
     * @throws {NotFoundError} If the `Song` instance with the specified `id` does not exist.
     * @returns {Promise<Song>} A promise that resolves with the `Song` instance.
     * @memberof SongService
     */
    public GetSongById(id: SongID): Promise<Song> {
        return new Promise<Song>((resolve, reject) => {
            const song = this.FindSongById(id);

            if (!song) {
                reject(new NotFoundError(`Song with id '${id}' not found.`));
                return;
            }

            resolve(song);
        });
    }

    /**
     * Retrieves a list of `Song` instances by the unique identifier of the associated `Album`.
     *
     * @param {AlbumID} albumId - The unique identifier of the `Album` whose `Song` instances are to be retrieved.
     * @returns {Promise<Song[]>} A promise that resolves with the list of `Song` instances.
     * @memberof SongService
     */
    public GetSongsByAlbumId(albumId: AlbumID): Promise<Song[]> {
        return new Promise<Song[]>((resolve) => {
            const songs = this.FilterSongsByAlbumId(albumId);
            resolve(songs);
        });
    }

    /**
     * Retrieves a list of `Song` instances by the unique identifier of the associated `Artist`.
     *
     * @param {ArtistID} artistId - The unique identifier of the `Artist` whose `Song` instances are to be retrieved.
     * @returns {Promise<Song[]>} A promise that resolves with the list of `Song` instances.
     * @memberof SongService
     */
    public GetSongsByArtistId(artistId: ArtistID): Promise<Song[]> {
        return new Promise<Song[]>((resolve) => {
            const songs = this.FilterSongsByArtistId(artistId);
            resolve(songs);
        });
    }

    /**
     * Updates an existing `Song` instance with new data.
     *
     * @param {UpdateSong} updateSong - The `UpdateSong` object containing the updated data for the `Song` instance.
     * @throws {NotFoundError} If the `Song` instance with the specified `id` does not exist.
     * @returns {Promise<Song>} A promise that resolves with the updated `Song` instance.
     * @memberof SongService
     */
    public UpdateSong(updateSong: UpdateSong): Promise<Song> {
        return new Promise<Song>((resolve, reject) => {
            const song = this.FindSongById(updateSong.id);

            if (!song) {
                reject(new NotFoundError(`Song with id '${updateSong.id}' not found.`));
                return;
            }

            if (updateSong.title !== undefined) {
                song.title = updateSong.title;
            }

            if (updateSong.coverUrl !== undefined) {
                song.coverUrl = updateSong.coverUrl;
            }

            if (updateSong.songUrl !== undefined) {
                song.songUrl = updateSong.songUrl;
            }

            if (updateSong.albumId !== undefined) {
                song.albumId = updateSong.albumId;
            }

            if (updateSong.artistId !== undefined) {
                song.artistId = updateSong.artistId;
            }

            song.updatedAt = new Date();
            resolve(song);
        });
    }

    /**
     * Deletes an existing `Song` instance.
     *
     * @param {DeleteSong} deleteSong - The `DeleteSong` object containing the unique identifier of the `Song` instance to delete.
     * @throws {NotFoundError} If the `Song` instance with the specified `id` does not exist.
     * @returns {Promise<void>} A promise that resolves when the `Song` instance is deleted.
     * @memberof SongService
     */
    public DeleteSong(deleteSong: DeleteSong): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const index = this.FindSongIndexById(deleteSong.id);

            if (index === -1) {
                reject(new NotFoundError(`Song with id '${deleteSong.id}' not found.`));
                return;
            }

            this.songs.splice(index, 1);
            resolve();
        });
    }

    /**
     * Finds a `Song` instance by its unique identifier.
     *
     * @private
     * @param {SongID} id - The unique identifier of the `Song` instance to find.
     * @returns {Song | undefined} The `Song` instance if found, otherwise `undefined`.
     * @memberof SongService
     */
    private FindSongById(id: SongID): Song | undefined {
        return this.songs.find((song) => song.id === id);
    }

    /**
     * Filters the list of `Song` instances by the unique identifier of the associated `Artist`.
     *
     * @private
     * @param {ArtistID} artistId - The unique identifier of the `Artist` whose `Song` instances are to be filtered.
     * @returns {Song[]} The list of `Song` instances for the specified `Artist`.
     * @memberof SongService
     */
    private FilterSongsByArtistId(artistId: ArtistID): Song[] {
        return this.songs.filter((song) => song.artistId === artistId);
    }

    /**
     * Filters the list of `Song` instances by the unique identifier of the associated `Album`.
     *
     * @private
     * @param {AlbumID} albumId - The unique identifier of the `Album` whose `Song` instances are to be filtered.
     * @returns {Song[]} The list of `Song` instances for the specified `Album`.
     * @memberof SongService
     */
    private FilterSongsByAlbumId(albumId: AlbumID): Song[] {
        return this.songs.filter((song) => song.albumId === albumId);
    }

    /**
     * Finds the index of a `Song` instance by its unique identifier.
     *
     * @private
     * @param {SongID} id - The unique identifier of the `Song` instance to find.
     * @returns {number} The index of the `Song` instance if found, otherwise `-1`.
     * @memberof SongService
     */
    private FindSongIndexById(id: SongID): number {
        return this.songs.findIndex((song) => song.id === id);
    }
}
