import { Brand, CreateBrander } from '@app/types/brand.type';
import { ParseUUID, UUID } from '@app/types/uuid.type';

/**
 * A branded type representing the unique identifier for a `Link`.
 *
 * @export
 * @type {Brand<UUID, "LinkID">}
 */
export type LinkID = Brand<UUID, 'LinkID'>;

/**
 * Casts a validated `UUID` into a `LinkID` brand.
 *
 * @export
 */
export const ToLinkID = CreateBrander<UUID, 'LinkID'>();

/**
 * Parses and validates a raw `string` value as a `LinkID`.
 *
 * @export
 * @param {string} value - The raw `string` value to be parsed and validated as a `LinkID`.
 * @returns {LinkID}
 */
export function ParseLinkID(value: string): LinkID {
    return ToLinkID(ParseUUID(value));
}
