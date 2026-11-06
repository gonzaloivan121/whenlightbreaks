import { Brand, CreateBrander } from '@app/types/brand.type';
import { ParseUUID, UUID } from '@app/types/uuid.type';

import { InvalidArgumentError } from '@app/errors';

/**
 * A branded type representing the unique identifier for an `Album`.
 *
 * @export
 * @type {Brand<UUID, "AlbumID">}
 */
export type AlbumID = Brand<UUID, 'AlbumID'>;

/**
 * A branded type representing the unique code for an `Album`.
 *
 * @export
 * @type {Brand<string, "AlbumCode">}
 */
export type AlbumCode = Brand<string, 'AlbumCode'>;

/**
 * Casts a validated `UUID` into an `AlbumID` brand.
 *
 * @export
 */
export const ToAlbumID = CreateBrander<UUID, 'AlbumID'>();

/**
 * Casts a validated `string` into an `AlbumCode` brand.
 *
 * @export
 */
export const ToAlbumCode = CreateBrander<string, 'AlbumCode'>();

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

/**
 * Parses and validates a raw `string` value as an `AlbumCode`.
 *
 * @export
 * @param {string} value - The raw `string` value to be parsed and validated as an `AlbumCode`.
 * @throws {InvalidArgumentError} If the provided value is not a valid `AlbumCode`.
 * @returns {AlbumCode}
 */
export function ParseAlbumCode(value: string): AlbumCode {
    if (typeof value !== 'string' || value.trim() === '') {
        throw new InvalidArgumentError(`Invalid AlbumCode: ${value}`);
    }

    return ToAlbumCode(value.trim());
}
