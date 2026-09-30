import { Brand, CreateBrander } from '@app/types/brand.type';
import { ParseUUID, UUID } from '@app/types/uuid.type';

/**
 * A branded type representing the unique identifier for a `Song`.
 *
 * @export
 * @type {Brand<UUID, "SongID">}
 */
export type SongID = Brand<UUID, 'SongID'>;

/**
 * Casts a validated `UUID` into an `SongID` brand.
 *
 * @export
 */
export const ToSongID = CreateBrander<UUID, 'SongID'>();

/**
 * Parses and validates a raw `string` value as a `SongID`.
 *
 * @export
 * @param {string} value - The raw `string` value to be parsed and validated as an `SongID`.
 * @returns {SongID}
 */
export function ParseSongID(value: string): SongID {
    return ToSongID(ParseUUID(value));
}
