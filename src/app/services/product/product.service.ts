import { inject, Service } from '@angular/core';

import { CreateProduct, DeleteProduct, Product, UpdateProduct } from '@models/product.model';

import { ProductID } from '@app/types/product.type';

import { ApiService, EndpointRoute } from '@services/api/api.service';

/**
 * Service for managing `Product` data.
 *
 * @export
 * @class ProductService
 */
@Service()
export class ProductService {
    /**
     * The API service to request and post data from.
     *
     * @private
     * @type {ApiService}
     * @memberof SongService
     */
    private readonly apiService: ApiService = inject(ApiService);

    /**
     * Creates a new `Product` instance and adds it to the list of products.
     *
     * @param {CreateProduct} createProduct - The `CreateProduct` object containing the data for the new `Product` instance.
     * @memberof ProductService
     */
    public CreateProduct(createProduct: CreateProduct) {
        return this.apiService.Create<Product>(EndpointRoute.Product, createProduct);
    }

    /**
     * Retrieves a list of all `Product` instances.
     *
     * @memberof ProductService
     */
    public GetProducts() {
        return this.apiService.Get<Product[]>(EndpointRoute.Product);
    }

    /**
     * Retrieves a `Product` instance by its unique identifier.
     *
     * @param {ProductID} id - The unique identifier of the `Product` instance to retrieve.
     * @memberof ProductService
     */
    public GetProductById(id: ProductID){
        return this.apiService.GetById<Product>(EndpointRoute.Product, id);
    }

    /**
     * Updates an existing `Product` instance with new data.
     *
     * @param {UpdateProduct} updateProduct - The `UpdateProduct` object containing the updated data of the `Product` instance to update.
     * @memberof ProductService
     */
    public UpdateProduct(updateProduct: UpdateProduct){
        return this.apiService.Update<Product>(
            EndpointRoute.Product,
            updateProduct.id,
            updateProduct,
        );
    }

    /**
     * Deletes an existing `Product` instance.
     *
     * @param {DeleteProduct} deleteProduct - The `DeleteProduct` object containing the unique identifier of the `Product` instance to delete.
     * @memberof ProductService
     */
    public DeleteProduct(deleteProduct: DeleteProduct) {
        return this.apiService.Delete(EndpointRoute.Product, deleteProduct.id);
    }
}
