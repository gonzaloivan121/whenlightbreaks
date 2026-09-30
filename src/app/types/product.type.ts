import { Brand, CreateBrander } from '@app/types/brand.type';
import { ParseUUID, UUID } from '@app/types/uuid.type';

/**
 * A branded type representing the unique identifier for a `Product`.
 *
 * @export
 * @type {Brand<UUID, "ProductID">}
 */
export type ProductID = Brand<UUID, 'ProductID'>;

/**
 * Casts a validated `UUID` into an `ProductID` brand.
 *
 * @export
 */
export const ToProductID = CreateBrander<UUID, 'ProductID'>();

/**
 * Parses and validates a raw `string` value as a `ProductID`.
 *
 * @export
 * @param {string} value - The raw `string` value to be parsed and validated as an `ProductID`.
 * @returns {ProductID}
 */
export function ParseProductID(value: string): ProductID {
    return ToProductID(ParseUUID(value));
}
