import { Component, inject, input, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

import { ContainerComponent } from '@components/container/container.component';
import { TitleComponent } from '@components/title/title.component';
import { ButtonComponent } from '@components/button/button.component';

import { ProductService } from '@services/product/product.service';

import { ProductID } from '@app/types/product.type';

@Component({
    selector: 'product-section',
    imports: [ContainerComponent, TitleComponent, CurrencyPipe, ButtonComponent],
    templateUrl: './product.section.html',
    styleUrl: './product.section.css',
})
export class ProductSection {
    title = signal<string>('Product');

    private readonly router = inject(Router);
    private readonly productService: ProductService = inject(ProductService);

    productId = input.required<ProductID>();

    productSignal = toSignal(
        toObservable(this.productId).pipe(
            switchMap((productId) => this.productService.GetProductById(productId)),
        ),
    );

    /**
     * Adds the current `Product` to the shopping cart.
     *
     * @memberof ProductSection
     */
    AddToCart() {
        console.log(this.productSignal());
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
