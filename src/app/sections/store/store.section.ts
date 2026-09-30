import { Component, computed, inject, resource } from '@angular/core';

import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from '@components/title/title.component';
import { ProductComponent } from '@components/product/product.component';

import { ProductService } from '@app/services/product/product.service';

@Component({
    selector: 'store-section',
    imports: [ContainerComponent, TitleComponent, ProductComponent],
    templateUrl: './store.section.html',
    styleUrl: './store.section.css',
})
export class StoreSection {
    private readonly productService: ProductService = inject(ProductService);

    productsResource = resource({
        loader: () => this.productService.GetProducts()
    });

    hasProducts = computed(() => this.productsResource.hasValue());
    products = computed(() => this.productsResource.value());
}
