/**
 * A utility type for creating branded types.
 *
 * @template K - The base type to be branded.
 * @template T - The unique brand identifier.
 * @example
 * type UserID = Brand<number, "UserID">;
 * type ItemId = Brand<number, "ItemId">;
 * type OrderID = Brand<number, "OrderID">;
 *
 * const ToUserID = CreateBrander<number, "UserID">();
 * const ToItemId = CreateBrander<number, "ItemId">();
 * const ToOrderID = CreateBrander<number, "OrderID">();
 *
 * const userId: UserID = ToUserID("9119b14b-6151-4b5a-8bb5-52fce8b132ca");
 * const itemId: ItemId = ToItemId("407c6a04-78d6-490b-a2d8-2d7a072c093e");
 * const orderId: OrderID = ToOrderID("06f9b642-36d6-4c3e-a456-754f711e5677");
 */
declare const brandSymbol: unique symbol;

/**
 * A type representing a branded version of the base type `K` with a unique identifier `T`.
 * This allows for creating distinct types that are not interchangeable even if they share the same underlying type.
 */
export type Brand<K, T extends string> = K & { readonly [brandSymbol]: T };

/**
 * Builds a constructor function for a branded type.
 *
 * The returned function only accepts values assignable to `K`, so it preserves
 * compile-time checks for constrained string types such as `UUID`.
 *
 * @export
 * @template K - The base type to be branded.
 * @template T - The unique brand identifier.
 * @returns {(value: K) => Brand<K, T>}
 */
export function CreateBrander<K, T extends string>(): (value: K) => Brand<K, T> {
    return (value: K) => value as Brand<K, T>;
}
