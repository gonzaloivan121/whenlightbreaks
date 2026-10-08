import { inject, Service } from '@angular/core';

import { CreateInvoice, DeleteInvoice, Invoice, UpdateInvoice } from '@models/invoice.model';

import { InvoiceID } from '@app/types/invoice.type';
import { UserID } from '@app/types/user.type';
import { OrderID } from '@app/types/order.type';

import { ApiService, EndpointRoute } from '@services/api/api.service';

/**
 * Service for managing `Invoice` data.
 *
 * @export
 * @class InvoiceService
 */
@Service()
export class InvoiceService {
    /**
     * The API service to request and post data from.
     *
     * @private
     * @type {ApiService}
     * @memberof SongService
     */
    private readonly apiService: ApiService = inject(ApiService);

    /**
     * Creates a new `Invoice` instance and adds it to the list of invoices.
     *
     * @param {CreateInvoice} createInvoice - The `CreateInvoice` object containing the data for the new `Invoice` instance.
     * @memberof InvoiceService
     */
    public CreateInvoice(createInvoice: CreateInvoice) {
        return this.apiService.Create<Invoice>(EndpointRoute.Invoice, createInvoice);
    }

    /**
     * Retrieves a list of all `Invoice` instances.
     *
     * @memberof InvoiceService
     */
    public GetInvoices() {
        return this.apiService.Get<Invoice[]>(EndpointRoute.Invoice);
    }

    /**
     * Retrieves an `Invoice` instance by its unique identifier.
     *
     * @param {InvoiceID} id - The unique identifier of the `Invoice` instance to retrieve.
     * @memberof InvoiceService
     */
    public GetInvoiceById(id: InvoiceID) {
        return this.apiService.GetById<Invoice>(EndpointRoute.Invoice, id);
    }

    /**
     * Retrieves a list of `Invoice` instances by the unique identifier of the associated `User`.
     *
     * @param {UserID} userId - The unique identifier of the `User` whose `Invoice` instances are to be retrieved.
     * @memberof InvoiceService
     */
    public GetInvoicesByUserId(userId: UserID) {
        return this.apiService.GetByDependantId<Invoice[]>(
            EndpointRoute.Invoice,
            EndpointRoute.User,
            userId,
        );
    }

    /**
     * Retrieves a list of `Invoice` instances by the unique identifier of the associated `Order`.
     *
     * @param {OrderID} orderId - The unique identifier of the `Order` whose `Invoice` instances are to be retrieved.
     * @memberof InvoiceService
     */
    public GetInvoicesByOrderId(orderId: OrderID) {
        return this.apiService.GetByDependantId<Invoice[]>(
            EndpointRoute.Invoice,
            EndpointRoute.Order,
            orderId,
        );
    }

    /**
     * Updates an existing `Invoice` instance with new data.
     *
     * @param {UpdateInvoice} updateInvoice - The `UpdateInvoice` object containing the updated data for the `Invoice` instance.
     * @memberof InvoiceService
     */
    public UpdateInvoice(updateInvoice: UpdateInvoice) {
        return this.apiService.Update<Invoice>(
            EndpointRoute.Invoice,
            updateInvoice.id,
            updateInvoice,
        );
    }

    /**
     * Deletes an existing `Invoice` instance.
     *
     * @param {DeleteInvoice} deleteInvoice - The `DeleteInvoice` object containing the unique identifier of the `Invoice` instance to delete.
     * @memberof InvoiceService
     */
    public DeleteInvoice(deleteInvoice: DeleteInvoice) {
        return this.apiService.Delete(EndpointRoute.Invoice, deleteInvoice.id);
    }
}
