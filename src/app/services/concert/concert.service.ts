import { Service } from '@angular/core';

import { Concert, CreateConcert, DeleteConcert, UpdateConcert } from '@app/models/concert.model';

import { ConcertID, ParseConcertID } from '@app/types/concert.type';
import { ArtistID, ParseArtistID } from '@app/types/artist.type';

import { NotFoundError } from '@app/errors';

/**
 * Service for managing `Concert` data.
 *
 * @export
 * @class ConcertService
 */
@Service()
export class ConcertService {
    /**
     * The list of `Concert` instances.
     *
     * @private
     * @type {Concert[]}
     * @memberof ConcertService
     */
    private readonly concerts: Concert[] = [
        {
            id: ParseConcertID('958c2874-0dcf-4751-a9a8-3ff265481939'),
            title: 'Concert 1',
            subtitle: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
            venue: 'Venue',
            city: 'City',
            state: 'State',
            country: 'Country',
            directionsUrl: '',
            date: new Date('2026-09-29'),
            status: 'available',
            ticketsUrl: '',
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
        {
            id: ParseConcertID('e8f23c4a-69af-4dde-a4ac-25410c5feacc'),
            title: 'Concert 2',
            subtitle: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
            venue: 'Venue',
            city: 'City',
            state: 'State',
            country: 'Country',
            directionsUrl: '',
            date: new Date('2024-08-20'),
            status: 'sold-out',
            ticketsUrl: '',
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
        {
            id: ParseConcertID('622c6435-50a1-4ed1-bbfc-4aaecae15dae'),
            title: 'Concert 3',
            subtitle: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
            venue: 'Venue',
            city: 'City',
            state: 'State',
            country: 'Country',
            directionsUrl: '',
            date: new Date('2024-09-10'),
            status: 'available',
            ticketsUrl: '',
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
        {
            id: ParseConcertID('0490d6fa-c9a6-4fc4-9350-3f58ee69db51'),
            title: 'Concert 4',
            subtitle: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
            venue: 'Venue',
            city: 'City',
            state: 'State',
            country: 'Country',
            directionsUrl: '',
            date: new Date('2024-10-05'),
            status: 'sold-out',
            ticketsUrl: '',
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
        {
            id: ParseConcertID('2e8d47dd-efe8-4ec3-835c-c0ce64f15dde'),
            title: 'Concert 5',
            subtitle: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
            venue: 'Venue',
            city: 'City',
            state: 'State',
            country: 'Country',
            directionsUrl: '',
            date: new Date('2024-10-05'),
            status: 'available',
            ticketsUrl: '',
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
        {
            id: ParseConcertID('5ffab34d-f72b-4c38-9b13-7de9558b304e'),
            title: 'Concert 6',
            subtitle: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
            venue: 'Venue',
            city: 'City',
            state: 'State',
            country: 'Country',
            directionsUrl: '',
            date: new Date('2024-12-20'),
            status: 'available',
            ticketsUrl: '',
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
        {
            id: ParseConcertID('f6f53e8c-f612-4b7d-b658-fe76d3891452'),
            title: 'Concert 7',
            subtitle: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
            venue: 'Venue',
            city: 'City',
            state: 'State',
            country: 'Country',
            directionsUrl: '',
            date: new Date('2025-01-10'),
            status: 'coming-soon',
            ticketsUrl: '',
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
        {
            id: ParseConcertID('bd0b2cb9-73b3-45ab-8905-630eed42e5ce'),
            title: 'Concert 8',
            subtitle: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
            venue: 'Venue',
            city: 'City',
            state: 'State',
            country: 'Country',
            directionsUrl: '',
            date: new Date('2025-02-14'),
            status: 'coming-soon',
            ticketsUrl: '',
            artistId: ParseArtistID('f5700c5d-b352-4df3-9fde-ce9274bc8304'),
            createdAt: new Date(),
        },
    ];

    /**
     * Creates a new `Concert` instance and adds it to the list of concerts.
     *
     * @param {CreateConcert} createConcert - The `CreateConcert` object containing the data for the new `Concert` instance.
     * @returns {Promise<Concert>} A promise that resolves with the newly created `Concert` instance.
     * @memberof ConcertService
     */
    public CreateConcert(createConcert: CreateConcert): Promise<Concert> {
        return new Promise<Concert>((resolve) => {
            const concert: Concert = {
                id: ParseConcertID(crypto.randomUUID()),
                title: createConcert.title,
                subtitle: createConcert.subtitle,
                venue: createConcert.venue,
                city: createConcert.city,
                state: createConcert.state,
                country: createConcert.country,
                directionsUrl: createConcert.directionsUrl,
                date: createConcert.date,
                status: createConcert.status,
                ticketsUrl: createConcert.ticketsUrl,
                artistId: createConcert.artistId,
                createdAt: new Date(),
            };

            this.concerts.push(concert);
            resolve(concert);
        });
    }

    /**
     * Retrieves a list of all `Concert` instances.
     *
     * @returns {Promise<Concert[]>} A promise that resolves with the list of all `Concert` instances.
     * @memberof ConcertService
     */
    public GetConcerts(): Promise<Concert[]> {
        return new Promise<Concert[]>((resolve) => {
            resolve(this.concerts);
        });
    }

    /**
     * Retrieves a `Concert` instance by its unique identifier.
     *
     * @param {ConcertID} id - The unique identifier of the `Concert` instance to retrieve.
     * @throws {NotFoundError} If the `Concert` instance with the specified `id` does not exist.
     * @returns {Promise<Concert>} A promise that resolves with the `Concert` instance.
     * @memberof ConcertService
     */
    public GetConcertById(id: ConcertID): Promise<Concert> {
        return new Promise<Concert>((resolve, reject) => {
            const concert = this.FindConcertById(id);

            if (!concert) {
                reject(new NotFoundError(`Concert with id '${id}' not found.`));
                return;
            }

            resolve(concert);
        });
    }

    /**
     * Retrieves a list of `Concert` instances by the unique identifier of the associated `Artist`.
     *
     * @param {ArtistID} artistId - The unique identifier of the `Artist` whose `Concert` instances are to be retrieved.
     * @returns {Promise<Concert[]>} A promise that resolves with the list of `Concert` instances.
     * @memberof ConcertService
     */
    public GetConcertsByArtistId(artistId: ArtistID): Promise<Concert[]> {
        return new Promise<Concert[]>((resolve) => {
            const concerts = this.FilterConcertsByArtistId(artistId);
            resolve(concerts);
        });
    }

    /**
     * Updates an existing `Concert` instance with new data.
     *
     * @param {UpdateConcert} updateConcert - The `UpdateConcert` object containing the updated data for the `Concert` instance.
     * @throws {NotFoundError} If the `Concert` instance with the specified `id` does not exist.
     * @returns {Promise<Concert>} A promise that resolves with the updated `Concert` instance.
     * @memberof ConcertService
     */
    public UpdateConcert(updateConcert: UpdateConcert): Promise<Concert> {
        return new Promise<Concert>((resolve, reject) => {
            const concert = this.FindConcertById(updateConcert.id);

            if (!concert) {
                reject(new NotFoundError(`Concert with id '${updateConcert.id}' not found.`));
                return;
            }

            if (updateConcert.title !== undefined) {
                concert.title = updateConcert.title;
            }

            if (updateConcert.subtitle !== undefined) {
                concert.subtitle = updateConcert.subtitle;
            }

            if (updateConcert.venue !== undefined) {
                concert.venue = updateConcert.venue;
            }

            if (updateConcert.city !== undefined) {
                concert.city = updateConcert.city;
            }

            if (updateConcert.state !== undefined) {
                concert.state = updateConcert.state;
            }

            if (updateConcert.country !== undefined) {
                concert.country = updateConcert.country;
            }

            if (updateConcert.directionsUrl !== undefined) {
                concert.directionsUrl = updateConcert.directionsUrl;
            }

            if (updateConcert.date !== undefined) {
                concert.date = updateConcert.date;
            }

            if (updateConcert.status !== undefined) {
                concert.status = updateConcert.status;
            }

            if (updateConcert.ticketsUrl !== undefined) {
                concert.ticketsUrl = updateConcert.ticketsUrl;
            }

            if (updateConcert.artistId !== undefined) {
                concert.artistId = updateConcert.artistId;
            }

            concert.updatedAt = new Date();
            resolve(concert);
        });
    }

    /**
     * Deletes an existing `Concert` instance.
     *
     * @param {DeleteConcert} deleteConcert - The `DeleteConcert` object containing the unique identifier of the `Concert` instance to delete.
     * @throws {NotFoundError} If the `Concert` instance with the specified `id` does not exist.
     * @returns {Promise<void>} A promise that resolves when the `Concert` instance is deleted.
     * @memberof ConcertService
     */
    public DeleteConcert(deleteConcert: DeleteConcert): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const index = this.FindConcertIndexById(deleteConcert.id);

            if (index === -1) {
                reject(new NotFoundError(`Concert with id '${deleteConcert.id}' not found.`));
                return;
            }

            this.concerts.splice(index, 1);
            resolve();
        });
    }

    /**
     * Finds a `Concert` instance by its unique identifier.
     *
     * @private
     * @param {ConcertID} id - The unique identifier of the `Concert` instance to find.
     * @returns {Concert | undefined} The `Concert` instance if found, otherwise `undefined`.
     * @memberof ConcertService
     */
    private FindConcertById(id: ConcertID): Concert | undefined {
        return this.concerts.find((concert) => concert.id === id);
    }

    /**
     * Filters the list of `Concert` instances by the unique identifier of the associated `Artist`.
     *
     * @private
     * @param {ArtistID} artistId - The unique identifier of the `Artist` whose `Concert` instances are to be filtered.
     * @returns {Concert[]} The list of `Concert` instances for the specified `Artist`.
     * @memberof ConcertService
     */
    private FilterConcertsByArtistId(artistId: ArtistID): Concert[] {
        return this.concerts.filter((concert) => concert.artistId === artistId);
    }

    /**
     * Finds the index of a `Concert` instance by its unique identifier.
     *
     * @private
     * @param {ConcertID} id - The unique identifier of the `Concert` instance to find.
     * @returns {number} The index of the `Concert` instance if found, otherwise `-1`.
     * @memberof ConcertService
     */
    private FindConcertIndexById(id: ConcertID): number {
        return this.concerts.findIndex((concert) => concert.id === id);
    }
}
