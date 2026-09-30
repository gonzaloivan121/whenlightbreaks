import { OrderID } from "@app/types/order.type";
import { UserID } from "@app/types/user.type";

/**
 * Represents the status of an `Order`.
 */
export type OrderStatus = 'pending' | 'completed' | 'canceled';

/**
 * Represents an `Order`.
 *
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * The unique identifier for the `Order`.
     *
     * @type {OrderID}
     * @memberof Order
     */
    id: OrderID;

    /**
     * The total amount for the `Order`.
     *
     * @type {number}
     * @memberof Order
     */
    amount: number;

    /**
     * The status of the `Order`.
     *
     * @type {OrderStatus}
     * @memberof Order
     */
    status: OrderStatus;

    /**
     * The unique identifier of the `User` associated with the `Order`.
     *
     * @type {UserID}
     * @memberof Order
     */
    userId: UserID;
    
    /**
     * The date and time when the `Order` was created.
     *
     * @type {Date}
     * @memberof Order
     */
    createdAt: Date;

    /**
     * The date and time when the `Order` was last updated.
     *
     * @type {Date}
     * @memberof Order
     */
    updatedAt?: Date;
}

/**
 * Type that represents a `CreateOrder` object, which is used to create a new `Order`.
 *
 * @example
 * const createOrder: CreateOrder = {
 *     amount: 100,
 *     status: "pending",
 *     userId: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {CreateOrder}
 */
export type CreateOrder = Omit<Order, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Type that represents an `UpdateOrder` object, which is used to update an existing `Order`.
 *
 * @example
 * const updateOrder: UpdateOrder = {
 *     id: "123e4567-e89b-12d3-a456-426614174000",
 *     amount: 100,
 *     status: "pending",
 *     userId: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {UpdateOrder}
 */
export type UpdateOrder = Partial<Order> & Pick<Order, 'id'>;

/**
 * Type that represents a `DeleteOrder` object, which is used to delete an existing `Order`.
 * 
 * @example
 * const deleteOrder: DeleteOrder = {
 *     id: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {DeleteOrder}
 */
export type DeleteOrder = Pick<Order, 'id'>;