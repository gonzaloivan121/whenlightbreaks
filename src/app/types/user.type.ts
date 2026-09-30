import { Brand, CreateBrander } from '@app/types/brand.type';
import { ParseUUID, UUID } from '@app/types/uuid.type';

/**
 * A branded type representing the unique identifier for a `User`.
 *
 * @export
 * @type {Brand<UUID, "UserID">}
 */
export type UserID = Brand<UUID, 'UserID'>;

/**
 * Casts a validated `UUID` into a `UserID` brand.
 *
 * @export
 */
export const ToUserID = CreateBrander<UUID, 'UserID'>();

/**
 * Parses and validates a raw `string` value as a `UserID`.
 *
 * @export
 * @param {string} value - The raw `string` value to be parsed and validated as a `UserID`.
 * @returns {UserID}
 */
export function ParseUserID(value: string): UserID {
    return ToUserID(ParseUUID(value));
}
