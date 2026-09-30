import { Service } from '@angular/core';

import { CreateOrder, DeleteOrder, Order, UpdateOrder } from '@app/models/order.model';

import { OrderID, ParseOrderID } from '@app/types/order.type';
import { UserID } from '@app/types/user.type';

import { NotFoundError } from '@app/errors';

/**
 * Service for managing `Order` data.
 *
 * @export
 * @class OrderService
 */
@Service()
export class OrderService {
    /**
     * The list of `Order` instances.
     *
     * @private
     * @type {Order[]}
     * @memberof OrderService
     */
    private readonly orders: Order[] = [];

    /**
     * Creates a new `Order` instance and adds it to the list of orders.
     *
     * @param {CreateOrder} createOrder - The `CreateOrder` object containing the data for the new `Order` instance.
     * @returns {Promise<Order>} A promise that resolves with the newly created `Order` instance.
     * @memberof OrderService
     */
    public CreateOrder(createOrder: CreateOrder): Promise<Order> {
        return new Promise<Order>((resolve, reject) => {
            const order: Order = {
                id: ParseOrderID(crypto.randomUUID()),
                amount: createOrder.amount,
                status: createOrder.status,
                userId: createOrder.userId,
                createdAt: new Date(),
            };

            this.orders.push(order);
            resolve(order);
        });
    }

    /**
     * Retrieves a list of all `Order` instances.
     *
     * @returns {Promise<Order[]>} A promise that resolves with the list of all `Order` instances.
     * @memberof OrderService
     */
    public GetOrders(): Promise<Order[]> {
        return new Promise<Order[]>((resolve) => {
            resolve(this.orders);
        });
    }

    /**
     * Retrieves an `Order` instance by its unique identifier.
     *
     * @param {OrderID} id - The unique identifier of the `Order` instance to retrieve.
     * @throws {NotFoundError} If the `Order` instance with the specified `id` does not exist.
     * @returns {Promise<Order>} A promise that resolves with the `Order` instance.
     * @memberof OrderService
     */
    public GetOrderById(id: OrderID): Promise<Order> {
        return new Promise<Order>((resolve, reject) => {
            const order = this.FindOrderById(id);

            if (!order) {
                reject(new NotFoundError(`Order with id '${id}' not found.`));
                return;
            }

            resolve(order);
        });
    }

    /**
     * Retrieves a list of `Order` instances by the unique identifier of the associated `User`.
     *
     * @param {UserID} userId - The unique identifier of the `User` whose `Order` instances are to be retrieved.
     * @returns {Promise<Order[]>} A promise that resolves with the list of `Order` instances.
     * @memberof OrderService
     */
    public GetOrdersByUserId(userId: UserID): Promise<Order[]> {
        return new Promise<Order[]>((resolve) => {
            const orders = this.FilterOrdersByUserId(userId);
            resolve(orders);
        });
    }

    /**
     * Updates an existing `Order` instance with new data.
     *
     * @param {UpdateOrder} updateOrder - The `UpdateOrder` object containing the updated data for the `Order` instance.
     * @throws {NotFoundError} If the `Order` instance with the specified `id` does not exist.
     * @returns {Promise<Order>} A promise that resolves with the updated `Order` instance.
     * @memberof OrderService
     */
    public UpdateOrder(updateOrder: UpdateOrder): Promise<Order> {
        return new Promise<Order>((resolve, reject) => {
            const order = this.FindOrderById(updateOrder.id);

            if (!order) {
                reject(new NotFoundError(`Order with id '${updateOrder.id}' not found.`));
                return;
            }

            if (updateOrder.amount !== undefined) {
                order.amount = updateOrder.amount;
            }

            if (updateOrder.status !== undefined) {
                order.status = updateOrder.status;
            }

            if (updateOrder.userId !== undefined) {
                order.userId = updateOrder.userId;
            }

            order.updatedAt = new Date();

            resolve(order);
        });
    }

    /**
     * Deletes an existing `Order` instance.
     *
     * @param {DeleteOrder} deleteOrder - The `DeleteOrder` object containing the unique identifier of the `Order` instance to delete.
     * @throws {NotFoundError} If the `Order` instance with the specified `id` does not exist.
     * @returns {Promise<void>} A promise that resolves when the `Order` instance is deleted.
     * @memberof OrderService
     */
    public DeleteOrder(deleteOrder: DeleteOrder): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const index = this.FindOrderIndexById(deleteOrder.id);

            if (index === -1) {
                reject(new NotFoundError(`Order with id '${deleteOrder.id}' not found.`));
                return;
            }

            this.orders.splice(index, 1);
            resolve();
        });
    }

    /**
     * Finds an `Order` instance by its unique identifier.
     *
     * @private
     * @param {OrderID} id - The unique identifier of the `Order` instance to find.
     * @returns {Order | undefined} The `Order` instance if found, otherwise `undefined`.
     * @memberof OrderService
     */
    private FindOrderById(id: OrderID): Order | undefined {
        return this.orders.find((order) => order.id === id);
    }

    /**
     * Filters the list of `Order` instances by the unique identifier of the associated `User`.
     *
     * @private
     * @param {UserID} userId - The unique identifier of the `User` whose `Order` instances are to be filtered.
     * @returns {Order[]} The list of `Order` instances for the specified `User`.
     * @memberof OrderService
     */
    private FilterOrdersByUserId(userId: UserID): Order[] {
        return this.orders.filter((order) => order.userId === userId);
    }

    /**
     * Finds the index of an `Order` instance by its unique identifier.
     *
     * @private
     * @param {OrderID} id - The unique identifier of the `Order` instance to find.
     * @returns {number} The index of the `Order` instance if found, otherwise `-1`.
     * @memberof OrderService
     */
    private FindOrderIndexById(id: OrderID): number {
        return this.orders.findIndex((order) => order.id === id);
    }
}
