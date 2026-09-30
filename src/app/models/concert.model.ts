import type { ConcertID } from '@app/types/concert.type';
import type { ArtistID } from '@app/types/artist.type';

/**
 * Represents the status of a `Concert`.
 */
export type ConcertStatus = 'available' | 'sold-out' | 'coming-soon' | 'cancelled';

/**
 * Represents a `Concert`.
 *
 * @export
 * @interface Concert
 */
export interface Concert {
    /**
     * The unique identifier for the `Concert`.
     *
     * @type {ConcertID}
     * @memberof Concert
     */
    id: ConcertID;

    /**
     * The title of the `Concert`.
     *
     * @type {string}
     * @memberof Concert
     */
    title: string;

    /**
     * The subtitle of the `Concert`.
     *
     * @type {string}
     * @memberof Concert
     */
    subtitle: string;

    /**
     * The venue of the `Concert`.
     *
     * @type {string}
     * @memberof Concert
     */
    venue: string;

    /**
     * The city of the `Concert`.
     *
     * @type {string}
     * @memberof Concert
     */
    city: string;

    /**
     * The state of the `Concert`.
     *
     * @type {string}
     * @memberof Concert
     */
    state: string;

    /**
     * The country of the `Concert`.
     *
     * @type {string}
     * @memberof Concert
     */
    country: string;

    /**
     * The URL for directions to the location of the `Concert`.
     *
     * @type {string}
     * @memberof Concert
     */
    directionsUrl: string;

    /**
     * The date of the `Concert`.
     *
     * @type {Date}
     * @memberof Concert
     */
    date: Date;

    /**
     * The status of the `Concert`.
     *
     * @type {ConcertStatus}
     * @memberof Concert
     */
    status: ConcertStatus;

    /**
     * The URL for purchasing tickets for the `Concert`.
     *
     * @type {string}
     * @memberof Concert
     */
    ticketsUrl: string;

    /**
     * The unique identifier of the `Artist` associated with the `Concert`.
     *
     * @type {ArtistID}
     * @memberof Concert
     */
    artistId: ArtistID;

    /**
     * The date and time when the `Concert` was created.
     *
     * @type {Date}
     * @memberof Concert
     */
    createdAt: Date;

    /**
     * The date and time when the `Concert` was last updated.
     *
     * @type {Date}
     * @memberof Concert
     */
    updatedAt?: Date;
}

/**
 * Type that represents a `CreateConcert` object, which is used to create a new `Concert`.
 *
 * @example
 * const createConcert: CreateConcert = {
 *     title: "Concert Title",
 *     subtitle: "Concert Subtitle",
 *     location: "Concert Location",
 *     directionsUrl: "https://example.com/directions",
 *     date: new Date(),
 *     status: "available",
 *     ticketsUrl: "https://example.com/tickets",
 *     artistId: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {CreateConcert}
 */
export type CreateConcert = Omit<Concert, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Type that represents an `UpdateConcert` object, which is used to update an existing `Concert`.
 *
 * @example
 * const updateConcert: UpdateConcert = {
 *     id: "123e4567-e89b-12d3-a456-426614174000",
 *     title: "Concert Title",
 *     subtitle: "Concert Subtitle",
 *     location: "Concert Location",
 *     directionsUrl: "https://example.com/directions",
 *     date: new Date(),
 *     status: "available",
 *     ticketsUrl: "https://example.com/tickets",
 *     artistId: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {UpdateConcert}
 */
export type UpdateConcert = Partial<Concert> & Pick<Concert, 'id'>;

/**
 * Type that represents a `DeleteConcert` object, which is used to delete an existing `Concert`.
 *
 * @example
 * const deleteConcert: DeleteConcert = {
 *     id: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {DeleteConcert}
 */
export type DeleteConcert = Pick<Concert, 'id'>;