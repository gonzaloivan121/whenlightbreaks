import { Service } from '@angular/core';

import { CreateProduct, DeleteProduct, Product, UpdateProduct } from '@app/models/product.model';

import { ProductID, ParseProductID } from '@app/types/product.type';

import { NotFoundError } from '@app/errors';

/**
 * Service for managing `Product` data.
 *
 * @export
 * @class ProductService
 */
@Service()
export class ProductService {
    /**
     * The list of `Product` instances.
     *
     * @private
     * @type {Product[]}
     * @memberof ProductService
     */
    private readonly products: Product[] = [
        {
            id: ParseProductID('d6ac2f70-ec95-4f16-a89f-1537bfe6c4cf'),
            name: 'Product 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            price: 9.99,
            imageUrl: 'https://placehold.co/768x1024',
            createdAt: new Date(),
        },
        {
            id: ParseProductID('a719e07e-6d78-413d-8307-8d6d81e5f7d1'),
            name: 'Product 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            price: 25,
            imageUrl: 'https://placehold.co/768x1024',
            createdAt: new Date(),
        },
        {
            id: ParseProductID('fe2225aa-9f15-4ed7-8eaa-65b97a9d6f3e'),
            name: 'Product 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            price: 99.99,
            imageUrl: 'https://placehold.co/768x1024',
            createdAt: new Date(),
        },
    ];

    /**
     * Creates a new `Product` instance and adds it to the list of products.
     *
     * @param {CreateProduct} createProduct - The `CreateProduct` object containing the data for the new `Product` instance.
     * @returns {Promise<Product>} A promise that resolves with the newly created `Product` instance.
     * @memberof ProductService
     */
    public CreateProduct(createProduct: CreateProduct): Promise<Product> {
        return new Promise<Product>((resolve) => {
            const product: Product = {
                id: ParseProductID(crypto.randomUUID()),
                name: createProduct.name,
                description: createProduct.description,
                price: createProduct.price,
                imageUrl: createProduct.imageUrl,
                createdAt: new Date(),
            };

            this.products.push(product);
            resolve(product);
        });
    }

    /**
     * Retrieves a list of all `Product` instances.
     *
     * @returns {Promise<Product[]>} A promise that resolves with the list of all `Product` instances.
     * @memberof ProductService
     */
    public GetProducts(): Promise<Product[]> {
        return new Promise<Product[]>((resolve) => {
            resolve(this.products);
        });
    }

    /**
     * Retrieves a `Product` instance by its unique identifier.
     *
     * @param {ProductID} id - The unique identifier of the `Product` instance to retrieve.
     * @throws {NotFoundError} If the `Product` instance with the specified `id` does not exist.
     * @returns {Promise<Product>} A promise that resolves with the `Product` instance.
     * @memberof ProductService
     */
    public GetProductById(id: ProductID): Promise<Product> {
        return new Promise<Product>((resolve, reject) => {
            const product = this.FindProductById(id);

            if (!product) {
                reject(new NotFoundError(`Product with id '${id}' not found.`));
                return;
            }

            resolve(product);
        });
    }

    /**
     * Updates an existing `Product` instance with new data.
     *
     * @param {UpdateProduct} updateProduct - The `UpdateProduct` object containing the updated data of the `Product` instance to update.
     * @throws {NotFoundError} If the `Product` instance with the specified `id` does not exist.
     * @returns {Promise<Product>} A promise that resolves with the updated `Product` instance.
     * @memberof ProductService
     */
    public UpdateProduct(updateProduct: UpdateProduct): Promise<Product> {
        return new Promise<Product>((resolve, reject) => {
            const product = this.FindProductById(updateProduct.id);

            if (!product) {
                reject(new NotFoundError(`Product with id '${updateProduct.id}' not found.`));
                return;
            }

            if (updateProduct.name !== undefined) {
                product.name = updateProduct.name;
            }

            if (updateProduct.description !== undefined) {
                product.description = updateProduct.description;
            }

            if (updateProduct.price !== undefined) {
                product.price = updateProduct.price;
            }

            if (updateProduct.imageUrl !== undefined) {
                product.imageUrl = updateProduct.imageUrl;
            }

            product.updatedAt = new Date();

            resolve(product);
        });
    }

    /**
     * Deletes an existing `Product` instance.
     *
     * @param {DeleteProduct} deleteProduct - The `DeleteProduct` object containing the unique identifier of the `Product` instance to delete.
     * @throws {NotFoundError} If the `Product` instance with the specified `id` does not exist.
     * @returns {Promise<void>} A promise that resolves when the `Product` instance is deleted.
     * @memberof ProductService
     */
    public DeleteProduct(deleteProduct: DeleteProduct): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const index = this.FindProductIndexById(deleteProduct.id);

            if (index === -1) {
                reject(new NotFoundError(`Product with id '${deleteProduct.id}' not found.`));
                return;
            }

            this.products.splice(index, 1);
            resolve();
        });
    }

    /**
     * Finds a `Product` instance by its unique identifier.
     *
     * @private
     * @param {ProductID} id - The unique identifier of the `Product` instance to find.
     * @returns {Product | undefined} The `Product` instance if found, otherwise `undefined`.
     * @memberof ProductService
     */
    private FindProductById(id: ProductID): Product | undefined {
        return this.products.find((product) => product.id === id);
    }

    /**
     * Finds the index of a `Product` instance by its unique identifier.
     *
     * @private
     * @param {ProductID} id - The unique identifier of the `Product` instance to find.
     * @returns {number} The index of the `Product` instance if found, otherwise `-1`.
     * @memberof ProductService
     */
    private FindProductIndexById(id: ProductID): number {
        return this.products.findIndex((product) => product.id === id);
    }
}
