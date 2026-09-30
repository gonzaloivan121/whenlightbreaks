import { Service } from '@angular/core';

import { CreateInvoice, DeleteInvoice, Invoice, UpdateInvoice } from '@app/models/invoice.model';

import { InvoiceID, ParseInvoiceID } from '@app/types/invoice.type';
import { UserID } from '@app/types/user.type';

import { NotFoundError } from '@app/errors';
import { OrderID } from '@app/types/order.type';

/**
 * Service for managing `Invoice` data.
 *
 * @export
 * @class InvoiceService
 */
@Service()
export class InvoiceService {
    /**
     * The list of `Invoice` instances.
     *
     * @private
     * @type {Invoice[]}
     * @memberof InvoiceService
     */
    private readonly invoices: Invoice[] = [];

    /**
     * Creates a new `Invoice` instance and adds it to the list of invoices.
     *
     * @param {CreateInvoice} createInvoice - The `CreateInvoice` object containing the data for the new `Invoice` instance.
     * @returns {Promise<Invoice>} A promise that resolves with the newly created `Invoice` instance.
     * @memberof InvoiceService
     */
    public CreateInvoice(createInvoice: CreateInvoice): Promise<Invoice> {
        return new Promise<Invoice>((resolve) => {
            const invoice: Invoice = {
                id: ParseInvoiceID(crypto.randomUUID()),
                amount: createInvoice.amount,
                status: createInvoice.status,
                userId: createInvoice.userId,
                orderId: createInvoice.orderId,
                createdAt: new Date(),
            };

            this.invoices.push(invoice);
            resolve(invoice);
        });
    }

    /**
     * Retrieves a list of all `Invoice` instances.
     *
     * @returns {Promise<Invoice[]>} A promise that resolves with the list of all `Invoice` instances.
     * @memberof InvoiceService
     */
    public GetInvoices(): Promise<Invoice[]> {
        return new Promise<Invoice[]>((resolve) => {
            resolve(this.invoices);
        });
    }

    /**
     * Retrieves an `Invoice` instance by its unique identifier.
     *
     * @param {InvoiceID} id - The unique identifier of the `Invoice` instance to retrieve.
     * @throws {NotFoundError} If the `Invoice` instance with the specified `id` does not exist.
     * @returns {Promise<Invoice>} A promise that resolves with the `Invoice` instance.
     * @memberof InvoiceService
     */
    public GetInvoiceById(id: InvoiceID): Promise<Invoice> {
        return new Promise<Invoice>((resolve, reject) => {
            const invoice = this.FindInvoiceById(id);

            if (!invoice) {
                reject(new NotFoundError(`Invoice with id '${id}' not found.`));
                return;
            }

            resolve(invoice);
        });
    }

    /**
     * Retrieves a list of `Invoice` instances by the unique identifier of the associated `User`.
     *
     * @param {UserID} userId - The unique identifier of the `User` whose `Invoice` instances are to be retrieved.
     * @returns {Promise<Invoice[]>} A promise that resolves with the list of `Invoice` instances.
     * @memberof InvoiceService
     */
    public GetInvoicesByUserId(userId: UserID): Promise<Invoice[]> {
        return new Promise<Invoice[]>((resolve) => {
            const invoices = this.FilterInvoicesByUserId(userId);
            resolve(invoices);
        });
    }

    /**
     * Retrieves a list of `Invoice` instances by the unique identifier of the associated `Order`.
     *
     * @param {OrderID} orderId - The unique identifier of the `Order` whose `Invoice` instances are to be retrieved.
     * @returns {Promise<Invoice[]>} A promise that resolves with the list of `Invoice` instances.
     * @memberof InvoiceService
     */
    public GetInvoicesByOrderId(orderId: OrderID): Promise<Invoice[]> {
        return new Promise<Invoice[]>((resolve) => {
            const invoices = this.FilterInvoicesByOrderId(orderId);
            resolve(invoices);
        });
    }

    /**
     * Updates an existing `Invoice` instance with new data.
     *
     * @param {UpdateInvoice} updateInvoice - The `UpdateInvoice` object containing the updated data for the `Invoice` instance.
     * @throws {NotFoundError} If the `Invoice` instance with the specified `id` does not exist.
     * @returns {Promise<Invoice>} A promise that resolves with the updated `Invoice` instance.
     * @memberof InvoiceService
     */
    public UpdateInvoice(updateInvoice: UpdateInvoice): Promise<Invoice> {
        return new Promise<Invoice>((resolve, reject) => {
            const invoice = this.FindInvoiceById(updateInvoice.id);

            if (!invoice) {
                reject(new NotFoundError(`Invoice with id '${updateInvoice.id}' not found.`));
                return;
            }

            if (updateInvoice.amount !== undefined) {
                invoice.amount = updateInvoice.amount;
            }

            if (updateInvoice.status !== undefined) {
                invoice.status = updateInvoice.status;
            }

            if (updateInvoice.userId !== undefined) {
                invoice.userId = updateInvoice.userId;
            }

            if (updateInvoice.orderId !== undefined) {
                invoice.orderId = updateInvoice.orderId;
            }

            invoice.updatedAt = new Date();

            resolve(invoice);
        });
    }

    /**
     * Deletes an existing `Invoice` instance.
     *
     * @param {DeleteInvoice} deleteInvoice - The `DeleteInvoice` object containing the unique identifier of the `Invoice` instance to delete.
     * @throws {NotFoundError} If the `Invoice` instance with the specified `id` does not exist.
     * @returns {Promise<void>} A promise that resolves when the `Invoice` instance is deleted.
     * @memberof InvoiceService
     */
    public DeleteInvoice(deleteInvoice: DeleteInvoice): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const index = this.FindInvoiceIndexById(deleteInvoice.id);

            if (index === -1) {
                reject(new NotFoundError(`Invoice with id '${deleteInvoice.id}' not found.`));
                return;
            }

            this.invoices.splice(index, 1);
            resolve();
        });
    }

    /**
     * Finds an `Invoice` instance by its unique identifier.
     *
     * @private
     * @param {InvoiceID} id - The unique identifier of the `Invoice` instance to find.
     * @returns {Invoice | undefined} The `Invoice` instance if found, otherwise `undefined`.
     * @memberof InvoiceService
     */
    private FindInvoiceById(id: InvoiceID): Invoice | undefined {
        return this.invoices.find((invoice) => invoice.id === id);
    }

    /**
     * Filters the list of `Invoice` instances by the unique identifier of the associated `User`.
     *
     * @private
     * @param {UserID} userId - The unique identifier of the `User` whose `Invoice` instances are to be filtered.
     * @returns {Invoice[]} The list of `Invoice` instances for the specified `User`.
     * @memberof InvoiceService
     */
    private FilterInvoicesByUserId(userId: UserID): Invoice[] {
        return this.invoices.filter((invoice) => invoice.userId === userId);
    }

    /**
     * Filters the list of `Invoice` instances by the unique identifier of the associated `Order`.
     *
     * @private
     * @param {OrderID} orderId - The unique identifier of the `Order` whose `Invoice` instances are to be filtered.
     * @returns {Invoice[]} The list of `Invoice` instances for the specified `Order`.
     * @memberof InvoiceService
     */
    private FilterInvoicesByOrderId(orderId: OrderID): Invoice[] {
        return this.invoices.filter((invoice) => invoice.orderId === orderId);
    }

    /**
     * Finds the index of an `Invoice` instance by its unique identifier.
     *
     * @private
     * @param {InvoiceID} id - The unique identifier of the `Invoice` instance to find.
     * @returns {number} The index of the `Invoice` instance if found, otherwise `-1`.
     * @memberof InvoiceService
     */
    private FindInvoiceIndexById(id: InvoiceID): number {
        return this.invoices.findIndex((invoice) => invoice.id === id);
    }
}
