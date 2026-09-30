import { Component, computed, inject, input, resource } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ContainerComponent } from '@app/components/container/container.component';
import { TitleComponent } from '@app/components/title/title.component';

import { ProductService } from '@app/services/product/product.service';

import { ProductID } from '@app/types/product.type';
import { ButtonComponent } from '@app/components/button/button.component';

@Component({
    selector: 'product-section',
    imports: [ContainerComponent, TitleComponent, CurrencyPipe, ButtonComponent],
    templateUrl: './product.section.html',
    styleUrl: './product.section.css',
})
export class ProductSection {
    private readonly productService: ProductService = inject(ProductService);

    productId = input.required<ProductID>();

    productResource = resource({
        loader: () => this.productService.GetProductById(this.productId())
    });

    hasProduct = computed(() => this.productResource.hasValue());
    product = computed(() => this.productResource.value());

    AddToCart() {
        console.log(this.product());
    }
}
