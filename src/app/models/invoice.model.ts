import { InvoiceID } from "@app/types/invoice.type";
import { OrderID } from "@app/types/order.type";
import { UserID } from "@app/types/user.type";

/**
 * Represents the status of an `Invoice`.
 */
export type InvoiceStatus = 'pending' | 'paid' | 'cancelled';

/**
 * Represents an `Invoice`.
 *
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * The unique identifier for the `Invoice`.
     *
     * @type {InvoiceID}
     * @memberof Invoice
     */
    id: InvoiceID;

    /**
     * The amount of the `Invoice`.
     *
     * @type {number}
     * @memberof Invoice
     */
    amount: number;

    /**
     * The status of the `Invoice`.
     *
     * @type {InvoiceStatus}
     * @memberof Invoice
     */
    status: InvoiceStatus;

    /**
     * The unique identifier of the `User` associated with the `Invoice`.
     *
     * @type {UserID}
     * @memberof Invoice
     */
    userId: UserID;

    /**
     * The unique identifier of the `Order` associated with the `Invoice`.
     *
     * @type {OrderID}
     * @memberof Invoice
     */
    orderId: OrderID;

    /**
     * The date and time when the `Invoice` was created.
     *
     * @type {Date}
     * @memberof Invoice
     */
    createdAt: Date;

    /**
     * The date and time when the `Invoice` was last updated.
     *
     * @type {Date}
     * @memberof Invoice
     */
    updatedAt?: Date;
}

/**
 * Type that represents a `CreateInvoice` object, which is used to create a new `Invoice`.
 *
 * @example
 * const createInvoice: CreateInvoice = {
 *     amount: 100,
 *     status: "pending",
 *     userId: "123e4567-e89b-12d3-a456-426614174000",
 *     orderId: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {CreateInvoice}
 */
export type CreateInvoice = Omit<Invoice, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Type that represents an `UpdateInvoice` object, which is used to update an existing `Invoice`.
 *
 * @example
 * const updateInvoice: UpdateInvoice = {
 *     id: "123e4567-e89b-12d3-a456-426614174000",
 *     amount: 150,
 *     status: "paid",
 *     userId: "123e4567-e89b-12d3-a456-426614174000",
 *     orderId: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {UpdateInvoice}
 */
export type UpdateInvoice = Partial<Invoice> & Pick<Invoice, 'id'>;

/**
 * Type that represents a `DeleteInvoice` object, which is used to delete an existing `Invoice`.
 *
 * @example
 * const deleteInvoice: DeleteInvoice = {
 *   id: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {DeleteInvoice}
 */
export type DeleteInvoice = Pick<Invoice, 'id'>;