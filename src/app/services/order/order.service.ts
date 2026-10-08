import { inject, Service } from '@angular/core';

import { CreateOrder, DeleteOrder, Order, UpdateOrder } from '@models/order.model';

import { OrderID } from '@app/types/order.type';
import { UserID } from '@app/types/user.type';

import { ApiService, EndpointRoute } from '@services/api/api.service';

/**
 * Service for managing `Order` data.
 *
 * @export
 * @class OrderService
 */
@Service()
export class OrderService {
    /**
     * The API service to request and post data from.
     *
     * @private
     * @type {ApiService}
     * @memberof SongService
     */
    private readonly apiService: ApiService = inject(ApiService);

    /**
     * Creates a new `Order` instance and adds it to the list of orders.
     *
     * @param {CreateOrder} createOrder - The `CreateOrder` object containing the data for the new `Order` instance.
     * @memberof OrderService
     */
    public CreateOrder(createOrder: CreateOrder) {
        return this.apiService.Create<Order>(EndpointRoute.Order, createOrder);
    }

    /**
     * Retrieves a list of all `Order` instances.
     *
     * @memberof OrderService
     */
    public GetOrders() {
        return this.apiService.Get<Order[]>(EndpointRoute.Order);
    }

    /**
     * Retrieves an `Order` instance by its unique identifier.
     *
     * @param {OrderID} id - The unique identifier of the `Order` instance to retrieve.
     * @memberof OrderService
     */
    public GetOrderById(id: OrderID) {
        return this.apiService.GetById<Order>(EndpointRoute.Order, id);
    }

    /**
     * Retrieves a list of `Order` instances by the unique identifier of the associated `User`.
     *
     * @param {UserID} userId - The unique identifier of the `User` whose `Order` instances are to be retrieved.
     * @memberof OrderService
     */
    public GetOrdersByUserId(userId: UserID) {
        return this.apiService.GetByDependantId<Order[]>(
            EndpointRoute.Order,
            EndpointRoute.User,
            userId,
        );
    }

    /**
     * Updates an existing `Order` instance with new data.
     *
     * @param {UpdateOrder} updateOrder - The `UpdateOrder` object containing the updated data for the `Order` instance.
     * @memberof OrderService
     */
    public UpdateOrder(updateOrder: UpdateOrder) {
        return this.apiService.Update<Order>(EndpointRoute.Order, updateOrder.id, updateOrder);
    }

    /**
     * Deletes an existing `Order` instance.
     *
     * @param {DeleteOrder} deleteOrder - The `DeleteOrder` object containing the unique identifier of the `Order` instance to delete.
     * @memberof OrderService
     */
    public DeleteOrder(deleteOrder: DeleteOrder) {
        return this.apiService.Delete(EndpointRoute.Order, deleteOrder.id);
    }
}
