import { Brand, CreateBrander } from '@app/types/brand.type';
import { ParseUUID, UUID } from '@app/types/uuid.type';

/**
 * A branded type representing the unique identifier for an `Album`.
 *
 * @export
 * @type {Brand<UUID, "AlbumID">}
 */
export type AlbumID = Brand<UUID, 'AlbumID'>;

/**
 * Casts a validated `UUID` into an `AlbumID` brand.
 *
 * @export
 */
export const ToAlbumID = CreateBrander<UUID, 'AlbumID'>();

/**
 * Parses and validates a raw `string` value as an `AlbumID`.
 *
 * @export
 * @param {string} value - The raw `string` value to be parsed and validated as an `AlbumID`.
 * @returns {AlbumID}
 */
export function ParseAlbumID(value: string): AlbumID {
    return ToAlbumID(ParseUUID(value));
}
