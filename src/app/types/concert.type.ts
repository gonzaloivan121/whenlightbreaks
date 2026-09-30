import { Brand, CreateBrander } from '@app/types/brand.type';
import { ParseUUID, UUID } from '@app/types/uuid.type';

/**
 * A branded type representing the unique identifier for a `Concert`.
 *
 * @export
 * @type {Brand<UUID, "ConcertID">}
 */
export type ConcertID = Brand<UUID, 'ConcertID'>;

/**
 * Casts a validated `UUID` into a `ConcertID` brand.
 *
 * @export
 */
export const ToConcertID = CreateBrander<UUID, 'ConcertID'>();

/**
 * Parses and validates a raw `string` value as a `ConcertID`.
 *
 * @export
 * @param {string} value - The raw `string` value to be parsed and validated as a `ConcertID`.
 * @returns {ConcertID}
 */
export function ParseConcertID(value: string): ConcertID {
    return ToConcertID(ParseUUID(value));
}
