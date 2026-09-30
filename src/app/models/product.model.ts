import { ProductID } from "@app/types/product.type";

/**
 * Represents a `Product`.
 *
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * The unique identifier for the `Product`.
     *
     * @type {ProductID}
     * @memberof Product
     */
    id: ProductID;
    
    /**
     * The name of the `Product`.
     *
     * @type {string}
     * @memberof Product
     */
    name: string;

    /**
     * The description of the `Product`.
     *
     * @type {string}
     * @memberof Product
     */
    description: string;

    /**
     * The price of the `Product`.
     *
     * @type {number}
     * @memberof Product
     */
    price: number;

    /**
     * The image URL of the `Product`.
     *
     * @type {string}
     * @memberof Product
     */
    imageUrl: string;

    /**
     * The date and time when the `Product` was created.
     *
     * @type {Date}
     * @memberof Product
     */
    createdAt: Date;

    /**
     * The date and time when the `Product` was last updated.
     *
     * @type {Date}
     * @memberof Product
     */
    updatedAt?: Date;
}

/**
 * Type that represents a `CreateProduct` object, which is used to create a new `Product`.
 *
 * @example
 * const createProduct: CreateProduct = {
 *     name: "Sample Product",
 *     description: "This is a sample product.",
 *     price: 100,
 *     imageUrl: "https://example.com/product.jpg"
 * };
 * @export
 * @type {CreateProduct}
 */
export type CreateProduct = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Type that represents an `UpdateProduct` object, which is used to update an existing `Product`.
 *
 * @example
 * const updateProduct: UpdateProduct = {
 *     id: "123e4567-e89b-12d3-a456-426614174000",
 *     name: "Updated Product Name"
 * };
 * @export
 * @type {UpdateProduct}
 */
export type UpdateProduct = Partial<Product> & Pick<Product, 'id'>;

/**
 * Type that represents a `DeleteProduct` object, which is used to delete an existing `Product`.
 *
 * @example
 * const deleteProduct: DeleteProduct = {
 *     id: "123e4567-e89b-12d3-a456-426614174000"
 * };
 * @export
 * @type {DeleteProduct}
 */
export type DeleteProduct = Pick<Product, 'id'>;