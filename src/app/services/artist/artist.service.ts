import { Service } from '@angular/core';

import { Artist, CreateArtist, UpdateArtist, DeleteArtist } from '@app/models/artist.model';

import { ArtistID, ParseArtistID } from '@app/types/artist.type';

import { NotFoundError } from '@app/errors';

/**
 * Service for managing `Artist` data.
 *
 * @export
 * @class ArtistService
 */
@Service()
export class ArtistService {
    /**
     * The list of `Artist` instances.
     *
     * @private
     * @type {Artist[]}
     * @memberof ArtistService
     */
    private readonly artists: Artist[] = [
        {
            id: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            name: 'When Light Breaks',
            artistUrl: 'https://www.whenlightbreaks.com',
            pictureUrl: 'assets/images/artists/when-light-breaks.webp',
            createdAt: new Date(),
        },
    ];

    /**
     * Creates a new `Artist` instance and adds it to the list of artists.
     *
     * @param {CreateArtist} createArtist - The `CreateArtist` object containing the data for the new `Artist` instance.
     * @returns {Promise<Artist>} A promise that resolves with the newly created `Artist` instance.
     * @memberof ArtistService
     */
    public CreateArtist(createArtist: CreateArtist): Promise<Artist> {
        return new Promise<Artist>((resolve) => {
            const artist: Artist = {
                id: ParseArtistID(crypto.randomUUID()),
                name: createArtist.name,
                artistUrl: createArtist.artistUrl,
                pictureUrl: createArtist.pictureUrl,
                createdAt: new Date(),
            };

            this.artists.push(artist);
            resolve(artist);
        });
    }

    /**
     * Retrieves a list of all `Artist` instances.
     *
     * @returns {Promise<Artist[]>} A promise that resolves with the list of all `Artist` instances.
     * @memberof ArtistService
     */
    public GetArtists(): Promise<Artist[]> {
        return new Promise<Artist[]>((resolve) => {
            resolve(this.artists);
        });
    }

    /**
     * Retrieves an `Artist` instance by its unique identifier.
     *
     * @param {ArtistID} id - The unique identifier of the `Artist` instance to retrieve.
     * @throws {NotFoundError} If the `Artist` instance with the specified `id` does not exist.
     * @returns {Promise<Artist>} A promise that resolves with the `Artist` instance.
     * @memberof ArtistService
     */
    public GetArtistById(id: ArtistID): Promise<Artist> {
        return new Promise<Artist>((resolve, reject) => {
            const artist = this.FindArtistById(id);

            if (!artist) {
                reject(new NotFoundError(`Artist with id '${id}' not found.`));
                return;
            }

            resolve(artist);
        });
    }

    /**
     * Updates an existing `Artist` instance with new data.
     *
     * @param {UpdateArtist} updateArtist - The `UpdateArtist` object containing the updated data for the `Artist` instance.
     * @throws {NotFoundError} If the `Artist` instance with the specified `id` does not exist.
     * @returns {Promise<Artist>} A promise that resolves with the updated `Artist` instance.
     * @memberof ArtistService
     */
    public UpdateArtist(updateArtist: UpdateArtist): Promise<Artist> {
        return new Promise<Artist>((resolve, reject) => {
            const artist = this.FindArtistById(updateArtist.id);

            if (!artist) {
                reject(new NotFoundError(`Artist with id '${updateArtist.id}' not found.`));
                return;
            }

            if (updateArtist.name !== undefined) {
                artist.name = updateArtist.name;
            }

            if (updateArtist.artistUrl !== undefined) {
                artist.artistUrl = updateArtist.artistUrl;
            }

            if (updateArtist.pictureUrl !== undefined) {
                artist.pictureUrl = updateArtist.pictureUrl;
            }

            artist.updatedAt = new Date();
            resolve(artist);
        });
    }

    /**
     * Deletes an existing `Artist` instance.
     *
     * @param {DeleteArtist} deleteArtist - The `DeleteArtist` object containing the unique identifier of the `Artist` instance to delete.
     * @throws {NotFoundError} If the `Artist` instance with the specified `id` does not exist.
     * @returns {Promise<void>} A promise that resolves when the `Artist` instance is deleted.
     * @memberof ArtistService
     */
    public DeleteArtist(deleteArtist: DeleteArtist): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const index = this.FindArtistIndexById(deleteArtist.id);

            if (index === -1) {
                reject(new NotFoundError(`Artist with id '${deleteArtist.id}' not found.`));
                return;
            }

            this.artists.splice(index, 1);
            resolve();
        });
    }

    /**
     * Finds an `Artist` instance by its unique identifier.
     *
     * @private
     * @param {ArtistID} id - The unique identifier of the `Artist` instance to find.
     * @returns {Artist | undefined} The `Artist` instance if found, otherwise `undefined`.
     * @memberof ArtistService
     */
    private FindArtistById(id: ArtistID): Artist | undefined {
        return this.artists.find((artist) => artist.id === id);
    }

    /**
     * Finds the index of an `Artist` instance by its unique identifier.
     *
     * @private
     * @param {ArtistID} id - The unique identifier of the `Artist` instance to find.
     * @returns {number} The index of the `Artist` instance if found, otherwise `-1`.
     * @memberof ArtistService
     */
    private FindArtistIndexById(id: ArtistID): number {
        return this.artists.findIndex((artist) => artist.id === id);
    }
}
