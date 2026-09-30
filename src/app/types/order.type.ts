import { Brand, CreateBrander } from '@app/types/brand.type';
import { ParseUUID, UUID } from '@app/types/uuid.type';

/**
 * A branded type representing the unique identifier for a `Order`.
 *
 * @export
 * @type {Brand<UUID, "OrderID">}
 */
export type OrderID = Brand<UUID, 'OrderID'>;

/**
 * Casts a validated `UUID` into an `OrderID` brand.
 *
 * @export
 */
export const ToOrderID = CreateBrander<UUID, 'OrderID'>();

/**
 * Parses and validates a raw `string` value as an `OrderID`.
 *
 * @export
 * @param {string} value - The raw `string` value to be parsed and validated as an `OrderID`.
 * @returns {OrderID}
 */
export function ParseOrderID(value: string): OrderID {
    return ToOrderID(ParseUUID(value));
}
