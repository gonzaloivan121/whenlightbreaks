import { Component, computed, inject, input, resource, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

import { NgIcon } from '@ng-icons/core';

import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from '@components/title/title.component';
import { ButtonComponent } from '@components/button/button.component';

import { ProductService } from '@services/product/product.service';

import { ProductID } from '@app/types/product.type';

@Component({
    selector: 'product-section',
    imports: [ContainerComponent, TitleComponent, CurrencyPipe, ButtonComponent, NgIcon],
    templateUrl: './product.section.html',
    styleUrl: './product.section.css',
})
export class ProductSection {
    title = signal<string>('Product');
    
    private readonly router = inject(Router);
    private readonly productService: ProductService = inject(ProductService);

    productId = input.required<ProductID>();

    productResource = resource({
        loader: () => this.productService.GetProductById(this.productId()),
    });

    hasProduct = computed(() => this.productResource.hasValue());
    product = computed(() => this.productResource.value());

    /**
     * Adds the current `Product` to the shopping cart.
     *
     * @memberof ProductSection
     */
    AddToCart() {
        console.log(this.product());
    }

    /**
     * Navigates to the home page.
     *
     * @memberof ProductSection
     */
    GoHome(): void {
        this.router.navigate(['/']);
    }

    /**
     * Navigates to the store page.
     *
     * @memberof ProductSection
     */
    GoToStore(): void {
        this.router.navigate(['/store']);
    }
}
