import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroComponent } from '@components/hero/hero.component';

import { ProductSection } from '@sections/product/product.section';

import { ParseProductID, ProductID } from '@app/types/product.type';

@Component({
    selector: 'product-page',
    imports: [HeroComponent, ProductSection],
    templateUrl: './product.page.html',
    styleUrl: './product.page.css',
})
export class ProductPage {
    readonly productId: ProductID;

    private route = inject(ActivatedRoute);

    constructor() {
        const productId = this.route.snapshot.paramMap.get('id') ?? '';
        this.productId = ParseProductID(productId);
    }
}
