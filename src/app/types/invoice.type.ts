import { Brand, CreateBrander } from '@app/types/brand.type';
import { ParseUUID, UUID } from '@app/types/uuid.type';

/**
 * A branded type representing the unique identifier for a `Invoice`.
 *
 * @export
 * @type {Brand<UUID, "InvoiceID">}
 */
export type InvoiceID = Brand<UUID, 'InvoiceID'>;

/**
 * Casts a validated `UUID` into an `InvoiceID` brand.
 *
 * @export
 */
export const ToInvoiceID = CreateBrander<UUID, 'InvoiceID'>();

/**
 * Parses and validates a raw `string` value as an `InvoiceID`.
 *
 * @export
 * @param {string} value - The raw `string` value to be parsed and validated as an `InvoiceID`.
 * @returns {InvoiceID}
 */
export function ParseInvoiceID(value: string): InvoiceID {
    return ToInvoiceID(ParseUUID(value));
}
