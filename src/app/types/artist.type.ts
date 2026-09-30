import { Brand, CreateBrander } from '@app/types/brand.type';
import { ParseUUID, UUID } from '@app/types/uuid.type';

/**
 * A branded type representing the unique identifier for an `Artist`.
 *
 * @export
 * @type {Brand<UUID, "ArtistID">}
 */
export type ArtistID = Brand<UUID, 'ArtistID'>;

/**
 * Casts a validated `UUID` into an `ArtistID` brand.
 *
 * @export
 */
export const ToArtistID = CreateBrander<UUID, 'ArtistID'>();

/**
 * Parses and validates a raw `string` value as an `ArtistID`.
 *
 * @export
 * @param {string} value - The raw `string` value to be parsed and validated as an `ArtistID`.
 * @returns {ArtistID}
 */
export function ParseArtistID(value: string): ArtistID {
    return ToArtistID(ParseUUID(value));
}
